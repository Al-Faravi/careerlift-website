import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, GraduationCap, Stethoscope, ArrowRight, 
  Sparkles, Play, CheckCircle2, ShieldCheck, Star, Zap 
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import NeoButton from '../../components/ui/NeoButton';

export default function HeroSection() {
  const { lang } = useLanguage();
  const currentLang = lang || 'EN';

  // Interactive Pathway Switcher inside Hero
  const [activeTab, setActiveTab] = useState('study');
  const [showVideoModal, setShowVideoModal] = useState(false);

  const heroTabsData = {
    study: {
      title: { EN: "Study Abroad & Visa Consultancy", BN: "স্টাডি অ্যাব্রোড ও ভিসা কনসালটেন্সি" },
      badge: { EN: "98% Visa Success Rate", BN: "৯৮% ভিসা সাফল্যের হার" },
      desc: { EN: "Direct 3rd-year university entry in UK/Europe via OTHM & Qualifi British Diplomas. Save up to 50% tuition cost.", BN: "OTHM ও Qualifi ব্রিটিশ ডিপ্লোমার মাধ্যমে ইউকে ও ইউরোপে সরাসরি ৩য় বর্ষে ভর্তি এবং প্রায় ৫০% টিউশন ফি সাশ্রয়।" },
      cta: { EN: "Explore Study Destinations", BN: "দেশসমূহ এক্সপ্লোর করুন" },
      link: "/study-abroad",
      icon: <Globe className="w-6 h-6 text-blue-400" />
    },
    nsda: {
      title: { EN: "Govt. NSDA Free Skill Training", BN: "সরকারি NSDA ফ্রি স্কিল ট্রেনিং" },
      badge: { EN: "100% Free / Scholarship", BN: "১০০% ফ্রি সরকারি স্কলারশিপ" },
      desc: { EN: "Prime Minister's Office authorized Level 2 & 3 practical training in Caregiving, IT, and Japanese Language with job placement.", BN: "প্রধানমন্ত্রীর কার্যালয়ের অধীনস্থ NSDA সার্টিফাইড কেয়ারগিভিং, আইটি ও জাপানিজ ভাষা প্রশিক্ষণ এবং কর্মসংস্থান সহায়তা।" },
      cta: { EN: "View Free Courses", BN: "ফ্রি কোর্সসমূহ দেখুন" },
      link: "/courses",
      icon: <GraduationCap className="w-6 h-6 text-emerald-400" />
    },
    medical: {
      title: { EN: "Healthcare & Caregiving Staffing", BN: "হেলথকেয়ার ও কেয়ারগিভিং স্টাফিং" },
      badge: { EN: "500+ Caregivers Deployed", BN: "৫০০+ কেয়ারগিভার কর্মরত" },
      desc: { EN: "Deploying professionally trained and certified caregivers, nurses, and first aid responders to hospitals and care homes.", BN: "শীর্ষ হাসপাতাল ও ডায়াগনস্টিক সেন্টারগুলোতে যাচাইকৃত ও ক্লিনিক্যালি প্রশিক্ষিত কেয়ারগিভার এবং নার্স সরবরাহ।" },
      cta: { EN: "Request Healthcare Staff", BN: "হেলথকেয়ার সার্ভিসের জন্য যোগাযোগ" },
      link: "/about-us",
      icon: <Stethoscope className="w-6 h-6 text-purple-400" />
    }
  };

  const currentTabInfo = heroTabsData[activeTab];

  return (
    <section className="bg-slate-900 text-white pt-12 pb-24 relative overflow-hidden">
      {/* Background Glowing Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: High-Impact Headline & CTA (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 text-xs font-black tracking-widest uppercase text-blue-400 bg-white/10 border border-white/15 px-4 py-1.5 rounded-full backdrop-blur-md">
              <Sparkles size={14} className="text-amber-400 animate-spin-slow" />
              <span>{currentLang === 'EN' ? 'Global Education & Migration Services' : 'আন্তর্জাতিক শিক্ষা, ভিসা ও স্কিল সলিউশন'}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
              {currentLang === 'EN' ? 'Transforming Your ' : 'দক্ষতা অর্জনে ও উচ্চশিক্ষায় '} 
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">
                {currentLang === 'EN' ? 'Global Ambitions ' : 'বিশ্বজুড়ে আপনার '}
              </span>
              {currentLang === 'EN' ? 'Into Reality.' : 'নির্ভরযোগ্য মাধ্যম।'}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {currentLang === 'EN'
                ? 'CareerLift combines Bangladesh Government recognition (NSDA), UK British qualifications (OTHM/Qualifi), and clinical healthcare expertise to build sustainable global careers.'
                : 'গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের (NSDA) স্বীকৃতি, ব্রিটিশ ডিপ্লোমা (OTHM/Qualifi) এবং বিশেষায়িত হেলথকেয়ার দক্ষতার সমন্বয়ে আন্তর্জাতিক ক্যারিয়ার গঠনে কাজ করছে ক্যারিয়ারলিফ্ট।'}
            </p>

            {/* Quick Feature Highlights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs sm:text-sm font-bold text-slate-300">
              <span className="flex items-center bg-white/5 px-3.5 py-2 rounded-xl border border-white/10">
                <ShieldCheck className="mr-2 text-emerald-400" size={16}/> 100% Legal & Ethical
              </span>
              <span className="flex items-center bg-white/5 px-3.5 py-2 rounded-xl border border-white/10">
                <Star className="mr-2 text-amber-400 fill-amber-400" size={16}/> NSDA & UK Regulated
              </span>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link to="/study-abroad">
                <NeoButton variant="primary" className="!px-8 !py-4 text-sm font-bold shadow-lg shadow-blue-500/20">
                  {currentLang === 'EN' ? 'Explore Study Abroad →' : 'স্টাডি অ্যাব্রোড এক্সপ্লোর করুন →'}
                </NeoButton>
              </Link>
              <button 
                onClick={() => setShowVideoModal(true)}
                className="inline-flex items-center space-x-3 px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-all border border-white/15 cursor-pointer group"
              >
                <div className="w-7 h-7 rounded-full bg-red-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Play size={14} className="fill-white ml-0.5" />
                </div>
                <span>{currentLang === 'EN' ? 'Watch Corporate Tour' : 'ক্যাম্পাস ভিডিও দেখুন'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Live Dashboard Widget (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/95 border-2 border-white/15 rounded-[2.5rem] p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="text-xs font-black uppercase tracking-widest text-emerald-300">Live Career Finder</span>
                </div>
                <span className="text-[11px] font-bold text-slate-400 bg-white/5 px-2.5 py-1 rounded-md">Interactive</span>
              </div>

              {/* Toggle Buttons inside Widget */}
              <div className="grid grid-cols-3 gap-2 bg-slate-950/60 p-1.5 rounded-2xl border border-white/10">
                <button
                  onClick={() => setActiveTab('study')}
                  className={`py-2.5 px-2 rounded-xl text-xs font-black transition-all cursor-pointer flex flex-col items-center gap-1 ${
                    activeTab === 'study' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <span>✈️ Study</span>
                </button>
                <button
                  onClick={() => setActiveTab('nsda')}
                  className={`py-2.5 px-2 rounded-xl text-xs font-black transition-all cursor-pointer flex flex-col items-center gap-1 ${
                    activeTab === 'nsda' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <span>🎓 Free NSDA</span>
                </button>
                <button
                  onClick={() => setActiveTab('medical')}
                  className={`py-2.5 px-2 rounded-xl text-xs font-black transition-all cursor-pointer flex flex-col items-center gap-1 ${
                    activeTab === 'medical' ? 'bg-purple-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <span>🏥 Medical</span>
                </button>
              </div>

              {/* Dynamic Content Display */}
              <div className="space-y-4 pt-2 min-h-[160px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded bg-white/10 text-amber-300 border border-white/10">
                      {currentTabInfo.badge[currentLang]}
                    </span>
                    {currentTabInfo.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white mt-3 leading-snug">
                    {currentTabInfo.title[currentLang]}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium mt-2 leading-relaxed">
                    {currentTabInfo.desc[currentLang]}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-400">Ready to begin?</span>
                  <Link 
                    to={currentTabInfo.link}
                    className="inline-flex items-center space-x-1.5 text-xs font-black text-blue-400 hover:text-blue-300 group/link"
                  >
                    <span>{currentTabInfo.cta[currentLang]}</span>
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative">
            <div className="p-4 bg-slate-800 flex justify-between items-center text-white font-bold text-sm px-6">
              <span>{currentLang === 'EN' ? 'CareerLift Institutional Overview' : 'ক্যারিয়ারলিফ্ট প্রাতিষ্ঠানিক পরিচিতি'}</span>
              <button onClick={() => setShowVideoModal(false)} className="w-8 h-8 rounded-full bg-slate-700 hover:bg-red-600 flex items-center justify-center text-white transition">✕</button>
            </div>
            <div className="aspect-video bg-black flex items-center justify-center">
              <video src="/CareerLift__Global_Career.mp4" controls autoPlay className="w-full h-full object-contain">
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}