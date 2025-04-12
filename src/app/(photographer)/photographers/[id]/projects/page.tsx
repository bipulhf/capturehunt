"use client";

import { motion } from "framer-motion";
import Carousel from "@/components/ui/carousel";
import { photographers } from "@/data/photographets";

export default function ProjectsPage({ params }: { params: { id: string } }) {
  const photographer = photographers.find((p) => p.id === params.id);

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
          <Carousel slides={photographer!.projects || []} />
        </motion.div>
      </div>
    </motion.div>
  );
}
