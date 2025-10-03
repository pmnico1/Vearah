import * as THREE from 'three'
import React, { Suspense, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { PerspectiveCamera, Environment, MeshDistortMaterial } from '@react-three/drei'


export default function Scene() {
  const sphere = useRef<THREE.Mesh>(null)
  const light = useRef<THREE.PointLight>(null)

  // Make the bubble float
  useFrame((state) => {
    if (light.current) {
      light.current.position.x = state.mouse.x * 20
      light.current.position.y = state.mouse.y * 20
    }
    if (sphere.current) {
      sphere.current.position.x = THREE.MathUtils.lerp(sphere.current.position.x, 0, 0.2)
      sphere.current.position.y = THREE.MathUtils.lerp(
        sphere.current.position.y,
        Math.sin(state.clock.elapsedTime / 1.5) / 6,
        0.2
      )
    }
  })

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={75}>
        <ambientLight intensity={1} />
        <pointLight ref={light} position-z={-15} intensity={0.4} color="#6B69F8" />
      </PerspectiveCamera>
      <Suspense fallback={null}>
        <mesh
          ref={sphere}
          scale={1}
        >
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial
            color={'#1A1919'}
            envMapIntensity={1}
            clearcoat={0.04}
            clearcoatRoughness={0}
            metalness={0.1}
          />
        </mesh>
        <Environment preset="sunset" />
      </Suspense>
    </>
  )
}