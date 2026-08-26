import React, { useState } from 'react';
import { DevixaLogo } from './DevixaLogo';
import { CONTACT_INFO, SERVICES_DATA } from '../data/websiteData';
import { LegalModal } from './LegalModal';
import { Mail, Phone, MessageCircle, MapPin, ArrowUp, Linkedin, Facebook, Instagram, Github, Heart } from 'lucide-react';

interface FooterProps {
  onStartProject: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onStartProject }) => {
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
    <footer className="relative bg-[#07080B] text-gray-400 border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/5">
          
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="inline-block">
              <DevixaLogo size="lg" />
            </a>
            <p className="text-base text-gray-300 font-medium italic">
              "Digital Solutions for Modern Businesses."
            </p>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              We engineer scalable websites, high-conversion design systems, custom software architectures, and automated workflows that empower businesses worldwide.
            </p>

            <div className="pt-2">
              <button
                onClick={onStartProject}
                className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-600/30 transition-all"
              >
                Start a Project
              </button>
            </div>
          </div>

          {/* Company Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="hover:text-white transition-colors">
                  About Devixa
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={(e) => scrollToSection(e, '#portfolio')} className="hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#process" onClick={(e) => scrollToSection(e, '#process')} className="hover:text-white transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <a
                    href="#services"
                    onClick={(e) => scrollToSection(e, '#services')}
                    className="hover:text-white transition-colors"
                  >
                    {srv.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact & Social (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp Support
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-fuchsia-400 shrink-0" />
                <span>{CONTACT_INFO.location}</span>
              </li>
            </ul>

            <div className="pt-3">
              <div className="text-[11px] font-mono text-gray-500 uppercase mb-2">Social Channels</div>
              <div className="flex items-center gap-2">
                <a
                  href={CONTACT_INFO.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-gray-300 hover:text-white border border-white/5 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a
                  href={CONTACT_INFO.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-gray-300 hover:text-white border border-white/5 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-3.5 h-3.5" />
                </a>
                <a
                  href={CONTACT_INFO.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-gray-300 hover:text-white border border-white/5 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a
                  href={CONTACT_INFO.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-gray-300 hover:text-white border border-white/5 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} <strong className="text-gray-300">Devixa Tech</strong>. All rights reserved. Built with precision.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setLegalModalType('privacy')}
              className="hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setLegalModalType('terms')}
              className="hover:text-gray-300 transition-colors"
            >
              Terms & Conditions
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-gray-400 hover:text-white border border-white/5 transition-all flex items-center gap-1.5"
              aria-label="Back to top"
            >
              <span className="text-[10px] uppercase font-mono">Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Legal Dialog */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </footer>
  );
};
