"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// --- Icons ---
const CopyIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00FF00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

// --- Vector Components ---

export const OrganicRipple = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full p-4">
    <motion.path 
      animate={{ opacity: [0.3, 0.5, 0.3], scale: [0.98, 1.02, 0.98] }}
      transition={{ duration: 4, repeat: Infinity }}
      d="M50 5 Q70 10 85 30 Q95 50 85 70 Q70 90 50 95 Q30 90 15 70 Q5 50 15 30 Q30 10 50 5" 
      fill="#4B0082" 
    />
    <motion.path 
      animate={{ scale: [1, 1.03, 1] }}
      transition={{ duration: 3, repeat: Infinity }}
      d="M50 15 Q65 18 75 35 Q82 50 75 65 Q65 82 50 85 Q35 82 25 65 Q18 50 25 35 Q35 18 50 15" 
      fill="#0000FF" 
    />
    <path d="M50 25 Q60 28 68 40 Q72 50 68 60 Q60 72 50 75 Q40 72 32 60 Q28 50 32 40 Q40 28 50 25" fill="#483D8B" />
    <circle cx="50" cy="50" r="8" fill="#4B0082" />
  </svg>
);

export const BulbousClover = () => (
  <motion.svg 
    whileHover={{ rotate: 90 }}
    transition={{ type: "spring", stiffness: 100 }}
    viewBox="0 0 100 100" className="w-56 h-56 md:w-72 md:h-72"
  >
    <g fill="#FFAAFF">
      <circle cx="50" cy="22" r="22" />
      <circle cx="50" cy="78" r="22" />
      <circle cx="22" cy="50" r="22" />
      <circle cx="78" cy="50" r="22" />
      <rect x="35" y="35" width="30" height="30" rx="8" />
    </g>
  </motion.svg>
);

export const ComplexLotus = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <defs>
      <pattern id="denseLotusLib" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
        <g transform="translate(12.5, 12.5)">
          <motion.g animate={{ scale: [0.65, 0.75, 0.65] }} transition={{ duration: 3, repeat: Infinity }}>
            {[...Array(8)].map((_, i) => (
              <path key={i} d="M0 0 Q5 -15 0 -22 Q-5 -15 0 0" fill="#E040FB" transform={`rotate(${i * 45})`} />
            ))}
            <circle cx="0" cy="0" r="4" fill="#880E4F" opacity="0.4" />
            <circle cx="0" cy="0" r="2" fill="#E040FB" />
          </motion.g>
        </g>
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#denseLotusLib)" />
  </svg>
);

export const FatPropeller = () => (
  <motion.g animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="w-48 h-48 md:w-64 md:h-64 origin-center">
    <svg viewBox="0 0 100 100">
      <g fill="#E65100">
        <path d="M50 50 Q75 25 90 50 Q75 75 50 50 Z" /><path d="M50 50 Q25 75 10 50 Q25 25 50 50 Z" />
        <path d="M50 50 Q75 75 50 90 Q25 75 50 50 Z" /><path d="M50 50 Q25 25 50 10 Q75 25 50 50 Z" />
        <circle cx="50" cy="50" r="6" fill="#FFE0B2" />
      </g>
    </svg>
  </motion.g>
);

export const DenseScallop = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <defs>
      <pattern id="scallopLib" x="0" y="0" width="20" height="15" patternUnits="userSpaceOnUse">
        <motion.path animate={{ y: [0, -1, 0] }} transition={{ duration: 2, repeat: Infinity }} d="M0 15 Q10 -2 20 15" fill="#1B5E20" stroke="#FFEB3B" strokeWidth="1" />
        <path d="M2 15 Q10 2 18 15" fill="none" stroke="#FFEB3B" strokeWidth="1.5" opacity="0.8" />
        <circle cx="10" cy="13" r="2" fill="#FFEB3B" />
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#scallopLib)" />
  </svg>
);

export const SunburstMandala = () => (
  <motion.g animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} transform-origin="center">
    <svg viewBox="0 0 100 100" className="w-56 h-56 md:w-72 md:h-72">
      <g transform="translate(50, 50)" fill="#FF5722">
        {[...Array(24)].map((_, i) => (
          <path key={i} d="M0 -45 L5 -10 L-5 -10 Z" transform={`rotate(${i * 15})`} />
        ))}
        <circle r="12" fill="#E65100" />
        <circle r="6" fill="#FFC107" />
      </g>
    </svg>
  </motion.g>
);

