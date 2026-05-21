"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from "framer-motion";

interface VelocityMarqueeProps {
  baseVelocity?: number;
}

const VelocityMarquee = ({ baseVelocity = 2 }: VelocityMarqueeProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  // Smooth the velocity more aggressively to avoid jerky direction changes
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  // Keep velocity factor tighter — [-3, 3] prevents runaway acceleration
  const velocityFactor = useTransform(smoothVelocity, [-1000, 0, 1000], [-3, 0, 3], {
    clamp: true,
  });

  const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
  };

  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);

  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    if (isHovered) return;

    // Cap delta to 64ms (prevents large jumps after tab switching / focus loss)
    const safeDelta = Math.min(delta, 64);

    const vf = velocityFactor.get();

    // Only change direction on strong scroll signal to avoid flickering
    if (vf < -0.5) {
      directionFactor.current = -1;
    } else if (vf > 0.5) {
      directionFactor.current = 1;
    }

    // Base movement + additive scroll boost (not multiplicative)
    const scrollBoost = directionFactor.current * baseVelocity * Math.abs(vf);
    const moveBy = directionFactor.current * baseVelocity * (safeDelta / 1000) + scrollBoost * (safeDelta / 1000);

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      className="overflow-hidden flex whitespace-nowrap flex-nowrap"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div className="flex whitespace-nowrap flex-nowrap" style={{ x }}>
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center flex-shrink-0">
            <span className="text-2xl md:text-3xl font-serif text-[#121212] tracking-widest italic pr-8 pl-8">chai powered</span>
            <svg viewBox="0 0 100 100" className="w-6 h-6 mx-4 fill-[#F57F17] animate-[spin_12s_linear_infinite]">
              {[...Array(8)].map((_, j) => (
                <path key={j} d="M50 50 Q65 20 50 0 Q35 20 50 50" transform={`rotate(${j * 45} 50 50)`} />
              ))}
              <circle cx="50" cy="50" r="10" fill="#FDFBF7" />
            </svg>
            <span className="text-2xl md:text-3xl font-helvetica font-bold text-[#121212] tracking-tighter pl-8 pr-8">making pixels move</span>
            <svg viewBox="0 0 24 24" className="w-5 h-5 mx-4 fill-[#1565C0]">
              <path d="M2 24 L22 24 L12 12 L22 0 L2 0 L12 12 Z" strokeLinejoin="round" />
            </svg>
            <span className="text-2xl md:text-3xl font-serif text-[#121212] tracking-widest italic pr-8 pl-8">git push --force</span>
            <svg viewBox="0 0 100 100" className="w-6 h-6 mx-4 fill-none stroke-[#2E7D32] stroke-[8] animate-[spin_15s_linear_infinite_reverse]">
              <circle cx="50" cy="50" r="40" strokeDasharray="10 15" />
              <path d="M50 20 L50 80 M20 50 L80 50" />
              <circle cx="50" cy="50" r="8" className="fill-[#2E7D32]" />
            </svg>
            <span className="text-2xl md:text-3xl font-helvetica font-bold text-[#121212] tracking-tighter pl-8 pr-8">look, it moves!</span>
            <svg viewBox="0 0 100 100" className="w-5 h-5 mx-4 fill-[#C62828]">
              <path d="M50 0 L100 50 L50 100 L0 50 Z" />
              <circle cx="50" cy="50" r="20" fill="#FDFBF7" />
              <circle cx="50" cy="50" r="8" fill="#C62828" />
            </svg>
            <span className="text-2xl md:text-3xl font-serif text-[#121212] tracking-widest italic pl-8 pr-8">sanskriti × vigyanam</span>
            <svg viewBox="0 0 100 100" className="w-6 h-6 mx-4 fill-[#F57F17] animate-[spin_12s_linear_infinite]">
              {[...Array(8)].map((_, j) => (
                <path key={j} d="M50 50 Q65 20 50 0 Q35 20 50 50" transform={`rotate(${j * 45} 50 50)`} />
              ))}
              <circle cx="50" cy="50" r="10" fill="#FDFBF7" />
            </svg>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default VelocityMarquee;