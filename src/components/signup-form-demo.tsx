"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export default function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className='shadow-input rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black'>
      <form className='my-8' onSubmit={handleSubmit}>
        <div className='mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2'>
          <LabelInputContainer>
            <Label htmlFor='firstname'>First name</Label>
            <Input id='firstname' placeholder='Tyler' type='text' />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor='lastname'>Last name</Label>
            <Input id='lastname' placeholder='Durden' type='text' />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className='mb-4'>
          <Label htmlFor='email'>Email Address</Label>
          <Input id='email' placeholder='projectmayhem@fc.com' type='email' />
        </LabelInputContainer>
        <HoverBorderGradient className='bg-black text-white cursor-pointer'>
          Submit
        </HoverBorderGradient>
      </form>
    </div>
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
