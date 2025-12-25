import { Mail, Github, Linkedin, FileText, Terminal } from 'lucide-react';

// Make sure your resume is in the 'public' folder and named 'resume.pdf'
const resumeLink = "/resume.pdf"; 

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10 relative overflow-hidden font-sans">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* BRANDING */}
        <div className="text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
             <Terminal className="text-cyan-400" size={24} />
             <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 tracking-tight">
               Sushanth.dev
             </h2>
          </div>
          <p className="text-gray-400 text-sm">
            Building the future with code, caffeine, and C++.
          </p>
        </div>

        {/* SOCIAL ACTIONS */}
        <div className="flex gap-6">
          <a href="mailto:23ee01032@iitbbs.ac.in" className="group flex flex-col items-center gap-2 relative">
            <div className="p-3 rounded-full bg-white/5 text-gray-400 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
              <Mail size={20} />
            </div>
            <span className="text-[10px] text-cyan-400 font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-8 whitespace-nowrap">Email</span>
          </a>
          
          <a href="https://github.com/SushanthMusham" target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-2 relative">
            <div className="p-3 rounded-full bg-white/5 text-gray-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
              <Github size={20} />
            </div>
            <span className="text-[10px] text-purple-400 font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-8 whitespace-nowrap">GitHub</span>
          </a>

          <a href="#" className="group flex flex-col items-center gap-2 relative">
            <div className="p-3 rounded-full bg-white/5 text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <Linkedin size={20} />
            </div>
             <span className="text-[10px] text-blue-400 font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-8 whitespace-nowrap">LinkedIn</span>
          </a>

          {/* RESUME DOWNLOAD BUTTON */}
          <a 
            href={resumeLink} 
            download="Sushanth_Resume.pdf" 
            className="group flex flex-col items-center gap-2 relative"
          >
            <div className="p-3 rounded-full bg-white/5 text-gray-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
              <FileText size={20} />
            </div>
             <span className="text-[10px] text-emerald-400 font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-8 whitespace-nowrap">Resume</span>
          </a>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="text-center mt-12 text-xs text-gray-600 font-mono">
        © {new Date().getFullYear()} Sushanth Musham. All rights reserved.
      </div>
    </footer>
  )
}