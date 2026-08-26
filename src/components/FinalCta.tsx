import React from 'react';
import { motion } from 'motion/react';
import { WordReveal } from './AnimatedText';
import { CONTACT_INFO } from '../data/websiteData';
import { ArrowRight, MessageCircle, Mail, Phone, Calendar, Sparkles } from 'lucide-react';

interface FinalCtaProps {
  onStartProject: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onStartProject }) => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Card */}
        <div className="relative p-10 sm:p-16 md:p-20 rounded-3xl bg-gradient-to-br from-blue-950/80 via-[#0D121F] to-[#0A0C10] border border-blue-500/30 overflow-hidden shadow-2xl">
          
          {/* Ambient Glows */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-fuchsia-600/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400">
                Let's Collaborate
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              <WordReveal
                text="Have an Idea? Let's Build It."
                highlightWords={["Let's", "Build", "It."]}
                highlightClassName="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400"
              />
            </h2>

            {/* Supporting Text */}
            <p className="text-base sm:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
              Tell us what you're looking to build and our team will help turn your idea into a powerful digital solution.
            </p>

            {/* Primary Action Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <button
                onClick={onStartProject}
                className="w-full sm:w-auto px-10 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base transition-all duration-300 shadow-xl shadow-blue-600/40 hover:shadow-blue-500/60 hover:scale-[1.02] flex items-center justify-center gap-3"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Secondary Contact Options */}
            <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-300">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent("Hello Devixa Tech team! I would like to discuss a new digital project.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-emerald-500/10 hover:text-emerald-300 border border-white/5 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Us</span>
              </a>

              {/* Direct Email */}
              <a
                href={`mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent("Project Inquiry | Devixa Tech")}`}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-blue-500/10 hover:text-blue-300 border border-white/5 transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>Email Us</span>
              </a>

              {/* Book a Call */}
              <button
                onClick={onStartProject}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-indigo-500/10 hover:text-indigo-300 border border-white/5 transition-colors"
              >
                <Calendar className="w-4 h-4 text-indigo-400" />
                <span>Book a Discovery Call</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
