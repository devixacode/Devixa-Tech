import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TECHNOLOGIES_DATA } from '../data/websiteData';
import { SectionHeading } from './AnimatedText';
import { Code2, Server, Database, PenTool, Bot, Cloud, Check } from 'lucide-react';

export const TechnologiesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend':
        return <Code2 className="w-4 h-4 text-blue-400" />;
      case 'Backend':
        return <Server className="w-4 h-4 text-sky-400" />;
      case 'Database':
        return <Database className="w-4 h-4 text-emerald-400" />;
      case 'Design':
        return <PenTool className="w-4 h-4 text-fuchsia-400" />;
      case 'AI & Automation':
        return <Bot className="w-4 h-4 text-indigo-400" />;
      case 'Cloud / Deployment':
        return <Cloud className="w-4 h-4 text-cyan-400" />;
      default:
        return <Code2 className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <section id="technologies" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          tag="Modern Tech Stack"
          title="Technologies We Build With"
          highlightText="Technologies"
          description="We select battle-tested, high-performance tools and modern frameworks to guarantee scalability, security, and velocity."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {TECHNOLOGIES_DATA.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeTab === idx
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-white/[0.03] text-gray-400 hover:text-white hover:bg-white/[0.07] border border-white/5'
              }`}
            >
              {getCategoryIcon(cat.category)}
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Active Technology Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {TECHNOLOGIES_DATA[activeTab].items.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="p-6 rounded-2xl glass-card border border-white/5 hover:border-blue-500/30 transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-heading font-bold text-white group-hover:text-blue-300 transition-colors">
                  {item.name}
                </h4>
                <div className="p-1.5 rounded-md bg-blue-500/10 text-blue-400">
                  <Check className="w-3.5 h-3.5" />
                </div>
              </div>

              <p className="text-xs text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
