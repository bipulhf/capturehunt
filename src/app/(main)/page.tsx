import { NavbarDemo } from "@/components/navbar";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Meteors } from "@/components/ui/meteors";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <main className='min-h-screen text-white'>
      <NavbarDemo />
      <BackgroundLines>
        {/* <ResizableNavbar /> */}

        {/* Hero Section */}
        <section className='relative h-screen flex items-center justify-center px-4 overflow-hidden'>
          <Hero />
        </section>
      </BackgroundLines>
      {/* Features Section */}
      <section className='py-20 px-4'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-4xl font-bold text-center mb-16'>
            Why Choose <span className='text-[#e18c03]'>CaptureHunt</span>
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='bg-white/10 p-6 rounded-lg backdrop-blur-sm'>
              <div className='w-16 h-16 bg-[#e18c03] rounded-full flex items-center justify-center mb-4'>
                <svg
                  className='w-8 h-8 text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 13a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold mb-2'>
                Professional Portfolio
              </h3>
              <p className='text-gray-300'>
                Browse through high-quality portfolios of professional
                photographers
              </p>
            </div>
            <div className='bg-white/10 p-6 rounded-lg backdrop-blur-sm'>
              <div className='w-16 h-16 bg-[#e18c03] rounded-full flex items-center justify-center mb-4'>
                <svg
                  className='w-8 h-8 text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold mb-2'>
                Verified Photographers
              </h3>
              <p className='text-gray-300'>
                Connect with verified and experienced photographers
              </p>
            </div>
            <div className='bg-white/10 p-6 rounded-lg backdrop-blur-sm'>
              <div className='w-16 h-16 bg-[#e18c03] rounded-full flex items-center justify-center mb-4'>
                <svg
                  className='w-8 h-8 text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold mb-2'>Quick Booking</h3>
              <p className='text-gray-300'>
                Easy and fast booking process for your photography needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='py-20 px-4 bg-white/5'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-4xl font-bold text-center mb-16'>
            Our Happy <span className='text-[#e18c03]'>Customers</span>
          </h2>
          {/* <AnimatedTestimonials /> */}
        </div>
      </section>

      {/* Footer */}
      <footer className='relative py-12 px-4 bg-[#37404d]'>
        <Meteors />
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div>
              <Image
                src='/images/logo_white.png'
                alt='CaptureHunt Logo'
                width={150}
                height={50}
                className='mb-4'
              />
              <p className='text-gray-300'>
                Find the perfect photographer for your special moments
              </p>
            </div>
            <div>
              <h3 className='text-xl font-semibold mb-4'>Quick Links</h3>
              <ul className='space-y-2'>
                <li>
                  <Link href='/' className='text-gray-300 hover:text-[#e18c03]'>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href='/find-photographers'
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
              &copy; {new Date().getFullYear()} CaptureHunt. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
