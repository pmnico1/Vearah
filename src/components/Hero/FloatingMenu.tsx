import React from 'react'

export default function FloatingMenu() {
  return (
    <div className="floating-menu py-4 max-w-[400px]">
      <div className='flex flex-between items-center gap-10 font-bold'>
        <div>Contact US</div>
        <svg width="30" height="35" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 7.5H18" stroke="white" stroke-width="1.5" stroke-linecap="round" />
          <path d="M3 12.5H21" stroke="white" stroke-width="1.5" stroke-linecap="round" />
          <path d="M10 17.5H14" stroke="white" stroke-width="1.5" stroke-linecap="round" />
        </svg>
        <div>Book a Call</div>
      </div>
    </div>
  )
}
