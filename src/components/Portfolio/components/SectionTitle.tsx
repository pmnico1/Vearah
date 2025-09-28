'use client';

import { motion } from 'motion/react';

interface SectionTitleProps {
  titleOpacity: number;
}

export default function SectionTitle({ titleOpacity }: SectionTitleProps) {
  return (
    <motion.div
      className="absolute top-[100px] left-1/2 transform -translate-x-1/2 w-full max-w-[1430px] z-20 px-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: titleOpacity, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className="flex flex-col gap-[24px] items-center text-center font-['Urbanist',_sans-serif] not-italic">
        <motion.p
          className="relative shrink-0 text-[#cccccc] text-[20px] w-full leading-normal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Use Cases
        </motion.p>
        <motion.div
          className="relative shrink-0 text-[40px] text-white w-full leading-normal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="mb-0">The future isn`t hypothetical. </p>
          <p>We`ve already built it for others.</p>
        </motion.div>
      </div>
    </motion.div>
  );
}