'use client';
import React from 'react';
import Card from './Card';
import { promotionCards } from './data';

export default function Promotion() {
  const handleBookCall = () => {
    window.open('https://calendly.com/met4guy', '_blank');
  };

  return (
    <div className='flex flex-col justify-center items-center w-full text-center my-40'>
      <p>Value Preposition</p>
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

      <div className="flex text-black font-[20px] flex-row justify-center items-center px-10 py-[30px] gap-[10px] w-[339px] h-[84px] bg-gradient-to-r from-[#87FFFF] to-[#16FF00] rounded-[32px] flex-none order-2 flex-grow-0 cursor-pointer hover:opacity-90 hover:scale-105 transition-all duration-300 ease-in-out my-16" onClick={handleBookCall}>
        Discovery Call
      </div>
    </div>
  );
}
