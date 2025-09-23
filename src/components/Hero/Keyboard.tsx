'use client'

import React, { useState } from 'react'

interface KeyData {
  id: string
  text: string
  isPressed: boolean
}

export default function Keyboard() {
  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set())
  const [displayText, setDisplayText] = useState('')

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
  }

  return (
    <div className="flex flex-col items-center space-y-8">
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
                    className={`
                      relative w-12 h-12 md:w-20 md:h-16 rounded-lg
                      font-bold text-lg sm:text-xl
                      transition-all duration-200 ease-in-out
                      transform active:scale-95
                      select-none
                      ${isPressed
                        ? 'bg-zinc-900 text-white shadow-lg shadow-blue-600/50'
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
        Click on any key to activate it and add the letter to the text above.
        Click again to deactivate the key. Use the Clear button to reset everything.
      </div>
    </div>
  )
}
