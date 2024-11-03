import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function OldHammer(props) {
  const { nodes, materials } = useGLTF('/models/old_hammer.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.329, 0.375, -0.043]} rotation={[-1.667, -1.14, 0]} scale={0.06}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Hammer_low_TEX_Hammer_0.geometry}
          material={materials.TEX_Hammer}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/old_hammer.glb')