export const DiamondLattice = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <defs>
      <pattern id="latticeLib" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M10 0 L20 10 L10 20 L0 10 Z" fill="none" stroke="#FFD700" strokeWidth="0.5" opacity="0.4" />
        <path d="M0 10 L20 10 M10 0 L10 20" stroke="#FFD700" strokeWidth="0.2" strokeDasharray="1 1" />
        <motion.circle animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }} cx="10" cy="10" r="1.5" fill="#FFD700" />
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#latticeLib)" />
  </svg>
);

export const DrishtiEye = () => (
  <svg viewBox="0 0 100 100" className="w-48 h-48 md:w-64 md:h-64">
    <path d="M10 50 Q50 10 90 50 Q50 90 10 50" fill="white" />
    <motion.g animate={{ x: [-2, 2, -2], y: [-1, 1, -1] }} transition={{ duration: 4, repeat: Infinity }}>
      <circle cx="50" cy="50" r="18" fill="#01579B" /><circle cx="50" cy="50" r="8" fill="#121212" />
      <circle cx="60" cy="40" r="2" fill="white" />
    </motion.g>
  </svg>
);

export const VasantBloom = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <defs>
      <pattern id="vasantLib" x="0" y="0" width="20" height="25" patternUnits="userSpaceOnUse">
        <motion.path animate={{ scaleY: [0.9, 1.1, 0.9] }} transition={{ duration: 3, repeat: Infinity }} d="M10 20 Q15 10 10 0 Q5 10 10 20" fill="#C6FF00" />
        <circle cx="10" cy="20" r="3" fill="#FFEE58" />
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#vasantLib)" />
  </svg>
);

export const PrismLotus = () => (
  <svg viewBox="0 0 100 100" className="w-56 h-56 md:w-72 md:h-72">
    <g transform="translate(50, 50)">
       {[...Array(6)].map((_, i) => (
         <g key={i} transform={`rotate(${i * 60})`}>
           <motion.path 
            animate={{ scaleY: [1, 1.1, 1], opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
            d="M0 0 L-15 -35 L15 -35 Z" 
            fill="#121212"
            opacity={0.8 - (i * 0.1)}
           />
         </g>
       ))}
       <path d="M-20 0 L0 -15 L20 0 L0 15 Z" fill="#FF1F00" />
    </g>
  </svg>
);

export const RadialSpin = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full relative">
    <motion.g
      animate={{ rotate: 360 }}
      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      style={{ originX: 0.5, originY: 0.5 }}
    >
      {[...Array(12)].map((_, j) => (
        <path key={j} d="M50 50 L35 -30 L65 -30 Z" fill="black" transform={`rotate(${j * 30}, 50, 50)`} />
      ))}
    </motion.g>
    <circle cx="50" cy="50" r="18" fill="#FF0066" />
  </svg>
);

export const CelestialEye = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full p-4">
    <path d="M5 50 Q50 10 95 50 Q50 90 5 50 Z" fill="white" />
    <circle cx="50" cy="50" r="18" fill="#E91E63" />
    <motion.path 
      animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 180, 270, 360] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      style={{ originX: 0.5, originY: 0.5 }}
      d="M50 35 L54 46 L65 50 L54 54 L50 65 L46 54 L35 50 L46 46 Z" 
      fill="#FFD700" 
    />
  </svg>
);

export const ChakraWheel = () => (
  <motion.g animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} style={{ originX: 0.5, originY: 0.5 }}>
    <svg viewBox="0 0 100 100" className="w-full h-full p-4">
      <circle cx="50" cy="50" r="45" fill="none" stroke="#000080" strokeWidth="2" opacity="0.4" />
      <circle cx="50" cy="50" r="40" fill="none" stroke="#00E5FF" strokeWidth="1" strokeDasharray="4 2" />
      <circle cx="50" cy="50" r="10" fill="#000080" />
      <circle cx="50" cy="50" r="4" fill="#00E5FF" />
      {[...Array(24)].map((_, i) => (
        <path key={i} d="M50 50 L50 10" stroke="#000080" strokeWidth="0.8" transform={`rotate(${i * 15}, 50, 50)`} />
      ))}
      {[...Array(24)].map((_, i) => (
        <circle key={i} cx="50" cy="10" r="1.5" fill="#00E5FF" transform={`rotate(${i * 15}, 50, 50)`} />
      ))}
    </svg>
  </motion.g>
);

