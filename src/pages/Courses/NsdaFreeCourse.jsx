import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Award, BookOpen, Users, HelpCircle, 
  Sparkles, ArrowRight, Building, CheckCircle2, Target, 
  FileCheck, Globe, Zap, HeartHandshake
} from 'lucide-react';
import NeoButton from '../../components/ui/NeoButton';

export default function NsdaFreeCourse() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      
      {/* ================= 1. OFFICIAL PARTNERS LOGO BANNER (WITHOUT GOVT SEAL) ================= */}
      <section className="bg-white border-b border-slate-200/80 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="text-[11px] font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                গণপ্রজাতন্ত্রী বাংলাদেশ সরকার অনুমোদিত উদ্যোগ
              </span>
              <h2 className="text-sm sm:text-base font-bold text-slate-700 mt-2">
                প্রধানমন্ত্রীর কার্যালয়ের অধীনস্থ জাতীয় দক্ষতা উন্নয়ন কর্তৃপক্ষ (NSDA) ও ASSET প্রজেক্ট
              </h2>
            </div>
            
            {/* Official Logos Showcase (Govt Seal Removed from Top) */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 bg-slate-50 px-6 py-3.5 rounded-2xl border border-slate-200/60 shadow-inner">
              <img 
                src="/NSDA.png" 
                alt="NSDA Bangladesh" 
                className="h-10 sm:h-12 w-auto object-contain hover:scale-110 transition-transform" 
                title="National Skills Development Authority"
              />
              <img 
                src="/asset project logo.png" 
                alt="ASSET Project" 
                className="h-10 sm:h-12 w-auto object-contain hover:scale-110 transition-transform" 
                title="ASSET Project"
              />
              <div className="h-8 w-px bg-slate-300 hidden sm:block"></div>
              <img 
                src="/careerlift-logo.png" 
                alt="CareerLift Institute" 
                className="h-8 sm:h-10 w-auto object-contain hover:scale-110 transition-transform" 
                title="CareerLift Institute"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. HERO SECTION ================= */}
      <section className="bg-slate-900 text-white pt-16 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 font-black text-xs uppercase tracking-wider backdrop-blur-md">
            <Sparkles size={16} />
            <span>১০০% সরকারি স্কলারশিপ ও বিনামূল্যে দক্ষতা উন্নয়ন প্রশিক্ষণ</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            কেন ও কীভাবে আমাদের কোর্সসমূহ <br className="hidden sm:block"/>
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              সম্পূর্ণ বিনামূল্যে (100% FREE)?
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed max-w-3xl mx-auto">
            দেশের যুবসমাজ ও পিছিয়ে পড়া জনগোষ্ঠীকে আন্তর্জাতিক মানের কারিগরি শিক্ষায় দক্ষ করে গড়ে তুলতে গণপ্রজাতন্ত্রী বাংলাদেশ সরকার এবং বিশ্বব্যাংকের যৌথ অর্থায়নে পরিচালিত যুগান্তকারী স্কিল ডেভেলপমেন্ট প্রকল্প।
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-bold text-slate-300">
            <span className="flex items-center bg-white/10 px-4 py-2 rounded-xl border border-white/10"><ShieldCheck className="mr-2 text-emerald-400" size={18}/> কোনো গোপন খরচ নেই (Zero Hidden Cost)</span>
            <span className="flex items-center bg-white/10 px-4 py-2 rounded-xl border border-white/10"><Award className="mr-2 text-amber-400" size={18}/> সরকারি ও রাষ্ট্রীয় সনদ প্রদান</span>
          </div>
        </div>
      </section>

      {/* ================= 3. WHY & HOW IS IT FREE? (TRANSPARENCY MODULE) ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl p-8 sm:p-14 shadow-xl border border-slate-200/80">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-lg mb-3">
              <HelpCircle size={14} />
              <span>স্বচ্ছতা ও অর্থায়নের উৎস</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
              এই কোর্সগুলো কেন সম্পূর্ণ ফ্রি এবং কীভাবে পরিচালিত হয়?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-slate-600 font-medium">
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/60 space-y-4 hover:border-emerald-300 transition">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-xl">
                01
              </div>
              <h3 className="text-lg font-black text-slate-900">সরকারি ও বিশ্বব্যাংকের অর্থায়ন</h3>
              <p className="text-sm leading-relaxed">
                এই প্রশিক্ষণের যাবতীয় টিউশন ফি, ল্যাব খরচ এবং প্রশিক্ষকদের সম্মানী বাংলাদেশ সরকার এবং বিশ্বব্যাংকের (World Bank) ASSET প্রজেক্টের তহবিল থেকে সরাসরি বহন করা হয়। ফলে শিক্ষার্থীকে কোনো ফি দিতে হয় না।
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/60 space-y-4 hover:border-blue-300 transition">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-black text-xl">
                02
              </div>
              <h3 className="text-lg font-black text-slate-900">ক্যারিয়ারলিফটের প্রাতিষ্ঠানিক ভূমিকা</h3>
              <p className="text-sm leading-relaxed">
                ক্যারিয়ারলিফ্ট ইনস্টিটিউট সরকারের অনুমোদিত ও কঠোর মানদণ্ডে যাচাইকৃত একটি প্রাতিষ্ঠানিক পার্টনার (Training Provider)। আমরা সরকারের সিলেবাস অনুযায়ী ল্যাব-ভিত্তিক হাতে-কলমে প্রশিক্ষণ পরিচালনা করি।
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/60 space-y-4 hover:border-purple-300 transition">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-black text-xl">
                03
              </div>
              <h3 className="text-lg font-black text-slate-900">বিনামূল্যে এসেসমেন্ট ও সনদ</h3>
              <p className="text-sm leading-relaxed">
                প্রশিক্ষণ শেষে জাতীয় দক্ষতা উন্নয়ন কর্তৃপক্ষ (NSDA) কর্তৃক গৃহীত সরকারি পরীক্ষার ফি এবং রাষ্ট্রীয় সার্টিফিকেটের যাবতীয় খরচ প্রজেক্টের আওতাভুক্ত থাকায় এটি সম্পূর্ণ ফ্রি।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. ABOUT NSDA (GOVT SEAL USED HERE AS IDENTITY PROOF) ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-14 border border-slate-800 shadow-xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            <div className="lg:col-span-4 text-center lg:text-left space-y-6">
              <div className="bg-white p-6 rounded-3xl inline-block shadow-lg mx-auto lg:mx-0">
                <img src="/NSDA.png" alt="NSDA Logo" className="h-28 sm:h-32 w-auto object-contain mx-auto" />
              </div>
              <div>
                <span className="text-emerald-400 font-black text-xs uppercase tracking-widest block mb-1">
                  National Skills Development Authority
                </span>
                <h3 className="text-2xl sm:text-3xl font-black leading-tight">
                  জাতীয় দক্ষতা উন্নয়ন কর্তৃপক্ষ (NSDA)
                </h3>
              </div>

              {/* ✅ GOVT SEAL USED SPECIFICALLY TO ILLUSTRATE STATE AUTHORITY */}
              <div className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700/80 text-xs text-slate-200 font-medium leading-relaxed flex items-center space-x-3.5 shadow-inner text-left">
                <div className="bg-white/90 p-1.5 rounded-xl flex-shrink-0">
                  <img 
                    src="/Government Seal of Bangladesh.png" 
                    alt="Govt Seal" 
                    className="w-10 h-10 object-contain" 
                    title="Government Seal of Bangladesh" 
                  />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">রাষ্ট্রীয় প্রশাসনিক পরিচয়</span>
                  গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের <strong className="text-white font-black underline">প্রধানমন্ত্রীর কার্যালয়ের (Prime Minister's Office)</strong> সরাসরি অধীনস্থ কর্তৃপক্ষ।
                </div>
              </div>

            </div>

            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
                <Target size={14} />
                <span>NSDA-এর মূলমন্ত্র ও লক্ষ্য</span>
              </div>
              
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-snug">
                "দক্ষ জনশক্তি, সমৃদ্ধ দেশ"— এই মূলমন্ত্রে বাংলাদেশের কারিগরি শিক্ষাকে বিশ্বমানে উন্নীতকরণ।
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                বাংলাদেশের বিপুল শ্রমশক্তিকে আন্তর্জাতিক চাকরির বাজারের উপযোগী করে গড়ে তুলতে ২০১৮ সালে প্রধানমন্ত্রীর কার্যালয়ের অধীনে NSDA প্রতিষ্ঠিত হয়। এর মূল লক্ষ্য হলো দেশের সকল কারিগরি ও বৃত্তিমূলক প্রশিক্ষণের মান নিয়ন্ত্রণ করা এবং এমন রাষ্ট্রীয় সনদ প্রদান করা যা দেশ ও বিদেশে সমানভাবে গ্রহণযোগ্য।
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700/80 flex items-start space-x-3">
                  <CheckCircle2 className="text-emerald-400 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <h4 className="font-bold text-sm text-white">আন্তর্জাতিক মানদণ্ড (NTVQF)</h4>
                    <p className="text-xs text-slate-400 mt-0.5">ন্যাশনাল টেকনিক্যাল অ্যান্ড ভোকেশনাল কোয়ালিফিকেশন ফ্রেমওয়ার্ক অনুযায়ী লেভেলভিত্তিক প্রশিক্ষণ।</p>
                  </div>
                </div>

                <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700/80 flex items-start space-x-3">
                  <Globe className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <h4 className="font-bold text-sm text-white">গ্লোবাল রিকগনিশন</h4>
                    <p className="text-xs text-slate-400 mt-0.5">জাপান, ইউকে, কানাডা ও মধ্যপ্রাচ্যের দেশগুলোতে কর্মসংস্থানের জন্য সরকারি সনদের বৈধতা।</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= 5. ABOUT ASSET PROJECT ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-slate-200/80 shadow-sm">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3.5 py-1.5 rounded-full">
                <Zap size={14} />
                <span>ASSET প্রজেক্ট পরিচিতি ও উদ্দেশ্য</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
                ASSET: অর্থনৈতিক রূপান্তরের জন্য দক্ষতা ত্বরান্বিত ও শক্তিশালীকরণ প্রকল্প
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                <strong>ASSET (Accelerating and Strengthening Skills for Economic Transformation)</strong> হলো শিক্ষা মন্ত্রণালয়ের কারিগরি ও মাদ্রাসা শিক্ষা বিভাগের অধীনস্থ এবং বিশ্বব্যাংকের অর্থায়নে পরিচালিত একটি মেগা প্রজেক্ট। এই প্রকল্পের মূল লক্ষ্য হলো বাংলাদেশের যুবসমাজ, নারী এবং সুবিধাবঞ্চিত জনগোষ্ঠীকে ভবিষ্যতের বাজার-চাহিদা অনুযায়ী কারিগরি দক্ষতায় স্বাবলম্বী করা।
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-sm font-black text-slate-800 uppercase tracking-wider">ASSET প্রজেক্ট কেন বিনামূল্যে প্রশিক্ষণ দিচ্ছে?</h4>
                
                <div className="flex items-start space-x-3 text-sm text-slate-700 font-semibold bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                  <span><strong>বেকারত্ব দূরীকরণ:</strong> পুঁজির অভাবে যেন কোনো আগ্রহী তরুণ-তরুণী কারিগরি শিক্ষা থেকে বঞ্চিত না হয়।</span>
                </div>
                
                <div className="flex items-start space-x-3 text-sm text-slate-700 font-semibold bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                  <span><strong>শিল্প ও কর্মসংস্থানের সংযোগ:</strong> শুধুমাত্র সার্টিফিকেট নয়, বরং ইন্ডাস্ট্রি ও হাসপাতালগুলোর বাস্তব চাহিদার সাথে মিল রেখে দক্ষ কর্মী তৈরি করা।</span>
                </div>

                <div className="flex items-start space-x-3 text-sm text-slate-700 font-semibold bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></span>
                  <span><strong>নারী ও পিছিয়ে পড়া জনগোষ্ঠীর ক্ষমতায়ন:</strong> বিশেষ করে নারীদের হেলথকেয়ার, কেয়ারগিভিং ও আইটি সেক্টরে স্বাবলম্বী করে তোলা।</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 text-center bg-gradient-to-tr from-emerald-50 to-teal-50 p-8 sm:p-10 rounded-3xl border border-emerald-100/80 space-y-6 shadow-inner">
              <div className="bg-white p-6 rounded-3xl inline-block shadow-md">
                <img src="/asset project logo.png" alt="ASSET Logo" className="h-28 sm:h-32 w-auto object-contain mx-auto" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-black text-slate-900">ASSET Project Bangladesh</h3>
                <p className="text-xs font-bold text-slate-500">Directorate of Technical Education (DTE)<br/>Ministry of Education, Govt. of Bangladesh</p>
              </div>
              <div className="pt-2 border-t border-emerald-200/60 flex items-center justify-center space-x-2 text-xs font-black text-emerald-800">
                <HeartHandshake size={18} className="text-emerald-600" />
                <span>বিশ্বব্যাংকের (World Bank) আর্থিক সহায়তায় পরিচালিত</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 6. STUDENT BENEFITS SUMMARY ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
            এই স্কলারশিপের আওতায় একজন প্রশিক্ষণার্থী কী কী পাচ্ছেন?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium mt-3">
            সরকার অনুমোদিত এই ফ্রি প্রশিক্ষণ কোর্সে অংশ নিলে আপনি যেসব প্রাতিষ্ঠানিক সুবিধা লাভ করবেন:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
              💰
            </div>
            <h4 className="font-black text-slate-900 text-base">১০০% টিউশন ফি মওকুফ</h4>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">কোর্সের সম্পূর্ণ খরচ সরকারি প্রজেক্ট থেকে বহন করা হবে, কোনো মাসিক বা ভর্তি ফি নেই।</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
              📜
            </div>
            <h4 className="font-black text-slate-900 text-base">সরকারি এসেসমেন্ট ও সনদ</h4>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">NSDA-এর অধীনে সরকারি পরীক্ষার মাধ্যমে কিউআর কোড সংবলিত রাষ্ট্রীয় সার্টিফিকেট প্রদান।</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold">
              🔬
            </div>
            <h4 className="font-black text-slate-900 text-base">হাতে-কলমে ল্যাব সুবিধা</h4>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">আধুনিক যন্ত্রপাতি সমৃদ্ধ ল্যাবে বিশেষজ্ঞ প্রশিক্ষকদের তত্ত্বাবধানে ১০০% ব্যবহারিক ক্লাস।</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
              🤝
            </div>
            <h4 className="font-black text-slate-900 text-base">কর্মসংস্থান ও জব প্লেসমেন্ট</h4>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">কোর্স সফলভাবে সম্পন্নকারীদের দেশীয় স্বনামধন্য প্রতিষ্ঠানে জব প্লেসমেন্ট সহায়তা।</p>
          </div>
        </div>
      </section>

      {/* ================= 7. CALL TO ACTION BANNER ================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-3xl p-8 sm:p-14 text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          
          <h2 className="text-2xl sm:text-4xl font-black leading-tight relative z-10">
            সরকারি স্কলারশিপে নিজের ক্যারিয়ার গড়তে আগ্রহী?
          </h2>
          <p className="text-sm sm:text-base text-emerald-100 font-medium max-w-2xl mx-auto relative z-10">
            প্রতিটি ব্যাচে আসন সংখ্যা সীমিত এবং সরকারি নিয়ম অনুযায়ী মেধার ভিত্তিতে প্রশিক্ষণার্থী নির্বাচন করা হয়। আজই আমাদের অফিসে যোগাযোগ করে ফ্রি সেমিনারে রেজিস্ট্রেশন করুন।
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Link to="/about-us" className="w-full sm:w-auto">
              <NeoButton variant="secondary" className="w-full sm:w-auto !bg-white !text-slate-900 hover:!bg-slate-100 !px-8 !py-4 text-sm font-bold shadow-lg">
                অফিসের ঠিকানা ও যোগাযোগ →
              </NeoButton>
            </Link>
            <Link to="/courses" className="w-full sm:w-auto">
              <NeoButton variant="primary" className="w-full sm:w-auto !bg-slate-900 hover:!bg-slate-800 !text-white !px-8 !py-4 text-sm font-bold shadow-lg">
                সকল কোর্স সমূহ দেখুন
              </NeoButton>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}