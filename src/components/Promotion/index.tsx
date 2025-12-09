'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Card from './Card';
import { promotionCards } from './data';

gsap.registerPlugin(ScrollTrigger);

export default function Promotion() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Set initial state - position items above and make them transparent
    const elements = [
      titleRef.current,
      descriptionRef.current,
      ...(cardsRef.current?.children || []),
      buttonRef.current
    ].filter(Boolean) as HTMLElement[];

    gsap.set(elements, {
      opacity: 0,
      y: -30
    });

    // Animate each element with stagger when section enters viewport
    gsap.to(elements, {
      opacity: 1,
      y: 0,
      stagger: 0.15, // Delay between each item
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%", // Start animation when top of section is at 80% from top of viewport
        toggleActions: "play none none none"
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleBookCall = () => {
    window.open('https://calendly.com/met4guy', '_blank');
  };

  return (
    <div ref={sectionRef} className='flex flex-col justify-center items-center w-full text-center my-80'>
      <p ref={titleRef} className='text-[40px] max-w-[500px] mx-auto px-10'>What makes us different</p>
      <p ref={descriptionRef} className='text-[20px] max-w-[600px] mx-auto px-5 py-5'>We are a team of designers, developers, and strategists who are passionate about creating beautiful and functional websites and applications.</p>

      <div ref={cardsRef} className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 mx-5 md:mx-32 lg:mx-52 my-20'>
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
        ref={buttonRef}
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
