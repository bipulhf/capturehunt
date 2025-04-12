import { NavbarDemo } from "@/components/navbar";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={`bg-white/10`}>
      <NavbarDemo />
      {children}
      <div className='absolute top-0 left-0 w-full h-full -z-10'>
        <ShootingStars />
        <StarsBackground />
      </div>
    </main>
  );
}
