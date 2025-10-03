import React from 'react'

export default function Header() {
  return (
    <div className="flex justify-between items-center px-8 py-2">
      <div className="text-2xl font-bold">
        Vearah
      </div>
      <div className='flex gap-6'>
        <button>Our Projects</button>
        <button className="gradient-text">
          Read Our Manifesto
        </button>
        <button className="gradient-button">Book a free discovery call</button>
      </div>
    </div>
  )
}
