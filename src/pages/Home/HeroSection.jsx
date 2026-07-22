import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Globe, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';
import NeoButton from '../../components/ui/NeoButton';
import { useLanguage } from '../../context/LanguageContext';

export default function HeroSection() {
  const { t, lang } = useLanguage();

  return (
    <>
      {/* ================= 1. ADVANCED HERO SECTION ================= */}
      <section className="pt-4 sm:pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Hero Text Content */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-50/80 backdrop-blur-md border border-blue-200 shadow-sm text-blue-700 font-bold text-xs sm:text-sm uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span>{t.badge}</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.15] tracking-tight">
              {t.heroTitle}
            </h1>
            
            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              {t.heroDesc}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link to="/courses" className="w-full sm:w-auto">
                <NeoButton variant="primary" className="w-full sm:w-auto !px-8 !py-4 text-base font-bold shadow-xl shadow-blue-500/20 group">
                  <span className="flex items-center space-x-2">
                    <span>Explore Courses</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </NeoButton>
              </Link>
              <Link to="/study-abroad" className="w-full sm:w-auto">
                <NeoButton variant="secondary" className="w-full sm:w-auto !px-8 !py-4 text-base font-bold group">
                  <span className="flex items-center space-x-2">
                    <Globe size={18} className="text-blue-600" />
                    <span>Visa Consultancy</span>
                  </span>
                </NeoButton>
              </Link>
            </div>

            <div className="pt-6 flex items-center justify-center lg:justify-start space-x-4 text-sm font-semibold text-slate-500">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold z-${10-i} shadow-sm overflow-hidden`}>
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="student" className="w-full h-full object-cover"/>
                  </div>
                ))}
              </div>
              <span>{lang === 'EN' ? 'Join 500+ successful students' : '৫০০+ সফল শিক্ষার্থীর সাথে যুক্ত হোন'}</span>
            </div>
          </div>

          {/* Hero Image & Glass Overlay Showcase */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
                alt="Students" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>

              {/* Glassmorphism Floating Menu */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-4 space-y-2 shadow-neo-float">
                <Link to="/nsda-free-course" className="flex items-center justify-between p-3 rounded-2xl bg-white/80 hover:bg-white transition shadow-sm group cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                      <GraduationCap size={20} strokeWidth={2.5} />
                    </div>
                    <div className="text-left">
                      <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block">100% Scholarship</span>
                      <h4 className="text-sm font-black text-slate-800">NSDA Free Course</h4>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-slate-400 group-hover:text-emerald-600 transition-colors" />
                </Link>

                <Link to="/study-abroad" className="flex items-center justify-between p-3 rounded-2xl bg-white/80 hover:bg-white transition shadow-sm group cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <Globe size={20} strokeWidth={2.5} />
                    </div>
                    <div className="text-left">
                      <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block">Global Pathway</span>
                      <h4 className="text-sm font-black text-slate-800">Study Abroad Guide</h4>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 1.5 ACCREDITATION STRIP ================= */}
      <section className="border-y border-slate-200/60 bg-white/40 py-6 mt-16 mb-20 sm:mt-24 sm:mb-28">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 sm:gap-16 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="text-xl font-black tracking-tighter text-slate-800">othm.</span>
          <span className="text-xl font-black tracking-widest text-slate-800">QUALIFI</span>
          <span className="text-xl font-black text-slate-800">UKQAS</span>
          <div className="flex items-center space-x-2">
            <ShieldCheck size={24} className="text-slate-800" />
            <span className="text-lg font-black text-slate-800">NSDA</span>
          </div>
        </div>
      </section>
    </>
  );
}