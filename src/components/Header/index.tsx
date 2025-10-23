'use client'
import React, { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleBookCall = () => {
    window.open('https://calendly.com/met4guy', '_blank');
  };

  return (
    <header className="flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-4 md:py-5 relative">
      {/* Logo */}
      <div className="text-sm sm:text-base md:text-lg font-semibold" style={{
        fontFamily: 'Urbanist',
        fontWeight: 600,
        lineHeight: '100%',
        letterSpacing: '0%'
      }}>
        Vearah
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex gap-6 xl:gap-8">
        <button className="hover:opacity-80 transition-opacity text-sm xl:text-base" style={{
          fontFamily: 'Urbanist',
          fontWeight: 400,
          fontStyle: 'normal',
          lineHeight: '100%',
          letterSpacing: '0%',
          textAlign: 'center'
        }}>Case Study</button>
        <button
          className="gradient-text text-sm xl:text-base"
          style={{
            fontFamily: 'Urbanist',
            fontWeight: '400',
            letterSpacing: '-2%',
          }}
        >
          Read Our Manifesto
        </button>
        <button
          className="py-3 px-4 xl:py-[14px] xl:px-[20px] rounded-[7px] bg-[#16FF00] text-sm xl:text-base"
          style={{
            fontWeight: '600',
            color: '#000000',
          }}
          onClick={() => handleBookCall()}
        >
          Book a call
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden flex flex-col gap-1 p-2 touch-manipulation"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-white/10 z-50 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}>
        <nav className="flex flex-col p-6 space-y-6">
          <button
            className="text-left py-3 hover:opacity-80 transition-opacity text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Case Study
          </button>
          <button
            className="gradient-text text-left py-3 text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Read Our Manifesto
          </button>
          <button
            className="gradient-button w-full py-4 mt-4 text-base font-medium"
            onClick={() => {
              handleBookCall();
              setIsMenuOpen(false);
            }}
          >
            Book a free discovery call
          </button>
        </nav>
      </div>
    </header>
  )
}
