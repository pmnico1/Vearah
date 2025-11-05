'use client';

import Header from '@/components/Header';
import { Project } from './data';
import Footer from '@/components/Footer';
import Image from 'next/image';
import DualImageSection from '@/components/ProjectShowcase/components/DualImageSection';

interface ProjectShowcaseProps {
  project: Project;
}

export default function ProjectShowcase({ project }: ProjectShowcaseProps) {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <Header />
      <div className="lg:px-50 px-10">

        <h1 className="text-white lg:text-6xl md:text-5xl text-4xl py-25">{project.title}</h1>
        <div className='w-full max-h-[700px] overflow-hidden rounded-4xl'>
          <Image src={project.images[0]} className='w-full h-full scale-100 hover:scale-105 transition-all duration-1000' alt={project.title} width={1500} height={1000} />
        </div>
        <div className='pt-50'>
          <p className='text-[24px]'>Overview</p>
          <p className='pt-8 text-[40px]'>{project.overview}</p>
        </div>
        <div className='flex justify-between items-center pt-20 pb-50 text-[24px]'>
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
        <div className='text-[24px] py-50'>
          <p>Challenge</p>
          <p className='text-[40px]'>{project.challengeTitle}</p>
          <ul className='list-disc list-inside pt-10 pl-5'>
            {
              project.challenges.map((item, index) => (
                <li key={index}>{item}</li>
              ))
            }
          </ul>
        </div>
        <div className='text-[24px] py-50'>
          <p>The Vision</p>
          <p className='text-[40px]'>{project.visionTitle}</p>
          <ul className='list-disc list-inside pt-10 pl-5'>
            {
              project.visions.map((item, index) => (
                <li key={index}>{item}</li>
              ))
            }
          </ul>
        </div>
        <Image src={project.images[0]} className='w-full h-auto scale-100 hover:scale-105 transition-all duration-1000 rounded-[40px]' alt={project.title} width={1500} height={1000} />
        <div className='text-[24px] py-50'>
          <p>Key Features</p>
          {
            project.feature.map((item, index) => (
              <div key={index} className='pt-23'>
                <p className='text-[40px]'>{item.title}</p>
                <ul className='list-disc list-inside pt-10 pl-5'>
                  {
                    item.contents.map((item, index1) => (
                      <li key={index1}>{item}</li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
        <Image src={project.images[0]} className='w-full h-auto scale-100 hover:scale-105 transition-all duration-1000 rounded-[40px]' alt={project.title} width={1500} height={1000} />
        <div className='text-[24px] py-50'>
          <p>Impact Goals</p>
          <p className='text-[40px]'>{project.goalTitle}</p>
          <ul className='list-disc list-inside pt-10 pl-5'>
            {
              project.goals.map((item, index) => (
                <li key={index}>{item}</li>
              ))
            }
          </ul>
        </div>
      </div>
      <div className='h-80' />


      {/* Dual Image Section */}
      <Footer />
    </div>
  );
}
