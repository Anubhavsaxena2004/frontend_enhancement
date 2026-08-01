import React, { useState } from 'react';
import { X, User, Mail, Lock, Sparkles, ArrowRight, ShieldCheck, Github } from 'lucide-react';

export default function AuthModal({ isOpen, onClose, onShowToast }) {
  const [authMode, setAuthMode] = useState('login'); // 'login', 'signup', 'forgot'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
    if (authMode === 'login') {
      onShowToast(`Welcome back, ${email || 'Student'}! Logged in successfully.`);
    } else if (authMode === 'signup') {
      onShowToast(`🎉 Account created for ${name || email}! Check your inbox for activation.`);
    } else {
      onShowToast(`Password reset link sent to ${email}.`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-navy-900 border border-white/10 rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-6 shadow-2xl relative">
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-navy-850 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Brand Title */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-gradient-to-tr from-brand-indigo to-brand-cyan p-0.5 shadow-glow-indigo">
            <div className="w-full h-full bg-navy-950 rounded-[14px] flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-brand-cyan" />
            </div>
          </div>
          <h3 className="text-2xl font-extrabold text-white">
            {authMode === 'login' && 'Student & Client Portal'}
            {authMode === 'signup' && 'Create Navyan Account'}
            {authMode === 'forgot' && 'Reset Password'}
          </h3>
          <p className="text-xs text-slate-400">
            {authMode === 'login' && 'Enter your credentials to access your dashboard'}
            {authMode === 'signup' && 'Join 15,000+ interns & engineering clients'}
            {authMode === 'forgot' && 'Enter your registered email address'}
          </p>
        </div>

        {/* OAuth Buttons */}
        {authMode !== 'forgot' && (
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => {
                onClose();
                onShowToast('Signed in with Google OAuth');
              }}
              className="p-2.5 rounded-xl bg-navy-950 border border-white/10 hover:border-white/20 text-xs font-semibold text-slate-200 flex items-center justify-center gap-2"
            >
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-4 h-4" />
              <span>Google</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onShowToast('Signed in with GitHub OAuth');
              }}
              className="p-2.5 rounded-xl bg-navy-950 border border-white/10 hover:border-white/20 text-xs font-semibold text-slate-200 flex items-center justify-center gap-2"
            >
              <Github className="w-4 h-4 text-white" />
              <span>GitHub</span>
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          {authMode === 'signup' && (
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Full Name</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Verma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-indigo"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-slate-300 font-semibold mb-1">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                placeholder="name@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-indigo"
              />
            </div>
          </div>

          {authMode !== 'forgot' && (
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-slate-300 font-semibold">Password</label>
                {authMode === 'login' && (
                  <button
                    type="button"
                    onClick={() => setAuthMode('forgot')}
                    className="text-brand-cyan hover:underline text-[11px]"
                  >
                    Forgot?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-indigo"
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full gradient-btn py-3 rounded-xl text-white font-bold shadow-glow-indigo flex items-center justify-center gap-2"
          >
            <span>
              {authMode === 'login' && 'Sign In to Portal'}
              {authMode === 'signup' && 'Create Account'}
              {authMode === 'forgot' && 'Send Reset Email'}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Switch Mode Links */}
        <div className="text-center text-xs text-slate-400 pt-2 border-t border-white/10">
          {authMode === 'login' ? (
            <p>
              Don't have an account?{' '}
              <button onClick={() => setAuthMode('signup')} className="text-brand-cyan font-bold hover:underline">
                Sign Up Free
              </button>
            </p>
          ) : (
            <p>
              Already registered?{' '}
              <button onClick={() => setAuthMode('login')} className="text-brand-cyan font-bold hover:underline">
                Sign In Here
              </button>
            </p>
          )}
        </div>

      </div>
    </div>
  );
}
