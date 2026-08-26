import React from 'react';
import { motion } from 'motion/react';
import { WordReveal } from './AnimatedText';
import { ArrowRight, Sparkles, Code2, Layers, Cpu, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

interface HeroProps {
  onStartProject: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onExploreWork }) => {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex items-center justify-center overflow-hidden">
      {/* Background ambient lighting effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-br from-blue-600/15 via-sky-500/10 to-indigo-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-fuchsia-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Content (Left 7 cols on desktop) */}
          <div className="lg:col-span-7 text-left">
            
            {/* Agency Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 backdrop-blur-md"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs uppercase tracking-widest font-bold text-blue-400">
                Premium Digital Agency & Software Engineering
              </span>
            </motion.div>

            {/* Main Headline with Animated Word Reveal */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-heading font-extrabold text-white tracking-tight leading-[1.08] mb-6">
              <WordReveal
                text="We Build Digital Solutions That Move Your Business Forward."
                highlightWords={['Digital', 'Solutions', 'Move', 'Forward.']}
                highlightClassName="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 italic font-serif"
                delay={0.02}
              />
            </h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed mb-10 font-normal"
            >
              From high-performance websites and custom software to UI/UX, automation and digital solutions, we help businesses turn ideas into powerful digital experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap items-center gap-4 sm:gap-5"
            >
              <button
                onClick={onStartProject}
                className="group px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base transition-all duration-300 shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-3"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreWork}
                className="px-8 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-white font-semibold text-base transition-all duration-300 backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
              >
                <span>Explore Our Work</span>
              </button>
            </motion.div>

            {/* Trust Highlights under Hero */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-4 sm:gap-6 pt-10 mt-10 border-t border-white/10 max-w-xl text-xs sm:text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Enterprise Grade</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Modern Tech Stack</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Guaranteed Support</span>
              </div>
            </motion.div>

          </div>

          {/* Right Visual Card / Interactive Agency Preview (Right 5 cols) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative p-6 sm:p-8 rounded-2xl glass-card border border-white/10 shadow-2xl overflow-hidden"
            >
              {/* Top Bar of the Interactive Showcase */}
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-xs font-mono text-gray-400 ml-2">devixatech.engine</span>
                </div>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Ready for Production
                </span>
              </div>

              {/* Core Feature Visuals */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-blue-500/30 transition-colors">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                        <Code2 className="w-4 h-4" />
                      </div>
                      <span className="font-semibold text-white text-sm">Full-Cycle Web & Software</span>
                    </div>
                    <span className="text-xs font-mono text-blue-400 font-semibold">99.9% Uptime</span>
                  </div>
                  <p className="text-xs text-gray-400 pl-9">
                    Scalable architectures, fast page speeds, and clean maintainable codebases.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-blue-500/30 transition-colors">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-fuchsia-500/10 text-fuchsia-400">
                        <Layers className="w-4 h-4" />
                      </div>
                      <span className="font-semibold text-white text-sm">Bespoke UI/UX Design</span>
                    </div>
                    <span className="text-xs font-mono text-fuchsia-400 font-semibold">High Conversion</span>
                  </div>
                  <p className="text-xs text-gray-400 pl-9">
                    Pixel-perfect component systems built for effortless user adoption.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-blue-500/30 transition-colors">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <span className="font-semibold text-white text-sm">AI & Business Automation</span>
                    </div>
                    <span className="text-xs font-mono text-cyan-400 font-semibold">Smart Workflows</span>
                  </div>
                  <p className="text-xs text-gray-400 pl-9">
                    Intelligent chatbots and custom pipelines that automate manual hours.
                  </p>
                </div>
              </div>

              {/* Bottom Project Metrics Ticker */}
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  <span>Available for Q1/Q2 Projects</span>
                </div>
                <button
                  onClick={onStartProject}
                  className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1"
                >
                  <span>Book Discovery</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
