'use client';
import React from 'react'

export default function Contact() {
  const handleBookCall = () => {
    window.open('https://calendly.com/met4guy', '_blank');
  };
  return (
    <div className='flex flex-col justify-center items-center w-full text-white text-center my-40 p-2'>
      <p className=" text-sm font-medium mb-4">Contact us</p>
      <p className=' text-[32px] md:text-[40px] max-w-[600px] mx-auto mb-16 font-medium'>
        Drop us your email and fill in your details and we will be in touch.
      </p>
      <div className='flex flex-col justify-center items-center gap-8 w-full'>
        <div className='p-[1px] bgblue2 w-full  max-w-[572px]'
        >
          <div
            className={`relative border-y-[2px] bg-[#090808] border-[#0d0e0d] rounded-[40px] flex flex-col items-start p-6 md:p-12 w-full overflow-hidden `}
          >
            <input type="text" placeholder='Enter email' className='outline-none w-full text-3xl' />
          </div>
        </div>
        <div className={`relative border-y-[2px]  max-w-[572px] bg-[#090808] border-[#0d0e0d] rounded-[40px] flex flex-col items-start p-6 md:p-12 w-full overflow-hidden `}>
          <textarea className='w-full outline-0 h-[274px] text-3xl' placeholder='Enter details' />
        </div>
        <div className='flex justify-between max-w-[572px] items-center w-full cursor-pointer '>
          <a
            href="/contact"
            className={`relative bg-[#64D3FF] hover:bg-[#8bcde7] rounded-[20px] flex flex-col items-start px-6 md:px-16 py-6 overflow-hidden text-black`}
          >
            Request quick email
          </a>
          <div
            className={`relative border-t-[2px] bg-[#090808] border-[#0d0e0d] rounded-[20px] flex flex-col items-start px-6 md:px-16 py-6 overflow-hidden text-white`}
            onClick={() => handleBookCall()}
          >
            Get our rate card
          </div>

        </div>
      </div>
    </div>)
}
