import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from './AnimatedText';
import { Shield, Target, Eye, Sparkles, Award, Users, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const values = [
    { title: 'Pragmatic Engineering', desc: 'We build technology that delivers measurable business outcomes, not unnecessary complexity.' },
    { title: 'Radical Transparency', desc: 'Clear communication, predictable timelines, and transparent pricing on every project.' },
    { title: 'Long-Term Partnership', desc: 'We support our clients through continuous product evolution and post-launch maintenance.' },
    { title: 'Craft & Precision', desc: 'Every line of code and user interface component is crafted with rigorous standards.' }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          tag="Company Profile"
          title="About Devixa Tech"
          highlightText="Devixa Tech"
          description="A modern digital solutions company built to help ambitious businesses navigate digital transformation with confidence."
        />

        {/* Main Positioning Block */}
        <div className="p-8 sm:p-12 rounded-3xl glass-card border border-white/10 mb-12 relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 mb-3 block">
              Our Identity
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-white tracking-tight leading-snug mb-6">
              "Devixa Tech is a digital solutions company focused on turning ideas into reliable, scalable and impactful digital products."
            </h3>
            <p className="text-base text-gray-300 leading-relaxed mb-6">
              We partner with local and international businesses across diverse industries to bridge the gap between high-level business vision and robust, production-ready digital execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-white/10">
            {/* Mission */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-heading font-bold text-white">Our Mission</h4>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                To empower growing and established enterprises with custom web architectures, intuitive user interfaces, and automated digital systems that accelerate revenue and operational efficiency.
              </p>
            </div>

            {/* Vision */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400">
                  <Eye className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-heading font-bold text-white">Our Vision</h4>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                To be the world's most trusted digital engineering and solutions partner for businesses seeking dependable innovation, modern design, and measurable return on technology investment.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all"
            >
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-400 mb-3">
                <CheckCircle2 className="w-4 h-4" />
                <span>Value 0{idx + 1}</span>
              </div>
              <h5 className="text-base font-heading font-bold text-white mb-2">
                {val.title}
              </h5>
              <p className="text-xs text-gray-400 leading-relaxed">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
