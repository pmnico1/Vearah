'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    // Set initial state - different directions
    gsap.set(headingRef.current, {
      opacity: 0,
      y: -100
    })

    const buttons = buttonsRef.current?.children
    if (buttons) {
      gsap.set(buttons[0], { opacity: 0, x: -100 })
      gsap.set(buttons[1], { opacity: 0, y: -100 })
      gsap.set(buttons[2], { opacity: 0, x: 100 })
    }

    gsap.set(textRef.current, {
      opacity: 0,
      y: 100
    })

    // Animate heading from top
    gsap.to(headingRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "elastic.out(1, 0.5)",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    })

    // Animate buttons from different directions
    if (buttons) {
      gsap.to(buttons[0], {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      })
      gsap.to(buttons[1], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      })
      gsap.to(buttons[2], {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.4,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      })
    }

    // Animate description text from bottom
    gsap.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div>
      <div ref={sectionRef} className="py-40 flex flex-col items-center justify-center">
        {/* VEARAH Branding */}
        <h1
          ref={headingRef}
          className="uppercase font-bold tracking-[0.3em] text-center mb-2 md:mb-16
          text-transparent bg-clip-text
          bg-[linear-gradient(180deg,#ffffff_-14.79%,rgba(1,1,1,0)_93.33%)] text-[60px]
          md:text-[100px] lg:text-[160px] xl:text-[200px] leading-40 md:leading-[240px]
          flex-none z-[1]"
        >
          VEARAH
        </h1>

        {/* Three Icon Buttons */}
        <div ref={buttonsRef} className="flex gap-5 mb-10 md:mb-20">
          {[1, 2, 3].map((item) => (
            <button
              key={item}
              className="bg-[#111010] rounded-lg md:rounded-[20px] flex items-center justify-center p-4 md:p-10 relative"
            >
              {/* send (hidden) */}
              <div className="hidden w-8 h-8" aria-hidden="true" />

              {/* messages */}
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="white"
                aria-hidden="true"
              >
                <path d="M20 2H4a2 2 0 00-2 2v14l4-3h14a2 2 0 002-2V4a2 2 0 00-2-2z" />
                <circle cx="7" cy="10" r="1.25" />
                <circle cx="12" cy="10" r="1.25" />
                <circle cx="17" cy="10" r="1.25" />
              </svg>
            </button>
          ))}
        </div>

        {/* Description Text */}
        <div ref={textRef} className="text-center max-w-4xl p-4">
          <p className="text-base md:text-xl leading-relaxed">
            We are not just a design and tech agency, we are a future-
            <br className='hidden md:block' />
            building partner. Where creativity meets intelligence, and every
            <br className='hidden md:block' />
            product becomes a story worth experiencing.
          </p>
        </div>
      </div>
      <Image src="/footer.png" alt="footer" width={1900} height={300} className='w-full' />
    </div>
  )
}
