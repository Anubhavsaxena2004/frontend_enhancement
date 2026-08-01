import React, { useState } from 'react';
import { 
  User, 
  Award, 
  CheckCircle2, 
  Clock, 
  UploadCloud, 
  Share2, 
  Copy, 
  Bell, 
  TrendingUp, 
  FileText, 
  Sparkles, 
  GraduationCap, 
  Code2, 
  Check, 
  ChevronRight,
  ShieldCheck,
  Zap,
  DollarSign
} from 'lucide-react';
import { MOCK_USER_PROFILE } from '../data/mockData';

export default function Dashboard({ onShowToast, setActiveTab }) {
  const [activeSubTab, setActiveSubTab] = useState('overview'); // 'overview', 'submissions', 'referrals', 'alerts'
  const [copiedReferral, setCopiedReferral] = useState(false);
  const [submissionFile, setSubmissionFile] = useState('');

  const profile = MOCK_USER_PROFILE;

  const handleCopyReferral = () => {
    navigator.clipboard.writeText(`https://navyan.tech/register?ref=${profile.referralCode}`);
    setCopiedReferral(true);
    setTimeout(() => setCopiedReferral(false), 2500);
    onShowToast('📋 Referral link copied to clipboard!');
  };

  const handleSubmissionUpload = (e) => {
    e.preventDefault();
    if (!submissionFile) {
      alert('Please upload a file or paste your GitHub repository link');
      return;
    }
    onShowToast('🚀 Project submission received! Code review feedback will be provided within 12 hours.');
    setSubmissionFile('');
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Student Profile Card Header */}
      <div className="glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-indigo/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          
          <div className="flex items-center gap-5">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-20 h-20 rounded-2xl object-cover border-2 border-brand-indigo shadow-glow-indigo"
            />
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white">{profile.name}</h1>
                <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase">
                  Active Intern
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">{profile.email} • Joined {profile.joinedDate}</p>
              
              <div className="flex items-center gap-3 mt-3 text-xs">
                <span className="text-brand-cyan font-semibold flex items-center gap-1">
                  <GraduationCap className="w-4 h-4 text-brand-cyan" />
                  {profile.activeInternship.title}
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-300">Mentor: <strong>{profile.activeInternship.mentor}</strong></span>
              </div>
            </div>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-white/10 text-center min-w-[200px]">
            <span className="text-[10px] text-slate-400 uppercase font-semibold block">Internship Progress</span>
            <div className="text-2xl font-extrabold text-white gradient-text-primary mt-1">
              {profile.activeInternship.progress}%
            </div>
            <div className="w-full bg-navy-950 h-2 rounded-full mt-2 overflow-hidden border border-white/5">
              <div className="bg-gradient-to-r from-brand-indigo to-brand-cyan h-full rounded-full" style={{ width: `${profile.activeInternship.progress}%` }} />
            </div>
            <span className="text-[10px] text-slate-400 mt-1 block">{profile.activeInternship.daysRemaining} days remaining</span>
          </div>

        </div>
      </div>

      {/* Sub Navigation Bar */}
      <div className="flex items-center gap-2 border-b border-white/10 pb-4 overflow-x-auto">
        {[
          { id: 'overview', label: 'Dashboard Overview', icon: GraduationCap },
          { id: 'submissions', label: 'Submissions & Projects', icon: FileText, badge: profile.submissions.length },
          { id: 'referrals', label: 'Referral Rewards', icon: DollarSign, badge: profile.referralEarnings },
          { id: 'alerts', label: 'Alerts & Feedback', icon: Bell, badge: '2 New' },
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 shrink-0 ${
                isActive
                  ? 'bg-gradient-to-r from-brand-indigo to-brand-blue text-white shadow-glow-indigo'
                  : 'bg-navy-900/60 text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-brand-cyan'}`} />
              <span>{tab.label}</span>
              {tab.badge && (
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
                  isActive ? 'bg-white/20 text-white' : 'bg-navy-800 text-brand-cyan'
                }`}>
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* SUB TAB CONTENT */}

      {/* OVERVIEW TAB */}
      {activeSubTab === 'overview' && (
        <div className="space-y-8 animate-fadeIn">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Active Milestone Card */}
            <div className="md:col-span-2 glass-panel p-6 rounded-3xl border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-400" />
                  Active Milestone Checklist
                </h3>
                <span className="text-xs text-brand-cyan font-semibold">Milestone 3 of 4</span>
              </div>

              <div className="p-4 rounded-2xl bg-navy-950/80 border border-white/5 space-y-3 text-xs">
                <div className="font-bold text-white text-sm">{profile.activeInternship.nextMilestone}</div>
                <p className="text-slate-300">
                  Build and deploy a full-stack REST API with JWT authentication and post it to your GitHub portfolio. Submit link for senior review.
                </p>

                <div className="space-y-2 pt-2">
                  {[
                    { text: 'Set up Express server & MongoDB schema', done: true },
                    { text: 'Implement JWT refresh token auth middleware', done: true },
                    { text: 'Deploy service to Vercel/Render with Docker', done: false },
                  ].map((task, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className={`w-4 h-4 ${task.done ? 'text-emerald-400' : 'text-slate-600'}`} />
                      <span className={task.done ? 'line-through text-slate-400' : 'font-semibold text-white'}>
                        {task.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setActiveSubTab('submissions')}
                className="gradient-btn px-6 py-3 rounded-xl text-white font-bold text-xs shadow-glow-indigo flex items-center gap-2"
              >
                <span>Submit Milestone Solution</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Earned Credentials Box */}
            <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Earned Credentials</h3>
                <p className="text-xs text-slate-400">
                  You have 2 verified credentials ready for LinkedIn & Resume showcase.
                </p>
                <div className="p-3 rounded-xl bg-navy-950 border border-white/5 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-slate-200">
                    <span>Web Dev Internship Cert</span>
                    <span className="text-emerald-400 font-bold">NAV-2026-8941</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-200">
                    <span>Official Day-1 Offer Letter</span>
                    <span className="text-brand-cyan font-bold">NAV-OL-4412</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setActiveTab('verify')}
                className="w-full py-2.5 rounded-xl bg-navy-850 hover:bg-navy-800 text-white font-bold text-xs border border-white/10 flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verify Credentials</span>
              </button>
            </div>

          </div>

        </div>
      )}

      {/* SUBMISSIONS TAB */}
      {activeSubTab === 'submissions' && (
        <div className="space-y-8 animate-fadeIn max-w-4xl mx-auto">
          
          {/* Submission Form */}
          <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <UploadCloud className="w-5 h-5 text-brand-cyan" />
              Submit Project Assignment / Code Repo
            </h3>
            <p className="text-xs text-slate-400">
              Paste your public GitHub repository URL or live deployment Vercel/Netlify link below for automated code review.
            </p>

            <form onSubmit={handleSubmissionUpload} className="flex flex-col sm:flex-row gap-3">
              <input
                type="url"
                required
                placeholder="https://github.com/username/navyan-project-submission"
                value={submissionFile}
                onChange={(e) => setSubmissionFile(e.target.value)}
                className="flex-1 px-4 py-3 rounded-2xl bg-navy-950 border border-white/10 text-white text-xs placeholder:text-slate-600 focus:outline-none focus:border-brand-indigo"
              />
              <button
                type="submit"
                className="gradient-btn px-6 py-3 rounded-2xl text-white font-bold text-xs shadow-glow-indigo shrink-0 flex items-center justify-center gap-2"
              >
                <span>Upload & Review</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Past Submissions */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white">Submission Trajectory</h4>
            {profile.submissions.map((sub, idx) => (
              <div key={idx} className="glass-panel p-4 rounded-2xl border border-white/10 flex items-center justify-between text-xs">
                <div className="space-y-1">
                  <div className="font-bold text-white">{sub.title}</div>
                  <div className="text-[10px] text-slate-400">Submitted on {sub.date}</div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-brand-cyan font-bold">{sub.score}</span>
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                    sub.status === 'Approved' 
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                  }`}>
                    {sub.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

      {/* REFERRALS TAB */}
      {activeSubTab === 'referrals' && (
        <div className="space-y-8 animate-fadeIn max-w-4xl mx-auto">
          <div className="glass-panel p-8 rounded-3xl border border-brand-indigo/40 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white">Navyan Peer Referral Program</h3>
                <p className="text-xs text-slate-400 mt-1">Earn ₹1,500 instant wallet cash for every friend who joins Navyan internships or courses.</p>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 block">Total Earnings</span>
                <span className="text-2xl font-extrabold text-emerald-400">{profile.referralEarnings}</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-navy-950 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs">
                <span className="text-slate-400 block">Your Unique Referral Code:</span>
                <code className="text-sm font-bold text-brand-cyan font-mono">{profile.referralCode}</code>
              </div>
              <button
                onClick={handleCopyReferral}
                className="gradient-btn px-6 py-2.5 rounded-xl text-white text-xs font-bold shadow-glow-indigo flex items-center gap-2"
              >
                {copiedReferral ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copiedReferral ? 'Copied Link!' : 'Copy Invite Link'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ALERTS TAB */}
      {activeSubTab === 'alerts' && (
        <div className="space-y-3 animate-fadeIn max-w-3xl mx-auto">
          {[
            { title: 'Code Review Approved', text: 'Senior mentor Vikramaditya approved your React State milestone (Score: 98/100).', time: '2 hours ago', icon: CheckCircle2, color: 'text-emerald-400' },
            { title: 'New Certificate Issued', text: 'Your Certificate NAV-2026-8941 was verified and added to your wallet.', time: '1 day ago', icon: Award, color: 'text-brand-cyan' }
          ].map((alertItem, aIdx) => {
            const Icon = alertItem.icon;
            return (
              <div key={aIdx} className="glass-panel p-4 rounded-2xl border border-white/10 flex items-start gap-4 text-xs">
                <div className="w-8 h-8 rounded-xl bg-navy-900 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className={`w-4 h-4 ${alertItem.color}`} />
                </div>
                <div className="space-y-0.5">
                  <div className="font-bold text-white flex items-center justify-between">
                    <span>{alertItem.title}</span>
                    <span className="text-[10px] text-slate-500 font-normal">{alertItem.time}</span>
                  </div>
                  <p className="text-slate-300">{alertItem.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
}
