"use client";

import { motion } from "motion/react";
import { Photographer } from "@/data/photographets";

const nameVariants = {
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.6, -0.05, 0.01, 0.99],
      staggerChildren: 0.1,
    },
  },
};

const letterVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

interface NameAnimationProps {
  photographer: Photographer;
}

export function NameAnimation({ photographer }: NameAnimationProps) {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={nameVariants}
      className='min-h-screen flex flex-col items-center justify-center'
    >
      <motion.h1
        className='font-[family-name:var(--font-horta)] text-[20rem] uppercase'
        variants={nameVariants}
      >
        {photographer.name.split("").map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className='inline-block'
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>
    </motion.div>
  );
}
