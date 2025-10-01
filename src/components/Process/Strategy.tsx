import React from 'react'
import DecorativeGradient from '../../assets/svgs/DecorativeGradient'

export default function Strategy() {
  return (
    <div className="relative w-[1000px] h-[500px] mx-auto my-20 group">
      {/* Main frame with radial gradient background */}
      <div
        className="w-full h-full rounded-[40px] relative overflow-hidden"
        style={{
          background: 'radial-gradient(72.32% 44% at 51.71% 0%, rgba(129, 187, 255, 0.3) 0%, rgba(25, 25, 25, 0) 100%)'
        }}
      >
        {/* Decorative gradient element */}
        <div className="absolute bottom-0 left-0 w-full group-hover:opacity-100 opacity-0 transition-opacity duration-1000">
          <DecorativeGradient width="100%" height="96" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-start justify-between px-12 pt-12 pb-2">
          <p className="text-[32px] font-semibold">Strategy and Blueprint</p>
          <p className="text-[40px] font-thin">02</p>
        </div>
        <p className="relative z-10 text-[18px] font-thin px-12 text-left max-w-[600px]">Turning insights into a strategic framework. We design the system before we design the pixels.</p>
      </div>
    </div>
  )
}
