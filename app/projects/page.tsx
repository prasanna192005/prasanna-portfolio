import Link from "next/link";
import { projects } from "@/lib/projects";
import Navbar from "@/components/Navbar";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen w-full bg-[#FDFBF7] text-[#121212] font-sans selection:bg-[#FF1F00] selection:text-white">
      <Navbar />
      
      <main className="pt-40 pb-32 px-8 flex flex-col items-center">
        <div className="max-w-6xl w-full">
          {/* Header */}
          <div className="mb-24 flex flex-col items-center text-center relative">
            {/* Background Mandala Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] opacity-[0.03] pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-black stroke-[0.2]">
                <circle cx="50" cy="50" r="45" />
                <circle cx="50" cy="50" r="40" strokeDasharray="1 2" />
                {[...Array(12)].map((_, i) => (
                  <path key={i} d="M50 10 Q60 30 50 50 Q40 30 50 10" transform={`rotate(${i * 30} 50 50)`} />
                ))}
              </svg>
            </div>

            <span className="font-pixel text-[10px] text-[#FF1F00] uppercase tracking-[0.5em] mb-6 block relative z-10">Archive / Index</span>
            <h1 className="text-5xl md:text-8xl font-helvetica font-bold tracking-tighter uppercase relative z-10">All Systems</h1>
            <div className="w-32 h-1 bg-[#FF1F00] mt-8 relative z-10"></div>
          </div>

          {/* Projects List (Full Width Rows) */}
          <div className="space-y-4">
            {projects.map((project) => (
              <Link 
                key={project.id} 
                href={`/projects/${project.id}`}
                className="group block border-b border-black/10 py-12 hover:bg-black/5 transition-all px-4 relative overflow-hidden"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between relative z-10">
                  <div className="flex items-center space-x-8">
                    <span className="font-pixel text-[11px] text-[#FF1F00]">{project.id}</span>
                    <div>
                      <h2 className="text-3xl md:text-5xl font-helvetica font-bold uppercase group-hover:translate-x-4 transition-transform duration-500">{project.title}</h2>
                      <span className="text-[10px] font-pixel text-black/40 uppercase tracking-widest mt-2 block">{project.category}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 md:mt-0 flex items-center space-x-12">
                    <div className="hidden lg:block max-w-sm">
                      <p className="text-xs text-black/60 leading-relaxed font-medium">
                        {project.desc}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-black/40">{project.year}</span>
                    <div className="w-12 h-12 flex items-center justify-center border border-black/10 rounded-full group-hover:bg-black group-hover:text-white transition-all">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Technical Hover Reveal */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF1F00]/[0.02] to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-700 pointer-events-none"></div>
              </Link>
            ))}
          </div>

          {/* Footer Navigation */}
          <div className="mt-32 flex justify-center">
            <Link 
              href="/" 
              className="group flex flex-col items-center space-y-4"
            >
              <div className="flex items-center space-x-6">
                <div className="w-8 h-px bg-black/10 group-hover:w-16 transition-all"></div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:-rotate-180 transition-transform duration-700">
                   <path d="M12 2 Q14 8 20 12 Q14 16 12 22 Q10 16 4 12 Q10 8 12 2" />
                </svg>
                <div className="w-8 h-px bg-black/10 group-hover:w-16 transition-all"></div>
              </div>
              <span className="text-[11px] font-pixel text-black/60 uppercase tracking-[0.5em] group-hover:text-[#FF1F00] transition-all">Back to Command</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
