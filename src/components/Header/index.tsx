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
    <header className="flex justify-between items-center px-4 sm:px-8 py-2 relative">
      {/* Logo */}
      <div className="text-xl sm:text-2xl font-bold">
        Vearah
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6">
        <button className="hover:opacity-80 transition-opacity">Our Projects</button>
        <button className="gradient-text">
          Read Our Manifesto
        </button>
        <button className="gradient-button" onClick={() => handleBookCall()}
        >Book a free discovery call</button>
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
      {isMenuOpen && (
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
      )}
    </header>
  )
}
