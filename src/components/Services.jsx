import React, { useState } from 'react';
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
  const [projectType, setProjectType] = useState('web'); // 'web', 'mobile', 'ai', 'cloud'
  const [complexity, setComplexity] = useState('standard'); // 'mvp', 'standard', 'enterprise'
  const [pageCount, setPageCount] = useState(6);
  const [addons, setAddons] = useState({
    adminPanel: true,
    paymentGateway: true,
    aiChatbot: false,
    slaSupport: true
  });

  // Calculate estimated price & days dynamically
  const basePrices = { web: 35000, mobile: 50000, ai: 45000, cloud: 40000 };
  const complexityMultipliers = { mvp: 1.0, standard: 1.4, enterprise: 2.2 };
  
  let calculatedCost = (basePrices[projectType] || 40000) * (complexityMultipliers[complexity] || 1.0);
  calculatedCost += (pageCount * 2500);
  if (addons.adminPanel) calculatedCost += 15000;
  if (addons.paymentGateway) calculatedCost += 8000;
  if (addons.aiChatbot) calculatedCost += 20000;
  if (addons.slaSupport) calculatedCost += 12000;

  const estimatedDays = Math.max(7, Math.round(10 + (pageCount * 1.5) + (complexity === 'enterprise' ? 14 : 0)));

  // Inquiry Form state
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
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/20 text-brand-cyan text-xs font-semibold border border-brand-cyan/30">
          <Code2 className="w-4 h-4" />
          <span>Enterprise IT Engineering & B2B Solutions</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
          Custom <span className="gradient-text-primary">Software & AI Engineering</span>
        </h1>
        <p className="text-slate-300 text-sm leading-relaxed">
          We architect modern web platforms, mobile apps, custom AI models, and cloud infrastructure for fast-growing startups and enterprises.
        </p>
      </div>

      {/* Services Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {MOCK_SERVICES.map(service => (
          <div key={service.id} className="glass-panel p-8 rounded-3xl glass-panel-hover border border-white/10 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-brand-indigo/20 flex items-center justify-center text-brand-cyan border border-brand-indigo/30">
                  {service.id === 'srv-1' && <Code2 className="w-6 h-6" />}
                  {service.id === 'srv-2' && <Smartphone className="w-6 h-6" />}
                  {service.id === 'srv-3' && <Sparkles className="w-6 h-6" />}
                  {service.id === 'srv-4' && <Cloud className="w-6 h-6" />}
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-500 uppercase block">Starting From</span>
                  <span className="text-lg font-extrabold text-white">₹{service.basePrice.toLocaleString()}</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{service.tagline}</p>

              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Deliverables:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                {service.techStack.map((tech, tIdx) => (
                  <span key={tIdx} className="text-[10px] px-2 py-0.5 rounded-md bg-navy-950 text-slate-400 border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
              <button
                onClick={() => {
                  setSelectedService(service);
                  setInquiryModalOpen(true);
                }}
                className="gradient-btn px-5 py-2.5 rounded-xl text-white text-xs font-bold shadow-glow-indigo flex items-center gap-1.5"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* INTERACTIVE PROJECT COST ESTIMATOR TOOL */}
      <section className="glass-panel p-8 sm:p-10 rounded-3xl border border-brand-indigo/40 space-y-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-indigo/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-cyan/20 flex items-center justify-center text-brand-cyan">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Instant IT Project Cost & Timeline Estimator</h2>
            <p className="text-xs text-slate-400">Configure your project requirements below to see an instant estimate</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Controls */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Project Type */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">1. Select Project Type</label>
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
                          ? 'bg-brand-indigo/30 border-brand-cyan text-white shadow-glow-indigo'
                          : 'bg-navy-950/80 border-white/10 text-slate-400 hover:text-white'
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${selected ? 'text-brand-cyan' : 'text-slate-400'}`} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Complexity */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">2. Architecture Complexity Level</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'mvp', label: 'MVP / Startup Launch', sub: 'Fast launch, clean core UI' },
                  { id: 'standard', label: 'Standard Production', sub: 'Scalable APIs, auth & DB' },
                  { id: 'enterprise', label: 'Enterprise & Multi-tenant', sub: 'High security, custom SLAs' },
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => setComplexity(item.id)}
                    className={`p-3 rounded-xl border text-left text-xs transition-all ${
                      complexity === item.id
                        ? 'bg-brand-indigo/20 border-brand-indigo text-white'
                        : 'bg-navy-950/80 border-white/10 text-slate-400'
                    }`}
                  >
                    <div className="font-bold">{item.label}</div>
                    <div className="text-[10px] text-slate-500 mt-1">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Page Count Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold text-slate-300">3. Number of Custom Views / Pages</label>
                <span className="text-xs font-bold text-brand-cyan">{pageCount} Views</span>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                value={pageCount}
                onChange={(e) => setPageCount(parseInt(e.target.value))}
                className="w-full h-2 bg-navy-950 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
              />
            </div>

            {/* Addons */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">4. Integrated Modules & Addons</label>
              <div className="grid grid-cols-2 gap-3 text-xs">
                {[
                  { key: 'adminPanel', label: 'Admin Dashboard Panel (+₹15,000)' },
                  { key: 'paymentGateway', label: 'Stripe/Razorpay Payments (+₹8,000)' },
                  { key: 'aiChatbot', label: 'Custom AI Assistant Bot (+₹20,000)' },
                  { key: 'slaSupport', label: '1-Year Maintenance & SLA (+₹12,000)' },
                ].map(item => (
                  <label key={item.key} className="flex items-center gap-2 p-3 rounded-xl bg-navy-950/80 border border-white/5 cursor-pointer text-slate-300">
                    <input
                      type="checkbox"
                      checked={addons[item.key]}
                      onChange={(e) => setAddons({ ...addons, [item.key]: e.target.checked })}
                      className="rounded bg-navy-900 border-white/10 text-brand-indigo focus:ring-0"
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>

          </div>

          {/* Real-time Result Card */}
          <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-6 text-center bg-navy-950/90">
            <div className="w-12 h-12 rounded-full bg-brand-cyan/20 flex items-center justify-center text-brand-cyan mx-auto">
              <Zap className="w-6 h-6" />
            </div>

            <div>
              <span className="text-xs text-slate-400 uppercase font-semibold block">Estimated Project Investment</span>
              <div className="text-3xl font-extrabold text-white gradient-text-primary mt-1">
                ₹{calculatedCost.toLocaleString()}
              </div>
              <span className="text-[10px] text-slate-500 block mt-0.5">*Includes design, development & deployment</span>
            </div>

            <div className="p-3 rounded-xl bg-navy-900 border border-white/5 flex items-center justify-center gap-2 text-xs text-slate-300">
              <Clock className="w-4 h-4 text-brand-cyan" />
              <span>Timeline: <strong>{estimatedDays} Working Days</strong></span>
            </div>

            <button
              onClick={() => {
                setSelectedService({ title: `Custom ${projectType.toUpperCase()} Project` });
                setInquiryModalOpen(true);
              }}
              className="w-full gradient-btn py-3 rounded-xl text-white font-bold text-xs shadow-glow-indigo flex items-center justify-center gap-2"
            >
              <span>Lock Quote & Schedule Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* INQUIRY MODAL */}
      {inquiryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-navy-900 border border-white/10 rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-6 shadow-2xl relative">
            
            <button
              onClick={() => setInquiryModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-navy-850 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider">B2B Service Inquiry</span>
              <h3 className="text-2xl font-bold text-white mt-1">
                Request Proposal for {selectedService?.title || 'IT Services'}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Our engineering leads will prepare a detailed architecture plan & quotation.
              </p>
            </div>

            <form onSubmit={handleInquirySubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikramaditya Singh"
                  value={inquiryForm.clientName}
                  onChange={(e) => setInquiryForm({ ...inquiryForm, clientName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-indigo"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Company / Business Email *</label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={inquiryForm.companyEmail}
                  onChange={(e) => setInquiryForm({ ...inquiryForm, companyEmail: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-indigo"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={inquiryForm.phone}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-indigo"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Company Name</label>
                  <input
                    type="text"
                    placeholder="Acme Corp"
                    value={inquiryForm.companyName}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, companyName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-indigo"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Project Scope & Requirements</label>
                <textarea
                  rows="3"
                  placeholder="Describe your tech stack, goals, or target launch deadline..."
                  value={inquiryForm.message}
                  onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-indigo"
                />
              </div>

              <button
                type="submit"
                className="w-full gradient-btn py-3 rounded-xl text-white font-bold shadow-glow-indigo flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry</span>
              </button>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}
