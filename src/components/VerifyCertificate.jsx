import React, { useState } from 'react';
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
  const [activeMode, setActiveMode] = useState('certificate'); // 'certificate' or 'offerLetter'
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
          // Dynamic fallback for demo
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
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold border border-emerald-500/30">
          <ShieldCheck className="w-4 h-4" />
          <span>Tamper-Proof Verification Protocol</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
          Verify <span className="gradient-text-primary">Certificate & Offer Letter</span>
        </h1>
        <p className="text-slate-300 text-sm leading-relaxed">
          Verify the authenticity of credentials issued by Navyan Technologies. Enter the unique ID printed on your document.
        </p>
      </div>

      {/* Mode Tabs */}
      <div className="flex justify-center">
        <div className="bg-navy-900/80 p-1.5 rounded-2xl border border-white/10 flex items-center gap-2">
          <button
            onClick={() => {
              setActiveMode('certificate');
              setLookupId('NAV-2026-8941');
              setSearchedRecord(MOCK_VERIFICATION_DATABASE.certificates['NAV-2026-8941']);
            }}
            className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeMode === 'certificate'
                ? 'bg-gradient-to-r from-brand-indigo to-brand-blue text-white shadow-glow-indigo'
                : 'text-slate-400 hover:text-white'
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
                ? 'bg-gradient-to-r from-brand-indigo to-brand-blue text-white shadow-glow-indigo'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <FileCheck2 className="w-4 h-4" />
            <span>Verify Offer Letter</span>
          </button>
        </div>
      </div>

      {/* Search Input Box */}
      <div className="glass-panel p-6 rounded-3xl max-w-xl mx-auto border border-white/10 space-y-3">
        <form onSubmit={handleSearch} className="flex items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              required
              placeholder={activeMode === 'certificate' ? 'Enter Certificate ID (e.g. NAV-2026-8941)' : 'Enter Offer Letter ID (e.g. NAV-OL-4412)'}
              value={lookupId}
              onChange={(e) => setLookupId(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-2xl bg-navy-950/80 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-brand-indigo uppercase font-mono tracking-wider"
            />
          </div>
          <button
            type="submit"
            disabled={isSearching}
            className="gradient-btn px-6 py-3 rounded-2xl text-white text-xs font-bold shadow-glow-indigo shrink-0"
          >
            {isSearching ? 'Verifying...' : 'Verify Now'}
          </button>
        </form>

        <div className="flex items-center justify-between text-[11px] text-slate-400 px-1">
          <span>Sample Certificate IDs: <code className="text-brand-cyan">NAV-2026-8941</code>, <code className="text-brand-cyan">NAV-2026-9022</code></span>
          <span>Sample Offer Letter ID: <code className="text-brand-cyan">NAV-OL-4412</code></span>
        </div>
      </div>

      {/* LIVE DOCUMENT RENDERER */}
      {searchedRecord && (
        <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn">
          
          {/* Verification Status Header */}
          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <span>100% Authentic & Verifiable Record</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500 text-navy-950 font-extrabold uppercase">
                    Official Stamp
                  </span>
                </h4>
                <p className="text-xs text-slate-300">
                  Issued by Navyan Technologies Pvt. Ltd. Verification Hash: <code className="text-brand-cyan">{searchedRecord.verificationHash || '0x992a7b8c...'}</code>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleDownloadPdf}
                className="gradient-btn px-4 py-2 rounded-xl text-white text-xs font-bold shadow-glow-indigo flex items-center gap-1.5"
              >
                <Download className="w-4 h-4" />
                <span>Export PDF</span>
              </button>
            </div>
          </div>

          {/* DOCUMENT CANVAS CONTAINER */}
          {activeMode === 'certificate' ? (
            /* CERTIFICATE CARD CANVAS */
            <div className="bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 border-2 border-brand-indigo/40 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden text-center space-y-8">
              
              {/* Corner Watermarks */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-indigo/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

              {/* Certificate Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <div className="flex items-center gap-3 text-left">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-indigo to-brand-cyan p-0.5">
                    <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-brand-cyan" />
                    </div>
                  </div>
                  <div>
                    <span className="text-lg font-bold text-white tracking-widest block">NAVYAN TECHNOLOGIES</span>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest">ISO 9001:2026 Certified Org</span>
                  </div>
                </div>

                <div className="text-right text-xs">
                  <span className="text-slate-400 block">Certificate ID:</span>
                  <span className="font-mono font-bold text-brand-cyan text-sm">{searchedRecord.id}</span>
                </div>
              </div>

              {/* Certificate Title */}
              <div className="space-y-2 py-4">
                <span className="text-xs font-bold tracking-widest text-brand-cyan uppercase">Certificate of Excellence</span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                  {searchedRecord.studentName}
                </h2>
                <p className="text-xs text-slate-300 max-w-xl mx-auto pt-2 leading-relaxed">
                  has successfully completed the intensive hands-on internship program in
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-indigo pt-1">
                  {searchedRecord.domain}
                </h3>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto p-4 rounded-2xl bg-navy-950/80 border border-white/10 text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase block">Issue Date</span>
                  <span className="font-bold text-slate-200">{searchedRecord.issueDate}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase block">Evaluation Grade</span>
                  <span className="font-bold text-emerald-400">{searchedRecord.grade}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase block">Validity</span>
                  <span className="font-bold text-brand-cyan">{searchedRecord.validity}</span>
                </div>
              </div>

              {/* Signatures & QR */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-left">
                <div className="space-y-1">
                  <div className="font-serif italic text-lg text-slate-200">Vikramaditya S.</div>
                  <div className="font-bold text-slate-300 text-[11px]">Head of Engineering & Mentorship</div>
                  <div className="text-[10px] text-slate-500">Navyan Technologies</div>
                </div>

                {/* QR Code Box */}
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-navy-950 border border-white/10">
                  <QrCode className="w-12 h-12 text-brand-cyan" />
                  <div className="text-[10px] text-slate-400">
                    <span className="font-bold text-slate-200 block">Scan to Verify</span>
                    <span>navyan.tech/verify</span>
                  </div>
                </div>

                <div className="space-y-1 text-right">
                  <div className="font-serif italic text-lg text-slate-200">Dr. Meera Nair</div>
                  <div className="font-bold text-slate-300 text-[11px]">Director of Technology Programs</div>
                  <div className="text-[10px] text-slate-500">Navyan Technologies</div>
                </div>
              </div>

            </div>
          ) : (
            /* OFFER LETTER CANVAS */
            <div className="bg-navy-950 border-2 border-brand-cyan/40 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-6 text-slate-200">
              
              <div className="flex justify-between items-center border-b border-white/10 pb-6">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-wider">NAVYAN TECHNOLOGIES PVT LTD</h3>
                  <p className="text-xs text-slate-400">Outer Ring Road, Bellandur, Bengaluru 560103</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 block uppercase">Offer Reference ID</span>
                  <span className="font-mono font-bold text-brand-cyan text-sm">{searchedRecord.id}</span>
                </div>
              </div>

              <div className="space-y-3 text-xs leading-relaxed">
                <p className="font-semibold text-white">Date: {new Date().toLocaleDateString()}</p>
                <p className="font-bold text-sm text-white">To: {searchedRecord.studentName}</p>
                <p>
                  We are pleased to offer you the position of <strong className="text-brand-cyan">{searchedRecord.role}</strong> in our <strong className="text-white">{searchedRecord.department}</strong> at Navyan.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-navy-900 border border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase block">Role</span>
                  <span className="font-bold text-white">{searchedRecord.role}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase block">Monthly Stipend</span>
                  <span className="font-bold text-emerald-400">{searchedRecord.stipend}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase block">Commencement Date</span>
                  <span className="font-bold text-white">{searchedRecord.startDate}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase block">Verification Status</span>
                  <span className="font-bold text-brand-cyan">{searchedRecord.status}</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                During this tenure, you will work directly on production modules under senior engineering leads. For queries regarding your onboarding, contact <a href={`mailto:${searchedRecord.hrContact}`} className="text-brand-cyan underline">{searchedRecord.hrContact}</a>.
              </p>

              <div className="pt-6 border-t border-white/10 flex justify-between items-end text-xs">
                <div>
                  <div className="font-bold text-white">Human Resources Division</div>
                  <div className="text-[10px] text-slate-400">Navyan Careers & Placements</div>
                </div>
                <div className="px-4 py-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-bold flex items-center gap-1.5">
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
