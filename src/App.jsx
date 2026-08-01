import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Internships from './components/Internships';
import Services from './components/Services';
import Courses from './components/Courses';
import Jobs from './components/Jobs';
import VerifyCertificate from './components/VerifyCertificate';
import Dashboard from './components/Dashboard';
import AuthModal from './components/AuthModal';
import SearchModal from './components/SearchModal';
import Toast from './components/Toast';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Handle Theme Toggle
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 4500);
  };

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 font-sans selection:bg-brand-indigo selection:text-white flex flex-col justify-between">
      
      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      {/* Main View Router */}
      <main className="flex-grow">
        {activeTab === 'home' && (
          <Home
            setActiveTab={setActiveTab}
            onSelectInternship={setSelectedInternship}
            onOpenAuth={() => setIsAuthOpen(true)}
          />
        )}

        {activeTab === 'internships' && (
          <Internships
            selectedInternship={selectedInternship}
            setSelectedInternship={setSelectedInternship}
            onShowToast={showToast}
          />
        )}

        {activeTab === 'services' && (
          <Services
            onShowToast={showToast}
          />
        )}

        {activeTab === 'courses' && (
          <Courses
            onShowToast={showToast}
          />
        )}

        {activeTab === 'jobs' && (
          <Jobs
            onShowToast={showToast}
          />
        )}

        {activeTab === 'verify' && (
          <VerifyCertificate
            onShowToast={showToast}
          />
        )}

        {activeTab === 'dashboard' && (
          <Dashboard
            onShowToast={showToast}
            setActiveTab={setActiveTab}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenAuth={() => setIsAuthOpen(true)}
      />

      {/* Modals & Toasts */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onShowToast={showToast}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        setActiveTab={setActiveTab}
        onSelectInternship={setSelectedInternship}
      />

      <Toast
        message={toastMessage}
        onClose={() => setToastMessage('')}
      />

    </div>
  );
}
