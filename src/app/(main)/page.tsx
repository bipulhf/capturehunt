import { NavbarDemo } from "@/components/navbar";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Hero } from "@/components/hero";
import { WhyUs } from "@/components/why-us";
import { HappyCustomer } from "@/components/happy-custormer";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className='min-h-screen text-white py-1'>
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
        <HappyCustomer />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
