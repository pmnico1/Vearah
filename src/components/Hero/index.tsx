'use client'

import React from 'react'
import Keyboard from './Keyboard'
import FloatingMenu from './FloatingMenu'
import SplitText from '@/components/SplitText'
export default function Hero() {
  return (
    <div className="min-h-screen relative flex items-start justify-center">
      <div className="w-full max-w-6xl">
        <div className="text-[24px] text-center text-white mb-5 mt-[115px]" style={{ fontWeight: '400' }}>
          <SplitText
            text='How the story begins'
            duration={0.4}
            delay={200}
            delayT={1}
          />
        </div>
        <Keyboard />
        <div className='flex flex-row justify-center'>
          <FloatingMenu />
        </div>
        {/* <div className="absolute bottom-0 left-0 w-full  opacity-50">
          <DecorativeGradient width="100%" height="96" />
        </div> */}
      </div>
    </div>
  )
}
