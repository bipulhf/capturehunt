"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-[#37404d] overflow-hidden'>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className='flex flex-col items-center gap-4'
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src='/images/logo_white.png'
            alt='CaptureHunt Logo'
            width={120}
            height={120}
            className='w-24 h-24 sm:w-32 sm:h-32'
            priority
          />
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.5 }}
          className='h-1 bg-[#e18c03] rounded-full'
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className='text-white text-sm sm:text-base font-medium'
        >
          Loading projects...
        </motion.p>
      </motion.div>
    </div>
  );
}
