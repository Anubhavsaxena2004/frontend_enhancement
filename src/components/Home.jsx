import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
import Counter from './ui/Counter';
import Marquee from './ui/Marquee';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Briefcase, 
  Award, 
  Code2, 
  Code,
  TrendingUp, 
  Users, 
  ShieldCheck, 
  Zap, 
  ChevronRight,
  ChevronDown,
  Star,
  FileCheck2,
  Building2,
  Compass,
  Cpu,
  Layers,
  Terminal,
  Server,
  Database,
  Globe,
  Flame,
  Cloud,
  HelpCircle,
  MessageCircle
} from 'lucide-react';
import { MOCK_INTERNSHIPS, MOCK_TESTIMONIALS, MOCK_SERVICES } from '../data/mockData';

// Headline Stagger Variant (viewport once: true)
// PERFORMANCE: No blur filter — GPU-expensive on many elements simultaneously
const headlineText = "Launch Your IT Career with Navyan.";

const sentenceContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.05
    }
  }
};

// PERF: Removed filter:blur — it forces GPU compositing on EVERY word simultaneously
const wordVariant = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.21, 0.47, 0.32, 0.98]
    }
  }
};

const fadeInUpOnce = {
  hidden: { opacity: 0, y: 16 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] } 
  }
};

// Reusable BentoCard Component — mobile-safe (no hover on touch, no h-full height glitch)
function BentoCard({ children, className = '', icon: Icon, title, subtitle, tag, colSpan = '', index = 0 }) {
  // Only enable mouse spotlight on non-touch devices
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  // Detect touch device on first interaction — avoid mouse effects on mobile
  const handleMouseMove = (e) => {
    if (isTouch) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleTouchStart = () => setIsTouch(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98], delay: (index % 3) * 0.08 }}
      // whileHover only on non-touch — avoids tap-triggered layout shift on mobile
      whileHover={!isTouch ? { y: -3 } : {}}
      onTouchStart={handleTouchStart}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => !isTouch && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/90 dark:bg-white/5 p-6 sm:p-8 hover:border-slate-300 dark:hover:border-white/20 transition-colors duration-300 group ${colSpan} ${className}`}
    >
      {/* Soft Radial Cursor Spotlight — desktop only */}
      {isHovered && !isTouch && (
        <div
          className="pointer-events-none absolute -inset-px"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.1), transparent 50%)`,
          }}
        />
      )}

      {/* Removed h-full — caused height glitch on mobile single-column layout */}
      <div className="relative z-10 flex flex-col justify-between space-y-5">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="w-11 h-11 rounded-2xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <Icon className="w-5 h-5" />
            </div>
            {tag && (
              <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-slate-100 dark:bg-navy-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 uppercase tracking-wider">
                {tag}
              </span>
            )}
          </div>

          <div>
            <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white transition-colors">
              {title}
            </h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mt-2">
              {subtitle}
            </p>
          </div>
        </div>

        {children}
      </div>
    </motion.div>
  );
}

