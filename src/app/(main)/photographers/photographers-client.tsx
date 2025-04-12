"use client";

import { useState, useEffect } from "react";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { Filters } from "./filters";
import { Filter, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useRouter } from "next/navigation";
import { usePhotographerStore } from "@/store/photographer-store";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

const filterVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Dummy data for photographers

export function PhotographersClient() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const photographers = usePhotographerStore((state) => state.photographers);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setMounted(true);
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };

      checkMobile();
      window.addEventListener("resize", checkMobile);

      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);

  const specialties = [
    "all",
    ...new Set(photographers.map((p) => p.specialty)),
  ];

  const filteredPhotographers = photographers.filter((photographer) => {
    const matchesSearch =
      photographer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      photographer.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty =
      selectedSpecialty === "all" ||
      photographer.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  if (!mounted) {
    return null; // or a loading state
  }

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={containerVariants}
      className='min-h-screen text-white p-4 md:p-8 z-50 overflow-hidden'
    >
      <div className='max-w-7xl mx-auto'>
        <motion.div
          variants={itemVariants}
          className='flex items-center justify-between mb-6'
        >
          <h1 className='text-3xl md:text-4xl font-bold'>Photographers</h1>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className='md:hidden flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors'
          >
            {showFilters ? (
              <>
                <X className='w-5 h-5' />
                <span>Close</span>
              </>
            ) : (
              <>
                <Filter className='w-5 h-5' />
                <span>Filters</span>
              </>
            )}
          </button>
        </motion.div>

        <div className='flex flex-col md:flex-row gap-8 relative'>
          {/* Filters Sidebar - Hidden on mobile, shown on desktop */}
          <AnimatePresence>
            {(showFilters || !isMobile) && (
              <motion.div
                initial='hidden'
                animate='visible'
                exit='exit'
                variants={filterVariants}
                className={`md:flex-shrink-0 ${
                  isMobile
                    ? "fixed inset-0 z-50 bg-black/95 p-4 overflow-y-auto"
                    : ""
                }`}
              >
                <div className={`${isMobile ? "max-w-md mx-auto" : ""}`}>
                  <Filters
                    searchTerm={searchTerm}
                    selectedSpecialty={selectedSpecialty}
                    specialties={specialties}
                    onSearchChange={setSearchTerm}
                    onSpecialtyChange={setSelectedSpecialty}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Photographers Grid */}
          <motion.div layout className='flex-grow'>
            <motion.div
              layout
              variants={gridVariants}
              className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'
            >
              <AnimatePresence mode='popLayout'>
                {filteredPhotographers.map((photographer, index) => (
                  <motion.div
                    key={photographer.id}
                    layout
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                    variants={itemVariants}
                    custom={index}
                    className='w-full aspect-square'
                    onClick={() => {
                      router.push(`/photographers/${photographer.id}`);
                    }}
                  >
                    <DirectionAwareHover
                      imageUrl={photographer.image}
                      className='w-full h-full cursor-pointer'
                    >
                      <div className='space-y-2'>
                        <h3 className='text-xl font-bold'>
                          {photographer.name}
                        </h3>
                        <p className='text-sm text-gray-300'>
                          {photographer.specialty}
                        </p>
                        <p className='text-sm text-gray-300'>
                          {photographer.location}
                        </p>
                        <div className='flex items-center'>
                          <span className='text-yellow-400'>★</span>
                          <span className='ml-1'>{photographer.rating}</span>
                        </div>
                      </div>
                    </DirectionAwareHover>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
