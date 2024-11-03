// jade_sword.jsx
import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export default function JadeSword(props) {
  const { nodes, materials } = useGLTF('/models/jade_sword.glb');
  const groupRef = useRef();

  useEffect(() => {
    console.log('Jade Sword Nodes:', nodes);
    console.log('Jade Sword Materials:', materials);

    const model = nodes?.JadeSword || Object.values(nodes)[0];
    if (model) {
      const box = new THREE.Box3().setFromObject(model);
      console.log('Model Bounding Box:', box);
    }
  }, [nodes, materials]);

  return (
    <group {...props} dispose={null}>
      <group
        ref={groupRef}
        position={[0, -1, 0]} // Adjusts the model's position
        scale={[0.2, 0.2, 0.2]} // Adjusts the model's size
        rotation={[Math.PI / 4, 0, Math.PI / 6]} // Adjusts the model's rotation for a different view
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface10_MAT_Lowpoly_0.geometry}
          material={materials.MAT_Lowpoly}
          rotation={[Math.PI / 2, 0, 0]} // You can adjust this rotation too if needed
        />
      </group>
    </group>
  );
}

useGLTF.preload('/models/jade_sword.glb');
