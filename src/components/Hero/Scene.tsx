import * as THREE from 'three'
import React, { Suspense, useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { PerspectiveCamera, Environment, MeshDistortMaterial } from '@react-three/drei'

export default function Scene() {
  const sphere = useRef<THREE.Mesh>(null)
  const light = useRef<THREE.PointLight>(null)
  const [hovered, setHovered] = useState<boolean>(false)

  // Change cursor on hovered state
  useEffect(() => {
    document.body.style.cursor = hovered ? (
      `url('data:image/svg+xml;base64,${btoa(
        '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="10" fill="#7DEC83"/></svg>'
      )}'), auto`) : 'auto'
  }, [hovered])

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
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
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