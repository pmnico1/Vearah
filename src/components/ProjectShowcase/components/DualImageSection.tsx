'use client';

import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface DualImageSectionProps {
  images: string[];
}

export default function DualImageSection({ images }: DualImageSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current || imagesRef.current.length === 0) return;

    const imageElements = imagesRef.current.filter(Boolean);

    // Set initial state
    gsap.set(imageElements, {
      scale: 0.8,
      opacity: 0,
      y: 50
    });

    // Create scroll trigger animation
    gsap.to(imageElements, {
      scale: 1,
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [images]);

  return (
    <section
      ref={sectionRef}
      className="flex items-center justify-center"
    >
      <div className="w-full flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center">
        {images.map((imageSrc, index) => (
          <div
            key={index}
            ref={(el) => {
              imagesRef.current[index] = el;
            }}
            className="overflow-hidden rounded-4xl"
          >
            <Image
              src={imageSrc}
              alt={`Project screenshot ${index + 1}`}
              width={700}
              height={800}
              className="rounded-4xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
}