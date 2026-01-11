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

        {/* Social Media Icons */}
        <div className="flex gap-5 mb-10 md:mb-20">
          <a
            href="https://x.com/VearahAgency"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#111010] rounded-lg md:rounded-[20px] flex items-center justify-center p-4 md:p-10 relative hover:opacity-80 transition-opacity"
            aria-label="Visit Vearah on X (Twitter)"
          >
            <Image
              src="/svgs/x.svg"
              alt="X (Twitter)"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/vearah"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#111010] rounded-lg md:rounded-[20px] flex items-center justify-center p-4 md:p-10 relative hover:opacity-80 transition-opacity"
            aria-label="Visit Vearah on LinkedIn"
          >
            <Image
              src="/svgs/linkedin.svg"
              alt="LinkedIn"
              width={18}
              height={18}
              className="w-6 h-6"
            />
          </a>
          <a
            href="https://www.behance.net/vearahstudio"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#111010] rounded-lg md:rounded-[20px] flex items-center justify-center p-4 md:p-10 relative hover:opacity-80 transition-opacity"
            aria-label="Visit Vearah on Behance"
          >
            <Image
              src="/svgs/behance.svg"
              alt="Behance"
              width={20}
              height={20}
              className="w-6 h-6"
            />
          </a>
        </div>

        {/* Description Text */}
        <div className="text-center max-w-4xl p-4">
          <p className="text-[20px] md:text-xl leading-relaxed">
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
