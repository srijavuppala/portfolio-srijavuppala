import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import React, { Suspense } from 'react';

function Scene() {
  return (
    <mesh>
      <torusKnotGeometry args={[1, 0.3, 128, 16]} />
      <meshStandardMaterial
        color="#6366F1"
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
}

const ThreeAnimation = () => {
  return (
    <div className="absolute right-0 top-0 w-[400px] h-[400px] -z-10 opacity-50">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Scene />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={1}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeAnimation;