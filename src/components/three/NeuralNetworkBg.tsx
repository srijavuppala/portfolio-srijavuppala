/**
 * NeuralNetworkBg — animated 3D particle constellation for Hero section.
 *
 * Architecture follows ECS-inspired patterns (from Nice-Wolf-Studio/claude-skills-threejs-ecs-ts):
 *  - Entities   : particles (index i)
 *  - Components : typed Float32Array stores (positions, velocities)
 *  - Systems    : movement, connection, parallax — all run inside useFrame
 *
 * Performance:
 *  - Pre-allocated buffers (zero GC in the hot loop)
 *  - Adaptive particle count (fewer on mobile)
 *  - dpr clamped to [1, 1.5]
 *  - antialias disabled
 */
import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// ─── constants ────────────────────────────────────────────────────────────────
const AREA = 20;               // world units wide/tall
const DEPTH = 6;               // z spread
const CONNECT_DIST = 3.2;      // connection threshold (world units)
const CONNECT_DIST_SQ = CONNECT_DIST * CONNECT_DIST;

// primary color: teal hsl(184 65% 22%) ≈ #135f63
const PRIMARY = '#135f63';

// ─── helpers ──────────────────────────────────────────────────────────────────
function getParticleCount(): number {
  if (typeof window === 'undefined') return 60;
  return window.innerWidth < 768 ? 32 : 68;
}

// ─── ParticleSystem component ─────────────────────────────────────────────────
function ParticleSystem({ count }: { count: number }) {
  const groupRef  = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef  = useRef<THREE.LineSegments>(null);
  const mouse     = useRef({ x: 0, y: 0 });

  // ── Component stores (ECS flat arrays) ──────────────────────────────────
  const { positions, velocities, lineBuffer, maxPairs } = useMemo(() => {
    const positions  = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0]  = (Math.random() - 0.5) * AREA;
      positions[i * 3 + 1]  = (Math.random() - 0.5) * AREA;
      positions[i * 3 + 2]  = (Math.random() - 0.5) * DEPTH;
      velocities[i * 3 + 0] = (Math.random() - 0.5) * 0.013;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.013;
      velocities[i * 3 + 2] = 0;
    }

    const maxPairs  = (count * (count - 1)) / 2;
    const lineBuffer = new Float32Array(maxPairs * 6); // 2 vertices × 3 floats per pair
    return { positions, velocities, lineBuffer, maxPairs };
  }, [count]);

  // ── Mouse listener ───────────────────────────────────────────────────────
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x =  (e.clientX / window.innerWidth  - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  // ── Main systems loop ─────────────────────────────────────────────────────
  useFrame((state) => {
    const pts   = pointsRef.current;
    const lines = linesRef.current;
    const group = groupRef.current;
    if (!pts || !lines || !group) return;

    const pos  = pts.geometry.attributes.position.array as Float32Array;
    const half = AREA / 2;

    // Movement system — advance each particle, wrap at boundary
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 0] += velocities[i * 3 + 0];
      pos[i * 3 + 1] += velocities[i * 3 + 1];
      if (pos[i * 3 + 0] >  half) pos[i * 3 + 0] = -half;
      if (pos[i * 3 + 0] < -half) pos[i * 3 + 0] =  half;
      if (pos[i * 3 + 1] >  half) pos[i * 3 + 1] = -half;
      if (pos[i * 3 + 1] < -half) pos[i * 3 + 1] =  half;
    }
    pts.geometry.attributes.position.needsUpdate = true;

    // Connection system — O(n²) pairwise check; n ≤ 68 so ~2 300 pairs max
    let lineIdx = 0;
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = pos[i * 3] - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        if (dx * dx + dy * dy < CONNECT_DIST_SQ) {
          lineBuffer[lineIdx++] = pos[i * 3];
          lineBuffer[lineIdx++] = pos[i * 3 + 1];
          lineBuffer[lineIdx++] = pos[i * 3 + 2];
          lineBuffer[lineIdx++] = pos[j * 3];
          lineBuffer[lineIdx++] = pos[j * 3 + 1];
          lineBuffer[lineIdx++] = pos[j * 3 + 2];
        }
      }
    }

    const lineGeo = lines.geometry;
    (lineGeo.attributes.position.array as Float32Array).set(lineBuffer);
    lineGeo.attributes.position.needsUpdate = true;
    lineGeo.setDrawRange(0, lineIdx / 3); // vertices (not pairs)

    // Parallax + slow drift system
    const t = state.clock.elapsedTime;
    group.rotation.y = t * 0.022 + mouse.current.x * 0.055;
    group.rotation.x = t * 0.008 + mouse.current.y * 0.032;
  });

  return (
    <group ref={groupRef}>
      {/* Particle dots */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.1}
          color={PRIMARY}
          transparent
          opacity={0.55}
          sizeAttenuation
        />
      </points>

      {/* Connection lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={maxPairs * 2}
            array={lineBuffer}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color={PRIMARY} transparent opacity={0.13} />
      </lineSegments>
    </group>
  );
}

// ─── exported component ───────────────────────────────────────────────────────
export default function NeuralNetworkBg() {
  const count = getParticleCount();
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 52 }}
        gl={{ antialias: false, alpha: true }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent' }}
      >
        <ParticleSystem count={count} />
      </Canvas>
    </div>
  );
}
