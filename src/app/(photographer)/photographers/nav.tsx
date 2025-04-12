"use client";

import Link from "next/link";

export function Nav({ id, color }: { id: string; color: string }) {
  return (
    <nav
      className='nav'
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        padding: "1rem",
        width: "100vw",
        zIndex: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color,
      }}
    >
      <div className='logo font-[family-name:var(--font-horta)] text-3xl'>
        <Link href='/'>Capture Hunt</Link>
      </div>
      <div className='links flex gap-4 text-lg uppercase font-semibold'>
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
