"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { PeacockBorders } from "@/components/PeacockBorders";
import ScrollChakra from "@/components/ScrollChakra";
import DynamicBackButton from "@/components/DynamicBackButton";

const DESIGN_SYSTEM_MD = `# Design System: Artisan-Tech Archive (v2.7)

## Core Philosophy
The "Artisan-Tech" aesthetic is a high-fidelity fusion of traditional Indian heritage (Sanskriti) and modern digital engineering (Vigyanam). It prioritizes structural hierarchy, tactile textures, and meaningful motion.

## Color Palette
- Royal Indigo (#2563EB): Primary brand color.
- Martyr Red (#FF1F00): Secondary accent.
- Temple Gold (#FFA502): Tertiary accent.
- Patrika Cream (#FDFBF7): Primary surface.
- Abyssal Black (#121212): Primary text.
- Altar Crimson (#D62238): Heritage accent.

## Typography
1. Heritage Narrative (Serif): Emotional storytelling, high-fidelity headers.
2. Structural Identity (Helvetica): System navigation, primary labels.
3. Technical Metadata (Pixel): System status, technical markers.

## Visual Elements
- Temple Brackets: L-shaped decorative strokes on corners.
- Mandala Motifs: Geometric SVG patterns.
- Khadi Texture: Subtle grain overlay for a tactile feel.

## Motion & Behavior
- Floating Rise: Y-translation on hover.
- Elastic Expansion: Spring-based scaling.
- Centric Rotation: SVG motifs rotating on center.
- Scroll Sync: Viewport-triggered animations.`;

const SectionHeader = ({ title, subtitle, number }: { title: string, subtitle: string, number: string }) => (
  <div className="mb-16 flex flex-col items-start">
    <div className="flex items-center space-x-3 mb-4">
      <span className="font-pixel text-[10px] text-[#FF1F00]">{number}</span>
      <div className="w-12 h-[1px] bg-[#FF1F00]/20"></div>
    </div>
    <h2 className="text-4xl font-serif italic tracking-tight mb-2">{title}</h2>
    <p className="font-pixel text-[9px] text-black/40 uppercase tracking-[0.3em]">{subtitle}</p>
  </div>
);

const ColorCard = ({ color, name, hex }: { color: string, name: string, hex: string }) => {
  const [copied, setCopied] = (typeof window !== "undefined") ? require('react').useState(false) : [false, () => {}];
  
  const copy = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group flex flex-col space-y-4">
      <div 
        onClick={copy}
        className={`${color} aspect-square w-full rounded-sm shadow-sm cursor-pointer relative overflow-hidden group-hover:shadow-xl transition-all duration-500`}
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10 backdrop-blur-[2px]">
           <span className="font-pixel text-[10px] text-white uppercase tracking-widest">{copied ? "Copied" : "Copy Hex"}</span>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-serif font-bold uppercase tracking-tight">{name}</span>
        <span className="text-[10px] font-mono text-black/40 uppercase">{hex}</span>
      </div>
    </div>
  );
};

