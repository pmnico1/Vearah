'use client';

import { Project } from '@/components/Portfolio/types';
import Image from 'next/image';
import { useState } from 'react';
import ProjectTags from './ProjectTags';
import StatisticsFrames from './StatisticsFrames';
import { statisticsFrames } from '@/components/Portfolio/data';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      key={project.title}
      className="relative bg-[#131315] h-[550px] left-1/2 transform -translate-x-1/2 rounded-[50px] w-[700px] z-30"
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    >
      <div className="box-border flex gap-[10px] h-[550px] items-center overflow-hidden p-[10px] relative w-[700px]">
        <div className="flex flex-col gap-[10px] grow h-full items-start min-h-px min-w-px relative shrink-0">
          <div className="h-[450px] overflow-hidden relative rounded-[40px] shrink-0 w-full">
            <div className="absolute h-[544px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[696px]">
              <Image
                alt={project.title}
                width={500}
                height={400}
                className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full"
                src={project.image}
              />
            </div>
          </div>
          <div className="basis-0 grow min-h-px min-w-px relative rounded-[40px] shrink-0 w-full overflow-hidden ">
            <div className="flex flex-row items-center justify-center overflow-hidden relative size-full">
              <div className="box-border rounded-full bg-[#151518] flex gap-[10px] items-center justify-center leading-normal not-italic px-[40px] py-[10px] relative size-full text-[18px] text-nowrap whitespace-pre">
                <p className="font-['Urbanist',_sans-serif] font-semibold relative shrink-0 text-[#a0ff7b]">
                  {project.title}
                </p>
                <p className="font-['Urbanist',_sans-serif] relative shrink-0 text-white">
                  {project.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Show ProjectTags and StatisticsFrames on hover */}
      {isHovered && (
        <>
          <ProjectTags
            project={project}
          />
          <StatisticsFrames
            statisticsFrames={statisticsFrames}
          />
        </>
      )}
    </div>
  );
}