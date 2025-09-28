'use client';

import { motion, AnimatePresence } from 'motion/react';

interface ProjectNavigationProps {
  currentProject: number;
  totalProjects: number;
  showMainContent: boolean;
}

export default function ProjectNavigation({
  currentProject,
  totalProjects,
  showMainContent
}: ProjectNavigationProps) {
  return (
    <AnimatePresence>
      {showMainContent && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20"
        >
          <div className="bg-gradient-to-r from-[#010101] to-[#171717] rounded-full p-4 border border-white/20">
            <div className="flex flex-col gap-2">
              {Array.from({ length: totalProjects }, (_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentProject ? 'bg-[#78ff42] scale-125' : 'bg-white/30'
                    }`}
                />
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-white/20">
              <p className="text-white/60 text-xs font-['Urbanist',_sans-serif] text-center">
                {currentProject + 1}/{totalProjects}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}