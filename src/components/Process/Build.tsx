'use client'
import React from 'react'
import Image from 'next/image'
import DecorativeGradient from '@/assets/svgs/DecorativeGradient'

export default function Build() {
  return (
    <div className="relative max-w-[1000px] h-[500px] w-full mx-auto my-10 group ">

      <div
        className="w-full h-full flex justify-between rounded-[40px] relative overflow-hidden border-t-2 border-[#171e25] border-b"
        style={{
          background: 'radial-gradient(55.32% 44% at 51.71% 0%, rgba(129, 187, 255, 0.3) 0%, rgba(0, 0, 0, 0) 100%)'
        }}
      >
        <div className='w-1/2 flex flex-col justify-between items-start px-12 pt-12 pb-2' >
          <div className="relative z-10 ">
            <p className='text-[32px] font-semibold text-left'>Build and Integrate</p>
            <p className='text-[18px] py-8 text-left max-w-[600px]'>Our engineers bring designs to life with performance, scalability, and security at the core.</p>
          </div>
          <p className='text-[40px]'>04</p>
        </div>
        <Image src="/images/process/4.jpg" className='w-1/2 object-cover overflow-hidden rounded-l-[40px] z-30' alt="Build" width={500} height={500} />

        <div className="absolute bottom-0 left-0 w-full group-hover:opacity-100 opacity-0 transition-opacity duration-1000">
          <DecorativeGradient width="100%" height="96" />
        </div>
      </div>
    </div>
  )
}
