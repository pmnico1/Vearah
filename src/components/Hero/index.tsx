'use client'

import React, { useRef } from 'react'
import FloatingMenu from './FloatingMenu'
import SplitText from '@/components/SplitText'
import Image from 'next/image'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Hero() {
  const groupRef = useRef<HTMLDivElement | null>(null)
  const leftImgRef = useRef<HTMLDivElement | null>(null)
  const rightImgRef = useRef<HTMLDivElement | null>(null)
  const textRef = useRef<HTMLParagraphElement | null>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 3 }) // 3s delay
    gsap.set([groupRef.current, leftImgRef.current, rightImgRef.current, textRef.current], { opacity: 0, y: 20 })

    tl.to(groupRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' })
      .to([leftImgRef.current, rightImgRef.current], { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', stagger: 0.1 }, '-=0.2')
      .to(textRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.1')
  }, [])

  return (
    <div className="min-h-screen relative flex items-start justify-center mb-96">
      <div className="w-full max-w-[500px]">
        <div className="text-[24px] text-center text-white mb-5 mt-[125px]" style={{ fontWeight: '400' }}>
          <SplitText
            text='How the story begins'
            duration={0.4}
            delay={200}
            delayT={1}
          />
        </div>
        <div className="text-[40px] md:text-[64px] leading-[72px] tracking-[0.02em] text-center text-white font-semibold z-50">
          <SplitText
            text='Designing the future of digital experiences'
            duration={0.4}
            delay={200}
            delayT={1}
          />
        </div>
        <div ref={groupRef} className='flex justify-center items-center w-full mt-[90px] opacity-0'>
          <Image src={'/images/group.png'} alt={'group'} width={430} height={86} className='w-[230px] h-[86px]' />
        </div>
        <div ref={leftImgRef} className='absolute md:left-1/7 left-2 top-68  opacity-0'>
          <Image src={'/images/hero/2.png'} alt={'vearah'} width={196} height={190} className='w-auto h-[140px] md:h-[190px] object-cover' />
        </div>
        <div ref={rightImgRef} className='absolute -right-2 md:right-1/7 top-92  opacity-0'>
          <Image src={'/images/hero/1.png'} alt={'agency'} width={300} height={236} className='w-auto h-[160px] md:h-[230px] object-cover -rotate-40' />
        </div>
        <p ref={textRef} className='text-center text-base md:text-xl mt-[100px]  opacity-0'>We are a future-building partner. Where creativity <br /> meets intelligence, and every product becomes a story worth experiencing.</p>
      </div>
      <div className='flex flex-row justify-center'>
        <FloatingMenu />
      </div>
    </div>
  )
}
