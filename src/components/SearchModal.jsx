import React, { useState, useEffect } from 'react';
import { Search, X, GraduationCap, Code2, BookOpen, ShieldCheck, ArrowRight } from 'lucide-react';
import { MOCK_INTERNSHIPS, MOCK_SERVICES, MOCK_COURSES } from '../data/mockData';

export default function SearchModal({ isOpen, onClose, setActiveTab, onSelectInternship }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredInternships = MOCK_INTERNSHIPS.filter(i => 
    i.title.toLowerCase().includes(query.toLowerCase()) || 
    i.domain.toLowerCase().includes(query.toLowerCase())
  );

  const filteredServices = MOCK_SERVICES.filter(s => 
    s.title.toLowerCase().includes(query.toLowerCase())
  );

  const filteredCourses = MOCK_COURSES.filter(c => 
    c.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-navy-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-navy-900 border border-white/10 rounded-3xl max-w-xl w-full p-4 space-y-4 shadow-2xl relative">
        
        {/* Search Bar Input */}
        <div className="relative flex items-center">
          <Search className="w-5 h-5 text-brand-cyan absolute left-4" />
          <input
            type="text"
            autoFocus
            placeholder="Search internships, IT services, courses, or verification IDs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-navy-950 border border-white/10 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-brand-indigo"
          />
          <button
            onClick={onClose}
            className="absolute right-3 p-1.5 rounded-xl bg-navy-850 text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto space-y-4 pr-1 text-xs">
          
          {/* Internships Section */}
          {filteredInternships.length > 0 && (
            <div className="space-y-2">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 px-2">
                <GraduationCap className="w-3.5 h-3.5 text-brand-cyan" />
                <span>Internships ({filteredInternships.length})</span>
              </div>
              {filteredInternships.map(item => (
                <div
                  key={item.id}
                  onClick={() => {
                    setActiveTab('internships');
                    onSelectInternship(item);
                    onClose();
                  }}
                  className="p-3 rounded-xl bg-navy-950/80 border border-white/5 hover:border-brand-indigo/50 cursor-pointer flex items-center justify-between transition-all group"
                >
                  <div>
                    <div className="font-bold text-white group-hover:text-brand-cyan transition-colors">{item.title}</div>
                    <div className="text-[10px] text-slate-400">{item.domain} • Stipend: {item.stipend}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:translate-x-1 transition-transform" />
                </div>
              ))}
            </div>
          )}

          {/* Services Section */}
          {filteredServices.length > 0 && (
            <div className="space-y-2">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 px-2">
                <Code2 className="w-3.5 h-3.5 text-brand-indigo" />
                <span>IT Services ({filteredServices.length})</span>
              </div>
              {filteredServices.map(service => (
                <div
                  key={service.id}
                  onClick={() => {
                    setActiveTab('services');
                    onClose();
                  }}
                  className="p-3 rounded-xl bg-navy-950/80 border border-white/5 hover:border-brand-indigo/50 cursor-pointer flex items-center justify-between transition-all group"
                >
                  <div>
                    <div className="font-bold text-white group-hover:text-brand-cyan transition-colors">{service.title}</div>
                    <div className="text-[10px] text-slate-400">{service.tagline}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:translate-x-1 transition-transform" />
                </div>
              ))}
            </div>
          )}

          {/* Courses Section */}
          {filteredCourses.length > 0 && (
            <div className="space-y-2">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 px-2">
                <BookOpen className="w-3.5 h-3.5 text-brand-violet" />
                <span>Academy Courses ({filteredCourses.length})</span>
              </div>
              {filteredCourses.map(course => (
                <div
                  key={course.id}
                  onClick={() => {
                    setActiveTab('courses');
                    onClose();
                  }}
                  className="p-3 rounded-xl bg-navy-950/80 border border-white/5 hover:border-brand-indigo/50 cursor-pointer flex items-center justify-between transition-all group"
                >
                  <div>
                    <div className="font-bold text-white group-hover:text-brand-cyan transition-colors">{course.title}</div>
                    <div className="text-[10px] text-slate-400">{course.instructor} • Rating {course.rating}★</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:translate-x-1 transition-transform" />
                </div>
              ))}
            </div>
          )}

          {/* Quick Verification Direct Link */}
          <div
            onClick={() => {
              setActiveTab('verify');
              onClose();
            }}
            className="p-3 rounded-xl bg-brand-indigo/20 border border-brand-indigo/40 hover:border-brand-cyan cursor-pointer flex items-center justify-between text-xs"
          >
            <div className="flex items-center gap-2 text-white">
              <ShieldCheck className="w-4 h-4 text-brand-cyan" />
              <span>Verify Certificate ID or Offer Letter ID</span>
            </div>
            <ArrowRight className="w-4 h-4 text-brand-cyan" />
          </div>

        </div>

      </div>
    </div>
  );
}
