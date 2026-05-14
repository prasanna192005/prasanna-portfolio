"use client";

import { motion } from "framer-motion";

const PeacockIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 120 180" className={className}>
    <defs>
      <linearGradient id="peacockBody" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00509D" />
        <stop offset="100%" stopColor="#002855" />
      </linearGradient>
    </defs>
    
    {/* Detailed Crest */}
    <g transform="translate(60, 20)">
      {[...Array(3)].map((_, i) => (
        <g key={i} transform={`rotate(${(i - 1) * 20})`}>
          <line x1="0" y1="0" x2="0" y2="-15" stroke="#00509D" strokeWidth="0.5" />
          <circle cx="0" cy="-15" r="2" fill="#FFD700" />
          <circle cx="0" cy="-15" r="1" fill="#00509D" />
        </g>
      ))}
    </g>

    {/* Body / Neck - Ornate S-Curve */}
    <path 
      d="M60 20 Q75 40 60 70 Q45 100 70 130" 
      fill="none" 
      stroke="url(#peacockBody)" 
      strokeWidth="12" 
      strokeLinecap="round" 
    />
    <path 
      d="M60 20 Q75 40 60 70 Q45 100 70 130" 
      fill="none" 
      stroke="#FFD700" 
      strokeWidth="0.5" 
      opacity="0.3"
      transform="translate(2, 0)"
    />
    
    {/* Head Detail */}
    <circle cx="62" cy="22" r="6" fill="url(#peacockBody)" />
    <circle cx="64" cy="20" r="1.5" fill="white" />
    <path d="M68 22 L75 25 L68 28 Z" fill="#FFB300" /> {/* Beak */}

    {/* Decorative Wing Feathers on Body */}
    {[...Array(5)].map((_, i) => (
      <path 
        key={i} 
        d={`M${55 + i * 2} ${50 + i * 8} Q${40 - i * 5} ${60 + i * 5} ${50 + i * 3} ${80 + i * 10}`} 
        stroke="#FFD700" 
        strokeWidth="0.3" 
        fill="none" 
        opacity="0.5" 
      />
    ))}
  </svg>
);

const PeacockTailBorder = ({ side, position = "fixed", topOffset = "0" }: { side: 'left' | 'right', position?: "fixed" | "absolute", topOffset?: string }) => (
  <div 
    style={{ top: topOffset }}
    className={`${position} ${side === 'left' ? 'left-0' : 'right-0'} h-full w-20 pointer-events-none z-[60]`}
  >
    {/* The Perfect Peacock Head in Corner */}
    <div className={`relative ${side === 'right' ? 'scale-x-[-1]' : ''}`}>
       <PeacockIcon className="w-32 h-48 drop-shadow-2xl" />
    </div>
    
    {/* Flowing Tail Border - Eye Feathers */}
    <div className={`absolute top-40 ${side === 'left' ? 'left-6' : 'right-6'} h-full flex flex-col space-y-2 pb-40`}>
       {[...Array(15)].map((_, i) => (
         <motion.div 
           key={i}
           animate={{ 
             x: [0, i % 2 === 0 ? 3 : -3, 0],
             rotate: [0, i % 2 === 0 ? 1 : -1, 0]
           }}
           transition={{ 
             duration: 5 + i % 4, 
             repeat: Infinity, 
             ease: "easeInOut",
             delay: i * 0.2
           }}
           className="relative"
         >
           <svg width="32" height="50" viewBox="0 0 100 150">
              <path d="M50 0 L50 150" stroke="#2D6A4F" strokeWidth="0.5" strokeDasharray="2 1" opacity="0.3" />
              <path 
                d="M50 20 Q90 60 50 110 Q10 60 50 20" 
                fill="#2D6A4F" 
                fillOpacity="0.1" 
                stroke="#2D6A4F" 
                strokeWidth="0.5" 
                strokeOpacity="0.2"
              />
              <g transform="translate(50, 65)">
                 <ellipse rx="22" ry="28" fill="#FFD700" />
                 <ellipse rx="16" ry="20" fill="#00A896" />
                 <ellipse rx="10" ry="12" fill="#023E8A" />
                 <circle cx="3" cy="-3" r="2" fill="white" fillOpacity="0.3" />
              </g>
              <circle cx="50" cy="120" r="1.5" fill="#FFD700" opacity="0.4" />
           </svg>
         </motion.div>
       ))}
    </div>
  </div>
);

export const PeacockBorders = ({ position = "fixed", topOffset = "0" }: { position?: "fixed" | "absolute", topOffset?: string }) => (
  <>
    <PeacockTailBorder side="left" position={position} topOffset={topOffset} />
    <PeacockTailBorder side="right" position={position} topOffset={topOffset} />
  </>
);
