import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export default function Banhammer(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/banhammer.glb'); // Ensure correct path

  useEffect(() => {
    console.log('Loaded nodes:', nodes);
    console.log('Loaded materials:', materials);

    if (group.current) {
      const box = new THREE.Box3().setFromObject(group.current);
      console.log('Bounding box:', box);
    }
  }, [nodes, materials]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0.73, -Math.PI]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <MeshComponent geometry={nodes.defaultMaterial.geometry} material={materials.head} />
          <MeshComponent geometry={nodes.defaultMaterial_1.geometry} material={materials.Handle} />
          <MeshComponent geometry={nodes.defaultMaterial_2.geometry} material={materials.Metal} />
        </group>
      </group>
    </group>
  );
}

function MeshComponent({ geometry, material }) {
  return <mesh castShadow receiveShadow geometry={geometry} material={material} />;
}

useGLTF.preload('/banhammer.glb'); // Preload the model
