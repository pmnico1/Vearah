'use client'
import Image from 'next/image'
import React from 'react'

export default function Footer() {

  return (
    <footer>
      <div className="py-40 flex flex-col items-center justify-center">
        {/* VEARAH Branding */}
        <h1
          className="uppercase font-bold tracking-[0.3em] text-center mb-2 md:mb-16
          text-transparent bg-clip-text
          bg-[linear-gradient(180deg,#ffffff_-14.79%,rgba(1,1,1,0)_93.33%)] text-[60px]
          md:text-[100px] lg:text-[160px] xl:text-[200px] leading-40 md:leading-[240px]
          flex-none z-[1]"
        >
          VEARAH
        </h1>

        {/* Three Icon Buttons */}
        <div className="flex gap-5 mb-10 md:mb-20">
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
        <div className="text-center max-w-4xl p-4">
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
    </footer>
  )
}
