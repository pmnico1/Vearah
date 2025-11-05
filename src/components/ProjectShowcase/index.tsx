'use client';

import Header from '@/components/Header';
import { Project } from './data';
import Footer from '@/components/Footer';
import Image from 'next/image';
import DualImageSection from '@/components/ProjectShowcase/components/DualImageSection';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ProjectShowcaseProps {
  project: Project;
}

export default function ProjectShowcase({ project }: ProjectShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const overviewRef = useRef<HTMLDivElement>(null);
  const clientServicesRef = useRef<HTMLDivElement>(null);
  const challengeRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const featureRef = useRef<HTMLDivElement>(null);
  const goalRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Hero Title Animation
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
        }
      );
    }

    // Hero Image Animation
    if (heroImageRef.current) {
      gsap.fromTo(
        heroImageRef.current,
        {
          opacity: 0,
          scale: 1.1,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power2.out',
          delay: 0.3,
        }
      );
    }

    // Overview Section
    if (overviewRef.current) {
      const overviewElements = overviewRef.current.children;
      gsap.set(overviewElements, { opacity: 0, y: 30 });

      gsap.to(overviewElements, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: overviewRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }

    // Client/Services Section
    if (clientServicesRef.current) {
      const clientElements = clientServicesRef.current.children;
      gsap.set(clientElements, { opacity: 0, x: -30 });

      gsap.to(clientElements, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: clientServicesRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    }

    // Challenge Section
    if (challengeRef.current) {
      const challengeElements = challengeRef.current.children;
      gsap.set(challengeElements, { opacity: 0, y: 30 });

      gsap.to(challengeElements, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: challengeRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }

    // Vision Section
    if (visionRef.current) {
      const visionElements = visionRef.current.children;
      gsap.set(visionElements, { opacity: 0, y: 30 });

      gsap.to(visionElements, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: visionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }

    // Feature Section
    if (featureRef.current) {
      const featureItems = featureRef.current.children;
      gsap.set(featureItems, { opacity: 0, y: 40, scale: 0.95 });

      gsap.to(featureItems, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: featureRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }

    // Impact Goals Section
    if (goalRef.current) {
      const goalElements = goalRef.current.children;
      gsap.set(goalElements, { opacity: 0, y: 30 });

      gsap.to(goalElements, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: goalRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }

    // Images Animation
    const imageElements = imageRefs.current.filter(Boolean);
    if (imageElements.length > 0) {
      gsap.set(imageElements, {
        opacity: 0,
        scale: 0.9,
        y: 50,
      });

      imageElements.forEach((imgEl, index) => {
        if (imgEl) {
          gsap.to(imgEl, {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: imgEl,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          });
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [project]);

  return (
    <div className="min-h-screen bg-black" ref={containerRef}>
      {/* Hero Section */}
      <Header />
      <div className="lg:px-50 px-10">
        <h1
          ref={titleRef}
          className="text-white lg:text-6xl md:text-5xl text-4xl py-25"
        >
          {project.title}
        </h1>

        <div
          ref={heroImageRef}
          className='w-full max-h-[700px] overflow-hidden rounded-4xl'
        >
          <Image
            src={project.images[0]}
            className='w-full h-full scale-100 hover:scale-105 transition-all duration-1000'
            alt={project.title}
            width={1500}
            height={1000}
          />
        </div>

        <div ref={overviewRef} className='pt-50'>
          <p className='text-lg md:text-[24px]'>Overview</p>
          <p className='pt-8 text-3xl md:text-[40px]'>{project.overview}</p>
        </div>

        <div
          ref={clientServicesRef}
          className='flex justify-between items-center pt-20 pb-50 text-lg md:text-[24px]'
        >
          <div>
            <p>Client</p>
            <p>{project.client}</p>
          </div>
          <div>
            <p>Services</p>
            <p>{project.services}</p>
          </div>
        </div>

        <DualImageSection images={project.images} />

        <div ref={challengeRef} className='text-lg md:text-[24px] py-50'>
          <p>Challenge</p>
          <p className='text-3xl md:text-[40px]'>{project.challengeTitle}</p>
          <ul className='list-disc list-inside pt-10 pl-5'>
            {project.challenges.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div ref={visionRef} className='text-lg md:text-[24px] py-50'>
          <p>The Vision</p>
          <p className='text-3xl md:text-[40px]'>{project.visionTitle}</p>
          <ul className='list-disc list-inside pt-10 pl-5'>
            {project.visions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div
          ref={(el) => {
            imageRefs.current[0] = el;
          }}
        >
          <Image
            src={project.images[0]}
            className='w-full h-auto scale-100 hover:scale-105 transition-all duration-1000 rounded-[40px]'
            alt={project.title}
            width={1500}
            height={1000}
          />
        </div>

        <div ref={featureRef} className='text-lg md:text-[24px] py-50'>
          <p>Key Features</p>
          {project.feature.map((item, index) => (
            <div key={index} className='pt-23'>
              <p className='text-3xl md:text-[40px]'>{item.title}</p>
              <ul className='list-disc list-inside pt-10 pl-5'>
                {item.contents.map((item, index1) => (
                  <li key={index1}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          ref={(el) => {
            imageRefs.current[1] = el;
          }}
        >
          <Image
            src={project.images[0]}
            className='w-full h-auto scale-100 hover:scale-105 transition-all duration-1000 rounded-[40px]'
            alt={project.title}
            width={1500}
            height={1000}
          />
        </div>

        <div ref={goalRef} className='text-lg md:text-[24px] py-50'>
          <p>Impact Goals</p>
          <p className='text-3xl md:text-[40px]'>{project.goalTitle}</p>
          <ul className='list-disc list-inside pt-10 pl-5'>
            {project.goals.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className='h-10 md:h-80' />

      {/* Dual Image Section */}
      <Footer />
    </div>
  );
}
