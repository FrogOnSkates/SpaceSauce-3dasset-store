import React, { forwardRef, useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const FloatingRock1 = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('/models/floating_rock_1.glb');
  const meshRef = useRef();

  return (
    <group ref={ref} {...props} dispose={null} scale={[0.15, 0.15, 0.15]}>
      <mesh
        ref={meshRef}
        geometry={nodes.Floating_rock_1001.geometry}
        material={materials['Material.013']}
      />
    </group>
  );
});

useGLTF.preload('/models/floating_rock_1.glb');

export default FloatingRock1;
