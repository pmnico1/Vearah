'use client'

import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import SplitText from '@/components/SplitText'

export default function Keyboard() {
  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set())
  const keyboardContainerRef = useRef<HTMLDivElement>(null)
  const borderRef = useRef<HTMLDivElement>(null)
  const keysRef = useRef<(HTMLButtonElement | null)[]>([])

  // Define keyboard layout organized by rows
  const keyboardLayout = [
    // Top row
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    // Middle row
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    // Bottom row
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
  ]

  const handleKeyClick = (keyId: string) => {
    setPressedKeys(prev => {
      const newPressed = new Set(prev)
      if (newPressed.has(keyId)) {
        newPressed.delete(keyId)
      } else {
        newPressed.add(keyId)
      }
      return newPressed
    })
  }

  useEffect(() => {
    const keys = keysRef.current.filter(Boolean) as HTMLButtonElement[]

    if (keys.length === 0) return

    // Set initial state for keys
    gsap.set(keys, {
      scale: 1.2,
      opacity: 0
    })

    // Set initial state for container and border
    if (keyboardContainerRef.current) {
      gsap.set(keyboardContainerRef.current, {
        opacity: 0,
        scale: 1.2
      })
    }

    // Create timeline with 1.3s initial delay
    const tl = gsap.timeline({
      delay: 1.3
    })

    // Animate border/container first (scale from 120% to 100%)
    if (keyboardContainerRef.current) {
      tl.to(keyboardContainerRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out'
      }, 0)
    }

    // Create array of keys with their positions
    const keysWithDistance = keys.map(key => {
      const keyData = key.dataset
      const rowIndex = parseInt(keyData.rowIndex || '0')
      const keyIndex = parseInt(keyData.keyIndex || '0')
      const rowLength = parseInt(keyData.rowLength || '0')

      const centerKey = Math.floor(rowLength / 2)
      const distanceFromCenter = Math.abs(keyIndex - centerKey)

      return { key, rowIndex, keyIndex, distanceFromCenter }
    })

    // Sort by distance so center keys animate first
    keysWithDistance.sort((a, b) => a.distanceFromCenter - b.distanceFromCenter)

    // Animate center keys first, then spread outward
    keysWithDistance.forEach(({ key, distanceFromCenter }) => {
      const delay = distanceFromCenter * 0.025 // 25ms stagger per distance from center

      tl.to(key, {
        scale: 1,
        opacity: 1,
        duration: 0.35,
        ease: 'back.out(1.3)'
      }, delay)
    })

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div className="relative flex flex-col items-center space-y-8">

      {/* Display text above keyboard */}
      <div className="max-w-[700px] h-[100px] text-white text-[48px] mb-[370px] text-center font-medium leading-14 tracking-[0.32rem] ">
        <SplitText delay={200} duration={0.4} delayT={1.1} text='Designing the Future of Digital Experiences' />
      </div>

      {/* Interactive Keyboard - HTML Components */}
      <div
        ref={keyboardContainerRef}
        className="rounded-2xl px-6 pt-10 pb-40 shadow-2xl border opacity-0 border-zinc-900 w-full md:w-fit overflow-hidden"
      >
        <div className="space-y-2" ref={borderRef}>
          {keyboardLayout.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`flex justify-center gap-2 ${rowIndex === 1 ? 'ml-7' : rowIndex === 2 ? 'ml-2' : ''
                }`}
            >
              {row.map((letter, keyIndex) => {
                const keyId = letter.toLowerCase()
                const isPressed = pressedKeys.has(keyId)

                return (
                  <button
                    key={letter}
                    ref={el => {
                      const index = rowIndex * 100 + keyIndex
                      keysRef.current[index] = el
                    }}
                    data-row-index={rowIndex}
                    data-key-index={keyIndex}
                    data-row-length={row.length}
                    onClick={() => handleKeyClick(keyId)}
                    disabled={false}
                    className={`
                      relative w-12 h-12 md:w-20 md:h-16 xl:w-[129px] xl:h-20 rounded-lg
                      font-bold text-lg sm:text-xl
                      transition-all duration-200 ease-in-out
                      transform active:scale-95
                      select-none
                      disabled:cursor-not-allowed disabled:opacity-50
                      ${isPressed
                        ? 'bg-zinc-900 text-white shadow-lg shadow-blue-600/50 scale-95'
                        : 'text-white hover:bg-zinc-950 shadow-md hover:shadow-lg'
                      }
                      border-t-2 border-zinc-800
                      hover:border-zinc-700
                    `}
                  >
                    <span className="absolute inset-0 flex items-center justify-center">
                      {letter}
                    </span>
                  </button>
                )
              })}
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
