"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const text = "Find Your Perfect Photographer";
const words = text.split(" ");

export const Hero = () => {
  return (
    <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-20'>
      <motion.div
        className='text-center md:text-left'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className='text-4xl md:text-6xl font-bold mb-6 leading-tight'>
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.2,
                delay: i * 0.1,
              }}
              className={
                i === words.length - 1
                  ? "text-[#e18c03] text-8xl relative font-[family-name:var(--font-horta)]"
                  : ""
              }
            >
              {word}
              {i < words.length - 1 ? " " : ""}
              {i === words.length - 1 && (
                <span className='absolute -bottom-2 left-0 w-full h-1 bg-[#e18c03] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300' />
              )}
            </motion.span>
          ))}
        </h1>
        <p className='text-xl md:text-2xl mb-8 text-gray-300 max-w-lg'>
          Discover talented photographers for your special moments. Book your
          perfect shoot today.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center md:justify-start'>
          <Link href='/photographers' className='cursor-pointer'>
            <HoverBorderGradient className='cursor-pointer'>
              Find Photographers
            </HoverBorderGradient>
          </Link>
          <Link href='/create' className='hover:underline'>
            Create Portfolio
          </Link>
        </div>
      </motion.div>
      <motion.div
        className='relative h-[400px] md:h-[500px] w-full'
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Image
          src='https://images.unsplash.com/photo-1499417267106-45cebb7187c9?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='Photographer at work'
          fill
          className='object-cover rounded-lg shadow-2xl'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-[#37404d]/50 to-transparent rounded-lg' />
      </motion.div>
    </div>
  );
};
