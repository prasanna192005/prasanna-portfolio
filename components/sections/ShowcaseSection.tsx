"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

// Pre-defined static values for the Tree of Life watermark to prevent re-render jitter
const LEAVES_DATA = [
  { x: 120.5, y: 35.2, scale: 0.45 },
  { x: 75.3, y: 82.1, scale: 0.38 },
  { x: 145.8, y: 150.3, scale: 0.62 },
  { x: 92.1, y: 65.4, scale: 0.51 },
  { x: 130.4, y: 110.9, scale: 0.41 },
  { x: 62.7, y: 175.2, scale: 0.68 },
  { x: 110.2, y: 195.6, scale: 0.35 },
  { x: 80.9, y: 130.2, scale: 0.55 },
  { x: 155.3, y: 95.8, scale: 0.48 },
  { x: 105.6, y: 145.4, scale: 0.72 },
  { x: 138.2, y: 55.7, scale: 0.39 },
  { x: 88.4, y: 115.1, scale: 0.58 },
  { x: 125.1, y: 180.3, scale: 0.47 },
  { x: 70.3, y: 98.5, scale: 0.64 },
  { x: 150.9, y: 135.2, scale: 0.32 },
  { x: 95.5, y: 165.7, scale: 0.53 },
  { x: 115.4, y: 78.9, scale: 0.69 },
  { x: 65.8, y: 148.1, scale: 0.43 },
  { x: 142.7, y: 210.4, scale: 0.59 },
  { x: 85.2, y: 188.6, scale: 0.36 }
];

const DOTS_DATA = [
  { cx: 35.2, cy: 45.3 },
  { cx: 145.8, cy: 112.5 },
  { cx: 80.4, cy: 220.1 },
  { cx: 115.6, cy: 75.8 },
  { cx: 55.1, cy: 165.4 },
  { cx: 170.3, cy: 130.2 },
  { cx: 90.2, cy: 98.7 },
  { cx: 135.9, cy: 190.5 },
  { cx: 40.7, cy: 240.2 },
  { cx: 160.4, cy: 215.8 },
  { cx: 105.1, cy: 155.3 },
  { cx: 70.8, cy: 125.9 },
  { cx: 150.3, cy: 50.1 },
  { cx: 62.5, cy: 88.4 },
  { cx: 125.8, cy: 235.6 },
  { cx: 48.9, cy: 185.1 },
  { cx: 168.2, cy: 90.4 },
  { cx: 98.4, cy: 138.2 },
  { cx: 110.7, cy: 210.8 },
  { cx: 58.3, cy: 58.2 },
  { cx: 138.1, cy: 168.5 },
  { cx: 78.5, cy: 150.9 },
  { cx: 155.6, cy: 142.3 },
  { cx: 85.9, cy: 72.1 },
  { cx: 122.4, cy: 102.6 },
  { cx: 68.2, cy: 205.4 },
  { cx: 148.5, cy: 248.1 },
  { cx: 42.1, cy: 120.3 },
  { cx: 162.7, cy: 178.4 },
  { cx: 102.9, cy: 228.9 }
];

