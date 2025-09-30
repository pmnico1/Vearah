'use client'
import React from 'react'
import FallingText from './FallingText'
import DecorativeGradient from '@/assets/svgs/DecorativeGradient'

export default function Discover() {
  return (
    <div className="relative max-w-[1000px] h-[500px] w-full mx-auto my-10">

      <div
        className="w-full h-full rounded-[40px] relative overflow-hidden"
        style={{
          background: 'radial-gradient(72.32% 44% at 51.71% 0%, rgba(129, 187, 255, 0.3) 0%, rgba(25, 25, 25, 0) 100%)'
        }}
      >
        <div className="relative z-10 flex items-start justify-between px-12 pt-12 pb-2">
          <p className='text-[32px] font-semibold'>Discovery and Alignment</p>
          <p className='text-[40px] font-thin'>01</p>
        </div>
        <p className='text-[18px] font-thin px-12 text-left max-w-[600px]'>We begin by understanding your vision, challenges, and goals. This stage ensures alignment between your business needs and our creative/technical direction</p>
        <FallingText
          text={`React Bits is a library of animated and interactive React components designed to streamline UI development and simplify your workflow.`}
          highlightWords={["React", "Bits", "animated", "components", "simplify"]}
          trigger="hover"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.56}
          fontSize="2rem"
          mouseConstraintStiffness={0.9}
        />
        <div className="absolute bottom-0 left-0 w-full">
          <DecorativeGradient width="100%" height="96" />
        </div>
      </div>
    </div>
  )
}