// ============================================================
// FAQ DATA & ACCORDION COMPONENT
// ============================================================
const FAQ_ITEMS = [
  {
    q: 'What is Navyan and who is it for?',
    a: 'Navyan is a premium IT internship & services platform designed for engineering students (1st–4th year), recent graduates, and fast-growing businesses. Students get hands-on production internships with guaranteed stipends; businesses get enterprise-grade web, mobile, and AI engineering solutions.',
  },
  {
    q: 'Are the internship stipends really guaranteed?',
    a: 'Yes — every Navyan internship comes with a contractual stipend ranging from ₹10,000 to ₹25,000/month depending on the domain and complexity. The offer letter is issued on Day 1 before any work begins, and stipends are credited on a fixed monthly date.',
  },
  {
    q: 'What is a PPO (Pre-Placement Offer) and how do I get one?',
    a: 'A PPO is a full-time job offer given to you before your internship ends. At Navyan, top 30% of interns — evaluated on project impact, code quality, and mentorship reviews — receive PPO packages ranging up to ₹22.5 LPA. It\'s entirely merit-based with no referrals needed.',
  },
  {
    q: 'How are the internship certificates verified?',
    a: 'Every certificate and offer letter issued by Navyan has a unique cryptographic verification hash (e.g. NAV-2026-8941) and a QR code. Employers, universities, and LinkedIn can instantly verify authenticity on our Verify page — tamper-proof and ISO-certified.',
  },
  {
    q: 'Do I need prior experience to apply for an internship?',
    a: 'Not at all. We accept students from all years. For beginner-friendly tracks like UI/UX and Full Stack, only a basic understanding of HTML/CSS or Python is required. For AI & DevOps tracks, some project-level experience helps. Our mentors guide you from Day 1.',
  },
  {
    q: 'How long are the internships and can I do them remotely?',
    a: 'Internship durations range from 3 to 6 months. All internships are fully remote-first with flexible working hours (4–6 hrs/day). We use async-first collaboration tools (Notion, Slack, GitHub) so you can balance internship alongside your college schedule.',
  },
  {
    q: 'What kind of IT services does Navyan offer to businesses?',
    a: 'We architect and build full-stack web platforms, mobile apps (React Native / Flutter), custom AI models (fine-tuned LLMs, computer vision), and cloud/DevOps infrastructure on AWS & GCP. Use the live cost estimator on our Services page for an instant quote.',
  },
  {
    q: 'Can I enroll in courses without doing an internship?',
    a: 'Absolutely. Our Navyan Academy courses are standalone and open to everyone. Each bootcamp includes recorded video lectures, live Q&A sessions, project assignments, and a verified completion certificate. A one-time enrollment fee applies with optional EMI.',
  },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="space-y-3">
      {FAQ_ITEMS.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.35, ease: 'easeOut', delay: Math.min(idx * 0.05, 0.25) }}
            className={`rounded-2xl border transition-colors duration-200 overflow-hidden ${
              isOpen
                ? 'border-brand-indigo/40 bg-white dark:bg-navy-900/80 shadow-md'
                : 'border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-navy-900/50'
            }`}
          >
            {/* Question Row */}
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full flex items-center justify-between px-6 py-5 text-left group"
            >
              <span className={`text-sm font-semibold pr-4 leading-snug transition-colors ${
                isOpen ? 'text-brand-indigo dark:text-brand-cyan' : 'text-slate-900 dark:text-white group-hover:text-brand-indigo dark:group-hover:text-brand-cyan'
              }`}>
                {item.q}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                  isOpen ? 'bg-brand-indigo/10 text-brand-indigo dark:text-brand-cyan' : 'bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-400'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </button>

            {/* Answer — AnimatePresence for smooth mount/unmount */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-white/5 pt-4">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}

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

  const technologies = [
    { name: 'React 18', type: 'Frontend Framework', color: 'text-cyan-600 dark:text-cyan-400', icon: Code2 },
    { name: 'Node.js', type: 'Backend Runtime', color: 'text-emerald-600 dark:text-emerald-400', icon: Server },
    { name: 'Python', type: 'AI & Machine Learning', color: 'text-amber-600 dark:text-amber-400', icon: Cpu },
    { name: 'AWS Cloud', type: 'DevOps & Infra', color: 'text-amber-600 dark:text-amber-500', icon: Cloud },
    { name: 'Figma', type: 'UI/UX Design', color: 'text-pink-600 dark:text-pink-400', icon: Sparkles },
    { name: 'TypeScript', type: 'Typed JavaScript', color: 'text-blue-600 dark:text-blue-400', icon: Code },
    { name: 'Docker', type: 'Containerization', color: 'text-cyan-600 dark:text-cyan-500', icon: Layers },
    { name: 'PyTorch', type: 'Deep Learning', color: 'text-red-600 dark:text-red-400', icon: Flame },
    { name: 'MongoDB', type: 'NoSQL Database', color: 'text-emerald-600 dark:text-emerald-500', icon: Database },
  ];

  const hiringCompanies = ['GOOGLE', 'MICROSOFT', 'AMAZON', 'FLIPKART', 'RAZORPAY', 'SWIGGY', 'TCS', 'INFOSYS', 'CRED', 'PAYTM'];

  const handleQuickVerify = (e) => {
    e.preventDefault();
    if (!quickVerifyInput.trim()) return;
    setActiveTab('verify');
  };

  return (
    <div className="space-y-24 pb-20 overflow-x-hidden bg-slate-50 dark:bg-navy-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
        
        {/* Background SVG Blob with Soft Opacity */}
        <img
          src="/blob.svg"
          alt="Background Visual"
          className="absolute -top-10 left-1/2 -translate-x-1/2 w-full max-w-5xl opacity-20 dark:opacity-30 mix-blend-screen pointer-events-none -z-10 blur-3xl"
        />

        {/* Subtle Radial Grid Mask */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Top Pill Announcement */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-navy-900/90 border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-700 dark:text-slate-300 shadow-sm mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <Sparkles className="w-3.5 h-3.5 text-slate-900 dark:text-white" />
            <span>Navyan Batch 2026 Internships Now Open • Guaranteed Stipends</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          </motion.div>

          {/* Staggered Text-Reveal Animation for Headline */}
          <motion.h1
            variants={sentenceContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-5xl mx-auto leading-[1.15] flex flex-wrap justify-center gap-x-3 gap-y-2"
          >
            {headlineText.split(" ").map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariant}
                className={word.includes("Navyan") || word.includes("IT") ? "text-slate-900 dark:text-white font-extrabold" : ""}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            variants={fadeInUpOnce}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed"
          >
            Accelerate your career through hands-on industry internships with guaranteed stipends, production mentorship, and enterprise IT engineering solutions.
          </motion.p>

          {/* Humanized Buttons */}
          <motion.div 
            variants={fadeInUpOnce}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              variant="primary"
              size="lg"
              magnetic={true}
              icon={ArrowRight}
              onClick={() => setActiveTab('internships')}
            >
              Explore Internships
            </Button>

            <Button
              variant="secondary"
              size="lg"
              icon={Code2}
              onClick={() => setActiveTab('services')}
            >
              Estimate IT Project Cost
            </Button>
          </motion.div>

          {/* Verification Bar Teaser */}
          <motion.div 
            variants={fadeInUpOnce}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 max-w-xl mx-auto p-2.5 rounded-2xl bg-white/90 dark:bg-navy-900/90 border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-sm flex items-center gap-2"
          >
            <div className="pl-3 flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs shrink-0">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="hidden sm:inline">Verify Credential:</span>
            </div>
            <input
              type="text"
              placeholder="Enter Certificate / Offer Letter ID (e.g. NAV-2026-8941)"
              value={quickVerifyInput}
              onChange={(e) => setQuickVerifyInput(e.target.value)}
              className="w-full bg-slate-50 dark:bg-navy-950/80 px-3 py-2 rounded-xl text-xs text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-slate-400"
            />
            <Button
              variant="primary"
              size="sm"
              onClick={handleQuickVerify}
              className="shrink-0"
            >
              Verify
            </Button>
          </motion.div>

          {/* IMPACT STATS WITH NUMBER COUNT-UP */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto"
          >
            {[
              { label: 'Interns Trained & Placed', numeric: '15000', suffix: '+', icon: Users },
              { label: 'PPO Placement Rate', numeric: '98.4', decimals: 1, suffix: '%', icon: TrendingUp },
              { label: 'IT Projects Delivered', numeric: '450', suffix: '+', icon: Code2 },
              { label: 'Highest Package', numeric: '22.5', decimals: 1, prefix: '₹', suffix: ' LPA', icon: Award },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={idx}
                  className="p-4 rounded-2xl text-center bg-white/90 dark:bg-navy-900/60 border border-slate-200/80 dark:border-white/10 shadow-sm min-w-0"
                >
                  <div className="flex justify-center mb-2">
                    <Icon className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                  </div>
                  <div className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-none">
                    <Counter
                      value={stat.numeric}
                      decimals={stat.decimals || 0}
                      prefix={stat.prefix || ''}
                      suffix={stat.suffix || ''}
                    />
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-1.5 leading-tight">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* DUAL INFINITE MARQUEE TRACKS: TRACK 1 TECH STACK & TRACK 2 REVERSE HIRING COMPANIES */}
      <section className="border-y border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-navy-950/60 py-10 overflow-hidden space-y-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
            Technologies We Teach & Enterprise Hiring Partners
          </p>
        </div>

        {/* Marquee Track 1: Technologies Badge Track (Left to Right) */}
        <Marquee speed="30s" pauseOnHover={true}>
          {technologies.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div 
                key={idx} 
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-50 dark:bg-navy-900/90 border border-slate-200/80 dark:border-white/10 shadow-sm"
              >
                <div className={`w-8 h-8 rounded-xl bg-white dark:bg-navy-950 flex items-center justify-center ${tech.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-extrabold text-slate-900 dark:text-white">{tech.name}</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">{tech.type}</div>
                </div>
              </div>
            );
          })}
        </Marquee>

        {/* Marquee Track 2: Hiring Companies Track (Reverse Right to Left) */}
        <Marquee speed="35s" reverse={true} pauseOnHover={true}>
          {hiringCompanies.map((brand, i) => (
            <div key={i} className="flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-slate-50 dark:bg-navy-900/60 border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-slate-300 font-extrabold text-xs shadow-sm">
              <Building2 className="w-4 h-4 text-slate-900 dark:text-white shrink-0" />
              <span>{brand}</span>
            </div>
          ))}
        </Marquee>
      </section>

      {/* INTERACTIVE DOMAIN EXPLORER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold text-slate-500 dark:text-slate-400 tracking-widest uppercase mb-2">
            Specialized Career Tracks
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Choose Your High-Growth Domain
          </h3>
        </div>

        {/* Domain Buttons — scrollable row on mobile to prevent wrapping/overflow */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-1 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center sm:gap-3">
          {domains.map((domain, idx) => {
            const Icon = domain.icon;
            const isSelected = activeDomainIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveDomainIndex(idx)}
                className={`flex-shrink-0 px-4 py-2.5 rounded-2xl text-xs font-bold transition-colors flex items-center gap-2 ${
                  isSelected
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md'
                    : 'bg-white dark:bg-navy-900/80 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-navy-800 border border-slate-200 dark:border-white/10'
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span className="whitespace-nowrap">{domain.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Domain Card */}
        <motion.div 
          key={activeDomainIndex}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="p-5 sm:p-8 rounded-3xl relative overflow-hidden border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-navy-900/80 shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-semibold">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Industry Trend: {domains[activeDomainIndex].growth}</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {domains[activeDomainIndex].title} Track
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Work directly on live client deliverables under 1-on-1 engineering mentors. Gain production experience with modern tech stacks and automated CI/CD pipelines.
              </p>

              {/* Stats — 3 cols on sm+, 2 cols on mobile for better readability */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-navy-950/80 border border-slate-200 dark:border-white/5">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 block">Stipend Range</span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white">{domains[activeDomainIndex].stipend}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-navy-950/80 border border-slate-200 dark:border-white/5">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 block">Duration</span>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200">3–6 Months</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-navy-950/80 border border-slate-200 dark:border-white/5 col-span-2 sm:col-span-1">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 block">Perks Included</span>
                  <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">Offer Letter + LOR</span>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 space-y-3 text-center bg-slate-50 dark:bg-navy-900/90">
              <div className="w-10 h-10 mx-auto rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h5 className="text-slate-900 dark:text-white font-bold text-base">Ready to start?</h5>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Applications reviewed within 24 hours.
              </p>
              <Button
                variant="primary"
                size="md"
                className="w-full"
                onClick={() => setActiveTab('internships')}
              >
                Browse Roles
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* BENTO GRID FEATURES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-slate-500 dark:text-slate-400 tracking-widest uppercase mb-2">
            The Navyan Ecosystem
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Everything You Need to Scale Your Career & Tech Infrastructure
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BentoCard
            index={0}
            icon={Briefcase}
            title="Verified Industry Internships"
            subtitle="Work directly on live client codebases, learn production CI/CD workflows under 1-on-1 senior engineering leads, and earn guaranteed stipends."
            tag="Guaranteed Stipend"
            colSpan="md:col-span-2"
          >
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-xl border border-emerald-500/20">
                ⚡ 98.4% Placement Rate
              </span>
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/10 px-3 py-1 rounded-xl border border-slate-200 dark:border-white/10">
                1-on-1 Mentorship
              </span>
            </div>
          </BentoCard>

          <BentoCard
            index={1}
            icon={Code}
            title="IT Services & AI Engineering"
            subtitle="Custom web platforms, mobile apps, fine-tuned LLMs, and enterprise cloud architecture built for fast-growing businesses."
            tag="Enterprise Grade"
          >
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 pt-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Instant Cost & Timeline Estimator</span>
            </div>
          </BentoCard>

          <BentoCard
            index={2}
            icon={ShieldCheck}
            title="Certification Tracking & Verification"
            subtitle="Tamper-proof certificates & offer letters backed by unique cryptographic verification hashes & instant QR code verification."
            tag="ISO Certified"
          >
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-navy-950/80 border border-slate-200 dark:border-white/5 text-xs flex items-center justify-between">
              <span className="text-slate-500 dark:text-slate-400">Sample ID:</span>
              <code className="font-bold text-slate-900 dark:text-white font-mono">NAV-2026-8941</code>
            </div>
          </BentoCard>

          <BentoCard
            index={3}
            icon={TrendingUp}
            title="Accelerated Career Growth & PPO Track"
            subtitle="Top 30% of interns receive immediate Pre-Placement Offers (PPO) with full-time packages ranging up to ₹22.5 LPA."
            tag="High CTC"
            colSpan="md:col-span-2"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-navy-950/80 border border-slate-200 dark:border-white/5 text-center">
                <span className="text-[10px] text-slate-500 block">Highest Package</span>
                <span className="text-sm font-extrabold text-amber-600 dark:text-amber-400">₹22.5 LPA</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-navy-950/80 border border-slate-200 dark:border-white/5 text-center">
                <span className="text-[10px] text-slate-500 block">Average Package</span>
                <span className="text-sm font-extrabold text-slate-900 dark:text-white">₹8.5 LPA</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-navy-950/80 border border-slate-200 dark:border-white/5 text-center col-span-2 sm:col-span-1">
                <span className="text-[10px] text-slate-500 block">Day-1 Offer Letter</span>
                <span className="text-sm font-extrabold text-emerald-600 dark:text-emerald-400">Guaranteed</span>
              </div>
            </div>
          </BentoCard>
        </div>

      </section>

      {/* FEATURED INTERNSHIPS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-xs font-bold text-slate-500 dark:text-slate-400 tracking-widest uppercase mb-2">
              Featured Opportunities
            </h2>
            <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Latest High-Stipend Internship Batches
            </h3>
          </div>
          <button
            onClick={() => setActiveTab('internships')}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white hover:underline transition-all"
          >
            <span>View All Internships</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MOCK_INTERNSHIPS.slice(0, 3).map((item, idx) => (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: idx * 0.08 }}
              whileHover={{ y: -3 }}
              className="p-6 rounded-2xl bg-white/90 dark:bg-navy-900/70 border border-slate-200/80 dark:border-white/10 flex flex-col justify-between space-y-4 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 uppercase tracking-wider">
                    {item.domain}
                  </span>
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    {item.spotsLeft} Spots Left
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-xs line-clamp-2 mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-navy-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-500 block uppercase font-medium">Stipend</span>
                  <span className="text-xs font-extrabold text-slate-900 dark:text-white">{item.stipend}</span>
                </div>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    setActiveTab('internships');
                    onSelectInternship(item);
                  }}
                >
                  Apply Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STUDENT TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xs font-bold text-slate-500 dark:text-slate-400 tracking-widest uppercase mb-2">
            Success Stories
          </h2>
          <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Hear From Navyan Alumni
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MOCK_TESTIMONIALS.map((t, idx) => (
            <motion.div 
              key={t.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: idx * 0.08 }}
              whileHover={{ y: -3 }}
              className="p-6 rounded-2xl bg-white/90 dark:bg-navy-900/70 border border-slate-200/80 dark:border-white/10 flex flex-col justify-between space-y-4 shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-xs italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-200/80 dark:border-white/10">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200 dark:border-white/20"
                />
                <div>
                  <h5 className="text-slate-900 dark:text-white font-bold text-xs">{t.name}</h5>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================== */}
      {/* FAQ SECTION */}
      {/* =========================================================== */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-navy-900/90 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-white/10 shadow-sm mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-brand-indigo" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Got Questions? We've Got Answers.
          </h2>
          <p className="mt-3 text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            Everything you need to know about Navyan internships, certifications, and IT services.
          </p>
        </motion.div>

        <FAQAccordion />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-10 text-center p-6 rounded-2xl bg-white/80 dark:bg-navy-900/60 border border-slate-200/80 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-slate-900 dark:bg-white flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5 text-white dark:text-slate-900" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">Still have questions?</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Our team responds within 2 hours on business days.</p>
            </div>
          </div>
          <Button variant="primary" size="sm" icon={ArrowRight} onClick={onOpenAuth}>
            Contact Support
          </Button>
        </motion.div>
      </section>

      {/* ADAPTIVE WAVE DIVIDER: NO BLACK CRACKS IN LIGHT MODE */}
      <div className="w-full overflow-hidden leading-none text-slate-50 dark:text-navy-950 transition-colors">
        <svg
          className="relative block w-full h-12 md:h-20 fill-current"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path d="M0,32L60,42.7C120,53,240,75,360,80C480,85,600,75,720,58.7C840,43,960,21,1080,21.3C1200,21,1320,43,1380,53.3L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
        </svg>
      </div>

      {/* FINAL CALL-TO-ACTION SECTION WITH HIGH-CONTRAST LEGIBLE BUTTONS */}
      <section className="relative w-full pt-0 pb-16">
        <div className="bg-slate-900 dark:bg-navy-900 text-white py-16 sm:py-24 relative overflow-hidden">
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
            
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1.0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
            >
              Ready to build your future?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed"
            >
              Join over 15,000 students building production code, earning verified certificates, and securing top tech PPO roles.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              {/* Primary CTA Button: Crisp Solid White Button with Black Text */}
              <button
                onClick={onOpenAuth}
                className="px-8 py-3.5 rounded-2xl bg-white text-slate-900 hover:bg-slate-100 font-extrabold text-sm sm:text-base shadow-lg transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <span>Join Navyan Today</span>
                <ArrowRight className="w-4 h-4 text-slate-900" />
              </button>

              {/* Secondary CTA Button: Crisp Translucent Glass Outline with White Text */}
              <button
                onClick={() => setActiveTab('internships')}
                className="px-8 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md font-semibold text-sm sm:text-base transition-all"
              >
                Browse All Internships
              </button>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
