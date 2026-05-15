"use client";

import Link from "next/link";
import { projects } from "@/lib/projects";
import Navbar from "@/components/Navbar";
import TiltCard from "@/components/TiltCard";
import ScrollChakra from "@/components/ScrollChakra";
import { PeacockBorders } from "@/components/PeacockBorders";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen w-full bg-[#FDFBF7] text-[#121212] font-sans selection:bg-[#FF1F00] selection:text-white relative overflow-x-hidden">
      <Navbar />

      {/* Persistent Back Button */}
      <div className="fixed top-8 left-30 z-[100] hidden md:block">
        <Link 
          href="/" 
          className="group flex items-center space-x-4 bg-white/40 backdrop-blur-md border border-black/5 pl-2 pr-6 py-2 rounded-full hover:bg-white transition-all shadow-sm hover:shadow-xl"
        >
          <div className="w-10 h-10 bg-[#121212] rounded-full flex items-center justify-center text-white group-hover:rotate-[-45deg] transition-transform duration-500">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-[7px] font-pixel text-black/40 uppercase tracking-widest leading-none mb-1">Return_Node</span>
            <span className="text-[11px] font-bold uppercase tracking-tighter leading-none">Command</span>
          </div>
        </Link>
      </div>
      
      {/* Scroll Progress Indicator */}
      <ScrollChakra />

      {/* Royal Peacock Borders */}
      <PeacockBorders topOffset="3rem" />

      {/* Corner Brackets (kept subtle) */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF1F00]/20 to-transparent z-[70]" />
      
      <main className="pt-48 pb-32 px-12 md:px-24 flex flex-col items-center relative z-0">
        {/* Background Mandala Watermark */}
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] opacity-[0.03] pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-black stroke-[0.2]">
            <circle cx="50" cy="50" r="45" />
            <circle cx="50" cy="50" r="40" strokeDasharray="1 2" />
            {[...Array(12)].map((_, i) => (
              <path key={i} d="M50 10 Q60 30 50 50 Q40 30 50 10" transform={`rotate(${i * 30} 50 50)`} />
            ))}
          </svg>
        </div>

        <div className="max-w-5xl w-full relative">
          {/* Header */}
          <div className="mb-24 flex flex-col items-center text-center">
            <div className="flex items-center justify-center space-x-4 mb-6 relative z-10">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#FF1F00]"></div>
              <svg width="16" height="16" viewBox="0 0 100 100" className="fill-none stroke-[#FF1F00] stroke-[4]">
                <path d="M50 10 L90 50 L50 90 L10 50 Z" />
                <circle cx="50" cy="50" r="15" />
              </svg>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#FF1F00]"></div>
            </div>
            
            <span className="font-pixel text-[10px] text-black/40 uppercase tracking-[0.5em] mb-4 block">System_Node / 02</span>
            <h1 className="text-4xl md:text-7xl font-serif tracking-tight text-[#121212] flex items-center justify-center gap-4">
              Project <span className="font-helvetica font-bold uppercase text-2xl md:text-5xl text-[#FF1F00] mt-1 md:mt-2">Index</span>
            </h1>
          </div>

          {/* Projects Grid (Royal Manuscript Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {projects.map((project, index) => {
              const bgColors = ["bg-[#C62828]", "bg-[#1565C0]", "bg-[#2E7D32]", "bg-[#F57F17]"];
              const bgColor = bgColors[index % bgColors.length];
              
              return (
                <TiltCard key={project.id}>
                  <Link 
                    href={`/projects/${project.id}`}
                    className={`group relative aspect-[16/10] ${bgColor} p-8 flex flex-col justify-between overflow-hidden text-left shadow-sm hover:shadow-2xl transition-shadow duration-700`}
                  >
                    {/* Khadi Paper Grain Overlay */}
                    <div className="grain-overlay" />

                    {/* Outer Traditional Border Frame */}
                    <div className="absolute inset-4 border border-[#FFF8E1]/20 group-hover:border-[#FFF8E1]/60 transition-colors duration-700 pointer-events-none">
                      {/* Temple Corner Brackets */}
                      <svg viewBox="0 0 20 20" className="absolute -top-[1px] -left-[1px] w-8 h-8 stroke-[#FFF8E1]/80 fill-none group-hover:scale-110 origin-top-left transition-transform">
                        <path d="M0 20 L0 0 L20 0" strokeWidth="1" />
                        <path d="M0 12 Q12 12 12 0" strokeWidth="0.5" />
                        <circle cx="4" cy="4" r="1.5" className="fill-[#FFF8E1]/80" stroke="none" />
                      </svg>
                      <svg viewBox="0 0 20 20" className="absolute -top-[1px] -right-[1px] w-8 h-8 stroke-[#FFF8E1]/80 fill-none rotate-90 group-hover:scale-110 origin-top-right transition-transform">
                        <path d="M0 20 L0 0 L20 0" strokeWidth="1" />
                        <path d="M0 12 Q12 12 12 0" strokeWidth="0.5" />
                        <circle cx="4" cy="4" r="1.5" className="fill-[#FFF8E1]/80" stroke="none" />
                      </svg>
                      <svg viewBox="0 0 20 20" className="absolute -bottom-[1px] -right-[1px] w-8 h-8 stroke-[#FFF8E1]/80 fill-none rotate-180 group-hover:scale-110 origin-bottom-right transition-transform">
                        <path d="M0 20 L0 0 L20 0" strokeWidth="1" />
                        <path d="M0 12 Q12 12 12 0" strokeWidth="0.5" />
                        <circle cx="4" cy="4" r="1.5" className="fill-[#FFF8E1]/80" stroke="none" />
                      </svg>
                      <svg viewBox="0 0 20 20" className="absolute -bottom-[1px] -left-[1px] w-8 h-8 stroke-[#FFF8E1]/80 fill-none -rotate-90 group-hover:scale-110 origin-bottom-left transition-transform">
                        <path d="M0 20 L0 0 L20 0" strokeWidth="1" />
                        <path d="M0 12 Q12 12 12 0" strokeWidth="0.5" />
                        <circle cx="4" cy="4" r="1.5" className="fill-[#FFF8E1]/80" stroke="none" />
                      </svg>

                      {/* Hanging Lotus Bell (Center Top) */}
                      <svg viewBox="0 0 20 40" className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-6 h-12 stroke-[#FFF8E1]/60 fill-none group-hover:stroke-[#FFF8E1] transition-colors">
                        <line x1="10" y1="0" x2="10" y2="40" strokeWidth="0.5" strokeDasharray="2 2" />
                        <path d="M2 40 Q10 55 18 40 Z" className="fill-[#FFF8E1]/60 group-hover:fill-[#FFF8E1]" stroke="none" />
                        <circle cx="10" cy="58" r="1" className="fill-[#FFF8E1]" stroke="none" />
                      </svg>
                    </div>

                    {/* Inner Content */}
                    <div className="relative z-10 h-full flex flex-col justify-between p-4 pointer-events-none">
                      <div className="flex justify-between items-start">
                        <div>
                          {/* Decorative Indian Flower */}
                          <svg viewBox="0 0 100 100" className="w-6 h-6 mb-4 opacity-70 group-hover:opacity-100 group-hover:rotate-90 transition-all duration-700">
                            {[...Array(8)].map((_, i) => (
                              <path key={i} d="M50 50 Q65 20 50 0 Q35 20 50 50" fill="#FFF8E1" transform={`rotate(${i * 45} 50 50)`} />
                            ))}
                            <circle cx="50" cy="50" r="10" fill="#FFF8E1" />
                            <circle cx="50" cy="50" r="4" fill="#121212" opacity="0.5" />
                          </svg>
                          <span className="text-[9px] font-pixel text-[#FFF8E1]/80 tracking-widest uppercase mb-3 block">{project.year}</span>
                          <h2 className="text-3xl md:text-4xl font-serif text-[#FDFBF7] transition-colors duration-500 capitalize tracking-tight leading-none">
                            {project.title.toLowerCase()}
                          </h2>
                        </div>
                      </div>

                      <div className="mt-auto flex justify-between items-end">
                        <div>
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="w-1.5 h-1.5 rotate-45 bg-[#FFF8E1]"></div>
                            <span className="text-[10px] font-mono text-[#FDFBF7]/70 uppercase tracking-[0.2em]">{project.category}</span>
                          </div>
                          <p className="text-sm text-[#FDFBF7]/80 leading-relaxed max-w-xs font-serif italic">
                            {project.desc}
                          </p>
                        </div>

                        {/* GitHub Link (Separate from Card Link) */}
                        <a 
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 relative z-20 group/git pointer-events-auto"
                        >
                           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FDFBF7] group-hover/git:scale-110 transition-transform">
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                           </svg>
                        </a>
                      </div>
                    </div>
                  </Link>
                </TiltCard>
              );
            })}
          </div>

          {/* Footer Navigation */}
          <div className="mt-32 flex justify-center">
            <Link 
              href="/" 
              className="group flex flex-col items-center space-y-4"
            >
              <div className="flex items-center space-x-6">
                <div className="w-8 h-px bg-black/10 group-hover:w-16 group-hover:bg-[#FF1F00] transition-all"></div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#FF1F00] group-hover:rotate-180 transition-transform duration-700">
                  <path d="M12 2 Q14 8 20 12 Q14 16 12 22 Q10 16 4 12 Q10 8 12 2" />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                </svg>
                <div className="w-8 h-px bg-black/10 group-hover:w-16 group-hover:bg-[#FF1F00] transition-all"></div>
              </div>
              <span className="text-[11px] font-pixel text-black/60 uppercase tracking-[0.5em] group-hover:text-[#FF1F00] transition-all">Back to Command</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
