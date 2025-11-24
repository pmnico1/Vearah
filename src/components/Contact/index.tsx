'use client';
import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleBookCall = () => {
    window.open('https://calendly.com/met4guy', '_blank');
  };

  const handleSendEmail = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Validate inputs
    if (!email || !details) {
      setMessage('Please fill in both email and details');
      setTimeout(() => setMessage(''), 3000);
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage('Please enter a valid email address');
      setTimeout(() => setMessage(''), 3000);
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      const templateParams = {
        from_email: email,
        to_email: 'vearch.agency@gmail.com',
        message: details,
        reply_to: email
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );

      setMessage('Email sent successfully!');
      setEmail('');
      setDetails('');
      setTimeout(() => setMessage(''), 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setMessage('Failed to send email. Please try again.');
      setTimeout(() => setMessage(''), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="contact" className='flex flex-col justify-center items-center w-full text-white text-center my-40 p-10 md:p-2'>
      <p className=" text-sm font-medium mb-4">Contact us</p>
      <p className=' text-[24px] md:text-[40px] max-w-[600px] mx-auto mb-16 font-medium'>
        Drop us your email and fill in your details and we will be in touch.
      </p>
      <div className='flex flex-col justify-center items-center gap-8 w-full'>
        <div className='p-[1px] bgblue2 w-full  max-w-[572px]'
        >
          <div
            className={`relative border-y-[2px] bg-[#090808] border-[#0d0e0d] rounded-[40px] flex flex-col items-start p-6 md:p-12 w-full overflow-hidden `}
          >
            <input
              type="email"
              placeholder='Enter email'
              className='outline-none w-full text-xl md:text-3xl bg-transparent'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className={`relative border-y-[2px]  max-w-[572px] bg-[#090808] border-[#0d0e0d] rounded-[40px] flex flex-col items-start p-6 md:p-12 w-full overflow-hidden `}>
          <textarea
            className='w-full outline-0 h-[274px] text-xl md:text-3xl bg-transparent'
            placeholder='Enter details'
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>
        {message && (
          <p className={`text-sm md:text-base ${message.includes('success') ? 'text-green-400' : 'text-red-400'}`}>
            {message}
          </p>
        )}
        <div className='flex justify-between max-w-[572px] items-center w-full cursor-pointer '>
          <button
            onClick={handleSendEmail}
            disabled={isLoading}
            className={`relative bg-[#64D3FF] hover:bg-[#8bcde7] rounded-[20px] flex flex-col items-start px-6 md:px-16 py-6 overflow-hidden text-black ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isLoading ? 'Sending...' : 'Request quick email'}
          </button>
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
