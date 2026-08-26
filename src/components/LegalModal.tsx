import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? 'Privacy Policy' : 'Terms & Conditions';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0"
          onClick={onClose}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-[#0F1117] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 overflow-hidden text-left max-h-[85vh] flex flex-col"
        >
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
                {isPrivacy ? <ShieldCheck className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
              </div>
              <h3 className="text-xl font-heading font-bold text-white">{title}</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="overflow-y-auto py-6 space-y-4 text-sm text-gray-300 leading-relaxed pr-2">
            {isPrivacy ? (
              <>
                <p><strong>Last Updated: 2026</strong></p>
                <p>At Devixa Tech, we are committed to protecting the privacy and personal data of our clients and website visitors.</p>
                <h4 className="text-white font-bold text-base pt-2">1. Information We Collect</h4>
                <p>We collect information you provide directly through our project inquiry forms, including your name, email address, phone number, company name, and project specifications.</p>
                <h4 className="text-white font-bold text-base pt-2">2. How We Use Information</h4>
                <p>We use your information solely to evaluate project scopes, deliver custom software proposals, communicate updates, and deliver our contracted digital services. We never sell your data to third parties.</p>
                <h4 className="text-white font-bold text-base pt-2">3. Confidentiality & NDAs</h4>
                <p>All client proprietary ideas, software architectures, and trade secrets shared with Devixa Tech are strictly protected under mutual non-disclosure agreements.</p>
              </>
            ) : (
              <>
                <p><strong>Last Updated: 2026</strong></p>
                <p>These terms govern the use of Devixa Tech's website and outline our standard digital solutions engagement frameworks.</p>
                <h4 className="text-white font-bold text-base pt-2">1. Scope of Services</h4>
                <p>Devixa Tech provides professional web development, UI/UX design, custom software engineering, AI automation, and digital marketing services according to agreed Milestone Statements of Work.</p>
                <h4 className="text-white font-bold text-base pt-2">2. Intellectual Property Rights</h4>
                <p>Upon final settlement of project invoices, all custom deliverables, codebases, and design assets developed specifically for the client become the sole intellectual property of the client.</p>
                <h4 className="text-white font-bold text-base pt-2">3. Warranties & Quality Assurance</h4>
                <p>We provide standard warranty and bug-fixing periods following production launch to ensure stable operations according to agreed requirements.</p>
              </>
            )}
          </div>

          <div className="pt-4 border-t border-white/10 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
