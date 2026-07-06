"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ScrollChakra from "@/components/ScrollChakra";
import { motion } from "framer-motion";

export default function ResumePage() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  useEffect(() => {
    document.title = "Prasanna-Pandharikar-resume";
  }, []);



  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } else {
      setPhoneCopied(true);
      setTimeout(() => setPhoneCopied(false), 2000);
    }
  };

  // Technical skills arrays
  const languages = ["TypeScript", "JavaScript", "Java", "C++", "C", "SQL", "HTML/CSS"];
  const frameworks = ["Next.js", "React", "Node.js", "Express", "FastAPI", "TailwindCSS"];
  const tools = ["Firebase", "Firestore", "RTDB", "Git", "Docker", "Kubernetes", "AWS", "Prometheus", "Grafana", "OpenTelemetry", "Vercel Edge"];

  // Normalize check helper for tech hover linking
  const isTechMatch = (techA: string | null, techB: string) => {
    if (!techA) return false;
    const norm = (t: string) => t.toLowerCase().replace(/\.js$/, "").replace(/\s+/g, "").trim();
    const a = norm(techA);
    const b = norm(techB);
    return a === b || a.includes(b) || b.includes(a);
  };

  // Transition animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 110,
        damping: 15,
      },
    },
  };

  return (
    <div className="min-h-screen w-full bg-[#FDFBF7] text-black font-sans selection:bg-[#FF1F00] selection:text-white relative overflow-x-hidden pb-24">
      
      {/* Inject Overleaf / Jake's Resume style rules */}
      <style dangerouslySetInnerHTML={{ __html: `
        .jakes-serif,
        .jakes-serif button,
        .jakes-serif a,
        .jakes-serif span,
        .jakes-serif div,
        .jakes-serif li {
          font-family: "Times New Roman", Times, Baskerville, Georgia, serif !important;
        }
        .jakes-sc {
          font-variant: small-caps;
          letter-spacing: 0.05em;
        }
        .jakes-bullet {
          list-style-type: none;
          position: relative;
          padding-left: 15px;
        }
        .jakes-bullet::before {
          content: "\\2022"; /* Tiny bullet character matching LaTeX */
          position: absolute;
          left: 0;
          top: 0;
          font-size: 8px;
          line-height: 18px;
          color: black;
        }
         @media print {
          * {
            color: #000000 !important;
            text-shadow: none !important;
            box-shadow: none !important;
            -webkit-font-smoothing: antialiased !important;
            -moz-osx-font-smoothing: grayscale !important;
            text-rendering: optimizeLegibility !important;
          }
          html, body {
            background-color: white !important;
            color: #000000 !important;
            font-family: "Times New Roman", Times, Baskerville, Georgia, serif !important;
            margin: 0 !important;
            padding: 0 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          a {
            color: #000000 !important;
            text-decoration: none !important;
          }
          @page {
            size: letter;
            margin: 0.22in 0.35in;
          }
          .print-hidden {
            display: none !important;
          }
          .print-p-0 {
            padding: 0 !important;
            margin: 0 !important;
          }
          .print-shadow-none {
            box-shadow: none !important;
            min-height: auto !important;
            height: auto !important;
          }
          .print-border-none {
            border: none !important;
          }
          .print-w-full {
            width: 100% !important;
            max-width: 100% !important;
          }
          .print-highlight-none {
            background-color: transparent !important;
            color: #000000 !important;
            padding: 0 !important;
            font-weight: normal !important;
          }
          
          /* Tight compact layout strictly for print to guarantee a 1-page fit */
          .jakes-serif {
            font-size: 10px !important;
            line-height: 1.15 !important;
          }
          .jakes-bullet {
            font-size: 9.8px !important;
            padding-left: 10px !important;
            margin-bottom: 0.5px !important;
          }
          .jakes-bullet::before {
            font-size: 5px !important;
            line-height: 12px !important;
          }
          .mb-4 {
            margin-bottom: 5px !important;
          }
          .mb-2 {
            margin-bottom: 2px !important;
          }
          .mb-1 {
            margin-bottom: 1.5px !important;
          }
          .space-y-3 > :not([hidden]) ~ :not([hidden]) {
            margin-top: 3px !important;
          }
          .space-y-0.5 > :not([hidden]) ~ :not([hidden]) {
            margin-top: 0.5px !important;
          }
          h2 {
            font-size: 11px !important;
            margin-bottom: 1px !important;
            padding-bottom: 0.5px !important;
          }
        }
      ` }} />

      {/* Background/Margin Artwork (Traditional Sanskrit & Telemetry Elements) */}
      <div className="absolute inset-0 pointer-events-none print-hidden overflow-hidden z-0">
        {/* Subtle Khadi Paper Grain Overlay */}
        <div className="grain-overlay opacity-[0.08]" />

        {/* Subtle Jaali Lattice Grid */}
        <div className="absolute inset-0 opacity-[0.04] jaali-grid scale-125 grayscale invert" />

        {/* Top-Left Spinning Mandala */}
        <div className="absolute top-12 -left-24 w-96 h-96 opacity-[0.035]">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-black stroke-[0.25] animate-[spin_240s_linear_infinite]">
            <circle cx="50" cy="50" r="45" />
            <circle cx="50" cy="50" r="38" strokeDasharray="1 2" />
            {[...Array(12)].map((_, i) => (
              <path key={i} d="M50 10 Q60 30 50 50 Q40 30 50 10" transform={`rotate(${i * 30} 50 50)`} />
            ))}
            <circle cx="50" cy="50" r="12" />
          </svg>
        </div>

        {/* Bottom-Right Spinning Mandala */}
        <div className="absolute bottom-24 -right-32 w-120 h-120 opacity-[0.03]">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-black stroke-[0.2] animate-[spin_300s_linear_infinite]">
            <circle cx="50" cy="50" r="45" />
            <circle cx="50" cy="50" r="40" strokeDasharray="2 3" />
            {[...Array(18)].map((_, i) => (
              <path key={i} d="M50 5 Q62 25 50 50 Q38 25 50 5" transform={`rotate(${i * 20} 50 50)`} />
            ))}
            <circle cx="50" cy="50" r="15" />
          </svg>
        </div>

        {/* Large Faint Sanskrit Ghost Calligraphy in Margins */}
        <div className="absolute top-72 left-6 hidden xl:flex flex-col items-center space-y-4 opacity-[0.03] select-none">
          <span className="text-[6vw] font-bold whitespace-nowrap leading-none tracking-widest text-[#FF1F00]" style={{ writingMode: "vertical-rl" }}>
            कर्मयोग
          </span>
          <div className="h-20 w-px bg-linear-to-b from-[#FF1F00] to-transparent"></div>
        </div>

        <div className="absolute bottom-96 right-6 hidden xl:flex flex-col items-center space-y-4 opacity-[0.03] select-none">
          <div className="h-20 w-1px bg-linear-to-t from-[#FF1F00] to-transparent"></div>
          <span className="text-[6vw] font-bold whitespace-nowrap leading-none tracking-widest text-[#FF1F00]" style={{ writingMode: "vertical-rl" }}>
            पुरुषार्थ
          </span>
        </div>

        {/* Technical Corner Brackets / Telemetry Framing (Faint Red) */}
        <div className="absolute top-8 left-8 w-24 h-24 opacity-[0.07] border-t border-l border-[#FF1F00]"></div>
        <div className="absolute top-8 right-8 w-24 h-24 opacity-[0.07] border-t border-r border-[#FF1F00]"></div>
        <div className="absolute bottom-8 left-8 w-24 h-24 opacity-[0.07] border-b border-l border-[#FF1F00]"></div>
        <div className="absolute bottom-8 right-8 w-24 h-24 opacity-[0.07] border-b border-r border-[#FF1F00]"></div>
      </div>

      {/* Global Navbar */}
      <div className="print-hidden">
        <Navbar />
        <ScrollChakra />
      </div>

      {/* Main Resume Workspace */}
      <main className="pt-36 px-4 md:px-12 flex flex-col items-center print-p-0">
        
        {/* Floating Action Controls */}
        <div className="max-w-205 w-full flex flex-row justify-between items-center mb-6 print-hidden gap-4 relative z-10">
          <div className="flex items-center space-x-3">
            <Link 
              href="/"
              className="group flex items-center space-x-2 text-xs font-pixel uppercase tracking-widest text-[#121212]/60 hover:text-[#FF1F00] transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none stroke-2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              <span>Back</span>
            </Link>
            <span className="font-sans font-bold uppercase tracking-wider text-[8px] bg-[#BF360C]/10 text-[#BF360C] px-2 py-0.5 rounded border border-[#BF360C]/20 select-none">
              To Be Updated
            </span>
          </div>

          <a
            href="/Prasanna-Pandharikar-Resume.pdf"
            download="Prasanna-Pandharikar-Resume.pdf"
            className="group relative px-3 sm:px-6 py-1.5 sm:py-2 bg-[#BF360C] text-[#FDFBF7] border border-[#BF360C] flex items-center space-x-2 transition-all duration-300 shadow-md hover:shadow-lg hover:bg-black hover:border-black cursor-pointer"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none stroke-2 group-hover:scale-110 transition-transform">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span className="font-pixel text-[9px] uppercase tracking-widest font-bold">Download Resume</span>
          </a>
        </div>

        {/* LaTeX Letter Workspace Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
            className="jakes-serif max-w-205 w-full bg-white shadow-2xl p-5 sm:p-10 md:p-14 print-shadow-none print-border-none print-p-0 print-w-full min-h-262.5 flex flex-col justify-between text-black text-[13px] leading-relaxed relative z-10"
        >
          <div>
            {/* Heading Section */}
            <motion.header variants={itemVariants} className="text-center mb-4">
              <h1 className="text-3xl font-bold tracking-wide mb-1 text-black">
                Prasanna Pandharikar
              </h1>
              
              {/* Linked Metadata Line */}
              <div className="flex flex-wrap items-center justify-center gap-x-1.5 text-[12.5px] text-black">
                {/* Phone Link */}
                <span className="relative">
                  <button 
                    onClick={() => copyToClipboard("+91 8468845787", "phone")}
                    className="hover:text-[#FF1F00] transition-colors underline decoration-[#BF360C]/40 underline-offset-2 cursor-pointer font-serif"
                  >
                    +91 8468845787
                  </button>
                  {phoneCopied && (
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 bg-black text-white text-[10px] px-2 py-0.5 rounded font-mono shadow print:hidden z-10 whitespace-nowrap">
                      Copied!
                    </span>
                  )}
                </span>
                <span>|</span>

                {/* Email Link */}
                <span className="relative">
                  <button 
                    onClick={() => copyToClipboard("prasannapandharikar19@gmail.com", "email")}
                    className="hover:text-[#FF1F00] transition-colors underline decoration-[#BF360C]/40 underline-offset-2 cursor-pointer font-serif"
                  >
                    prasannapandharikar19@gmail.com
                  </button>
                  {emailCopied && (
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 bg-black text-white text-[10px] px-2 py-0.5 rounded font-mono shadow print:hidden z-10 whitespace-nowrap">
                      Copied!
                    </span>
                  )}
                </span>
                <span>|</span>

                {/* LinkedIn Link */}
                <a href="https://linkedin.com/in/prasanna-pandharikar" target="_blank" rel="noreferrer" className="hover:text-[#FF1F00] transition-colors underline underline-offset-2">
                  linkedin.com/in/prasanna-pandharikar
                </a>
                <span>|</span>

                {/* GitHub Link */}
                <a href="https://github.com/prasanna192005" target="_blank" rel="noreferrer" className="hover:text-[#FF1F00] transition-colors underline underline-offset-2">
                  github.com/prasanna192005
                </a>
              </div>
            </motion.header>

            {/* Education Section */}
            <motion.section variants={itemVariants} className="mb-4">
              <h2 className="text-sm font-bold jakes-sc text-black border-b border-black pb-0.5 mb-2">
                Education
              </h2>
              {/* resumeSubheading format */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline text-[13px] mb-0.5">
                <span className="font-bold">Sardar Patel Institute of Technology</span>
                <span className="text-gray-600 sm:text-black italic sm:not-italic">Mumbai, India</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline text-[12px] text-gray-800 italic">
                <span>B.Tech in Electronics &amp; Telecommunication (GPA: 8.34/10) | Minor in Computer Engineering</span>
                <span className="not-italic sm:italic text-gray-600 sm:text-gray-800">Aug. 2022 – May 2026</span>
              </div>
            </motion.section>

            {/* Experience Section */}
            <motion.section variants={itemVariants} className="mb-4">
              <h2 className="text-sm font-bold jakes-sc text-black border-b border-black pb-0.5 mb-2">
                Experience
              </h2>
              
              <div className="space-y-3">
                {/* Job 1 */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline text-[13px] mb-0.5">
                    <span className="font-bold">Machine Learning Intern</span>
                    <span className="text-gray-600 sm:text-black italic sm:not-italic">Jan. 2026 – Present</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline text-[12px] text-gray-800 italic mb-1">
                    <span>edept</span>
                    <span>Mumbai, India</span>
                  </div>
                  <ul className="space-y-0.5">
                    <li className="jakes-bullet text-[12.5px] text-[#222222]">Engineered an automated quiz generation pipeline utilizing LLMs to dynamically compile, validate, and serve custom STEM evaluations based on syllabus topics.</li>
                    <li className="jakes-bullet text-[12.5px] text-[#222222]">Architected an adaptive learning platform that processes real-time student performance telemetry to dynamically personalize study paths and index modular lessons.</li>
                    <li className="jakes-bullet text-[12.5px] text-[#222222]">Designed the Sophos Engine, a context-aware lecture script generator for professors that processes complete course syllabi to draft structured lesson material.</li>
                  </ul>
                </div>

                {/* Job 2 */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline text-[13px] mb-0.5">
                    <span className="font-bold">Hackathon Problem Setter &amp; Curriculum Designer</span>
                    <span className="text-gray-600 sm:text-black italic sm:not-italic">Aug. 2025 – Dec. 2025</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline text-[12px] text-gray-800 italic mb-1">
                    <span>edept</span>
                    <span>Mumbai, India</span>
                  </div>
                  <ul className="space-y-0.5">
                    <li className="jakes-bullet text-[12.5px] text-[#222222]">Designed DSA problem statements mapped to progressive skill belts, covering data structures, algorithms, and system-design challenges of varying difficulty.</li>
                    <li className="jakes-bullet text-[12.5px] text-[#222222]">Automated the end-to-end pipeline of pushing finalized problem statements to GitHub, syncing metadata to tracking sheets, and maintaining a live leaderboard dashboard.</li>
                    <li className="jakes-bullet text-[12.5px] text-[#222222]">Authored original, open-ended hackathon problem statements emphasizing real-world problem solving over pattern-matching, driving deeper critical thinking among participants.</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Projects Section */}
            <motion.section variants={itemVariants} className="mb-4">
              <h2 className="text-sm font-bold jakes-sc text-black border-b border-black pb-0.5 mb-2">
                Projects
              </h2>

              <div className="space-y-3">
                {/* Project 1 */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline text-[13px] mb-1 gap-1 sm:gap-0">
                    <div>
                      <span className="font-bold">ObservoAI</span>
                      <span className="text-[12.5px] text-black"> | </span>
                      <span className="italic text-[12px] text-gray-800 print-highlight-none">
                        {["FastAPI", "Python", "ML Anomaly Detection", "OpenTelemetry", "Next.js", "Prometheus", "Grafana"].map((tech, idx, arr) => (
                          <span key={tech}>
                            <span 
                              onMouseEnter={() => setHoveredTech(tech)}
                              onMouseLeave={() => setHoveredTech(null)}
                              className={`cursor-crosshair transition-colors duration-150 rounded px-0.5 ${
                                isTechMatch(hoveredTech, tech) ? "bg-[#BF360C]/15 text-[#BF360C] font-semibold" : ""
                              }`}
                            >
                              {tech}
                            </span>
                            {idx < arr.length - 1 ? ", " : ""}
                          </span>
                        ))}
                      </span>
                    </div>
                    <div className="flex items-center flex-wrap gap-x-1 text-[12px] text-gray-800">
                      <a href="https://github.com/prasanna192005/ObservoAI" target="_blank" rel="noreferrer" className="hover:text-[#FF1F00] transition-colors underline underline-offset-1">
                        Github
                      </a>
                      <span className="text-gray-400">|</span>
                      <a href="https://youtu.be/v2XaY78f0vQ" target="_blank" rel="noreferrer" className="hover:text-[#FF1F00] transition-colors underline underline-offset-1">
                        Demo
                      </a>
                      <span className="text-gray-400">|</span>
                      <span className="text-black text-[12.5px]">March 2025</span>
                    </div>
                  </div>
                  <ul className="space-y-0.5">
                    <li className="jakes-bullet text-[12.5px] text-[#222222]">Architected a high-throughput AI observability watchdog using OpenTelemetry to ingest and visualize 10K+ telemetry streams/sec under 250ms latency.</li>
                    <li className="jakes-bullet text-[12.5px] text-[#222222]">Designed a multi-model 3-tier ML anomaly detection pipeline (LSTM Autoencoders, Isolation Forests) with FastAPI, achieving 98.4% diagnostic precision.</li>
                    <li className="jakes-bullet text-[12.5px] text-[#222222]">Engineered a low-latency conversational AI voice agent allowing on-call engineers to verbally query real-time system state and trigger rollback scripts.</li>
                  </ul>
                </div>

                {/* Project 2 */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline text-[13px] mb-1 gap-1 sm:gap-0">
                    <div>
                      <span className="font-bold">AKSHAR</span>
                      <span className="text-[12.5px] text-black"> | </span>
                      <span className="italic text-[12px] text-gray-800 print-highlight-none">
                        {["Next.js", "Firebase", "TypeScript", "TailwindCSS", "Framer Motion"].map((tech, idx, arr) => (
                          <span key={tech}>
                            <span 
                              onMouseEnter={() => setHoveredTech(tech)}
                              onMouseLeave={() => setHoveredTech(null)}
                              className={`cursor-crosshair transition-colors duration-150 rounded px-0.5 ${
                                isTechMatch(hoveredTech, tech) ? "bg-[#BF360C]/15 text-[#BF360C] font-semibold" : ""
                              }`}
                            >
                              {tech}
                            </span>
                            {idx < arr.length - 1 ? ", " : ""}
                          </span>
                        ))}
                      </span>
                    </div>
                    <div className="flex items-center flex-wrap gap-x-1 text-[12px] text-gray-800">
                      <a href="https://github.com/prasanna192005/project-akshar" target="_blank" rel="noreferrer" className="hover:text-[#FF1F00] transition-colors underline underline-offset-1">
                        Github
                      </a>
                      <span className="text-gray-400">|</span>
                      <a href="https://playakshar.xyz" target="_blank" rel="noreferrer" className="hover:text-[#FF1F00] transition-colors underline underline-offset-1">
                        Live
                      </a>
                      <span className="text-gray-400">|</span>
                      <span className="text-black text-[12.5px]">Jan. 2026</span>
                    </div>
                  </div>
                  <ul className="space-y-0.5">
                    <li className="jakes-bullet text-[12.5px] text-[#222222]">Architected a high-concurrency multiplayer typing racer with sub-100ms state synchronization across concurrent player lobbies using distributed state machine loops.</li>
                    <li className="jakes-bullet text-[12.5px] text-[#222222]">Engineered a tactical capability engine featuring 8 unique Indian operatives with passive protocols and active sabotage payloads synced via atomic transitions.</li>
                    <li className="jakes-bullet text-[12.5px] text-[#222222]">Designed a server-stamped synchronization protocol using optimistic local progression to eliminate network jitter and resolve concurrent state race conditions.</li>
                  </ul>
                </div>

                {/* Project 3 */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline text-[13px] mb-1 gap-1 sm:gap-0">
                    <div>
                      <span className="font-bold">MyBuddy</span>
                      <span className="text-[12.5px] text-black"> | </span>
                      <span className="italic text-[12px] text-gray-800 print-highlight-none">
                        {["React", "Django REST API", "PostgreSQL", "LangChain", "RAG"].map((tech, idx, arr) => (
                          <span key={tech}>
                            <span 
                              onMouseEnter={() => setHoveredTech(tech)}
                              onMouseLeave={() => setHoveredTech(null)}
                              className={`cursor-crosshair transition-colors duration-150 rounded px-0.5 ${
                                isTechMatch(hoveredTech, tech) ? "bg-[#BF360C]/15 text-[#BF360C] font-semibold" : ""
                              }`}
                            >
                              {tech}
                            </span>
                            {idx < arr.length - 1 ? ", " : ""}
                          </span>
                        ))}
                      </span>
                    </div>
                    <div className="flex items-center flex-wrap gap-x-1 text-[12px] text-gray-800">
                      <a href="https://github.com/prasanna192005/My-Buddy" target="_blank" rel="noreferrer" className="hover:text-[#FF1F00] transition-colors underline underline-offset-1">
                        Github
                      </a>
                      <span className="text-gray-400">|</span>
                      <span className="text-black text-[12.5px]">May 2025</span>
                    </div>
                  </div>
                  <ul className="space-y-0.5">
                    <li className="jakes-bullet text-[12.5px] text-[#222222]">Engineered an interactive, multi-user AI study dashboard using LangChain and RAG to dynamically parse, chunk, and index academic reference material.</li>
                    <li className="jakes-bullet text-[12.5px] text-[#222222]">Architected a scalable Django REST API with PostgreSQL indexing to compile and distribute custom evaluations under high concurrent student loads.</li>
                    <li className="jakes-bullet text-[12.5px] text-[#222222]">Implemented an analytics dashboard with interactive metrics tracking student learning velocity and diagnostic weak-point reports.</li>
                  </ul>
                </div>

                {/* Project 4 */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline text-[13px] mb-1 gap-1 sm:gap-0">
                    <div>
                      <span className="font-bold">Anchor19</span>
                      <span className="text-[12.5px] text-black"> | </span>
                      <span className="italic text-[12px] text-gray-800 print-highlight-none">
                        {["Next.js", "Firestore", "Gemini API", "Google Drive API"].map((tech, idx, arr) => (
                          <span key={tech}>
                            <span 
                              onMouseEnter={() => setHoveredTech(tech)}
                              onMouseLeave={() => setHoveredTech(null)}
                              className={`cursor-crosshair transition-colors duration-150 rounded px-0.5 ${
                                isTechMatch(hoveredTech, tech) ? "bg-[#BF360C]/15 text-[#BF360C] font-semibold" : ""
                              }`}
                            >
                              {tech}
                            </span>
                            {idx < arr.length - 1 ? ", " : ""}
                          </span>
                        ))}
                      </span>
                    </div>
                    <div className="flex items-center flex-wrap gap-x-1 text-[12px] text-gray-800">
                      <a href="https://github.com/prasanna192005/anchor19" target="_blank" rel="noreferrer" className="hover:text-[#FF1F00] transition-colors underline underline-offset-1">
                        Github
                      </a>
                      <span className="text-gray-400">|</span>
                      <a href="https://anchor19.vercel.app" target="_blank" rel="noreferrer" className="hover:text-[#FF1F00] transition-colors underline underline-offset-1">
                        Live
                      </a>
                      <span className="text-gray-400">|</span>
                      <span className="text-black text-[12.5px]">March 2026</span>
                    </div>
                  </div>
                  <ul className="space-y-0.5">
                    <li className="jakes-bullet text-[12.5px] text-[#222222]">Designed an ultra-low-latency workspace command console syncing global client-server states under 40ms using reactive, batched Firestore cache syncing and atomic mutations.</li>
                    <li className="jakes-bullet text-[12.5px] text-[#222222]">Developed an in-memory NLP fuzzy search lexer implementing a multi-threaded Levenshtein distance matrix to compute character similarities across local indices with sub-5ms lookup times.</li>
                    <li className="jakes-bullet text-[12.5px] text-[#222222]">Built an asynchronous background indexing microservice that integrates Google Drive API webhooks to automatically parse, tokenize, and map nested document hierarchies.</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Leadership Experience Section */}
            <motion.section variants={itemVariants} className="mb-4">
              <h2 className="text-sm font-bold jakes-sc text-black border-b border-black pb-0.5 mb-2">
                Leadership Experience
              </h2>
              
              <div className="space-y-3">
                {/* Role 1 */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline text-[13px] mb-0.5">
                    <span className="font-bold">Technical Head</span>
                    <span className="text-gray-600 sm:text-black italic sm:not-italic">Sep. 2024 – Sep. 2025</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline text-[12px] text-gray-800 italic mb-1">
                    <span>WIE IEEE SPIT</span>
                    <span>Mumbai, India</span>
                  </div>
                  <ul className="space-y-0.5">
                    <li className="jakes-bullet text-[12.5px] text-[#222222]">Led technical initiatives and directed a developer team to organize hackathons and technical workshops for 150+ active participants.</li>
                    <li className="jakes-bullet text-[12.5px] text-[#222222]">Developed a dedicated event management web application to streamline registration, scheduling, and real-time announcements.</li>
                  </ul>
                </div>

                {/* Role 2 */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline text-[13px] mb-0.5">
                    <span className="font-bold">Head of Creatives</span>
                    <span className="text-gray-600 sm:text-black italic sm:not-italic">Sep. 2023 – Sep. 2024</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline text-[12px] text-gray-800 italic mb-1">
                    <span>Oculus S.P.I.T.</span>
                    <span>Mumbai, India</span>
                  </div>
                  <ul className="space-y-0.5">
                    <li className="jakes-bullet text-[12.5px] text-[#222222]">Directed the creative design division, managing the visual branding, promotional assets, and marketing layouts for Oculus SPIT.</li>
                    <li className="jakes-bullet text-[12.5px] text-[#222222]">Leveraged Adobe Illustrator and Photoshop to produce high-fidelity design assets, driving student engagement across digital channels.</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Achievements Section */}
            <motion.section variants={itemVariants} className="mb-4">
              <h2 className="text-sm font-bold jakes-sc text-black border-b border-black pb-0.5 mb-2">
                Achievements
              </h2>
              <ul className="space-y-0.5">
                <li className="jakes-bullet text-[12.5px] text-[#222222]">
                  <span className="font-bold">Winner</span>, Barclays Hack-O-Hire Hackathon 2025 (Developed ObservoAI, an AI-powered automated watchdog platform).
                </li>
              </ul>
            </motion.section>

            {/* Technical Skills Section */}
            <motion.section variants={itemVariants} className="mb-2">
              <h2 className="text-sm font-bold jakes-sc text-black border-b border-black pb-0.5 mb-2">
                Technical Skills
              </h2>
              {/* List layout matching leftmargin=0.15in */}
              <div className="pl-2 space-y-1 text-[12.5px] text-[#222222]">
                {/* Languages */}
                <div>
                  <span className="font-bold">Languages</span>:{" "}
                  <span className="print-highlight-none">
                    {languages.map((lang, idx, arr) => (
                      <span key={lang}>
                        <span 
                          onMouseEnter={() => setHoveredTech(lang)}
                          onMouseLeave={() => setHoveredTech(null)}
                          className={`cursor-crosshair transition-colors duration-150 rounded px-0.5 ${
                            isTechMatch(hoveredTech, lang) ? "bg-[#BF360C]/15 text-[#BF360C] font-semibold" : ""
                          }`}
                        >
                          {lang}
                        </span>
                        {idx < arr.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </span>
                </div>

                {/* Frameworks */}
                <div>
                  <span className="font-bold">Frameworks</span>:{" "}
                  <span className="print-highlight-none">
                    {frameworks.map((fw, idx, arr) => (
                      <span key={fw}>
                        <span 
                          onMouseEnter={() => setHoveredTech(fw)}
                          onMouseLeave={() => setHoveredTech(null)}
                          className={`cursor-crosshair transition-colors duration-150 rounded px-0.5 ${
                            isTechMatch(hoveredTech, fw) ? "bg-[#BF360C]/15 text-[#BF360C] font-semibold" : ""
                          }`}
                        >
                          {fw}
                        </span>
                        {idx < arr.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </span>
                </div>

                {/* Tools */}
                <div>
                  <span className="font-bold">Developer Tools</span>:{" "}
                  <span className="print-highlight-none">
                    {tools.map((tool, idx, arr) => (
                      <span key={tool}>
                        <span 
                          onMouseEnter={() => setHoveredTech(tool)}
                          onMouseLeave={() => setHoveredTech(null)}
                          className={`cursor-crosshair transition-colors duration-150 rounded px-0.5 ${
                            isTechMatch(hoveredTech, tool) ? "bg-[#BF360C]/15 text-[#BF360C] font-semibold" : ""
                          }`}
                        >
                          {tool}
                        </span>
                        {idx < arr.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </span>
                </div>
              </div>
            </motion.section>
          </div>

        </motion.div>
      </main>
    </div>
  );
}