export default function DesignSystemPage() {
  const [activeView, setActiveView] = (typeof window !== "undefined") ? require('react').useState('preview') : ['preview', () => {}];

  return (
    <div className="min-h-screen w-full bg-[#FDFBF7] text-[#121212] font-sans selection:bg-[#FF1F00] selection:text-white relative overflow-x-hidden">
      <Navbar />
      <ScrollChakra />
      <PeacockBorders topOffset="3rem" />
      <DynamicBackButton href="/" label="Command" />

      <main className="pt-48 pb-32 px-8 md:px-24 max-w-7xl mx-auto relative z-10">
        {/* Page Hero */}
        <div className="mb-40 text-center flex flex-col items-center">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#FF1F00]"></div>
            <svg width="20" height="20" viewBox="0 0 100 100" className="fill-none stroke-[#FF1F00] stroke-[4]">
              <path d="M50 10 L90 50 L50 90 L10 50 Z" />
              <circle cx="50" cy="50" r="15" />
            </svg>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#FF1F00]"></div>
          </div>
          <span className="font-pixel text-[10px] text-black/40 uppercase tracking-[0.5em] mb-4 block">PORTFOLIO DESIGN GUIDE</span>
          <h1 className="text-6xl md:text-8xl font-serif tracking-tight text-[#121212]">
            Interactive <span className="font-helvetica font-bold uppercase text-3xl md:text-6xl text-[#FF1F00]">Manual</span>
          </h1>
          <p className="mt-8 text-lg font-serif italic opacity-60 max-w-xl mx-auto leading-relaxed">
            "If you appreciate the design and motion of this portfolio, here is a detailed breakdown of the colors, fonts, and components that make it work."
          </p>

          {/* VIEW TOGGLE - The Core Interaction */}
          <div className="mt-16 flex items-center bg-black/5 p-1 rounded-full border border-black/5">
             <button 
               onClick={() => setActiveView('preview')}
               className={`px-8 py-2 rounded-full font-pixel text-[9px] uppercase tracking-widest transition-all ${activeView === 'preview' ? 'bg-[#FF1F00] text-white shadow-lg' : 'text-black/40 hover:text-black'}`}
             >
                Visual Preview
             </button>
             <button 
               onClick={() => setActiveView('blueprint')}
               className={`px-8 py-2 rounded-full font-pixel text-[9px] uppercase tracking-widest transition-all ${activeView === 'blueprint' ? 'bg-[#FF1F00] text-white shadow-lg' : 'text-black/40 hover:text-black'}`}
             >
                DESIGN.md Blueprint
             </button>
          </div>

          {/* Quick Links Header - Shifted Up */}
          <div className="mt-12 flex flex-wrap gap-4 justify-center">
             <Link href="/font" className="group flex items-center space-x-3 bg-black text-white px-6 py-3 rounded-full hover:bg-[#FF1F00] transition-all shadow-lg">
                <span className="font-pixel text-[9px] uppercase tracking-widest">VIEW FONTS</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
             </Link>
             <Link href="/vectors" className="group flex items-center space-x-3 bg-white border border-black/10 px-6 py-3 rounded-full hover:border-[#2563EB] hover:text-[#2563EB] transition-all shadow-md">
                <span className="font-pixel text-[9px] uppercase tracking-widest">Vector Laboratory</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
             </Link>
          </div>
        </div>

        {activeView === 'preview' ? (
          <>

        {/* 01. The Color System - Shifted Up Further */}
        <section className="mb-32">
          <SectionHeader title="The Color System" subtitle="Core_Brand_Colors" number="01" />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <ColorCard color="bg-[#2563EB]" name="Royal Indigo" hex="#2563EB" />
            <ColorCard color="bg-[#FF1F00]" name="Martyr Red" hex="#FF1F00" />
            <ColorCard color="bg-[#FDFBF7]" name="Patrika Cream" hex="#FDFBF7" />
            <ColorCard color="bg-[#121212]" name="Abyssal Black" hex="#121212" />
            <ColorCard color="bg-[#FFA502]" name="Temple Gold" hex="#FFA502" />
            <ColorCard color="bg-[#D62238]" name="Altar Crimson" hex="#D62238" />
          </div>
        </section>

        {/* 02. Typographic Core - Shifted Up */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <SectionHeader title="Typographic Core" subtitle="Glyph_System_Study" number="02" />
            <Link href="/font" className="group flex items-center space-x-3 mb-6">
              <span className="font-pixel text-[9px] text-black/40 uppercase tracking-widest group-hover:text-[#FF1F00] transition-colors">VIEW ALL FONTS</span>
              <div className="w-8 h-8 border border-black/10 rounded-full flex items-center justify-center group-hover:border-[#FF1F00] group-hover:text-[#FF1F00] transition-all">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </Link>
          </div>
          <div className="space-y-24">
             <div className="flex flex-col space-y-6">
                <span className="font-pixel text-[10px] text-black/20 uppercase tracking-widest">Main_Narrative / Serif</span>
                <div className="border-l-4 border-[#FF1F00] pl-8">
                   <h3 className="text-4xl md:text-7xl font-serif italic tracking-tight leading-none mb-4">The Grace of Heritage</h3>
                   <p className="text-sm opacity-60 max-w-2xl font-serif">Used for high-fidelity titles, emotional narratives, and artisan markers. Captures the flow of traditional calligraphy.</p>
                </div>
             </div>
             <div className="flex flex-col space-y-6">
                <span className="font-pixel text-[10px] text-black/20 uppercase tracking-widest">System_Identity / Helvetica</span>
                <div className="border-l-4 border-black pl-8">
                   <h3 className="text-4xl md:text-7xl font-helvetica font-bold uppercase tracking-tighter leading-none mb-4">Technical Precision</h3>
                   <p className="text-sm opacity-60 max-w-2xl font-sans">Used for structural headers, primary identity, and core navigational elements. Engineered for absolute clarity.</p>
                </div>
             </div>
             <div className="flex flex-col space-y-6">
                <span className="font-pixel text-[10px] text-black/20 uppercase tracking-widest">Metadata_Logic / Pixel</span>
                <div className="border-l-4 border-[#2563EB] pl-8">
                   <h3 className="text-2xl md:text-4xl font-pixel uppercase tracking-[0.2em] leading-none mb-4">INITIALIZING_ARCHIVE...</h3>
                   <p className="text-sm opacity-60 max-w-2xl font-mono">Used for system status, technical metadata, and low-level communication nodes. Grounds the design in digital reality.</p>
                </div>
             </div>
          </div>
          <Link href="/font" className="mt-16 inline-flex items-center space-x-4 text-[#FF1F00] font-pixel text-[10px] uppercase tracking-widest hover:translate-x-4 transition-transform">
             <span>Full Typography Deep-Dive</span>
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </section>

        {/* 03. Interaction Components - Shifted Up */}
        <section className="mb-32">
          <SectionHeader title="Component Laboratory" subtitle="Active_Interface_Nodes" number="03" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             {/* Button Study */}
             <div className="p-12 border border-black/5 bg-white/40 rounded-sm space-y-12">
                <div className="space-y-4">
                   <span className="font-pixel text-[9px] text-black/30 uppercase tracking-widest">Primary_Action</span>
                   <button className="bg-[#121212] text-white px-10 py-4 flex items-center space-x-4 shadow-xl hover:-translate-y-1 transition-all uppercase text-[10px] font-bold tracking-widest">
                      <span>Navigate Home</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                   </button>
                </div>
                <div className="space-y-4">
                   <span className="font-pixel text-[9px] text-black/30 uppercase tracking-widest">Heritage_Interactive</span>
                   <div className="p-8 bg-[#2563EB] text-white shadow-2xl relative overflow-hidden w-full max-w-sm rounded-sm">
                      <div className="relative z-10 flex items-center justify-between">
                         <div className="flex flex-col">
                            <span className="font-pixel text-[8px] uppercase tracking-widest mb-1 opacity-40">EMAIL</span>
                            <span className="text-lg font-serif">hi@prasanna.com</span>
                         </div>
                         <div className="w-10 h-10 border border-white/20 flex items-center justify-center">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>
                         </div>
                      </div>
                   </div>
                </div>
             </div>

             {/* Badge Study */}
             <div className="p-12 border border-black/5 bg-white/40 rounded-sm flex flex-col justify-center space-y-12">
                <div className="flex items-center space-x-4">
                   <span className="bg-[#FF1F00] text-white text-[8px] font-pixel px-3 py-1 rounded-full uppercase tracking-widest">System Online</span>
                   <span className="border border-black/10 text-black text-[8px] font-pixel px-3 py-1 rounded-full uppercase tracking-widest">Static Node</span>
                   <span className="bg-black text-white text-[8px] font-pixel px-3 py-1 rounded-full uppercase tracking-widest">Active v2.7</span>
                </div>
                <div className="flex flex-wrap gap-4">
                   {[...Array(6)].map((_, i) => (
                      <div key={i} className="w-12 h-12 border border-black/5 flex items-center justify-center hover:border-[#FF1F00] transition-colors">
                         <div className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-[#FF1F00]' : 'bg-[#2563EB]'} animate-pulse`} />
                      </div>
                   ))}
                </div>
             </div>
          </div>
        </section>

        {/* 04. Motion Signatures - Shifted Up */}
        <section className="mb-32">
          <SectionHeader title="Motion Signatures" subtitle="Behavioral_Dynamics" number="04" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <motion.div 
               whileHover={{ y: -20 }}
               className="p-12 border border-black/5 bg-white/60 text-center space-y-6"
             >
                <div className="w-12 h-12 bg-[#FF1F00] mx-auto rounded-full flex items-center justify-center text-white">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19l7-7-7-7M5 12h14"/></svg>
                </div>
                <h4 className="text-lg font-serif">Floating Rise</h4>
                <p className="text-[10px] font-pixel text-black/40 uppercase tracking-widest">Y_OFFSET_-20PX // DURATION_0.5S</p>
             </motion.div>
             <motion.div 
               whileHover={{ rotate: 180 }}
               transition={{ duration: 0.8, ease: "anticipate" }}
               className="p-12 border border-black/5 bg-white/60 text-center space-y-6"
             >
                <div className="w-12 h-12 border-2 border-[#2563EB] mx-auto flex items-center justify-center text-[#2563EB]">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
                </div>
                <h4 className="text-lg font-serif">Centric Rotation</h4>
                <p className="text-[10px] font-pixel text-black/40 uppercase tracking-widest">ROTATE_180DEG // EASE_ANTICIPATE</p>
             </motion.div>
             <motion.div 
               whileHover={{ scale: 1.05 }}
               className="p-12 border border-black/5 bg-white/60 text-center space-y-6"
             >
                <div className="w-12 h-12 bg-black mx-auto flex items-center justify-center text-white">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                </div>
                <h4 className="text-lg font-serif">Elastic Expansion</h4>
                <p className="text-[10px] font-pixel text-black/40 uppercase tracking-widest">SCALE_1.05 // SPRING_PHYSICS</p>
             </motion.div>
          </div>
          <Link href="/vectors" className="mt-16 inline-flex items-center space-x-4 text-[#2563EB] font-pixel text-[10px] uppercase tracking-widest hover:translate-x-4 transition-transform">
             <span>Geometric Vector Laboratory</span>
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </section>
      </>
    ) : (
      /* 05. AI Design Blueprint - Promoted to Top Level */
      <section className="mb-32 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <SectionHeader title="AI Design Blueprint" subtitle="Prompt_Engine_Logic" number="05" />
          <button 
             onClick={() => {
                navigator.clipboard.writeText(DESIGN_SYSTEM_MD);
                alert("Blueprint Copied to Clipboard");
             }}
             className="group flex items-center space-x-3 bg-[#FF1F00] text-white px-8 py-3 rounded-sm hover:scale-105 transition-all shadow-xl"
          >
            <span className="font-pixel text-[9px] uppercase tracking-widest">Copy_Full_Manifesto</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="11" width="8" height="8" rx="1" ry="1"/></svg>
          </button>
        </div>
        
        <div className="relative group">
           {/* Decorative Terminal Frame */}
           <div className="absolute -inset-1 bg-gradient-to-r from-[#FF1F00] to-[#2563EB] rounded-sm blur opacity-5 group-hover:opacity-20 transition-opacity"></div>
           <div className="relative bg-[#121212] rounded-sm overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-6 py-3 border-b border-white/10 bg-white/5">
                 <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-[#FF1F00]/40"></div>
                    <div className="w-2 h-2 rounded-full bg-[#FFA502]/40"></div>
                    <div className="w-2 h-2 rounded-full bg-[#2563EB]/40"></div>
                 </div>
                 <span className="font-pixel text-[8px] text-white/30 uppercase tracking-widest">DESIGN.md // SYSTEM_CODE</span>
              </div>
              <div className="p-8 max-h-[600px] overflow-y-auto no-scrollbar font-mono text-sm leading-relaxed text-white/80">
                 <pre className="whitespace-pre-wrap">{DESIGN_SYSTEM_MD}</pre>
              </div>
           </div>
        </div>
        <p className="mt-8 text-[10px] font-pixel text-black/30 uppercase tracking-widest text-center">
           Copy this blueprint and give it to an AI to recreate this design style.
        </p>
      </section>
    )}

        {/* Technical Footer */}
        <footer className="mt-60 pt-20 border-t border-black/10 text-center">
           <div className="flex flex-col items-center space-y-8">
              <div className="flex items-center space-x-8">
                 <div className="flex flex-col">
                    <span className="font-pixel text-[8px] text-black/40 uppercase tracking-widest">Core_Framework</span>
                    <span className="font-serif italic">Next.js 15.0</span>
                 </div>
                 <div className="w-px h-10 bg-black/10"></div>
                 <div className="flex flex-col">
                    <span className="font-pixel text-[8px] text-black/40 uppercase tracking-widest">Motion_Engine</span>
                    <span className="font-serif italic">Framer Motion v11</span>
                 </div>
                 <div className="w-px h-10 bg-black/10"></div>
                 <div className="flex flex-col">
                    <span className="font-pixel text-[8px] text-black/40 uppercase tracking-widest">Styling_Unit</span>
                    <span className="font-serif italic">Tailwind CSS</span>
                 </div>
              </div>
              <p className="font-pixel text-[9px] text-black/30 uppercase tracking-[0.4em]">Design System Version 2.7.0 // Stable Release</p>
           </div>
        </footer>
      </main>
    </div>
  );
}
