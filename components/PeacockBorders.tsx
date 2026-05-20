"use client";

import { motion } from "framer-motion";

const PeacockIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 120 220" className={className}>
    <defs>
      <linearGradient id="peacockGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00E5FF" /> {/* Electric Cyan */}
        <stop offset="30%" stopColor="#002884" /> {/* Deep Royal Blue */}
        <stop offset="70%" stopColor="#004D40" /> {/* Emerald Green */}
        <stop offset="100%" stopColor="#FFD700" /> {/* Golden Tail-end */}
      </linearGradient>
      
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="1.5" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    
    {/* Ornate Crown (Crest) */}
    <g transform="translate(60, 25)">
      {[...Array(5)].map((_, i) => {
        const angle = (i - 2) * 15;
        return (
          <g key={i} transform={`rotate(${angle})`}>
            {/* Fine Crown Shaft */}
            <line x1="0" y1="0" x2="0" y2="-22" stroke="#FFD700" strokeWidth="0.75" />
            {/* Crown Jewel Head */}
            <circle cx="0" cy="-22" r="3" fill="#00E5FF" filter="url(#glow)" />
            <circle cx="0" cy="-22" r="1.5" fill="#FFD700" />
          </g>
        );
      })}
    </g>

    {/* Ornate Wings & Body Layering */}
    {/* Under-Body Shadow */}
    <path 
      d="M60 25 Q78 45 62 80 Q44 115 72 155" 
      fill="none" 
      stroke="#121212" 
      strokeWidth="15" 
      strokeLinecap="round"
      opacity="0.3"
    />
    
    {/* Body / Neck - Ornate Gradient S-Curve */}
    <path 
      d="M60 25 Q78 45 62 80 Q44 115 72 155" 
      fill="none" 
      stroke="url(#peacockGradient)" 
      strokeWidth="12" 
      strokeLinecap="round" 
    />

    {/* Elegant Gold Inlay Filigree on Neck */}
    <path 
      d="M59 27 Q76 45 61 80 Q45 113 71 153" 
      fill="none" 
      stroke="#FFD700" 
      strokeWidth="0.75" 
      strokeDasharray="2 3"
      opacity="0.8"
    />

    {/* Head Profile */}
    <circle cx="62" cy="27" r="8" fill="#002884" />
    <circle cx="62" cy="27" r="7" fill="url(#peacockGradient)" />
    
    {/* Eye detail (Lachrymal Indian Style) */}
    <path d="M60 25 Q64 25 65 27 Q64 29 60 29 Q58 27 60 25 Z" fill="white" />
    <circle cx="61.5" cy="27" r="1.5" fill="#121212" />
    <circle cx="62.5" cy="26" r="0.5" fill="white" />

    {/* Beak */}
    <path d="M69 25 L80 29 Q72 32 68 34 Z" fill="#FFE082" stroke="#FFD700" strokeWidth="0.5" /> 

    {/* Scaled Breast Feathers (Ornate Layering) */}
    {[...Array(6)].map((_, i) => (
      <path 
        key={i} 
        d={`M${56 + i * 2} ${58 + i * 10} Q${42 - i * 4} ${70 + i * 8} ${52 + i * 3} ${92 + i * 12}`} 
        stroke="#FFD700" 
        strokeWidth="0.5" 
        fill="none" 
        opacity="0.6" 
      />
    ))}
    
    {/* Decorative Body Flowers / Dots */}
    <circle cx="58" cy="75" r="1.5" fill="#FFD700" />
    <circle cx="53" cy="90" r="1.2" fill="#FFD700" opacity="0.8" />
    <circle cx="50" cy="105" r="1" fill="#FFD700" opacity="0.6" />
  </svg>
);

