import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Globe, GraduationCap, Stethoscope, ArrowRight, 
  Sparkles, Play, CheckCircle2, ShieldCheck, Star, 
  Flame, Tag, Clock, PlaneTakeoff, Zap, Award
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import NeoButton from '../../components/ui/NeoButton';

export default function HeroSection() {
  const { lang } = useLanguage();
  const currentLang = lang || 'EN';
  const [showVideoModal, setShowVideoModal] = useState(false);

  // 👇 React Router-এর নেভিগেশন হুক
  const navigate = useNavigate();
  const location = useLocation();

  // 👇 বুক ফ্রি অ্যাসেসমেন্ট বাটনের জন্য বুলেটপ্রুফ স্ক্রল লজিক
  const handleScrollToForm = (e) => {
    e.preventDefault();
    
    // ১. যদি ইউজার আগে থেকেই হোমপেজে থাকে
    if (location.pathname === '/') {
      const formElement = document.getElementById('consultation-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        console.warn("ID 'consultation-form' খুঁজে পাওয়া যায়নি!");
      }
    } else {
      // ২. যদি ইউজার অন্য কোনো পেজে থাকে, তবে হোমপেজের রাউটে পাঠিয়ে স্ক্রল করা হবে
      navigate('/');
      setTimeout(() => {
        const formElement = document.getElementById('consultation-form');
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300); // পেজ রেন্ডার হওয়ার জন্য ৩০০ms সময় দেওয়া হয়েছে
    }
  };

  const liveOpportunities = [
    {
      id: "5",
      domain: "FREE COURSE",
      icon: <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 animate-pulse" />,
      title: { EN: "Primary Healthcare Service Level-2", BN: "প্রাইমারি হেলথকেয়ার সার্ভিস লেভেল-২" },
      badge: { EN: "100% Govt. Scholarship", BN: "১০০% ফ্রি সরকারি স্কলারশিপ" },
      deadline: "Admission Open",
      link: "/course/5",
      accent: "from-emerald-500/20 via-teal-500/10 to-transparent border-emerald-500/40 hover:border-emerald-400",
      tagColor: "bg-emerald-500 text-slate-950 font-black"
    },
    {
      id: "uk-othm",
      domain: "STUDY ABROAD",
      icon: <PlaneTakeoff className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 animate-bounce" />,
      title: { EN: "UK Direct 3rd Year Entry via OTHM Diploma", BN: "OTHM ডিপ্লোমার মাধ্যমে ইউকেতে ৩য় বর্ষে সরাসরি ভর্তি" },
      badge: { EN: "Save 50% Tuition + 2 Yrs PSW", BN: "৫০% খরচ সাশ্রয় ও ২ বছরের ওয়ার্ক ভিসা" },
      deadline: "Sep / Jan Intake",
      link: "/study-abroad#packages",
      accent: "from-blue-500/20 via-indigo-500/10 to-transparent border-blue-500/40 hover:border-blue-400",
      tagColor: "bg-blue-500 text-white font-black"
    },
    {
      id: "10",
      domain: "SKILL TRAINING",
      icon: <Stethoscope className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />,
      title: { EN: "Day-long Primary Healthcare & First Aid Drill", BN: "দিনব্যাপী প্রাইমারি হেলথ কেয়ার ও ফার্স্ট এইড প্র্যাক্টিক্যাল" },
      badge: { EN: "Clinical Certificate Included", BN: "হ্যান্ডস-অন ল্যাব ও সার্টিফিকেট প্রদান" },
      deadline: "Every Friday",
      link: "/course/10",
      accent: "from-amber-500/20 via-orange-500/10 to-transparent border-amber-500/40 hover:border-amber-400",
      tagColor: "bg-amber-400 text-slate-950 font-black"
    },
    {
      id: "schengen-pack",
      domain: "EUROPE VISA",
      icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />,
      title: { EN: "Schengen 29 Countries Study & Job Search Track", BN: "শেনজেন জোনের ২৯টি দেশে স্টাডি ও জব সার্চ সুবিধা" },
      badge: { EN: "Free Tuition in Germany & Finland", BN: "জার্মানি ও ফিনল্যান্ডে ফ্রি পড়াশোনা" },
      deadline: "Winter Intake",
      link: "/study-abroad#packages",
      accent: "from-purple-500/20 via-pink-500/10 to-transparent border-purple-500/40 hover:border-purple-400",
      tagColor: "bg-purple-500 text-white font-black"
    }
  ];

  return (
    <section className="bg-slate-900 text-white pt-10 sm:pt-16 pb-16 sm:pb-24 relative overflow-hidden">
      <div className="absolute top-1/4 left-10 w-80 sm:w-96 h-80 sm:h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 sm:w-96 h-80 sm:h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Left Text & CTA Column */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 text-[10px] sm:text-xs font-black tracking-widest uppercase text-blue-400 bg-white/10 border border-white/15 px-3.5 sm:px-4 py-1.5 rounded-full backdrop-blur-md">
              <Sparkles size={14} className="text-amber-400 animate-spin-slow flex-shrink-0" />
              <span className="truncate">{currentLang === 'EN' ? 'Global Education & Skill Development' : 'আন্তর্জাতিক শিক্ষা, ভিসা ও স্কিল সলিউশন'}</span>
            </div>

            <h1 className="text-2xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
              {currentLang === 'EN' ? 'Transforming Your ' : 'দক্ষতা অর্জনে ও উচ্চশিক্ষায় '} 
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">
                {currentLang === 'EN' ? 'Global Ambitions ' : 'বিশ্বজুড়ে আপনার '}
              </span>
              {currentLang === 'EN' ? 'Into Reality.' : 'নির্ভরযোগ্য মাধ্যম।'}
            </h1>

            <p className="text-xs sm:text-lg text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {currentLang === 'EN'
                ? 'CareerLift combines Bangladesh Government recognition (NSDA), UK British qualifications (OTHM/Qualifi), and clinical healthcare expertise to build sustainable global careers.'
                : 'গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের (NSDA) স্বীকৃতি, ব্রিটিশ ডিপ্লোমা (OTHM/Qualifi) এবং বিশেষায়িত হেলথকেয়ার দক্ষতার সমন্বয়ে আন্তর্জাতিক ক্যারিয়ার গঠনে কাজ করছে ক্যারিয়ারলিফ্ট।'}
            </p>

            <div className="pt-2 sm:pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <Link to="/study-abroad" className="w-full sm:w-auto">
                <NeoButton variant="primary" className="w-full sm:w-auto !px-8 !py-4 text-xs sm:text-sm font-bold shadow-lg shadow-blue-500/20">
                  {currentLang === 'EN' ? 'Explore Study Abroad →' : 'স্টাডি অ্যাব্রোড এক্সপ্লোর করুন →'}
                </NeoButton>
              </Link>
              
              <button 
                onClick={() => setShowVideoModal(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-6 py-3.5 sm:py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm transition-all border border-white/15 cursor-pointer group"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-red-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Play size={13} className="fill-white ml-0.5" />
                </div>
                <span>{currentLang === 'EN' ? 'Watch Campus Tour' : 'ক্যাম্পাস ভিডিও দেখুন'}</span>
              </button>
            </div>
          </div>

          {/* Right Notice Board & Live Opportunities Column */}
          <div className="lg:col-span-6 relative">
            <div className="bg-slate-950/80 border-2 border-white/15 rounded-[1.75rem] sm:rounded-[2.5rem] p-4 sm:p-7 shadow-2xl backdrop-blur-2xl relative overflow-hidden space-y-3 sm:space-y-4">
              
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center space-x-2 sm:space-x-2.5">
                  <div className="relative flex items-center justify-center">
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500 animate-ping absolute"></span>
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500 relative z-10"></span>
                  </div>
                  <span className="text-[11px] sm:text-sm font-black uppercase tracking-wider text-white flex items-center">
                    <Flame size={15} className="mr-1 sm:mr-1.5 text-amber-400 fill-amber-400 animate-bounce flex-shrink-0" /> 
                    {currentLang === 'EN' ? 'Live Opportunities & Offers' : 'এক নজরে আমাদের চলমান অফার গুলো;'}
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] font-extrabold uppercase bg-white/10 text-slate-300 border border-white/15 px-2.5 sm:px-3 py-1 rounded-full flex items-center gap-1 flex-shrink-0">
                  <Zap size={11} className="text-amber-400 fill-amber-400" /> Real-Time
                </span>
              </div>

              <div className="space-y-2 sm:space-y-3 pt-1">
                {liveOpportunities.map((item, idx) => (
                  <Link 
                    key={idx}
                    to={item.link}
                    className={`block p-3 sm:p-4 rounded-2xl bg-gradient-to-r ${item.accent} border transition-all duration-300 hover:scale-[1.01] hover:shadow-lg group/item relative overflow-hidden`}
                  >
                    <div className="flex items-start justify-between gap-2.5 sm:gap-3">
                      <div className="space-y-1 sm:space-y-1.5 flex-grow min-w-0">
                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                          <span className={`text-[8px] sm:text-[9px] uppercase px-1.5 sm:px-2 py-0.5 rounded-md shadow-2xs flex items-center gap-1 ${item.tagColor}`}>
                            {item.icon}
                            <span>{item.domain}</span>
                          </span>
                          <span className="text-[9px] sm:text-[10px] font-extrabold text-slate-400 flex items-center bg-black/40 px-1.5 sm:px-2 py-0.5 rounded">
                            <Clock size={10} className="mr-1 text-blue-400 flex-shrink-0" /> {item.deadline}
                          </span>
                        </div>

                        <h4 className="text-xs sm:text-sm font-black text-white group-hover/item:text-blue-300 transition-colors line-clamp-1 leading-snug">
                          {item.title[currentLang]}
                        </h4>

                        <div className="flex items-center text-[10px] sm:text-[11px] font-extrabold text-amber-300">
                          <Award size={13} className="mr-1 text-amber-400 flex-shrink-0" />
                          <span className="truncate">{item.badge[currentLang]}</span>
                        </div>
                      </div>

                      <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-white/10 group-hover/item:bg-white group-hover/item:text-slate-950 text-white flex items-center justify-center flex-shrink-0 transition-all shadow-md self-center">
                        <ArrowRight size={15} className="group-hover/item:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-0 text-xs font-bold text-slate-400 text-center sm:text-left">
                <span>🎯 {currentLang === 'EN' ? 'Want customized guidance?' : 'সঠিক গাইডলাইন প্রয়োজন?'}</span>
                
                {/* 👇 এখানে বাটন ট্যাগ এবং handleScrollToForm ফাংশন ব্যবহার করা হয়েছে */}
                <button 
                  onClick={handleScrollToForm}
                  className="text-xs font-black text-emerald-400 hover:text-emerald-300 underline flex items-center space-x-1 cursor-pointer bg-transparent border-none p-0"
                >
                  <span>{currentLang === 'EN' ? 'Book Free Assessment →' : 'ফ্রি অ্যাসেসমেন্ট বুক করুন →'}</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Video Modal with Enhanced HTML5 Attributes */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative">
            <div className="p-3.5 sm:p-4 bg-slate-800 flex justify-between items-center text-white font-bold text-xs sm:text-sm px-4 sm:px-6">
              <span>{currentLang === 'EN' ? 'CareerLift Institutional Overview' : 'ক্যারিয়ারলিফ্ট প্রাতিষ্ঠানিক পরিচিতি'}</span>
              <button 
                onClick={() => setShowVideoModal(false)} 
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-700 hover:bg-red-600 flex items-center justify-center text-white transition cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="aspect-video bg-black flex items-center justify-center">
              <video 
                src="/CareerLift__Global_Career.mp4" 
                controls 
                autoPlay 
                playsInline
                preload="auto"
                className="w-full h-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}