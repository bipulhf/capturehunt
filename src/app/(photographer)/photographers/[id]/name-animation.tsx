"use client";

import { motion } from "motion/react";
import { Photographer } from "@/data/photographets";
import SignupFormDemo from "@/components/signup-form-demo";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

const buttonVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.5,
      duration: 0.5,
    },
  },
  hover: {
    scale: 1.05,
    backgroundColor: "white",
    color: "black",
    transition: {
      duration: 0.2,
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
      <Dialog>
        <DialogTrigger asChild>
          <motion.button
            variants={buttonVariants}
            whileHover='hover'
            className='px-8 py-4 border-2 border-white text-white rounded-full text-lg font-medium cursor-pointer'
          >
            Connect with me
          </motion.button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Connect with {photographer.name}</DialogTitle>
          </DialogHeader>
          <SignupFormDemo />
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}
