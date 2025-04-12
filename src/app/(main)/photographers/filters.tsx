"use client";

import { Search, Camera } from "lucide-react";
import { cn } from "@/lib/utils";

interface FiltersProps {
  searchTerm: string;
  selectedSpecialty: string;
  specialties: string[];
  onSearchChange: (value: string) => void;
  onSpecialtyChange: (value: string) => void;
}

export function Filters({
  searchTerm,
  selectedSpecialty,
  specialties,
  onSearchChange,
  onSpecialtyChange,
}: FiltersProps) {
  return (
    <div className='w-full md:w-72 space-y-4 md:space-y-6 p-4 md:p-0'>
      <h2 className='text-xl md:text-2xl font-bold'>Filters</h2>

      {/* Search Input */}
      <div className='relative'>
        <Search className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4' />
        <input
          type='text'
          placeholder='Search photographers...'
          className='w-full pl-10 pr-4 py-2 rounded-lg bg-black-85 text-white border border-gray-700 focus:border-[#e18c03] focus:ring-1 focus:ring-[#e18c03] transition-all text-sm md:text-base'
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      {/* Specialty Filter */}
      <div className='space-y-2'>
        <div className='flex items-center gap-2 text-gray-400'>
          <Camera className='w-4 h-4' />
          <span className='text-sm font-medium'>Specialty</span>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-1 gap-2'>
          {specialties.map((specialty) => (
            <button
              key={specialty}
              onClick={() => onSpecialtyChange(specialty)}
              className={cn(
                "w-full text-left px-3 md:px-4 py-2 rounded-lg transition-all text-sm md:text-base",
                selectedSpecialty === specialty
                  ? "bg-[#e18c03] text-white"
                  : "bg-black-85 text-gray-300 hover:bg-gray-700"
              )}
            >
              {specialty.charAt(0).toUpperCase() + specialty.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
