import { photographers } from "@/data/photographets";
import { Nav } from "../nav";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}>) {
  const { id } = await params;
  const photographer = photographers.find((p) => p.id === id);

  return (
    <main className={`min-h-screen ${photographer!.color} text-white`}>
      <Nav id={id} />
      <div className='relative z-10'>{children} </div>
      <div className='absolute top-0 left-0 w-full h-full z-0'>
        <ShootingStars />
        <StarsBackground />
      </div>
    </main>
  );
}
