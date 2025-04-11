import { NavbarDemo } from "@/components/navbar";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Meteors } from "@/components/ui/meteors";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { WhyUs } from "@/components/why-us";

export default function Home() {
  return (
    <main className='min-h-screen text-white'>
      <NavbarDemo />
      <BackgroundLines>
        <section className='relative min-h-[calc(100vh-150px)] flex items-center justify-center overflow-hidden'>
          <Hero />
        </section>
      </BackgroundLines>
      {/* Features Section */}
      <section className='py-20 px-4 min-h-screen'>
        <WhyUs />
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
