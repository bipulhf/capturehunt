"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Photographer } from "@/data/photographets";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    x: -100,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

interface InfoAnimationProps {
  photographer: Photographer;
}

export function InfoAnimation({ photographer }: InfoAnimationProps) {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={containerVariants}
      className='h-screen overflow-hidden flex gap-10'
    >
      <motion.div variants={imageVariants} className='relative w-1/2 h-full'>
        <Image
          src={photographer.image}
          alt={photographer.name}
          fill
          className='object-cover'
          priority
        />
      </motion.div>
      <motion.div
        variants={textVariants}
        className='w-1/2 flex items-center pr-10'
      >
        <div className='space-y-4'>
          <h1 className='text-3xl font-bold leading-relaxed text-justify'>
            {photographer.bio}
          </h1>
          <div className='flex items-center gap-2'>
            <span className='text-yellow-400'>★</span>
            <span className='text-xl'>{photographer.rating}</span>
          </div>
          <p className='text-xl text-gray-300'>{photographer.location}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
