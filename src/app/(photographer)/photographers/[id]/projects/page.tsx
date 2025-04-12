"use client";

import { motion } from "framer-motion";
import Carousel from "@/components/ui/carousel";
import { usePhotographerStore } from "@/store/photographer-store";
import { useParams } from "next/navigation";
import { Nav } from "../../nav";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";

export default function ProjectsPage() {
  const params = useParams();

  const photographer = usePhotographerStore((state) =>
    state.getPhotographer(params.id as string)
  );

  if (!photographer) {
    return null;
  }

  return (
    <main
      className={`min-h-screen}`}
      style={{
        backgroundColor: photographer.color,
        color: photographer.textColor,
      }}
    >
      <Nav id={params.id as string} color={photographer.textColor} />
      <div className='relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='min-h-screen flex items-center justify-center overflow-hidden'
        >
          <div className='max-w-7xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Carousel slides={photographer.projects || []} />
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className='absolute top-0 left-0 w-full h-full z-0'>
        <ShootingStars />
        <StarsBackground />
      </div>
    </main>
  );
}
