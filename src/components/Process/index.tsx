'use client'

import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProcessCard from './ProcessCard'
import { processSteps } from './data'

gsap.registerPlugin(ScrollTrigger)

export default function Process() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useLayoutEffect(() => {
    const container = containerRef.current
    if (!container) return

    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(
        (el): el is HTMLDivElement => el !== null
      )

      cards.forEach((card, i) => {
        // Pre-style for performance and stacking order
        gsap.set(card, {
          zIndex: i + 1,
          willChange: 'transform',
          transform: 'translateZ(0)'
        })
        const endStr = (cards.length * 100 - 100 * (i + 1)) + '%'

        // Pin each card to stack vertically; no spacing so layers overlap
        ScrollTrigger.create({
          trigger: card,
          start: 'top top',
          end: endStr, // pin for one viewport height
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
          refreshPriority: i
        })
      })

      // Debounced refresh for responsive correctness
      let raf: number | null = null
      const onResize = () => {
        if (raf) cancelAnimationFrame(raf)
        raf = requestAnimationFrame(() => {
          ScrollTrigger.refresh()
        })
      }
      window.addEventListener('resize', onResize)

      return () => {
        window.removeEventListener('resize', onResize)
      }
    }, container)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className='relative w-full flex flex-col justify-start items-center text-center my-40'
    >
      {/* Header Section (sticks at top while stack occurs) */}
      <div className=' top-0 z-20 w-full py-20 -translate-y-10 bg-transparent'>
        <p className='text-[40px]/[1.2] max-w-[500px] mx-auto px-10 text-white'>
          We created Vearah to be naturally ahead
        </p>
        <p className='text-[20px] max-w-[600px] mx-auto py-5 text-white/80 px-10'>
          We created Vearah to help visionary companies design the future. We don`t just make things look good we craft clarity, trust, and growth into every product.
        </p>
      </div>

      <div className='h-24 sticky' />
      {/* Flowing stack: each card pins and layers above the previous */}
      <div className='relative w-full'>
        {processSteps.map((step, index) => (
          <div
            key={step.stepNumber}
            ref={(el) => {
              cardsRef.current[index] = el
            }}
            className={[
              // Each section takes a viewport height so the stack timing feels natural
              'min-h-[10vh] w-full',
              'flex items-center justify-center ',
              'px-6 sm:px-10',
              'mx-auto max-w-5xl',
              'will-change-transform'
            ].join(' ')}
          >
            <div className='w-full py-12 sm:py-16'>
              <ProcessCard
                title={step.title}
                description={step.description}
                stepNumber={step.stepNumber}
                imageSrc={step.imageSrc}
                imageAlt={step.imageAlt}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Normal page scroll resumes after the last card has stacked */}

    </div>
  )
}
