'use client';
import React from 'react';
import Card from './Card';
import { promotionCards } from './data';

export default function Promotion() {
  const handleBookCall = () => {
    window.open('https://calendly.com/met4guy', '_blank');
  };

  return (
    <div className='flex flex-col justify-center items-center w-full text-center my-80'>
      <p className='text-[40px] max-w-[500px] mx-auto px-10'>What makes us different</p>
      <p className='text-[20px] max-w-[600px] mx-auto py-5'>We are a team of designers, developers, and strategists who are passionate about creating beautiful and functional websites and applications.</p>

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 mx-10 md:mx-32 lg:mx-52 my-20'>
        {promotionCards.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            imageAlt={card.imageAlt}
          >
            <p className='text-[20px] font-semibold pt-5 pb-3 px-6 text-left group-hover:bg-[#0f0f0f] transition-all duration-300 ease-in-out bg-[#010101] w-full'>{card.title}</p>
            <p className='text-[16px] font-thin text-left px-6 pb-5 group-hover:bg-[#0f0f0f] transition-all duration-300 ease-in-out bg-[#010101] w-full'>{card.description}</p>
          </Card>
        ))}
      </div>

      <button
        className=" cursor-pointer py-3 px-4 lg:py-[14px] lg:px-[20px] rounded-[7px] bg-[#64D3FF] hover:bg-[#8bcde7] text-sm xl:text-base"
        style={{
          fontWeight: '600',
          color: '#000000',
        }}
        onClick={() => handleBookCall()}
      >
        Discovery Call
      </button>
    </div>
  );
}
