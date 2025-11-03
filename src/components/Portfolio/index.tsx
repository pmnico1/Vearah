'use client'

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProcessCard from './ProcessCard'
import { Projects } from './data'

gsap.registerPlugin(ScrollTrigger)

export default function Portfolio() {
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
      className='relative w-full flex flex-col justify-start items-center text-center my-60 px-6 sm:px-10'
    >
      {/* Flowing stack: each card pins and layers above the previous */}
      <div className='relative w-full '>
        {Projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => {
              cardsRef.current[index] = el
            }}
            className={[
              // Each section takes a viewport height so the stack timing feels natural
              'min-h-[10vh] w-full',
              'flex items-center justify-center ',
              'mx-auto max-w-[1520px]',
              'will-change-transform'
            ].join(' ')}
          >
            <div className='w-full py-12 sm:py-16'>
              <ProcessCard
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                stepNumber={index + 1}
                imageSrc={project.image}
                imageAlt={project.subtitle}
                tag={project.tags}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
