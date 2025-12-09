'use client'
import React from 'react'
import ScrollReveal from './ScrollReveal'

export default function Intro() {
  return (
    <div className='px-10 md:px-32 lg:px-[200px] md:my-30 my-20'>
      <ScrollReveal
        baseOpacity={0.2}
        enableBlur={true}
        baseRotation={3}
        blurStrength={10}
      >
        Vearah is a design and technology agency that bridges the gap between art and intelligence. We specialize in crafting seamless user experiences and engineering scalable systems powered by AI, blockchain, and modern development frameworks. Our mission is simple: to help companies design smarter, build faster, and grow stronger in an increasingly digital world.
      </ScrollReveal>
    </div>
  )
}
