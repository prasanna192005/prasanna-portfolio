"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed top-4 sm:top-8 left-0 w-full z-[100] flex justify-center px-4 sm:px-6">
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative group"
      >
        {/* The Patrika Frame (Manuscript Style) */}
        <div className="relative bg-[#FDFBF7] border border-[#BF360C]/30 px-3 sm:px-6 py-2 shadow-[0_15px_40px_rgba(191,54,12,0.1)] overflow-hidden">
          {/* Khadi Grain Overlay */}
          <div className="grain-overlay opacity-20 pointer-events-none" />

          {/* Temple Corner Brackets (Traditional Accent) */}
          <svg viewBox="0 0 20 20" className="absolute top-0 left-0 w-4 h-4 stroke-[#BF360C]/40 fill-none">
            <path d="M0 0 L20 0 M0 0 L0 20" strokeWidth="1" />
          </svg>
          <svg viewBox="0 0 20 20" className="absolute top-0 right-0 w-4 h-4 stroke-[#BF360C]/40 fill-none rotate-90">
            <path d="M0 0 L20 0 M0 0 L0 20" strokeWidth="1" />
          </svg>
          <svg viewBox="0 0 20 20" className="absolute bottom-0 right-0 w-4 h-4 stroke-[#BF360C]/40 fill-none rotate-180">
            <path d="M0 0 L20 0 M0 0 L0 20" strokeWidth="1" />
          </svg>
          <svg viewBox="0 0 20 20" className="absolute bottom-0 left-0 w-4 h-4 stroke-[#BF360C]/40 fill-none -rotate-90">
            <path d="M0 0 L20 0 M0 0 L0 20" strokeWidth="1" />
          </svg>

          {/* Navigation Links */}
          <nav className="flex items-center space-x-3 sm:space-x-6 relative z-10">
            {/* Logo Seal */}
            <Link href="/" className="flex items-center group/logo pr-2 sm:pr-3 border-r border-[#BF360C]/10">
              <svg viewBox="0 0 100 100" className="w-5 h-5 fill-[#BF360C] group-hover/logo:rotate-90 transition-transform duration-700">
                {[...Array(8)].map((_, i) => (
                  <path key={i} d="M50 50 Q65 20 50 0 Q35 20 50 50" transform={`rotate(${i * 45} 50 50)`} />
                ))}
                <circle cx="50" cy="50" r="10" fill="#FDFBF7" />
                <circle cx="50" cy="50" r="4" fill="#BF360C" />
              </svg>
            </Link>

            <div className="flex items-center space-x-2.5 sm:space-x-5 text-[8px] sm:text-[9px] font-pixel uppercase tracking-[0.15em] sm:tracking-[0.25em] text-[#121212]/60">
              {[
                { name: "Projects", path: "/#projects" },
                { name: "Design", path: "/design" },
                { name: "About", path: "/#about" },
                { name: "Contact", path: "/#contact" }
              ].map((item) => (
                <Link 
                  key={item.name}
                  href={item.path} 
                  className={`hover:text-[#BF360C] transition-colors relative group/link ${pathname === item.path ? 'text-[#BF360C]' : ''}`}
                >
                  {item.name}
                  {/* Subtle Flower Bindi on Hover/Active */}
                  <div className={`absolute -bottom-3 left-1/2 -translate-x-1/2 transition-all duration-300 ${pathname === item.path ? 'opacity-100' : 'opacity-0 group-hover/link:opacity-40'}`}>
                    <svg viewBox="0 0 100 100" className="w-2.5 h-2.5 fill-[#BF360C]">
                      {[...Array(6)].map((_, i) => (
                        <path key={i} d="M50 50 Q60 30 50 15 Q40 30 50 50" transform={`rotate(${i * 60} 50 50)`} />
                      ))}
                    </svg>
                  </div>
                </Link>
              ))}
            </div>

            <Link 
              href="/resume" 
              className="ml-0.5 sm:ml-1 font-serif italic text-[10px] sm:text-xs text-[#BF360C] hover:text-[#FF1F00] transition-colors border-l border-[#BF360C]/10 pl-3 sm:pl-5 relative group/res"
            >
              Resume
              <div className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 w-1 h-1 bg-[#BF360C] rotate-45 group-hover/res:scale-150 transition-transform"></div>
            </Link>
          </nav>
        </div>

        {/* Floating Decorative Marigold Tassels (Visual Flair) */}
        <div className="absolute -bottom-1.5 left-8 w-1.5 h-1.5 rounded-full bg-[#FFB300] opacity-40 shadow-sm animate-pulse"></div>
        <div className="absolute -bottom-2 right-12 w-1 h-1 rounded-full bg-[#BF360C] opacity-40 shadow-sm animate-pulse" style={{ animationDelay: '1s' }}></div>
      </motion.header>
    </div>
  );
};

export default Navbar;
