
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Genshin(props) {
  const { nodes, materials } = useGLTF('/models/genshin_impact.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[0.334, -0.209, -0.452]}>
        <group rotation={[-Math.PI, 0, 0]} scale={0.01}>
          <group position={[0, 0, -0.155]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['songlai_l_02_-_Default_0'].geometry}
              material={materials['02_-_Default']}
              position={[0, 0, 0.155]}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/genshin_impact.glb')

