'use client';

import { motion, AnimatePresence } from 'motion/react';
import { StatisticsFrame } from '@/components/Portfolio/types';

interface StatisticsFramesProps {
  statisticsFrames: StatisticsFrame[];
}

export default function StatisticsFrames({ statisticsFrames }: StatisticsFramesProps) {
  return (
    <AnimatePresence>
      {statisticsFrames.map((frame) => (
        <motion.div
          key={frame.id}
          initial={{
            opacity: 0,
            ...(frame.position.left ? { x: -50 } : frame.position.right ? { x: 50 } : { y: 30 })
          }}
          animate={{
            opacity: 1,
            ...(frame.position.left ? { x: 0 } : frame.position.right ? { x: 0 } : { y: 0 })
          }}
          transition={{ duration: 0.6 }}
          className={`absolute ${frame.position.top ? `top-[6vh]` : ''
            } ${frame.position.bottom ? `-bottom-20` : ''
            } ${frame.position.left ? `-left-[37vh]` : ''
            } ${frame.position.right ? `-right-[40vh]` : ''
            } ${frame.id === 'experience' ? ' -translate-y-40' : ''
            } box-border flex flex-col  gap-[10px] items-start overflow-hidden px-[40px] py-[30px] rounded-[20px] z-20 bg-[#010101]`}
          style={frame.backgroundStyle}
        >
          <div className="flex gap-[20px] items-center not-italic relative shrink-0 text-nowrap text-white">
            <p className="font-['Urbanist',_sans-serif] font-thin leading-normal relative shrink-0 text-[70px] whitespace-pre">
              {frame.value}
            </p>
            <div className="font-['Urbanist',_sans-serif] leading-normal relative shrink-0 text-[18px] whitespace-pre">
              {frame.label.map((line, index) => (
                <p key={index} className={index === 0 ? 'mb-0' : ''}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </AnimatePresence>
  );
}
