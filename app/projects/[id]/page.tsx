import { projects } from "@/lib/projects";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { notFound } from "next/navigation";

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
    "01": "bg-[#C62828]",
    "02": "bg-[#1565C0]",
    "03": "bg-[#2E7D32]",
    "04": "bg-[#F57F17]",
  };
  const bgColor = bgColors[project.id] || "bg-[#C62828]";

  return (
    <div className="min-h-screen w-full bg-[#FDFBF7] text-[#121212] font-sans selection:bg-[#FF1F00] selection:text-white overflow-x-hidden">
      <Navbar />

      <main className="relative">
        {/* Hero Section (Royal Patrika Header) */}
        <div className={`min-h-[80vh] w-full flex flex-col items-center justify-center relative px-8 py-32 overflow-hidden ${bgColor} text-white`}>
          {/* Background ID Ghost */}
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-bold text-white/[0.04] pointer-events-none select-none uppercase">
            {project.id}
          </span>
          
          {/* Subtle Jaali Grid */}
          <div className="absolute inset-0 opacity-[0.1] pointer-events-none jaali-grid scale-150 grayscale invert"></div>

          {/* Temple Corner Brackets (Light Accents) */}
          <div className="absolute top-12 left-12 w-32 h-32 opacity-40 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-white stroke-[0.8]">
              <path d="M0 0 L100 0 M0 0 L0 100" />
              <circle cx="0" cy="0" r="4" className="fill-white stroke-none" />
              <path d="M10 10 Q30 10 30 30" />
              <path d="M20 20 L40 40" strokeDasharray="2 2" />
            </svg>
          </div>
          <div className="absolute top-12 right-12 w-32 h-32 opacity-40 pointer-events-none scale-x-[-1]">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-white stroke-[0.8]">
              <path d="M0 0 L100 0 M0 0 L0 100" />
              <circle cx="0" cy="0" r="4" className="fill-white stroke-none" />
              <path d="M10 10 Q30 10 30 30" />
              <path d="M20 20 L40 40" strokeDasharray="2 2" />
            </svg>
          </div>

          <div className="max-w-6xl w-full z-10 relative text-center flex flex-col items-center">
            {/* Hanging Lotus Bell */}
            <svg viewBox="0 0 20 60" className="absolute -top-32 left-1/2 -translate-x-1/2 w-8 h-24 stroke-white/40 fill-none">
              <line x1="10" y1="0" x2="10" y2="40" strokeWidth="0.5" strokeDasharray="2 2" />
              <path d="M2 40 Q10 55 18 40 Z" className="fill-white/40" stroke="none" />
              <circle cx="10" cy="58" r="1" className="fill-white" stroke="none" />
            </svg>

            {/* Mandala Watermark Behind Title */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] opacity-[0.08] pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-white stroke-[0.3]">
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
                <span className="font-pixel text-[11px] text-white/60 tracking-[0.3em] uppercase">{project.year} // SYSTEM_ID_{project.id}</span>
                <div className="w-16 h-px bg-white/20"></div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                  <span className="text-[10px] font-pixel text-white/60 uppercase tracking-widest">{project.category}</span>
                </div>
              </div>
              <h1 className="text-5xl md:text-9xl font-serif tracking-tight flex items-center justify-center gap-4">
                {project.title.split(' ')[0]} <span className="font-helvetica font-bold uppercase text-3xl md:text-7xl mt-1 md:mt-4 text-white/90">{project.title.split(' ').slice(1).join(' ')}</span>
              </h1>
            </div>

            {/* Technical Metadata Bar (White theme) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-32 pt-12 border-t border-white/20 relative z-10 w-full text-left">
              <div>
                <span className="block text-[10px] font-pixel text-white/60 uppercase tracking-[0.3em] mb-4">Architecture</span>
                <span className="text-sm font-bold uppercase tracking-tight">Lead Engineering</span>
              </div>
              <div>
                <span className="block text-[10px] font-pixel text-white/60 uppercase tracking-[0.3em] mb-4">Timeframe</span>
                <span className="text-sm font-bold uppercase tracking-tight">6 Month Sprint</span>
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
               <h2 className="text-3xl md:text-5xl font-serif tracking-tight uppercase">System <span className="font-helvetica font-bold text-[#FF1F00]">Anatomy</span></h2>
            </div>
            
            <p className="text-xl md:text-4xl font-serif italic leading-snug mb-20 opacity-90 tracking-tight">
              {project.longDesc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 border-t border-black/10 pt-16">
              <div className="space-y-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-[1px] bg-[#FF1F00]"></div>
                  <h3 className="font-pixel text-[10px] text-[#FF1F00] uppercase tracking-[0.4em]">Engineering Logic</h3>
                </div>
                <p className="text-base opacity-70 leading-relaxed font-serif">
                  The system was built with a focus on mathematical precision and high-concurrency stability. Every module follows a strict functional paradigm to ensure zero-latency performance in mission-critical environments.
                </p>
              </div>
              <div className="space-y-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-[1px] bg-[#FF1F00]"></div>
                  <h3 className="font-pixel text-[10px] text-[#FF1F00] uppercase tracking-[0.4em]">Aesthetic Precision</h3>
                </div>
                <p className="text-base opacity-70 leading-relaxed font-serif">
                  We integrated heritage motifs like the Jaali lattice as functional background textures, blending ancient symmetry with modern digital interfaces to create a unique "Technical-Indian" soul.
                </p>
              </div>
            </div>

            {/* External Links */}
            <div className="mt-32 flex flex-wrap gap-8">
              {project.url && (
                <Link href={project.url} className="group flex items-center space-x-4 border border-black/10 px-8 py-4 rounded-sm hover:bg-black hover:text-white transition-all">
                  <span className="text-[11px] font-pixel uppercase tracking-widest">Source Repository</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58V22"></path></svg>
                </Link>
              )}
              {project.live && (
                <Link href={project.live} className={`group flex items-center space-x-4 ${bgColor} text-white px-8 py-4 rounded-sm hover:translate-y-[-4px] transition-all shadow-lg`}>
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
