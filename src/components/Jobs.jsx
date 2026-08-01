import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign, 
  Search, 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  X,
  FileText
} from 'lucide-react';
import { MOCK_JOBS } from '../data/mockData';

export default function Jobs({ onShowToast }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);
  const [applyModalOpen, setApplyModalOpen] = useState(false);

  const filteredJobs = MOCK_JOBS.filter(job => 
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleJobApply = (e) => {
    e.preventDefault();
    setApplyModalOpen(false);
    onShowToast(`🚀 Job Application for "${selectedJob.title}" submitted successfully! Our recruitment team will review your profile.`);
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-emerald/20 text-brand-emerald text-xs font-semibold border border-brand-emerald/30">
          <Briefcase className="w-4 h-4" />
          <span>Full-Time & Fresher Openings</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
          Direct Tech <span className="gradient-text-gold">Job Board</span>
        </h1>
        <p className="text-slate-300 text-sm leading-relaxed">
          Fast-track your full-time software engineering career. Direct hiring with competitive CTC and PPO conversions.
        </p>
      </div>

      {/* Search */}
      <div className="glass-panel p-4 rounded-2xl max-w-xl mx-auto border border-white/10 flex items-center gap-3">
        <Search className="w-4 h-4 text-slate-400 pl-1" />
        <input
          type="text"
          placeholder="Search by role or technology (e.g. Full Stack, Python)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-transparent text-xs text-white placeholder:text-slate-500 focus:outline-none"
        />
      </div>

      {/* Jobs List */}
      <div className="space-y-4 max-w-4xl mx-auto">
        {filteredJobs.map(job => (
          <div key={job.id} className="glass-panel p-6 rounded-2xl glass-panel-hover flex flex-col md:flex-row md:items-center justify-between gap-6 border border-white/10">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase">
                  {job.type}
                </span>
                <span className="text-xs text-slate-500">• Posted {job.postedTime}</span>
              </div>
              <h3 className="text-xl font-bold text-white">{job.title}</h3>
              <p className="text-xs text-slate-400 flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-brand-indigo" />
                  {job.company}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {job.location}
                </span>
                <span className="flex items-center gap-1 text-amber-400 font-semibold">
                  <DollarSign className="w-3.5 h-3.5" />
                  {job.salary}
                </span>
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {job.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="text-[10px] px-2.5 py-0.5 rounded-md bg-navy-950 text-slate-300 border border-white/5">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setSelectedJob(job);
                setApplyModalOpen(true);
              }}
              className="gradient-btn px-6 py-3 rounded-xl text-white font-bold text-xs shadow-glow-indigo flex items-center justify-center gap-2 shrink-0"
            >
              <span>Quick Apply</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* APPLY MODAL */}
      {selectedJob && applyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-navy-900 border border-white/10 rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl relative">
            <button
              onClick={() => setApplyModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-navy-850 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider">Job Application</span>
              <h3 className="text-xl font-bold text-white mt-1">{selectedJob.title}</h3>
              <p className="text-xs text-slate-400">{selectedJob.company} • {selectedJob.salary}</p>
            </div>

            <form onSubmit={handleJobApply} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Full Name</label>
                <input type="text" required placeholder="e.g. Rahul Sharma" className="w-full px-3 py-2 rounded-xl bg-navy-950 border border-white/10 text-white" />
              </div>
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Email Address</label>
                <input type="email" required placeholder="name@domain.com" className="w-full px-3 py-2 rounded-xl bg-navy-950 border border-white/10 text-white" />
              </div>
              <div>
                <label className="block text-slate-300 font-semibold mb-1">LinkedIn / GitHub Profile URL</label>
                <input type="url" required placeholder="https://linkedin.com/in/username" className="w-full px-3 py-2 rounded-xl bg-navy-950 border border-white/10 text-white" />
              </div>

              <button
                type="submit"
                className="w-full gradient-btn py-3 rounded-xl text-white font-bold shadow-glow-indigo flex items-center justify-center gap-2 mt-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Submit Job Application</span>
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
