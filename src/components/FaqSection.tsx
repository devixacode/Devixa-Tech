import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_ITEMS } from '../data/websiteData';
import { SectionHeading } from './AnimatedText';
import { Plus, Minus, HelpCircle, MessageSquare } from 'lucide-react';

interface FaqSectionProps {
  onAskQuestion: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onAskQuestion }) => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          tag="Got Questions?"
          title="Frequently Asked Questions"
          highlightText="Frequently Asked Questions"
          description="Clear answers about our project pricing, timelines, collaboration process, and technical capabilities."
        />

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                  isOpen
                    ? 'bg-white/[0.04] border-blue-500/30 shadow-lg shadow-blue-600/5'
                    : 'bg-white/[0.02] border-white/5 hover:border-white/10'
                }`}
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-heading font-bold text-white leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`p-2 rounded-xl shrink-0 transition-all ${
                      isOpen
                        ? 'bg-blue-600 text-white rotate-180'
                        : 'bg-white/[0.04] text-gray-400'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-gray-300 leading-relaxed border-t border-white/[0.03]">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom prompt for more questions */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <div className="text-sm font-heading font-bold text-white">Have a specific question not listed here?</div>
            <div className="text-xs text-gray-400">Our engineering team is ready to discuss your specific requirements.</div>
          </div>
          <button
            onClick={onAskQuestion}
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all shadow-md shadow-blue-600/20 whitespace-nowrap"
          >
            Ask Devixa Team
          </button>
        </div>

      </div>
    </section>
  );
};
