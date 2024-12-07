import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

export function BrainModel() {
  const meshRef = useRef<any>();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.distort = 0.3 + Math.sin(time) * 0.2;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 100]} scale={2}>
      <MeshDistortMaterial
        color="#4B9FE1"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
}