import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Terminal, Cpu, Globe, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Full Stack Developer";

  // Typing Effect Logic
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length + 5) index = 0; // Loop effect
    }, 150);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-black selection:bg-cyan-500/30 overflow-x-hidden font-sans">
      
      {/* -------------------------------------------------- */}
      {/* BACKGROUND EFFECTS (Grid + Glows)                  */}
      {/* -------------------------------------------------- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Cyberpunk Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        {/* Spotlight Top Left */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]"></div>
        {/* Spotlight Bottom Right */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]"></div>
      </div>

      {/* -------------------------------------------------- */}
      {/* HERO CONTENT                                       */}
      {/* -------------------------------------------------- */}
      <div className="relative isolate px-6 pt-32 lg:px-8 min-h-screen flex items-center">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT COLUMN: Text */}
          <div className="text-left z-10">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-mono mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Available for Hire
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
              Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Sushanth</span>
            </h1>
            
            <div className="h-8 mb-6 flex items-center gap-2">
              <Terminal size={24} className="text-gray-500" />
              <span className="text-xl md:text-2xl font-mono text-gray-400">
                I am a <span className="text-white border-r-2 border-cyan-500 pr-1 animate-pulse">{text}</span>
              </span>
            </div>

            <p className="text-lg text-gray-400 leading-relaxed max-w-lg mb-10">
              Third-year student at <strong>IIT Bhubaneswar</strong>. I build scalable backend systems, interactive web apps, and high-performance code. 
              Always exploring new tech stacks.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="group relative px-6 py-3 rounded-lg bg-white text-black font-bold flex items-center gap-2 hover:bg-cyan-500 hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]"
              >
                View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/about"
                className="px-6 py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors flex items-center gap-2"
              >
                About Me
              </Link>
            </div>

            <div className="mt-12 flex gap-6 text-gray-500">
              <a href="https://github.com/SushanthMusham" className="hover:text-white transition-colors"><Github size={24}/></a>
              <a href="https://www.linkedin.com/in/sushanthmusham/" className="hover:text-[#0077b5] transition-colors"><Linkedin size={24}/></a>
              <a href="mailto:23ee01032@iitbbs.ac.in" className="hover:text-cyan-400 transition-colors"><Mail size={24}/></a>
            </div>
          </div>

          {/* RIGHT COLUMN: The "Code Window" Visual */}
          <div className="relative hidden lg:block perspective-1000 group">
            
            {/* Background Glow behind the card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-500 blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
            
            {/* The Code Card */}
            <div className="relative transform rotate-y-12 rotate-x-6 group-hover:rotate-0 transition-transform duration-700 ease-out">
              <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                
                {/* Window Controls */}
                <div className="bg-white/5 px-4 py-3 border-b border-white/5 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <div className="ml-4 text-xs text-gray-500 font-mono">user_profile.json</div>
                </div>

                {/* Code Content */}
                <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
                  <div className="text-gray-400">
                    <span className="text-purple-400">const</span> <span className="text-yellow-400">sushanth</span> <span className="text-white">=</span> <span className="text-white">{`{`}</span>
                  </div>
                  <div className="pl-6 text-gray-300">
                    <div>
                      <span className="text-cyan-400">university</span>: <span className="text-green-400">"IIT Bhubaneswar"</span>,
                    </div>
                    <div>
                      <span className="text-cyan-400">year</span>: <span className="text-orange-400">3</span>,
                    </div>
                    <div>
                      <span className="text-cyan-400">skills</span>: <span className="text-white">[</span>
                    </div>
                    <div className="pl-6">
                      <span className="text-green-400">"React"</span>, <span className="text-green-400">"Node.js"</span>, <span className="text-green-400">"C++"</span>, <span className="text-green-400">"PostgreSQL"</span>
                    </div>
                    <div className="text-white">],</div>
                    <div>
                      <span className="text-cyan-400">hardWorker</span>: <span className="text-purple-400">true</span>,
                    </div>
                    <div>
                      <span className="text-cyan-400">hobbies</span>: <span className="text-white">[</span><span className="text-green-400">"Gaming"</span>, <span className="text-green-400">"Coding"</span><span className="text-white">]</span>
                    </div>
                  </div>
                  <div className="text-white">{`};`}</div>
                  
                  {/* Blinking Cursor */}
                  <div className="mt-4 flex items-center gap-2 text-gray-500">
                    <span className="text-green-400">➜</span> 
                    <span>listening for opportunities...</span>
                    <span className="w-2 h-4 bg-gray-500 animate-pulse"></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Icons around the card */}
            <div className="absolute -top-10 -right-10 p-4 bg-slate-800 rounded-2xl shadow-xl animate-bounce border border-white/10 delay-100">
               <Cpu className="text-cyan-400" size={32} />
            </div>
            <div className="absolute -bottom-10 -left-10 p-4 bg-slate-800 rounded-2xl shadow-xl animate-bounce border border-white/10 delay-300">
               <Globe className="text-purple-400" size={32} />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}