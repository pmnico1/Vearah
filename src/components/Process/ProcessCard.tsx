'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import DecorativeGradient from '@/assets/svgs/DecorativeGradient'

interface ProcessCardProps {
  title: string
  description: string
  stepNumber: string
  imageSrc: string
  imageAlt: string
}

export default function ProcessCard({
  title,
  description,
  stepNumber,
  imageSrc,
  imageAlt
}: ProcessCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={cardRef}
      className="relative max-w-[1000px] h-[400px] md:h-[500px] w-full mx-auto group perspective-1000 "
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div
        className="w-full h-full flex flex-col md:flex-row justify-between rounded-[40px] relative overflow-hidden border-t-2 bg-[#010101] border-[#171e25] border-b backdrop-blur-2xl"
        style={{
          background: 'radial-gradient(55.32% 44% at 51.71% 0%, rgba(129, 187, 255, 0.3) 0%, rgba(0, 0, 0, 0) 100%)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)'
        }}
      >
        <div
          ref={contentRef}
          className='md:w-1/2 w-full flex flex-col justify-between items-start px-5 md:px-12 pt-12 pb-2'
        >
          <div className="relative z-10">
            <p className='text-2xl md:text-[32px] text-left text-white'>{title}</p>
            <p className='text-base md:text-[18px] py-8 text-left max-w-[600px] text-white/80'>{description}</p>
          </div>
          <p className='md:block hidden text-[40px] text-white/60 '>{stepNumber}</p>
          <p className='md:hidden block absolute right-3 top-3 font-extralight  text-[40px] text-white/60'>{stepNumber}</p>
        </div>

        <div ref={imageRef} className='md:w-1/2 w-full overflow-hidden  p-4 md:p-0'>
          <Image
            src={imageSrc}
            className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 rounded-l-[40px] rounded-r-[40px] md:rounded-r-none '
            alt={imageAlt}
            width={500}
            height={500}
          />
        </div>

        <div className="absolute bottom-0 left-0 w-full group-hover:opacity-100 opacity-0 transition-opacity duration-1000">
          <DecorativeGradient width="100%" height="96" />
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div
            className="absolute inset-0 rounded-[40px]"
            style={{
              background: 'radial-gradient(circle at center, rgba(129, 187, 255, 0.1) 0%, transparent 70%)',
              filter: 'blur(20px)'
            }}
          />
        </div>
      </div>
    </div>
  )
}
