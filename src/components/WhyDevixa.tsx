import React from 'react';
import { motion } from 'motion/react';
import { WHY_DEVIXA_POINTS } from '../data/websiteData';
import { SectionHeading } from './AnimatedText';
import { Target, Layers, Sliders, MessageSquare, Gauge, LifeBuoy } from 'lucide-react';

export const WhyDevixa: React.FC = () => {
  const getIcon = (number: string) => {
    switch (number) {
      case '01':
        return <Target className="w-5 h-5 text-blue-400" />;
      case '02':
        return <Layers className="w-5 h-5 text-sky-400" />;
      case '03':
        return <Sliders className="w-5 h-5 text-fuchsia-400" />;
      case '04':
        return <MessageSquare className="w-5 h-5 text-emerald-400" />;
      case '05':
        return <Gauge className="w-5 h-5 text-indigo-400" />;
      case '06':
        return <LifeBuoy className="w-5 h-5 text-cyan-400" />;
      default:
        return <Target className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="why-devixa" className="py-24 relative overflow-hidden bg-[#0A0B0E]/60 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          tag="Our Value Proposition"
          title="Why Businesses Choose Devixa Tech"
          highlightText="Devixa Tech"
          description="We combine engineering rigor, strategic business thinking, and transparent execution to deliver digital products that stand out and perform reliably."
        />

        {/* 6 Key Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_DEVIXA_POINTS.map((point, index) => (
            <motion.div
              key={point.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-300 relative overflow-hidden"
            >
              {/* Background ambient number watermark */}
              <span className="absolute top-4 right-6 text-5xl font-mono font-black text-white/[0.03] group-hover:text-blue-500/[0.08] transition-colors pointer-events-none">
                {point.number}
              </span>

              {/* Number and Icon Header */}
              <div className="flex items-center gap-3.5 mb-5">
                <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/5 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 transition-colors">
                  {getIcon(point.number)}
                </div>
                <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
                  {point.number} — Pillar
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
                {point.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
