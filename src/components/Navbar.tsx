import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DevixaLogo } from './DevixaLogo';
import { Menu, X, ArrowRight, PhoneCall, Sparkles } from 'lucide-react';

interface NavbarProps {
  onStartProject: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartProject, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0C10]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/40 py-3.5'
            : 'bg-transparent py-5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-2 group"
          >
            <DevixaLogo size="md" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-white/10 shadow-sm'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onStartProject}
              className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-blue-200" />
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onStartProject}
              className="px-3.5 py-1.5 rounded-full bg-blue-600 text-white text-xs font-semibold"
            >
              Start Project
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-40 p-4 bg-[#0B0C10]/95 backdrop-blur-2xl border-b border-white/10 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-2 py-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-4 py-3 rounded-xl text-base font-medium text-gray-200 hover:bg-white/5 hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-gray-500" />
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onStartProject();
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Start a Project</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
