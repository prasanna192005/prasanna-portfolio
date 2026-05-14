"use client";

import { motion } from "framer-motion";

const education = [
  {
    degree: "Bachelor of Technology",
    field: "Electronics and Telecommunication Engineering",
    institution: "Sardar Patel Institute of Technology",
    year: "2022 - 2026"
  }
];

const experience = {
  company: "edept",
  roles: [
    {
      title: "Machine Learning Intern",
      year: "Jan 2026 - Present",
      desc: "Teaching machines to be smarter while debugging why they still act like toddlers. Building ML models and somehow making them behave inside real-world web apps and APIs."
    },
    {
      title: "Hackathon Problem Setter & Curriculum Design",
      year: "Aug 2025 - Dec 2025",
      desc: "Designed hackathon problems that looked innocent but ruined sleep cycles. Created curricula that made people question their life choices (and eventually learn something useful)."
    }
  ]
};

const CardFrame = ({ children, title, subtitle, bgColor, accentColor }: { 
  children: React.ReactNode, 
  title: string, 
  subtitle: string, 
  bgColor: string,
  accentColor: string
}) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`relative ${bgColor} p-10 md:p-14 overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.2)] group transition-all duration-700`}
  >
    {/* Khadi Grain Overlay (Ensures tactile feel) */}
    <div className="grain-overlay opacity-30 pointer-events-none" />
    
    {/* Royal Framing Accents (White/Gold) */}
    <svg viewBox="0 0 20 20" className={`absolute top-0 left-0 w-8 h-8 stroke-white/40 fill-none`}>
      <path d="M0 0 L20 0 M0 0 L0 20" strokeWidth="1" />
      <motion.circle 
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        cx="2" cy="2" r="1.5" className="fill-white" stroke="none" 
      />
    </svg>
    <svg viewBox="0 0 20 20" className={`absolute bottom-0 right-0 w-8 h-8 stroke-white/40 fill-none rotate-180`}>
      <path d="M0 0 L20 0 M0 0 L0 20" strokeWidth="1" />
      <motion.circle 
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        cx="2" cy="2" r="1.5" className="fill-white" stroke="none" 
      />
    </svg>

    {/* Background Motif (Animated Mandala) */}
    <motion.div 
      animate={{ rotate: 360 }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="absolute -right-10 -bottom-10 w-40 h-40 opacity-[0.07] pointer-events-none"
    >
       <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
          {[...Array(12)].map((_, i) => (
            <path key={i} d="M50 50 Q65 20 50 0 Q35 20 50 50" transform={`rotate(${i * 30} 50 50)`} />
          ))}
       </svg>
    </motion.div>

    <div className="relative z-10 text-white">
      <div className="mb-12">
        <span className={`font-pixel text-[10px] ${accentColor} uppercase tracking-[0.5em] mb-4 block`}>{subtitle}</span>
        <h3 className="text-4xl md:text-5xl font-serif tracking-tight leading-none">{title}</h3>
      </div>
      {children}
    </div>
  </motion.div>
);

export default function ExperienceSection() {
  return (
    <section className="py-40 bg-[#FDFBF7] relative overflow-hidden">
      {/* Background Jaali Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none jaali-grid scale-150"></div>

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-32 flex flex-col items-start">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-px bg-[#FF1F00]"></div>
            <span className="font-pixel text-[11px] text-[#FF1F00] uppercase tracking-[0.6em]">Chronicle / Lineage</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-serif tracking-tight text-[#121212]">
            Knowledge <span className="font-helvetica font-bold uppercase text-3xl md:text-6xl text-[#FF1F00]">& Karma</span>
          </h2>
        </div>

        {/* The Diptych (Colorful Jewel Tones) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Education Side (Emerald Green) */}
          <CardFrame 
            title="Vidya" 
            subtitle="Academic_Path" 
            bgColor="bg-[#2D6A4F]" 
            accentColor="text-[#D4E09B]"
          >
            <div className="space-y-16">
              {education.map((edu, i) => (
                <div key={i} className="relative pl-8 border-l border-white/20">
                  <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-[#D4E09B] rotate-45" />
                  
                  <div className="mb-4">
                    <span className="font-pixel text-[9px] text-[#D4E09B]/70 tracking-widest block mb-2">{edu.year}</span>
                    <h4 className="text-2xl md:text-3xl font-serif italic tracking-tight mb-2">{edu.degree}</h4>
                    <p className="font-helvetica font-bold text-xs uppercase tracking-[0.2em] opacity-90">{edu.field}</p>
                  </div>
                  <p className="text-sm opacity-70 font-serif italic">
                    Instituted at <span className="text-white opacity-100 font-bold">{edu.institution}</span>
                  </p>
                </div>
              ))}
            </div>
          </CardFrame>

          {/* Experience Side (Peacock Blue) */}
          <CardFrame 
            title="Karma" 
            subtitle="Industry_Force" 
            bgColor="bg-[#00509D]" 
            accentColor="text-[#90E0EF]"
          >
            <div className="mb-12 pb-8 border-b border-white/10">
              <h4 className="text-3xl font-serif tracking-tight mb-2">{experience.company}</h4>
              <div className="flex items-center space-x-2">
                 <div className="w-2 h-2 rounded-full bg-[#90E0EF] animate-pulse"></div>
                 <span className="font-pixel text-[9px] text-[#90E0EF] uppercase tracking-[0.4em]">Primary Node</span>
              </div>
            </div>
            
            <div className="space-y-14">
              {experience.roles.map((role, i) => (
                <div key={i} className="relative pl-10">
                  {/* Ornate Marker */}
                  <div className="absolute left-0 top-1.5 w-4 h-4 flex items-center justify-center border border-white/30">
                    <div className={`w-1.5 h-1.5 rotate-45 ${i === 0 ? "bg-[#90E0EF]" : "bg-white/40"}`} />
                  </div>
                  
                  <div className="mb-3">
                    <span className="font-pixel text-[8px] text-white/40 tracking-widest block mb-1">{role.year}</span>
                    <h5 className="text-xl font-serif italic tracking-tight">{role.title}</h5>
                  </div>
                  <p className="text-sm opacity-70 leading-relaxed font-serif max-w-sm">
                    {role.desc}
                  </p>
                </div>
              ))}
            </div>
          </CardFrame>

        </div>

        {/* Global Footer Navigation Link */}
        <div className="mt-24 flex justify-center">
           <div className="w-20 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
