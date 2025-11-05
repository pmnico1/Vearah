'use client'

import Image from 'next/image'
import React, { useRef, useEffect } from 'react'
import { Projects } from './data'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Layout() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLParagraphElement>(null)
  const bannerRef = useRef<HTMLImageElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const title = titleRef.current
    const banner = bannerRef.current
    const subtitle = subtitleRef.current
    const description = descriptionRef.current
    const grid = gridRef.current
    const section = containerRef.current

    if (!section) return

    // Set initial states
    gsap.set([title, banner, subtitle, description], {
      opacity: 0,
      y: 30
    })

    // Animate title on mount
    gsap.to(title, {
      opacity: 1,
      y: 0,
      duration: 1.6,
      ease: 'power3.out'
    })

    // Animate banner image
    gsap.to(banner, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      delay: 0.2
    })

    // Animate subtitle and description
    gsap.to([subtitle, description], {
      opacity: 1,
      y: 0,
      duration: 1.6,
      ease: 'power2.out',
      stagger: 0.1,
      delay: 0.5
    })

    // Animate project cards on scroll
    const cards = grid?.children
    if (cards) {
      gsap.set(cards, {
        opacity: 0,
        y: 50,
        scale: 0.9
      })

      gsap.to(cards, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.6,
        ease: 'power2.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: grid,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div ref={containerRef} className='px-10 lg:px-50 py-20 lg:py-30'>
      <p ref={titleRef} className='text-[40px] lg:text-[64px] pb-10'>Lumo AI-Powered Learning Assistant</p>
      <Image
        ref={bannerRef}
        src={"/images/case-study/banner.jpg"}
        alt='lumo-ai assistant'
        className='border-0'
        width={1520}
        height={950}
      />
      <p ref={subtitleRef} className='text-[20px] lg:text-[40px] py-4'>Lumo - AI Learning Assistant</p>
      <p ref={descriptionRef} className='text-[16px] lg:text-[20px]'>A personalized AI-Powered Learning Assistant</p>
      <div className='h-[300px]' />
      <div ref={gridRef} className='grid grid-cols-1 lg:grid-cols-2 gap-15'>
        {
          Projects.map((project, index) => (
            <div key={index} className='w-full'>
              <div>
                <Image
                  src={project.image}
                  className='h-[650px] w-auto object-cover rounded-[20px] grayscale-0 hover:grayscale transition-all duration-1000'
                  width={1030}
                  height={850}
                  alt={project.title}
                />
              </div>
              <p className='text-[20px] lg:text-[40px] pt-15'>{project.title}</p>
              <p className='text-[16px] lg:text-[24px] pt-4'>{project.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
