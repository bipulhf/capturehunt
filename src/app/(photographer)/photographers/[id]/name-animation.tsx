"use client";

import { motion, AnimatePresence } from "motion/react";
import SignupFormDemo from "@/components/signup-form-demo";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { usePhotographerStore } from "@/store/photographer-store";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { Nav } from "../nav";
import dynamic from "next/dynamic";
import { useState } from "react";

const Confetti = dynamic(() => import("react-confetti"), {
  ssr: false,
});

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
  id: string;
}

export function NameAnimation({ id }: NameAnimationProps) {
  const photographer = usePhotographerStore((state) =>
    state.getPhotographer(id)
  );
  const [showConfetti, setShowConfetti] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  if (!photographer) {
    return null;
  }

  const handleFormSuccess = () => {
    setIsOpen(false);
    setShowConfetti(true);
    setShowSuccess(true);

    // Start fading out after 5 seconds
    setTimeout(() => {
      setShowConfetti(false);
      // Delay success message fade out slightly
      setTimeout(() => {
        setShowSuccess(false);
      }, 500);
    }, 5000);
  };

  return (
    <main
      style={{
        backgroundColor: photographer.color,
        color: photographer.textColor,
      }}
      className={`min-h-screen`}
    >
      <AnimatePresence>
        {showConfetti && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Confetti width={window.innerWidth} height={window.innerHeight} />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className='fixed right-4 bottom-4 z-50 bg-black text-white px-6 py-3 rounded-lg shadow-lg'
          >
            <div className='flex items-center gap-2'>
              <span className='text-2xl'>🎉</span>
              <div>
                <p className='font-semibold'>Success!</p>
                <p className='text-sm text-gray-200'>
                  Thank you for connecting!
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Nav id={id} color={photographer.textColor} />
      <div className='relative z-10'>
        {" "}
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
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
              <SignupFormDemo onSuccess={handleFormSuccess} />
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
      <div className='absolute top-0 left-0 w-full h-full z-0'>
        <ShootingStars />
        <StarsBackground />
      </div>
    </main>
  );
}