export const FloralMesh = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <defs>
      <pattern id="floralMeshLib" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <motion.circle animate={{ fill: ["#D32F2F", "#C6FF00", "#D32F2F"] }} transition={{ duration: 3, repeat: Infinity }} cx="10" cy="10" r="3" fill="#D32F2F" />
        <path d="M10 0 L20 10 L10 20 L0 10 Z" fill="none" stroke="#2E7D32" strokeWidth="0.8" />
        <circle cx="10" cy="10" r="6" fill="none" stroke="#FFD700" strokeWidth="0.2" opacity="0.5" />
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#floralMeshLib)" />
  </svg>
);

export const BindiGrid = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <defs>
      <pattern id="bindiGridLib" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
        <circle cx="12.5" cy="12.5" r="5" fill="#E91E63" />
        <motion.circle animate={{ r: [5, 12, 5], opacity: [0.8, 0, 0.8] }} transition={{ duration: 2.5, repeat: Infinity }} cx="12.5" cy="12.5" fill="none" stroke="#00B0FF" strokeWidth="1" />
        <circle cx="12.5" cy="12.5" r="1.5" fill="white" />
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#bindiGridLib)" />
  </svg>
);

export const GeometricDiya = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full p-6">
    <defs>
      <radialGradient id="flameGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFD600" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#FFD600" stopOpacity="0" />
      </radialGradient>
    </defs>
    
    {/* Atmospheric Glow */}
    <motion.circle 
      animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
      transition={{ duration: 2, repeat: Infinity }}
      cx="50" cy="40" r="25" fill="url(#flameGlow)" 
    />

    {/* Ornate Base */}
    <path d="M15 70 Q50 95 85 70 L85 60 Q50 55 15 60 Z" fill="#8D6E63" />
    <path d="M15 60 Q50 55 85 60" fill="none" stroke="#FFD700" strokeWidth="1" strokeDasharray="2 2" />
    <circle cx="50" cy="78" r="2" fill="#FFD700" />
    <circle cx="35" cy="74" r="1.5" fill="#FFD700" opacity="0.6" />
    <circle cx="65" cy="74" r="1.5" fill="#FFD700" opacity="0.6" />

    {/* Multi-layered Flame */}
    <g transform="translate(50, 60)">
      {/* Outer Flame */}
      <motion.path 
        animate={{ scaleY: [1, 1.2, 1], skewX: [-1, 1, -1] }}
        transition={{ duration: 1.2, repeat: Infinity }}
        d="M0 0 Q18 -20 0 -50 Q-18 -20 0 0" fill="#FF3D00" 
        style={{ originY: "bottom" }}
      />
      {/* Inner Flame */}
      <motion.path 
        animate={{ scaleY: [1, 1.1, 1], skewX: [1, -1, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        d="M0 0 Q10 -15 0 -35 Q-10 -15 0 0" fill="#FFD600" 
        style={{ originY: "bottom" }}
      />
      {/* Core */}
      <motion.circle 
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        cx="0" cy="-10" r="4" fill="white" 
      />
    </g>
  </svg>
);

export const HexagonalJaali = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <defs>
      <pattern id="hexJaaliLib" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
        <path d="M15 0 L30 7.5 L30 22.5 L15 30 L0 22.5 L0 7.5 Z" fill="none" stroke="#00838F" strokeWidth="1.5" />
        <motion.path 
          animate={{ fill: ["#00838F", "#FBC02D", "#00838F"] }} 
          transition={{ duration: 5, repeat: Infinity }} 
          d="M15 10 L20 12.5 L20 17.5 L15 20 L10 17.5 L10 12.5 Z" 
          fill="#00838F" 
        />
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#hexJaaliLib)" />
  </svg>
);

export const PeacockPlumage = () => (
  <svg viewBox="0 0 100 100" className="w-56 h-56 md:w-72 md:h-72">
    <g transform="translate(50, 50)">
      {[...Array(12)].map((_, i) => (
        <motion.g key={i} animate={{ rotate: [0, 5, 0] }} transition={{ duration: 3, delay: i * 0.1, repeat: Infinity }} transform={`rotate(${i * 30})`}>
          <path d="M0 0 Q10 -30 0 -45 Q-10 -30 0 0" fill="#00ACC1" />
          <circle cx="0" cy="-35" r="5" fill="#1A237E" />
          <circle cx="0" cy="-35" r="2" fill="#00E676" />
        </motion.g>
      ))}
    </g>
  </svg>
);

export const MarigoldMandala = () => (
  <motion.g animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} style={{ originX: 0.5, originY: 0.5 }}>
    <svg viewBox="0 0 100 100" className="w-56 h-56 md:w-72 md:h-72">
      <g transform="translate(50, 50)">
        {[...Array(16)].map((_, i) => (
          <path key={i} d="M0 0 Q15 -15 0 -35 Q-15 -15 0 0" fill="#FFB300" transform={`rotate(${i * 22.5})`} />
        ))}
        {[...Array(8)].map((_, i) => (
          <path key={i} d="M0 0 Q10 -10 0 -20 Q-10 -10 0 0" fill="#FF6F00" transform={`rotate(${i * 45 + 11.25})`} />
        ))}
        <circle r="6" fill="#BF360C" />
      </g>
    </svg>
  </motion.g>
);

