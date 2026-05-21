"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = [
  "तन्त्र", // System
  "अभिकल्प", // Design
  "सृजन", // Creation
  "विज्ञान", // Science
  "संस्कृति" // Culture
];

const getChaiStatus = (prog: number) => {
  if (prog < 20) return "fetching ginger & cardamom...";
  if (prog < 45) return "igniting the stove...";
  if (prog < 70) return "steeping the tea leaves...";
  if (prog < 90) return "brewing telemetry...";
  if (prog < 100) return "pouring into glass...";
  return "ready.";
};

const getStage = (prog: number) => {
  if (prog < 20) return 1;
  if (prog < 45) return 2;
  if (prog < 70) return 3;
  if (prog < 90) return 4;
  if (prog < 100) return 5;
  return 6;
};

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Lock scroll on mount
    document.body.style.overflow = "hidden";

    const duration = 4800; // Adjusted to 4.8 seconds for optimal pacing
    const intervalTime = 20;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    let timer: NodeJS.Timeout;

    timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsComplete(true);
            // Restore scroll
            document.body.style.overflow = "";
          }, 1500); // 1.5 seconds delay so the user can enjoy the final ready state
          return 100;
        }
        return next;
      });
    }, intervalTime);

    // Skip on space or enter
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "Enter") {
        e.preventDefault();
        clearInterval(timer);
        setProgress(100);
        setTimeout(() => {
          setIsComplete(true);
          document.body.style.overflow = "";
        }, 200);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(timer);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, []);

  // Map progress to word index
  useEffect(() => {
    const segment = 100 / words.length;
    const index = Math.min(
      Math.floor(progress / segment),
      words.length - 1
    );
    setWordIndex(index);
  }, [progress]);

  const currentStage = getStage(progress);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-9999 flex flex-col items-center justify-between bg-[#FDFBF7] p-8 md:p-16 select-none overflow-hidden"
        >
          {/* Tactile Khadi Grain Overlay */}
          <div className="absolute inset-0 grain-overlay pointer-events-none opacity-25" />

          {/* Faint Engineering Grid Overlay */}
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 pointer-events-none opacity-[0.04]">
            {[...Array(36)].map((_, i) => (
              <div key={i} className="border-[0.5px] border-[#121212]" />
            ))}
          </div>

          {/* Top Corner Details */}
          <div className="absolute top-6 left-6 text-[10px] md:text-xs font-mono tracking-widest text-[#121212]/30 uppercase">
            Sanskriti × Vigyanam
          </div>
          <div className="absolute top-6 right-6 text-[10px] md:text-xs font-mono tracking-widest text-[#121212]/30 uppercase">
            [ Prasanna.Dev ]
          </div>

          {/* Center Dynamic Illustration and Text */}
          <div className="flex-1 flex flex-col items-center justify-center relative z-10 w-full max-w-sm">
            
            {/* Visual Screen Container */}
            <div className="w-56 h-56 flex items-center justify-center mb-8 relative">
              <AnimatePresence mode="wait">
                
                {/* STAGE 1: Cardamom, Ginger & Marigold Flower */}
                {currentStage === 1 && (
                  <motion.div
                    key="stage1"
                    initial={{ scale: 0.9, opacity: 0, y: 10 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: -10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="w-full h-full"
                  >
                    <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-[#121212] stroke-[1.2] stroke-linecap-round stroke-linejoin-round">
                      {/* Technical Radar / Scan lines */}
                      <circle cx="50" cy="50" r="42" className="stroke-[#2563EB]/10 stroke-[0.5]" strokeDasharray="2 4" />
                      <line x1="50" y1="8" x2="50" y2="92" className="stroke-[#2563EB]/10 stroke-[0.5]" strokeDasharray="1 3" />
                      <line x1="8" y1="50" x2="92" y2="50" className="stroke-[#2563EB]/10 stroke-[0.5]" strokeDasharray="1 3" />
                      
                      {/* Dynamic Scanning Ring */}
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="30"
                        className="stroke-[#2563EB]/25 stroke-1"
                        animate={{ r: [15, 38, 15], opacity: [0.2, 0.6, 0.2] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                      />

                      <g transform="translate(0, 5)">
                        {/* Ginger Root */}
                        <path d="M28 55 C22 48, 26 38, 34 38 C38 38, 42 42, 44 38 C46 34, 42 30, 48 26 C54 22, 60 28, 56 36 C52 42, 48 45, 52 50 C56 55, 50 62, 42 62 C34 62, 34 58, 28 55 Z" fill="#D4A373" fillOpacity="0.3" className="stroke-[#121212]" />
                        {/* Ginger skin texture rings */}
                        <path d="M30 48 C32 44, 36 44, 38 46" className="stroke-[#121212]/40" />
                        <path d="M42 54 C44 50, 48 50, 48 53" className="stroke-[#121212]/40" />
                        <path d="M44 34 C48 30, 52 32, 50 36" className="stroke-[#121212]/40" />

                        {/* Cardamom Pods */}
                        <g transform="translate(56, 42) rotate(-20)">
                          <path d="M0 -15 C8 -8, 8 8, 0 15 C-8 8, -8 -8, 0 -15 Z" fill="#8E9F85" fillOpacity="0.45" className="stroke-[#121212]" />
                          <path d="M0 -15 L0 15" className="stroke-[#121212]/40" strokeWidth="0.8" />
                          <path d="M-4 -8 C-2 -4, -2 4, -4 8" className="stroke-[#121212]/30" strokeWidth="0.6" />
                          <path d="M4 -8 C2 -4, 2 4, 4 8" className="stroke-[#121212]/30" strokeWidth="0.6" />
                        </g>
                        <g transform="translate(68, 52) rotate(35)">
                          <path d="M0 -12 C6 -6, 6 6, 0 12 C-6 6, -6 -6, 0 -12 Z" fill="#8E9F85" fillOpacity="0.3" className="stroke-[#121212]" />
                          <path d="M0 -12 L0 12" className="stroke-[#121212]/40" strokeWidth="0.8" />
                        </g>

                        {/* Marigold Flower */}
                        <g transform="translate(48, 52)">
                          <circle cx="0" cy="0" r="6" fill="#FFA502" className="stroke-[#121212]" />
                          {[...Array(6)].map((_, i) => (
                            <path
                              key={i}
                              d="M0 0 Q6 -12 0 -20 Q-6 -12 0 0"
                              fill="#D62238"
                              fillOpacity="0.6"
                              className="stroke-[#121212]"
                              transform={`rotate(${i * 60})`}
                            />
                          ))}
                          {[...Array(6)].map((_, i) => (
                            <path
                              key={i}
                              d="M0 0 Q4 -8 0 -14 Q-4 -8 0 0"
                              fill="#FFA502"
                              fillOpacity="0.85"
                              className="stroke-[#121212]"
                              transform={`rotate(${i * 60 + 30})`}
                            />
                          ))}
                          <circle cx="0" cy="0" r="2" fill="#FDFBF7" />
                        </g>
                      </g>

                      {/* Technical Labels Overlay */}
                      <g className="font-mono text-[5px] fill-[#121212]/60 stroke-none" transform="translate(8, 18)">
                        <text x="0" y="0">[01_ZINGIBER_ADRAK]</text>
                        <text x="0" y="6" className="fill-[#8E9F85] font-bold">[02_ELAICHI_NOMINAL]</text>
                        <text x="0" y="12" className="fill-[#D62238] font-bold">[03_CALYX_SACRED]</text>
                      </g>
                      <g className="font-mono text-[5px] fill-[#121212]/60 stroke-none text-right" transform="translate(68, 86)">
                        <text x="0" y="0">SCAN_FREQ: 98.2hz</text>
                        <text x="0" y="6">GRID_COORDS: X-44</text>
                      </g>
                    </svg>
                  </motion.div>
                )}

                {/* STAGE 2: Igniting Stove */}
                {currentStage === 2 && (
                  <motion.div
                    key="stage2"
                    initial={{ scale: 0.9, opacity: 0, y: 10 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: -10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="w-full h-full"
                  >
                    <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-[#121212] stroke-[1.2] stroke-linecap-round stroke-linejoin-round">
                      <defs>
                        <linearGradient id="stoveFlameGrad" x1="0" y1="1" x2="0" y2="0">
                          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.8" />
                          <stop offset="40%" stopColor="#FFA502" stopOpacity="0.9" />
                          <stop offset="100%" stopColor="#D62238" stopOpacity="0.4" />
                        </linearGradient>
                        <linearGradient id="brassPatilaGrad" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#D4A373" />
                          <stop offset="50%" stopColor="#FFA502" />
                          <stop offset="100%" stopColor="#B58B5C" />
                        </linearGradient>
                      </defs>

                      {/* Engineering guidelines */}
                      <path d="M15 80 L85 80 M50 20 L50 90" className="stroke-[#2563EB]/10 stroke-[0.5]" strokeDasharray="2 2" />
                      
                      {/* Brass Patila */}
                      <g transform="translate(0, 5)">
                        <path d="M30 65 H70 L66 38 H34 Z" fill="url(#brassPatilaGrad)" fillOpacity="0.7" className="stroke-[#121212]" />
                        <ellipse cx="50" cy="38" rx="16" ry="3" fill="#FDFBF7" fillOpacity="0.4" className="stroke-[#121212]" />
                        <ellipse cx="50" cy="38" rx="12" ry="2" fill="none" className="stroke-[#121212]/30" />
                        
                        <path d="M34 44 C26 44, 26 52, 33 52" className="stroke-[#121212]" strokeWidth="1.5" />
                        <path d="M66 44 C74 44, 74 52, 67 52" className="stroke-[#121212]" strokeWidth="1.5" />

                        <path d="M32 50 Q50 53 68 50" className="stroke-[#121212]/50" />
                        <path d="M31 58 Q50 61 69 58" className="stroke-[#121212]/30" />
                      </g>

                      {/* Burner Plate */}
                      <rect x="25" y="70" width="50" height="4" rx="1" fill="#121212" fillOpacity="0.2" className="stroke-[#121212]" />
                      <line x1="20" y1="74" x2="80" y2="74" className="stroke-[#121212]" />

                      {/* Multi-layered Gas Flames */}
                      <g fill="url(#stoveFlameGrad)" stroke="none">
                        {[...Array(5)].map((_, i) => {
                          const xOffset = 34 + i * 8;
                          const heightScale = i % 2 === 0 ? 1.3 : 0.9;
                          const delay = i * 0.1;
                          return (
                            <motion.path
                              key={i}
                              d={`M${xOffset} 70 Q${xOffset + 4} 46 ${xOffset + 4} 46 Q${xOffset + 8} 46 ${xOffset + 8} 70 Z`}
                              animate={{ 
                                scaleY: [1, heightScale, 1], 
                                skewX: [0, i % 2 === 0 ? 5 : -5, 0],
                                y: [0, -2, 0] 
                              }}
                              transition={{ 
                                repeat: Infinity, 
                                duration: 0.6 + i * 0.05, 
                                ease: "easeInOut",
                                delay: delay
                              }}
                              style={{ transformOrigin: `${xOffset + 4}px 70px` }}
                            />
                          );
                        })}
                      </g>

                      {/* Technical Readout */}
                      <g className="font-mono text-[5px] fill-[#121212]/60 stroke-none" transform="translate(8, 18)">
                        <text x="0" y="0">STOVE: IGNITED</text>
                        <text x="0" y="6" className="fill-[#FFA502] font-bold">TEMP_RATE: +4.2C/s</text>
                        <text x="0" y="12">THERMOCUPLER: 0x9F3</text>
                      </g>
                      <g className="font-mono text-[5px] fill-[#121212]/60 stroke-none text-right" transform="translate(92, 18)">
                        <text x="0" y="0">BURN_VALVE: 100%</text>
                        <text x="0" y="6" className="fill-[#2563EB] font-bold">FLOW: CONSTANT</text>
                      </g>
                    </svg>
                  </motion.div>
                )}

                {/* STAGE 3: Steeping Tea Leaves */}
                {currentStage === 3 && (
                  <motion.div
                    key="stage3"
                    initial={{ scale: 0.9, opacity: 0, y: 10 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: -10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="w-full h-full"
                  >
                    <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-[#121212] stroke-[1.2] stroke-linecap-round stroke-linejoin-round">
                      {/* Vessel Inner Silhouette */}
                      <path d="M30 25 H70 V75 C70 82, 30 82, 30 75 Z" className="stroke-[#121212]" fill="#FDFBF7" />
                      
                      {/* Tea Fluid Wave */}
                      <g>
                        <motion.path
                          d="M30 48 Q40 44 50 48 T70 48 L70 79 C70 82, 30 82, 30 79 Z"
                          fill="#C68B59"
                          fillOpacity="0.75"
                          stroke="none"
                          animate={{
                            d: [
                              "M30 48 Q40 44 50 48 T70 48 L70 79 C70 82, 30 82, 30 79 Z",
                              "M30 48 Q40 52 50 48 T70 48 L70 79 C70 82, 30 82, 30 79 Z",
                              "M30 48 Q40 44 50 48 T70 48 L70 79 C70 82, 30 82, 30 79 Z"
                            ]
                          }}
                          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                        />
                        <motion.path
                          d="M30 52 Q40 49 50 52 T70 52 L70 79 C70 82, 30 82, 30 79 Z"
                          fill="#9C6644"
                          fillOpacity="0.45"
                          stroke="none"
                          animate={{
                            d: [
                              "M30 52 Q40 49 50 52 T70 52 L70 79 C70 82, 30 82, 30 79 Z",
                              "M30 52 Q40 55 50 52 T70 52 L70 79 C70 82, 30 82, 30 79 Z",
                              "M30 52 Q40 49 50 52 T70 52 L70 79 C70 82, 30 82, 30 79 Z"
                            ]
                          }}
                          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut", delay: 0.2 }}
                        />
                      </g>

                      {/* Swirling tea leaves and ginger */}
                      <g className="stroke-none">
                        <motion.path
                          d="M36 60 C38 58, 40 58, 38 62 Z"
                          fill="#4E5D30"
                          animate={{ 
                            y: [-5, 12, -5], 
                            x: [0, 4, 0],
                            rotate: [0, 180, 360] 
                          }}
                          transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                        />
                        <motion.path
                          d="M62 65 C64 63, 66 63, 64 67 Z"
                          fill="#5D4B3A"
                          animate={{ 
                            y: [8, -10, 8], 
                            x: [0, -5, 0],
                            rotate: [90, 270, 450] 
                          }}
                          transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 0.4 }}
                        />
                        <motion.circle
                          cx="48"
                          cy="68"
                          r="3"
                          fill="#D4A373"
                          fillOpacity="0.8"
                          animate={{ 
                            y: [4, -8, 4],
                            x: [-3, 3, -3]
                          }}
                          transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 0.8 }}
                        />
                        <motion.ellipse
                          cx="58"
                          cy="56"
                          rx="2.5"
                          ry="1.5"
                          fill="#8E9F85"
                          fillOpacity="0.9"
                          animate={{ 
                            y: [-8, 6, -8],
                            rotate: [0, -120, -240]
                          }}
                          transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 1.2 }}
                        />
                      </g>

                      {/* Boiling Bubbles */}
                      {[...Array(6)].map((_, i) => {
                        const cx = 35 + i * 6;
                        const duration = 1.2 + i * 0.25;
                        return (
                          <motion.circle
                            key={i}
                            cx={cx}
                            cy="76"
                            r="1"
                            fill="#FFF5E1"
                            animate={{ 
                              y: [0, -22 - (i % 2 === 0 ? 6 : 0)], 
                              opacity: [0, 0.9, 0],
                              scale: [0.5, 1.2, 0.5]
                            }}
                            transition={{ 
                              repeat: Infinity, 
                              duration: duration, 
                              ease: "easeOut",
                              delay: i * 0.15
                            }}
                          />
                        );
                      })}

                      {/* Top Lid detail */}
                      <path d="M26 25 H74 M45 15 H55 V25 M38 15 H62" className="stroke-[#121212] stroke-[1.5]" />

                      {/* Technical Readout */}
                      <g className="font-mono text-[5px] fill-[#121212]/60 stroke-none" transform="translate(8, 18)">
                        <text x="0" y="0">STEEP_CYCLE: ON</text>
                        <text x="0" y="6" className="fill-[#FFA502] font-bold">SOLIDS: 84.1%</text>
                      </g>
                      <g className="font-mono text-[5px] fill-[#121212]/60 stroke-none text-right" transform="translate(92, 86)">
                        <text x="0" y="0">SOLVENT: MILK/H2O</text>
                        <text x="0" y="6">VISCOSITY: 1.2cp</text>
                      </g>
                    </svg>
                  </motion.div>
                )}

                {/* STAGE 4: Brewing Telemetry */}
                {currentStage === 4 && (
                  <motion.div
                    key="stage4"
                    initial={{ scale: 0.9, opacity: 0, y: 10 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: -10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="w-full h-full"
                  >
                    <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-[#121212] stroke-[1.2] stroke-linecap-round stroke-linejoin-round">
                      {/* Grid Backdrop */}
                      <g className="stroke-[#2563EB]/15 stroke-[0.5]" strokeDasharray="3 3">
                        <circle cx="50" cy="50" r="44" />
                        <circle cx="50" cy="50" r="28" />
                        <line x1="6" y1="50" x2="94" y2="50" />
                        <line x1="50" y1="6" x2="50" y2="94" />
                      </g>

                      {/* Blueprint Cup */}
                      <g className="stroke-[#121212] stroke-1">
                        <path d="M30 42 H70 V62 C70 72, 30 72, 30 62 Z" fill="#FFA502" fillOpacity="0.05" />
                        <path d="M70 47 Q82 47 82 55 Q82 63 70 63" />
                        <path d="M22 75 H78" strokeWidth="1.5" />
                        
                        <circle cx="30" cy="42" r="1.5" fill="#2563EB" stroke="none" />
                        <circle cx="70" cy="42" r="1.5" fill="#2563EB" stroke="none" />
                        <circle cx="70" cy="62" r="1.5" fill="#2563EB" stroke="none" />
                        <circle cx="30" cy="62" r="1.5" fill="#2563EB" stroke="none" />

                        <g className="font-mono text-[4px] fill-[#2563EB] stroke-none">
                          <text x="32" y="39">W: 40px</text>
                          <text x="73" y="55">R: 12px</text>
                        </g>
                      </g>

                      {/* Telemetry Waveform */}
                      <g>
                        <motion.path
                          d="M10 50 Q17 30 25 50 T40 50 T55 50 T70 50 T85 50 T90 50"
                          className="stroke-[#2563EB] stroke-1"
                          animate={{
                            d: [
                              "M10 50 Q17 32 25 50 T40 50 T55 45 T70 50 T85 58 T90 50",
                              "M10 50 Q17 68 25 50 T40 50 T55 55 T70 50 T85 42 T90 50",
                              "M10 50 Q17 32 25 50 T40 50 T55 45 T70 50 T85 58 T90 50"
                            ]
                          }}
                          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                        />
                      </g>

                      {/* Rotating Radar Sweep */}
                      <motion.line
                        x1="50"
                        y1="50"
                        x2="50"
                        y2="6"
                        className="stroke-[#FFA502]/60 stroke-1"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                        style={{ transformOrigin: "50px 50px" }}
                      />

                      {/* Technical Readout */}
                      <g className="font-mono text-[5px] fill-[#121212]/60 stroke-none" transform="translate(8, 18)">
                        <text x="0" y="0">ALGORITHM: BREW_LOGIC</text>
                        <text x="0" y="6" className="fill-[#2563EB] font-bold">WAVE: SINUSOIDAL</text>
                        <text x="0" y="12">STABILITY: 99.8%</text>
                      </g>
                      <g className="font-mono text-[5px] fill-[#121212]/60 stroke-none text-right" transform="translate(92, 86)">
                        <text x="0" y="0">TELEMETRY_STREAM: OK</text>
                        <text x="0" y="6">LATENCY: 12ms</text>
                      </g>
                    </svg>
                  </motion.div>
                )}

                {/* STAGE 5: Pouring Liquid */}
                {currentStage === 5 && (
                  <motion.div
                    key="stage5"
                    initial={{ scale: 0.9, opacity: 0, y: 10 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: -10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="w-full h-full"
                  >
                    <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-[#121212] stroke-[1.2] stroke-linecap-round stroke-linejoin-round">
                      <defs>
                        <linearGradient id="teaPourGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#9C6644" />
                          <stop offset="100%" stopColor="#C68B59" />
                        </linearGradient>
                      </defs>

                      {/* Tilting Brass Teapot */}
                      <motion.g
                        initial={{ rotate: 0, x: 0, y: 0 }}
                        animate={{ rotate: -25, x: -4, y: 2 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        style={{ transformOrigin: "35px 35px" }}
                      >
                        <path d="M12 44 H38 L32 20 H18 Z" fill="#FFA502" fillOpacity="0.3" className="stroke-[#121212]" strokeWidth="1.2" />
                        <path d="M18 20 Q25 12 32 20 Z" fill="#D62238" fillOpacity="0.2" className="stroke-[#121212]" />
                        <path d="M38 38 L48 26 L45 24 L34 32" fill="#FFA502" fillOpacity="0.3" className="stroke-[#121212]" />
                        <path d="M16 20 C10 12, 6 28, 12 36" className="stroke-[#121212]" strokeWidth="1.5" />
                      </motion.g>

                      {/* Pouring Tea Stream */}
                      <motion.path
                        d="M44 29 Q52 46 54 62"
                        stroke="url(#teaPourGrad)"
                        strokeWidth="2.5"
                        strokeDasharray="4 4"
                        animate={{ strokeDashoffset: [0, -20] }}
                        transition={{ repeat: Infinity, duration: 0.4, ease: "linear" }}
                      />

                      {/* Cutting Chai Glass */}
                      <g transform="translate(10, 5)">
                        <path d="M36 50 H60 L56 82 H40 Z" className="stroke-[#121212]" strokeWidth="1.5" />
                        
                        <path d="M42 50 L44 80 M48 50 L48 82 M54 50 L52 80" className="stroke-[#121212]/15" strokeWidth="0.8" />
                        
                        {/* Rising Liquid inside glass */}
                        <g>
                          <motion.path
                            d="M40.5 81 H55.5 L58 60 H38 Z"
                            fill="#C68B59"
                            fillOpacity="0.8"
                            stroke="none"
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            style={{ transformOrigin: "bottom" }}
                          />
                          <motion.path
                            d="M38 60 Q48 58 58 60"
                            stroke="#FFF5E1"
                            strokeWidth="1.5"
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            style={{ transformOrigin: "bottom" }}
                          />
                        </g>
                      </g>

                      {/* Technical Readout */}
                      <g className="font-mono text-[5px] fill-[#121212]/60 stroke-none" transform="translate(8, 18)">
                        <text x="0" y="0">VALVE: OPEN</text>
                        <text x="0" y="6" className="fill-[#FFA502] font-bold">FLOW_VELOCITY: 1.4m/s</text>
                      </g>
                      <g className="font-mono text-[5px] fill-[#121212]/60 stroke-none text-right" transform="translate(92, 86)">
                        <text x="0" y="0">GLASS_LOAD: 72%</text>
                        <text x="0" y="6">TEMP_REDUCE: -0.05C/s</text>
                      </g>
                    </svg>
                  </motion.div>
                )}

                {/* STAGE 6: Ready Cutting Chai */}
                {currentStage === 6 && (
                  <motion.div
                    key="stage6"
                    initial={{ scale: 0.9, opacity: 0, y: 10 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: -10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="w-full h-full"
                  >
                    <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-[#121212] stroke-[1.2] stroke-linecap-round stroke-linejoin-round">
                      {/* Glorious Rotating Mandala Backdrop */}
                      <motion.g
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                        style={{ transformOrigin: "50px 55px" }}
                        className="opacity-20"
                      >
                        {[...Array(12)].map((_, j) => (
                          <g key={j} transform={`rotate(${j * 30} 50 55)`}>
                            <path
                              d="M50 55 Q62 25 50 10 Q38 25 50 55"
                              fill="#FFA502"
                              stroke="#D62238"
                              strokeWidth="0.5"
                            />
                            <circle cx="50" cy="15" r="1.5" fill="#D62238" />
                          </g>
                        ))}
                      </motion.g>

                      {/* Tea Liquid inside glass */}
                      <path d="M37 49 H63 L59 84 H41 Z" fill="#C68B59" fillOpacity="0.9" stroke="none" />
                      {/* Frothy top layer (Cream) */}
                      <path d="M37 49 H63 V53 H37 Z" fill="#E6CCB2" stroke="none" />
                      {/* Tiny bubbles in froth */}
                      <circle cx="42" cy="51" r="0.5" fill="#FDFBF7" stroke="none" />
                      <circle cx="48" cy="51" r="0.7" fill="#FDFBF7" stroke="none" />
                      <circle cx="54" cy="51" r="0.5" fill="#FDFBF7" stroke="none" />
                      <circle cx="58" cy="51" r="0.6" fill="#FDFBF7" stroke="none" />

                      {/* Ribbed Cutting Chai Glass Outline */}
                      <path d="M36 45 H64 L60 86 H40 Z" stroke="#121212" strokeWidth="1.8" />
                      
                      {/* Facets / Ridges shine */}
                      <path d="M42 49 L43 82" stroke="#FDFBF7" strokeWidth="0.8" opacity="0.6" />
                      <path d="M50 49 L50 85" stroke="#FDFBF7" strokeWidth="1" opacity="0.7" />
                      <path d="M58 49 L57 82" stroke="#FDFBF7" strokeWidth="0.8" opacity="0.6" />

                      {/* Steam rising */}
                      <motion.path
                        d="M44 35 Q48 24 44 16 T48 2"
                        stroke="#FFA502"
                        strokeWidth="1.2"
                        animate={{ pathLength: [0, 1], opacity: [0, 0.8, 0], y: [4, -8] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                      />
                      <motion.path
                        d="M55 35 Q52 24 56 16 T52 2"
                        stroke="#121212"
                        strokeWidth="1"
                        opacity="0.3"
                        animate={{ pathLength: [0, 1], opacity: [0, 0.6, 0], y: [4, -8] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.7 }}
                      />

                      {/* Technical Readout */}
                      <g className="font-mono text-[5px] fill-[#121212]/60 stroke-none" transform="translate(8, 18)">
                        <text x="0" y="0">BREW: COMPLETE</text>
                        <text x="0" y="6" className="fill-[#D62238] font-bold">TEMP_READY: 78.5C</text>
                      </g>
                      <g className="font-mono text-[5px] fill-[#121212]/60 stroke-none text-right" transform="translate(92, 86)">
                        <text x="0" y="0">SYS_STATUS: ACTIVE</text>
                        <text x="0" y="6">CHAI: NOMINAL</text>
                      </g>
                    </svg>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

            {/* Rotating Sanskrit Concepts */}
            <div className="h-16 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[wordIndex]}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="text-3xl md:text-4xl font-serif text-[#121212] tracking-wider"
                >
                  {words[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Loading Bar */}
          <div className="w-full max-w-xs md:max-w-sm flex flex-col space-y-2 relative z-10">
            <div className="flex justify-between text-[10px] md:text-xs font-mono text-[#121212]/50 tracking-wider">
              <span>{getChaiStatus(progress)}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-0.5 w-full bg-[#121212]/10 overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-[#121212]"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="text-[9px] font-mono text-[#121212]/25 text-center tracking-widest uppercase pt-1">
              [ press space / enter to skip ]
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
