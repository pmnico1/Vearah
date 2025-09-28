'use client';

import { motion, AnimatePresence } from 'motion/react';
import { Project } from '@/components/Portfolio/types';

interface ProjectCardProps {
  project: Project;
  showMainContent: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function ProjectCard({
  project,
  showMainContent,
  onMouseEnter,
  onMouseLeave
}: ProjectCardProps) {
  return (
    <AnimatePresence mode="wait">
      {showMainContent && (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute bg-[#131315] h-[550px] left-1/2 transform -translate-x-1/2 rounded-[50px] top-[25vh] w-[700px] z-30"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className="box-border flex gap-[10px] h-[550px] items-center overflow-hidden p-[10px] relative w-[700px]">
            <div className="flex flex-col gap-[10px] grow h-full items-start min-h-px min-w-px relative shrink-0">
              {/* Project Image */}
              <div className="bg-[#151518] h-[450px] overflow-hidden relative rounded-[40px] shrink-0 w-full">
                <div className="absolute h-[544px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[696px]">
                  <img
                    alt={project.title}
                    className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full"
                    src={project.image}
                  />
                </div>
              </div>

              {/* Project Title */}
              <div className="basis-0 grow min-h-px min-w-px relative rounded-[40px] shrink-0 w-full bg-gradient-to-r from-[#151518] to-[#151518]">
                <div className="flex flex-row items-center justify-center overflow-hidden relative size-full">
                  <div className="box-border flex gap-[10px] items-center justify-center leading-normal not-italic px-[40px] py-[10px] relative size-full text-[18px] text-nowrap whitespace-pre">
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
          <div className="absolute inset-[-2px] pointer-events-none shadow-[0px_10px_30px_0px_inset_#000000]" />
          <div aria-hidden="true" className="absolute border-4 border-[#78ff42] border-solid inset-[-2px] pointer-events-none rounded-[52px]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}