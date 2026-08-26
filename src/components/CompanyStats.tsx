import React from 'react';
import { motion } from 'motion/react';
import { COMPANY_STATS } from '../data/websiteData';
import { AnimatedCounter } from './AnimatedText';
import { CheckCircle, Globe2, Briefcase, Award } from 'lucide-react';

export const CompanyStats: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'projects':
        return <Briefcase className="w-5 h-5 text-blue-400" />;
      case 'clients':
        return <Globe2 className="w-5 h-5 text-sky-400" />;
      case 'solutions':
        return <CheckCircle className="w-5 h-5 text-fuchsia-400" />;
      case 'experience':
        return <Award className="w-5 h-5 text-indigo-400" />;
      default:
        return <CheckCircle className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section className="relative py-12 border-y border-white/5 bg-[#0D0F14]/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {COMPANY_STATS.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/20 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-white/[0.04] group-hover:bg-blue-500/10 transition-colors">
                  {getIcon(stat.id)}
                </div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-gray-500 font-bold">
                  Verified Data
                </span>
              </div>

              <div className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight mb-1 flex items-baseline gap-0.5">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>

              <div className="text-sm font-semibold text-gray-300">
                {stat.label}
              </div>

              <div className="text-xs text-gray-500 mt-1">
                {stat.note}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
