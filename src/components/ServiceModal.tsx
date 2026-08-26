import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ServiceItem } from '../types';
import { X, CheckCircle, ArrowRight, Sparkles, Shield, Layers, HelpCircle } from 'lucide-react';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onStartProjectForService: (serviceName: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onStartProjectForService
}) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        {/* Backdrop click */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0"
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-[#0F1117] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 overflow-hidden text-left max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-start justify-between pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Service Capabilities</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                {service.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Body */}
          <div className="overflow-y-auto py-6 space-y-6 flex-1 pr-1">
            <div>
              <h4 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-2">
                Overview
              </h4>
              <p className="text-gray-300 text-base leading-relaxed">
                {service.shortDescription}
              </p>
            </div>

            {/* Scope / Sub-Services */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-400" />
                <span>Included Service Offerings</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2.5 text-sm text-gray-200"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Deliverables */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4 text-sky-400" />
                <span>Standard Deliverables & Standards</span>
              </h4>
              <div className="space-y-2">
                {service.deliverables.map((deliv, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ideal For */}
            <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/15">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">
                <HelpCircle className="w-4 h-4" />
                <span>Ideal For</span>
              </div>
              <p className="text-sm text-gray-300">
                {service.idealFor}
              </p>
            </div>
          </div>

          {/* Footer Action */}
          <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-sm font-medium text-gray-400 hover:text-white"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onStartProjectForService(service.title);
              }}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2"
            >
              <span>Inquire About {service.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
