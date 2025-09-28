'use client';

import { motion, AnimatePresence } from 'motion/react';
import { Project } from '@/components/Portfolio/types';
import Image from 'next/image';


const clientLogos = [
  {
    title: 'Client 1',
    image: '/images/clients/1.png',
  },
  {
    title: 'Client 2',
    image: '/images/clients/2.png',
  },
  {
    title: 'Client 3',
    image: '/images/clients/3.png',
  },
  {
    title: 'Client 4',
    image: '/images/clients/4.png',
  },
  {
    title: 'Client 5',
    image: '/images/clients/5.png',
  },
];

export default function ClientLogos() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.5 }}
        className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-full max-w-[1400px] px-8 z-20"
      >
        <div className="flex gap-[30px] items-center justify-center">
          {clientLogos.map((client, index) => (
            <div
              key={index}
              className="basis-0 grow h-[100px] min-h-px min-w-px overflow-hidden relative rounded-[10px] shrink-0 max-w-[256px]"
            >
              <div className="absolute h-[56px] left-[48px] top-[22px] w-[160px]">
                <Image
                  width={256}
                  height={100}
                  alt={client.title}
                  className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full"
                  src={client.image}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}