import { projects } from "@/lib/projects";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { notFound } from "next/navigation";
import DynamicBackButton from "@/components/DynamicBackButton";

function renderHighlightedText(text: string) {
  if (!text) return "";
  
  const boldParts = text.split(/\*\*([^*]+)\*\*/g);
  
  return boldParts.map((boldPart, idx) => {
    if (idx % 2 === 1) {
      return <strong key={`b-${idx}`} className="font-semibold text-[#121212]">{boldPart}</strong>;
    }
    
    const underlineParts = boldPart.split(/__([^_]+)__/g);
    return underlineParts.map((part, uIdx) => {
      if (uIdx % 2 === 1) {
        return (
          <span 
            key={`u-${idx}-${uIdx}`} 
            className="underline decoration-[#FF1F00]/40 decoration-2 underline-offset-4 font-semibold text-black"
          >
            {part}
          </span>
        );
      }
      return part;
    });
  });
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  // Consistent Jewel Tones
  const bgColors: Record<string, string> = {
    "01": "bg-gradient-to-br from-[#8C1B1B] via-[#C62828] to-[#500C0C]",
    "02": "bg-gradient-to-br from-[#0D47A1] via-[#1565C0] to-[#0A2E66]",
    "03": "bg-gradient-to-br from-[#1B5E20] via-[#2E7D32] to-[#113B15]",
    "04": "bg-gradient-to-br from-[#D84315] via-[#E65100] to-[#8E2400]",
    "05": "bg-gradient-to-br from-[#004D40] via-[#00796B] to-[#00251A]",
    "06": "bg-gradient-to-br from-[#1A237E] via-[#3F51B5] to-[#0D1340]",
    "07": "bg-gradient-to-br from-[#4A148C] via-[#7B1FA2] to-[#250352]",
    "08": "bg-gradient-to-br from-[#1B5E20] via-[#00C853] to-[#072B0D]",
  };
  const bgColor = bgColors[project.id] || "bg-gradient-to-br from-[#8C1B1B] via-[#C62828] to-[#500C0C]";

  return (
    <div className="min-h-screen w-full bg-[#FDFBF7] text-[#121212] font-sans selection:bg-[#FF1F00] selection:text-white overflow-x-hidden">
      <Navbar />

      <DynamicBackButton href="/projects" label="Project Index" />

      <main className="relative">
        {/* Hero Section (Royal Patrika Header) */}
        <div className={`min-h-[85vh] w-full flex flex-col items-center justify-center relative px-8 py-32 overflow-hidden ${bgColor} text-white`}>
          {/* Elegant Gold Inset Border Margins */}
          <div className="absolute inset-6 md:inset-8 border border-[#FFE082]/15 pointer-events-none rounded-sm z-20"></div>

          {/* Background ID Ghost */}
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[45vw] font-bold text-white/[0.03] pointer-events-none select-none uppercase z-0 font-sans tracking-tighter">
            {project.id}
          </span>
          
          {/* Subtle Jaali Grid */}
          <div className="absolute inset-0 opacity-[0.07] pointer-events-none jaali-grid scale-150 grayscale invert z-0"></div>

          {/* Temple Corner Brackets (Light Gold Accents) */}
          <div className="absolute top-12 left-12 w-32 h-32 opacity-50 pointer-events-none z-10">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-[#FFE082] stroke-[0.8]">
              <path d="M0 0 L100 0 M0 0 L0 100" />
              <circle cx="0" cy="0" r="4" className="fill-[#FFE082] stroke-none" />
              <path d="M10 10 Q30 10 30 30" />
              <path d="M20 20 L40 40" strokeDasharray="2 2" />
            </svg>
          </div>
          <div className="absolute top-12 right-12 w-32 h-32 opacity-50 pointer-events-none scale-x-[-1] z-10">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-[#FFE082] stroke-[0.8]">
              <path d="M0 0 L100 0 M0 0 L0 100" />
              <circle cx="0" cy="0" r="4" className="fill-[#FFE082] stroke-none" />
              <path d="M10 10 Q30 10 30 30" />
              <path d="M20 20 L40 40" strokeDasharray="2 2" />
            </svg>
          </div>

          <div className="max-w-6xl w-full z-10 relative text-center flex flex-col items-center">
            {/* Hanging Lotus Bell (Gold) */}
            <svg viewBox="0 0 20 60" className="absolute -top-32 left-1/2 -translate-x-1/2 w-8 h-24 stroke-[#FFE082]/55 fill-none">
              <line x1="10" y1="0" x2="10" y2="40" strokeWidth="0.5" strokeDasharray="2 2" />
              <path d="M2 40 Q10 55 18 40 Z" className="fill-[#FFE082]/40" stroke="none" />
              <circle cx="10" cy="58" r="1" className="fill-[#FFE082]" stroke="none" />
            </svg>

            {/* Mandala Watermark Behind Title (Slowly Spinning Gold) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[850px] md:h-[850px] opacity-[0.06] pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-[#FFE082] stroke-[0.3] animate-[spin_240s_linear_infinite]">
                <circle cx="50" cy="50" r="45" />
                {[...Array(18)].map((_, i) => (
                  <path 
                    key={i} 
                    d="M50 5 Q55 25 50 45 Q45 25 50 5" 
                    transform={`rotate(${i * 20} 50 50)`} 
                  />
                ))}
              </svg>
            </div>

            <div className="flex flex-col items-center space-y-8 relative z-10">
              <div className="flex items-center space-x-6">
                <span className="font-pixel text-[11px] text-[#FFE082]/85 tracking-[0.3em] uppercase">{project.year} // SYSTEM_ID_{project.id}</span>
                <div className="w-16 h-px bg-white/20"></div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-[10px] font-pixel text-white/70 uppercase tracking-widest">{project.category}</span>
                </div>
              </div>
              <h1 className="text-5xl md:text-9xl font-serif tracking-tight flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)]">
                <span>{project.title.split(' ')[0]}</span>
                {project.title.split(' ').slice(1).length > 0 && (
                  <span className="font-helvetica font-bold uppercase text-3xl md:text-7xl mt-1 md:mt-4 text-[#FFE082] tracking-wider drop-shadow-none">
                    {project.title.split(' ').slice(1).join(' ')}
                  </span>
                )}
              </h1>

              {/* Top Header Action Links (Premium Gold Glassmorphism) */}
              <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
                {project.url && (
                  <Link 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/15 px-5 py-2.5 rounded-sm text-[10px] font-pixel uppercase tracking-widest hover:bg-[#FFE082] hover:text-black hover:border-[#FFE082] hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58V22"></path></svg>
                    <span>Repository</span>
                  </Link>
                )}
                {project.demo && (
                  <Link 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/15 px-5 py-2.5 rounded-sm text-[10px] font-pixel uppercase tracking-widest hover:bg-[#FFE082] hover:text-black hover:border-[#FFE082] hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3" fill="currentColor"></polygon>
                    </svg>
                    <span>Watch Demo</span>
                  </Link>
                )}
                {project.live && (
                  <Link 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/15 px-5 py-2.5 rounded-sm text-[10px] font-pixel uppercase tracking-widest hover:bg-[#FFE082] hover:text-black hover:border-[#FFE082] hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"></path></svg>
                    <span>Live Site</span>
                  </Link>
                )}
              </div>
            </div>

            {/* Technical Metadata Bar (White theme) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-32 pt-12 border-t border-white/20 relative z-10 w-full text-left">
              <div>
                <span className="block text-[10px] font-pixel text-white/60 uppercase tracking-[0.3em] mb-4">Architecture</span>
                <span className="text-sm font-bold uppercase tracking-tight">{project.role || "Lead Engineering"}</span>
              </div>
              <div>
                <span className="block text-[10px] font-pixel text-white/60 uppercase tracking-[0.3em] mb-4">Timeframe</span>
                <span className="text-sm font-bold uppercase tracking-tight">{project.timeframe || "6 Month Sprint"}</span>
              </div>
              <div>
                <span className="block text-[10px] font-pixel text-white/60 uppercase tracking-[0.3em] mb-4">Core Stack</span>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[9px] font-mono border border-white/20 px-2 py-0.5 rounded-sm opacity-80 text-white uppercase">{t}</span>
                  ))}
                </div>
              </div>
              <div>
                <span className="block text-[10px] font-pixel text-white/60 uppercase tracking-[0.3em] mb-4">Deployment</span>
                <div className="flex items-center space-x-2">
                   <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                   <span className="text-sm font-bold uppercase tracking-tight">Active Node</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section (Refined Indian Detail) */}
        <section className="py-40 px-8 bg-white text-[#121212] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/5 to-transparent"></div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="flex items-center space-x-8 mb-16">
               {/* Decorative Indian Flower */}
               <svg width="48" height="48" viewBox="0 0 100 100" className="text-[#FF1F00]">
                  {[...Array(8)].map((_, i) => (
                    <path key={i} d="M50 50 Q65 20 50 0 Q35 20 50 50" fill="currentColor" transform={`rotate(${i * 45} 50 50)`} />
                  ))}
                  <circle cx="50" cy="50" r="15" fill="white" />
                  <circle cx="50" cy="50" r="5" fill="currentColor" />
               </svg>
               <h2 className="text-3xl md:text-5xl font-serif tracking-tight uppercase">Technical <span className="font-helvetica font-bold text-[#FF1F00]">Breakdown</span></h2>
            </div>
            
            <p className="text-lg md:text-2xl font-sans leading-relaxed text-[#121212]/80 mb-20 tracking-wide font-normal">
              {renderHighlightedText(project.longDesc)}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 border-t border-black/10 pt-16">
              <div className="space-y-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-[1px] bg-[#FF1F00]"></div>
                  <h3 className="font-pixel text-[10px] text-[#FF1F00] uppercase tracking-[0.4em]">Engineering Logic</h3>
                </div>
                <p className="text-base opacity-70 leading-relaxed font-sans">
                  {renderHighlightedText(project.logicDesc || "The system was built with a focus on mathematical precision and high-concurrency stability. Every module follows a strict functional paradigm to ensure zero-latency performance in mission-critical environments.")}
                </p>
              </div>
              <div className="space-y-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-[1px] bg-[#FF1F00]"></div>
                  <h3 className="font-pixel text-[10px] text-[#FF1F00] uppercase tracking-[0.4em]">Aesthetic Precision</h3>
                </div>
                <p className="text-base opacity-70 leading-relaxed font-sans">
                  {renderHighlightedText(project.aestheticDesc || "We integrated heritage motifs like the Jaali lattice as functional background textures, blending ancient symmetry with modern digital interfaces to create a unique \"Technical-Indian\" soul.")}
                </p>
              </div>
            </div>


            {/* Dynamic Features List */}
            {project.features && project.features.length > 0 && (
              <div className="mt-24 border-t border-black/10 pt-16 space-y-12">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-[1px] bg-[#FF1F00]"></div>
                  <h3 className="font-pixel text-[10px] text-[#FF1F00] uppercase tracking-[0.4em]">Technical Features & Superpowers</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {project.features.map((feature, idx) => {
                    const colonIndex = feature.indexOf(":");
                    if (colonIndex !== -1) {
                      const title = feature.substring(0, colonIndex);
                      const body = feature.substring(colonIndex + 1);
                      return (
                        <div key={idx} className="flex gap-4 items-start p-6 bg-[#FDFBF7] border border-black/[0.05] rounded-sm hover:border-[#FF1F00]/20 transition-all duration-300">
                          <span className="font-mono text-xs text-[#FF1F00] font-bold">[{String(idx + 1).padStart(2, '0')}]</span>
                          <p className="text-sm font-sans leading-relaxed text-[#121212]/80">
                            <strong className="text-[#121212] font-semibold underline decoration-[#FF1F00]/30 underline-offset-4">{title}</strong>: {renderHighlightedText(body)}
                          </p>
                        </div>
                      );
                    }
                    return (
                      <div key={idx} className="flex gap-4 items-start p-6 bg-[#FDFBF7] border border-black/[0.05] rounded-sm hover:border-[#FF1F00]/20 transition-all duration-300">
                        <span className="font-mono text-xs text-[#FF1F00] font-bold">[{String(idx + 1).padStart(2, '0')}]</span>
                        <p className="text-sm font-sans leading-relaxed text-[#121212]/80">{renderHighlightedText(feature)}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* External Links */}
            <div className="mt-32 flex flex-wrap gap-8">
              {project.url && (
                <Link href={project.url} target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-4 border border-black/10 px-8 py-4 rounded-sm hover:bg-black hover:text-white transition-all">
                  <span className="text-[11px] font-pixel uppercase tracking-widest">Source Repository</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58V22"></path></svg>
                </Link>
              )}
              {project.demo && (
                <Link href={project.demo} target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-4 border border-[#FF1F00] px-8 py-4 rounded-sm bg-[#FF1F00]/5 text-[#FF1F00] hover:bg-[#FF1F00] hover:text-white transition-all shadow-sm">
                  <span className="text-[11px] font-pixel uppercase tracking-widest">Watch Demo Video</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3" fill="currentColor"></polygon>
                  </svg>
                </Link>
              )}
              {project.live && (
                <Link href={project.live} target="_blank" rel="noopener noreferrer" className={`group flex items-center space-x-4 ${bgColor} text-white px-8 py-4 rounded-sm hover:translate-y-[-4px] transition-all shadow-lg`}>
                  <span className="text-[11px] font-pixel uppercase tracking-widest">Live Deployment</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"></path></svg>
                </Link>
              )}
            </div>

          </div>
        </section>

        {/* Navigation Footer (Patrika Cream theme) */}
        <section className="py-32 px-8 bg-[#FDFBF7] border-t border-black/5">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
             <Link 
              href="/projects" 
              className="group flex flex-col items-start space-y-4 mb-12 md:mb-0"
            >
              <span className="text-[10px] font-pixel text-black/40 uppercase tracking-widest">Return to Index</span>
              <div className="flex items-center space-x-6">
                <div className="w-12 h-px bg-black/10 group-hover:w-20 transition-all"></div>
                <h4 className="text-3xl font-serif tracking-tight group-hover:text-[#FF1F00] transition-colors">Project <span className="font-helvetica font-bold uppercase text-2xl">Index</span></h4>
              </div>
            </Link>

            <div className="flex flex-col items-center md:items-end space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-[10px] font-pixel text-black/40 uppercase tracking-[0.4em]">System Online</span>
              </div>
              <Link 
                href="/" 
                className="bg-[#121212] text-white px-12 py-5 font-bold text-sm hover:translate-y-[-4px] transition-all shadow-2xl flex items-center space-x-6 uppercase tracking-widest"
              >
                <span>Navigate Home</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                   <path d="M3 12h18M15 18l6-6-6-6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
