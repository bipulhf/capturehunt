"use client";

import { motion } from "framer-motion";
import Carousel from "@/components/ui/carousel";

const dummyProjects = [
  {
    title: "Wedding Photography",
    button: "View Project",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Portrait Series",
    button: "View Project",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Landscape Collection",
    button: "View Project",
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Street Photography",
    button: "View Project",
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function ProjectsPage() {
  return (
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
          <Carousel slides={dummyProjects} />
        </motion.div>
      </div>
    </motion.div>
  );
}
