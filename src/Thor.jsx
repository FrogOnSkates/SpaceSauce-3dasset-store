import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Thor(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/thor.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="SKM_Thor_True_Accelerator"
          castShadow
          receiveShadow
          geometry={nodes.SKM_Thor_True_Accelerator.geometry}
          material={materials['Material #26']}
          position={[0.208, 0, -0.063]}
          scale={0.01}
        />
        <mesh
          name="SKM_Thor_True_Body"
          castShadow
          receiveShadow
          geometry={nodes.SKM_Thor_True_Body.geometry}
          material={materials['Material #28']}
          position={[-0.057, 0, -0.005]}
          scale={0.01}
        />
        <mesh
          name="SKM_Thor_True_Horns"
          castShadow
          receiveShadow
          geometry={nodes.SKM_Thor_True_Horns.geometry}
          material={materials['Material #27']}
          position={[0.208, 0, -0.063]}
          scale={0.01}
        />
        <mesh
          name="SKM_Thor_True_Turret"
          castShadow
          receiveShadow
          geometry={nodes.SKM_Thor_True_Turret.geometry}
          material={materials['Material #28']}
          position={[-0.057, 0, -0.005]}
          scale={0.01}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/thor.glb')