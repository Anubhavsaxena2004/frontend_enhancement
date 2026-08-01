import React, { useState } from 'react';
import { 
  BookOpen, 
  Star, 
  Clock, 
  Users, 
  PlayCircle, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  X,
  Sparkles,
  Award,
  Tag
} from 'lucide-react';
import { MOCK_COURSES } from '../data/mockData';

export default function Courses({ onShowToast }) {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [activeModuleIndex, setActiveModuleIndex] = useState(null);
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [demoVideoOpen, setDemoVideoOpen] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);

  const handleEnrollSubmit = (e) => {
    e.preventDefault();
    setEnrollModalOpen(false);
    onShowToast(`🎓 Successfully enrolled in "${selectedCourse.title}"! Access details have been sent to your student portal.`);
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/20 text-brand-violet text-xs font-semibold border border-brand-violet/30">
          <BookOpen className="w-4 h-4" />
          <span>Navyan Academy • Instructor-Led Masterclasses</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
          Industry-Grade <span className="gradient-text-accent">Skill Bootcamps</span>
        </h1>
        <p className="text-slate-300 text-sm leading-relaxed">
          Master real-world tech stacks with curriculum designed by ex-Google & AWS senior staff engineers.
        </p>
      </div>

      {/* Courses List */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {MOCK_COURSES.map(course => (
          <div key={course.id} className="glass-panel p-6 rounded-3xl glass-panel-hover flex flex-col justify-between space-y-6 border border-white/10 relative">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-brand-violet/20 text-brand-violet border border-brand-violet/30 uppercase tracking-wider">
                  {course.badge}
                </span>
                <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{course.rating}</span>
                  <span className="text-slate-500 font-normal">({course.reviewsCount})</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white">{course.title}</h3>
              <p className="text-xs text-slate-400">By {course.instructor}</p>

              <div className="grid grid-cols-2 gap-2 text-xs pt-2">
                <div className="p-2.5 rounded-xl bg-navy-950/80 border border-white/5 flex items-center gap-2 text-slate-300">
                  <Clock className="w-4 h-4 text-brand-cyan" />
                  <span>{course.duration}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-navy-950/80 border border-white/5 flex items-center gap-2 text-slate-300">
                  <Users className="w-4 h-4 text-brand-indigo" />
                  <span>{course.enrolledStudents} Students</span>
                </div>
              </div>

              {/* Module Accordion Preview */}
              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Syllabus Breakdown:</span>
                {course.modules.slice(0, 2).map((mod, mIdx) => (
                  <div key={mIdx} className="p-2.5 rounded-xl bg-navy-900/80 border border-white/5 text-xs text-slate-300 flex items-center justify-between">
                    <span className="truncate pr-2">{mod.name}</span>
                    <span className="text-[10px] text-slate-500 shrink-0">{mod.lessons}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-500 line-through block">{course.originalPrice}</span>
                <span className="text-xl font-extrabold text-white">{course.price}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setSelectedCourse(course);
                    setDemoVideoOpen(true);
                  }}
                  className="p-2.5 rounded-xl bg-navy-850 text-brand-cyan hover:text-white border border-white/10"
                  title="Watch Demo Video"
                >
                  <PlayCircle className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    setSelectedCourse(course);
                    setEnrollModalOpen(true);
                  }}
                  className="gradient-btn px-4 py-2.5 rounded-xl text-white text-xs font-bold shadow-glow-indigo flex items-center gap-1"
                >
                  <span>Enroll Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* DEMO VIDEO MODAL */}
      {selectedCourse && demoVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-navy-900 border border-white/10 rounded-3xl max-w-2xl w-full p-6 space-y-4 shadow-2xl relative">
            <button
              onClick={() => setDemoVideoOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-navy-850 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-white pr-8">
              Lesson 1 Preview: {selectedCourse.title}
            </h3>

            {/* Video Mock Box */}
            <div className="relative aspect-video rounded-2xl bg-navy-950 border border-white/10 flex flex-col items-center justify-center space-y-3 overflow-hidden group">
              <div className="w-16 h-16 rounded-full bg-brand-indigo/30 border border-brand-cyan flex items-center justify-center text-brand-cyan group-hover:scale-110 transition-transform cursor-pointer">
                <PlayCircle className="w-10 h-10 fill-brand-cyan/20" />
              </div>
              <p className="text-xs text-slate-400 font-semibold">Interactive Video Player Simulation</p>
              <span className="text-[10px] px-2.5 py-1 rounded-full bg-white/10 text-white">Full HD • Subtitles Available</span>
            </div>

            <div className="flex items-center justify-between text-xs pt-2">
              <span className="text-slate-400">Instructor: {selectedCourse.instructor}</span>
              <button
                onClick={() => {
                  setDemoVideoOpen(false);
                  setEnrollModalOpen(true);
                }}
                className="gradient-btn px-4 py-2 rounded-xl text-white font-bold"
              >
                Enroll to Unlock Full Course
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ENROLLMENT MODAL */}
      {selectedCourse && enrollModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-navy-900 border border-white/10 rounded-3xl max-w-md w-full p-6 space-y-5 shadow-2xl relative">
            <button
              onClick={() => setEnrollModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-navy-850 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider">Fast Checkout</span>
              <h3 className="text-xl font-bold text-white mt-1">Enroll in {selectedCourse.title}</h3>
            </div>

            <div className="p-4 rounded-2xl bg-navy-950 border border-white/5 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block">Tuition Fee</span>
                <span className="text-lg font-bold text-white">{discountApplied ? '₹3,999' : selectedCourse.price}</span>
              </div>
              {discountApplied && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  NAVYAN20 Coupon Applied (-₹1,000)
                </span>
              )}
            </div>

            {/* Coupon input */}
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Discount Code (e.g. NAVYAN20)"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="flex-1 px-3 py-2 rounded-xl bg-navy-950 border border-white/10 text-white text-xs placeholder:text-slate-600 uppercase"
              />
              <button
                type="button"
                onClick={() => {
                  if (couponCode.toUpperCase() === 'NAVYAN20') {
                    setDiscountApplied(true);
                  } else {
                    alert('Invalid Code! Use NAVYAN20 for ₹1,000 off');
                  }
                }}
                className="px-3 py-2 rounded-xl bg-navy-850 text-brand-cyan text-xs font-bold border border-white/10"
              >
                Apply
              </button>
            </div>

            <form onSubmit={handleEnrollSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Student Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter full name"
                  className="w-full px-3 py-2 rounded-xl bg-navy-950 border border-white/10 text-white"
                />
              </div>
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="student@example.com"
                  className="w-full px-3 py-2 rounded-xl bg-navy-950 border border-white/10 text-white"
                />
              </div>

              <button
                type="submit"
                className="w-full gradient-btn py-3 rounded-xl text-white font-bold shadow-glow-indigo flex items-center justify-center gap-2 mt-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Confirm Enrollment</span>
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
