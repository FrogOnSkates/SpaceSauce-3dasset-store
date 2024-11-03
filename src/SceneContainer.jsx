import React from 'react';
import { OrbitControls, Environment } from '@react-three/drei';

export function SceneContainer({ children }) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1.5} castShadow />
      <Environment preset="sunset" background />
      <OrbitControls />
      {children}
    </>
  );
}
