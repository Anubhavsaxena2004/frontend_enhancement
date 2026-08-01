import React from 'react';
import { Button } from './ui/Button';
import { 
  Sparkles, 
  Mail, 
  MapPin, 
  Phone, 
  ArrowRight, 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram,
  ShieldCheck,
  Award
} from 'lucide-react';

export default function Footer({ setActiveTab, onOpenAuth }) {
  return (
    <footer className="bg-slate-900 dark:bg-navy-950 border-t border-slate-800 dark:border-white/10 text-slate-300 pt-16 pb-12 relative overflow-hidden transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800 dark:border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white text-slate-900 flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5 text-slate-900" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white">NAVYAN</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Navyan is India’s premier career accelerator and IT engineering firm. We bridge the gap between academic learning and industry execution through verified internships, hands-on mentorship, and custom enterprise software development.
            </p>

            {/* Newsletter Input */}
            <div className="pt-2">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Subscribe for Career Opportunities & Updates
              </label>
              <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed to Navyan Career Updates!'); }} className="flex items-center gap-2 max-w-md">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    placeholder="Enter your college or work email..."
                    required
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-800 dark:bg-navy-900 border border-slate-700 dark:border-white/10 text-white text-xs placeholder:text-slate-400 focus:outline-none focus:border-white"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-extrabold text-xs shrink-0 flex items-center gap-1.5 transition-all"
                >
                  <span>Join</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>

          {/* Internships Link Column */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Internships & Programs
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {['Full-Stack Development', 'AI & Machine Learning', 'Cloud & DevOps', 'UI/UX Product Design', 'Cybersecurity & Ethical Hacking', 'Mobile App Dev'].map((link, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => setActiveTab('internships')}
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-400" />
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Courses Column */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              IT Services & Courses
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button onClick={() => setActiveTab('services')} className="hover:text-white transition-colors">
                  Custom SaaS Engineering
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('services')} className="hover:text-white transition-colors">
                  AI Agents & Fine-tuning
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('services')} className="hover:text-white transition-colors">
                  Cloud Infrastructure & Security
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('courses')} className="hover:text-white transition-colors">
                  Full-Stack Mastery Course
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('courses')} className="hover:text-white transition-colors">
                  Generative AI Bootcamp
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('verify')} className="hover:text-white transition-colors text-white font-semibold">
                  Verify Certificate / Offer Letter
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Headquarters & Contact
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>Navyan Tech Park, Outer Ring Road, Bellandur, Bengaluru, Karnataka 560103</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a href="mailto:support@navyan.tech" className="hover:text-white">support@navyan.tech</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <span>+91 (080) 4920-8800</span>
              </li>
            </ul>

            <div className="mt-6 p-3 rounded-xl bg-slate-800 dark:bg-navy-900 border border-emerald-500/30 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
              <div className="text-[11px]">
                <p className="font-semibold text-white">ISO 9001:2026 Certified</p>
                <p className="text-slate-400">Official Government Verified Org</p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Navyan Technologies Pvt. Ltd. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <button onClick={() => alert('Navyan Privacy Policy')} className="hover:text-slate-300">Privacy Policy</button>
            <button onClick={() => alert('Navyan Terms of Service')} className="hover:text-slate-300">Terms of Service</button>
            <button onClick={() => alert('Verification Policy')} className="hover:text-slate-300">Certificate Verification Policy</button>
          </div>

          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: 'https://github.com' },
              { icon: Linkedin, href: 'https://linkedin.com' },
              { icon: Twitter, href: 'https://twitter.com' },
              { icon: Instagram, href: 'https://instagram.com' }
            ].map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-800 dark:bg-navy-900 border border-slate-700 dark:border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
