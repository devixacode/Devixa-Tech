import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CaseStudy } from '../types';
import { X, ArrowRight, CheckCircle2, TrendingUp, Cpu, Calendar, Building, Sparkles } from 'lucide-react';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onStartSimilarProject: (title: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  onStartSimilarProject
}) => {
  if (!caseStudy) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-lg">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0"
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 24 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-[#0E1017] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-10 z-10 overflow-hidden text-left max-h-[92vh] flex flex-col"
        >
          {/* Top Bar */}
          <div className="flex items-start justify-between pb-6 border-b border-white/10">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3" />
                  Verified Case Study
                </span>
                <span className="flex items-center gap-1 text-xs text-gray-400 font-mono">
                  <Building className="w-3.5 h-3.5" />
                  {caseStudy.client} • {caseStudy.industry}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white leading-tight">
                {caseStudy.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Structured Flow Body */}
          <div className="overflow-y-auto py-8 space-y-8 flex-1 pr-2">
            
            {/* 1. Client / Industry & Timeline Metadata */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-sm">
              <div>
                <div className="text-xs text-gray-500 font-mono uppercase">Client / Partner</div>
                <div className="text-white font-semibold mt-0.5">{caseStudy.client}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 font-mono uppercase">Industry</div>
                <div className="text-white font-semibold mt-0.5">{caseStudy.industry}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 font-mono uppercase">Project Duration</div>
                <div className="text-white font-semibold mt-0.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  {caseStudy.timeline}
                </div>
              </div>
            </div>

            {/* 2. Challenge */}
            <div className="border-l-2 border-red-500/40 pl-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-red-400 mb-2">
                01. The Challenge
              </h4>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            {/* 3. Our Approach */}
            <div className="border-l-2 border-yellow-500/40 pl-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-yellow-400 mb-2">
                02. Our Strategic Approach
              </h4>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {caseStudy.ourApproach}
              </p>
            </div>

            {/* 4. The Solution */}
            <div className="border-l-2 border-blue-500 pl-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 mb-2">
                03. The Engineered Solution
              </h4>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>

            {/* 5. Technology Stack */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-sky-400" />
                <span>04. Technologies Used</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {caseStudy.technology.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 6. Implementation Milestones */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400 mb-3">
                05. Implementation Steps
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {caseStudy.implementation.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-300 leading-normal">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 7. Results & Business Outcome */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-950/40 via-blue-900/20 to-transparent border border-blue-500/30">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-400 mb-4">
                <TrendingUp className="w-4 h-4" />
                <span>06. Business Outcome & Results</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-5">
                {caseStudy.result.metrics.map((metric, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-black/40 border border-white/5">
                    <div className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                      {metric.value}
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5">{metric.label}</div>
                  </div>
                ))}
              </div>

              <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-medium">
                "{caseStudy.result.highlight}"
              </p>
              <p className="text-xs text-gray-400 mt-2">
                {caseStudy.result.summary}
              </p>
            </div>

          </div>

          {/* Footer Action */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              Close Case Study
            </button>
            <button
              onClick={() => {
                onClose();
                onStartSimilarProject(caseStudy.title);
              }}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2"
            >
              <span>Build a Similar Solution</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
