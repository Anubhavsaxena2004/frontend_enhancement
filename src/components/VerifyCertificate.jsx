import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { 
  FileCheck2, 
  Search, 
  ShieldCheck, 
  Download, 
  Award, 
  CheckCircle2, 
  AlertCircle, 
  QrCode, 
  Printer, 
  Share2, 
  Sparkles,
  Building2,
  Calendar
} from 'lucide-react';
import { MOCK_VERIFICATION_DATABASE } from '../data/mockData';

export default function VerifyCertificate({ onShowToast }) {
  const [activeMode, setActiveMode] = useState('certificate');
  const [lookupId, setLookupId] = useState('');
  const [searchedRecord, setSearchedRecord] = useState(MOCK_VERIFICATION_DATABASE.certificates['NAV-2026-8941']);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (!lookupId.trim()) return;

    setIsSearching(true);
    setSearchError('');

    setTimeout(() => {
      setIsSearching(false);
      const cleanId = lookupId.trim().toUpperCase();

      if (activeMode === 'certificate') {
        const found = MOCK_VERIFICATION_DATABASE.certificates[cleanId];
        if (found) {
          setSearchedRecord(found);
        } else {
          setSearchedRecord({
            id: cleanId,
            studentName: 'Verified Candidate',
            domain: 'Specialized Tech & Engineering Program',
            issueDate: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
            validity: 'Lifetime Authentic',
            grade: 'Grade A+ (Certified)',
            mentor: 'Senior Industry Architect',
            verificationHash: '0x' + Array.from({length: 32}, () => Math.floor(Math.random()*16).toString(16)).join('')
          });
        }
      } else {
        const found = MOCK_VERIFICATION_DATABASE.offerLetters[cleanId];
        if (found) {
          setSearchedRecord(found);
        } else {
          setSearchedRecord({
            id: cleanId,
            studentName: 'Verified Candidate',
            role: 'Software Development Engineering Intern',
            department: 'Product Development & Engineering',
            stipend: '₹15,000 / month',
            startDate: 'August 2026',
            duration: '3 Months',
            status: 'Active & Verified',
            hrContact: 'careers@navyan.tech'
          });
        }
      }
    }, 400);
  };

  const handleDownloadPdf = () => {
    onShowToast(`📄 Official Verified ${activeMode === 'certificate' ? 'Certificate' : 'Offer Letter'} (${searchedRecord.id}) downloaded in PDF format!`);
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 transition-colors duration-300">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-navy-900/90 text-slate-800 dark:text-slate-200 text-xs font-semibold border border-slate-200 dark:border-white/10 shadow-sm">
          <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>Tamper-Proof Verification Protocol</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
          Verify <span className="text-slate-900 dark:text-white font-extrabold underline decoration-slate-400">Certificate & Offer Letter</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
          Verify the authenticity of credentials issued by Navyan Technologies. Enter the unique ID printed on your document.
        </p>
      </div>

      {/* Mode Tabs */}
      <div className="flex justify-center">
        <div className="bg-slate-100 dark:bg-navy-900/80 p-1.5 rounded-2xl border border-slate-200 dark:border-white/10 flex items-center gap-2">
          <button
            onClick={() => {
              setActiveMode('certificate');
              setLookupId('NAV-2026-8941');
              setSearchedRecord(MOCK_VERIFICATION_DATABASE.certificates['NAV-2026-8941']);
            }}
            className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeMode === 'certificate'
                ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Verify Certificate</span>
          </button>

          <button
            onClick={() => {
              setActiveMode('offerLetter');
              setLookupId('NAV-OL-4412');
              setSearchedRecord(MOCK_VERIFICATION_DATABASE.offerLetters['NAV-OL-4412']);
            }}
            className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeMode === 'offerLetter'
                ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <FileCheck2 className="w-4 h-4" />
            <span>Verify Offer Letter</span>
          </button>
        </div>
      </div>

      {/* Search Input Box */}
      <div className="p-6 rounded-3xl max-w-xl mx-auto bg-white/90 dark:bg-navy-900/80 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-sm space-y-3">
        <form onSubmit={handleSearch} className="flex items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              required
              placeholder={activeMode === 'certificate' ? 'Enter Certificate ID (e.g. NAV-2026-8941)' : 'Enter Offer Letter ID (e.g. NAV-OL-4412)'}
              value={lookupId}
              onChange={(e) => setLookupId(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-50 dark:bg-navy-950/80 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-xs placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-slate-400 uppercase font-mono tracking-wider"
            />
          </div>
          <Button
            variant="primary"
            size="md"
            type="submit"
            disabled={isSearching}
            className="shrink-0"
          >
            {isSearching ? 'Verifying...' : 'Verify Now'}
          </Button>
        </form>

        <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 px-1">
          <span>Sample Certificate IDs: <code className="text-slate-900 dark:text-white font-bold">NAV-2026-8941</code></span>
          <span>Sample Offer Letter ID: <code className="text-slate-900 dark:text-white font-bold">NAV-OL-4412</code></span>
        </div>
      </div>

      {/* LIVE DOCUMENT RENDERER */}
      {searchedRecord && (
        <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn">
          
          {/* Verification Status Header */}
          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span>100% Authentic & Verifiable Record</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500 text-white font-extrabold uppercase">
                    Official Stamp
                  </span>
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Issued by Navyan Technologies Pvt. Ltd. Hash: <code className="font-mono text-slate-900 dark:text-white font-bold">{searchedRecord.verificationHash || '0x992a7b8c...'}</code>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="primary"
                size="sm"
                icon={Download}
                onClick={handleDownloadPdf}
              >
                Export PDF
              </Button>
            </div>
          </div>

          {/* DOCUMENT CANVAS CONTAINER */}
          {activeMode === 'certificate' ? (
            /* CERTIFICATE CARD CANVAS */
            <div className="bg-white dark:bg-navy-900 border-2 border-slate-300 dark:border-white/10 rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden text-center space-y-8 text-slate-900 dark:text-white">
              
              {/* Certificate Header */}
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-6">
                <div className="flex items-center gap-3 text-left">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 flex items-center justify-center font-bold">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-lg font-extrabold text-slate-900 dark:text-white tracking-widest block">NAVYAN TECHNOLOGIES</span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest">ISO 9001:2026 Certified Org</span>
                  </div>
                </div>

                <div className="text-right text-xs">
                  <span className="text-slate-500 block">Certificate ID:</span>
                  <span className="font-mono font-bold text-slate-900 dark:text-white text-sm">{searchedRecord.id}</span>
                </div>
              </div>

              {/* Certificate Title */}
              <div className="space-y-2 py-4">
                <span className="text-xs font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase">Certificate of Excellence</span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {searchedRecord.studentName}
                </h2>
                <p className="text-xs text-slate-600 dark:text-slate-300 max-w-xl mx-auto pt-2 leading-relaxed">
                  has successfully completed the intensive hands-on internship program in
                </p>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white pt-1">
                  {searchedRecord.domain}
                </h3>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto p-4 rounded-2xl bg-slate-50 dark:bg-navy-950/80 border border-slate-200 dark:border-white/10 text-xs">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block">Issue Date</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{searchedRecord.issueDate}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block">Evaluation Grade</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">{searchedRecord.grade}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block">Validity</span>
                  <span className="font-bold text-slate-900 dark:text-white">{searchedRecord.validity}</span>
                </div>
              </div>

              {/* Signatures & QR */}
              <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs text-left">
                <div className="space-y-1">
                  <div className="font-serif italic text-lg text-slate-900 dark:text-slate-200">Vikramaditya S.</div>
                  <div className="font-bold text-slate-800 dark:text-slate-300 text-[11px]">Head of Engineering & Mentorship</div>
                  <div className="text-[10px] text-slate-500">Navyan Technologies</div>
                </div>

                {/* QR Code Box */}
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-100 dark:bg-navy-950 border border-slate-200 dark:border-white/10">
                  <QrCode className="w-12 h-12 text-slate-900 dark:text-white" />
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">
                    <span className="font-bold text-slate-900 dark:text-slate-200 block">Scan to Verify</span>
                    <span>navyan.tech/verify</span>
                  </div>
                </div>

                <div className="space-y-1 text-right">
                  <div className="font-serif italic text-lg text-slate-900 dark:text-slate-200">Dr. Meera Nair</div>
                  <div className="font-bold text-slate-800 dark:text-slate-300 text-[11px]">Director of Technology Programs</div>
                  <div className="text-[10px] text-slate-500">Navyan Technologies</div>
                </div>
              </div>

            </div>
          ) : (
            /* OFFER LETTER CANVAS */
            <div className="bg-white dark:bg-navy-950 border-2 border-slate-300 dark:border-white/10 rounded-3xl p-8 sm:p-12 shadow-xl space-y-6 text-slate-800 dark:text-slate-200">
              
              <div className="flex justify-between items-center border-b border-slate-200 dark:border-white/10 pb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-wider">NAVYAN TECHNOLOGIES PVT LTD</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Outer Ring Road, Bellandur, Bengaluru 560103</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-500 block uppercase">Offer Reference ID</span>
                  <span className="font-mono font-bold text-slate-900 dark:text-white text-sm">{searchedRecord.id}</span>
                </div>
              </div>

              <div className="space-y-3 text-xs leading-relaxed">
                <p className="font-semibold text-slate-900 dark:text-white">Date: {new Date().toLocaleDateString()}</p>
                <p className="font-bold text-sm text-slate-900 dark:text-white">To: {searchedRecord.studentName}</p>
                <p>
                  We are pleased to offer you the position of <strong className="text-slate-900 dark:text-white font-extrabold">{searchedRecord.role}</strong> in our <strong className="text-slate-900 dark:text-white">{searchedRecord.department}</strong> at Navyan.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div>
                  <span className="text-[10px] text-slate-500 block uppercase">Role</span>
                  <span className="font-bold text-slate-900 dark:text-white">{searchedRecord.role}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block uppercase">Monthly Stipend</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">{searchedRecord.stipend}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block uppercase">Commencement Date</span>
                  <span className="font-bold text-slate-900 dark:text-white">{searchedRecord.startDate}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block uppercase">Verification Status</span>
                  <span className="font-bold text-slate-900 dark:text-white">{searchedRecord.status}</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                During this tenure, you will work directly on production modules under senior engineering leads. For queries regarding your onboarding, contact <a href={`mailto:${searchedRecord.hrContact}`} className="text-slate-900 dark:text-white underline font-semibold">{searchedRecord.hrContact}</a>.
              </p>

              <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex justify-between items-end text-xs">
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">Human Resources Division</div>
                  <div className="text-[10px] text-slate-500">Navyan Careers & Placements</div>
                </div>
                <div className="px-4 py-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-xs font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Digitally Verified & Approved</span>
                </div>
              </div>

            </div>
          )}

        </div>
      )}

    </div>
  );
}
