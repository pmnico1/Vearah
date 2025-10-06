'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export default function FooterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center px-8 md:px-16 lg:px-24 py-20 bg-black relative overflow-hidden"
    >
      {/* Decorative gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-1/2 bg-gradient-to-t from-blue-950/20 to-transparent blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1 }}
        className="relative z-10 text-center space-y-12"
      >
        <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-white tracking-wider">
          VEARAH
        </h1>

        <div className="flex gap-8 items-center justify-center">
          {['Instagram', 'LinkedIn', 'Behance'].map((platform, index) => (
            <motion.div
              key={platform}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
            >
              <span className="text-white text-xs font-medium">
                {platform.charAt(0)}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
        >
          We are not just a design and tech agency, we are a future-building partner where creativity meets intelligence, and every product becomes a story worth experiencing.
        </motion.p>
      </motion.div>
    </section>
  );
}