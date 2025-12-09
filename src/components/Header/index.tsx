'use client'
import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (headerRef.current) {
      // Set initial state - centered with 90vh width and opacity 0
      gsap.set(headerRef.current, {
        width: '90vw',
        margin: '0 auto',
        opacity: 0
      })

      // Animate to full width and opacity 1 while maintaining center origin
      gsap.to(headerRef.current, {
        width: '100%',
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        delay: 0.1
      })
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleBookCall = () => {
    window.open('https://calendly.com/met4guy', '_blank');
  };

  return (
    <header
      ref={headerRef}
      className="flex justify-between items-center px-5 md:px-8 lg:px-16 xl:px-24 py-4 md:py-4 relative opacity-0"
    >
      {/* Logo */}
      <Link href="/" className="text-lg font-semibold cursor-pointer" style={{
        fontFamily: 'Urbanist',
        fontWeight: 600,
        lineHeight: '100%',
        letterSpacing: '0%'
      }}>
        Vearah
      </Link>

      <nav className="flex gap-6 xl:gap-8 items-center">
        <Link href={'/case-study'} className="hover:opacity-80 transition-opacity text-sm xl:text-base  cursor-pointer" style={{
          fontFamily: 'Urbanist',
          fontWeight: 400,
        }}>Case Study</Link>
        <button
          className=" cursor-pointer py-3 px-4 lg:py-[14px] lg:px-[20px] rounded-[7px] bg-[#64D3FF] hover:bg-[#8bcde7] text-sm xl:text-base"
          style={{
            fontWeight: '600',
            color: '#000000',
          }}
          onClick={() => handleBookCall()}
        >
          Book a call
        </button>
      </nav>
    </header>
  )
}
