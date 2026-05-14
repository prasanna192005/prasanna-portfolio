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

  return (
    <div className="min-h-screen w-full bg-[#FDFBF7] text-[#121212] font-sans selection:bg-[#FF1F00] selection:text-white overflow-x-hidden">
      <Navbar />

      <main className="relative">
        {/* Hero Section */}
        <div className="min-h-screen w-full flex flex-col items-center justify-center relative px-8 py-32 overflow-hidden">
          {/* Background ID Ghost */}
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-bold text-black/[0.03] pointer-events-none select-none uppercase">
            {project.id}
          </span>
          
          {/* Subtle Jaali Grid */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none jaali-grid scale-150 grayscale invert"></div>

          {/* Corner Accents */}
          <div className="absolute top-12 left-12 w-32 h-32 opacity-20 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-black stroke-[0.5]">
              <path d="M0 0 L100 0 M0 0 L0 100" />
              <circle cx="0" cy="0" r="4" className="fill-[#FF1F00] stroke-none" />
              <path d="M10 10 Q30 10 30 30" />
              <path d="M20 20 L40 40" strokeDasharray="2 2" />
            </svg>
          </div>
          <div className="absolute top-12 right-12 w-32 h-32 opacity-20 pointer-events-none scale-x-[-1]">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-black stroke-[0.5]">
              <path d="M0 0 L100 0 M0 0 L0 100" />
              <circle cx="0" cy="0" r="4" className="fill-[#FF1F00] stroke-none" />
              <path d="M10 10 Q30 10 30 30" />
              <path d="M20 20 L40 40" strokeDasharray="2 2" />
            </svg>
          </div>

          <div className="max-w-6xl w-full z-10 relative">
            {/* Mandala Watermark Behind Title */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] opacity-[0.04] pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-black stroke-[0.2]">
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

            <div className="flex flex-col items-start space-y-8 relative z-10">
              <div className="flex items-center space-x-6">
                <span className="font-pixel text-[11px] text-[#FF1F00] tracking-[0.3em] uppercase">{project.year} // SYSTEM_ID_{project.id}</span>
                <div className="w-16 h-px bg-black/10"></div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-[#FF1F00] animate-pulse"></div>
                  <span className="text-[10px] font-pixel text-black/40 uppercase tracking-widest">{project.category}</span>
                </div>
              </div>
              <h1 className="text-6xl md:text-9xl font-helvetica font-bold tracking-tighter uppercase leading-[0.85] text-[#121212]">
                {project.title}
              </h1>
            </div>

            {/* Technical Metadata Bar (Cream theme) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-32 pt-12 border-t border-black/10 relative z-10">
              <div>
                <span className="block text-[10px] font-pixel text-[#FF1F00] uppercase tracking-[0.3em] mb-4">Architecture</span>
                <span className="text-sm font-bold opacity-80 uppercase tracking-tight">Lead Engineering</span>
              </div>
              <div>
                <span className="block text-[10px] font-pixel text-[#FF1F00] uppercase tracking-[0.3em] mb-4">Timeframe</span>
                <span className="text-sm font-bold opacity-80 uppercase tracking-tight">6 Month Sprint</span>
              </div>
              <div>
                <span className="block text-[10px] font-pixel text-[#FF1F00] uppercase tracking-[0.3em] mb-4">Core Stack</span>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[9px] font-mono border border-black/20 px-2 py-0.5 rounded-sm opacity-60 text-black uppercase">{t}</span>
                  ))}
                </div>
              </div>
              <div>
                <span className="block text-[10px] font-pixel text-[#FF1F00] uppercase tracking-[0.3em] mb-4">Deployment</span>
                <div className="flex items-center space-x-2">
                   <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                   <span className="text-sm font-bold opacity-80 uppercase tracking-tight">Active Node</span>
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
               <svg width="48" height="48" viewBox="0 0 100 100" className="text-[#FF1F00]">
                  <path d="M50 10 Q70 50 50 90 Q30 50 50 10" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M10 50 Q50 70 90 50 Q50 30 10 50" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="50" cy="50" r="4" fill="currentColor" />
               </svg>
               <h2 className="text-3xl md:text-5xl font-helvetica font-bold tracking-tight uppercase">System Anatomy</h2>
            </div>
            
            <p className="text-xl md:text-4xl font-medium leading-[1.1] mb-20 opacity-90 tracking-tight">
              {project.longDesc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 border-t border-black/10 pt-16">
              <div className="space-y-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-[1px] bg-[#FF1F00]"></div>
                  <h3 className="font-pixel text-[10px] text-[#FF1F00] uppercase tracking-[0.4em]">Engineering Logic</h3>
                </div>
                <p className="text-base opacity-70 leading-relaxed font-medium">
                  The system was built with a focus on mathematical precision and high-concurrency stability. Every module follows a strict functional paradigm to ensure zero-latency performance in mission-critical environments.
                </p>
              </div>
              <div className="space-y-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-[1px] bg-[#FF1F00]"></div>
                  <h3 className="font-pixel text-[10px] text-[#FF1F00] uppercase tracking-[0.4em]">Aesthetic Precision</h3>
                </div>
                <p className="text-base opacity-70 leading-relaxed font-medium">
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
                <Link href={project.live} className="group flex items-center space-x-4 bg-[#FF1F00] text-white px-8 py-4 rounded-sm hover:translate-y-[-4px] transition-all shadow-lg">
                  <span className="text-[11px] font-pixel uppercase tracking-widest">Live Deployment</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"></path></svg>
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* Navigation Footer (Cream theme) */}
        <section className="py-32 px-8 bg-[#FFF5E1] border-t border-black/5">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
             <Link 
              href="/projects" 
              className="group flex flex-col items-start space-y-4 mb-12 md:mb-0"
            >
              <span className="text-[10px] font-pixel text-black/40 uppercase tracking-widest">Return to Index</span>
              <div className="flex items-center space-x-6">
                <div className="w-12 h-px bg-black/10 group-hover:w-20 transition-all"></div>
                <h4 className="text-3xl font-helvetica font-bold uppercase group-hover:text-[#FF1F00] transition-colors tracking-tighter">All Systems</h4>
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
