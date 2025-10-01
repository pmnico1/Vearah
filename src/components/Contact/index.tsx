import React from 'react'

export default function Contact() {
  return (
    <div className='flex flex-col justify-center items-center w-full text-white text-center my-40'>
      <p className=" text-sm font-medium mb-4">Contact US</p>
      <p className=' text-[40px] max-w-[600px] mx-auto mb-16 font-medium'>
        Drop us your email and fill in your details and we will be in touch.
      </p>
      <div className='flex flex-col justify-center items-center gap-8 w-full'>
        <div className='p-[1px] bgblue2 w-full  max-w-[572px]'
        >
          <div
            className={`relative border-y-[2px] bg-[#090808] border-[#0d0e0d] rounded-[40px] flex flex-col items-start p-10 w-full overflow-hidden `}
          >
            <input type="text" placeholder='Email' className='outline-none w-full' />
          </div>
        </div>
        <div className='flex justify-between max-w-[572px] items-center w-full'>
          <div
            className={`relative border-t-[2px] bg-[#090808] border-[#0d0e0d] rounded-[40px] flex flex-col items-start px-16 py-6 overflow-hidden `}
          >
            Request quick email
          </div>
          <div
            className={`relative border-t-[2px] bg-[#090808] border-[#0d0e0d] rounded-[40px] flex flex-col items-start px-16 py-6 overflow-hidden `}
          >
            Request quick email
          </div>

        </div>
      </div>
    </div>)
}
