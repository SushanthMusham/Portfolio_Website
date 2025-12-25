import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Code2, Github, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If user scrolls down more than 50px, activate "scrolled" state
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed inset-x-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled ? "top-4" : "top-6"
        }`}
      >
        <nav 
          className={`mx-auto flex items-center justify-between transition-all duration-500 ease-in-out ${
            isScrolled 
              ? "max-w-xl bg-black/80 border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.3)] py-3 px-6 rounded-full backdrop-blur-xl border" 
              : "max-w-5xl bg-slate-900/40 border-white/10 py-4 px-8 rounded-2xl border backdrop-blur-md shadow-lg"
          }`}
        >
          
          {/* LOGO: Shrinks text on scroll to save space */}
          <div className="flex lg:flex-1">
            <Link to="/" className="flex items-center gap-2 group">
              <div className={`p-1.5 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 transition-transform duration-300 ${isScrolled ? "scale-90" : "scale-100"}`}>
                <Code2 className="text-white h-5 w-5" />
              </div>
              <span className={`font-bold text-white tracking-wide transition-all duration-500 overflow-hidden whitespace-nowrap ${
                isScrolled ? "w-0 opacity-0" : "w-auto opacity-100"
              }`}>
                Sushanth.dev
              </span>
            </Link>
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex lg:gap-x-8">
            {['About', 'Projects'].map((item) => (
              <Link 
                key={item} 
                to={`/${item.toLowerCase()}`} 
                className={`text-sm font-semibold transition-colors relative group ${
                  isScrolled ? "text-gray-300 hover:text-white" : "text-gray-300 hover:text-white"
                }`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* RIGHT ACTION (Github) */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
             <a href="https://github.com/SushanthMusham" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
               <Github size={20} className={`transition-all duration-300 ${isScrolled ? "scale-90" : "scale-100"}`} />
             </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
            >
              <Menu aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-slate-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 shadow-2xl border-l border-white/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                 <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-1.5 rounded-lg">
                    <Code2 className="text-white h-5 w-5" />
                 </div>
                 <span className="font-bold text-white">Sushanth.dev</span>
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-400 hover:text-white"
              >
                <X aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  {['About', 'Projects'].map((item) => (
                    <Link
                      key={item}
                      to={`/${item.toLowerCase()}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-white/5"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}