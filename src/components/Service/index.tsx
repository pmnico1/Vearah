'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Service() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const textContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const textItems = textContainerRef.current?.children
    const section = sectionRef.current
    if (!textItems || !section) return

    // Set initial state - position items above and make them transparent
    gsap.set(textItems, {
      opacity: 0,
      y: -30
    })

    // Animate each item from top to bottom with stagger when section enters viewport
    gsap.to(textItems, {
      opacity: 1,
      y: 0,
      stagger: 0.15, // Delay between each item
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%", // Start animation when top of section is at 80% from top of viewport
        toggleActions: "play none none none"
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div ref={sectionRef} className="flex md:flex-row flex-col min-h-screen text-white mt-40 md:mt-0">
      {/* Left side - Card video background */}
      <div className="min-h-[300px] w-full md:w-1/2 relative overflow-hidden">
        <video
          src="/images/card.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Right side - Black background with text */}
      <div className="w-full md:w-1/2 bg-black flex flex-col justify-between px-16 py-20">
        <h2 className="text-lg font-bold text-right mb-12">
          Area of Specialization
        </h2>

        <div ref={textContainerRef} className="space-y-2 text-3xl md:text-[48px] text-zinc-500 ">
          <div className="hover:text-white transition-all duration-500">
            Research & Design
          </div>

          <div className="hover:text-white transition-all duration-500">
            Blockchain Technology
          </div>

          <div className="hover:text-white transition-all duration-500">
            SaaS | Fintech | eCommerce
          </div>

          <div className="hover:text-white transition-all duration-500">
            Mobile & Web Development
          </div>

          <div className="hover:text-white transition-all duration-500">
            Augmented Reality
          </div>

          <div className="hover:text-white transition-all duration-500">
            AI Development
          </div>
        </div>
      </div>
    </div>
  )
}
