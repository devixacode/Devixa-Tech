import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS_DATA } from '../data/websiteData';
import { SectionHeading } from './AnimatedText';
import { Quote, Star, Building, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-[#0A0C10]/60 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          tag="Client Stories"
          title="What Our Clients Say"
          highlightText="What Our Clients Say"
          description="Direct feedback from founders, product leaders, and executives who trust Devixa Tech with their critical digital systems."
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl glass-card border border-white/5 hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Rating stars and quote mark */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <div className="p-2 rounded-lg bg-white/[0.04] text-blue-400">
                    <Quote className="w-4 h-4" />
                  </div>
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-6 font-normal">
                  "{item.testimonial}"
                </p>
              </div>

              {/* Author & Verification Info */}
              <div className="pt-5 border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-sm font-heading font-bold text-white flex items-center gap-1.5">
                    <span>{item.clientName}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 inline" />
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5">
                    {item.position} • <span className="text-gray-300 font-medium">{item.company}</span>
                  </div>
                </div>

                <div className="text-right hidden sm:block">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 font-semibold bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/20">
                    {item.country}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Verified Notice */}
        <div className="mt-12 text-center text-xs text-gray-500 flex items-center justify-center gap-2 font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>Real Client Testimonials & Enterprise References Available Upon Request</span>
        </div>

      </div>
    </section>
  );
};