const PeacockFeather = ({ delay = 0, index = 0 }: { delay: number; index: number }) => (
  <svg width="36" height="55" viewBox="0 0 100 150" className="drop-shadow-sm">
    {/* Feather Shaft */}
    <line x1="50" y1="0" x2="50" y2="150" stroke="#FFD700" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.4" />
    
    {/* Radiating Barbs (Delicate hair-like lines) */}
    {[...Array(6)].map((_, i) => {
      const y = 30 + i * 15;
      const spread = 30 + i * 5;
      return (
        <g key={i} opacity="0.45">
          {/* Left Barb */}
          <path d={`M50 ${y} Q${50 - spread} ${y + 10} ${50 - spread - 10} ${y + 25}`} stroke="#00796B" strokeWidth="0.35" fill="none" />
          {/* Right Barb */}
          <path d={`M50 ${y} Q${50 + spread} ${y + 10} ${50 + spread + 10} ${y + 25}`} stroke="#00796B" strokeWidth="0.35" fill="none" />
        </g>
      );
    })}

    {/* Outer Feather Shield */}
    <path 
      d="M50 15 Q95 55 50 115 Q5 55 50 15" 
      fill="none" 
      stroke="#FFD700" 
      strokeWidth="0.75" 
      strokeDasharray="1 3"
      opacity="0.6"
    />
    <path 
      d="M50 20 Q88 55 50 110 Q12 55 50 20" 
      fill="#00796B" 
      fillOpacity="0.06" 
      stroke="#004D40" 
      strokeWidth="0.5" 
      strokeOpacity="0.3"
    />

    {/* Detailed Ornate Eye (Mayur Eye) */}
    <g transform="translate(50, 65)">
      {/* Golden Outer Ring */}
      <ellipse rx="22" ry="26" fill="#FFD700" filter="drop-shadow(0px 1px 2px rgba(0,0,0,0.1))" />
      <ellipse rx="20" ry="24" fill="#004D40" opacity="0.15" />
      
      {/* Breathing Inner Cores */}
      <motion.g
        animate={{ scale: [1, 1.05, 1], opacity: [0.9, 1, 0.9] }}
        transition={{
          duration: 3 + (index % 3),
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay
        }}
      >
        {/* Turquoise Ring */}
        <ellipse rx="15" ry="18" fill="#00E5FF" />
        
        {/* Deep Indigo Core */}
        <ellipse rx="9" ry="11" fill="#023E8A" />
        
        {/* White Highlight (Shimmer) */}
        <circle cx="2.5" cy="-2.5" r="2.5" fill="white" fillOpacity="0.6" />
        <circle cx="-1" cy="1" r="1" fill="white" fillOpacity="0.4" />
      </motion.g>
    </g>

    {/* Hanging Gold Bead at Bottom */}
    <circle cx="50" cy="122" r="2" fill="#FFD700" />
    <circle cx="50" cy="122" r="1" fill="#FFE082" />
  </svg>
);

const PeacockTailBorder = ({ side, position = "fixed", topOffset = "0" }: { side: 'left' | 'right'; position?: "fixed" | "absolute"; topOffset?: string }) => (
  <div 
    style={{ top: topOffset }}
    className={`${position} ${side === 'left' ? 'left-0' : 'right-0'} h-full w-20 pointer-events-none z-[60]`}
  >
    {/* The Ornate Peacock Head in Corner */}
    <div className={`relative ${side === 'right' ? 'scale-x-[-1]' : ''}`}>
       <PeacockIcon className="w-32 h-52 drop-shadow-2xl" />
    </div>
    
    {/* Flowing Tail Border - Eye Feathers */}
    <div className={`absolute top-40 ${side === 'left' ? 'left-6' : 'right-6'} h-[calc(100vh-14rem)] flex flex-col space-y-2 pb-10 overflow-hidden`}>
       {[...Array(12)].map((_, i) => (
         <motion.div 
           key={i}
           animate={{ 
             x: [0, i % 2 === 0 ? 3 : -3, 0],
             rotate: [0, i % 2 === 0 ? 1 : -1, 0]
           }}
           transition={{ 
             duration: 6 + (i % 4), 
             repeat: Infinity, 
             ease: "easeInOut",
             delay: i * 0.25
           }}
           className="relative"
         >
           <PeacockFeather delay={i * 0.25} index={i} />
         </motion.div>
       ))}
    </div>
  </div>
);

export const PeacockBorders = ({ position = "fixed", topOffset = "0" }: { position?: "fixed" | "absolute"; topOffset?: string }) => (
  <>
    <PeacockTailBorder side="left" position={position} topOffset={topOffset} />
    <PeacockTailBorder side="right" position={position} topOffset={topOffset} />
  </>
);
