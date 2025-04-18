"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { Photographer } from "@/data/photographets";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { usePhotographerStore } from "@/store/photographer-store";
import { motion } from "framer-motion";

export default function PhotographerForm() {
  const [formData, setFormData] = useState<Omit<Photographer, "id" | "rating">>(
    {
      name: "",
      specialty: "",
      image: "",
      location: "",
      bio: "",
      color: "#000000",
      textColor: "#ffffff",
      projects: [],
    }
  );
  const [portfolioLinks, setPortfolioLinks] = useState<
    { title: string; src: string }[]
  >([{ title: "", src: "" }]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const addPhotographer = usePhotographerStore(
    (state) => state.addPhotographer
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const updatedFormData = {
      ...formData,
      projects: portfolioLinks.filter((link) => link.title && link.src),
    };

    addPhotographer(updatedFormData);

    router.push(
      `/photographers/${usePhotographerStore.getState().photographers.length}`
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePortfolioLinkChange = (
    index: number,
    field: "title" | "src",
    value: string
  ) => {
    const newLinks = [...portfolioLinks];
    newLinks[index] = { ...newLinks[index], [field]: value };
    setPortfolioLinks(newLinks);
  };

  const removePortfolioLink = (index: number) => {
    const newLinks = portfolioLinks.filter((_, i) => i !== index);
    setPortfolioLinks(newLinks);
  };

  const addPortfolioLink = () => {
    setPortfolioLinks([...portfolioLinks, { title: "", src: "" }]);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='shadow-input rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black'
    >
      <form className='my-8' onSubmit={handleSubmit}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <LabelInputContainer className='mb-4'>
            <Label htmlFor='name'>Full Name</Label>
            <Input
              id='name'
              name='name'
              placeholder='John Doe'
              type='text'
              value={formData.name}
              onChange={handleInputChange}
            />
          </LabelInputContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <LabelInputContainer className='mb-4'>
            <Label htmlFor='specialty'>Specialty</Label>
            <Input
              id='specialty'
              name='specialty'
              placeholder='Wedding Photography'
              type='text'
              value={formData.specialty}
              onChange={handleInputChange}
              required
            />
          </LabelInputContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <LabelInputContainer className='mb-4'>
            <Label htmlFor='image'>Profile Image URL</Label>
            <Input
              id='image'
              name='image'
              placeholder='https://example.com/image.jpg'
              type='url'
              value={formData.image}
              onChange={handleInputChange}
              required
            />
          </LabelInputContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <LabelInputContainer className='mb-4'>
            <Label htmlFor='location'>Location</Label>
            <Input
              id='location'
              name='location'
              placeholder='New York, USA'
              type='text'
              value={formData.location}
              onChange={handleInputChange}
              required
            />
          </LabelInputContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <LabelInputContainer className='mb-4'>
            <Label htmlFor='bio'>Bio</Label>
            <textarea
              id='bio'
              name='bio'
              className='flex h-20 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-zinc-800'
              placeholder='Tell us about yourself...'
              value={formData.bio}
              onChange={handleInputChange}
              required
            />
          </LabelInputContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className='mb-4 flex items-center justify-between gap-10'
        >
          <Label>Color Preview</Label>
          <div className='flex gap-4 items-center'>
            <div className='flex-1'>
              <Label htmlFor='color'>Background Color</Label>
              <div className='flex gap-2'>
                <Input
                  id='color'
                  name='color'
                  type='color'
                  value={formData.color}
                  onChange={handleInputChange}
                  className='w-20 h-10 p-1'
                  required
                />
                <Input
                  type='text'
                  value={formData.color}
                  onChange={handleInputChange}
                  required
                  className='flex-1'
                />
              </div>
            </div>
            <div className='flex-1'>
              <Label htmlFor='textColor'>Text Color</Label>
              <div className='flex gap-2'>
                <Input
                  id='textColor'
                  name='textColor'
                  type='color'
                  value={formData.textColor}
                  onChange={handleInputChange}
                  className='w-20 h-10 p-1'
                  required
                />
                <Input
                  type='text'
                  value={formData.textColor}
                  onChange={handleInputChange}
                  className='flex-1'
                  required
                />
              </div>
            </div>
          </div>
          <div
            className='mt-2 p-4 rounded-lg text-center border border-gray-50'
            style={{
              backgroundColor: formData.color,
              color: formData.textColor,
            }}
          >
            Preview of how your page will look
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className='mb-4'
        >
          <Label>Image Links</Label>
          {portfolioLinks.map((link, index) => (
            <div key={index} className='mb-4'>
              <div className='flex w-full items-center gap-2'>
                <div className='flex-1 min-w-0'>
                  <Input
                    type='text'
                    placeholder='Image Title'
                    value={link.title}
                    className='w-full'
                    onChange={(e) =>
                      handlePortfolioLinkChange(index, "title", e.target.value)
                    }
                    required
                  />
                </div>
                <div className='flex-1 min-w-0'>
                  <Input
                    type='url'
                    placeholder='https://example.com/portfolio'
                    value={link.src}
                    className='w-full'
                    onChange={(e) =>
                      handlePortfolioLinkChange(index, "src", e.target.value)
                    }
                    required
                  />
                </div>
                {portfolioLinks.length > 1 && (
                  <button
                    type='button'
                    onClick={() => removePortfolioLink(index)}
                    className='text-red-500 cursor-pointer transition-colors shrink-0'
                  >
                    <Trash2 />
                  </button>
                )}
              </div>
            </div>
          ))}
          <button
            type='button'
            onClick={addPortfolioLink}
            className='text-sm cursor-pointer text-[#e18c03] hover:underline'
          >
            + Add another image link
          </button>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <HoverBorderGradient
            className={`bg-black text-white ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </HoverBorderGradient>
        </motion.div>
      </form>
    </motion.div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
