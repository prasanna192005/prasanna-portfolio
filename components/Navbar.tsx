"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed top-8 left-0 w-full z-[100] flex justify-center px-6">
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative group"
      >
        {/* The Patrika Frame (Manuscript Style) */}
        <div className="relative bg-[#FDFBF7] border border-[#BF360C]/30 px-8 py-3 shadow-[0_15px_40px_rgba(191,54,12,0.1)] overflow-hidden">
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
          <nav className="flex items-center space-x-10 relative z-10">
            {/* Logo Seal */}
            <Link href="/" className="flex items-center group/logo pr-4 border-r border-[#BF360C]/10">
              <svg viewBox="0 0 100 100" className="w-6 h-6 fill-[#BF360C] group-hover/logo:rotate-90 transition-transform duration-700">
                {[...Array(8)].map((_, i) => (
                  <path key={i} d="M50 50 Q65 20 50 0 Q35 20 50 50" transform={`rotate(${i * 45} 50 50)`} />
                ))}
                <circle cx="50" cy="50" r="10" fill="#FDFBF7" />
                <circle cx="50" cy="50" r="4" fill="#BF360C" />
              </svg>
              <span className="ml-3 font-serif italic text-lg text-[#121212] tracking-tighter">P.</span>
            </Link>

            <div className="flex items-center space-x-8 text-[10px] font-pixel uppercase tracking-[0.3em] text-[#121212]/60">
              {[
                { name: "Systems", path: "/projects" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" }
              ].map((item) => (
                <Link 
                  key={item.name}
                  href={item.path} 
                  className={`hover:text-[#BF360C] transition-colors relative group/link ${pathname === item.path ? 'text-[#BF360C]' : ''}`}
                >
                  {item.name}
                  {/* Subtle Flower Bindi on Hover/Active */}
                  <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 transition-all duration-300 ${pathname === item.path ? 'opacity-100' : 'opacity-0 group-hover/link:opacity-40'}`}>
                    <svg viewBox="0 0 100 100" className="w-3 h-3 fill-[#BF360C]">
                      {[...Array(6)].map((_, i) => (
                        <path key={i} d="M50 50 Q60 30 50 15 Q40 30 50 50" transform={`rotate(${i * 60} 50 50)`} />
                      ))}
                    </svg>
                  </div>
                </Link>
              ))}
            </div>

            <Link 
              href="/resume.pdf" 
              target="_blank"
              className="ml-4 font-serif italic text-sm text-[#BF360C] hover:text-[#FF1F00] transition-colors border-l border-[#BF360C]/10 pl-8 relative group/res"
            >
              Resume
              <div className="absolute left-6 top-1/2 -translate-y-1/2 w-1 h-1 bg-[#BF360C] rotate-45 group-hover/res:scale-150 transition-transform"></div>
            </Link>
          </nav>
        </div>

        {/* Floating Decorative Marigold Tassels (Visual Flair) */}
        <div className="absolute -bottom-2 left-10 w-2 h-2 rounded-full bg-[#FFB300] opacity-40 shadow-sm animate-pulse"></div>
        <div className="absolute -bottom-3 right-16 w-1.5 h-1.5 rounded-full bg-[#BF360C] opacity-40 shadow-sm animate-pulse" style={{ animationDelay: '1s' }}></div>
      </motion.header>
    </div>
  );
};

export default Navbar;
