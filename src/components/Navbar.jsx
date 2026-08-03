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
import { Button } from './ui/Button';

export default function Navbar({
  activeTab,
  setActiveTab,
  onOpenSearch,
  onOpenAuth,
  isDarkMode,
  setIsDarkMode
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

  // Decluttered: Max 5 key nav items, no inline badges ("POPULAR", "HIRING")
  const navItems = [
    { id: 'home', label: 'Home', icon: Sparkles },
    { id: 'internships', label: 'Internships', icon: GraduationCap },
    { id: 'services', label: 'Services', icon: Code2 },
    { id: 'courses', label: 'Courses', icon: Briefcase },
    { id: 'verify', label: 'Verify ID', icon: FileCheck2 },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/85 dark:bg-navy-950/85 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/10 shadow-sm py-3'
          : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Brand Logo — uses /logo.svg from public/ */}
          <button
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <img
              src="/favicon.png"
              alt="Navyan Logo"
              className="w-9 h-9 rounded-xl shadow-sm transition-transform group-hover:scale-105 object-contain"
            />
            <div className="flex flex-col text-left">
              <span className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
                NAVYAN
              </span>
              <span className="text-[10px] font-semibold tracking-widest text-slate-500 dark:text-slate-400 uppercase -mt-1">
                Tech &amp; Internships
              </span>
            </div>
          </button>

          {/* Desktop Airy Navigation Links (px-6 py-3.5 gap-6) */}
          <nav className="hidden lg:flex items-center gap-6 bg-slate-100/80 dark:bg-navy-900/70 px-6 py-2 rounded-full border border-slate-200/80 dark:border-white/10 backdrop-blur-md">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative py-1 text-xs font-semibold transition-all duration-200 flex items-center gap-2 ${isActive
                      ? 'text-slate-900 dark:text-white font-bold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-brand-indigo dark:text-brand-cyan' : 'text-slate-400'}`} />
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-slate-900 dark:bg-white" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* 3 Utility Actions on Right: 1) Command Palette, 2) Theme Switcher, 3) Portal Login */}
          <div className="hidden lg:flex items-center gap-3">

            {/* 1) Command Palette / Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100/80 dark:bg-navy-900/80 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/20 transition-all text-xs"
              title="Search internships, courses & services"
            >
              <Search className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
              <span>Search...</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-white dark:bg-navy-800 text-slate-500 dark:text-slate-400 rounded border border-slate-200 dark:border-white/10">
                ⌘K
              </kbd>
            </button>

            {/* 2) Theme Switcher Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2.5 rounded-xl bg-slate-100/80 dark:bg-navy-900/80 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/10 transition-all"
              aria-label="Toggle Theme"
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* 3) Single Primary "Portal Login" Button (Humanized Slate/White Token) */}
            <Button
              variant="primary"
              size="sm"
              icon={User}
              onClick={onOpenAuth}
            >
              Portal Login
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-navy-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            <button
              onClick={onOpenSearch}
              className="p-2 rounded-lg bg-slate-100 dark:bg-navy-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300"
            >
              <Search className="w-4 h-4 text-slate-500 dark:text-slate-400" />
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
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold shadow-sm'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4" />
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
              <LayoutDashboard className="w-4 h-4 text-slate-700 dark:text-slate-300" />
              Student Dashboard
            </button>
            <Button
              variant="primary"
              size="md"
              icon={User}
              className="w-full justify-center"
              onClick={() => {
                onOpenAuth();
                setMobileMenuOpen(false);
              }}
            >
              Portal Login / Register
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
