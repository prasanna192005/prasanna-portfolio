"use client";

import Link from "next/link";
import { projects } from "@/lib/projects";
import { PeacockBorders } from "@/components/PeacockBorders";

const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen w-full bg-[#FDFBF7] flex flex-col items-center py-20 md:py-32 px-4 sm:px-8 relative overflow-hidden">
      {/* Royal Peacock Framing */}
      <PeacockBorders position="absolute" topOffset="8rem" />

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none jaali-grid scale-150 grayscale invert"></div>

      <div className="max-w-6xl w-full z-10 text-center">
        <div className="flex flex-col items-center mb-24 relative">
          {/* Mandala Watermark Behind Heading */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] opacity-[0.03] pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-black stroke-[0.2]">
              <circle cx="50" cy="50" r="45" />
              <circle cx="50" cy="50" r="40" strokeDasharray="1 2" />
              {[...Array(12)].map((_, i) => (
                <path 
                  key={i} 
                  d="M50 10 Q60 30 50 50 Q40 30 50 10" 
                  transform={`rotate(${i * 30} 50 50)`} 
                />
              ))}
              <circle cx="50" cy="50" r="10" />
            </svg>
          </div>

          <div className="flex items-center justify-center space-x-4 mb-6 relative z-10">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#FF1F00]"></div>
            <svg width="16" height="16" viewBox="0 0 100 100" className="fill-none stroke-[#FF1F00] stroke-[4] animate-[spin_10s_linear_infinite]">
              <path d="M50 10 L90 50 L50 90 L10 50 Z" />
              <circle cx="50" cy="50" r="15" />
            </svg>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#FF1F00]"></div>
          </div>
          
          <span className="font-pixel text-[10px] text-black/40 uppercase tracking-[0.5em] mb-4 block relative z-10">Phase 02</span>
          <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-[#121212] relative z-10 flex items-center justify-center gap-3">
            Selected <span className="font-helvetica font-bold uppercase text-2xl md:text-3xl text-[#FF1F00] mt-1.5">Projects</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.slice(0, 4).map((project, index) => {
            const bgColors = ["bg-[#C62828]", "bg-[#1565C0]", "bg-[#2E7D32]", "bg-[#F57F17]"]; // Vibrant Indian Festive Colors
            return (
            <div 
              key={project.id} 
              className={`group relative aspect-auto min-h-[340px] md:aspect-[16/10] ${bgColors[index]} p-6 md:p-8 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-700 overflow-hidden text-left shadow-sm hover:shadow-xl`}
            >
              <Link href={`/projects/${project.id}`} className="absolute inset-0 z-10" aria-label={`View project ${project.title}`} />
              {/* Khadi Paper Grain Overlay */}
              <div className="grain-overlay opacity-20 pointer-events-none" />

              {/* Outer Traditional Border Frame (Light Accents) */}
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
                  <line x1="10" y1="0" x2="10" y2="20" strokeWidth="0.5" strokeDasharray="2 2" />
                  <path d="M2 20 Q10 35 18 20 Z" className="fill-[#FFF8E1]/60 group-hover:fill-[#FFF8E1]" stroke="none" />
                  <circle cx="10" cy="38" r="1" className="fill-[#FFF8E1]" stroke="none" />
                </svg>

                {/* Faint Center Watermark */}
                <svg viewBox="0 0 100 100" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 opacity-[0.05] group-hover:opacity-[0.15] group-hover:rotate-45 transition-all duration-1000 fill-none stroke-[#FFF8E1] stroke-[0.5]">
                  <circle cx="50" cy="50" r="40" strokeDasharray="2 2" />
                  {[...Array(12)].map((_, i) => (
                    <path key={i} d="M50 10 Q65 30 50 50 Q35 30 50 10" transform={`rotate(${i * 30} 50 50)`} />
                  ))}
                </svg>
              </div>

              {/* Inner Content (Padded inside the frame) */}
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
                    <h3 className="text-3xl md:text-4xl font-serif text-[#FDFBF7] transition-colors duration-500 capitalize tracking-tight leading-none">
                      {project.title.toLowerCase()}
                    </h3>
                  </div>
                </div>

                    <div className="mt-auto flex justify-between items-end">
                      <div>
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-1.5 h-1.5 rotate-45 bg-[#FFF8E1]"></div>
                          <span className="text-[10px] font-mono text-[#FDFBF7]/70 uppercase tracking-[0.2em]">{project.category}</span>
                        </div>
                        <p className="text-xs md:text-sm text-[#FDFBF7]/85 leading-relaxed max-w-xs font-sans font-light tracking-wide">
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
                         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FDFBF7] group-hover/git:scale-110 transition-transform">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                         </svg>
                      </a>
                    </div>
              </div>
            </div>
            );
          })}
        </div>

        <div className="mt-28 flex justify-center">
          <Link 
            href="/projects" 
            className="group flex flex-col items-center space-y-4"
          >
            <div className="flex items-center space-x-6">
              <div className="w-8 h-px bg-black/10 group-hover:w-16 group-hover:bg-[#FF1F00] transition-all"></div>
              {/* Geometric Lotus Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#FF1F00] group-hover:rotate-180 transition-transform duration-700">
                <path d="M12 2 Q14 8 20 12 Q14 16 12 22 Q10 16 4 12 Q10 8 12 2" />
                <circle cx="12" cy="12" r="2" fill="currentColor" />
              </svg>
              <div className="w-8 h-px bg-black/10 group-hover:w-16 group-hover:bg-[#FF1F00] transition-all"></div>
            </div>
            <span className="text-[10px] md:text-xs font-helvetica font-bold text-black/60 uppercase tracking-[0.1em] group-hover:text-[#FF1F00] transition-all">View All Projects</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
