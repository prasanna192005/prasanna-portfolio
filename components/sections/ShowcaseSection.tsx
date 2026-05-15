"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ShowcaseSection = () => {
  return (
    <section id="about" className="min-h-screen w-full flex items-center justify-center relative bg-[#BF360C] px-8 py-32 overflow-hidden">
      
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
           {[...Array(20)].map((_, i) => (
             <g key={i} transform={`translate(${40 + Math.random() * 120}, ${20 + Math.random() * 200}) scale(${0.3 + Math.random() * 0.5})`}>
                <path d="M0 0 Q10 -20 0 -40 Q-10 -20 0 0" fill="white" fillOpacity="0.5" />
             </g>
           ))}

           {/* Decorative Dots */}
           {[...Array(30)].map((_, i) => (
             <circle key={i} cx={20 + Math.random() * 160} cy={20 + Math.random() * 250} r="0.5" fill="white" />
           ))}
        </svg>
      </div>

      <div className="relative w-full max-w-7xl flex flex-col lg:flex-row items-center gap-16 lg:gap-32 z-10">
        
        {/* Left Side: The Artisan Portrait (The Polygon) */}
        <div className="relative w-[300px] h-[250px] md:w-[500px] md:h-[350px] lg:w-[550px] lg:h-[400px]">
          
          {/* Metadata Labels (Precisely Aligned to Polygon Vertices) */}
          <div className="absolute top-0 left-0 -translate-y-full -translate-x-4 text-left">
            <p className="font-pixel text-[9px] md:text-[10px] tracking-[0.4em] uppercase leading-relaxed text-[#FDFBF7]/60">
              Building_<span className="text-white">Ideas</span><br />
              Into_Reality
            </p>
          </div>
          <div className="absolute top-[14%] right-[7%] translate-x-full -translate-y-4 text-right">
            <p className="font-pixel text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-[#FDFBF7]/60">
              Full_Stack<br />Developer
            </p>
          </div>
          <div className="absolute bottom-[5%] right-[10%] translate-x-full translate-y-8 text-right">
            <p className="font-pixel text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-[#FDFBF7]/60">
              AI • WEB •<br />REAL-TIME_SYSTEMS
            </p>
          </div>
          <div className="absolute bottom-[10%] right-[4%] -translate-x-full translate-y-10 text-left">
            <p className="font-pixel text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-[#FDFBF7]/60">
              Products_People_Enjoy
            </p>
          </div>

          {/* Polygon Image Frame */}
          <div 
            className="absolute inset-0 bg-[#FDFBF7]/5 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.5)] border border-white/10"
            style={{ clipPath: 'polygon(0 0, 93% 14%, 95% 93%, 6% 87%)' }}
          >
            <Image 
              src="/modihard.png" 
              alt="The Artisan" 
              fill 
              className="object-cover"
            />
          </div>

          {/* SVG Overlay (Restoring White Squares) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="0,0 93,14 95,93 6,87" fill="none" stroke="white" strokeWidth="0.2" strokeOpacity="0.3" />
            
            {/* Minimal White Square Markers */}
            <rect x="-1.5" y="-1.5" width="3" height="3" fill="white" />
            <rect x="91.5" y="12.5" width="3" height="3" fill="white" />
            <rect x="93.5" y="91.5" width="3" height="3" fill="white" />
            <rect x="4.5" y="85.5" width="3" height="3" fill="white" />
          </svg>

          {/* Hanging Lotus Bell (Center Top) */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-24 w-10 flex flex-col items-center">
             <div className="w-px h-full bg-gradient-to-b from-transparent to-[#FDFBF7]/40 border-dashed border-l" />
             <svg viewBox="0 0 100 100" className="w-6 h-6 fill-[#FDFBF7]">
                <path d="M50 0 L100 50 L50 100 L0 50 Z" />
             </svg>
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
            <Link 
              href="/contact" 
              className="group relative px-10 py-4 bg-[#FDFBF7] text-[#BF360C] overflow-hidden"
            >
              <div className="relative z-10 font-pixel text-[10px] uppercase tracking-widest font-bold">Initiate Dispatch</div>
              <motion.div 
                initial={false}
                whileHover={{ x: '100%' }}
                className="absolute inset-0 bg-[#FF1F00] translate-x-[-100%] transition-transform duration-500"
              />
              <motion.div 
                whileHover={{ color: '#FFFFFF' }}
                className="absolute inset-0 flex items-center justify-center font-pixel text-[10px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity z-20"
              >
                Initiate Dispatch
              </motion.div>
            </Link>
            
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
