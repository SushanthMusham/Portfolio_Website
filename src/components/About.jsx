import { GraduationCap, Gamepad2, Trophy, Star, Medal, CheckCircle2, Circle, Lock } from 'lucide-react';
import sushanthImg from '../assets/sushanth.png';

export default function About() {
  return (
    <div className="bg-black py-24 sm:py-32 font-sans relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_15%_50%,rgba(6,182,212,0.1),transparent_25%)] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_85%_30%,rgba(168,85,247,0.1),transparent_25%)] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl flex items-center gap-3">
            About Me <span className="text-cyan-500 animate-pulse">.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Defining myself beyond the code editor.
          </p>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* BLOCK 1: BIO (Span 2 cols) */}
          <div className="md:col-span-2 bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center md:items-start group hover:border-cyan-500/30 transition-all">
             <div className="relative shrink-0">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity"></div>
                <img 
                  src={sushanthImg} 
                  alt="Sushanth" 
                  className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover border-2 border-white/10 shadow-2xl"
                />
             </div>
             <div>
                <h3 className="text-2xl font-bold text-white mb-2">Sushanth Musham</h3>
                
                {/* NEW: GLOWING BADGES */}
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="cursor-default px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs border border-cyan-500/20 font-mono transition-all duration-300 hover:bg-cyan-500 hover:text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] hover:border-cyan-400">
                    Level 21 Developer
                  </span>
                  <span className="cursor-default px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs border border-purple-500/20 font-mono transition-all duration-300 hover:bg-purple-500 hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] hover:border-purple-400">
                    IIT Bhubaneswar
                  </span>
                </div>

                <p className="text-gray-400 leading-relaxed text-sm">
                  I am a 3rd-year Electrical Engineering student passionate about <strong>High-Performance Backend Systems</strong> and <strong>Competitive Programming</strong>. 
                  When I'm not debugging race conditions, I'm analyzing game mechanics or strategizing in Clash Royale.
                </p>
             </div>
          </div>

          {/* BLOCK 2: ACHIEVEMENTS / STATS (Span 1 col) */}
          <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col justify-between group hover:border-yellow-500/30 transition-all">
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="text-yellow-400" size={24} />
              <h3 className="font-bold text-white">Unlockables</h3>
            </div>
            
            <div className="space-y-4">
              {/* Stat 1 */}
              <div className="flex justify-between items-center p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <span className="text-xs text-gray-400 uppercase tracking-wider">JEE Advanced</span>
                <span className="font-mono font-bold text-yellow-400">AIR 9641</span>
              </div>
              {/* Stat 2 */}
              <div className="flex justify-between items-center p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <span className="text-xs text-gray-400 uppercase tracking-wider">CGPA</span>
                <span className="font-mono font-bold text-emerald-400">8.04</span>
              </div>
              {/* Stat 3 */}
              <div className="flex justify-between items-center p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                 <div className="flex items-center gap-2">
                    <Star size={14} className="text-purple-400" />
                    <span className="text-xs text-gray-400 uppercase tracking-wider">CodeChef</span>
                 </div>
                <span className="font-mono font-bold text-white">2* Coder</span>
              </div>
            </div>
          </div>

          {/* BLOCK 3: ACADEMIC PROGRESS (Span 1 col) */}
          <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 relative overflow-hidden group hover:border-cyan-500/30 transition-all flex flex-col">
            
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
                <GraduationCap size={20} />
              </div>
              <h3 className="font-bold text-white">B.Tech Progress</h3>
            </div>

            {/* PROGRESS TRACKER */}
            <div className="relative z-10 flex-1 flex flex-col justify-center space-y-6 pl-2">
                
                {/* Connecting Line */}
                <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-cyan-500/50 to-gray-800"></div>

                {/* Year 1: Completed */}
                <div className="relative flex items-center gap-4 opacity-50 hover:opacity-100 transition-opacity">
                    <div className="relative z-10 bg-black p-1 rounded-full border border-cyan-500/50">
                        <CheckCircle2 size={16} className="text-cyan-500" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-cyan-400">1st Year</p>
                        <p className="text-[10px] text-gray-500">Foundation</p>
                    </div>
                </div>

                {/* Year 2: Completed */}
                <div className="relative flex items-center gap-4 opacity-50 hover:opacity-100 transition-opacity">
                    <div className="relative z-10 bg-black p-1 rounded-full border border-cyan-500/50">
                        <CheckCircle2 size={16} className="text-cyan-500" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-cyan-400">2nd Year</p>
                        <p className="text-[10px] text-gray-500">Core Engineering</p>
                    </div>
                </div>

                {/* Year 3: CURRENT (Pulsing) */}
                <div className="relative flex items-center gap-4">
                    <div className="relative z-10 bg-cyan-500/20 p-1 rounded-full border border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)] animate-pulse">
                        <Circle size={16} className="text-cyan-400 fill-cyan-400" />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-white">3rd Year</p>
                        <p className="text-[10px] text-cyan-200">Current Level</p>
                    </div>
                </div>

                {/* Year 4: Locked */}
                <div className="relative flex items-center gap-4 opacity-40">
                    <div className="relative z-10 bg-black p-1 rounded-full border border-gray-700">
                        <Lock size={16} className="text-gray-500" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-gray-500">4th Year</p>
                        <p className="text-[10px] text-gray-600">Locked</p>
                    </div>
                </div>

            </div>
          </div>

          {/* BLOCK 4: GAMING (Span 2 cols) */}
          <div className="md:col-span-2 bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 group hover:border-fuchsia-500/30 transition-all relative overflow-hidden">
             
             {/* Decorative Background */}
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
             <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-fuchsia-600/10 rounded-full blur-[80px]"></div>

             <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
                
                <div className="flex items-start gap-4">
                   <div className="p-3 bg-fuchsia-500/10 rounded-xl text-fuchsia-400 border border-fuchsia-500/20">
                      <Gamepad2 size={32} />
                   </div>
                   <div>
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        Competitive Gaming
                        <Medal size={16} className="text-yellow-500" />
                      </h3>
                      <p className="text-gray-400 text-sm mt-2 max-w-md">
                        7 Years of strategic gameplay. I treat gaming as a study in decision-making under pressure.
                      </p>
                   </div>
                </div>

                {/* GAMER STATS HUD */}
                <div className="w-full md:w-auto bg-black/40 rounded-xl p-4 border border-white/5 min-w-[280px]">
                   
                   {/* Clash Royale */}
                   <div className="mb-4">
                      <div className="flex justify-between text-xs mb-1">
                         <span className="text-gray-300 font-bold">Clash Royale</span>
                         <span className="text-yellow-400 font-mono">7160 🏆</span>
                      </div>
                      <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                         <div className="bg-yellow-400 h-full w-[80%] shadow-[0_0_10px_rgba(250,204,21,0.5)]"></div>
                      </div>
                      <p className="text-[10px] text-gray-500 mt-1 text-right">Ultimate Champion League</p>
                   </div>

                   {/* BGMI */}
                   <div className="flex items-center justify-between border-t border-white/10 pt-3">
                      <span className="text-gray-300 text-xs font-bold">BGMI</span>
                      <span className="px-2 py-0.5 bg-fuchsia-500/20 text-fuchsia-400 text-[10px] rounded border border-fuchsia-500/30 font-mono uppercase">
                        Ace Tier
                      </span>
                   </div>

                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  )
}