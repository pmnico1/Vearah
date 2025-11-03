'use client'
import { useRef } from 'react'
import Image from 'next/image'

interface ProcessCardProps {
  title: string
  description: string
  subtitle: string
  stepNumber: number
  imageSrc: string
  imageAlt: string
  tag: Array<string>
}

export default function ProcessCard({
  title,
  subtitle,
  description,
  stepNumber,
  imageSrc,
  imageAlt,
  tag
}: ProcessCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={cardRef}
      className="relative h-[400px] md:h-[712px] w-full mx-auto group perspective-1000 "
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div
        className="w-full h-full flex justify-between rounded-[40px] relative overflow-hidden bg-[#010101]"
        style={{
          background: 'linear-gradient(360deg, #010101 0%, #171717 100%)',
        }}
      >
        <div
          ref={contentRef}
          className='w-2/5 flex flex-col justify-between items-start px-5 md:px-25 py-25'
        >
          <div className="relative z-10">
            <p className='text-2xl md:text-[32px] text-left text-white'>{title + ' - ' + subtitle}</p>
            <p className='text-base md:text-[18px] py-8 text-left max-w-[600px] text-white/80'>{description}</p>
            <div className='flex flex-wrap gap-2 justify-start'>
              {
                tag.map((item, index) => (
                  <p key={index} className='px-4 py-3 bg-black rounded-2xl'>{item}</p>
                ))
              }

            </div>
          </div>
          <p className='text-[40px] text-white/60'>{'0' + stepNumber}</p>
        </div>

        <div ref={imageRef} className='w-3/5 overflow-hidden rounded-l-[40px]'>
          <Image
            src={imageSrc}
            className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
            alt={imageAlt}
            width={1600}
            height={900}
          />
        </div>
      </div>
    </div>
  )
}
