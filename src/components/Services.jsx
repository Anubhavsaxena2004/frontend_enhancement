import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { 
  Code2, 
  Smartphone, 
  Sparkles, 
  Cloud, 
  CheckCircle2, 
  ArrowRight, 
  Calculator, 
  Clock, 
  ShieldCheck, 
  Send, 
  X,
  Layers,
  Zap,
  Building2
} from 'lucide-react';
import { MOCK_SERVICES } from '../data/mockData';

export default function Services({ onShowToast }) {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // Estimator Calculator State
  const [projectType, setProjectType] = useState('web');
  const [complexity, setComplexity] = useState('standard');
  const [pageCount, setPageCount] = useState(6);
  const [addons, setAddons] = useState({
    adminPanel: true,
    paymentGateway: true,
    aiChatbot: false,
    slaSupport: true
  });

  const basePrices = { web: 35000, mobile: 50000, ai: 45000, cloud: 40000 };
  const complexityMultipliers = { mvp: 1.0, standard: 1.4, enterprise: 2.2 };
  
  let calculatedCost = (basePrices[projectType] || 40000) * (complexityMultipliers[complexity] || 1.0);
  calculatedCost += (pageCount * 2500);
  if (addons.adminPanel) calculatedCost += 15000;
  if (addons.paymentGateway) calculatedCost += 8000;
  if (addons.aiChatbot) calculatedCost += 20000;
  if (addons.slaSupport) calculatedCost += 12000;

  const estimatedDays = Math.max(7, Math.round(10 + (pageCount * 1.5) + (complexity === 'enterprise' ? 14 : 0)));

  const [inquiryForm, setInquiryForm] = useState({
    clientName: '',
    companyEmail: '',
    phone: '',
    companyName: '',
    message: ''
  });

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setInquiryModalOpen(false);
    onShowToast(`🚀 Inquiry received! Our senior solutions architect will reach out to ${inquiryForm.companyEmail} within 2 hours with a custom proposal.`);
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 transition-colors duration-300">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-navy-900/90 text-slate-800 dark:text-slate-200 text-xs font-semibold border border-slate-200 dark:border-white/10 shadow-sm">
          <Code2 className="w-4 h-4 text-slate-900 dark:text-white" />
          <span>Enterprise IT Engineering & B2B Solutions</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
          Custom <span className="text-slate-900 dark:text-white font-extrabold underline decoration-slate-400">Software & AI Engineering</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
          We architect modern web platforms, mobile apps, custom AI models, and cloud infrastructure for fast-growing startups and enterprises.
        </p>
      </div>

      {/* Services Cards with Alternating Left/Right Slide-In Animations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {MOCK_SERVICES.map((service, idx) => (
          <motion.div 
            key={service.id} 
            initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: 'spring', stiffness: 70, damping: 18, delay: idx * 0.1 }}
            whileHover={{ y: -4 }}
            className="p-8 rounded-3xl bg-white/90 dark:bg-navy-900/70 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 space-y-6 flex flex-col justify-between shadow-sm"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 flex items-center justify-center shadow-sm">
                  {service.id === 'srv-1' && <Code2 className="w-6 h-6" />}
                  {service.id === 'srv-2' && <Smartphone className="w-6 h-6" />}
                  {service.id === 'srv-3' && <Sparkles className="w-6 h-6" />}
                  {service.id === 'srv-4' && <Cloud className="w-6 h-6" />}
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-500 uppercase block font-medium">Starting From</span>
                  <span className="text-lg font-extrabold text-slate-900 dark:text-white">₹{service.basePrice.toLocaleString()}</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{service.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{service.tagline}</p>

              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Deliverables:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-1.5 flex-wrap">
                {service.techStack.map((tech, tIdx) => (
                  <span key={tIdx} className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-navy-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
              <Button
                variant="primary"
                size="sm"
                icon={ArrowRight}
                onClick={() => {
                  setSelectedService(service);
                  setInquiryModalOpen(true);
                }}
              >
                Request Quote
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* INTERACTIVE PROJECT COST ESTIMATOR TOOL */}
      <section className="p-8 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/90 dark:bg-navy-900/80 backdrop-blur-xl shadow-sm space-y-8 relative overflow-hidden text-slate-900 dark:text-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 flex items-center justify-center shadow-sm">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Instant IT Project Cost & Timeline Estimator</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Configure your project requirements below to see an instant estimate</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Controls */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Project Type */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">1. Select Project Type</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'web', label: 'Web Application', icon: Code2 },
                  { id: 'mobile', label: 'Mobile App', icon: Smartphone },
                  { id: 'ai', label: 'AI Agent / Automation', icon: Sparkles },
                  { id: 'cloud', label: 'Cloud Architecture', icon: Cloud },
                ].map(item => {
                  const Icon = item.icon;
                  const selected = projectType === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setProjectType(item.id)}
                      className={`p-3 rounded-2xl border text-xs font-semibold flex flex-col items-center gap-2 transition-all ${
                        selected
                          ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white shadow-sm'
                          : 'bg-slate-50 dark:bg-navy-950/80 border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Complexity */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">2. Architecture Complexity Level</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'mvp', label: 'MVP Launch', sub: 'Fast launch, clean core UI' },
                  { id: 'standard', label: 'Standard Production', sub: 'Scalable APIs, auth & DB' },
                  { id: 'enterprise', label: 'Enterprise Tier', sub: 'High security, custom SLAs' },
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => setComplexity(item.id)}
                    className={`p-3 rounded-xl border text-left text-xs transition-all ${
                      complexity === item.id
                        ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white font-bold shadow-sm'
                        : 'bg-slate-50 dark:bg-navy-950/80 border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    <div className="font-bold">{item.label}</div>
                    <div className="text-[10px] opacity-75 mt-1">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Page Count Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">3. Number of Custom Views / Pages</label>
                <span className="text-xs font-bold text-slate-900 dark:text-white">{pageCount} Views</span>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                value={pageCount}
                onChange={(e) => setPageCount(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-navy-950 rounded-lg appearance-none cursor-pointer accent-slate-900 dark:accent-white"
              />
            </div>

            {/* Addons */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">4. Integrated Modules & Addons</label>
              <div className="grid grid-cols-2 gap-3 text-xs">
                {[
                  { key: 'adminPanel', label: 'Admin Dashboard Panel (+₹15,000)' },
                  { key: 'paymentGateway', label: 'Stripe/Razorpay Payments (+₹8,000)' },
                  { key: 'aiChatbot', label: 'Custom AI Assistant Bot (+₹20,000)' },
                  { key: 'slaSupport', label: '1-Year Maintenance & SLA (+₹12,000)' },
                ].map(item => (
                  <label key={item.key} className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-navy-950/80 border border-slate-200 dark:border-white/10 cursor-pointer text-slate-700 dark:text-slate-300">
                    <input
                      type="checkbox"
                      checked={addons[item.key]}
                      onChange={(e) => setAddons({ ...addons, [item.key]: e.target.checked })}
                      className="rounded bg-white dark:bg-navy-900 border-slate-300 dark:border-white/20 text-slate-900 dark:text-white focus:ring-0"
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>

          </div>

          {/* Real-time Result Card */}
          <div className="p-6 rounded-3xl border border-slate-200 dark:border-white/10 space-y-6 text-center bg-slate-100/90 dark:bg-navy-950/90 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 flex items-center justify-center mx-auto shadow-sm">
              <Zap className="w-6 h-6" />
            </div>

            <div>
              <span className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold block">Estimated Project Investment</span>
              <div className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                ₹{calculatedCost.toLocaleString()}
              </div>
              <span className="text-[10px] text-slate-500 block mt-0.5">*Includes design, development & deployment</span>
            </div>

            <div className="p-3 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10 flex items-center justify-center gap-2 text-xs text-slate-700 dark:text-slate-300">
              <Clock className="w-4 h-4 text-slate-900 dark:text-white" />
              <span>Timeline: <strong>{estimatedDays} Working Days</strong></span>
            </div>

            <Button
              variant="primary"
              size="md"
              icon={ArrowRight}
              onClick={() => {
                setSelectedService({ title: `Custom ${projectType.toUpperCase()} Project` });
                setInquiryModalOpen(true);
              }}
              className="w-full"
            >
              Lock Quote & Schedule Call
            </Button>
          </div>

        </div>
      </section>

      {/* INQUIRY MODAL */}
      {inquiryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-navy-950/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10 rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-6 shadow-2xl relative text-slate-900 dark:text-white">
            
            <button
              onClick={() => setInquiryModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-slate-100 dark:bg-navy-850 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">B2B Service Inquiry</span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                Request Proposal for {selectedService?.title || 'IT Services'}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Our engineering leads will prepare a detailed architecture plan & quotation.
              </p>
            </div>

            <form onSubmit={handleInquirySubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikramaditya Singh"
                  value={inquiryForm.clientName}
                  onChange={(e) => setInquiryForm({ ...inquiryForm, clientName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-slate-400"
                />
              </div>

              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">Company / Business Email *</label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={inquiryForm.companyEmail}
                  onChange={(e) => setInquiryForm({ ...inquiryForm, companyEmail: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-slate-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={inquiryForm.phone}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-slate-400"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">Company Name</label>
                  <input
                    type="text"
                    placeholder="Acme Corp"
                    value={inquiryForm.companyName}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, companyName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">Project Scope & Requirements</label>
                <textarea
                  rows="3"
                  placeholder="Describe your tech stack, goals, or target launch deadline..."
                  value={inquiryForm.message}
                  onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-slate-400"
                />
              </div>

              <Button
                variant="primary"
                size="md"
                type="submit"
                icon={Send}
                className="w-full"
              >
                Submit Inquiry
              </Button>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}
