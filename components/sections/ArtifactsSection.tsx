"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ArtifactsSection = () => {
  const artifacts = [
    {
      id: 1,
      image: "/photography_artifact_1778826077528.png",
      caption: "Drishti — Capturing the fleeting moments of stillness.",
      rotation: -3,
      size: "w-64 h-80",
      position: "top-0 left-[5%]",
      delay: 0.1
    },
    {
      id: 2,
      image: "/hackathon_artifact_1778826094434.png",
      caption: "Karma — The raw energy of midnight sprints.",
      rotation: 5,
      size: "w-72 h-72",
      position: "top-20 right-[10%]",
      delay: 0.3
    },
    {
      id: 3,
      image: "/chai_laptop_artifact_1778826113373.png",
      caption: "Amrit — Chai-fueled logic and digital architecture.",
      rotation: -2,
      size: "w-80 h-64",
      position: "bottom-10 left-[15%]",
      delay: 0.5
    },
    {
      id: 4,
      image: "/travel_artifact_1778826135542.png",
      caption: "Yatra — Seeking inspiration in every corner of the map.",
      rotation: 4,
      size: "w-64 h-80",
      position: "bottom-0 right-[20%]",
      delay: 0.7
    }
  ];

  return (
    <section className="min-h-screen w-full bg-[#FDFBF7] pt-8 pb-32 px-8 relative overflow-hidden flex flex-col items-center">
      {/* Khadi Paper Grain Overlay */}
      <div className="grain-overlay opacity-[0.05] pointer-events-none" />

      {/* Sanskrit Ghost Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-[0.03]">
        <span className="absolute top-20 left-10 text-[20vw] font-bold text-black rotate-12">कला</span>
        <span className="absolute bottom-20 right-10 text-[20vw] font-bold text-black -rotate-12">संस्कृति</span>
      </div>

      {/* Floating Marigold Petals */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: -20, 
              rotate: 0,
              opacity: 0 
            }}
            animate={{ 
              y: "120vh", 
              rotate: 360,
              opacity: [0, 0.4, 0.4, 0] 
            }}
            transition={{ 
              duration: 10 + Math.random() * 20, 
              repeat: Infinity, 
              delay: Math.random() * 20,
              ease: "linear" 
            }}
            className="absolute w-4 h-4 bg-[#FFB300] rounded-full blur-[1px]"
            style={{ 
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" 
            }}
          />
        ))}
      </div>

      {/* Background Decorative Mandala */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-[#FF1F00] stroke-[0.1]">
           <circle cx="50" cy="50" r="45" />
           <circle cx="50" cy="50" r="30" strokeDasharray="1 2" />
           {[...Array(12)].map((_, i) => (
             <path key={i} d="M50 5 Q65 25 50 45 Q35 25 50 5" transform={`rotate(${i * 30} 50 50)`} />
           ))}
        </svg>
      </div>

      <div className="max-w-6xl w-full flex flex-col items-center relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24">
           <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-px bg-[#FF1F00]/30"></div>
              <svg width="24" height="24" viewBox="0 0 100 100" className="fill-none stroke-[#FF1F00] stroke-[4] animate-pulse">
                <path d="M50 0 L65 35 L100 50 L65 65 L50 100 L35 65 L0 50 L35 35 Z" />
                <circle cx="50" cy="50" r="15" />
              </svg>
              <div className="w-12 h-px bg-[#FF1F00]/30"></div>
           </div>
           <span className="font-pixel text-[10px] text-black/40 uppercase tracking-[0.5em] mb-4 block">The Artisan’s Sangrah</span>
           <h2 className="text-5xl md:text-8xl font-serif tracking-tight text-[#121212]">
              Beyond the <span className="italic text-[#FF1F00]">Code</span>
           </h2>
           <p className="mt-8 text-black/60 font-serif italic max-w-lg mx-auto text-lg">
              A sacred treasury of moments—where curiosity meets the rich tapestry of culture.
           </p>
        </div>

        {/* Scattered Artifacts Gallery */}
        <div className="relative w-full h-[1400px] md:h-[900px]">
           {artifacts.map((artifact) => (
             <motion.div
               key={artifact.id}
               initial={{ opacity: 0, scale: 0.8, rotate: artifact.rotation * 2 }}
               whileInView={{ opacity: 1, scale: 1, rotate: artifact.rotation }}
               viewport={{ once: true }}
               transition={{ duration: 1.2, delay: artifact.delay, ease: [0.16, 1, 0.3, 1] }}
               className={`absolute ${artifact.position} ${artifact.size} group cursor-crosshair`}
             >
                {/* Jharokha Frame */}
                <div className="relative w-full h-full p-4 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] group-hover:shadow-[0_40px_100px_rgba(0,0,0,0.15)] transition-all duration-700">
                   
                   {/* Top Jharokha Arch */}
                   <div className="absolute -top-6 left-0 w-full h-8 flex justify-center pointer-events-none">
                      <svg viewBox="0 0 100 20" className="h-full fill-white drop-shadow-sm">
                        <path d="M0 20 L0 10 Q50 -10 100 10 L100 20 Z" />
                        <circle cx="50" cy="5" r="2" fill="#FF1F00" opacity="0.4" />
                      </svg>
                   </div>

                   <div className="relative w-full h-full overflow-hidden bg-[#F5F5F5] border border-black/[0.03]">
                      <Image 
                        src={artifact.image} 
                        alt="Artifact" 
                        fill 
                        className="object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-1000 scale-125 group-hover:scale-100"
                      />
                      {/* Sepia/Khadi Overlay */}
                      <div className="absolute inset-0 bg-[#BF360C]/5 pointer-events-none mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                   </div>

                   {/* Caption Card (Reveals on Hover) */}
                   <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[95%] bg-white p-5 shadow-2xl border border-black/5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-6 group-hover:translate-y-0 z-20">
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rotate-45 border-t border-l border-black/5" />
                      <p className="text-[12px] font-serif italic text-black/80 leading-relaxed text-center">
                        {artifact.caption}
                      </p>
                      <div className="mt-3 flex justify-center items-center space-x-2">
                         <div className="w-8 h-px bg-[#FF1F00]/20" />
                         <div className="w-1.5 h-1.5 rotate-45 bg-[#FF1F00]" />
                         <div className="w-8 h-px bg-[#FF1F00]/20" />
                      </div>
                   </div>
                </div>

                {/* Wax Seal Pin */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#FF1F00] rounded-full shadow-lg z-30 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                   <svg viewBox="0 0 100 100" className="w-6 h-6 fill-white opacity-80">
                      {[...Array(6)].map((_, i) => (
                        <path key={i} d="M50 50 Q60 30 50 10 Q40 30 50 50" transform={`rotate(${i * 60} 50 50)`} />
                      ))}
                   </svg>
                </div>
             </motion.div>
           ))}
        </div>

        {/* Closing Narrative */}
        <div className="mt-40 text-center">
           <div className="w-24 h-px bg-[#FF1F00]/10 mx-auto mb-10"></div>
           <p className="text-base font-serif italic text-black/40 tracking-widest max-w-lg mx-auto leading-loose">
              “Kala is the breath of the artisan, a sacred bridge between the seen and the unseen.”
           </p>
        </div>
      </div>
    </section>
  );
};

export default ArtifactsSection;
