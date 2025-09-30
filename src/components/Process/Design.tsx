import React from 'react'
import DecorativeGradient from '../../assets/svgs/DecorativeGradient'

export default function Strategy() {
  return (
    <div className="relative w-[1000px] h-[500px] mx-auto">
      {/* Main frame with radial gradient background */}
      <div
        className="w-full h-full rounded-[40px] relative overflow-hidden"
        style={{
          background: 'radial-gradient(72.32% 44% at 51.71% 0%, rgba(129, 187, 255, 0.3) 0%, rgba(25, 25, 25, 0) 100%)'
        }}
      >

        {/* Content */}
        <div className="relative z-10 flex items-start justify-between px-12 pt-12 pb-2">
          <p className="text-[32px] font-semibold">Design and Experience</p>
          <p className="text-[40px] font-thin">03</p>
        </div>
        <p className="relative z-10 text-[18px] font-thin px-12 text-left max-w-[600px]">Crafting intuitive, beautiful, and conversion-driven experiences. This is where strategy meets creativity.</p>
      </div>
    </div>
  )
}
