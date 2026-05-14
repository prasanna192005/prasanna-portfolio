"use client";

import Navbar from "@/components/Navbar";
import { 
  VectorBlock, 
  OrganicRipple, 
  BulbousClover, 
  ComplexLotus, 
  FatPropeller, 
  DenseScallop, 
  SunburstMandala, 
  DiamondLattice, 
  DrishtiEye, 
  VasantBloom, 
  PrismLotus, 
  RadialSpin, 
  CelestialEye,
  ChakraWheel,
  FloralMesh,
  BindiGrid,
  GeometricDiya,
  HexagonalJaali,
  PeacockPlumage,
  MarigoldMandala,
  LotusPond,
  GeometricRangoli,
  IndigoGalaxy
} from "@/components/VectorLibrary";

const VectorRow = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-row items-center gap-4 md:gap-6 px-4 py-4 overflow-x-auto no-scrollbar w-full justify-start md:justify-center">
    {children}
  </div>
);

export default function VectorsPage() {
  return (
    <div className="min-h-screen w-full bg-[#FDFBF7] text-[#121212] font-sans selection:bg-[#FF1F00] selection:text-white overflow-x-hidden">
      <Navbar />
      
      <main className="pt-32 pb-32 flex flex-col items-center">
        {/* Professional Header Section */}
        <section className="max-w-4xl w-full px-6 mb-24 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#121212]/10 pb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-[#FF1F00] text-white text-[8px] font-mono px-2 py-0.5 rounded-full uppercase tracking-widest">System Archive</span>
                <span className="text-[#121212]/40 font-mono text-[8px] uppercase tracking-widest">Ref: IND-GEO-26</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-sans font-medium tracking-tighter uppercase leading-none">
                Vector Laboratory
              </h1>
            </div>
            <div className="text-right">
              <span className="text-[#121212]/40 font-mono text-[10px] uppercase block">Total Motifs</span>
              <span className="text-2xl font-mono leading-none">022</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
            <p className="text-sm md:text-base text-[#121212]/80 leading-relaxed font-sans max-w-sm">
              A technical study of traditional Indian geometric motifs, reconstructed for modern digital systems. Each asset is engineered with pixel-perfect precision and balanced behavioral micro-animations.
            </p>
            <div className="flex flex-col justify-end items-start md:items-end space-y-2">
              <div className="flex items-center gap-2 text-[10px] font-mono text-[#121212]/60 uppercase tracking-tight">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00FF00] animate-pulse"></span>
                SANSKRITI // VIGYANAM // TANTRA
              </div>
              <p className="text-[10px] font-mono text-[#121212]/40 text-left md:text-right max-w-[200px]">
                HOVER TO INSPECT BEHAVIOR. CLICK BLOCKS TO EXPORT ANIMATED JSX SOURCE.
              </p>
            </div>
          </div>
        </section>

        {/* Row 1 Section Label */}
        <div className="w-full px-6 max-w-7xl mb-4">
           <span className="font-mono text-[9px] text-[#121212]/40 uppercase tracking-widest">Phase 01 / Primary Geometry</span>
        </div>
        <VectorRow>
          <VectorBlock className="bg-[#0000CD] shadow-sm" delay={0.1} code={`<motion.svg viewBox="0 0 100 100">
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
  <circle cx="50" cy="50" r="8" fill="#4B0082" />
</motion.svg>`}>
            <OrganicRipple />
          </VectorBlock>

          <VectorBlock className="bg-[#FF0055] shadow-sm" delay={0.2} code={`<motion.svg 
  whileHover={{ rotate: 90 }}
  transition={{ type: "spring", stiffness: 100 }}
  viewBox="0 0 100 100"
>
  <g fill="#FFAAFF">
    <circle cx="50" cy="22" r="22" /><circle cx="50" cy="78" r="22" />
    <circle cx="22" cy="50" r="22" /><circle cx="78" cy="50" r="22" />
    <rect x="35" y="35" width="30" height="30" rx="8" />
  </g>
</motion.svg>`}>
            <BulbousClover />
          </VectorBlock>

          <VectorBlock className="bg-[#004D40] shadow-sm" delay={0.3} code={`<svg viewBox="0 0 100 100">
  <pattern id="lotus" width="25" height="25" patternUnits="userSpaceOnUse">
    <g transform="translate(12.5, 12.5)">
      <motion.g animate={{ scale: [0.65, 0.75, 0.65] }} transition={{ duration: 3, repeat: Infinity }}>
        {[...Array(8)].map((_, i) => (
          <path key={i} d="M0 0 Q5 -15 0 -22 Q-5 -15 0 0" fill="#E040FB" transform="rotate(\${i * 45})" />
        ))}
        <circle r="4" fill="#880E4F" opacity="0.4" />
        <circle r="2" fill="#E040FB" />
      </motion.g>
    </g>
  </pattern>
  <rect width="100" height="100" fill="url(#lotus)" />
</svg>`}>
            <ComplexLotus />
          </VectorBlock>

          <VectorBlock className="bg-[#FFE0B2] shadow-sm" delay={0.4} code={`<motion.g animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
  <svg viewBox="0 0 100 100">
    <g fill="#E65100">
      <path d="M50 50 Q75 25 90 50 Q75 75 50 50 Z" /><path d="M50 50 Q25 75 10 50 Q25 25 50 50 Z" />
      <circle cx="50" cy="50" r="6" fill="#FFE0B2" />
    </g>
  </svg>
</motion.g>`}>
            <FatPropeller />
          </VectorBlock>

          <VectorBlock className="bg-[#0D47A1] shadow-sm" delay={0.5} code={`<svg viewBox="0 0 100 100">
  <pattern id="scallop" width="20" height="15" patternUnits="userSpaceOnUse">
    <motion.path animate={{ y: [0, -1, 0] }} transition={{ duration: 2, repeat: Infinity }} d="M0 15 Q10 -2 20 15" fill="#1B5E20" stroke="#FFEB3B" />
    <circle cx="10" cy="13" r="2" fill="#FFEB3B" />
  </pattern>
  <rect width="100" height="100" fill="url(#scallop)" />
</svg>`}>
            <DenseScallop />
          </VectorBlock>
        </VectorRow>

        {/* Row 2 Section Label */}
        <div className="w-full px-6 max-w-7xl mt-12 mb-4">
           <span className="font-mono text-[9px] text-[#121212]/40 uppercase tracking-widest">Phase 02 / Secondary Patterns</span>
        </div>
        <VectorRow>
          <VectorBlock className="bg-[#FFC107] shadow-sm" delay={0.6} code={`<motion.g animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}>
  <svg viewBox="0 0 100 100">
    <g transform="translate(50, 50)" fill="#FF5722">
      {[...Array(24)].map((_, i) => (
        <path key={i} d="M0 -45 L5 -10 L-5 -10 Z" transform="rotate(\${i * 15})" />
      ))}
      <circle r="12" fill="#E65100" /><circle r="6" fill="#FFC107" />
    </g>
  </svg>
</motion.g>`}>
            <SunburstMandala />
          </VectorBlock>

          <VectorBlock className="bg-[#4A148C] shadow-sm" delay={0.7} code={`<svg viewBox="0 0 100 100">
  <pattern id="lattice" width="20" height="20" patternUnits="userSpaceOnUse">
    <path d="M10 0 L20 10 L10 20 L0 10 Z" fill="none" stroke="#FFD700" strokeWidth="0.5" />
    <motion.circle animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }} cx="10" cy="10" r="1.5" fill="#FFD700" />
  </pattern>
  <rect width="100" height="100" fill="url(#lattice)" />
</svg>`}>
            <DiamondLattice />
          </VectorBlock>

          <VectorBlock className="bg-[#01579B] shadow-sm" delay={0.8} code={`<svg viewBox="0 0 100 100">
  <path d="M10 50 Q50 10 90 50 Q50 90 10 50" fill="white" />
  <motion.g animate={{ x: [-2, 2, -2], y: [-1, 1, -1] }} transition={{ duration: 4, repeat: Infinity }}>
    <circle cx="50" cy="50" r="18" fill="#01579B" /><circle cx="50" cy="50" r="8" fill="#121212" />
  </motion.g>
</svg>`}>
            <DrishtiEye />
          </VectorBlock>

          <VectorBlock className="bg-[#2E7D32] shadow-sm" delay={0.9} code={`<svg viewBox="0 0 100 100">
  <pattern id="vasant" width="20" height="25" patternUnits="userSpaceOnUse">
    <motion.path animate={{ scaleY: [0.9, 1.1, 0.9] }} transition={{ duration: 3, repeat: Infinity }} d="M10 20 Q15 10 10 0 Q5 10 10 20" fill="#C6FF00" />
  </pattern>
  <rect width="100" height="100" fill="url(#vasant)" />
</svg>`}>
            <VasantBloom />
          </VectorBlock>

          <VectorBlock className="bg-[#B71C1C] shadow-sm" delay={1.0} code={`<svg viewBox="0 0 100 100">
  <g transform="translate(50, 50)">
    {[...Array(6)].map((_, i) => (
      <g key={i} transform="rotate(\${i * 60})">
        <motion.path 
          animate={{ scaleY: [1, 1.1, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
          d="M0 0 L-15 -35 L15 -35 Z" fill="#121212" 
        />
      </g>
    ))}
    <path d="M-20 0 L0 -15 L20 0 L0 15 Z" fill="#FF1F00" />
  </g>
</svg>`}>
            <PrismLotus />
          </VectorBlock>
        </VectorRow>

        {/* Row 3 Section Label */}
        <div className="w-full px-6 max-w-7xl mt-12 mb-4">
           <span className="font-mono text-[9px] text-[#121212]/40 uppercase tracking-widest">Phase 03 / Signature Studies</span>
        </div>
        <VectorRow>
          <VectorBlock className="bg-[#1EAB80] shadow-sm" delay={1.1} code={`<motion.g animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} style={{ originX: 0.5, originY: 0.5 }}>
  <svg viewBox="0 0 100 100">
    {[...Array(12)].map((_, j) => (
      <path key={j} d="M50 50 L35 -30 L65 -30 Z" fill="black" transform="rotate(\${j * 30}, 50, 50)" />
    ))}
  </svg>
</motion.g>`}>
            <RadialSpin />
          </VectorBlock>

          <VectorBlock className="bg-[#E91E63] shadow-sm" delay={1.2} code={`<svg viewBox="0 0 100 100">
  <path d="M5 50 Q50 10 95 50 Q50 90 5 50 Z" fill="white" />
  <motion.path 
    animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 180, 270, 360] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    style={{ originX: 0.5, originY: 0.5 }}
    d="M50 35 L54 46 L65 50 L54 54 L50 65 L46 54 L35 50 L46 46 Z" fill="#FFD700" 
  />
</svg>`}>
            <CelestialEye />
          </VectorBlock>
        </VectorRow>

        {/* Row 4 Section Label */}
        <div className="w-full px-6 max-w-7xl mt-12 mb-4">
           <span className="font-mono text-[9px] text-[#121212]/40 uppercase tracking-widest">Phase 04 / Technical Traditions</span>
        </div>
        <VectorRow>
          <VectorBlock className="bg-[#E3F2FD] shadow-sm" delay={1.3} code={`<motion.g animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} style={{ originX: 0.5, originY: 0.5 }}>
  <svg viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="45" fill="none" stroke="#000080" strokeWidth="2" opacity="0.4" />
    <circle cx="50" cy="50" r="40" fill="none" stroke="#00E5FF" strokeWidth="1" strokeDasharray="4 2" />
    <circle cx="50" cy="50" r="10" fill="#000080" />
    <circle cx="50" cy="50" r="4" fill="#00E5FF" />
    {[...Array(24)].map((_, i) => (
      <path key={i} d="M50 50 L50 10" stroke="#000080" strokeWidth="0.8" transform="rotate(\${i * 15}, 50, 50)" />
    ))}
  </svg>
</motion.g>`}>
            <ChakraWheel />
          </VectorBlock>

          <VectorBlock className="bg-[#FFF3E0] shadow-sm" delay={1.4} code={`<svg viewBox="0 0 100 100">
  <pattern id="floralMesh" width="20" height="20" patternUnits="userSpaceOnUse">
    <motion.circle animate={{ fill: ["#D32F2F", "#C6FF00", "#D32F2F"] }} transition={{ duration: 3, repeat: Infinity }} cx="10" cy="10" r="3" />
    <path d="M10 0 L20 10 L10 20 L0 10 Z" fill="none" stroke="#2E7D32" strokeWidth="0.8" />
  </pattern>
  <rect width="100" height="100" fill="url(#floralMesh)" />
</svg>`}>
            <FloralMesh />
          </VectorBlock>

          <VectorBlock className="bg-[#FFEBEE] shadow-sm" delay={1.5} code={`<svg viewBox="0 0 100 100">
  <pattern id="bindiGrid" width="25" height="25" patternUnits="userSpaceOnUse">
    <circle cx="12.5" cy="12.5" r="5" fill="#E91E63" />
    <motion.circle animate={{ r: [5, 12, 5], opacity: [0.8, 0, 0.8] }} transition={{ duration: 2.5, repeat: Infinity }} cx="12.5" cy="12.5" fill="none" stroke="#00B0FF" strokeWidth="1" />
  </pattern>
  <rect width="100" height="100" fill="url(#bindiGrid)" />
</svg>`}>
            <BindiGrid />
          </VectorBlock>

          <VectorBlock className="bg-[#FBE9E7] shadow-sm" delay={1.6} code={`<svg viewBox="0 0 100 100">
  <defs>
    <radialGradient id="flameGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#FFD600" stopOpacity="0.4" />
      <stop offset="100%" stopColor="#FFD600" stopOpacity="0" />
    </radialGradient>
  </defs>
  <motion.circle animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 2, repeat: Infinity }} cx="50" cy="40" r="25" fill="url(#flameGlow)" />
  <path d="M15 70 Q50 95 85 70 L85 60 Q50 55 15 60 Z" fill="#8D6E63" />
  <path d="M15 60 Q50 55 85 60" fill="none" stroke="#FFD700" strokeWidth="1" strokeDasharray="2 2" />
  <g transform="translate(50, 60)">
    <motion.path animate={{ scaleY: [1, 1.2, 1], skewX: [-1, 1, -1] }} transition={{ duration: 1.2, repeat: Infinity }} d="M0 0 Q18 -20 0 -50 Q-18 -20 0 0" fill="#FF3D00" style={{ originY: "bottom" }} />
    <motion.path animate={{ scaleY: [1, 1.1, 1], skewX: [1, -1, 1] }} transition={{ duration: 0.8, repeat: Infinity }} d="M0 0 Q10 -15 0 -35 Q-10 -15 0 0" fill="#FFD600" style={{ originY: "bottom" }} />
    <circle cx="0" cy="-10" r="4" fill="white" />
  </g>
</svg>`}>
            <GeometricDiya />
          </VectorBlock>

          <VectorBlock className="bg-[#E0F2F1] shadow-sm" delay={1.7} code={`<svg viewBox="0 0 100 100">
  <pattern id="hexJaali" width="30" height="30" patternUnits="userSpaceOnUse">
    <path d="M15 0 L30 7.5 L30 22.5 L15 30 L0 22.5 L0 7.5 Z" fill="none" stroke="#00838F" strokeWidth="1.5" />
    <motion.path animate={{ fill: ["#00838F", "#FBC02D", "#00838F"] }} transition={{ duration: 5, repeat: Infinity }} d="M15 10 L20 12.5 L20 17.5 L15 20 L10 17.5 L10 12.5 Z" />
  </pattern>
  <rect width="100" height="100" fill="url(#hexJaali)" />
</svg>`}>
            <HexagonalJaali />
          </VectorBlock>
        </VectorRow>

        {/* Row 5 Section Label */}
        <div className="w-full px-6 max-w-7xl mt-12 mb-4">
           <span className="font-mono text-[9px] text-[#121212]/40 uppercase tracking-widest">Phase 05 / Vibrant Chromatics</span>
        </div>
        <VectorRow>
          <VectorBlock className="bg-[#E0F7FA] shadow-sm" delay={1.8} code={`<svg viewBox="0 0 100 100">
  <g transform="translate(50, 50)">
    {[...Array(12)].map((_, i) => (
      <motion.g key={i} animate={{ rotate: [0, 5, 0] }} transition={{ duration: 3, repeat: Infinity }} transform="rotate(\${i * 30})">
        <path d="M0 0 Q10 -30 0 -45" fill="#00ACC1" />
        <circle cy="-35" r="5" fill="#1A237E" />
      </motion.g>
    ))}
  </g>
</svg>`}>
            <PeacockPlumage />
          </VectorBlock>

          <VectorBlock className="bg-[#FFF8E1] shadow-sm" delay={1.9} code={`<motion.g animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }}>
  <svg viewBox="0 0 100 100">
    <g transform="translate(50, 50)">
      {[...Array(16)].map((_, i) => (
        <path key={i} d="M0 0 Q15 -15 0 -35" fill="#FFB300" transform="rotate(\${i * 22.5})" />
      ))}
      <circle r="6" fill="#BF360C" />
    </g>
  </svg>
</motion.g>`}>
            <MarigoldMandala />
          </VectorBlock>

          <VectorBlock className="bg-[#E0F2F1] shadow-sm" delay={2.0} code={`<svg viewBox="0 0 100 100">
  <pattern id="lotusPond" width="50" height="50" patternUnits="userSpaceOnUse">
    <motion.path animate={{ scale: [0.8, 1, 0.8] }} transition={{ duration: 4, repeat: Infinity }} d="M25 25 Q30 15 25 5" fill="#F06292" />
  </pattern>
  <rect width="100" height="100" fill="url(#lotusPond)" />
</svg>`}>
            <LotusPond />
          </VectorBlock>

          <VectorBlock className="bg-[#FFEBEE] shadow-sm" delay={2.1} code={`<svg viewBox="0 0 100 100">
  <g transform="translate(50, 50)">
    {[...Array(8)].map((_, i) => (
      <path key={i} d="M0 0 L15 -15 L30 0 L15 15 Z" stroke="#D32F2F" transform="rotate(\${i * 45})" />
    ))}
    <motion.circle animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity }} r="5" fill="#D32F2F" />
  </g>
</svg>`}>
            <GeometricRangoli />
          </VectorBlock>

          <VectorBlock className="bg-[#EDE7F6] shadow-sm" delay={2.2} code={`<motion.g animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
  <svg viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="45" fill="#1A237E" />
    <motion.path animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 5, repeat: Infinity }} d="M50 20 Q80 50 50 80" stroke="#7E57C2" />
  </svg>
</motion.g>`}>
            <IndigoGalaxy />
          </VectorBlock>
        </VectorRow>
      </main>

      <div className="pb-32 flex flex-col items-center">
        <span className="font-pixel text-[10px] text-[#FF1F00] uppercase tracking-[0.5em] mb-4">Geometric Heritage Lab</span>
        <h2 className="text-[#121212]/30 font-mono text-[9px] max-w-xs text-center leading-relaxed">
          COLLECTION ARCHIVED. 22 MOTIFS MODULE-READY. CLICK BLOCKS TO COPY ANIMATED JSX.
        </h2>
      </div>
    </div>
  );
}