export const LotusPond = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <defs>
      <pattern id="lotusPondLib" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
        <motion.g animate={{ x: [0, 5, 0], y: [0, 3, 0] }} transition={{ duration: 6, repeat: Infinity }}>
          <circle cx="25" cy="25" r="15" fill="#00695C" />
          <path d="M25 25 L40 25 A15 15 0 0 0 35 15 Z" fill="#FDFBF7" />
          <motion.path animate={{ scale: [0.8, 1, 0.8] }} transition={{ duration: 4, repeat: Infinity }} d="M25 25 Q30 15 25 5 Q20 15 25 25" fill="#F06292" />
        </motion.g>
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#lotusPondLib)" />
  </svg>
);

export const GeometricRangoli = () => (
  <svg viewBox="0 0 100 100" className="w-56 h-56 md:w-72 md:h-72">
    <g transform="translate(50, 50)">
      {[...Array(8)].map((_, i) => (
        <path key={i} d="M0 0 L15 -15 L30 0 L15 15 Z" fill="none" stroke="#D32F2F" strokeWidth="2" transform={`rotate(${i * 45})`} />
      ))}
      {[...Array(8)].map((_, i) => (
        <path key={i} d="M0 0 L10 -10 L20 0 L10 10 Z" fill="#FFD700" transform={`rotate(${i * 45 + 22.5})`} />
      ))}
      <motion.circle animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity }} r="5" fill="#D32F2F" />
    </g>
  </svg>
);

export const IndigoGalaxy = () => (
  <motion.g animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} style={{ originX: 0.5, originY: 0.5 }}>
    <svg viewBox="0 0 100 100" className="w-full h-full p-4">
      <defs>
        <radialGradient id="indigoGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#311B92" />
          <stop offset="100%" stopColor="#1A237E" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="45" fill="url(#indigoGrad)" />
      {[...Array(40)].map((_, i) => (
        <motion.circle 
          key={i} 
          animate={{ opacity: [0.2, 1, 0.2] }} 
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.05 }}
          cx={20 + (i % 10) * 6} 
          cy={20 + Math.floor(i / 10) * 15} 
          r="1" 
          fill="white" 
        />
      ))}
      <motion.path 
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }} 
        transition={{ duration: 5, repeat: Infinity }}
        d="M50 20 Q80 50 50 80 Q20 50 50 20" fill="none" stroke="#7E57C2" strokeWidth="0.5" 
      />
    </svg>
  </motion.g>
);

