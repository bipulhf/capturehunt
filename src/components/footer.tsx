"use client";

import Link from "next/link";
import Image from "next/image";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";

export const Footer = () => {
  return (
    <footer className='relative py-12 px-4 bg-black'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div>
            <Image
              src='/images/logo_white.png'
              alt='CaptureHunt Logo'
              width={100}
              height={100}
              className='mb-4'
              unoptimized
            />
            <h1 className='text-white text-3xl font-bold font-[family-name:var(--font-horta)]'>
              CaptureHunt
            </h1>
            <p className='text-gray-300'>
              Find the perfect photographer for your special moments
            </p>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/photographers'
                  className='text-gray-300 hover:text-[#e18c03]'
                >
                  Find Photographers
                </Link>
              </li>
              <li>
                <Link
                  href='/portfolio'
                  className='text-gray-300 hover:text-[#e18c03]'
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-4'>Contact Us</h3>
            <p className='text-gray-300'>
              Email: info@capturehunt.com
              <br />
              Phone: +1 (555) 123-4567
            </p>
          </div>
        </div>
        <div className='mt-8 pt-8 border-t border-gray-700 text-center text-gray-300'>
          <p>
            &copy; {new Date().getFullYear()} CaptureHunt. All rights reserved.
          </p>
        </div>
      </div>
      <ShootingStars />
      <StarsBackground />
    </footer>
  );
};
