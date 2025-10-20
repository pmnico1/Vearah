'use client';

import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects, statisticsFrames } from '@/components/Portfolio/data';
import SectionTitle from '@/components/Portfolio/components/SectionTitle';
import ProjectCard from '@/components/Portfolio/components/ProjectCard';
import ProjectTags from '@/components/Portfolio/components/ProjectTags';
import StatisticsFrames from '@/components/Portfolio/components/StatisticsFrames';
import ClientLogos from '@/components/Portfolio/components/ClientLogos';
import Background from '@/components/Portfolio/components/Background';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [showTags, setShowTags] = useState(false);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(
        (el): el is HTMLDivElement => el !== null
      );

      cards.forEach((card, i) => {
        // Pre-style for performance and stacking order - match Process component
        gsap.set(card, {
          zIndex: i + 1, // Higher z-index for cards that should appear on top
          willChange: 'transform',
          transform: 'translateZ(0)'
        });

        // Calculate proper end position - match Process component logic
        const endStr = (cards.length * 100 - 100 * (i + 1)) + '%';

        // Pin each card to stack vertically; no spacing so layers overlap
        ScrollTrigger.create({
          trigger: card,
          start: 'top top',
          end: endStr, // pin for one viewport height
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
          refreshPriority: i // Match Process component
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
      window.addEventListener('resize', onResize);

      return () => {
        window.removeEventListener('resize', onResize);
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
        <div className="sticky top-0">
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
                  onMouseEnter={() => setShowTags(true)}
                  onMouseLeave={() => setShowTags(false)}
                />
                <ProjectTags
                  project={project}
                  showMainContent={true}
                  showTags={showTags}
                />
                <StatisticsFrames
                  statisticsFrames={statisticsFrames}
                  showMainContent={showTags}
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