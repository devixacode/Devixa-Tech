import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROCESS_STAGES } from '../data/websiteData';
import { SectionHeading } from './AnimatedText';
import { Compass, Lightbulb, PenTool, Code, CheckSquare, Rocket, CheckCircle2, ChevronRight } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const getStageIcon = (step: string) => {
    switch (step) {
      case '01':
        return <Compass className="w-5 h-5 text-blue-400" />;
      case '02':
        return <Lightbulb className="w-5 h-5 text-sky-400" />;
      case '03':
        return <PenTool className="w-5 h-5 text-fuchsia-400" />;
      case '04':
        return <Code className="w-5 h-5 text-cyan-400" />;
      case '05':
        return <CheckSquare className="w-5 h-5 text-indigo-400" />;
      case '06':
        return <Rocket className="w-5 h-5 text-emerald-400" />;
      default:
        return <Compass className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-[#0A0B0E]/80 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          tag="Our Methodology"
          title="How We Work"
          highlightText="How We Work"
          description="A structured, transparent six-stage delivery model that ensures clear milestones, fast turnaround, and zero project surprises."
        />

        {/* Process Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PROCESS_STAGES.map((stage, index) => {
            const isHovered = activeStepIndex === index;
            return (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onMouseEnter={() => setActiveStepIndex(index)}
                className={`group p-8 rounded-2xl transition-all duration-300 relative border flex flex-col justify-between ${
                  isHovered
                    ? 'bg-white/[0.04] border-blue-500/40 shadow-xl shadow-blue-600/10 -translate-y-1'
                    : 'bg-white/[0.02] border-white/5 hover:border-white/10'
                }`}
              >
                <div>
                  {/* Top Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-white/[0.04] border border-white/5 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-colors">
                        {getStageIcon(stage.step)}
                      </div>
                      <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
                        Stage {stage.step}
                      </span>
                    </div>

                    <span className="text-3xl font-mono font-black text-white/10 group-hover:text-blue-500/20 transition-colors">
                      {stage.step}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
                    {stage.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    {stage.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="pt-5 border-t border-white/5">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-gray-500 font-bold mb-2">
                    Key Deliverables
                  </div>
                  <div className="space-y-1.5">
                    {stage.deliverables.map((deliv, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span className="truncate">{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
