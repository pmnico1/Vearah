'use client'

import React from 'react'
import Keyboard from './Keyboard'
import FloatingMenu from './FloatingMenu'
import Scene from './Scene'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export default function Hero() {
  return (
    <div className="min-h-screen relative flex items-center justify-center">
      <div className="w-full max-w-6xl">
        <h1 className="text-[24px] text-center text-white mb-5">
          How the story begins
        </h1>
        <div className='w-full h-full absolute -top-5 left-0'>
          <Canvas>
            <Scene />
            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>
        </div>
        <Keyboard />
        <div className='flex flex-row justify-center'>
          <FloatingMenu />
        </div>
      </div>
    </div>
  )
}
