import { Code2, Activity, Globe, TrendingUp, ExternalLink, Github, Zap } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'FlashFlow - High-Concurrency Flash Sale Engine',
    href: '#', // TODO: Add Deployment Link
    github: '#', // TODO: Add GitHub Link
    // Points taken verbatim from resume [cite: 18, 19, 20, 21]
    points: [
      "Engineered a distributed backend system capable of handling 17,000+ requests/second with <6ms latency, simulating high-concurrency flash sale traffic (Zomato/Ticketmaster scale).",
      "Implemented Atomic Inventory Locking using Redis Lua Scripting, eliminating race conditions and ensuring zero over-selling across 89,000 concurrent requests.",
      "Designed an asynchronous settlement pipeline with RabbitMQ and Node.js Workers to decouple ingestion from persistence, preventing database crashes under load.",
      "Enforced ACID transactional integrity by persisting settled orders to PostgreSQL, ensuring 100% data consistency (Visa-grade reliability) even during high-traffic spikes."
    ],
    status: 'Live Demo',
    // Tech Stack from resume [cite: 22]
    tech: ['Node.js', 'Redis (Lua)', 'RabbitMQ', 'PostgreSQL', 'Docker Compose', 'Autocannon'],
    metric: '17k+ req/sec',
    icon: Zap,
    // AMBER THEME
    color: 'text-amber-400',
    glow: 'group-hover:shadow-amber-500/20 group-hover:border-amber-500/50',
    techGlow: 'hover:bg-amber-500/20 hover:shadow-[0_0_15px_rgba(251,191,36,0.6)] hover:border-amber-400',
  },
  {
    id: 2,
    title: 'Realtime Stock Market Trading Simulator',
    href: 'https://stock-sim-psi.vercel.app',
    github: 'https://github.com/SushanthMusham/stock-sim',
    // Points taken verbatim from resume [cite: 26, 27, 28, 29]
    points: [
      "Built a real-time Stock Market Trading Simulator with live price streaming using Socket.io, Node.js, and React.",
      "Designed a secure backend with Express + Prisma + PostgreSQL, implementing wallet management, buy/sell execution, portfolio tracking, and transaction validation.",
      "Developed an interactive UI with Tailwind + Vite, featuring a real-time market dashboard, holdings panel, and execution confirmation system.",
      "Deployed the full-stack application using Render (backend) and Vercel (frontend) ensuring seamless production stability."
    ],
    status: 'Live Demo',
    // Tech Stack from resume [cite: 30]
    tech: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Prisma', 'Tailwind', 'Vercel', 'Render'],
    metric: 'Live Streaming',
    icon: TrendingUp,
    // EMERALD THEME
    color: 'text-emerald-400',
    glow: 'group-hover:shadow-emerald-500/20 group-hover:border-emerald-500/50',
    techGlow: 'hover:bg-emerald-500/20 hover:shadow-[0_0_15px_rgba(52,211,153,0.6)] hover:border-emerald-400',
  },
  {
    id: 3,
    title: 'Realtime Collaborative Document Editor',
    href: 'https://realtime-editor-frontend-ashen.vercel.app',
    github: 'https://github.com/SushanthMusham/realtime-editor-frontend',
    // Points taken verbatim from resume [cite: 33, 34, 35, 39]
    points: [
      "Built and deployed a Google-Docs-style realtime collaborative text editor enabling multiple users to edit the same document simultaneously with instant live sync using Socket.io.",
      "Developed a scalable room-based WebSocket architecture, ensuring isolated collaboration per document and near-zero latency synchronization across clients.",
      "Integrated PostgreSQL (Neon) + Prisma ORM to persist document state, implemented fault-tolerant upsert logic, and handled edge cases like missing documents and DB conflicts.",
      "Successfully deployed backend on Render and frontend on Vercel, resolved deployment failures and environment configuration."
    ],
    status: 'Live Demo',
    // Tech Stack from resume [cite: 41]
    tech: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Prisma', 'Vercel', 'Render'],
    metric: 'Instant Sync',
    icon: Globe,
    // CYAN THEME
    color: 'text-cyan-400',
    glow: 'group-hover:shadow-cyan-500/20 group-hover:border-cyan-500/50',
    techGlow: 'hover:bg-cyan-500/20 hover:shadow-[0_0_15px_rgba(34,211,238,0.6)] hover:border-cyan-400',
  },
  {
    id: 4,
    title: 'Codeforces Tracker',
    href: 'https://cf-tracker-theta.vercel.app/login',
    github: 'https://github.com/SushanthMusham/cf-tracker',
    // Points taken verbatim from resume [cite: 44, 45, 47, 48]
    points: [
      "Developed a full-stack Codeforces Tracker web app that allows users to log in, connect their CF handle, and view rating history, max rating, current rating, and total problems solved.",
      "Built the backend using Node.js, Express.js, and MongoDB, implementing secure JWT authentication, protected routes, and middleware.",
      "Implemented smart caching with MongoDB to reduce external API calls by storing computed stats with refresh capability (6-hour cache expiration).",
      "Designed an interactive dashboard using React, Tailwind CSS, and Recharts, including rating trend lines and problem analytics."
    ],
    status: 'Live Demo',
    // Tech Stack from resume [cite: 51]
    tech: ['React', 'Tailwind CSS', 'Recharts', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'Render', 'Vercel'],
    metric: 'Smart Caching',
    icon: Activity,
    // PURPLE THEME
    color: 'text-fuchsia-400',
    glow: 'group-hover:shadow-fuchsia-500/20 group-hover:border-fuchsia-500/50',
    techGlow: 'hover:bg-fuchsia-500/20 hover:shadow-[0_0_15px_rgba(232,121,249,0.6)] hover:border-fuchsia-400',
  },
];

