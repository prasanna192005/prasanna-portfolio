"use client";

import Link from "next/link";
import { projects } from "@/lib/projects";
import Navbar from "@/components/Navbar";
import TiltCard from "@/components/TiltCard";
import ScrollChakra from "@/components/ScrollChakra";
import { motion } from "framer-motion";

const PeacockIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 120 180" className={className}>
    <defs>
      <linearGradient id="peacockBody" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00509D" />
        <stop offset="100%" stopColor="#002855" />
      </linearGradient>
      <linearGradient id="featherEye" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="40%" stopColor="#00A896" />
        <stop offset="100%" stopColor="#023E8A" />
      </linearGradient>
    </defs>
    
    {/* Detailed Crest */}
    <g transform="translate(60, 20)">
      {[...Array(3)].map((_, i) => (
        <g key={i} transform={`rotate(${(i - 1) * 20})`}>
          <line x1="0" y1="0" x2="0" y2="-15" stroke="#00509D" strokeWidth="0.5" />
          <circle cx="0" cy="-15" r="2" fill="#FFD700" />
          <circle cx="0" cy="-15" r="1" fill="#00509D" />
        </g>
      ))}
    </g>

    {/* Body / Neck - Ornate S-Curve */}
    <path 
      d="M60 20 Q75 40 60 70 Q45 100 70 130" 
      fill="none" 
      stroke="url(#peacockBody)" 
      strokeWidth="12" 
      strokeLinecap="round" 
    />
    <path 
      d="M60 20 Q75 40 60 70 Q45 100 70 130" 
      fill="none" 
      stroke="#FFD700" 
      strokeWidth="0.5" 
      opacity="0.3"
      transform="translate(2, 0)"
    />
    
    {/* Head Detail */}
    <circle cx="62" cy="22" r="6" fill="url(#peacockBody)" />
    <circle cx="64" cy="20" r="1.5" fill="white" />
    <path d="M68 22 L75 25 L68 28 Z" fill="#FFB300" /> {/* Beak */}

    {/* Decorative Wing Feathers on Body */}
    {[...Array(5)].map((_, i) => (
      <path 
        key={i} 
        d={`M${55 + i * 2} ${50 + i * 8} Q${40 - i * 5} ${60 + i * 5} ${50 + i * 3} ${80 + i * 10}`} 
        stroke="#FFD700" 
        strokeWidth="0.3" 
        fill="none" 
        opacity="0.5" 
      />
    ))}

    {/* Starting Tail Plumage */}
    <g transform="translate(70, 130)">
       {[...Array(4)].map((_, i) => (
         <path 
            key={i} 
            d={`M0 0 Q${-20 - i * 10} 20 ${-40 - i * 5} 60`} 
            stroke="#2D6A4F" 
            strokeWidth="0.8" 
            fill="none" 
            opacity="0.4"
         />
       ))}
    </g>
  </svg>
);

const PeacockTailBorder = ({ side }: { side: 'left' | 'right' }) => (
  <div className={`fixed top-0 ${side === 'left' ? 'left-0' : 'right-0'} h-screen w-20 pointer-events-none z-[60]`}>
    {/* The Perfect Peacock Head in Corner */}
    <div className={`relative ${side === 'right' ? 'scale-x-[-1]' : ''}`}>
       <PeacockIcon className="w-32 h-48 drop-shadow-2xl" />
    </div>
    
    {/* Flowing Tail Border - Eye Feathers */}
    <div className={`absolute top-40 ${side === 'left' ? 'left-6' : 'right-6'} h-full flex flex-col space-y-2 pb-40`}>
       {[...Array(15)].map((_, i) => (
         <motion.div 
           key={i}
           animate={{ 
             x: [0, i % 2 === 0 ? 3 : -3, 0],
             rotate: [0, i % 2 === 0 ? 1 : -1, 0]
           }}
           transition={{ 
             duration: 5 + i % 4, 
             repeat: Infinity, 
             ease: "easeInOut",
             delay: i * 0.2
           }}
           className="relative"
         >
           <svg width="32" height="50" viewBox="0 0 100 150">
              {/* Feather Stem */}
              <path d="M50 0 L50 150" stroke="#2D6A4F" strokeWidth="0.5" strokeDasharray="2 1" opacity="0.3" />
              
              {/* Outer Vane */}
              <path 
                d="M50 20 Q90 60 50 110 Q10 60 50 20" 
                fill="#2D6A4F" 
                fillOpacity="0.1" 
                stroke="#2D6A4F" 
                strokeWidth="0.5" 
                strokeOpacity="0.2"
              />

              {/* The "Eye" of the Feather */}
              <g transform="translate(50, 65)">
                 <ellipse rx="22" ry="28" fill="#FFD700" />
                 <ellipse rx="16" ry="20" fill="#00A896" />
                 <ellipse rx="10" ry="12" fill="#023E8A" />
                 {/* Shine */}
                 <circle cx="3" cy="-3" r="2" fill="white" fillOpacity="0.3" />
              </g>

              {/* Decorative Gold Dots */}
              <circle cx="50" cy="120" r="1.5" fill="#FFD700" opacity="0.4" />
           </svg>
         </motion.div>
       ))}
    </div>
  </div>
);

export default function ProjectsPage() {
  return (
    <div className="min-h-screen w-full bg-[#FDFBF7] text-[#121212] font-sans selection:bg-[#FF1F00] selection:text-white relative overflow-x-hidden">
      <Navbar />
      
      {/* Scroll Progress Indicator */}
      <ScrollChakra />

      {/* Royal Peacock Borders */}
      <PeacockTailBorder side="left" />
      <PeacockTailBorder side="right" />

      {/* Decorative Border Line (Patti) */}
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

                      <div className="mt-auto">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-1.5 h-1.5 rotate-45 bg-[#FFF8E1]"></div>
                          <span className="text-[10px] font-mono text-[#FDFBF7]/70 uppercase tracking-[0.2em]">{project.category}</span>
                        </div>
                        <p className="text-sm text-[#FDFBF7]/80 leading-relaxed max-w-xs font-serif italic">
                          {project.desc}
                        </p>
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
