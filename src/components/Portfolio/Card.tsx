import Image from 'next/image'
import React from 'react'

interface CardProps {
  imageUrl: string
  title: string
  description: string
  progress?: number
  status?: string
  provider?: string
}

export default function Card({
  imageUrl,
  title,
  description,
}: CardProps) {
  return (
    <div className="bg-zinc-900 rounded-[50px] shadow-lg p-2 mx-auto w-[700px] hover:shadow-xl border-5 border-green-500 transition-shadow duration-300">
      {/* Course Image */}
      <div className="mb-4">
        <Image
          src={imageUrl}
          alt={title}
          className=" h-[450px] object-cover rounded-[40px]"
          width={700}
          height={550}
        />
      </div>

      {/* Course Title */}
      <div className='p-4 flex space-x-5 justify-center items-center'>
        <h3 className="text-xl font-semibold text-green-400">
          {title}
        </h3>
        <p className="text-gray-200 text-xl line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  )
}
