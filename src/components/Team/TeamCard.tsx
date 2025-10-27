import React from 'react'
import Image from 'next/image'

interface TeamCardProps {
  name: string
  title: string
  company: string
  quote: string
  avatar?: string
}

export default function TeamCard({
  name,
  title,
  company,
  quote,
  avatar
}: TeamCardProps) {
  return (
    <div
      className="p-6 mx-auto h-[240px] w-full max-w-[500px] shadow-lg border-t-2 border-x border-[#242424] flex flex-col justify-between items-start text-white transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:border-white/20 animate-fade-in-up"
      style={{
        boxSizing: 'border-box',
        background: 'linear-gradient(360deg, #010101 0%, #171717 100%)',
        borderRadius: '40px',
        flex: 'none',
        order: 0,
        alignSelf: 'stretch',
        flexGrow: 1
      }}
    >
      {/* Personal Information Section */}
      <div className="flex items-center mb-6 animate-slide-in-left">
        {/* Avatar */}
        <div className="w-12 h-12 bg-white rounded-full flex-shrink-0 mr-4 transition-all duration-300 hover:scale-110 hover:shadow-lg overflow-hidden">
          {avatar ? (
            <Image
              src={avatar}
              alt={`${name} avatar`}
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-400"></div>
          )}
        </div>

        {/* Name and Title */}
        <div className="animate-fade-in-right">
          <h3 className="text-lg font-semibold transition-colors duration-300 hover:text-blue-400">{name}</h3>
          <p className="text-sm transition-colors duration-300 hover:text-gray-300">{title} of {company}</p>
        </div>
      </div>

      {/* Quote Section */}
      <div className="text-base leading-relaxed text-left animate-fade-in-up-delayed transition-all duration-300 hover:text-blue-100">
        {quote}
      </div>
    </div>
  )
}
