import React from 'react'
import Image from 'next/image'

export default function Service() {
  return (
    <div className="flex md:flex-row flex-col min-h-screen text-white mt-40 md:mt-0">
      {/* Left side - Card image background */}
      <div className="min-h-[300px] w-full md:w-1/2 relative overflow-hidden">
        <Image
          src="/images/card.png"
          alt="Specialization background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right side - Black background with text */}
      <div className="w-full md:w-1/2 bg-black flex flex-col justify-between px-16 py-20">
        <h2 className="text-lg font-bold text-right mb-12">
          Area of Specialization
        </h2>

        <div className="space-y-1 text-[48px] text-zinc-500 ">
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
