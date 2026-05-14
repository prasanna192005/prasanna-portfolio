"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-12 py-8 shrink-0 z-[100]">
      <div className="flex items-center space-x-3 group cursor-pointer">
        <div className="w-10 h-10 flex items-center justify-center border-2 border-white/40 rounded-full group-hover:border-white group-hover:bg-white group-hover:text-black transition-all">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
        <span className="font-pixel text-[10px] tracking-[0.1em] opacity-60 group-hover:opacity-100 uppercase text-white">System_Core</span>
      </div>
      <nav className="flex space-x-10 text-[10px] font-pixel uppercase tracking-[0.2em] text-white">
        <Link href="/" className="hover:line-through transition-all">Home</Link>
        <Link href="/projects" className="hover:line-through transition-all">Projects</Link>
        <Link href="/about" className="hover:line-through transition-all">About</Link>
        <Link href="/contact" className="hover:line-through transition-all">Contact</Link>
        <Link href="/resume" className="hover:line-through transition-all font-bold border-b-2 border-white/30 pb-0.5">Resume</Link>
      </nav>
    </header>
  );
};

export default Navbar;
