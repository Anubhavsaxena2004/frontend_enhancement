import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Search, 
  User, 
  ShieldCheck, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  ChevronRight,
  Briefcase,
  GraduationCap,
  Code2,
  FileCheck2,
  LayoutDashboard
} from 'lucide-react';

export default function Navbar({ 
  activeTab, 
  setActiveTab, 
  onOpenSearch, 
  onOpenAuth, 
  isDarkMode, 
  setIsDarkMode,
  userProfile 
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Sparkles },
    { id: 'internships', label: 'Internships', icon: GraduationCap, badge: 'Popular' },
    { id: 'services', label: 'IT Services', icon: Code2 },
    { id: 'courses', label: 'Courses', icon: Briefcase },
    { id: 'jobs', label: 'Jobs', icon: Briefcase, badge: 'Hiring' },
    { id: 'verify', label: 'Verify ID', icon: FileCheck2 },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/85 dark:bg-navy-950/80 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <button 
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-indigo via-brand-blue to-brand-cyan p-0.5 shadow-glow-indigo transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-slate-900 dark:bg-navy-950 rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-brand-cyan animate-pulse" />
              </div>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-1">
                NAVYAN
                <span className="w-2 h-2 rounded-full bg-brand-cyan animate-ping inline-block" />
              </span>
              <span className="text-[10px] font-medium tracking-widest text-slate-500 dark:text-slate-400 uppercase -mt-1">
                Tech & Internships
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 dark:bg-navy-900/60 p-1.5 rounded-full border border-slate-200 dark:border-white/10 backdrop-blur-md">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-brand-indigo to-brand-blue shadow-md scale-105'
                      : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/5'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-brand-indigo dark:text-slate-400'}`} />
                  {item.label}
                  {item.badge && (
                    <span className={`text-[9px] px-1.5 py-0.5 rounded-full uppercase tracking-wider font-bold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-brand-indigo/10 dark:bg-brand-indigo/30 text-brand-indigo dark:text-brand-cyan border border-brand-indigo/30'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Tools & Auth */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Quick Spotlight Search */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 dark:bg-navy-900/80 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-brand-indigo/50 transition-all text-xs"
              title="Search internships, courses & services"
            >
              <Search className="w-3.5 h-3.5 text-brand-indigo dark:text-brand-cyan" />
              <span>Search...</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-white dark:bg-navy-800 text-slate-500 dark:text-slate-400 rounded border border-slate-200 dark:border-white/10">
                ⌘K
              </kbd>
            </button>

            {/* Theme Switcher Toggle Button */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-navy-900/80 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/5 transition-all shadow-sm"
              aria-label="Toggle Theme"
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
              ) : (
                <Moon className="w-4 h-4 text-brand-indigo" />
              )}
            </button>

            {/* Dashboard Link */}
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all duration-300 ${
                activeTab === 'dashboard'
                  ? 'bg-brand-indigo text-white shadow-glow-indigo border border-indigo-400/30'
                  : 'bg-slate-100 dark:bg-navy-850 hover:bg-slate-200 dark:hover:bg-navy-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10'
              }`}
            >
              <LayoutDashboard className="w-4 h-4 text-brand-indigo dark:text-brand-cyan" />
              <span>Dashboard</span>
            </button>

            {/* Login / Auth Modal Trigger */}
            <button
              onClick={onOpenAuth}
              className="gradient-btn px-4 py-2 rounded-xl text-xs font-bold text-white shadow-glow-indigo flex items-center gap-2"
            >
              <User className="w-3.5 h-3.5" />
              <span>Portal Login</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-navy-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-brand-indigo" />}
            </button>

            <button
              onClick={onOpenSearch}
              className="p-2 rounded-lg bg-slate-100 dark:bg-navy-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300"
            >
              <Search className="w-4 h-4 text-brand-indigo dark:text-brand-cyan" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-navy-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-navy-950/95 border-b border-slate-200 dark:border-white/10 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-2 mt-3 animate-fadeIn">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive 
                    ? 'bg-gradient-to-r from-brand-indigo to-brand-blue text-white shadow-md' 
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4 text-brand-indigo dark:text-brand-cyan" />
                  <span>{item.label}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            );
          })}

          <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setActiveTab('dashboard');
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 rounded-xl bg-slate-100 dark:bg-navy-850 text-slate-900 dark:text-white font-semibold text-sm flex items-center justify-center gap-2 border border-slate-200 dark:border-white/10"
            >
              <LayoutDashboard className="w-4 h-4 text-brand-indigo dark:text-brand-cyan" />
              Student Dashboard
            </button>
            <button
              onClick={() => {
                onOpenAuth();
                setMobileMenuOpen(false);
              }}
              className="w-full gradient-btn py-3 rounded-xl text-white font-bold text-sm flex items-center justify-center gap-2"
            >
              <User className="w-4 h-4" />
              Portal Login / Register
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
