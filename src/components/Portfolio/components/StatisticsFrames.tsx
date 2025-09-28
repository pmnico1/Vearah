'use client';

import { motion, AnimatePresence } from 'motion/react';
import { StatisticsFrame } from '@/components/Portfolio/types';

interface StatisticsFramesProps {
  statisticsFrames: StatisticsFrame[];
  showMainContent: boolean;
}

export default function StatisticsFrames({ statisticsFrames, showMainContent }: StatisticsFramesProps) {
  return (
    <AnimatePresence>
      {showMainContent && (
        <>
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
              transition={{ duration: 0.6, delay: frame.delay }}
              className={`absolute ${frame.position.top ? `top-[${frame.position.top}]` : ''
                } ${frame.position.bottom ? `bottom-[${frame.position.bottom}]` : ''
                } ${frame.position.left ? `left-[${frame.position.left}]` : ''
                } ${frame.position.right ? `right-[${frame.position.right}]` : ''
                } ${frame.id === 'experience' ? 'bg-[#010101] -translate-y-40' : ''
                } box-border flex flex-col  gap-[10px] items-start overflow-hidden px-[40px] py-[30px] rounded-[20px] z-20`}
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
        </>
      )}
    </AnimatePresence>
  );
}
