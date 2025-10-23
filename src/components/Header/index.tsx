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
    <header className="flex justify-between items-center px-4 md:px-[100px] py-5 relative">
      {/* Logo */}
      <div style={{
        fontFamily: 'Urbanist',
        fontWeight: 600,
        fontSize: '18px',
        lineHeight: '100%',
        letterSpacing: '0%'
      }}>
        Vearah
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-[30px]">
        <button className="hover:opacity-80 transition-opacity" style={{
          fontFamily: 'Urbanist',
          fontWeight: 400,
          fontStyle: 'normal',
          fontSize: '16px',
          lineHeight: '100%',
          letterSpacing: '0%',
          textAlign: 'center'
        }}>Case Study</button>
        <button
          className="gradient-text"
          style={{
            fontFamily: 'Urbanist',
            fontWeight: '400',
            fontSize: '16px',
            letterSpacing: '-2%',
          }}
        >
          Read Our Manifesto
        </button>
        <button className="py-[14px] px-[20px] rounded-[7px] bg-[#16FF00]" style={{
          fontWeight: '600',
          color: '#000000',
          fontSize: '16px'
        }} onClick={() => handleBookCall()}
        >Book a call</button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col gap-1 p-2"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Mobile Navigation Menu */}
      {
        isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-white/10 md:hidden z-50">
            <nav className="flex flex-col p-4 space-y-4">
              <button
                className="text-left py-2 hover:opacity-80 transition-opacity"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Projects
              </button>
              <button
                className="gradient-text text-left py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Read Our Manifesto
              </button>
              <button
                className="gradient-button w-full py-3 mt-2"
                onClick={() => handleBookCall()}
              >
                Book a free discovery call
              </button>
            </nav>
          </div>
        )
      }
    </header >
  )
}
