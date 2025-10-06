'use client';

import Header from '@/components/Header';
import { ProjectData } from './data';
import Footer from '@/components/Footer';
import Image from 'next/image';
import TextSection from '@/components/ProjectShowcase/components/TextSection';
import DualImageSection from '@/components/ProjectShowcase/components/DualImageSection';

interface ProjectShowcaseProps {
  project: ProjectData;
}

export default function ProjectShowcase({ project }: ProjectShowcaseProps) {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <Header />
      <div className="md:p-32 p-10">

        <h1 className="text-white lg:text-6xl md:text-5xl text-4xl">{project.title}</h1>
        <div className='w-full max-h-[700px] overflow-hidden rounded-4xl my-10'>
          <Image src={project.images[0]} className='w-full h-full scale-100 hover:scale-105 transition-all duration-1000' alt={project.title} width={1000} height={1000} />
        </div>
        <TextSection
          content={project.description}
          tagline={project.tagline}
        />
        <DualImageSection images={project.images} />
        <TextSection
          content={project.description}
          tagline={project.tagline}
        />
      </div>


      {/* Dual Image Section */}
      <Footer />
    </div>
  );
}
