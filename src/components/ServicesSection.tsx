import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SERVICES_DATA } from '../data/websiteData';
import { ServiceItem } from '../types';
import { SectionHeading } from './AnimatedText';
import { ServiceModal } from './ServiceModal';
import { Globe, Palette, Cpu, Bot, TrendingUp, ArrowUpRight, Check, Sparkles } from 'lucide-react';

interface ServicesSectionProps {
  onStartProjectForService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onStartProjectForService }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-6 h-6 text-blue-400" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-fuchsia-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-cyan-400" />;
      case 'Bot':
        return <Bot className="w-6 h-6 text-indigo-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-emerald-400" />;
      default:
        return <Globe className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeading
          tag="Core Capabilities"
          title="Engineered for Scalable Digital Growth"
          highlightText="Digital Growth"
          description="We deliver end-to-end digital solutions tailored to modern business requirements—from high-converting websites and custom software systems to automated AI workflows."
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative p-7 rounded-2xl glass-card border border-white/5 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/10"
            >
              {/* Card Header & Icon */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/5 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 transition-all duration-300">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-mono font-semibold tracking-wider text-gray-500 uppercase">
                    0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                {/* Sub-services tags */}
                <div className="space-y-2 mb-6">
                  {service.items.slice(0, 4).map((subItem, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center gap-2 text-xs text-gray-300 py-1 border-b border-white/[0.03]"
                    >
                      <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{subItem}</span>
                    </div>
                  ))}
                  {service.items.length > 4 && (
                    <div className="text-[11px] text-gray-500 font-medium pt-1">
                      + {service.items.length - 4} more specialized offerings
                    </div>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-semibold text-blue-400 group-hover:text-blue-300 flex items-center gap-1.5 transition-colors py-1"
                >
                  <span>Learn More</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <button
                  onClick={() => onStartProjectForService(service.title)}
                  className="text-[11px] text-gray-400 hover:text-white transition-colors"
                >
                  Inquire
                </button>
              </div>
            </motion.div>
          ))}

          {/* Bottom Card for Custom Enterprise Scope */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-7 rounded-2xl bg-gradient-to-br from-blue-900/30 via-[#0E131F] to-[#0A0D14] border border-blue-500/20 flex flex-col justify-between"
          >
            <div>
              <div className="p-3.5 rounded-xl bg-blue-500/20 text-blue-400 w-fit mb-5">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-2">
                Need a Custom Solution?
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                Have unique technical requirements or an enterprise-grade digital initiative? We build tailored end-to-end architectures to fit your exact operational needs.
              </p>
            </div>

            <button
              onClick={() => onStartProjectForService('Custom Architecture')}
              className="w-full py-3 rounded-xl bg-white text-gray-950 hover:bg-gray-200 font-bold text-sm transition-all text-center"
            >
              Discuss Custom Scope
            </button>
          </motion.div>
        </div>

      </div>

      {/* Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onStartProjectForService={onStartProjectForService}
      />
    </section>
  );
};
