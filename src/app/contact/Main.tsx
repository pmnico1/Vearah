
import React from 'react'

export default function Main() {
  const handleBookCall = () => {
    window.open('https://calendly.com/met4guy', '_blank');
  };
  return (
    <>
      <div className='flex flex-col justify-center items-center w-full text-white text-center my-40'>
        <p className=' text-[40px] max-w-[600px] mx-auto mb-16 font-medium'>
          Got a project in mind? Fill in the form or send us a
          Contact us
        </p>
        <div className='flex flex-col justify-center items-center gap-8 w-full'>

          <div
            className={`relative border-t-[2px] bg-[#090808] max-w-[572px] border-[#0d0e0d] rounded-[40px] flex flex-col items-start p-10 w-full overflow-hidden `}
          >
            <input type="text" placeholder='Enter Your Name' className='outline-none w-full' />
          </div>
          <div
            className={`relative border-t-[2px] bg-[#090808] max-w-[572px] border-[#0d0e0d] rounded-[40px] flex flex-col items-start p-10 w-full overflow-hidden `}
          >
            <input type="email" placeholder='Enter Your Email' className='outline-none w-full' />
          </div>
          <div
            className={`relative border-t-[2px] bg-[#1b1919] max-w-[572px] border-[#2a2c2a] rounded-[40px] flex flex-col items-start p-10 w-full overflow-hidden hover:border-[#1b1b1b] transition-all duration-300`}
          >
            <select defaultValue={"Select Budget"} className='outline-none w-full bg-transparent text-white py-2'>
              <option value="under-1000" className="bg-[#1b1919] text-white py-3 px-4">Under $1,000</option>
              <option value="1000-3000" className="bg-[#1b1919] text-white py-3 px-4">$1,000 - $3,000</option>
              <option value="3000-5000" className="bg-[#1b1919] text-white py-3 px-4">$3,000 - $5,000</option>
              <option value="5000-10000" className="bg-[#1b1919] text-white py-3 px-4">$5,000 - $10,000</option>
              <option value="10000-plus" className="bg-[#1b1919] text-white py-3 px-4">$10,000+</option>
            </select>
          </div>
          <div
            className={`relative border-t-[2px] bg-[#090808]  max-w-[572px] border-[#0d0e0d] rounded-[40px] flex flex-col items-start p-10 w-full overflow-hidden `}
          >
            <textarea placeholder='A Simple Message' className='outline-none w-full min-h-[200px]' />
          </div>
          <div className='flex justify-between max-w-[572px] items-center w-full cursor-pointer'>
            <a
              href="/contact"
              className={`relative border-t-[2px] bg-[#090808] border-[#0d0e0d] rounded-[40px] flex flex-col items-start px-16 py-6 overflow-hidden `}
            >
              Request quick email
            </a>
            <div
              className={`relative border-t-[2px] bg-[#090808] border-[#0d0e0d] rounded-[40px] flex flex-col items-start px-16 py-6 overflow-hidden `}
              onClick={() => handleBookCall()}
            >
              Request quick call
            </div>
          </div>
          <div className="flex text-black hover:scale-105 transition-all duration-300 ease-in-out   text-[18px] leading-[22px] flex-row justify-center items-center px-8 py-[30px] max-w-[572px] w-full h-[82px] bg-gradient-to-r from-[#81BBFF] to-[#A0FF7B] rounded-[30px]">
            Submit
          </div>
        </div>
      </div>
    </>
  )
}
