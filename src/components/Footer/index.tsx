import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div>

      <div className="py-40 flex flex-col items-center justify-center">
        {/* VEARAH Branding */}
        <h1 className="text-6xl md:text-8xl font-bold mb-16 tracking-wider">
          VEARAH
        </h1>

        {/* Three Icon Buttons */}
        <div className="flex gap-8 mb-20">
          {[1, 2, 3].map((item) => (
            <button
              key={item}
              className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
            >
              <div className="w-6 h-6 text-white">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
            </button>
          ))}
        </div>

        {/* Description Text */}
        <div className="text-center max-w-4xl">
          <p className="text-lg md:text-xl leading-relaxed">
            We are not just a design and tech agency, we are a future-
            <br />
            building partner. Where creativity meets intelligence, and every
            <br />
            product becomes a story worth experiencing.
          </p>
        </div>
      </div>
      <Image src="/footer.png" alt="footer" width={1900} height={100} className='w-screen' />
    </div>
  )
}
