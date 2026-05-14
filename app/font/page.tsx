"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { PeacockBorders } from "@/components/PeacockBorders";
import ScrollChakra from "@/components/ScrollChakra";

export default function FontShowcase() {
  const fonts = [
    {
      name: "The Royal Script",
      family: "font-serif",
      desc: "An elegant, italicized serif that captures the heritage and grace of classic Indian manuscripts. Used for major titles and narrative sections.",
      sample: "Knowledge is the only wealth that grows as it is shared.",
      styles: ["Italic", "Light", "Medium"]
    },
    {
      name: "The Modern HUD",
      family: "font-helvetica",
      desc: "A bold, high-performance grotesque that provides technical precision and clarity. Used for structural headers and core system identity.",
      sample: "SYSTEM_ID_192005 // ARCHITECTURE_V3",
      styles: ["Bold", "Extra Bold", "Black"]
    },
    {
      name: "The System Kernel",
      family: "font-pixel",
      desc: "An 8-bit monospaced font that grounds the portfolio in engineering reality. Used for metadata, system status, and technical IDs.",
      sample: "INITIALIZING_NEURAL_LINK... OK",
      styles: ["Regular", "Monospaced"]
    }
  ];

  return (
    <div className="min-h-screen w-full bg-[#FDFBF7] text-[#121212] font-sans selection:bg-[#FF1F00] selection:text-white relative overflow-x-hidden">
      <Navbar />
      <ScrollChakra />
      <PeacockBorders />

      {/* Background Mandala Watermark */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-black stroke-[0.2]">
          <circle cx="50" cy="50" r="45" />
          {[...Array(12)].map((_, i) => (
            <path key={i} d="M50 10 Q60 30 50 50 Q40 30 50 10" transform={`rotate(${i * 30} 50 50)`} />
          ))}
        </svg>
      </div>

      <main className="pt-48 pb-32 px-12 md:px-32 flex flex-col items-center relative z-10">
        <div className="max-w-5xl w-full">
          {/* Header */}
          <div className="mb-32 text-center flex flex-col items-center">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-px bg-[#FF1F00]/20"></div>
              <svg width="16" height="16" viewBox="0 0 100 100" className="fill-none stroke-[#FF1F00] stroke-[4]">
                <path d="M50 10 L90 50 L50 90 L10 50 Z" />
              </svg>
              <div className="w-12 h-px bg-[#FF1F00]/20"></div>
            </div>
            <span className="font-pixel text-[10px] text-black/40 uppercase tracking-[0.5em] mb-4 block">Scriptum / Type_System</span>
            <h1 className="text-5xl md:text-8xl font-serif tracking-tight text-[#121212]">
              The Royal <span className="font-helvetica font-bold uppercase text-3xl md:text-6xl text-[#FF1F00]">Arsenal</span>
            </h1>
          </div>

          {/* Font Arsenal */}
          <div className="space-y-40">
            {fonts.map((font, index) => (
              <div key={font.name} className="relative group">
                {/* Decorative Temple Bracket */}
                <div className="absolute -top-12 -left-12 w-24 h-24 opacity-10 group-hover:opacity-30 transition-opacity">
                   <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-black stroke-[0.5]">
                      <path d="M0 0 L100 0 M0 0 L0 100" />
                      <circle cx="0" cy="0" r="10" className="fill-[#FF1F00]" stroke="none" />
                   </svg>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
                  {/* Info Side */}
                  <div className="md:col-span-1 space-y-6">
                    <div className="flex items-center space-x-3">
                       <span className="font-pixel text-[9px] text-[#FF1F00]">0{index + 1}</span>
                       <h2 className="text-2xl font-serif italic tracking-tight">{font.name}</h2>
                    </div>
                    <p className="text-sm opacity-60 leading-relaxed font-serif">
                      {font.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                       {font.styles.map(style => (
                         <span key={style} className="text-[9px] font-pixel border border-black/10 px-2 py-1 rounded-sm opacity-50 uppercase">{style}</span>
                       ))}
                    </div>
                  </div>

                  {/* Sample Side */}
                  <div className="md:col-span-2 relative">
                    {/* Khadi Texture on sample container */}
                    <div className="absolute inset-0 bg-[#FDFBF7] shadow-[inset_0_0_50px_rgba(0,0,0,0.02)] border border-black/5 p-12 -m-8 -z-10 overflow-hidden">
                       <div className="grain-overlay opacity-10" />
                    </div>
                    <p className={`${font.family} text-4xl md:text-7xl leading-[1.1] tracking-tight break-words`}>
                      {font.sample}
                    </p>
                    
                    {/* Character Set (Subtle) */}
                    <div className={`${font.family} mt-12 text-sm opacity-20 tracking-widest uppercase`}>
                      ABCDEFGHIJKLMNOPQRSTUVWXYZ <br />
                      abcdefghijklmnopqrstuvwxyz <br />
                      0123456789 !@#$%^&*()
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Technical Metadata Footer */}
          <div className="mt-48 pt-12 border-t border-black/10 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
             <div className="flex items-center space-x-6">
                <div className="flex flex-col">
                  <span className="font-pixel text-[8px] text-black/40 uppercase tracking-widest">Rendering_Engine</span>
                  <span className="font-serif italic text-sm">Next.js v15.0 // Vercel Edge</span>
                </div>
                <div className="w-px h-8 bg-black/10"></div>
                <div className="flex flex-col">
                  <span className="font-pixel text-[8px] text-black/40 uppercase tracking-widest">Last_Calibration</span>
                  <span className="font-serif italic text-sm">May 2026</span>
                </div>
             </div>

             <Link 
              href="/" 
              className="group bg-[#121212] text-white px-10 py-4 flex items-center space-x-4 shadow-2xl hover:-translate-y-1 transition-all"
            >
              <span className="font-pixel text-[10px] uppercase tracking-widest">Return Home</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M15 18l6-6-6-6" />
              </svg>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

import Link from "next/link";
