"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const ContactSectionNew = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  
  // Form State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', contact: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const email = "prasannapandharikar19@gmail.com";
  const phone = "+91 8468845787";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', contact: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } else {
      setPhoneCopied(true);
      setTimeout(() => setPhoneCopied(false), 2000);
    }
  };

  const socials = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/prasanna-pandharikar/", label: "Professional_Network" },
    { name: "GitHub", href: "https://github.com/prasanna192005", label: "Open_Source" },
  ];

  return (
    <section id="contact" className="min-h-screen w-full flex flex-col items-center justify-center relative bg-[#2563EB] px-8 py-20 overflow-hidden">
      {/* Subtle Texture Layer */}
      <div className="absolute inset-0 opacity-10 pointer-events-none grain-overlay mix-blend-overlay" />
      
      {/* Dynamic Background Sanskrit - Large & Vertical */}
      <div className="absolute top-0 right-10 bottom-0 flex items-center overflow-hidden pointer-events-none select-none">
         <span className="text-[20vh] font-bold text-white/5 whitespace-nowrap rotate-90 leading-none">
            संपर्क संचार संवाद
         </span>
      </div>

      {/* Main Content Area: Split-Screen Layout */}
      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Header */}
        <div className="flex flex-col items-start lg:pt-10">
           <span className="text-[12px] text-white/60 font-medium tracking-[0.2em] mb-4 block">संपर्क संचार संवाद</span>
           <h2 className="text-[10vw] md:text-[6vw] lg:text-[5.5vw] font-serif tracking-tighter text-white leading-[0.9] mb-6">
              Let’s <span className="italic font-light opacity-60">Begin</span><br/>
              The <span className="italic font-light">Conversation</span>.
           </h2>
        </div>

        {/* Right Side: The Actionable Interface */}
        <div className="flex flex-col space-y-12 w-full lg:items-start lg:pt-20">
           
           {/* Direct Dispatch Card - Width Reduced & Shifted Down */}
           <div className="p-10 bg-white text-[#2563EB] shadow-2xl relative overflow-hidden w-full max-w-lg">
              <div className="relative z-10 space-y-8">
                 
                 {/* Email Entry */}
                 <div className="group/item flex items-center justify-between border-b border-[#2563EB]/10 pb-4">
                    <div className="flex flex-col">
                       <span className="font-pixel text-[8px] uppercase tracking-widest mb-1 opacity-40">EMAIL</span>
                       <h3 className="text-xl md:text-2xl font-serif tracking-tighter break-all">
                          {email}
                       </h3>
                    </div>
                    <button 
                      onClick={() => copyToClipboard(email, 'email')}
                      className="group/btn flex items-center space-x-3 text-[#2563EB]/40 hover:text-[#2563EB] transition-all duration-500"
                    >
                       <div className="flex flex-col items-end">
                          <span className="font-pixel text-[7px] uppercase tracking-widest group-hover/btn:opacity-100 opacity-0 transition-opacity">
                             {emailCopied ? "Confirmed" : "Capture"}
                          </span>
                       </div>
                       <div className="w-10 h-10 border border-[#2563EB]/10 flex items-center justify-center relative overflow-hidden group-hover/btn:border-[#2563EB]/40 transition-colors">
                          {emailCopied ? (
                            <motion.span 
                              initial={{ scale: 0 }} 
                              animate={{ scale: 1 }} 
                              className="text-[10px] font-bold"
                            >
                              ✓
                            </motion.span>
                          ) : (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="9" y="9" width="13" height="13" rx="1" ry="1"></rect>
                              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                            </svg>
                          )}
                          <div className="absolute inset-0 bg-[#2563EB]/5 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                       </div>
                    </button>
                 </div>

                 {/* Phone Entry */}
                 <div className="group/item flex items-center justify-between">
                    <div className="flex flex-col">
                       <span className="font-pixel text-[8px] uppercase tracking-widest mb-1 opacity-40">PHONE</span>
                       <h3 className="text-xl md:text-2xl font-serif tracking-tighter">
                          {phone}
                       </h3>
                    </div>
                    <button 
                      onClick={() => copyToClipboard(phone, 'phone')}
                      className="group/btn flex items-center space-x-3 text-[#2563EB]/40 hover:text-[#2563EB] transition-all duration-500"
                    >
                       <div className="flex flex-col items-end">
                          <span className="font-pixel text-[7px] uppercase tracking-widest group-hover/btn:opacity-100 opacity-0 transition-opacity">
                             {phoneCopied ? "Confirmed" : "Capture"}
                          </span>
                       </div>
                       <div className="w-10 h-10 border border-[#2563EB]/10 flex items-center justify-center relative overflow-hidden group-hover/btn:border-[#2563EB]/40 transition-colors">
                          {phoneCopied ? (
                            <motion.span 
                              initial={{ scale: 0 }} 
                              animate={{ scale: 1 }} 
                              className="text-[10px] font-bold"
                            >
                              ✓
                            </motion.span>
                          ) : (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="9" y="9" width="13" height="13" rx="1" ry="1"></rect>
                              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                            </svg>
                          )}
                          <div className="absolute inset-0 bg-[#2563EB]/5 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                       </div>
                    </button>
                 </div>

              </div>
              
              <div className="absolute top-4 right-6 font-pixel text-[8px] opacity-10 uppercase tracking-widest">
                 IND-THRES // DISPATCH
              </div>
           </div>

           {/* Social Ledger */}
           <div className="flex flex-col space-y-10 pl-2">
              <div className="grid grid-cols-2 gap-8">
                 {socials.map((social, i) => (
                    <Link 
                      key={i} 
                      href={social.href}
                      className="group/link flex flex-col items-start border-b border-white/10 pb-4 hover:border-white transition-all"
                    >
                       <span className="font-pixel text-[7px] text-white/30 uppercase tracking-widest mb-2 group-hover/link:text-white transition-colors">{social.label}</span>
                       <span className="text-xl font-serif text-white">{social.name}</span>
                    </Link>
                 ))}
              </div>
              
              {/* Secondary Metadata */}
              <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/10">
                 <div className="flex flex-col">
                    <span className="font-pixel text-[8px] text-white/30 uppercase tracking-widest mb-1">Operating_From</span>
                    <span className="text-white/60 font-serif text-xs">Pune, MH</span>
                 </div>
                 
                 <div className="flex flex-col border-l border-white/10 pl-8">
                    <span className="font-pixel text-[8px] text-white/30 uppercase tracking-widest mb-1">Send_Message</span>
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="text-white hover:text-white/80 transition-colors font-serif italic text-lg lg:text-xl underline decoration-white/40 underline-offset-4 text-left"
                    >
                      Want to send me a message? Click here.
                    </button>
                 </div>
              </div>
           </div>

        </div>

      </div>

      {/* Asset 2: Massive & On Top Layer per request */}
      <div className="absolute bottom-[-5%] left-[-5%] w-[300px] h-[300px] md:w-[450px] md:h-[450px] pointer-events-none z-50 overflow-visible">
         <motion.div 
           initial={{ y: 100, opacity: 1, rotate: -10 }}
           whileInView={{ y: 0, opacity: 1, rotate: 0 }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
           className="w-full h-full relative"
         >
            <Image 
              src="/Asset 2.svg" 
              alt="Indigo Artifact"
              fill
              className="object-contain object-bottom-left drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
            />
         </motion.div>
      </div>

      {/* Subtle Floating Signature */}
      <div className="absolute bottom-6 right-8 flex items-center space-x-4 text-white/20 hover:text-white/60 transition-colors z-20">
         <span className="font-pixel text-[8px] uppercase tracking-[0.4em]">Prasanna_P_Core</span>
         <div className="w-8 h-px bg-white/20" />
      </div>

      {/* Secondary Asset 2: Shifted to the Right Edge per request */}
      <div className="absolute top-[0%] right-[-16%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] pointer-events-none z-0">
         <motion.div 
           initial={{ x: 100, opacity: 1, rotate: -190 }}
           whileInView={{ x: 0, opacity: 1, rotate: -180 }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           className="w-full h-full relative"
         >
            <Image 
              src="/Asset 2.svg" 
              alt="Secondary Artifact"
              fill
              className="object-contain object-right"
            />
         </motion.div>
      </div>

      {/* Heritage Pattern Border: Flush with the bottom edge */}
      <div className="absolute bottom-0 left-0 w-full z-40">
         {/* Layer 1: Majestic Blue Cap */}
         <div className="h-1 w-full bg-[#2563EB] shadow-[0_-2px_10px_rgba(37,99,235,0.3)]" />
         
         {/* Layer 2: Vibrant Red Triangle Motif - Internal shift only */}
         <div className="h-6 w-full bg-[#D62238] relative z-10" 
              style={{ 
                backgroundImage: `linear-gradient(45deg, transparent 50%, #B91C1C 50%), linear-gradient(-45deg, transparent 50%, #B91C1C 50%)`,
                backgroundSize: '24px 24px',
                backgroundRepeat: 'repeat-x',
                marginTop: '-4px' // This shifts it up without affecting the bottom flow
              }} 
         />
         
         {/* Layer 3: Ornate Orange-Gold Band - Touching Bottom */}
         <div className="h-8 w-full bg-[#FFA502] flex items-center overflow-hidden">
            <div className="flex space-x-8 animate-marquee-slow whitespace-nowrap opacity-80">
               {[...Array(20)].map((_, i) => (
                  <div key={i} className="flex items-center space-x-6">
                     <div className="w-2 h-2 rounded-full bg-[#D62238]" />
                     <div className="w-8 h-2 rounded-full bg-[#D62238]" />
                     <div className="w-2 h-2 rounded-full bg-[#D62238]" />
                     <div className="w-2 h-2 rounded-full bg-[#D62238]" />
                     <div className="w-4 h-2 rounded-full bg-[#D62238]" />
                  </div>
               ))}
            </div>
         </div>
      </div>

      {/* Asset 11: Bottom Right Signature Anchor - Mirrored */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[200px] h-[200px] md:w-[300px] md:h-[300px] pointer-events-none z-50 overflow-visible">
         <motion.div 
           initial={{ x: 100, y: 100, opacity: 1, rotate: -15 }}
           whileInView={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
           transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
           className="w-full h-full relative"
         >
            <Image 
              src="/Asset 11.svg" 
              alt="Final Artifact"
              fill
              className="object-contain object-bottom-right scale-x-[-1] drop-shadow-[0_-20px_50px_rgba(0,0,0,0.2)]"
            />
         </motion.div>
      </div>

      {/* Dispatch Modal Overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="relative w-full max-w-md bg-[#2563EB] border border-white/20 p-8 shadow-2xl z-10"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              
              <h3 className="font-serif text-white text-3xl mb-8 tracking-tighter">Dispatch Terminal</h3>
              
              <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
                {/* Name */}
                <div className="flex flex-col relative group">
                   <label className="font-pixel text-[8px] uppercase tracking-widest text-white/40 mb-2">[01_IDENTIFIER]</label>
                   <input 
                     type="text" 
                     required
                     disabled={status === 'loading' || status === 'success'}
                     value={formData.name}
                     onChange={(e) => setFormData({...formData, name: e.target.value})}
                     className="bg-transparent border-b border-white/20 pb-2 text-white text-lg font-serif placeholder:text-white/20 focus:outline-none focus:border-white transition-colors disabled:opacity-50"
                     placeholder="Your Name"
                   />
                </div>

                {/* Contact Info */}
                <div className="flex flex-col relative group">
                   <label className="font-pixel text-[8px] uppercase tracking-widest text-white/40 mb-2">[02_CONTACT_NODE]</label>
                   <input 
                     type="text" 
                     required
                     disabled={status === 'loading' || status === 'success'}
                     value={formData.contact}
                     onChange={(e) => setFormData({...formData, contact: e.target.value})}
                     className="bg-transparent border-b border-white/20 pb-2 text-white text-lg font-serif placeholder:text-white/20 focus:outline-none focus:border-white transition-colors disabled:opacity-50"
                     placeholder="Email, phone, or a way to reach you back..."
                   />
                </div>

                {/* Message */}
                <div className="flex flex-col relative group">
                   <label className="font-pixel text-[8px] uppercase tracking-widest text-white/40 mb-2">[03_MANIFESTO]</label>
                   <textarea 
                     required
                     disabled={status === 'loading' || status === 'success'}
                     value={formData.message}
                     onChange={(e) => setFormData({...formData, message: e.target.value})}
                     className="bg-transparent border-b border-white/20 pb-2 text-white text-lg font-serif placeholder:text-white/20 focus:outline-none focus:border-white transition-colors min-h-[80px] resize-none disabled:opacity-50"
                     placeholder="Let's chat about a project, new tech, or just say hi! :)"
                   />
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className={`mt-4 py-3 px-6 border border-white/20 flex justify-between items-center transition-all duration-300 disabled:opacity-80 disabled:cursor-not-allowed ${status === 'success' ? 'bg-white text-[#2563EB]' : 'hover:bg-white/10 hover:border-white/40 text-white'}`}
                >
                  <span className="font-pixel text-[10px] uppercase tracking-widest">
                    {status === 'idle' && 'SEND MESSAGE'}
                    {status === 'loading' && 'SENDING...'}
                    {status === 'success' && 'MESSAGE SENT'}
                    {status === 'error' && 'FAILED TO SEND'}
                  </span>
                  
                  {status === 'success' ? (
                     <span className="font-bold ml-4">✓</span>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={`ml-4 ${status === 'loading' ? 'animate-spin' : ''}`}>
                      {status === 'loading' ? (
                        <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                      ) : (
                        <>
                          <line x1="22" y1="2" x2="11" y2="13"></line>
                          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </>
                      )}
                    </svg>
                  )}
                </button>
             </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default ContactSectionNew;
