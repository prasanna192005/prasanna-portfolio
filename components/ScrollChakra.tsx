"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const ScrollChakra = () => {
  const { scrollYProgress } = useScroll();
  
  // Smooth the scroll progress for rotation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const rotate = useTransform(smoothProgress, [0, 1], [0, 360]);

  return (
    <div className="fixed bottom-8 right-8 z-[90] pointer-events-none flex flex-col items-center group">
      <div className="relative w-12 h-12 md:w-16 md:h-16">
        {/* Outer Circular Path */}
        <svg className="absolute inset-0 w-full h-full -rotate-90 opacity-20" viewBox="0 0 100 100">
          <circle 
            cx="50" 
            cy="50" 
            r="45" 
            fill="none" 
            stroke="currentColor" 
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
            stroke="#FF1F00" 
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
          <svg viewBox="0 0 100 100" className="w-full h-full fill-[#FF1F00]">
            {[...Array(8)].map((_, i) => (
              <path 
                key={i} 
                d="M50 50 Q65 20 50 0 Q35 20 50 50" 
                transform={`rotate(${i * 45} 50 50)`} 
                className="opacity-90"
              />
            ))}
            <circle cx="50" cy="50" r="12" fill="white" />
            <circle cx="50" cy="50" r="6" fill="#FF1F00" />
          </svg>
        </motion.div>
      </div>
      
      {/* Percentage Text */}
      <motion.span 
        className="mt-2 font-pixel text-[8px] text-[#FF1F00] tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
      >
        PATH_PROGRESS
      </motion.span>
    </div>
  );
};

export default ScrollChakra;
