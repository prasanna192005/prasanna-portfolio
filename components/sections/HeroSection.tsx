"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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

      <div className="max-w-5xl text-center z-10 px-4 mt-58 text-white">
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
                  <path key={i} d="M0 0 Q15 -15 0 -35 Q-15 -15 0 0" fill="#FFB300" transform={`rotate(${i * 22.5})`} />
                ))}
                {[...Array(8)].map((_, i) => (
                  <path key={i} d="M0 0 Q10 -10 0 -20 Q-10 -10 0 0" fill="#FF6F00" transform={`rotate(${i * 45 + 11.25})`} />
                ))}
                <circle r="6" fill="#BF360C" />
              </g>
            </motion.g>
          </svg>
        </div>

        {/* npx prasanna Copy Snippet */}
        <div className="mt-8 flex justify-center">
          <motion.button 
            onClick={() => {
              navigator.clipboard.writeText("npx prasanna");
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-3 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all rounded-full group"
          >
            <div className="flex items-center space-x-2">
              <span className="font-mono text-[10px] md:text-xs text-white/90">npx <span className="font-bold">prasanna</span></span>
            </div>
            <div className="h-3 w-px bg-white/20" />
            <div className="flex items-center">
               <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/50 group-hover:text-white transition-colors">
                 {copied ? (
                   <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round" />
                 ) : (
                   <>
                     <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                     <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                   </>
                 )}
               </svg>
            </div>
          </motion.button>
        </div>

        {/* Animating Indian-Inspired Technical Mandala (COLORFUL) */}
        <div className="mt-0 relative flex items-center justify-center h-32 md:h-48">
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
  );
};

export default HeroSection;
