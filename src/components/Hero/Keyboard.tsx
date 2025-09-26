'use client'

import React, { useState } from 'react'

export default function Keyboard() {
  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set())
  const [displayText, setDisplayText] = useState('')
  const [inputText, setInputText] = useState('')
  const [isAnimating, setIsAnimating] = useState(false)
  const [animationSpeed, setAnimationSpeed] = useState(200) // milliseconds between key presses

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

    setDisplayText(prev => prev + keyId.toUpperCase())
  }

  const clearText = () => {
    setDisplayText('')
    setPressedKeys(new Set())
    setInputText('')
  }

  const startAnimation = () => {
    if (!inputText.trim() || isAnimating) return

    setIsAnimating(true)
    setDisplayText('')
    setPressedKeys(new Set())

    const text = inputText.toUpperCase().replace(/[^A-Z]/g, '') // Only keep letters
    let currentIndex = 0

    const animateNextKey = () => {
      if (currentIndex >= text.length) {
        setIsAnimating(false)
        return
      }

      const currentChar = text[currentIndex]
      const keyId = currentChar.toLowerCase()

      // Press the key
      setPressedKeys(prev => new Set(prev).add(keyId))
      setDisplayText(prev => prev + currentChar)

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }

  return (
    <div className="flex flex-col items-center space-y-8">
      {/* Text Input for Animation */}
      <div className="w-full max-w-4xl">
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-4">
          <label className="block text-white text-sm font-medium mb-2">
            Enter text to animate:
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={handleInputChange}
              placeholder="Type text here..."
              className="flex-1 px-4 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
              disabled={isAnimating}
            />
            <button
              onClick={startAnimation}
              disabled={!inputText.trim() || isAnimating}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded transition-colors"
            >
              {isAnimating ? 'Animating...' : 'Animate'}
            </button>
          </div>
          <div className="mt-2 flex items-center gap-4">
            <label className="text-white text-sm">
              Speed:
              <input
                type="range"
                min="50"
                max="500"
                value={animationSpeed}
                onChange={(e) => setAnimationSpeed(Number(e.target.value))}
                className="ml-2"
                disabled={isAnimating}
              />
              <span className="ml-2 text-xs text-gray-400">
                {animationSpeed}ms
              </span>
            </label>
          </div>
        </div>
      </div>

      {/* Display text above keyboard */}
      <div className="w-full max-w-4xl">
        <div className="bg-gray-900 rounded-lg p-6 min-h-[100px] border border-gray-700">
          <div className="text-white text-2xl font-mono">
            {displayText || 'Click keys to type...'}
          </div>
          {displayText && (
            <button
              onClick={clearText}
              className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded transition-colors"
            >
              Clear
            </button>
          )}
        </div>
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

      {/* Instructions */}
      <div className="text-gray-400 text-sm text-center max-w-2xl">
        <p className="mb-2">
          <strong>Manual:</strong> Click on any key to activate it and add the letter to the text above.
        </p>
        <p>
          <strong>Animation:</strong> Enter text in the input field above and click &quot;Animate&quot; to see the keyboard automatically type your text.
        </p>
      </div>
    </div>
  )
}
