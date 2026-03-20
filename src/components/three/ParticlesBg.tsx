/**
 * ParticlesBg — lightweight 3D floating-dot background.
 *
 * A simpler version of NeuralNetworkBg (no connection lines, slower drift).
 * Reusable across sections via props.
 *
 * ECS-inspired pattern:
 *  - Component stores : Float32Array positions + velocities
 *  - Update system    : runs in useFrame
 */
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface FloatingDotsProps {
  count: number;
  color: string;
  opacity: number;
  speed: number;
  area: number;
}

function FloatingDots({ count, color, opacity, speed, area }: FloatingDotsProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const groupRef  = useRef<THREE.Group>(null);

  const { positions, velocities } = useMemo(() => {
    const positions  = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0]  = (Math.random() - 0.5) * area;
      positions[i * 3 + 1]  = (Math.random() - 0.5) * area;
      positions[i * 3 + 2]  = (Math.random() - 0.5) * 4;
      velocities[i * 3 + 0] = (Math.random() - 0.5) * speed;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * speed;
      velocities[i * 3 + 2] = 0;
    }
    return { positions, velocities };
  }, [count, speed, area]);

  useFrame((state) => {
    const pts   = pointsRef.current;
    const group = groupRef.current;
    if (!pts || !group) return;

    const pos  = pts.geometry.attributes.position.array as Float32Array;
    const half = area / 2;

    for (let i = 0; i < count; i++) {
      pos[i * 3 + 0] += velocities[i * 3 + 0];
      pos[i * 3 + 1] += velocities[i * 3 + 1];
      if (pos[i * 3 + 0] >  half) pos[i * 3 + 0] = -half;
      if (pos[i * 3 + 0] < -half) pos[i * 3 + 0] =  half;
      if (pos[i * 3 + 1] >  half) pos[i * 3 + 1] = -half;
      if (pos[i * 3 + 1] < -half) pos[i * 3 + 1] =  half;
    }
    pts.geometry.attributes.position.needsUpdate = true;

    // Very slow passive drift
    group.rotation.y = state.clock.elapsedTime * 0.01;
    group.rotation.x = state.clock.elapsedTime * 0.006;
  });

  return (
    <group ref={groupRef}>
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
          size={0.07}
          color={color}
          transparent
          opacity={opacity}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

// ─── exported component ───────────────────────────────────────────────────────
interface ParticlesBgProps {
  /** Number of floating dots */
  count?: number;
  /** Three.js hex color string */
  color?: string;
  /** Overall opacity of the dots (0–1) */
  opacity?: number;
  /** Movement speed multiplier */
  speed?: number;
  /** World-space spread area */
  area?: number;
}

export default function ParticlesBg({
  count  = 40,
  color  = '#135f63',
  opacity = 0.3,
  speed  = 0.008,
  area   = 22,
}: ParticlesBgProps) {
  const mobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const actualCount = mobile ? Math.floor(count / 2) : count;

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 14], fov: 55 }}
        gl={{ antialias: false, alpha: true }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent' }}
      >
        <FloatingDots
          count={actualCount}
          color={color}
          opacity={opacity}
          speed={speed}
          area={area}
        />
      </Canvas>
    </div>
  );
}
