import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
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
  Star,
  FileCheck2,
  Building2,
  Compass,
  Cpu,
  Layers,
  Terminal
} from 'lucide-react';
import { MOCK_INTERNSHIPS, MOCK_TESTIMONIALS, MOCK_SERVICES } from '../data/mockData';

// Motion Primitives - Staggered Word Reveal for Headline (viewport once: true)
const headlineText = "Launch Your IT Career with Navyan.";

const sentenceContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const wordVariant = {
  hidden: { opacity: 0, y: 25, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: [0.21, 0.47, 0.32, 0.98]
    }
  }
};

const fadeInUpOnce = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } 
  }
};

const bentoGridStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const bentoCardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: 'easeOut' } 
  }
};

// Reusable BentoCard Component with Mouse Spotlight Radial Glow
function BentoCard({ children, className = '', icon: Icon, title, subtitle, tag, colSpan = '' }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      variants={bentoCardVariant}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-white/5 backdrop-blur-xl p-8 hover:border-primary/40 transition-colors duration-300 group ${colSpan} ${className}`}
    >
      {/* Cursor Mouse Spotlight Radial Gradient */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.15), transparent 40%)`,
          }}
        />
      )}

      {/* Card Content */}
      <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-indigo to-brand-blue p-0.5 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-white dark:bg-navy-950 rounded-[14px] flex items-center justify-center text-slate-900 dark:text-white">
                <Icon className="w-7 h-7 text-brand-indigo dark:text-brand-cyan" />
              </div>
            </div>
            {tag && (
              <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-brand-indigo/10 dark:bg-brand-indigo/30 text-brand-indigo dark:text-brand-cyan border border-brand-indigo/30 uppercase tracking-wider">
                {tag}
              </span>
            )}
          </div>

          <div>
            <h4 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-brand-indigo dark:group-hover:text-brand-cyan transition-colors">
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
    <div className="space-y-24 pb-20 overflow-x-hidden bg-white dark:bg-navy-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
        
        {/* Background SVG Blob with Soft Opacity and Mix-Blend-Mode */}
        <img
          src="/blob.svg"
          alt="Background Blob Visual"
          className="absolute -top-10 left-1/2 -translate-x-1/2 w-full max-w-5xl opacity-30 dark:opacity-40 mix-blend-screen pointer-events-none -z-10 blur-3xl"
        />

        {/* Haikei Blurry Gradient Secondary Background */}
        <img
          src="/blurry-gradient.svg"
          alt="Blurry Gradient Glow"
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-full max-w-4xl opacity-25 dark:opacity-35 mix-blend-plus-lighter pointer-events-none -z-20 blur-3xl"
        />

        {/* Subtle Radial Grid Mask Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] dark:bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Top Pill Announcement */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-navy-900/90 border border-indigo-200 dark:border-brand-indigo/40 text-xs font-semibold text-brand-indigo dark:text-brand-cyan shadow-sm dark:shadow-glow-indigo mb-8 animate-float"
          >
            <span className="flex h-2 w-2 rounded-full bg-brand-indigo dark:bg-brand-cyan animate-ping" />
            <Sparkles className="w-3.5 h-3.5 text-brand-indigo dark:text-brand-cyan" />
            <span>Navyan Batch 2026 Internships Now Open • Guaranteed Stipends</span>
            <ChevronRight className="w-3.5 h-3.5" />
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
                className={word.includes("Navyan") || word.includes("IT") ? "gradient-text-primary" : ""}
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

          {/* Buttons using Reusable <Button> Component */}
          <motion.div 
            variants={fadeInUpOnce}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Primary Button with Magnetic Scale-Up Hover */}
            <Button
              variant="primary"
              size="lg"
              magnetic={true}
              icon={ArrowRight}
              onClick={() => setActiveTab('internships')}
            >
              Explore Internships
            </Button>

            {/* Secondary Ghost Button */}
            <Button
              variant="ghost"
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
            className="mt-12 max-w-xl mx-auto p-2.5 rounded-2xl bg-white/80 dark:bg-navy-900/80 border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-glass-card flex items-center gap-2"
          >
            <div className="pl-3 flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs shrink-0">
              <ShieldCheck className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
              <span className="hidden sm:inline">Verify Credential:</span>
            </div>
            <input
              type="text"
              placeholder="Enter Certificate / Offer Letter ID (e.g. NAV-2026-8941)"
              value={quickVerifyInput}
              onChange={(e) => setQuickVerifyInput(e.target.value)}
              className="w-full bg-slate-50 dark:bg-navy-950/80 px-3 py-2 rounded-xl text-xs text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 border border-slate-200 dark:border-white/5 focus:outline-none focus:border-brand-indigo"
            />
            <button
              onClick={handleQuickVerify}
              className="px-4 py-2 rounded-xl bg-brand-indigo hover:bg-brand-indigo/90 text-white text-xs font-bold shrink-0 transition-colors"
            >
              Verify
            </button>
          </motion.div>

          {/* Dynamic Platform Metric Counters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {[
              { label: 'Interns Trained & Placed', value: '15,000+', icon: Users, color: 'text-brand-indigo dark:text-brand-cyan' },
              { label: 'PPO Placement Rate', value: '98.4%', icon: TrendingUp, color: 'text-emerald-600 dark:text-emerald-400' },
              { label: 'IT Projects Delivered', value: '450+', icon: Code2, color: 'text-brand-indigo' },
              { label: 'Highest Package Offered', value: '₹22.5 LPA', icon: Award, color: 'text-amber-500 dark:text-amber-400' },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div 
                  key={idx} 
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="glass-panel p-5 rounded-2xl text-center bg-slate-50/80 dark:bg-navy-900/60 border border-slate-200 dark:border-white/10"
                >
                  <div className="flex justify-center mb-2">
                    <Icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <div className={`text-2xl sm:text-3xl font-extrabold ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* MARQUEE BRAND TRUST BANNER */}
      <section className="border-y border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-navy-950/60 py-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center mb-6">
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
            Our Interns & Alumni Work At Industry Leaders
          </p>
        </div>
        <div className="flex whitespace-nowrap overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_128px,black_calc(100%-128px),transparent)]">
          <div className="flex animate-marquee gap-12 text-slate-600 dark:text-slate-400 font-bold text-lg items-center">
            {['GOOGLE', 'MICROSOFT', 'AMAZON', 'FLIPKART', 'RAZORPAY', 'SWIGGY', 'TCS', 'INFOSYS', 'CRED', 'PAYTM'].concat(['GOOGLE', 'MICROSOFT', 'AMAZON', 'FLIPKART', 'RAZORPAY', 'SWIGGY', 'TCS', 'INFOSYS', 'CRED', 'PAYTM']).map((brand, i) => (
              <div key={i} className="flex items-center gap-3 hover:text-slate-900 dark:hover:text-white transition-colors">
                <Building2 className="w-5 h-5 text-brand-indigo" />
                <span>{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMPT FEATURES SECTION: BENTO BOX GRID LAYOUT WITH HOVER SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-brand-indigo dark:text-brand-cyan tracking-widest uppercase mb-2">
            The Navyan Ecosystem
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Everything You Need to Scale Your Career & Tech Infrastructure
          </h3>
        </div>

        {/* Bento Box CSS Grid with Framer Motion Entrance Stagger (viewport once: true) */}
        <motion.div 
          variants={bentoGridStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          
          {/* Card 1: Verified Internships (Spans 2 columns on desktop) */}
          <BentoCard
            icon={Briefcase}
            title="Verified Industry Internships"
            subtitle="Work directly on live client codebases, learn production CI/CD workflows under 1-on-1 senior engineering leads, and earn guaranteed stipends."
            tag="Guaranteed Stipend"
            colSpan="md:col-span-2"
          >
            {/* Embedded Ambient Haikei Blob Glow */}
            <img
              src="/blob.svg"
              alt="Ambient Glow"
              className="absolute -right-10 -top-10 w-48 h-48 opacity-20 pointer-events-none blur-2xl"
            />
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-xl border border-emerald-500/20">
                ⚡ 98.4% Placement Rate
              </span>
              <span className="text-xs font-bold text-brand-indigo dark:text-brand-cyan bg-brand-indigo/10 px-3 py-1 rounded-xl border border-brand-indigo/20">
                1-on-1 Mentorship
              </span>
            </div>
          </BentoCard>

          {/* Card 2: IT Services */}
          <BentoCard
            icon={Code}
            title="IT Services & AI Engineering"
            subtitle="Custom web platforms, mobile apps, fine-tuned LLMs, and enterprise cloud architecture built for fast-growing businesses."
            tag="Enterprise Grade"
          >
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 pt-2">
              <CheckCircle2 className="w-4 h-4 text-brand-indigo dark:text-brand-cyan shrink-0" />
              <span>Instant Cost & Timeline Estimator</span>
            </div>
          </BentoCard>

          {/* Card 3: Certification Tracking */}
          <BentoCard
            icon={ShieldCheck}
            title="Certification Tracking & Verification"
            subtitle="Tamper-proof certificates & offer letters backed by unique cryptographic verification hashes & instant QR code verification."
            tag="ISO Certified"
          >
            <div className="p-3 rounded-2xl bg-white dark:bg-navy-950/80 border border-slate-200 dark:border-white/5 text-xs flex items-center justify-between">
              <span className="text-slate-500 dark:text-slate-400">Sample ID:</span>
              <code className="font-bold text-brand-indigo dark:text-brand-cyan font-mono">NAV-2026-8941</code>
            </div>
          </BentoCard>

          {/* Card 4: Career Growth & PPO Track (Spans 2 columns on desktop) */}
          <BentoCard
            icon={TrendingUp}
            title="Accelerated Career Growth & PPO Track"
            subtitle="Top 30% of interns receive immediate Pre-Placement Offers (PPO) with full-time packages ranging up to ₹22.5 LPA."
            tag="High CTC"
            colSpan="md:col-span-2"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-white dark:bg-navy-950/80 border border-slate-200 dark:border-white/5 text-center">
                <span className="text-[10px] text-slate-500 block">Highest Package</span>
                <span className="text-sm font-extrabold text-amber-500 dark:text-amber-400">₹22.5 LPA</span>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-navy-950/80 border border-slate-200 dark:border-white/5 text-center">
                <span className="text-[10px] text-slate-500 block">Average Package</span>
                <span className="text-sm font-extrabold text-slate-900 dark:text-white">₹8.5 LPA</span>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-navy-950/80 border border-slate-200 dark:border-white/5 text-center col-span-2 sm:col-span-1">
                <span className="text-[10px] text-slate-500 block">Day-1 Offer Letter</span>
                <span className="text-sm font-extrabold text-emerald-600 dark:text-emerald-400">Guaranteed</span>
              </div>
            </div>
          </BentoCard>

        </motion.div>

        {/* Seamless Layered Wave Section Divider */}
        <div className="w-full overflow-hidden leading-none pt-16">
          <svg
            className="relative block w-full h-12 md:h-24 text-[color:var(--bg-secondary)]"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,197.3C960,213,1056,203,1152,186.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>

      </section>

      {/* FEATURED INTERNSHIPS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <img
          src="/low-poly-grid-haikei.svg"
          alt="Low Poly Tech Grid"
          className="absolute inset-0 w-full h-full object-cover opacity-10 dark:opacity-15 pointer-events-none rounded-3xl -z-10 blur-sm"
        />
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-xs font-bold text-brand-indigo dark:text-brand-cyan tracking-widest uppercase mb-2">
              Featured Opportunities
            </h2>
            <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white">
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
            <motion.div 
              key={item.id} 
              whileHover={{ y: -4 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="glass-panel p-6 rounded-2xl bg-white/80 dark:bg-navy-900/70 border border-slate-200 dark:border-white/10 flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-brand-indigo/10 dark:bg-brand-indigo/30 text-brand-indigo dark:text-brand-cyan border border-brand-indigo/30 uppercase tracking-wider">
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
                    <span key={sIdx} className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-navy-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-500 block uppercase font-medium">Stipend</span>
                  <span className="text-xs font-extrabold text-slate-900 dark:text-white">{item.stipend}</span>
                </div>
                <button
                  onClick={() => {
                    setActiveTab('internships');
                    onSelectInternship(item);
                  }}
                  className="px-4 py-2 rounded-xl bg-slate-200 dark:bg-navy-850 hover:bg-brand-indigo hover:text-white text-slate-900 dark:text-white text-xs font-bold transition-all border border-slate-300 dark:border-white/10"
                >
                  Apply Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STUDENT TESTIMONIALS CAROUSEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xs font-bold text-brand-indigo tracking-widest uppercase mb-2">
            Success Stories
          </h2>
          <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Hear From Navyan Alumni
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MOCK_TESTIMONIALS.map((t) => (
            <motion.div 
              key={t.id} 
              whileHover={{ y: -4 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="glass-panel p-6 rounded-2xl bg-white/80 dark:bg-navy-900/70 border border-slate-200 dark:border-white/10 flex flex-col justify-between space-y-4"
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

              <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-white/10">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-brand-indigo/50"
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
              <Button
                variant="primary"
                size="lg"
                onClick={() => setActiveTab('internships')}
                className="bg-navy-950 text-white hover:bg-navy-900"
              >
                Apply for Internships
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={onOpenAuth}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/30"
              >
                Create Student Account
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