const ShowcaseSection = () => {
  const [points, setPoints] = useState([
    { x: 0, y: 0 },
    { x: 93, y: 14 },
    { x: 95, y: 93 },
    { x: 6, y: 87 }
  ]);
  const containerRef = useRef<HTMLDivElement>(null);

  const startDrag = (index: number) => (e: React.PointerEvent) => {
    e.preventDefault();
    const container = containerRef.current;
    if (!container) return;
    container.setPointerCapture(e.pointerId);

    const handlePointerMove = (moveEvent: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      let x = ((moveEvent.clientX - rect.left) / rect.width) * 100;
      let y = ((moveEvent.clientY - rect.top) / rect.height) * 100;

      // Quadrant constraints to prevent the polygon from turning inside out:
      if (index === 0) { // Top-Left
        x = Math.max(0, Math.min(x, 40));
        y = Math.max(0, Math.min(y, 40));
      } else if (index === 1) { // Top-Right
        x = Math.max(60, Math.min(x, 100));
        y = Math.max(0, Math.min(y, 40));
      } else if (index === 2) { // Bottom-Right
        x = Math.max(60, Math.min(x, 100));
        y = Math.max(60, Math.min(y, 100));
      } else if (index === 3) { // Bottom-Left
        x = Math.max(0, Math.min(x, 40));
        y = Math.max(60, Math.min(y, 100));
      }

      x = Math.round(x);
      y = Math.round(y);

      setPoints(prev => {
        const next = [...prev];
        next[index] = { x, y };
        return next;
      });
    };

    const handlePointerUp = (upEvent: PointerEvent) => {
      try {
        container.releasePointerCapture(upEvent.pointerId);
      } catch (err) {}
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerup", handlePointerUp);
    };

    container.addEventListener("pointermove", handlePointerMove);
    container.addEventListener("pointerup", handlePointerUp);
  };

  return (
    <section id="about" className="min-h-screen w-full flex items-center justify-center relative bg-[#BF360C] px-4 sm:px-8 py-20 md:py-32 overflow-hidden">
      
      {/* Khadi Texture Overlay */}
      <div className="grain-overlay opacity-20 pointer-events-none" />

      {/* Traditional Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none jaali-grid scale-150"></div>

      {/* Ethereal Tree of Life (Kalpavriksha) Watermark */}
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[500px] md:w-[600px] md:h-[800px] opacity-[0.07] pointer-events-none z-0 rotate-[-10deg]">
        <svg viewBox="0 0 200 300" className="w-full h-full fill-none stroke-white stroke-[0.5]">
           {/* Trunk */}
           <path d="M100 300 Q100 250 100 200 Q100 150 120 100" />
           <path d="M100 300 Q105 250 110 200 Q115 150 140 120" />
           
           {/* Main Branches */}
           <path d="M100 220 Q60 200 40 150" />
           <path d="M100 180 Q140 160 160 120" />
           <path d="M100 140 Q70 120 60 80" />
           <path d="M100 100 Q130 80 140 40" />

           {/* Ornate Leaves (Lotus-like) */}
           {LEAVES_DATA.map((leaf, i) => (
             <g key={i} transform={`translate(${leaf.x}, ${leaf.y}) scale(${leaf.scale})`}>
                 <path d="M0 0 Q10 -20 0 -40 Q-10 -20 0 0" fill="white" fillOpacity="0.5" />
             </g>
           ))}

           {/* Decorative Dots */}
           {DOTS_DATA.map((dot, i) => (
             <circle key={i} cx={dot.cx} cy={dot.cy} r="0.5" fill="white" />
           ))}
        </svg>
      </div>

      <div className="relative w-full max-w-7xl flex flex-col lg:flex-row items-center gap-16 lg:gap-32 z-10">
        
        {/* Left Side: The Artisan Portrait (The Polygon) */}
        <div className="relative flex flex-col items-center">
          <div 
            ref={containerRef}
            className="relative w-[280px] h-[230px] sm:w-[350px] sm:h-[280px] md:w-[500px] md:h-[350px] lg:w-[550px] lg:h-[400px] select-none touch-none"
          >
            
            {/* Metadata Labels (Precisely Aligned to Polygon Vertices) */}
            <div 
              className="hidden sm:block absolute text-left select-none pointer-events-none transition-all duration-75"
              style={{
                left: `${points[0].x}%`,
                top: `${points[0].y}%`,
                transform: 'translate(-16px, -100%)'
              }}
            >
              <p className="font-pixel text-[9px] md:text-[10px] tracking-[0.4em] uppercase leading-relaxed text-[#FDFBF7]/60">
                Building_<span className="text-white">Ideas</span><br />
                Into_Reality
              </p>
            </div>
            
            <div 
              className="hidden sm:block absolute text-right select-none pointer-events-none transition-all duration-75"
              style={{
                left: `${points[1].x}%`,
                top: `${points[1].y}%`,
                transform: 'translate(16px, -16px)'
              }}
            >
              <p className="font-pixel text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-[#FDFBF7]/60">
                Full_Stack<br />Developer
              </p>
            </div>

            <div 
              className="hidden sm:block absolute text-right select-none pointer-events-none transition-all duration-75"
              style={{
                left: `${points[2].x}%`,
                top: `${points[2].y}%`,
                transform: 'translate(-10px, 32px)'
              }}
            >
              <p className="font-pixel text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-[#FDFBF7]/60">
                AI • WEB •<br />REAL-TIME_SYSTEMS
              </p>
            </div>

            <div 
              className="hidden sm:block absolute text-left select-none pointer-events-none transition-all duration-75"
              style={{
                left: `${points[3].x}%`,
                top: `${points[3].y}%`,
                transform: 'translate(calc(-100% - 4px), 40px)'
              }}
            >
              <p className="font-pixel text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-[#FDFBF7]/60">
                Products<br />People_Enjoy
              </p>
            </div>

            {/* Polygon Image Frame */}
            <div 
              className="absolute inset-0 bg-[#FDFBF7]/5 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.5)] border border-white/10"
              style={{ clipPath: `polygon(${points[0].x}% ${points[0].y}%, ${points[1].x}% ${points[1].y}%, ${points[2].x}% ${points[2].y}%, ${points[3].x}% ${points[3].y}%)` }}
            >
              <Image 
                src="/modihard.png" 
                alt="The Artisan" 
                fill 
                className="object-cover pointer-events-none"
              />
            </div>

            {/* SVG Overlay (Dynamic Outline and Corner square indicators) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-20" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon 
                points={`${points[0].x},${points[0].y} ${points[1].x},${points[1].y} ${points[2].x},${points[2].y} ${points[3].x},${points[3].y}`} 
                fill="none" 
                stroke="white" 
                strokeWidth="0.3" 
                strokeOpacity="0.4" 
              />
            </svg>

            {/* Hanging Lotus Bell (Center Top) */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-24 w-10 flex flex-col items-center pointer-events-none">
               <div className="w-px h-full bg-gradient-to-b from-transparent to-[#FDFBF7]/40 border-dashed border-l" />
               <svg viewBox="0 0 100 100" className="w-6 h-6 fill-[#FDFBF7]">
                  <path d="M50 0 L100 50 L50 100 L0 50 Z" />
               </svg>
            </div>

            {/* Draggable Anchors */}
            {points.map((p, index) => (
              <div
                key={index}
                onPointerDown={startDrag(index)}
                className="absolute w-8 h-8 flex items-center justify-center cursor-crosshair z-30 group/handle touch-none select-none"
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {/* Visual anchor point */}
                <div className="w-2.5 h-2.5 bg-white shadow-lg group-hover/handle:scale-125 transition-transform duration-150" />
                {/* Pulsing ring on hover */}
                <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover/handle:opacity-100 transition-opacity duration-300 blur-sm scale-75" />
              </div>
            ))}

          </div>


        </div>

        {/* Right Side: Narrative & Actions */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Section Heading */}
          <div className="mb-12 flex flex-col items-center lg:items-start">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-px bg-white/40"></div>
              <svg width="16" height="16" viewBox="0 0 100 100" className="fill-white">
                 {[...Array(8)].map((_, i) => (
                   <path key={i} d="M50 50 Q65 20 50 0 Q35 20 50 50" transform={`rotate(${i * 45} 50 50)`} />
                 ))}
              </svg>
            </div>
            <span className="font-pixel text-[10px] text-white/50 uppercase tracking-[0.5em] mb-4 block">Identity / Sutradhar</span>
            <h2 className="text-4xl md:text-6xl font-serif tracking-tight text-white leading-none">
              The <span className="font-helvetica font-bold uppercase text-2xl md:text-4xl text-[#FDFBF7]">Artisan</span> Path
            </h2>
          </div>

          {/* Bio Text */}
          <div className="max-w-xl space-y-8 text-[#FDFBF7]">
            <p className="text-xl md:text-2xl leading-relaxed font-serif italic tracking-tight opacity-95">
              I’m a Software Developer and Computer Science enthusiast passionate about building impactful digital experiences.
            </p>
            <div className="w-12 h-px bg-white/20" />
            <div className="space-y-6 text-md md:text-lg leading-relaxed font-serif opacity-80">
              <p>
                I enjoy creating full-stack applications, AI-powered tools, and real-time systems using modern technologies like <span className="text-white font-bold">React, Next.js, and Node.js.</span>
              </p>
              <p className="italic">
                For me, development is about solving problems, creating meaningful experiences, and constantly growing as an engineer.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 mt-16">
            <button 
              onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
              className="group relative px-10 py-4 bg-[#FDFBF7] text-[#BF360C] overflow-hidden inline-block text-left"
            >
              <div className="relative z-10 font-pixel text-[10px] uppercase tracking-widest font-bold group-hover:text-[#FDFBF7] transition-colors duration-300">
                Send Message
              </div>
              <div className="absolute inset-0 bg-[#121212] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
            </button>
            
            <Link 
              href="/projects" 
              className="group flex flex-col items-center justify-center border border-white/20 px-10 py-4 hover:bg-white/5 transition-all"
            >
              <span className="font-pixel text-[10px] text-white uppercase tracking-widest">Browse Archive</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ShowcaseSection;
