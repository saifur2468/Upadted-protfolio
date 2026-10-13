import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Menu, X, ArrowUpRight } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const navItems = ['About', 'Skills', 'Projects', 'Education', 'Contact'];

  // Scroll handler to track background and active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Check which section is currently in view
      const sections = navItems.map((item) => item.toLowerCase());
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const targetId = id.toLowerCase();
    setActiveSection(targetId);
    setMenuOpen(false); // Close mobile menu first

    // Small timeout ensures mobile menu closes smoothly before scrolling
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 transition-all duration-300"
    >
      <div
        className={`mx-auto max-w-7xl rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'bg-zinc-950/90 backdrop-blur-md border border-zinc-800 shadow-xl py-3 px-6'
            : 'bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/30 py-4 px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 text-white group focus:outline-none cursor-pointer"
          >
            <div className="p-2 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 text-zinc-950 shadow-md">
              <Code2 className="size-5 font-bold" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
              Saifur<span className="text-emerald-400">.</span>
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-900/80 border border-zinc-800/60 rounded-full px-4 py-1.5">
            {navItems.map((item) => {
              const lowerItem = item.toLowerCase();
              const isActive = activeSection === lowerItem;

              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`relative px-4 py-1.5 text-sm font-medium transition-all duration-300 rounded-full cursor-pointer ${
                    isActive
                      ? 'text-emerald-400 font-semibold'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {item}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-emerald-500/10 rounded-full border border-emerald-500/30"
                      transition={{ type: 'spring', duration: 0.5 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTA Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-1.5 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-lg cursor-pointer"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="size-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle Icon */}
          <button
            className="md:hidden p-2 text-zinc-300 hover:text-white rounded-xl bg-zinc-900 border border-zinc-800 transition cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Animated Mobile Dropdown Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden pt-4 mt-3 border-t border-zinc-800/60"
            >
              <div className="flex flex-col gap-2 pb-3">
                {navItems.map((item) => {
                  const lowerItem = item.toLowerCase();
                  const isActive = activeSection === lowerItem;

                  return (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className={`flex items-center justify-between text-left px-4 py-2.5 rounded-xl transition-colors text-sm font-medium cursor-pointer ${
                        isActive
                          ? 'text-emerald-400 bg-zinc-900 border border-emerald-500/30'
                          : 'text-zinc-300 hover:text-white hover:bg-zinc-900/80'
                      }`}
                    >
                      <span>{item}</span>
                      <ArrowUpRight className="size-4 opacity-40" />
                    </button>
                  );
                })}
                
                {/* Mobile Hire Me Button */}
                <button
                  onClick={() => scrollToSection('contact')}
                  className="mt-2 w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-400 text-zinc-950 font-semibold text-sm shadow-md cursor-pointer"
                >
                  <span>Hire Me</span>
                  <ArrowUpRight className="size-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}