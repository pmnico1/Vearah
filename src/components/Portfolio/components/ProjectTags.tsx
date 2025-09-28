'use client';

import { motion, AnimatePresence } from 'motion/react';
import { Project } from '@/components/Portfolio/types';

interface ProjectTagsProps {
  project: Project;
  showMainContent: boolean;
  showTags: boolean;
}

const tagPositions = [
  { key: 'top', className: 'top-[20vh] left-1/2 transform -translate-x-1/2', delay: 0.1 },
  { key: 'left1', className: 'top-[35vh] left-[15%]', delay: 0.2 },
  { key: 'left2', className: 'top-[45vh] left-[10%]', delay: 0.3 },
  { key: 'right1', className: 'top-[35vh] right-[15%]', delay: 0.15 },
  { key: 'right2', className: 'top-[45vh] right-[10%]', delay: 0.25 },
];

export default function ProjectTags({ project, showMainContent, showTags }: ProjectTagsProps) {
  return (
    <AnimatePresence>
      {showMainContent && showTags && (
        <>
          {tagPositions.map(({ key, className, delay }, index) => (
            <motion.div
              key={`${key}-${project.title}`}
              initial={{
                opacity: 0,
                ...(key.includes('left') ? { x: -20 } : key.includes('right') ? { x: 20 } : { y: -20 })
              }}
              animate={{
                opacity: 1,
                ...(key.includes('left') ? { x: 0 } : key.includes('right') ? { x: 0 } : { y: 0 })
              }}
              exit={{
                opacity: 0,
                ...(key.includes('left') ? { x: -20 } : key.includes('right') ? { x: 20 } : { y: -20 })
              }}
              transition={{ duration: 0.3, delay }}
              className={`absolute ${className} z-20`}
            >
              <div className="bg-[#262626] rounded-[30px] px-4 py-2 border border-white/10">
                <span className="text-white text-sm font-['Urbanist',_sans-serif]">
                  {project.tags[index]}
                </span>
              </div>
            </motion.div>
          ))}
        </>
      )}
    </AnimatePresence>
  );
}
