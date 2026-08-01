import React, { useState } from 'react';
import { Button } from './ui/Button';
import { X, User, Mail, Lock, Sparkles, ArrowRight, ShieldCheck, Github } from 'lucide-react';

export default function AuthModal({ isOpen, onClose, onShowToast }) {
  const [authMode, setAuthMode] = useState('login');
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-navy-950/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10 rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-6 shadow-2xl relative text-slate-900 dark:text-white">
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-slate-100 dark:bg-navy-850 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Brand Title */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 flex items-center justify-center shadow-sm">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            {authMode === 'login' && 'Student & Client Portal'}
            {authMode === 'signup' && 'Create Navyan Account'}
            {authMode === 'forgot' && 'Reset Password'}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
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
              className="p-2.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 text-xs font-semibold text-slate-700 dark:text-slate-200 flex items-center justify-center gap-2"
            >
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-4 h-4" />
              <span>Google</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onShowToast('Signed in with GitHub OAuth');
              }}
              className="p-2.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 text-xs font-semibold text-slate-700 dark:text-slate-200 flex items-center justify-center gap-2"
            >
              <Github className="w-4 h-4 text-slate-900 dark:text-white" />
              <span>GitHub</span>
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          {authMode === 'signup' && (
            <div>
              <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">Full Name</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Verma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-slate-400"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                placeholder="name@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-slate-400"
              />
            </div>
          </div>

          {authMode !== 'forgot' && (
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-slate-700 dark:text-slate-300 font-semibold">Password</label>
                {authMode === 'login' && (
                  <button
                    type="button"
                    onClick={() => setAuthMode('forgot')}
                    className="text-slate-900 dark:text-white hover:underline text-[11px] font-semibold"
                  >
                    Forgot?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-slate-400"
                />
              </div>
            </div>
          )}

          <Button
            variant="primary"
            size="md"
            type="submit"
            icon={ArrowRight}
            className="w-full"
          >
            {authMode === 'login' && 'Sign In to Portal'}
            {authMode === 'signup' && 'Create Account'}
            {authMode === 'forgot' && 'Send Reset Email'}
          </Button>
        </form>

        {/* Switch Mode Links */}
        <div className="text-center text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-white/10">
          {authMode === 'login' ? (
            <p>
              Don't have an account?{' '}
              <button onClick={() => setAuthMode('signup')} className="text-slate-900 dark:text-white font-bold hover:underline">
                Sign Up Free
              </button>
            </p>
          ) : (
            <p>
              Already registered?{' '}
              <button onClick={() => setAuthMode('login')} className="text-slate-900 dark:text-white font-bold hover:underline">
                Sign In Here
              </button>
            </p>
          )}
        </div>

      </div>
    </div>
  );
}
