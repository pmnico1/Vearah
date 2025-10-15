'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProcessCard from './ProcessCard'
import { processSteps } from './data'

gsap.registerPlugin(ScrollTrigger)

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!containerRef.current) return

    const cards = cardsRef.current.filter(Boolean)
    if (cards.length === 0) return

    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())

    // Set up the sticky container
    const stickyContainer = containerRef.current.querySelector('.sticky-container')
    if (!stickyContainer) return

    // Configure sticky container
    gsap.set(stickyContainer, {
      position: 'sticky',
      top: '60%',
      transform: 'translateY(-50%)',
      zIndex: 10
    })

    // Initial setup for all cards - stack them
    cards.forEach((card, index) => {
      if (!card) return

      gsap.set(card, {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        scale: 0.8,
        zIndex: cards.length - index,
        opacity: index === 0 ? 1 : 0,
        rotationY: 0,
        rotationX: 0,
        transformOrigin: 'center center'
      })
    })

    // Create a single ScrollTrigger for the entire animation
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress
        const totalCards = cards.length
        const cardProgress = progress * totalCards

        cards.forEach((card, index) => {
          if (!card) return

          const isEven = index % 2 === 0
          const cardStart = index
          const cardEnd = index + 1

          if (cardProgress >= cardStart && cardProgress <= cardEnd) {
            // Card is in focus
            gsap.set(card, {
              scale: 1,
              opacity: 1,
              rotationY: 0,
              rotationX: 0,
              zIndex: totalCards + 1
            })
          } else if (cardProgress < cardStart) {
            // Card hasn't appeared yet
            gsap.set(card, {
              scale: 0.8,
              opacity: 0,
              rotationY: isEven ? -15 : 15,
              rotationX: 5,
              zIndex: totalCards - index
            })
          } else {
            // Card has passed
            const fadeProgress = Math.max(0, cardProgress - cardEnd)
            gsap.set(card, {
              scale: 1 - (fadeProgress * 0.2),
              opacity: Math.max(0, 1 - fadeProgress),
              rotationY: isEven ? -10 * fadeProgress : 10 * fadeProgress,
              rotationX: 5 * fadeProgress,
              zIndex: totalCards - index
            })
          }
        })
      }
    })

    // Add hover effects
    cards.forEach((card) => {
      if (!card) return

      const handleMouseEnter = () => {
        gsap.to(card, {
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out'
        })
      }

      const handleMouseLeave = () => {
        gsap.to(card, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        })
      }

      card.addEventListener('mouseenter', handleMouseEnter)
      card.addEventListener('mouseleave', handleMouseLeave)
    })

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className='relative w-full min-h-[500vh] flex flex-col justify-start items-center text-center my-40'
    >
      {/* Header Section */}
      <div className='sticky top-0 z-20  w-full py-20 -translate-y-10'>
        <p className='text-white/60 text-lg mb-4'>Our Process</p>
        <p className='text-[40px]/[1.2] max-w-[500px] mx-auto px-10 text-white line-clamp-3'>
          We created Vearah to be naturally ahead
        </p>
        <p className='text-[20px] max-w-[600px] mx-auto py-5 text-white/80'>
          We created Vearah to help visionary companies design the future. We don`t just make things look good we craft clarity, trust, and growth into every product.
        </p>
      </div>

      {/* Sticky Container for Cards */}
      <div className='sticky-container pt-40 relative w-full h-screen flex items-center justify-center'>
        {processSteps.map((step, index) => (
          <div
            key={step.stepNumber}
            ref={(el) => {
              cardsRef.current[index] = el
            }}
            className='card-wrapper'
          >
            <ProcessCard
              title={step.title}
              description={step.description}
              stepNumber={step.stepNumber}
              imageSrc={step.imageSrc}
              imageAlt={step.imageAlt}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
