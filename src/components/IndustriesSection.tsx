import React from 'react';
import { motion } from 'motion/react';
import { INDUSTRIES_SERVED } from '../data/websiteData';
import { SectionHeading } from './AnimatedText';
import { 
  Building2, 
  ShoppingBag, 
  HeartPulse, 
  GraduationCap, 
  Home, 
  Landmark, 
  Utensils, 
  Rocket, 
  ArrowRight 
} from 'lucide-react';

interface IndustriesSectionProps {
  onStartProject: () => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onStartProject }) => {
  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-5 h-5 text-blue-400" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-fuchsia-400" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5 text-rose-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-sky-400" />;
      case 'Home':
        return <Home className="w-5 h-5 text-emerald-400" />;
      case 'Landmark':
        return <Landmark className="w-5 h-5 text-indigo-400" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5 text-amber-400" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-cyan-400" />;
      default:
        return <Building2 className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="solutions" className="py-24 relative overflow-hidden bg-[#0A0C10]/90 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          tag="Industry Domain Expertise"
          title="Industries We Serve"
          highlightText="Industries We Serve"
          description="Tailored digital strategies, regulatory compliance awareness, and domain-specific software solutions built for diverse market verticals."
        />

        {/* 8 Industries Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES_SERVED.map((ind, index) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-white/[0.04] group-hover:bg-blue-500/10 transition-colors">
                    {getIndustryIcon(ind.icon)}
                  </div>
                  <span className="text-[10px] font-mono text-gray-500 font-bold uppercase">
                    Sector
                  </span>
                </div>

                <h3 className="text-lg font-heading font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {ind.name}
                </h3>

                <p className="text-xs text-gray-400 leading-relaxed mb-4">
                  {ind.description}
                </p>
              </div>

              {/* Solution Focus Tags */}
              <div className="pt-4 border-t border-white/5 space-y-1.5">
                <div className="text-[10px] font-mono uppercase tracking-wider text-gray-500 font-semibold">
                  Solution Focus
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {ind.solutionFocus.map((focus, fIdx) => (
                    <span
                      key={fIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/[0.03] text-gray-300 border border-white/5"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
