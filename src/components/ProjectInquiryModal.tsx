import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_DATA, CONTACT_INFO } from '../data/websiteData';
import { X, Send, CheckCircle2, Sparkles, AlertCircle } from 'lucide-react';

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const ProjectInquiryModal: React.FC<ProjectInquiryModalProps> = ({
  isOpen,
  onClose,
  preselectedService = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceRequired: preselectedService || SERVICES_DATA[0].title,
    projectBudget: '$2,000 – $5,000',
    projectDetails: '',
    web3AccessKey: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const budgetOptions = [
    'Under $2,000',
    '$2,000 – $5,000',
    '$5,000 – $10,000',
    '$10,000 – $25,000',
    '$25,000+'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.projectDetails.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in required fields (Name, Email, and Project Details).');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const accessKey = formData.web3AccessKey.trim() || CONTACT_INFO.web3formsAccessKey;
      const payload = {
        access_key: accessKey,
        subject: `Start Project Modal: ${formData.name} (${formData.company || 'Devixa Tech Inquiry'})`,
        from_name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: formData.serviceRequired,
        budget: formData.projectBudget,
        message: formData.projectDetails
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      if (response.status === 200 || result.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Submission failed. Please try again or contact us directly.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please try again or reach out via WhatsApp/Email.');
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
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
          className="relative w-full max-w-2xl bg-[#0F1117] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 overflow-hidden text-left max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-start justify-between pb-5 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Start a Project</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-white">
                Tell Us About Your Project
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="overflow-y-auto py-6 flex-1 pr-1">
            {status === 'success' ? (
              <div className="py-10 text-center flex flex-col items-center justify-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-heading font-bold text-white">
                  Inquiry Sent Successfully!
                </h4>
                <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                  Thank you! Our technical lead will review your specifications and contact you with a customized estimate within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {status === 'error' && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 font-semibold mb-1.5">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 font-semibold mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="work@company.com"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 font-semibold mb-1.5">
                      Service
                    </label>
                    <select
                      name="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#14161E] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500"
                    >
                      {SERVICES_DATA.map((srv) => (
                        <option key={srv.id} value={srv.title} className="bg-[#14161E] text-white">
                          {srv.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 font-semibold mb-1.5">
                      Budget Tier
                    </label>
                    <select
                      name="projectBudget"
                      value={formData.projectBudget}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#14161E] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500"
                    >
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#14161E] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 font-semibold mb-1.5">
                    Project Details *
                  </label>
                  <textarea
                    name="projectDetails"
                    rows={3}
                    value={formData.projectDetails}
                    onChange={handleInputChange}
                    placeholder="Briefly describe what you would like to build..."
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {status === 'submitting' ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <span>Submit Project Details</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
