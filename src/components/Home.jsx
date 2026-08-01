import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Briefcase, 
  Award, 
  Code2, 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  Zap, 
  ChevronRight,
  Star,
  FileCheck2,
  Building2,
  Compass,
  Cpu,
  Layers,
  Terminal
} from 'lucide-react';
import { MOCK_INTERNSHIPS, MOCK_TESTIMONIALS, MOCK_SERVICES } from '../data/mockData';

export default function Home({ setActiveTab, onSelectInternship, onOpenAuth }) {
  const [activeDomainIndex, setActiveDomainIndex] = useState(0);
  const [quickVerifyInput, setQuickVerifyInput] = useState('');

  const domains = [
    { title: 'Full Stack Web Dev', icon: Code2, badge: 'High Demand', stipend: '₹12k - ₹20k/mo', growth: '+140% Hiring' },
    { title: 'AI & Data Science', icon: Cpu, badge: 'Top Stipend', stipend: '₹18k - ₹25k/mo', growth: '+210% Hiring' },
    { title: 'Cloud & DevOps', icon: Layers, badge: 'Trending', stipend: '₹15k - ₹22k/mo', growth: '+180% Hiring' },
    { title: 'UI/UX Design', icon: Sparkles, badge: 'Creative', stipend: '₹10k - ₹16k/mo', growth: '+95% Hiring' },
    { title: 'Cybersecurity', icon: ShieldCheck, badge: 'Essential', stipend: '₹14k - ₹20k/mo', growth: '+160% Hiring' }
  ];

  const handleQuickVerify = (e) => {
    e.preventDefault();
    if (!quickVerifyInput.trim()) return;
    setActiveTab('verify');
  };

  return (
    <div className="space-y-24 pb-20 overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
        
        {/* PROMPT 1: Integrating Hero Background SVG (Haikei Glow) */}
        <img
          src="/blurry-gradient.svg"
          alt="Blurry Gradient Background"
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-full max-w-5xl opacity-40 blur-3xl pointer-events-none -z-10"
        />

        {/* Subtle Grid Mask Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Top Pill Announcement */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-900/90 border border-brand-indigo/40 text-xs font-semibold text-brand-cyan shadow-glow-indigo mb-8 animate-float">
            <span className="flex h-2 w-2 rounded-full bg-brand-cyan animate-ping" />
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
            <span>Navyan Batch 2026 Internships Now Open • Guaranteed Stipends</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </div>

          {/* PROMPT 1: Framer Motion Headline Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.15]"
          >
            Bridge Academic Learning with <br className="hidden sm:inline" />
            <span className="gradient-text-primary">Real High-Tech Execution</span>
          </motion.h1>

          {/* Subtext */}
          <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            Accelerate your career through hands-on industry internships with guaranteed stipends, production mentorship, and enterprise IT engineering solutions.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setActiveTab('internships')}
              className="w-full sm:w-auto gradient-btn px-8 py-4 rounded-2xl text-white font-bold text-base shadow-glow-indigo flex items-center justify-center gap-3 group"
            >
              <Briefcase className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
              <span>Explore Internships</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => setActiveTab('services')}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-navy-900/80 hover:bg-navy-850 text-white font-bold text-base border border-white/10 hover:border-brand-indigo/50 transition-all flex items-center justify-center gap-3"
            >
              <Code2 className="w-5 h-5 text-brand-cyan" />
              <span>Estimate IT Project Cost</span>
            </button>
          </div>

          {/* Verification Bar Teaser */}
          <div className="mt-12 max-w-xl mx-auto p-2.5 rounded-2xl bg-navy-900/80 border border-white/10 backdrop-blur-xl shadow-glass-card flex items-center gap-2">
            <div className="pl-3 flex items-center gap-2 text-slate-400 text-xs shrink-0">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="hidden sm:inline">Verify Credential:</span>
            </div>
            <input
              type="text"
              placeholder="Enter Certificate / Offer Letter ID (e.g. NAV-2026-8941)"
              value={quickVerifyInput}
              onChange={(e) => setQuickVerifyInput(e.target.value)}
              className="w-full bg-navy-950/80 px-3 py-2 rounded-xl text-xs text-white placeholder:text-slate-500 border border-white/5 focus:outline-none focus:border-brand-indigo"
            />
            <button
              onClick={handleQuickVerify}
              className="px-4 py-2 rounded-xl bg-brand-indigo hover:bg-brand-indigo/90 text-white text-xs font-bold shrink-0 transition-colors"
            >
              Verify
            </button>
          </div>

          {/* Dynamic Platform Metric Counters */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { label: 'Interns Trained & Placed', value: '15,000+', icon: Users, color: 'text-brand-cyan' },
              { label: 'PPO Placement Rate', value: '98.4%', icon: TrendingUp, color: 'text-emerald-400' },
              { label: 'IT Projects Delivered', value: '450+', icon: Code2, color: 'text-brand-indigo' },
              { label: 'Highest Package Offered', value: '₹22.5 LPA', icon: Award, color: 'text-amber-400' },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="glass-panel p-5 rounded-2xl text-center glass-panel-hover">
                  <div className="flex justify-center mb-2">
                    <Icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <div className={`text-2xl sm:text-3xl font-extrabold text-white ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* MARQUEE BRAND TRUST BANNER */}
      <section className="border-y border-white/10 bg-navy-950/60 py-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center mb-6">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
            Our Interns & Alumni Work At Industry Leaders
          </p>
        </div>
        <div className="flex whitespace-nowrap overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_128px,black_calc(100%-128px),transparent)]">
          <div className="flex animate-marquee gap-12 text-slate-400 font-bold text-lg items-center">
            {['GOOGLE', 'MICROSOFT', 'AMAZON', 'FLIPKART', 'RAZORPAY', 'SWIGGY', 'TCS', 'INFOSYS', 'CRED', 'PAYTM'].concat(['GOOGLE', 'MICROSOFT', 'AMAZON', 'FLIPKART', 'RAZORPAY', 'SWIGGY', 'TCS', 'INFOSYS', 'CRED', 'PAYTM']).map((brand, i) => (
              <div key={i} className="flex items-center gap-3 hover:text-white transition-colors">
                <Building2 className="w-5 h-5 text-brand-indigo" />
                <span>{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE DOMAIN EXPLORER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold text-brand-cyan tracking-widest uppercase mb-2">
            Specialized Career Tracks
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
            Choose Your High-Growth Domain
          </h3>
          <p className="mt-3 text-slate-400 text-sm">
            Select a technology track below to view active internship stipends, hiring trends, and required skills.
          </p>
        </div>

        {/* Domain Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {domains.map((domain, idx) => {
            const Icon = domain.icon;
            const isSelected = activeDomainIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveDomainIndex(idx)}
                className={`px-5 py-3 rounded-2xl text-xs font-bold transition-all flex items-center gap-2.5 ${
                  isSelected
                    ? 'bg-gradient-to-r from-brand-indigo to-brand-blue text-white shadow-glow-indigo scale-105'
                    : 'glass-panel text-slate-300 hover:text-white hover:border-brand-indigo/40'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-brand-cyan'}`} />
                <span>{domain.title}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full uppercase font-extrabold ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-navy-800 text-brand-cyan'
                }`}>
                  {domain.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Domain Spotlight Card */}
        <div className="glass-panel p-8 rounded-3xl relative overflow-hidden border border-white/10">
          <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-brand-indigo/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Industry Trend: {domains[activeDomainIndex].growth}</span>
              </div>
              <h4 className="text-2xl sm:text-3xl font-bold text-white">
                {domains[activeDomainIndex].title} Industry Track
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Work directly on live client deliverables under 1-on-1 engineering mentors. Gain production experience with modern tech stacks, automated testing, and cloud deployment pipelines.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3 rounded-xl bg-navy-900/90 border border-white/5">
                  <span className="text-[11px] text-slate-400 block">Stipend Range</span>
                  <span className="text-sm font-bold text-brand-cyan">{domains[activeDomainIndex].stipend}</span>
                </div>
                <div className="p-3 rounded-xl bg-navy-900/90 border border-white/5">
                  <span className="text-[11px] text-slate-400 block">Duration</span>
                  <span className="text-sm font-bold text-slate-200">3 - 6 Months</span>
                </div>
                <div className="p-3 rounded-xl bg-navy-900/90 border border-white/5">
                  <span className="text-[11px] text-slate-400 block">Perks Included</span>
                  <span className="text-sm font-bold text-emerald-400">Offer Letter + LOR</span>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4 text-center">
              <div className="w-12 h-12 mx-auto rounded-xl bg-brand-indigo/20 flex items-center justify-center text-brand-cyan">
                <Award className="w-6 h-6" />
              </div>
              <h5 className="text-white font-bold text-base">Ready to start?</h5>
              <p className="text-xs text-slate-400">
                Applications reviewed within 24 hours. Early bird spots available.
              </p>
              <button
                onClick={() => setActiveTab('internships')}
                className="w-full gradient-btn py-3 rounded-xl text-white font-bold text-xs shadow-glow-indigo flex items-center justify-center gap-2"
              >
                <span>Browse {domains[activeDomainIndex].title} Roles</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </section>

      {/* PROMPT 2: BENTO GRID CARDS WITH MICRO-GLOW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-brand-indigo tracking-widest uppercase mb-2">
            The Navyan Advantage
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
            Why Students & Enterprises Trust Us
          </h3>
        </div>

        {/* PROMPT 2: 3-column layout Bento Grid format */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Primary Feature Card (Largest one with Haikei blob glow) */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-primary/40 transition-all duration-300 group">
            {/* Embedded Haikei blob.svg glow */}
            <img
              src="/blob.svg"
              alt="Ambient Glow"
              className="absolute -right-10 -top-10 w-48 h-48 opacity-20 pointer-events-none blur-2xl"
            />
            
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-indigo to-brand-blue p-0.5 mb-6 group-hover:scale-110 transition-transform">
              <div className="w-full h-full bg-navy-950 rounded-[14px] flex items-center justify-center text-white">
                <Terminal className="w-7 h-7" />
              </div>
            </div>
            <h4 className="text-xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors">
              Guaranteed Live Projects
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              No theoretical dummy tutorials. You will commit code directly to real client repositories and production cloud servers under 1-on-1 mentorship.
            </p>
          </div>

          {/* Secondary Card 1 */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-primary/40 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-blue to-brand-cyan p-0.5 mb-6 group-hover:scale-110 transition-transform">
              <div className="w-full h-full bg-navy-950 rounded-[14px] flex items-center justify-center text-white">
                <ShieldCheck className="w-7 h-7 text-brand-cyan" />
              </div>
            </div>
            <h4 className="text-xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors">
              Verifiable Credentials Day-1
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              Receive an instant digitally signed Offer Letter and Certificate with unique verification hashes (`NAV-2026-8941`) & QR codes.
            </p>
          </div>

          {/* Secondary Card 2 */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-primary/40 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-cyan to-brand-emerald p-0.5 mb-6 group-hover:scale-110 transition-transform">
              <div className="w-full h-full bg-navy-950 rounded-[14px] flex items-center justify-center text-white">
                <TrendingUp className="w-7 h-7 text-emerald-400" />
              </div>
            </div>
            <h4 className="text-xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors">
              Direct PPO & Career Placement
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              Top 30% of interns receive immediate Pre-Placement Offers (PPO) with full-time packages ranging up to ₹22.5 LPA.
            </p>
          </div>

        </div>

        {/* PROMPT 3: Seamless Layered Wave Section Divider */}
        <div className="w-full overflow-hidden leading-none pt-12">
          <svg
            className="relative block w-full h-12 md:h-24 text-[color:var(--bg-secondary)]"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,197.3C960,213,1056,203,1152,186.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>

      </section>

      {/* FEATURED INTERNSHIPS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Ambient Low-Poly Grid Background */}
        <img
          src="/low-poly-grid-haikei.svg"
          alt="Low Poly Tech Grid"
          className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none rounded-3xl -z-10 blur-sm"
        />
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-xs font-bold text-brand-cyan tracking-widest uppercase mb-2">
              Featured Opportunities
            </h2>
            <h3 className="text-3xl font-extrabold text-white">
              Latest High-Stipend Internship Batches
            </h3>
          </div>
          <button
            onClick={() => setActiveTab('internships')}
            className="inline-flex items-center gap-2 text-xs font-bold text-brand-indigo hover:text-brand-cyan transition-colors"
          >
            <span>View All Internships</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MOCK_INTERNSHIPS.slice(0, 3).map((item) => (
            <div key={item.id} className="glass-panel p-6 rounded-2xl glass-panel-hover flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-brand-indigo/30 text-brand-cyan border border-brand-indigo/40 uppercase tracking-wider">
                    {item.domain}
                  </span>
                  <span className="text-xs font-semibold text-emerald-400">
                    {item.spotsLeft} Spots Left
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-slate-400 text-xs line-clamp-2 mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="text-[10px] px-2 py-0.5 rounded-md bg-navy-900 text-slate-300 border border-white/5">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-500 block uppercase font-medium">Stipend</span>
                  <span className="text-xs font-extrabold text-white">{item.stipend}</span>
                </div>
                <button
                  onClick={() => {
                    setActiveTab('internships');
                    onSelectInternship(item);
                  }}
                  className="px-4 py-2 rounded-xl bg-navy-850 hover:bg-brand-indigo text-white text-xs font-bold transition-all border border-white/10"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STUDENT TESTIMONIALS CAROUSEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xs font-bold text-brand-indigo tracking-widest uppercase mb-2">
            Success Stories
          </h2>
          <h3 className="text-3xl font-extrabold text-white">
            Hear From Navyan Alumni
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MOCK_TESTIMONIALS.map((t) => (
            <div key={t.id} className="glass-panel p-6 rounded-2xl glass-panel-hover flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-xs italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-brand-indigo/50"
                />
                <div>
                  <h5 className="text-white font-bold text-xs">{t.name}</h5>
                  <p className="text-[11px] text-slate-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-10 sm:p-14 overflow-hidden bg-gradient-to-r from-brand-indigo via-brand-blue to-brand-cyan shadow-glow-indigo text-center text-white">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold">
              Ready to Kickstart Your Tech Journey?
            </h2>
            <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto">
              Join over 15,000 students building production code and earning verified certificates. Applications close soon for the upcoming batch.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setActiveTab('internships')}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-navy-950 text-white font-bold text-sm hover:bg-navy-900 transition-colors shadow-2xl"
              >
                Apply for Internships
              </button>
              <button
                onClick={onOpenAuth}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-bold text-sm transition-colors border border-white/30"
              >
                Create Student Account
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
