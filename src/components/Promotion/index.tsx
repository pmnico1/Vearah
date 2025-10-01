import React from 'react'
import Card from './Card'

export default function Promotion() {
  return (
    <div className='flex flex-col justify-center items-center w-full text-center my-40'>
      <p>Value Preposition</p>
      <p className='text-[40px] max-w-[500px] mx-auto px-10'>What makes us
        different</p>
      <p className='text-[20px] max-w-[600px] mx-auto py-5'>We are a team of designers, developers, and strategists who are passionate about creating beautiful and functional websites and applications.</p>

      <div className='flex flex-wrap justify-center items-center gap-8 mx-32 my-20'>
        <Card>
          <p className='text-[20px] font-semibold p-1'>Global Standards with Local Sensitivity</p>
          <p className='text-[16px] font-thin text-left p-1'>We understand the nuance of cultural design, financial behaviors, and emerging markets.</p>
        </Card>
        <Card>
          <p className='text-[20px] font-semibold p-1'>The Fusion of Art + Intelligence</p>
          <p className='text-[16px] font-thin text-left p-1'>You don`t have to “stitch” multiple partners together. With us, vision - experience - technology flows seamlessly under one roof.</p>
        </Card>
        <Card>
          <p className='text-[20px] font-semibold p-1'>Future-Proof Technology Integration</p>
          <p className='text-[16px] font-thin text-left p-1'>We build products scalable for today and adaptable for tomorrow, ensuring clients stay ahead of disruption.</p>
        </Card>
        <Card>
          <p className='text-[20px] font-semibold p-1'>Partnership Beyond Projects</p>
          <p className='text-[16px] font-thin text-left p-1'>We stay to optimize, scale, and evolve products with clients. to help create long-term trust and measurable ROI.</p>
        </Card>
      </div>
      <div className="flex text-black font-[20px] flex-row justify-center items-center px-10 py-[30px] gap-[10px] w-[339px] h-[84px] bg-gradient-to-r from-[#87FFFF] to-[#16FF00] rounded-[32px] flex-none order-2 flex-grow-0 cursor-pointer hover:opacity-90 hover:scale-105 transition-all duration-300 ease-in-out my-16">
        Book a free discovery call now
      </div>
    </div>
  )
}
