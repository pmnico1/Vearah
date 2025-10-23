'use client'

import React, { useState, useEffect } from 'react'
import SplitText from '@/components/SplitText'

export default function Keyboard() {
  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set())

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

    // setDisplayText(prev => prev + keyId.toUpperCase())
  }

  return (
    <div className="flex flex-col items-center space-y-8">

      {/* Display text above keyboard */}
      <div className="w-full h-[100px] max-w-4xl text-[48px] mb-48 text-center font-medium" style={{ fontWeight: '500' }}>
        <SplitText delay={200} duration={1} text='Designing the Future of Digital Experiences' />
      </div>

      {/* Interactive Keyboard - HTML Components */}
      <div className="rounded-2xl p-6 shadow-2xl border-t-2 border-zinc-800 w-full md:w-fit overflow-hidden">
        <div className="space-y-2">
          {keyboardLayout.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`flex justify-center gap-2 ${rowIndex === 1 ? 'ml-7' : rowIndex === 2 ? 'ml-2' : ''
                }`}
            >
              {row.map((letter) => {
                const keyId = letter.toLowerCase()
                const isPressed = pressedKeys.has(keyId)

                return (
                  <button
                    key={letter}
                    onClick={() => handleKeyClick(keyId)}
                    disabled={false}
                    className={`
                      relative w-12 h-12 md:w-20 md:h-16 rounded-lg
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
