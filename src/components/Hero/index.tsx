'use client'

import React from 'react'
import Keyboard from './Keyboard'
import FloatingMenu from './FloatingMenu'

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center my-40">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4">
            Interactive Keyboard
          </h1>
          <p className="text-xl text-gray-300">
            Click the keys to see them light up and build your message
          </p>
        </div>
        <Keyboard />
        <div className='flex flex-row justify-center'>
          <FloatingMenu />
        </div>
      </div>
    </div>
  )
}
