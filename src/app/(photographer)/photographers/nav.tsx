"use client";

import Link from "next/link";

export function Nav({ id }: { id: string }) {
  return (
    <nav className='nav'>
      <div className='logo font-[family-name:var(--font-horta)] text-3xl'>
        <Link href='/'>Capture Hunt</Link>
      </div>
      <div className='links flex gap-4'>
        <div className='link'>
          <Link href={`/photographers/${id}`}>Home</Link>
        </div>
        <div className='link'>
          <Link href={`/photographers/${id}/info`}>Info</Link>
        </div>
        <div className='link'>
          <Link href={`/photographers/${id}/projects`}>Projects</Link>
        </div>
      </div>
    </nav>
  );
}
