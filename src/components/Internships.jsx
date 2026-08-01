import React, { useState } from 'react';
import { 
  GraduationCap, 
  Search, 
  Filter, 
  Sparkles, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Award, 
  ArrowRight, 
  FileText, 
  X, 
  ShieldCheck, 
  Zap, 
  Building2,
  Users,
  ChevronRight
} from 'lucide-react';
import { MOCK_INTERNSHIPS } from '../data/mockData';

export default function Internships({ selectedInternship, setSelectedInternship, onShowToast }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('All');
  const [selectedMode, setSelectedMode] = useState('All');
  const [applyModalOpen, setApplyModalOpen] = useState(false);

  // Form State
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    graduationYear: '2026',
    planTier: 'mentorship',
    resumeFileName: ''
  });

  const domains = ['All', 'Web Development', 'AI & Data Science', 'Cloud & DevOps', 'UI/UX Design', 'Cybersecurity', 'Mobile Dev'];
  const modes = ['All', 'Remote', 'Hybrid'];

  const filteredInternships = MOCK_INTERNSHIPS.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesDomain = selectedDomain === 'All' || item.domain === selectedDomain;
    const matchesMode = selectedMode === 'All' || item.mode === selectedMode;
    return matchesSearch && matchesDomain && matchesMode;
  });

  const handleApplySubmit = (e) => {
    e.preventDefault();
    if (!formState.fullName || !formState.email) {
      alert('Please fill out your name and email');
      return;
    }
    setApplyModalOpen(false);
    onShowToast(`🎉 Congratulations ${formState.fullName}! Your internship application for ${selectedInternship.title} was submitted successfully. Check your email for assessment instructions.`);
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-indigo/20 text-brand-cyan text-xs font-semibold border border-brand-indigo/30">
          <GraduationCap className="w-4 h-4" />
          <span>Verified Industry Internships • Guaranteed Stipends</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
          Explore Active <span className="gradient-text-primary">Internship Tracks</span>
        </h1>
        <p className="text-slate-300 text-sm leading-relaxed">
          Gain real-world experience, build production projects with 1-on-1 industry mentors, and earn verifiable credentials and PPO opportunities.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="glass-panel p-6 rounded-3xl space-y-4 border border-white/10">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by role or tech stack (e.g. React, Python)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-navy-950/80 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-brand-indigo"
            />
          </div>

          {/* Mode Selector Buttons */}
          <div className="flex items-center gap-2 bg-navy-950/80 p-1.5 rounded-2xl border border-white/10 self-start md:self-auto">
            <span className="text-[11px] text-slate-400 px-2 font-semibold flex items-center gap-1">
              <Filter className="w-3 h-3 text-brand-cyan" />
              Mode:
            </span>
            {modes.map(mode => (
              <button
                key={mode}
                onClick={() => setSelectedMode(mode)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedMode === mode
                    ? 'bg-brand-indigo text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>

        </div>

        {/* Domain Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pt-2 pb-1 scrollbar-none">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-2">Domain:</span>
          {domains.map(dom => (
            <button
              key={dom}
              onClick={() => setSelectedDomain(dom)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold shrink-0 transition-all ${
                selectedDomain === dom
                  ? 'bg-gradient-to-r from-brand-indigo to-brand-blue text-white shadow-glow-indigo'
                  : 'bg-navy-900/80 text-slate-400 border border-white/5 hover:text-white hover:border-brand-indigo/40'
              }`}
            >
              {dom}
            </button>
          ))}
        </div>
      </div>

      {/* Internships Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredInternships.map(item => (
          <div 
            key={item.id}
            className="glass-panel p-6 rounded-3xl glass-panel-hover flex flex-col justify-between space-y-5 border border-white/10 relative overflow-hidden group"
          >
            {/* Top Badge */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-brand-indigo/20 text-brand-cyan border border-brand-indigo/30 uppercase tracking-wider">
                  {item.domain}
                </span>
                <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  {item.spotsLeft} Openings
                </span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-brand-indigo" />
                {item.company} • <MapPin className="w-3 h-3 text-slate-400 inline ml-1" /> {item.mode}
              </p>

              <p className="mt-3 text-xs text-slate-300 line-clamp-3 leading-relaxed">
                {item.description}
              </p>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {item.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="text-[10px] font-medium px-2.5 py-1 rounded-lg bg-navy-900/90 text-slate-300 border border-white/5">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Meta & CTAs */}
            <div className="pt-4 border-t border-white/10 space-y-4">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-[10px] text-slate-500 block uppercase">Stipend</span>
                  <span className="font-extrabold text-brand-cyan">{item.stipend}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block uppercase">Batch Starts</span>
                  <span className="font-semibold text-slate-300">{item.batchStartDate}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedInternship(item)}
                  className="flex-1 py-2.5 rounded-xl bg-navy-850 hover:bg-navy-800 text-slate-200 font-semibold text-xs border border-white/10 transition-colors"
                >
                  View Details
                </button>
                <button
                  onClick={() => {
                    setSelectedInternship(item);
                    setApplyModalOpen(true);
                  }}
                  className="flex-1 gradient-btn py-2.5 rounded-xl text-white font-bold text-xs shadow-glow-indigo flex items-center justify-center gap-1"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* DETAIL MODAL / DRAWER */}
      {selectedInternship && !applyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-navy-900 border border-white/10 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative">
            
            <button
              onClick={() => setSelectedInternship(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-navy-850 hover:bg-white/10 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider">
                {selectedInternship.domain} • {selectedInternship.mode}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {selectedInternship.title}
              </h2>
              <p className="text-xs text-slate-400 flex items-center gap-2">
                <span>Offered by {selectedInternship.company}</span>
                <span>•</span>
                <span className="text-emerald-400 font-semibold">{selectedInternship.spotsLeft} Open Spots</span>
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-navy-950/70 border border-white/5 grid grid-cols-3 gap-4 text-center">
              <div>
                <span className="text-[10px] text-slate-400 uppercase block">Stipend</span>
                <span className="text-sm font-bold text-brand-cyan">{selectedInternship.stipend}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase block">Duration</span>
                <span className="text-sm font-bold text-slate-200">{selectedInternship.duration}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase block">Start Date</span>
                <span className="text-sm font-bold text-slate-200">{selectedInternship.batchStartDate}</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Program Overview</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedInternship.description}
              </p>
            </div>

            {/* Perks */}
            <div>
              <h4 className="text-sm font-bold text-white mb-3">Included Benefits & Perks</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {selectedInternship.perks.map((perk, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Required Skills */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Key Competencies & Prerequisites</h4>
              <div className="flex flex-wrap gap-2">
                {selectedInternship.requirements.map((req, rIdx) => (
                  <span key={rIdx} className="text-xs px-3 py-1 rounded-xl bg-navy-850 text-slate-300 border border-white/5">
                    {req}
                  </span>
                ))}
              </div>
            </div>

            {/* Plan Selector */}
            <div className="p-5 rounded-2xl bg-navy-950 border border-brand-indigo/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  Select Internship Track Tier:
                </span>
                <span className="text-[10px] text-brand-cyan font-semibold">100% Money-back Guarantee</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => setFormState({ ...formState, planTier: 'standard' })}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    formState.planTier === 'standard'
                      ? 'bg-brand-indigo/20 border-brand-indigo text-white'
                      : 'bg-navy-900 border-white/10 text-slate-400 hover:border-white/20'
                  }`}
                >
                  <div className="font-bold text-xs">Standard Track (Free)</div>
                  <div className="text-[10px] text-slate-400 mt-1">Self-paced live tasks + Verified Certificate</div>
                </button>

                <button
                  onClick={() => setFormState({ ...formState, planTier: 'mentorship' })}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    formState.planTier === 'mentorship'
                      ? 'bg-brand-indigo/30 border-brand-cyan text-white shadow-glow-indigo'
                      : 'bg-navy-900 border-white/10 text-slate-400 hover:border-white/20'
                  }`}
                >
                  <div className="font-bold text-xs flex items-center justify-between">
                    <span>1-on-1 Mentorship Track</span>
                    <span className="text-[9px] bg-brand-cyan text-navy-950 font-bold px-1.5 py-0.5 rounded">RECOMMENDED</span>
                  </div>
                  <div className="text-[10px] text-slate-300 mt-1">Direct Code Reviews + Day-1 Offer Letter + PPO Fast Track</div>
                </button>
              </div>
            </div>

            {/* Modal Action Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setSelectedInternship(null)}
                className="w-1/3 py-3 rounded-xl bg-navy-850 hover:bg-navy-800 text-slate-300 font-bold text-xs border border-white/10"
              >
                Close
              </button>
              <button
                onClick={() => setApplyModalOpen(true)}
                className="w-2/3 gradient-btn py-3 rounded-xl text-white font-bold text-xs shadow-glow-indigo flex items-center justify-center gap-2"
              >
                <span>Proceed to Apply</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

      {/* APPLICATION MODAL FORM */}
      {selectedInternship && applyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-navy-900 border border-white/10 rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative">
            
            <button
              onClick={() => setApplyModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-navy-850 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider">Step 2 of 2 • Fast-Track Application</span>
              <h3 className="text-2xl font-bold text-white mt-1">
                Apply for {selectedInternship.title}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Fill in your candidate details to generate your screening invitation.
              </p>
            </div>

            <form onSubmit={handleApplySubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Full Legal Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ananya Sharma"
                  value={formState.fullName}
                  onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-indigo"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="student@college.edu"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-indigo"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-indigo"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">College / University</label>
                  <input
                    type="text"
                    placeholder="e.g. VIT Vellore / IIT Delhi"
                    value={formState.college}
                    onChange={(e) => setFormState({ ...formState, college: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-indigo"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Graduation Year</label>
                  <select
                    value={formState.graduationYear}
                    onChange={(e) => setFormState({ ...formState, graduationYear: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-white focus:outline-none focus:border-brand-indigo"
                  >
                    <option value="2025">2025 Passout</option>
                    <option value="2026">2026 Passout</option>
                    <option value="2027">2027 Passout</option>
                    <option value="2028">2028 or Later</option>
                  </select>
                </div>
              </div>

              {/* Upload Resume Simulation */}
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Upload Resume (PDF / DOCX)</label>
                <div className="p-4 rounded-xl bg-navy-950 border border-dashed border-white/20 text-center space-y-2">
                  <FileText className="w-6 h-6 text-brand-cyan mx-auto" />
                  <p className="text-[11px] text-slate-400">
                    {formState.resumeFileName || 'Drag and drop your resume file here or click to browse'}
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormState({ ...formState, resumeFileName: 'Resume_Navyan_2026.pdf' })}
                    className="px-3 py-1 rounded-lg bg-navy-850 text-brand-cyan font-semibold text-[11px] border border-white/10"
                  >
                    Select PDF File
                  </button>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setApplyModalOpen(false)}
                  className="w-1/3 py-3 rounded-xl bg-navy-850 text-slate-300 font-bold"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="w-2/3 gradient-btn py-3 rounded-xl text-white font-bold shadow-glow-indigo flex items-center justify-center gap-2"
                >
                  <span>Submit Application</span>
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
}
