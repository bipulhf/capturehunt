import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { unstable_ViewTransition as ViewTransition } from "react";
import { PhotographersClient } from "./photographers-client";

export default function Photographers() {
  return (
    <ViewTransition name='photographers'>
      <PhotographersClient />
      <div className='absolute top-0 left-0 w-full h-full -z-10'>
        <ShootingStars />
        <StarsBackground />
      </div>
    </ViewTransition>
  );
}