export default function Projects() {
  return (
    <div className="bg-black py-24 sm:py-32 font-sans relative">
      
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-900/10 rounded-full blur-[128px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[128px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="mx-auto max-w-2xl lg:mx-0 mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl flex items-center gap-3">
            Built Projects <Code2 className="text-cyan-500 animate-pulse drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Scalable backends, realtime systems, and data visualization.
          </p>
        </div>

        {/* GRID: Reverted to grid-cols-3 as requested */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project) => (
            <article 
              key={project.id} 
              className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-slate-900/50 backdrop-blur-md p-8 border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:bg-slate-900/80 ${project.glow}`}
            >
              {/* ICON & STATUS */}
              <div className="flex items-center justify-between mb-6">
                <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${project.color} group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon size={24} />
                </div>
                <div className="flex items-center gap-2">
                  <span className={`relative flex h-2 w-2`}>
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${project.status === 'Live Demo' ? 'bg-emerald-400' : 'bg-amber-400'}`}></span>
                    <span className={`relative inline-flex rounded-full h-2 w-2 ${project.status === 'Live Demo' ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
                  </span>
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">{project.status}</span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                  <a href={project.href} target="_blank" rel="noreferrer">
                    <span className="absolute inset-0" />
                    {project.title}
                  </a>
                </h3>
                
                {/* Render Bullet Points instead of single paragraph */}
                <ul className="mt-4 space-y-2">
                  {project.points.map((point, idx) => (
                    <li key={idx} className="text-sm leading-6 text-gray-400 font-light flex gap-2">
                      <span className={`mt-1.5 h-1.5 w-1.5 min-w-[6px] rounded-full ${project.color.replace('text-', 'bg-')}`}></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* TECH STACK */}
              <div className="mt-8 flex flex-wrap gap-2 relative z-20">
                {project.tech.map((t) => (
                  <span 
                    key={t} 
                    className={`px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-gray-300 cursor-default transition-all duration-300 ${project.techGlow}`}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* ACTION FOOTER */}
              <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
                
                {/* Metric Highlight */}
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider">Highlight</span>
                  <span className={`font-mono font-bold ${project.color}`}>{project.metric}</span>
                </div>

                {/* DUAL ACTION BUTTONS */}
                <div className="flex gap-3 relative z-20">
                  
                  {/* GitHub Button */}
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all border border-transparent hover:border-white/20"
                    title="View Source Code"
                  >
                    <Github size={20} />
                  </a>

                  {/* Live Demo Button */}
                  <a 
                    href={project.href} 
                    target="_blank" 
                    rel="noreferrer"
                    className={`p-2 rounded-lg text-black transition-all shadow-lg hover:scale-105 flex items-center gap-2 font-bold text-xs ${
                        project.color === 'text-cyan-400' ? 'bg-cyan-400 hover:bg-cyan-300' : 
                        project.color === 'text-fuchsia-400' ? 'bg-fuchsia-400 hover:bg-fuchsia-300' : 
                        project.color === 'text-amber-400' ? 'bg-amber-400 hover:bg-amber-300' :
                        'bg-emerald-400 hover:bg-emerald-300'
                    }`}
                    title="Open Live App"
                  >
                    <ExternalLink size={18} />
                  </a>
                  
                </div>
              </div>

            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
