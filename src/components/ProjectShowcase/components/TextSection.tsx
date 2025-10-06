'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

interface TextSectionProps {
  content?: string;
  tagline?: string;
}

export default function TextSection({ content, tagline }: TextSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden"
    >
      {/* Background gradient animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.1 } : {}}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20"
      />
      
      <div className="w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-12"
        >
          {content && (
            <motion.h2
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 0.2,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-relaxed cursor-default"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="block"
              >
                {content}
              </motion.span>
            </motion.h2>
          )}
          
          {tagline && (
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 0.6,
                ease: "easeOut"
              }}
              whileHover={{ 
                x: 10,
                transition: { duration: 0.3 }
              }}
              className="text-base md:text-xl text-gray-400 leading-relaxed cursor-default"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="block"
              >
                {tagline}
              </motion.span>
            </motion.p>
          )}
        </motion.div>
      </div>
      
      {/* Floating particles animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.3 } : {}}
        transition={{ duration: 2, delay: 1 }}
        className="absolute inset-0 pointer-events-none"
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={isInView ? {
              y: [null, -20, 20, -10, 10, 0],
              opacity: [0, 0.5, 0.3, 0.7, 0.2, 0]
            } : {}}
            transition={{
              duration: 4 + Math.random() * 2,
              delay: i * 0.5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
          />
        ))}
      </motion.div>
    </section>
  );
}

