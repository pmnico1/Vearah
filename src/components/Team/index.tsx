import React from 'react'
import TeamCard from './TeamCard'

export default function Team() {
  return (
    <div className='flex flex-col justify-center items-center w-full text-white text-center my-40 px-4'>
      <p className=" text-sm font-medium mb-4">Contact US</p>
      <p className=' text-[40px] max-w-[500px] mx-auto px-2 mb-16 font-medium'>
        Here is what people are saying about us
      </p>
      <div className='flex flex-wrap justify-center items-center gap-10 my-20'>
        <TeamCard name="John Doe" title="CEO" company="ABC Inc." quote="We're committed to long-term partnerships, optimizing and scaling products to deliver lasting value and a strong return on investment for our clients." />
        <TeamCard name="John Doe" title="CEO" company="ABC Inc." quote="We're committed to long-term partnerships, optimizing and scaling products to deliver lasting value and a strong return on investment for our clients." />
        <TeamCard name="John Doe" title="CEO" company="ABC Inc." quote="We're committed to long-term partnerships, optimizing and scaling products to deliver lasting value and a strong return on investment for our clients." />
      </div>
    </div>
  )
}
