"use client";

import Image from "next/image";
import Link from "next/link";
import Dither from "@/components/Dither";
import Navbar from "@/components/Navbar";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

import { projects } from "@/lib/projects";

const TopTags = [
  { text: "0 → 1 Builder", color: "bg-[#D9ACFF]" },
  { text: "Ship Fast Think Deep", color: "bg-[#FFF2A3]" },
  { text: "Growth Mindset", color: "bg-[#4DD3B0]" },
  { text: "Fail → Learn → Iterate", color: "bg-[#B0B8FF]" },
  { text: "Visual Storyteller", color: "bg-[#FFE000]" },
];

const AbstractIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <rect x="4" y="4" width="6" height="6" rx="1" />
    <rect x="14" y="14" width="6" height="6" rx="1" />
    <circle cx="17" cy="7" r="3" />
    <path d="M7 14l3 6H4l3-6z" />
  </svg>
);

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full font-sans flex flex-col text-white selection:bg-white selection:text-black scroll-smooth">
      {/* <Navbar /> */}

      {/* Section 1: Typography Intro (RED BACKGROUND) */}
      <section className="h-screen w-full flex flex-col items-center justify-center relative px-8 bg-[#FF1F00] overflow-hidden">
        
        {/* Parallax Jaali Grid Layer */}
        <div 
          className="absolute inset-0 jaali-grid pointer-events-none"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        ></div>

        {/* Sanskrit Ghost Typography (Background Layers with Parallax) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span 
            className="absolute top-1/4 -right-10 text-[15vw] font-bold text-white/10 whitespace-nowrap rotate-12"
            style={{ transform: `translateY(${scrollY * -0.3}px) rotate(12deg)` }}
          >
            अभिकल्प
          </span>
          <span 
            className="absolute bottom-1/4 -left-10 text-[15vw] font-bold text-white/10 whitespace-nowrap -rotate-6"
            style={{ transform: `translateY(${scrollY * 0.4}px) rotate(-6deg)` }}
          >
            तन्त्र
          </span>
          <span 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-bold text-white/[0.06]"
            style={{ transform: `translate(-50%, calc(-50% + ${scrollY * 0.1}px))` }}
          >
            सृजन
          </span>
        </div>

        {/* Indian Technical Corner Borders (VIBRANT & FLORAL) */}
        {/* ... (Keep existing corners) ... */}
        {/* Top Left */}
        <div className="absolute top-8 left-8 w-32 h-32 md:w-56 md:h-56 pointer-events-none opacity-80 z-20">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
            <path d="M0 0 Q40 0 40 40 Q40 80 80 80" fill="none" stroke="#FFA500" strokeWidth="1.5" strokeLinecap="round" className="animate-pulse" />
            <path d="M0 10 Q30 10 30 30" fill="none" stroke="#20B2AA" strokeWidth="2" strokeLinecap="round" />
            <path d="M10 0 Q10 30 30 30" fill="none" stroke="#FF7F50" strokeWidth="2" strokeLinecap="round" />
            <g transform="translate(15, 15) rotate(-45)">
              <path d="M0 -5 Q5 0 0 5 Q-5 0 0 -5" fill="#FF7F50" />
              <path d="M-5 -10 Q0 -5 5 -10" fill="none" stroke="#FFD700" strokeWidth="0.5" />
            </g>
            <circle cx="5" cy="5" r="2" fill="white" className="animate-ping" />
          </svg>
        </div>
        
        {/* Top Right */}
        <div className="absolute top-8 right-8 w-32 h-32 md:w-56 md:h-56 pointer-events-none opacity-80 scale-x-[-1] z-20">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
            <path d="M0 0 Q40 0 40 40 Q40 80 80 80" fill="none" stroke="#FFA500" strokeWidth="1.5" strokeLinecap="round" className="animate-pulse" />
            <path d="M0 10 Q30 10 30 30" fill="none" stroke="#20B2AA" strokeWidth="2" strokeLinecap="round" />
            <path d="M10 0 Q10 30 30 30" fill="none" stroke="#FF7F50" strokeWidth="2" strokeLinecap="round" />
            <g transform="translate(15, 15) rotate(-45)">
              <path d="M0 -5 Q5 0 0 5 Q-5 0 0 -5" fill="#FF7F50" />
              <path d="M-5 -10 Q0 -5 5 -10" fill="none" stroke="#FFD700" strokeWidth="0.5" />
            </g>
            <circle cx="5" cy="5" r="2" fill="white" className="animate-ping" />
          </svg>
        </div>

        <div className="max-w-5xl text-center z-10 px-4 mt-40">
          <h1 className="text-4xl md:text-4xl font-helvetica font-normal leading-[1.1] tracking-tight">
            I&apos;m Prasanna Pandharikar 
            <span className="inline-block mx-4 align-middle relative w-14 h-14 md:w-24 md:h-24 group/inline not-italic">
               {/* Polygon Image with Tilak Markers */}
               <div 
                 className="absolute inset-0 bg-white/5 overflow-hidden"
                 style={{ clipPath: 'polygon(0 0, 93% 14%, 95% 93%, 6% 87%)' }}
               >
                 <Image 
                   src="/modihard.png" 
                   alt="Prasanna" 
                   fill 
                   className="object-cover"
                 />
                 {/* Tilak/Bindi HUD Marker */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-3 bg-[#FF7F50] blur-[1px] opacity-80"></div>
                 <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#FFD700] mix-blend-screen animate-pulse"></div>
               </div>
               {/* SVG Overlay */}
               <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <polygon points="0,0 93,14 95,93 6,87" fill="none" stroke="white" strokeWidth="0.8" />
                 <rect x="-1" y="-1" width="2" height="2" fill="white" />
                 <rect x="92" y="13" width="2" height="2" fill="white" />
                 <rect x="94" y="92" width="2" height="2" fill="white" />
                 <rect x="5" y="86" width="2" height="2" fill="white" />
               </svg>
            </span>
             Software developer and <br className="hidden md:block" />
             problem solver 
              <div className="inline-block align-middle mx-2">
                <svg width="36" height="36" viewBox="0 0 100 100" className="drop-shadow-lg overflow-visible">
                  <motion.g animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "50px 50px" }}>
                    <circle cx="50" cy="50" r="48" fill="#FFC107" />
                    <g transform="translate(50, 50)">
                      {[...Array(24)].map((_, i) => (
                        <path key={i} d="M0 -45 L5 -10 L-5 -10 Z" fill="#FF5722" transform={`rotate(${i * 15})`} />
                      ))}
                      <circle r="12" fill="#E65100" />
                      <circle r="6" fill="#FFD700" />
                    </g>
                  </motion.g>
                </svg>
              </div>
             passionate about <br className="hidden md:block" />
            building impactful tech 
             <div className="inline-block align-middle mx-2">
               <svg width="32" height="32" viewBox="0 0 100 100" className="drop-shadow-lg rounded-sm overflow-hidden">
                 <rect width="100" height="100" fill="#01579B" />
                 <path d="M10 50 Q50 10 90 50 Q50 90 10 50" fill="white" />
                 <motion.g animate={{ x: [-2, 2, -2], y: [-1, 1, -1] }} transition={{ duration: 4, repeat: Infinity }}>
                   <circle cx="50" cy="50" r="18" fill="#01579B" />
                   <circle cx="50" cy="50" r="8" fill="#121212" />
                 </motion.g>
               </svg>
             </div>
             <br className="hidden md:block" />
            experiences through code, <br className="hidden md:block" />
            creativity, and innovation. 
          </h1>

          <div className="mt-6 mx-50 flex justify-start">
            <svg width="55" height="55" viewBox="0 0 100 100" className="drop-shadow-lg rounded-md overflow-hidden">
              <rect width="100" height="100" fill="#1EAB80" />
              <motion.g animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "50px 50px" }}>
                {[...Array(12)].map((_, j) => (
                  <path key={j} d="M50 50 L35 -30 L65 -30 Z" fill="black" transform={`rotate(${j * 30}, 50, 50)`} />
                ))}
              </motion.g>
              <circle cx="50" cy="50" r="18" fill="#FF0066" />
            </svg>
            
            <svg width="55" height="55" viewBox="0 0 100 100" className="drop-shadow-lg rounded-md overflow-hidden ml-4">
              <rect width="100" height="100" fill="#FFF8E1" />
              <motion.g animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "50px 50px" }}>
                <g transform="translate(50, 50)">
                  {[...Array(16)].map((_, i) => (
                    <path key={i} d="M0 0 Q15 -15 0 -35" fill="#FFB300" transform={`rotate(${i * 22.5})`} />
                  ))}
                  <circle r="6" fill="#BF360C" />
                </g>
              </motion.g>
            </svg>
          </div>


          {/* Animating Indian-Inspired Technical Mandala (COLORFUL) */}
          <div className="mt-32 relative flex items-center justify-center h-32 md:h-48">
            <svg 
              className="w-32 h-32 md:w-48 md:h-48 transition-opacity duration-700" 
              viewBox="0 0 100 100"
            >
              {/* Outer Pulsing Ring (Saffron/Gold) */}
              <circle cx="50" cy="50" r="45" fill="none" stroke="#FFD700" strokeWidth="0.3" strokeDasharray="2 2" className="animate-[spin_20s_linear_infinite] opacity-60" />
              <circle cx="50" cy="50" r="48" fill="none" stroke="#FFA500" strokeWidth="0.1" className="animate-pulse" />
              
              {/* Rotating Petals (Vibrant Saffron and Gold) */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <g key={i} transform={`rotate(${angle} 50 50)`} className="animate-[pulse_4s_ease-in-out_infinite]" style={{ animationDelay: `${i * 0.2}s` }}>
                  <path 
                    d="M50 10 Q60 30 50 50 Q40 30 50 10" 
                    fill="none" 
                    stroke={i % 2 === 0 ? "#FFD700" : "#FFA500"} 
                    strokeWidth="0.8" 
                    className="opacity-80"
                  />
                  <circle cx="50" cy="10" r="1.5" fill={i % 2 === 0 ? "#FF8C00" : "#FFD700"} />
                  <rect x="49.5" y="15" width="1" height="1" fill="white" className="opacity-50" />
                </g>
              ))}

              {/* Inner Rotating Gear-like Mandala (Contrast Cream/White) */}
              <g className="animate-[spin_10s_linear_infinite_reverse]">
                {[...Array(12)].map((_, i) => (
                  <line 
                    key={i} 
                    x1="50" y1="35" x2="50" y2="42" 
                    stroke="#FFF5E1" 
                    strokeWidth="0.4" 
                    transform={`rotate(${i * 30} 50 50)`} 
                  />
                ))}
              </g>

              {/* Center Dot (Glowing Core) */}
              <circle cx="50" cy="50" r="3" fill="#FFD700" className="blur-[1px] opacity-30 animate-pulse" />
              <circle cx="50" cy="50" r="1.5" fill="#FFFFFF" />
            </svg>

            {/* Decorative Side Lines (Saffron Gradient) */}
            <div className="absolute left-0 w-1/4 h-px bg-gradient-to-r from-transparent via-[#FFA500]/50 to-transparent"></div>
            <div className="absolute right-0 w-1/4 h-px bg-gradient-to-l from-transparent via-[#FFA500]/50 to-transparent"></div>
          </div>
        </div>


      </section>

      {/* Section 2: Featured Projects (NEUTRAL OFF-WHITE BACKGROUND) */}
      <section className="min-h-screen w-full bg-[#FDFBF7] flex flex-col items-center py-32 px-8 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none jaali-grid scale-150 grayscale invert"></div>

        {/* Section Corner Accents (Traditional Motif) */}
        <div className="absolute top-12 left-12 w-24 h-24 opacity-20 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-black stroke-[0.5]">
            <path d="M0 0 L100 0 M0 0 L0 100" />
            <circle cx="0" cy="0" r="4" className="fill-[#FF1F00] stroke-none" />
            <path d="M10 10 Q30 10 30 30" />
            <path d="M20 20 L40 40" strokeDasharray="2 2" />
          </svg>
        </div>
        <div className="absolute top-12 right-12 w-24 h-24 opacity-20 pointer-events-none scale-x-[-1]">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-black stroke-[0.5]">
            <path d="M0 0 L100 0 M0 0 L0 100" />
            <circle cx="0" cy="0" r="4" className="fill-[#FF1F00] stroke-none" />
            <path d="M10 10 Q30 10 30 30" />
            <path d="M20 20 L40 40" strokeDasharray="2 2" />
          </svg>
        </div>

        <div className="max-w-6xl w-full z-10 text-center">
          <div className="flex flex-col items-center mb-24 relative">
            {/* Mandala Watermark Behind Heading */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] opacity-[0.04] pointer-events-none">
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

            <span className="font-pixel text-[10px] text-[#FF1F00] uppercase tracking-[0.4em] mb-6 block relative z-10">Selected Works [04]</span>
            <h2 className="text-5xl md:text-3xl font-helvetica font-bold tracking-tighter uppercase text-[#121212] relative z-10">Featured Projects</h2>
            <div className="w-32 h-1 bg-[#FF1F00] mt-8 relative z-10"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.slice(0, 4).map((project) => (
              <Link 
                key={project.id} 
                href={`/projects/${project.id}`}
                className={`group relative aspect-[16/10] bg-black/[0.03] border-l-4 p-8 flex flex-col justify-between hover:bg-black/[0.07] transition-all duration-500 overflow-hidden text-left shadow-sm`}
                style={{ borderLeftColor: project.color }}
              >
                {/* ID Background Ghost */}
                <span className="absolute -right-4 -bottom-4 text-[12vw] font-bold text-black/[0.04] pointer-events-none group-hover:text-black/[0.08] transition-all uppercase">
                  {project.id}
                </span>

                <div className="flex justify-between items-start z-10">
                  <div>
                    <span className="text-[10px] font-mono text-black/40 tracking-widest uppercase">{project.year}</span>
                    <h3 className="text-2xl md:text-3xl font-helvetica font-bold mt-1 text-[#121212] group-hover:translate-x-2 transition-transform duration-500 uppercase">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center border border-black/20 rounded-full group-hover:bg-black group-hover:text-white transition-all shadow-sm">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>

                <div className="z-10">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF1F00]"></div>
                    <span className="text-[10px] font-pixel text-black/60 uppercase tracking-widest">{project.category}</span>
                  </div>
                  <p className="text-sm text-black/60 leading-relaxed max-w-sm group-hover:text-black/90 transition-colors">
                    {project.desc}
                  </p>
                </div>

                {/* Hover Line Scan Animation */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF1F00]/[0.03] to-transparent h-[200%] -translate-y-full group-hover:translate-y-full transition-transform duration-[1.5s] ease-in-out pointer-events-none"></div>
              </Link>
            ))}
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
              <span className="text-[11px] font-pixel text-black/60 uppercase tracking-[0.5em] group-hover:text-[#FF1F00] transition-all">View All Systems</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Showcase Showcase (BLUE BACKGROUND) */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center relative bg-blue-700
       px-8 py-20 shadow-[0_-50px_100px_rgba(0,0,0,0.2)] overflow-hidden">
        {/* Solid Blue Background */}

        <div className="relative w-full max-w-5xl flex flex-col items-center z-10">
          
          {/* Main Polygon Container */}
          <div className="relative w-[300px] h-[250px] md:w-[600px] md:h-[400px] mb-20">
            {/* Labels */}
            <div className="absolute -top-16 left-[0%] text-left">
              <p className="font-pixel text-[10px] md:text-[13px] tracking-widest uppercase leading-relaxed text-white/70">
                Product &<br />System Designer
              </p>
            </div>
            <div className="absolute top-[10%] -right-16 text-right">
              <p className="font-pixel text-[10px] md:text-[13px] tracking-widest uppercase text-white/70">
                B2B, SAAS, D2C
              </p>
            </div>
            <div className="absolute -bottom-10 left-[15%] text-left">
              <p className="font-pixel text-[10px] md:text-[13px] tracking-widest uppercase text-white/70">
                4+YEO
              </p>
            </div>
            <div className="absolute bottom-[5%] right-[0%] text-right translate-y-full">
              <p className="font-pixel text-[10px] md:text-[13px] tracking-widest uppercase text-white/70">
                Visionary
              </p>
            </div>

            {/* Polygon Image */}
            <div 
              className="absolute inset-0 bg-white/5 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.5)] border-2 border-white/10"
              style={{ clipPath: 'polygon(0 0, 93% 14%, 95% 93%, 6% 87%)' }}
            >
              <Image 
                src="/modihard.png" 
                alt="Product Designer" 
                fill 
                className="object-cover"
              />
            </div>

            {/* SVG Overlay */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="0,0 93,14 95,93 6,87" fill="none" stroke="white" strokeWidth="0.3" />
              <rect x="-1.5" y="-1.5" width="3" height="3" fill="white" />
              <rect x="91.5" y="12.5" width="3" height="3" fill="white" />
              <rect x="93.5" y="91.5" width="3" height="3" fill="white" />
              <rect x="4.5" y="85.5" width="3" height="3" fill="white" />
            </svg>
          </div>

          {/* Description Paragraph */}
          <div className="max-w-4xl text-center space-y-8 px-8">
            <p className="text-base md:text-lg leading-relaxed opacity-90 font-medium tracking-tight">
              Currently working at ItEdge solutions. I Like taking complex problems and making them simple and intuitive because it pushes my creative boundaries and help me grow faster. Over the last four years, I&apos;ve designed across B2B, SaaS, and D2C spaces, balancing user needs with real-world constraints.
            </p>
            <p className="text-base md:text-lg leading-relaxed opacity-90 font-medium tracking-tight">
              At my core, I believe the best products much like nature—are balanced, thoughtful, and built with clear intention.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 mt-20">
            <Link 
              href="/contact" 
              className="bg-white text-[#0029FF] px-12 py-4 rounded-sm font-bold text-sm hover:translate-y-[-4px] transition-all shadow-[0_20px_50px_rgba(255,255,255,0.2)] flex items-center justify-center"
            >
              Contact Me
            </Link>
            <Link 
              href="/projects" 
              className="border-2 border-white text-white px-12 py-4 rounded-sm font-bold text-sm hover:bg-white hover:text-[#0029FF] transition-all flex items-center justify-center"
            >
              View my work
            </Link>
          </div>

        </div>
      </section>


    </div>
  );
}
