'use client'

import React, { useState, useEffect } from 'react'

export default function Keyboard() {
  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set())
  const [displayText, setDisplayText] = useState('')
  const [inputText, setInputText] = useState("Designing the Future of Digital Experiences")
  const [isAnimating, setIsAnimating] = useState(false)
  const [animationSpeed, setAnimationSpeed] = useState(50) // milliseconds between key presses

  // Define keyboard layout organized by rows
  const keyboardLayout = [
    // Top row
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    // Middle row
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    // Bottom row
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
  ]

  // Auto-animate the initial text when component mounts
  useEffect(() => {

    // Start animation after a short delay to ensure component is fully mounted
    const timer = setTimeout(() => {
      startAnimation(inputText)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

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

  const startAnimation = (textToAnimate?: string) => {
    const text = textToAnimate || inputText
    if (!text.trim() || isAnimating) return

    setIsAnimating(true)
    setDisplayText('')
    setPressedKeys(new Set())

    // Keep original case, only filter out non-letter characters except spaces
    const processedText = text.replace(/[^A-Za-z\s]/g, '')
    let currentIndex = 0

    const animateNextKey = () => {
      if (currentIndex >= processedText.length) {
        setIsAnimating(false)
        return
      }

      const currentChar = processedText[currentIndex]

      // Skip spaces in animation but add them to display text
      if (currentChar === ' ') {
        setDisplayText(prev => prev + ' ')
        currentIndex++
        setTimeout(animateNextKey, animationSpeed)
        return
      }

      const keyId = currentChar.toLowerCase()

      // Press the key
      setPressedKeys(prev => new Set(prev).add(keyId))
      setDisplayText(prev => prev + currentChar) // Use original case

      // Release the key after a short delay
      setTimeout(() => {
        setPressedKeys(prev => {
          const newPressed = new Set(prev)
          newPressed.delete(keyId)
          return newPressed
        })

        currentIndex++
        setTimeout(animateNextKey, animationSpeed)
      }, 150)
    }

    animateNextKey()
  }

  return (
    <div className="flex flex-col items-center space-y-8">

      {/* Display text above keyboard */}
      <div className="w-full max-w-4xl text-[48px] mb-36 text-center">
        {displayText}
      </div>

      {/* Interactive Keyboard - HTML Components */}
      <div className="rounded-2xl p-6 shadow-2xl border-t-2 border-zinc-800">
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
                    disabled={isAnimating}
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
