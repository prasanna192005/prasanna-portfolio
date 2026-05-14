"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const email = "prasannapandharikar19@gmail.com";

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    { name: "LinkedIn", icon: "in", href: "https://www.linkedin.com/in/prasanna-pandharikar/", detail: "Professional_Node" },
    { name: "GitHub", icon: "git", href: "https://github.com/prasanna192005", detail: "Source_Repository" },
    { name: "Email", icon: "✉", href: `mailto:${email}`, detail: "Direct_Dispatch" },
  ];

  return (
    <section className="min-h-[80vh] w-full flex flex-col items-center justify-center relative bg-[#1B4332] px-8 py-32 overflow-hidden">
      {/* Khadi Texture Overlay */}
      <div className="grain-overlay opacity-30 pointer-events-none" />

      {/* Decorative Mandala Background (Very Subtle) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] opacity-[0.03] pointer-events-none z-0">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
           {[...Array(12)].map((_, i) => (
             <path key={i} d="M50 50 Q65 20 50 0 Q35 20 50 50" transform={`rotate(${i * 30} 50 50)`} />
           ))}
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl w-full flex flex-col items-center text-center">
        
        {/* Section Header */}
        <div className="mb-20 flex flex-col items-center">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-px bg-white/40"></div>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 flex items-center justify-center border border-white/40 rounded-full p-1"
            >
               <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
                  <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
               </svg>
            </motion.div>
            <div className="w-12 h-px bg-white/40"></div>
          </div>
          <span className="font-pixel text-[10px] text-white/50 uppercase tracking-[0.5em] mb-4 block">Initiate Correspondence</span>
          <h2 className="text-5xl md:text-8xl font-serif tracking-tight text-white leading-none">
            The <span className="italic">Royal</span> Dispatch
          </h2>
        </div>

        {/* The Main CTA (The Letter) */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="group relative mb-24 w-full max-w-xl"
        >
           <div className="relative flex flex-col items-center p-8 md:p-14 border border-white/20 bg-white/5 backdrop-blur-sm shadow-[0_40px_100px_rgba(0,0,0,0.3)] group-hover:border-white/40 transition-all duration-700">
              <Link 
                href={`mailto:${email}`}
                className="absolute inset-0 z-0"
              />
              
              {/* Wax Seal Effect (Lotus Flower) */}
              <div className="absolute -top-10 -left-10 w-16 h-16 bg-[#FF1F00] rounded-full flex items-center justify-center shadow-lg transform -rotate-12 group-hover:scale-110 transition-transform z-10">
                <svg viewBox="0 0 100 100" className="w-8 h-8 fill-white">
                  {[...Array(8)].map((_, i) => (
                    <path key={i} d="M50 50 Q65 20 50 0 Q35 20 50 50" transform={`rotate(${i * 45} 50 50)`} />
                  ))}
                  <circle cx="50" cy="50" r="10" />
                </svg>
                <div className="absolute inset-1 border border-white/20 rounded-full border-dashed" />
              </div>

              <div className="mb-4 relative z-10">
                <span className="font-pixel text-[10px] text-white/40 uppercase tracking-[0.3em]">Direct_Access_Node</span>
              </div>
              
              <div className="relative z-10 flex flex-col items-center">
                <p className="text-xl md:text-2xl font-serif text-white mb-6 tracking-tight">
                  {email.split('@')[0]}@<span className="italic opacity-70">{email.split('@')[1]}</span>
                </p>

                <button 
                  onClick={copyEmail}
                  className="group/btn relative px-5 py-2 border border-white/20 hover:border-white/60 transition-all overflow-hidden"
                >
                  <div className="relative z-10 flex items-center space-x-3">
                    <span className="font-pixel text-[8px] text-white/60 uppercase tracking-widest">
                      {copied ? "Address_Copied" : "Copy_Address"}
                    </span>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/60 group-hover/btn:text-white transition-colors">
                      {copied ? (
                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round" />
                      ) : (
                        <>
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </>
                      )}
                    </svg>
                  </div>
                  <motion.div 
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    className="absolute inset-0 bg-white/10"
                  />
                </button>
              </div>
              
              {/* Animated Underline */}
              <div className="mt-10 w-24 h-px bg-white/20 relative overflow-hidden z-10">
                <motion.div 
                   animate={{ x: ['-100%', '100%'] }}
                   transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                   className="absolute inset-0 bg-white/80"
                />
              </div>
           </div>

           {/* Corner Brackets */}
           <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-white/20 group-hover:border-white/60 transition-colors" />
           <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-white/20 group-hover:border-white/60 transition-colors" />
        </motion.div>

        {/* Social Network Grid (Centered Flex) */}
        <div className="flex flex-wrap justify-center gap-12 md:gap-20 w-full max-w-4xl">
          {socials.map((social, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center"
            >
              <Link 
                href={social.href}
                className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white text-lg hover:bg-white hover:text-[#1B4332] transition-all duration-500 mb-4"
              >
                {social.icon}
              </Link>
              <span className="font-pixel text-[8px] text-white/40 uppercase tracking-[0.2em] mb-1">{social.detail}</span>
              <span className="font-serif text-sm text-white font-medium">{social.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Final Signature / Footer */}
        <div className="mt-40 pt-20 border-t border-white/10 w-full flex flex-col items-center">
           <div className="flex items-center space-x-4 mb-8">
              <div className="w-8 h-px bg-white/20"></div>
              <span className="font-serif italic text-white/40 text-sm italic tracking-widest">Designed & Engineered by the Artisan</span>
              <div className="w-8 h-px bg-white/20"></div>
           </div>
           <p className="font-pixel text-[9px] text-white/20 uppercase tracking-[0.5em]">
              All_Rights_Reserved / MMXXVI / SUTRADHAR_CORE
           </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
