import { Cpu, Globe, Database, Server, Code2, Terminal, Layers, Wifi } from 'lucide-react';

const skills = [
  { name: 'C++', category: 'Core', icon: Cpu, desc: 'High-performance computing & DSA' },
  { name: 'React', category: 'Frontend', icon: Globe, desc: 'Component-based UI architecture' },
  { name: 'Node.js', category: 'Backend', icon: Server, desc: 'Scalable network applications' },
  { name: 'Socket.io', category: 'Realtime', icon: Wifi, desc: 'Bidirectional event-based communication' },
  { name: 'PostgreSQL', category: 'Database', icon: Database, desc: 'Complex queries & relational data' },
  { name: 'Prisma', category: 'ORM', icon: Layers, desc: 'Type-safe database client' },
  { name: 'MongoDB', category: 'NoSQL', icon: Database, desc: 'Flexible document storage' },
  { name: 'Git & GitHub', category: 'DevOps', icon: Terminal, desc: 'Version control & collaboration' },
];

export default function TechStack() {
  return (
    <div className="bg-black py-24 sm:py-32 font-sans relative overflow-hidden">
      
      {/* Background Grid (Matches Hero) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        <div className="mx-auto max-w-2xl lg:mx-0 mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl flex items-center gap-3">
            My Arsenal <Code2 className="text-cyan-500 animate-pulse" />
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            The tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {skills.map((skill) => (
            <div 
              key={skill.name} 
              className="group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/5 rounded-lg text-cyan-400 group-hover:text-white group-hover:bg-cyan-500 transition-colors">
                    <skill.icon size={24} />
                  </div>
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest group-hover:text-cyan-400 transition-colors">
                    {skill.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