export const SacredLotus = () => (
  <svg viewBox="0 0 100 100" className="w-56 h-56 md:w-72 md:h-72">
    <g transform="translate(50, 50)">
      {[...Array(8)].map((_, i) => (
        <motion.path 
          key={i} 
          animate={{ rotate: [i * 45, i * 45 + 5, i * 45] }} 
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          d="M0 0 Q15 -25 0 -45 Q-15 -25 0 0" 
          fill="#F06292" 
          transform={`rotate(${i * 45})`}
          style={{ originY: "bottom" }}
        />
      ))}
      {[...Array(8)].map((_, i) => (
        <motion.path 
          key={i} 
          animate={{ rotate: [i * 45 + 22.5, i * 45 + 17.5, i * 45 + 22.5] }} 
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          d="M0 0 Q10 -15 0 -30 Q-10 -15 0 0" 
          fill="#F8BBD0" 
          transform={`rotate(${i * 45 + 22.5})`}
          style={{ originY: "bottom" }}
        />
      ))}
      <circle cx="0" cy="0" r="6" fill="#FBC02D" />
    </g>
  </svg>
);

export const GoldenSunflower = () => (
  <svg viewBox="0 0 100 100" className="w-56 h-56 md:w-72 md:h-72">
    <g transform="translate(50, 50)">
      <motion.g animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
        {[...Array(12)].map((_, i) => (
          <path key={i} d="M0 0 Q12 -20 0 -40 Q-12 -20 0 0" fill="#FFD600" transform={`rotate(${i * 30})`} />
        ))}
      </motion.g>
      <motion.g animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}>
        {[...Array(12)].map((_, i) => (
          <path key={i} d="M0 0 Q8 -15 0 -30 Q-8 -15 0 0" fill="#FFAB00" transform={`rotate(${i * 30 + 15})`} />
        ))}
      </motion.g>
      <circle r="12" fill="#3E2723" />
      {[...Array(20)].map((_, i) => (
        <circle key={i} cx={Math.cos(i) * 6} cy={Math.sin(i) * 6} r="1" fill="#FFD600" opacity="0.3" />
      ))}
    </g>
  </svg>
);

export const PeacockDance = () => (
  <svg viewBox="0 0 100 100" className="w-56 h-56 md:w-72 md:h-72">
    <g transform="translate(50, 50)">
      <motion.g animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}>
        {[...Array(12)].map((_, i) => (
          <motion.g key={i} animate={{ rotate: [0, 5, 0] }} transition={{ duration: 4, delay: i * 0.2, repeat: Infinity }} transform={`rotate(${i * 30})`}>
            <path d="M0 0 Q15 -25 0 -45 Q-15 -25 0 0" fill="#00838F" opacity="0.8" />
            <circle cx="0" cy="-35" r="6" fill="#1A237E" />
            <circle cx="0" cy="-35" r="2.5" fill="#00E676" />
          </motion.g>
        ))}
      </motion.g>
      <circle r="8" fill="#1A237E" />
    </g>
  </svg>
);

export const MandalaAura = () => (
  <svg viewBox="0 0 100 100" className="w-56 h-56 md:w-72 md:h-72">
    <defs>
      <radialGradient id="auraGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFD600" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#FFD600" stopOpacity="0" />
      </radialGradient>
    </defs>
    <motion.circle animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 4, repeat: Infinity }} cx="50" cy="50" r="35" fill="url(#auraGrad)" />
    <g transform="translate(50, 50)">
      <motion.g animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}>
        {[...Array(8)].map((_, i) => (
          <path key={i} d="M0 0 Q10 -15 20 0 Q10 15 0 0" fill="#E91E63" transform={`rotate(${i * 45})`} />
        ))}
      </motion.g>
      <motion.g animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
        {[...Array(8)].map((_, i) => (
          <path key={i} d="M0 0 Q8 -10 16 0 Q8 10 0 0" fill="#FF9800" transform={`rotate(${i * 45 + 22.5})`} />
        ))}
      </motion.g>
      <circle r="5" fill="#FFD600" />
    </g>
  </svg>
);

export const TempleJaali = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full p-4">
    <defs>
      <pattern id="templeJaaliLib" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
        <path d="M12.5 0 L25 12.5 L12.5 25 L0 12.5 Z" fill="none" stroke="#2E7D32" strokeWidth="1" />
        <circle cx="12.5" cy="12.5" r="4" fill="none" stroke="#FFD700" strokeWidth="0.5" />
        <motion.circle animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.2, 0.8] }} transition={{ duration: 3, repeat: Infinity }} cx="12.5" cy="12.5" r="1.5" fill="#FFD700" />
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#templeJaaliLib)" />
  </svg>
);

