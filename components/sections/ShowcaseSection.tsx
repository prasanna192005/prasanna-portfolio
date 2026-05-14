"use client";

import Image from "next/image";
import Link from "next/link";

const ShowcaseSection = () => {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center relative bg-blue-700
     px-8 py-20 shadow-[0_-50px_100px_rgba(0,0,0,0.2)] overflow-hidden">
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
        <div className="max-w-4xl text-center space-y-8 px-8 text-white">
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
  );
};

export default ShowcaseSection;
