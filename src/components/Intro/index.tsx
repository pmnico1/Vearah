'use client'
import React from 'react'
import ScrollReveal from './ScrollReveal'

export default function Intro() {
  return (
    <div className='px-10 md:px-32 my-60'>
      <ScrollReveal
        baseOpacity={0.2}
        enableBlur={true}
        baseRotation={0}
        blurStrength={10}
      >
        Every idea begins in the dark shapeless, silent, waiting. But a spark doesn’t come from nothing. It comes from fragments lines, circles, broken pieces that ask to be connected. The process of design is not seeing at once, but piecing light together.
      </ScrollReveal>
    </div>
  )
}