export const VibrantPinwheel = () => (
  <svg viewBox="0 0 100 100" className="w-56 h-56 md:w-72 md:h-72">
    <g transform="translate(50, 50)">
      <motion.g animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
        {[...Array(8)].map((_, i) => (
          <path 
            key={i} 
            d="M0 0 Q20 -20 40 0 Q20 20 0 0" 
            fill={[
              "#FF9800", "#FFB74D", // Saffron
              "#00838F", "#4DD0E1", // Teal
              "#1A237E", "#5C6BC0", // Indigo
              "#E91E63", "#F06292"  // Rose
            ][i]} 
            transform={`rotate(${i * 45})`} 
          />
        ))}
      </motion.g>
      <circle r="4" fill="#121212" />
      <circle r="1.5" fill="white" />
    </g>
  </svg>
);

export const InfiniteKnot = () => (
  <svg viewBox="0 0 100 100" className="w-56 h-56 md:w-72 md:h-72">
    <motion.g 
      animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }} 
      transition={{ duration: 3, repeat: Infinity }}
    >
      <path 
        d="M30 30 L70 70 M30 70 L70 30 M30 50 L70 50 M50 30 L50 70" 
        stroke="#FFD700" 
        strokeWidth="6" 
        strokeLinecap="round" 
        fill="none" 
      />
      <path 
        d="M20 20 H80 V80 H20 Z" 
        stroke="#D32F2F" 
        strokeWidth="4" 
        fill="none" 
        strokeDasharray="10 5"
      />
    </motion.g>
  </svg>
);

export const VibrantFloralCross = () => {
  const containerRef = useRef<SVGGElement>(null);

  useGSAP(() => {
    // Staggered Petal Pulse
    gsap.to(".floral-petal", {
      scale: 1.05,
      duration: 2,
      repeat: -1,
      yoyo: true,
      stagger: {
        each: 0.3,
        from: "center"
      },
      ease: "power1.inOut"
    });
  }, { scope: containerRef });

  const paths = [
    "M49.938 50.062C49.938 50.062 51.589 74.042 37.815 87.815C24.041 101.588 0.0619788 99.938 0.0619788 99.938C0.0619788 99.938 -1.58902 75.958 12.185 62.185C25.959 48.412 49.938 50.062 49.938 50.062Z",
    "M99.938 0.0620103C99.938 0.0620103 101.589 24.042 87.815 37.815C74.041 51.588 50.062 49.938 50.062 49.938C50.062 49.938 48.411 25.958 62.185 12.185C75.959 -1.58799 99.938 0.0620103 99.938 0.0620103Z",
    "M49.938 49.938C49.938 49.938 25.958 51.589 12.185 37.815C-1.58799 24.041 0.0620103 0.0619788 0.0620103 0.0619788C0.0620103 0.0619788 24.042 -1.58902 37.815 12.185C51.588 25.959 49.938 49.938 49.938 49.938Z",
    "M99.938 99.938C99.938 99.938 75.958 101.589 62.185 87.815C48.412 74.041 50.062 50.062 50.062 50.062C50.062 50.062 74.042 48.411 87.815 62.185C101.588 75.959 99.938 99.938 99.938 99.938Z"
  ];

  return (
    <svg viewBox="0 0 100 100" className="w-56 h-56 md:w-72 md:h-72">
      <g ref={containerRef} style={{ transformOrigin: "50px 50px" }}>
        {paths.map((d, i) => (
          <path 
            key={i} 
            className="floral-petal"
            d={d} 
            fill={["#7C4DFF", "#2196F3", "#F44336", "#FFD600"][i]} 
            style={{ transformOrigin: "50px 50px" }}
          />
        ))}
      </g>
    </svg>
  );
};

// --- Wrapper Component ---

export const VectorBlock = ({ children, className, delay = 0, code }: { children: React.ReactNode; className?: string; delay?: number; code: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      className={`relative group w-[180px] h-[180px] md:w-[240px] md:h-[240px] flex items-center justify-center overflow-hidden shadow-inner flex-shrink-0 cursor-pointer ${className}`}
    >
      {children}
      
      {/* Copy Button */}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button 
          onClick={handleCopy}
          className="bg-black/80 hover:bg-black text-white/70 hover:text-white p-2 rounded-md backdrop-blur-sm border border-white/10 flex items-center gap-2 text-[10px] font-mono"
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </motion.div>
  );
};
