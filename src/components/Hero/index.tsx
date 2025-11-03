'use client'

import React from 'react'
import FloatingMenu from './FloatingMenu'
import SplitText from '@/components/SplitText'
import Image from 'next/image'

export default function Hero() {
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
        <div className="text-[64px] leading-[72px] tracking-[0.02em] text-center text-white font-semibold">
          <SplitText
            text='Designing the future of digital experiences'
            duration={0.4}
            delay={200}
            delayT={1}
          />
        </div>
        <div className='flex justify-center items-center w-full mt-[90px]'>
          <Image src={'/images/group.png'} alt={'group'} width={430} height={86} className='w-[230px] h-[86px]' />
        </div>
        <Image src={'/images/hero/2.png'} alt={'vearah'} width={196} height={190} className='absolute left-1/7 bottom-80 w-[196px] h-[190px] object-cover' />
        <Image src={'/images/hero/1.png'} alt={'agency'} width={300} height={236} className='absolute right-1/7 bottom-60 w-[300px] h-[236px] object-cover -rotate-40' />
        <p className='text-center text-xl mt-[100px]'>We are a future-building partner. Where creativity <br /> meets intelligence, and every product becomes a story worth experiencing.</p>
      </div>
      <div className='flex flex-row justify-center'>
        <FloatingMenu />
      </div>
    </div>
  )
}
