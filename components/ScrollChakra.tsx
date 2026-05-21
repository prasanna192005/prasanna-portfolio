"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";

const ScrollChakra = () => {
  const { scrollY, scrollYProgress } = useScroll();
  const pathname = usePathname();
  const isHome = pathname === "/" || !pathname;
  
  // Smooth the scroll progress for rotation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const rotate = useTransform(smoothProgress, [0, 1], [0, 360]);

  // Home Page Color Transition
  // 1. White on Hero (#FF1F00)
  // 2. Red on Paper Cream (#FDFBF7)
  // 3. White on Contact Blue (#2563EB)
  const homeThemeColor = useTransform(
    scrollYProgress, 
    [0, 0.05, 0.9, 0.98], 
    ["#FFFFFF", "#FF1F00", "#FF1F00", "#FFFFFF"]
  );
  
  const homeTextColor = useTransform(
    scrollYProgress, 
    [0, 0.05, 0.9, 0.98], 
    ["rgba(255,255,255,0.4)", "rgba(255,31,0,0.4)", "rgba(255,31,0,0.4)", "rgba(255,255,255,0.4)"]
  );

  const homeInnerCircleColor = useTransform(
    scrollYProgress,
    [0, 0.05, 0.9, 0.98],
    ["#FF1F00", "#FFFFFF", "#FFFFFF", "#FF1F00"]
  );

  // Light Pages Transition (Resume, Projects, Design System, Font Showcase)
  // Maintains Red (#FF1F00) with White inner circle to contrast with Patrika Cream background (#FDFBF7)
  const lightThemeColor = useTransform(
    scrollYProgress, 
    [0, 1], 
    ["#FF1F00", "#FF1F00"]
  );
  
  const lightTextColor = useTransform(
    scrollYProgress, 
    [0, 1], 
    ["rgba(255,31,0,0.4)", "rgba(255,31,0,0.4)"]
  );

  const lightInnerCircleColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#FFFFFF", "#FFFFFF"]
  );

  const themeColor = isHome ? homeThemeColor : lightThemeColor;
  const textColor = isHome ? homeTextColor : lightTextColor;
  const innerCircleColor = isHome ? homeInnerCircleColor : lightInnerCircleColor;

  return (
    <div className="fixed bottom-8 right-8 z-[90] pointer-events-none flex flex-col items-center group">
      <div className="relative w-12 h-12 md:w-16 md:h-16">
        {/* Outer Circular Path */}
        <svg className="absolute inset-0 w-full h-full -rotate-90 opacity-20" viewBox="0 0 100 100">
          <motion.circle 
            cx="50" 
            cy="50" 
            r="45" 
            fill="none" 
            stroke={themeColor} 
            strokeWidth="1" 
          />
        </svg>

        {/* Progress Circle */}
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
          <motion.circle 
            cx="50" 
            cy="50" 
            r="45" 
            fill="none" 
            stroke={themeColor} 
            strokeWidth="2" 
            strokeDasharray="283"
            style={{ pathLength: scrollYProgress }}
          />
        </svg>

        {/* Rotating Flower Progress Icon */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center p-2.5"
          style={{ rotate }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <motion.g style={{ fill: themeColor }}>
              {[...Array(8)].map((_, i) => (
                <path 
                  key={i} 
                  d="M50 50 Q65 20 50 0 Q35 20 50 50" 
                  transform={`rotate(${i * 45} 50 50)`} 
                  className="opacity-90"
                />
              ))}
            </motion.g>
            <motion.circle cx="50" cy="50" r="12" style={{ fill: innerCircleColor }} />
            <motion.circle cx="50" cy="50" r="6" style={{ fill: themeColor }} />
          </svg>
        </motion.div>
      </div>
      
      {/* Percentage Text */}
      <motion.span 
        style={{ color: textColor }}
        className="mt-2 font-pixel text-[8px] tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
      >
        PATH_PROGRESS
      </motion.span>
    </div>
  );
};

export default ScrollChakra;
