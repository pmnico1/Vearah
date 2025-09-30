import React from 'react'
import Discover from './Discover'
import Strategy from './Strategy'
import Design from './Design'
import Build from './Build'

export default function Process() {
  return (
    <div className='flex flex-col justify-center items-center w-full text-center my-40'>
      <p>Our Process</p>
      <p className='text-[40px] max-w-[500px] mx-auto px-10'>We created Vearah to
        be naturally ahead</p>
      <p className='text-[20px] max-w-[600px] mx-auto py-5'>We created Vearah to help visionary companies design the future. We don’t just make things look good we craft clarity, trust, and growth into every product.</p>
      <Discover />
      <Strategy />
      <Design />
      <Build />
    </div>
  )
}
