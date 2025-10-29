'use client';

import React, { useLayoutEffect, useRef, useState, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '@/components/Portfolio/data';
import SectionTitle from '@/components/Portfolio/components/SectionTitle';
import ProjectCard from '@/components/Portfolio/components/ProjectCard';
import ClientLogos from '@/components/Portfolio/components/ClientLogos';
import Background from '@/components/Portfolio/components/Background';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Memoize end positions calculation
  const cardEndPositions = useMemo(() => {
    return projects.map((_, i, arr) =>
      (arr.length * 100 - 100 * (i + 1)) + '%'
    );
  }, []);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(
        (el): el is HTMLDivElement => el !== null
      );

      // Throttle ScrollTrigger updates
      let scrollRaf: number | null = null;
      const throttleRefresh = () => {
        if (scrollRaf) return;
        scrollRaf = requestAnimationFrame(() => {
          ScrollTrigger.update();
          scrollRaf = null;
        });
      };

      cards.forEach((card, i) => {
        gsap.set(card, {
          zIndex: i + 1,
          willChange: 'transform',
          transform: 'translateZ(0)',
          force3D: true // Force GPU acceleration
        });

        const endStr = (cards.length * 100 - 100 * (i + 1)) + '%';

        ScrollTrigger.create({
          trigger: card,
          start: 'top top',
          end: endStr,
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
          refreshPriority: i,
          fastScrollEnd: true,
          invalidateOnRefresh: false,
        });
      });

      // Debounced refresh for responsive correctness
      let raf: number | null = null;
      const onResize = () => {
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          ScrollTrigger.refresh();
        });
      };

      // Throttle scroll events
      let ticking = false;
      const onScroll = () => {
        if (!ticking) {
          throttleRefresh();
          ticking = true;
          requestAnimationFrame(() => {
            ticking = false;
          });
        }
      };

      window.addEventListener('resize', onResize);
      window.addEventListener('scroll', onScroll, { passive: true });

      return () => {
        window.removeEventListener('resize', onResize);
        window.removeEventListener('scroll', onScroll);
        if (scrollRaf) cancelAnimationFrame(scrollRaf);
      };
    }, container);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div>
      <div className='z-20 w-full py-20 -translate-y-10 bg-transparent my-20'>
        <SectionTitle titleOpacity={1} />
      </div>

      <div
        ref={containerRef}
        className='relative w-full flex flex-col justify-start items-center text-center z-20'
      >
        {/* Background positioned only within the Portfolio section */}
        <div
          className="sticky top-0"
          style={{
            contain: 'layout style paint',
            willChange: 'transform',
            transform: 'translateZ(0)', // Force onto GPU layer
          }}
        >
          <Background />
        </div>

        <div className='h-24 sticky' />

        <div className='relative w-full'>
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className={[
                'min-h-[10vh] w-full',
                'flex items-center justify-center ',
                'px-6 sm:px-10',
                'mx-auto max-w-5xl',
                'will-change-transform'
              ].join(' ')}
            >
              <div className='w-full py-12 sm:py-16'>
                <ProjectCard
                  project={project}
                  isFirst={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <ClientLogos />
    </div>
  );
}