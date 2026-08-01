import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
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
  const [activeSubTab, setActiveSubTab] = useState('overview');
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
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 transition-colors duration-300">
      
      {/* Student Profile Card Header */}
      <div className="p-8 rounded-3xl bg-white/90 dark:bg-navy-900/80 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-sm relative overflow-hidden text-slate-900 dark:text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          
          <div className="flex items-center gap-5">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-20 h-20 rounded-2xl object-cover border-2 border-slate-900 dark:border-white shadow-sm"
            />
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">{profile.name}</h1>
                <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 uppercase">
                  Active Intern
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{profile.email} • Joined {profile.joinedDate}</p>
              
              <div className="flex items-center gap-3 mt-3 text-xs">
                <span className="text-slate-900 dark:text-white font-semibold flex items-center gap-1">
                  <GraduationCap className="w-4 h-4 text-slate-900 dark:text-white" />
                  {profile.activeInternship.title}
                </span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-600 dark:text-slate-300">Mentor: <strong>{profile.activeInternship.mentor}</strong></span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-navy-950/80 border border-slate-200 dark:border-white/10 text-center min-w-[200px]">
            <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-semibold block">Internship Progress</span>
            <div className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
              {profile.activeInternship.progress}%
            </div>
            <div className="w-full bg-slate-200 dark:bg-navy-900 h-2 rounded-full mt-2 overflow-hidden border border-slate-300 dark:border-white/5">
              <div className="bg-slate-900 dark:bg-white h-full rounded-full" style={{ width: `${profile.activeInternship.progress}%` }} />
            </div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 block">{profile.activeInternship.daysRemaining} days remaining</span>
          </div>

        </div>
      </div>

      {/* Sub Navigation Bar */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-white/10 pb-4 overflow-x-auto">
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
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm'
                  : 'bg-white dark:bg-navy-900/60 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/5'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
              {tab.badge && (
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
                  isActive 
                    ? 'bg-white/20 dark:bg-slate-900/20 text-white dark:text-slate-900' 
                    : 'bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-300'
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
            <div className="md:col-span-2 p-6 rounded-3xl bg-white/90 dark:bg-navy-900/80 border border-slate-200/80 dark:border-white/10 shadow-sm space-y-4 text-slate-900 dark:text-white">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-500" />
                  Active Milestone Checklist
                </h3>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">Milestone 3 of 4</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-navy-950/80 border border-slate-200 dark:border-white/5 space-y-3 text-xs">
                <div className="font-bold text-slate-900 dark:text-white text-sm">{profile.activeInternship.nextMilestone}</div>
                <p className="text-slate-600 dark:text-slate-300">
                  Build and deploy a full-stack REST API with JWT authentication and post it to your GitHub portfolio. Submit link for senior review.
                </p>

                <div className="space-y-2 pt-2">
                  {[
                    { text: 'Set up Express server & MongoDB schema', done: true },
                    { text: 'Implement JWT refresh token auth middleware', done: true },
                    { text: 'Deploy service to Vercel/Render with Docker', done: false },
                  ].map((task, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className={`w-4 h-4 ${task.done ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`} />
                      <span className={task.done ? 'line-through text-slate-400' : 'font-semibold text-slate-900 dark:text-white'}>
                        {task.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                variant="primary"
                size="md"
                icon={ChevronRight}
                onClick={() => setActiveSubTab('submissions')}
              >
                Submit Milestone Solution
              </Button>
            </div>

            {/* Earned Credentials Box */}
            <div className="p-6 rounded-3xl bg-white/90 dark:bg-navy-900/80 border border-slate-200/80 dark:border-white/10 shadow-sm space-y-4 flex flex-col justify-between text-slate-900 dark:text-white">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 flex items-center justify-center shadow-sm">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Earned Credentials</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  You have 2 verified credentials ready for LinkedIn & Resume showcase.
                </p>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-white/5 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-slate-700 dark:text-slate-200">
                    <span>Web Dev Internship Cert</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">NAV-2026-8941</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-700 dark:text-slate-200">
                    <span>Official Day-1 Offer Letter</span>
                    <span className="text-slate-900 dark:text-white font-bold">NAV-OL-4412</span>
                  </div>
                </div>
              </div>

              <Button
                variant="secondary"
                size="md"
                icon={ShieldCheck}
                onClick={() => setActiveTab('verify')}
                className="w-full"
              >
                Verify Credentials
              </Button>
            </div>

          </div>

        </div>
      )}

      {/* SUBMISSIONS TAB */}
      {activeSubTab === 'submissions' && (
        <div className="space-y-8 animate-fadeIn max-w-4xl mx-auto">
          
          {/* Submission Form */}
          <div className="p-6 rounded-3xl bg-white/90 dark:bg-navy-900/80 border border-slate-200/80 dark:border-white/10 shadow-sm space-y-4 text-slate-900 dark:text-white">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <UploadCloud className="w-5 h-5 text-slate-900 dark:text-white" />
              Submit Project Assignment / Code Repo
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Paste your public GitHub repository URL or live deployment Vercel/Netlify link below for automated code review.
            </p>

            <form onSubmit={handleSubmissionUpload} className="flex flex-col sm:flex-row gap-3">
              <input
                type="url"
                required
                placeholder="https://github.com/username/navyan-project-submission"
                value={submissionFile}
                onChange={(e) => setSubmissionFile(e.target.value)}
                className="flex-1 px-4 py-3 rounded-2xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-xs placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none"
              />
              <Button
                variant="primary"
                size="md"
                type="submit"
                icon={CheckCircle2}
                className="shrink-0"
              >
                Upload & Review
              </Button>
            </form>
          </div>

          {/* Past Submissions */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">Submission Trajectory</h4>
            {profile.submissions.map((sub, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white/90 dark:bg-navy-900/80 border border-slate-200/80 dark:border-white/10 flex items-center justify-between text-xs shadow-sm">
                <div className="space-y-1">
                  <div className="font-bold text-slate-900 dark:text-white">{sub.title}</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Submitted on {sub.date}</div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-slate-900 dark:text-white font-bold">{sub.score}</span>
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                    sub.status === 'Approved' 
                      ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                      : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
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
          <div className="p-8 rounded-3xl bg-white/90 dark:bg-navy-900/80 border border-slate-200/80 dark:border-white/10 shadow-sm space-y-6 text-slate-900 dark:text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Navyan Peer Referral Program</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Earn ₹1,500 instant wallet cash for every friend who joins Navyan internships or courses.</p>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-500 dark:text-slate-400 block">Total Earnings</span>
                <span className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">{profile.referralEarnings}</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs">
                <span className="text-slate-500 dark:text-slate-400 block">Your Unique Referral Code:</span>
                <code className="text-sm font-bold text-slate-900 dark:text-white font-mono">{profile.referralCode}</code>
              </div>
              <Button
                variant="primary"
                size="sm"
                icon={copiedReferral ? Check : Copy}
                onClick={handleCopyReferral}
              >
                {copiedReferral ? 'Copied Link!' : 'Copy Invite Link'}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* ALERTS TAB */}
      {activeSubTab === 'alerts' && (
        <div className="space-y-3 animate-fadeIn max-w-3xl mx-auto">
          {[
            { title: 'Code Review Approved', text: 'Senior mentor Vikramaditya approved your React State milestone (Score: 98/100).', time: '2 hours ago', icon: CheckCircle2, color: 'text-emerald-600 dark:text-emerald-400' },
            { title: 'New Certificate Issued', text: 'Your Certificate NAV-2026-8941 was verified and added to your wallet.', time: '1 day ago', icon: Award, color: 'text-slate-900 dark:text-white' }
          ].map((alertItem, aIdx) => {
            const Icon = alertItem.icon;
            return (
              <div key={aIdx} className="p-4 rounded-2xl bg-white/90 dark:bg-navy-900/80 border border-slate-200/80 dark:border-white/10 shadow-sm flex items-start gap-4 text-xs text-slate-900 dark:text-white">
                <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-navy-950 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className={`w-4 h-4 ${alertItem.color}`} />
                </div>
                <div className="space-y-0.5">
                  <div className="font-bold text-slate-900 dark:text-white flex items-center justify-between">
                    <span>{alertItem.title}</span>
                    <span className="text-[10px] text-slate-500 font-normal">{alertItem.time}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">{alertItem.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
}
