'use client';
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import emailjs from '@emailjs/browser'

export default function Main() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: 'Select Budget',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    const messageFromParams = searchParams.get('message');
    if (messageFromParams) {
      setFormData(prev => ({
        ...prev,
        message: decodeURIComponent(messageFromParams)
      }));
    }
  }, [searchParams]);

  const handleBookCall = () => {
    window.open('https://calendly.com/met4guy', '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    // Validate form
    if (!formData.name || !formData.email || formData.budget === 'Select Budget' || !formData.message) {
      setNotification({ message: 'Please fill in all fields', type: 'error' });
      setTimeout(() => setNotification(null), 4000);
      return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setNotification({ message: 'Please enter a valid email address', type: 'error' });
      setTimeout(() => setNotification(null), 4000);
      return;
    }

    setIsSubmitting(true);
    setNotification(null);

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = "template_ouylt29";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing');
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        budget: formData.budget,
        message: formData.message,
        to_name: 'Vearah Team',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setNotification({ message: 'Message sent successfully!', type: 'success' });
      setTimeout(() => setNotification(null), 4000);

      // Reset form
      setFormData({
        name: '',
        email: '',
        budget: 'Select Budget',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setNotification({ message: 'Failed to send message. Please try again.', type: 'error' });
      setTimeout(() => setNotification(null), 4000);
    } finally {
      setIsSubmitting(false);
    }
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
            <input
              type="text"
              name="name"
              placeholder='Enter Your Name'
              className='outline-none w-full bg-transparent! text-white [&:-webkit-autofill]:shadow-[inset_0_0_0px_1000px_rgb(9,8,8)] [&:-webkit-autofill]:[-webkit-text-fill-color:white]'
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div
            className={`relative border-t-[2px] bg-[#090808] max-w-[572px] border-[#0d0e0d] rounded-[40px] flex flex-col items-start p-10 w-full overflow-hidden `}
          >
            <input
              type="email"
              name="email"
              placeholder='Enter Your Email'
              className='outline-none w-full bg-transparent! text-white [&:-webkit-autofill]:shadow-[inset_0_0_0px_1000px_rgb(9,8,8)] [&:-webkit-autofill]:[-webkit-text-fill-color:white]'
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div
            className={`relative border-t-[2px] bg-[#1b1919] max-w-[572px] border-[#2a2c2a] rounded-[40px] flex flex-col items-start p-10 w-full overflow-hidden hover:border-[#1b1b1b] transition-all duration-300`}
          >
            <select
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              className='outline-none w-full bg-transparent text-white py-2'
            >
              <option value="Select Budget" disabled className="bg-[#1b1919] text-gray-500 py-3 px-4">Select Budget</option>
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
            <textarea
              name="message"
              placeholder='A Simple Message'
              className='outline-none w-full min-h-[200px] bg-transparent'
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>
          <div className='flex justify-between max-w-[572px] items-center w-full cursor-pointer'>
            <Link
              href="/#contact"
              className={`relative border-t-[2px] bg-[#090808] border-[#0d0e0d] rounded-[40px] flex flex-col items-start px-16 py-6 overflow-hidden `}
            >
              Request quick email
            </Link>
            <div
              className={`relative border-t-[2px] bg-[#090808] border-[#0d0e0d] rounded-[40px] flex flex-col items-start px-16 py-6 overflow-hidden `}
              onClick={() => handleBookCall()}
            >
              Request quick call
            </div>
          </div>
          {notification && (
            <div
              className={`max-w-[572px] w-full p-4 rounded-[20px] text-center transition-all duration-300 ${notification.type === 'success'
                ? 'bg-green-500/20 border border-green-500/50 text-green-400'
                : 'bg-red-500/20 border border-red-500/50 text-red-400'
                }`}
            >
              {notification.message}
            </div>
          )}
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`flex text-black hover:scale-105 transition-all duration-300 ease-in-out text-[18px] leading-[22px] flex-row justify-center items-center px-8 py-[30px] max-w-[572px] w-full h-[82px] bg-gradient-to-r from-[#81BBFF] to-[#A0FF7B] rounded-[30px] ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </div>
      </div>
    </>
  )
}
