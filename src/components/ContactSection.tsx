import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CONTACT_INFO, SERVICES_DATA } from '../data/websiteData';
import { SectionHeading } from './AnimatedText';
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Linkedin,
  Facebook,
  Instagram,
  Github
} from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceRequired: initialService || SERVICES_DATA[0].title,
    projectBudget: '$2,000 – $5,000',
    projectDetails: '',
    web3AccessKey: '' // Optional custom key or default
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

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
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.projectDetails.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (Name, Email, and Project Details).');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      // Use Web3Forms endpoint with configured Access Key
      const accessKey = formData.web3AccessKey.trim() || CONTACT_INFO.web3formsAccessKey;
      
      const payload = {
        access_key: accessKey,
        subject: `New Project Inquiry from ${formData.name} - ${formData.company || 'Devixa Tech Lead'}`,
        from_name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: formData.serviceRequired,
        budget: formData.projectBudget,
        message: formData.projectDetails,
        botcheck: ''
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (response.status === 200 || result.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Submission failed. Please check your connection or contact us via WhatsApp.');
      }
    } catch (err: any) {
      setStatus('error');
      setErrorMessage('Network error occurred while sending message. Please contact us directly at ' + CONTACT_INFO.email + ' or via WhatsApp.');
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0B0C10] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          tag="Direct Inquiry"
          title="Start Your Project With Devixa Tech"
          highlightText="Devixa Tech"
          description="Fill out the project details below and our solution architects will review your scope and provide a free quotation within 24 hours."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left Column: Contact Channels & Credentials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl glass-card border border-white/10 space-y-6">
              <h3 className="text-2xl font-heading font-bold text-white">
                Let's Talk Solutions
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Whether you have an established product roadmap or an early-stage concept, we are ready to discuss technical possibilities and project feasibility.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email */}
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.04] transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-mono uppercase">Official Inquiries</div>
                    <div className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {CONTACT_INFO.email}
                    </div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent("Hello Devixa Tech! I would like to inquire about a digital project.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 hover:bg-white/[0.04] transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-mono uppercase">Direct WhatsApp</div>
                    <div className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                      {CONTACT_INFO.phone} (Quick Chat)
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-mono uppercase">Global Presence</div>
                    <div className="text-sm font-semibold text-gray-300">
                      {CONTACT_INFO.location}
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-mono uppercase">Operating Hours</div>
                    <div className="text-sm font-semibold text-gray-300">
                      {CONTACT_INFO.hours}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/5">
                <div className="text-xs text-gray-400 font-mono uppercase mb-3">Connect On Social</div>
                <div className="flex items-center gap-3">
                  <a
                    href={CONTACT_INFO.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-blue-600/20 text-gray-400 hover:text-blue-400 border border-white/5 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={CONTACT_INFO.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-blue-600/20 text-gray-400 hover:text-blue-400 border border-white/5 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href={CONTACT_INFO.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-fuchsia-600/20 text-gray-400 hover:text-fuchsia-400 border border-white/5 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={CONTACT_INFO.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/20 text-gray-400 hover:text-white border border-white/5 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Privacy & Guarantee Pill */}
            <div className="p-4 rounded-2xl bg-blue-500/[0.03] border border-blue-500/10 flex items-center gap-3 text-xs text-gray-400">
              <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0" />
              <span>We respect strict NDA agreements and protect your intellectual property.</span>
            </div>

          </div>

          {/* Right Column: Inquiry Form with Web3Forms (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-card border border-white/10 relative">
              
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success-box"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 px-6 text-center flex flex-col items-center justify-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                      Inquiry Received Successfully!
                    </h4>
                    <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                      Thank you for contacting Devixa Tech. Our project team has received your submission and will review your specifications. We will get back to you within 24 hours.
                    </p>
                    <div className="pt-4">
                      <button
                        onClick={() => {
                          setStatus('idle');
                          setFormData({
                            name: '',
                            email: '',
                            phone: '',
                            company: '',
                            serviceRequired: SERVICES_DATA[0].title,
                            projectBudget: '$2,000 – $5,000',
                            projectDetails: '',
                            web3AccessKey: ''
                          });
                        }}
                        className="px-6 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white text-xs font-semibold border border-white/10"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form key="inquiry-form" onSubmit={handleSubmit} className="space-y-6">
                    
                    <div className="flex items-center justify-between pb-4 border-b border-white/10">
                      <div>
                        <h4 className="text-xl font-heading font-bold text-white">
                          Project Inquiry Form
                        </h4>
                        <span className="text-xs text-gray-400">
                          Complete details for accurate scoping & quotations
                        </span>
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
                        Web3Forms Enabled
                      </span>
                    </div>

                    {status === 'error' && (
                      <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 font-semibold mb-2">
                          Your Full Name <span className="text-blue-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Alexander Wright"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-blue-500/80 focus:ring-1 focus:ring-blue-500/50 transition-all"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 font-semibold mb-2">
                          Work Email <span className="text-blue-400">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="alex@company.com"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-blue-500/80 focus:ring-1 focus:ring-blue-500/50 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 font-semibold mb-2">
                          Phone / WhatsApp (Optional)
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-blue-500/80 focus:ring-1 focus:ring-blue-500/50 transition-all"
                        />
                      </div>

                      {/* Company */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 font-semibold mb-2">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="e.g. Apex Global Solutions"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-blue-500/80 focus:ring-1 focus:ring-blue-500/50 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Service Required */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 font-semibold mb-2">
                          Service Required
                        </label>
                        <select
                          name="serviceRequired"
                          value={formData.serviceRequired}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-[#14161E] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500/80 focus:ring-1 focus:ring-blue-500/50 transition-all"
                        >
                          {SERVICES_DATA.map((srv) => (
                            <option key={srv.id} value={srv.title} className="bg-[#14161E] text-white">
                              {srv.title}
                            </option>
                          ))}
                          <option value="Full Digital Transformation" className="bg-[#14161E] text-white">
                            Full Digital Transformation
                          </option>
                        </select>
                      </div>

                      {/* Budget Tier */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 font-semibold mb-2">
                          Estimated Budget
                        </label>
                        <select
                          name="projectBudget"
                          value={formData.projectBudget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-[#14161E] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500/80 focus:ring-1 focus:ring-blue-500/50 transition-all"
                        >
                          {budgetOptions.map((opt) => (
                            <option key={opt} value={opt} className="bg-[#14161E] text-white">
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 font-semibold mb-2">
                        Project Details & Objectives <span className="text-blue-400">*</span>
                      </label>
                      <textarea
                        name="projectDetails"
                        rows={4}
                        value={formData.projectDetails}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project goals, required features, timeline, or current website URL..."
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-blue-500/80 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-bold text-sm transition-all duration-300 shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {status === 'submitting' ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Submitting Inquiry...</span>
                        </div>
                      ) : (
                        <>
                          <span>Send Project Inquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                  </form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
