"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface Artifact {
  id: number;
  image: string;
  title: string;
  label: string;
  desc: string;
  color: string;
  lotus: string;
  date: string;
}

const ArtifactCard = ({ art, idx, scrollYProgress }: { art: Artifact, idx: number, scrollYProgress: MotionValue<number> }) => {
  // Define ranges for each of the 4 cards within the active scroll zone [0.2, 0.8]
  const start = 0.2 + idx * 0.15;
  const end = start + 0.15;
  
  // Bloom opacity: Peaks when the card is in its active scroll range
  const bloomOpacity = useTransform(
    scrollYProgress,
    [start - 0.05, start, end, end + 0.05],
    [0.1, 1, 1, 0.1]
  );

  const bloomScale = useTransform(
    scrollYProgress,
    [start - 0.05, start, end],
    [0.6, 1, 1]
  );

  return (
    <div className="relative flex-shrink-0 group">
      {/* VIBRANT Blooming Lotus SVG - Linked to Scroll */}
      <div className="absolute -top-40 -left-40 w-96 h-96 pointer-events-none z-0">
        <motion.svg 
          viewBox="0 0 100 100" 
          style={{ opacity: bloomOpacity, scale: bloomScale }}
          className="w-full h-full drop-shadow-[0_0_30px_rgba(0,0,0,0.15)]"
        >
          {[...Array(12)].map((_, i) => (
            <motion.path 
              key={i} 
              d="M50 50 Q60 20 50 0 Q40 20 50 50" 
              fill={art.lotus}
              transform={`rotate(${i * 30} 50 50)`} 
            />
          ))}
          <circle cx="50" cy="50" r="4" fill="#FFD700" />
        </motion.svg>
      </div>

      {/* Hand-Torn Parchment Image Container */}
      <div className="relative w-[350px] md:w-[650px] aspect-[16/10] perspective-1000 z-10">
        <motion.div 
          whileHover={{ rotateY: 2, rotateX: -2, scale: 1.02 }}
          className="relative w-full h-full shadow-[0_40px_100px_rgba(0,0,0,0.12)] overflow-hidden bg-white p-4"
          style={{ 
            clipPath: "polygon(1% 2%, 99% 1%, 98% 98%, 2% 99%, 0% 50%)", 
            border: "1px solid rgba(0,0,0,0.05)"
          }}
        >
          <div className="relative w-full h-full overflow-hidden bg-gray-50">
            {art.image.endsWith('.mp4') ? (
              <video 
                src={art.image} 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
              />
            ) : (
              <Image 
                src={art.image} 
                alt={art.title} 
                fill 
                className="object-cover transition-all duration-1000 group-hover:scale-105"
              />
            )}
            
            {/* Vivid Color Overlay on Hover */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000" 
              style={{ backgroundColor: art.color }}
            />
          </div>

          {/* Branding Overlay */}
          <div className="absolute bottom-10 left-10 right-10 z-20">
            <motion.div className="flex flex-col items-start">
              <span 
                className="text-8xl font-bold mb-[-30px] ml-[-15px] pointer-events-none select-none uppercase tracking-tighter"
                style={{ color: art.lotus, opacity: 0.05 }}
              >
                {art.title}
              </span>
              <h3 className="text-3xl font-serif text-[#BF360C] mb-2 tracking-tight">{art.label}</h3>
              <p className="text-[10px] font-pixel text-white tracking-[0.3em] uppercase">{art.desc}</p>
              <motion.div 
                style={{ scaleX: bloomOpacity, backgroundColor: art.lotus }}
                className="mt-6 h-[2px] w-12 origin-left" 
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Artisan's Curated Tag */}
      <div className="mt-12 ml-4 flex items-center space-x-6">
        <div className="flex flex-col">
          <span className="font-pixel text-[9px] text-black/30 uppercase tracking-[0.4em]">Date Recorded</span>
          <span className="font-serif text-sm text-black/50">{art.date}</span>
        </div>
        <div className="w-16 h-[1px] bg-black/10" />
        <motion.div 
          style={{ scale: bloomOpacity, opacity: bloomOpacity, backgroundColor: art.lotus }}
          className="w-4 h-4 rounded-full shadow-sm" 
        />
      </div>
    </div>
  );
};

const ArtifactsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const artifacts: Artifact[] = [
    {
      id: 1,
      image: "/GOA0.mp4",
      title: "गोवा",
      label: "GOA",
      desc: "yup, I edit sometimes",
      color: "#FF8C00",
      lotus: "#FF5722",
      date: "June 2024"
    },
    {
      id: 2,
      image: "/1.mp4",
      title: "pondi",
      label: "Pondicherry",
      desc: "TBSM",
      color: "#1EAB80",
      lotus: "#00C853",
      date: "Jan 2025"
    },
    {
      id: 3,
      image: "/yashraj.png",
      title: "ऑक्युलस",
      label: "Yashraj Concert",
      desc: "Oculus 24",
      color: "#D32F2F",
      lotus: "#FF1744",
      date: "Mar 2024"
    },
    {
      id: 4,
      image: "/travel_artifact_1778826135542.png",
      title: "यात्रा",
      label: "The Voyage",
      desc: "Seeking wisdom in uncharted paths.",
      color: "#01579B",
      lotus: "#2979FF",
      date: "Apr 2024"
    }
  ];

  const xScroll = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "-75%"]);

  return (
    <section 
      ref={containerRef}
      className="h-[500vh] w-full bg-[#FDFBF7] relative"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center bg-[#FDFBF7]">
        {/* Subtle Khadi Grain */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none grain-overlay" />

        {/* Massive Background Sanskrit - Soft Gray */}
        <motion.div 
          style={{ x: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
          className="absolute top-1/2 -translate-y-1/2 left-0 text-[35vw] font-bold text-black/[0.02] whitespace-nowrap pointer-events-none select-none"
        >
          कला संस्कृति अनुभव सृजन
        </motion.div>

        {/* Section Header */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 text-center z-10">
           <span className="font-pixel text-[10px] text-[#FF1F00] uppercase tracking-[1em] mb-4 block opacity-60">Private Collection</span>
           <h2 className="text-4xl md:text-6xl font-serif tracking-tighter text-[#121212]">
              The <span className="italic font-light text-[#FF1F00]">Artisan’s</span> Atelier
           </h2>
        </div>

        {/* Horizontal Luxury Gallery */}
        <motion.div 
          style={{ x: xScroll }}
          className="flex items-center space-x-[15vw] px-[15vw]"
        >
          {artifacts.map((art, idx) => (
            <ArtifactCard key={art.id} art={art} idx={idx} scrollYProgress={scrollYProgress} />
          ))}

          {/* Final Masterpiece Closing */}
          <div className="flex-shrink-0 w-[600px] flex flex-col items-center text-center px-20">
             <div className="w-px h-24 bg-black/10 mb-12" />
             <p className="text-4xl md:text-5xl font-serif italic text-black/20 tracking-tighter leading-none mb-12">
                “Artistry is the <span className="text-black/60">silent language</span> of the soul’s deepest memories.”
             </p>
             <div className="flex items-center space-x-4">
                <div className="w-3 h-3 rounded-full bg-[#FF1F00]" />
                <div className="w-40 h-[1px] bg-black/10" />
                <div className="w-3 h-3 rounded-full bg-[#00C853]" />
             </div>
          </div>
        </motion.div>

        {/* Minimal Progress Bar */}
        <div className="absolute bottom-12 left-12 w-64 h-[2px] bg-black/5 overflow-hidden">
           <motion.div 
             style={{ scaleX: scrollYProgress }}
             className="w-full h-full bg-[#FF1F00] origin-left"
           />
        </div>
      </div>
    </section>
  );
};

export default ArtifactsSection;
