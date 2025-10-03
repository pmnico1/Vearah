'use client'

import React from 'react'
import Keyboard from './Keyboard'
import FloatingMenu from './FloatingMenu'

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-6xl">
        <h1 className="text-[24px] text-center text-white mb-5">
          How the story begins
        </h1>
        <Keyboard />
        <div className='flex flex-row justify-center'>
          <FloatingMenu />
        </div>
      </div>
    </div>
  )
}
