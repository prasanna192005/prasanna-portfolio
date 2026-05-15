"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

interface DynamicBackButtonProps {
  href: string;
  label: string;
}

export default function DynamicBackButton({ href, label }: DynamicBackButtonProps) {
  const { scrollY } = useScroll();
  
  // Transition the button colors based on scroll
  // Hero is roughly 80vh. Let's transition between 400px and 600px.
  const bgColor = useTransform(
    scrollY,
    [0, 500],
    ["rgba(255, 255, 255, 0.2)", "rgba(18, 18, 18, 1)"]
  );
  
  const textColor = useTransform(
    scrollY,
    [0, 500],
    ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 1)"]
  );

  const iconBg = useTransform(
    scrollY,
    [0, 500],
    ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0.1)"]
  );

  const iconColor = useTransform(
    scrollY,
    [0, 500],
    ["rgba(18, 18, 18, 1)", "rgba(255, 255, 255, 1)"]
  );

  const borderColor = useTransform(
    scrollY,
    [0, 500],
    ["rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 0.2)"]
  );

  return (
    <motion.div 
      className="fixed top-8 left-8 z-[100] hidden md:block"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
    >
      <Link href={href}>
        <motion.div 
          style={{ 
            backgroundColor: bgColor, 
            color: textColor,
            borderColor: borderColor
          }}
          className="group flex items-center space-x-4 backdrop-blur-md border pl-2 pr-6 py-2 rounded-full transition-all shadow-sm hover:shadow-xl"
        >
          <motion.div 
            style={{ backgroundColor: iconBg, color: iconColor }}
            className="w-10 h-10 rounded-full flex items-center justify-center group-hover:rotate-[-45deg] transition-transform duration-500"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </motion.div>
          <div className="flex flex-col">
            <span className="text-[7px] font-pixel uppercase tracking-widest leading-none mb-1 opacity-60">Return_Node</span>
            <span className="text-[11px] font-bold uppercase tracking-tighter leading-none">{label}</span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
