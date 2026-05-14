"use client";

import { motion } from "framer-motion";

const SkillsSection = () => {
  return (
    <section className="w-full bg-white flex flex-col items-center py-32 px-16 relative overflow-hidden border-b border-black/5">
      {/* Interactive Left Garland */}
      <div className="hidden md:flex absolute left-12 top-24 bottom-24 w-12 flex-col items-center justify-between z-20 group/garland cursor-crosshair">
        <div className="absolute top-0 bottom-0 w-px bg-[#BF360C]/10 group-hover/garland:bg-[#BF360C]/40 transition-colors duration-700"></div>
        {[...Array(6)].map((_, i) => (
          <div key={i} className="relative z-10 p-2 hover:scale-150 hover:-translate-y-2 transition-all duration-300 group/node">
            <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#BF360C]/30 fill-[#FDFBF7] group-hover/node:stroke-[#FF1F00] group-hover/node:fill-[#FF1F00]/10 transition-all duration-300">
              <path d="M12 22 Q16 16 18 12 Q16 18 12 22" fill="currentColor" stroke="none" />
              <path d="M12 22 Q8 16 6 12 Q8 18 12 22" fill="currentColor" stroke="none" />
              <path d="M12 22 Q12 12 22 12 Q12 12 12 2 Q12 12 2 12 Q12 12 12 22" strokeWidth="1" fill="none"/>
              <circle cx="12" cy="12" r="2" className="fill-[#BF360C]/30 group-hover/node:fill-[#FF1F00] transition-colors" stroke="none" />
            </svg>
            <div className="absolute inset-0 bg-[#FF1F00]/30 rounded-full blur-md opacity-0 group-hover/node:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        ))}
      </div>

      {/* Interactive Right Garland */}
      <div className="hidden md:flex absolute right-12 top-24 bottom-24 w-12 flex-col items-center justify-between z-20 group/garland cursor-crosshair scale-x-[-1]">
        <div className="absolute top-0 bottom-0 w-px bg-[#BF360C]/10 group-hover/garland:bg-[#BF360C]/40 transition-colors duration-700"></div>
        {[...Array(6)].map((_, i) => (
          <div key={i} className="relative z-10 p-2 hover:scale-150 hover:-translate-y-2 transition-all duration-300 group/node">
            <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#BF360C]/30 fill-[#FDFBF7] group-hover/node:stroke-[#FF1F00] group-hover/node:fill-[#FF1F00]/10 transition-all duration-300">
              <path d="M12 22 Q16 16 18 12 Q16 18 12 22" fill="currentColor" stroke="none" />
              <path d="M12 22 Q8 16 6 12 Q8 18 12 22" fill="currentColor" stroke="none" />
              <path d="M12 22 Q12 12 22 12 Q12 12 12 2 Q12 12 2 12 Q12 12 12 22" strokeWidth="1" fill="none"/>
              <circle cx="12" cy="12" r="2" className="fill-[#BF360C]/30 group-hover/node:fill-[#FF1F00] transition-colors" stroke="none" />
            </svg>
            <div className="absolute inset-0 bg-[#FF1F00]/30 rounded-full blur-md opacity-0 group-hover/node:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        ))}
      </div>

      <div className="max-w-6xl w-full z-10 text-center flex flex-col items-center">
        
        <div className="flex items-center justify-center space-x-4 mb-6 relative z-10">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#BF360C]"></div>
          <svg width="16" height="16" viewBox="0 0 100 100" className="fill-none stroke-[#BF360C] stroke-[4] animate-[spin_10s_linear_infinite]">
            <path d="M50 0 L100 50 L50 100 L0 50 Z" />
          </svg>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#BF360C]"></div>
        </div>
        
        <span className="font-pixel text-[10px] text-[#BF360C] uppercase tracking-[0.5em] mb-4 block">Phase 01.5</span>
        <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-[#121212] mb-20 flex items-center justify-center gap-3">
          Technical <span className="font-helvetica font-bold uppercase text-2xl md:text-3xl text-[#BF360C] mt-1.5">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-8 max-w-5xl">
          {[
            "C & C++", "Python & Java", "TypeScript / JavaScript", "Node.js & Express", 
            "Next.js / React", "HTML & Vanilla CSS", "TailwindCSS", "Machine Learning & AI", 
            "LLMs & GenAI Engineering", "PostgreSQL & MongoDB", "Docker & Kubernetes", 
            "AWS & Cloudflare", "Vercel Edge & Serverless", "Prometheus, Grafana, Loki, Tempo", 
            "CI/CD Pipelines", "RESTful APIs & GraphQL", "Git", "Terminal Sorcery"
          ].map((skill, index) => (
            <div 
              key={index} 
              className="relative bg-[#FDFBF7] border border-[#BF360C]/30 px-6 py-3 rounded-xl shadow-sm hover:border-[#BF360C]/70 hover:-translate-y-1 hover:shadow-md transition-all duration-500 group"
            >
              {/* Half-in Half-out Flower Wrapper (Masks the border behind it) */}
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-white rounded-full flex items-center justify-center z-10">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-[#BF360C] group-hover:rotate-90 transition-transform duration-700">
                  {[...Array(8)].map((_, i) => (
                    <path key={i} d="M50 50 Q65 20 50 0 Q35 20 50 50" transform={`rotate(${i * 45} 50 50)`} />
                  ))}
                  <circle cx="50" cy="50" r="15" fill="#FDFBF7" />
                  <circle cx="50" cy="50" r="5" fill="#BF360C" />
                </svg>
              </div>
              <span className="font-serif text-[#121212]/80 group-hover:text-[#BF360C] transition-colors tracking-wide text-sm md:text-base relative z-0">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
