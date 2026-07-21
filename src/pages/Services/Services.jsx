import React from 'react';
import { Link } from 'react-router-dom';
import NeoCard from '../../components/ui/NeoCard';
import NeoButton from '../../components/ui/NeoButton';
import { useLanguage } from '../../context/LanguageContext';

export default function Services() {
  const { lang } = useLanguage();

  // 1. Education & Career Pathways Data (EN & BN Integrated)
  const studentServices = [
    {
      id: 'skill',
      title: { EN: 'Skill Development', BN: 'স্কিল ডেভেলপমেন্ট' },
      subtitle: { EN: 'NSDA Recognized Training', BN: 'এনএসডিএ (NSDA) স্বীকৃত কারিগরি প্রশিক্ষণ' },
      badge: { EN: 'For Students & Job Seekers', BN: 'শিক্ষার্থী ও চাকরিপ্রার্থীদের জন্য' },
      icon: '🎯',
      color: 'from-blue-600 to-indigo-600',
      features: [
        { 
          title: { EN: 'Practical Training:', BN: 'ব্যবহারিক প্রশিক্ষণ:' }, 
          desc: { EN: 'Hands-on learning in Caregiving, Medical Scribing, IT & Language.', BN: 'কেয়ারগিভিং, মেডিকেল স্ক্রাইবিং, আইটি এবং ভাষা শিক্ষার ওপর হাতে-কলমে ব্যবহারিক প্রশিক্ষণ।' } 
        },
        { 
          title: { EN: 'Job Ready:', BN: 'চাকরির জন্য প্রস্তুত:' }, 
          desc: { EN: 'Master skills that have extremely high demand locally and globally.', BN: 'দেশী এবং আন্তর্জাতিক চাকরির বাজারে সবচেয়ে বেশি চাহিদাসম্পন্ন দক্ষতা অর্জন করুন।' } 
        },
        { 
          title: { EN: 'Certification:', BN: 'সরকারি স্বীকৃতি:' }, 
          desc: { EN: 'Earn official government-recognized (NSDA) certificates.', BN: 'গণপ্রজাতন্ত্রী বাংলাদেশ সরকার ও NSDA অনুমোদিত অফিসিয়াল কারিগরি সার্টিফিকেট প্রদান।' } 
        },
        { 
          title: { EN: 'Career Prep:', BN: 'ক্যারিয়ার প্রস্তুতি:' }, 
          desc: { EN: 'Specialized CV writing & mock interview skill workshops.', BN: 'প্রফেশনাল সিভী (CV) রাইটিং এবং মক ইন্টারভিউয়ের মাধ্যমে চাকরির চূড়ান্ত প্রস্তুতি।' } 
        },
      ],
      linkText: { EN: 'Explore Skill Courses', BN: 'সকল কোর্স দেখুন' },
      linkUrl: '/courses'
    },
    {
      id: 'othm',
      title: { EN: 'OTHM (UK Diploma)', BN: 'OTHM (ইউকে ডিপ্লোমা)' },
      subtitle: { EN: 'Pathway to UK University', BN: 'ইউকে ইউনিভার্সিটিতে পড়ার সহজ মাধ্যম' },
      badge: { EN: 'UK Degree Shortcut', BN: 'ইউকে ডিগ্রির শর্টকাট' },
      icon: '🎓',
      color: 'from-indigo-600 to-purple-600',
      features: [
        { 
          title: { EN: 'Cost Effective:', BN: 'সাশ্রয়ী খরচ:' }, 
          desc: { EN: 'Complete Level 3, 4 & 5 Diploma here in Bangladesh at 80% lower cost.', BN: 'বাংলাদেশে বসে প্রায় ৮০% কম খরচে লেভেল ৩, ৪ এবং ৫ ডিপ্লোমা সম্পন্ন করার সুযোগ।' } 
        },
        { 
          title: { EN: 'Credit Transfer:', BN: 'ক্রেডিট ট্রান্সফার:' }, 
          desc: { EN: 'Directly move to the UK for the final year to earn a full BA/BSc degree.', BN: 'ডিপ্লোমা শেষে পূর্ণাঙ্গ ডিগ্রির জন্য সরাসরি ইউকে-র ইউনিভার্সিটিতে শেষ বর্ষে ক্রেডিট ট্রান্সফার।' } 
        },
        { 
          title: { EN: 'Global Standard:', BN: 'আন্তর্জাতিক মান:' }, 
          desc: { EN: '100% UK regulated curriculum, assessment, and quality control.', BN: '১০০% ইউকে নিয়ন্ত্রিত কারিকুলাম, অ্যাসেসমেন্ট এবং আন্তর্জাতিক মান নিয়ন্ত্রণ ব্যবস্থা।' } 
        },
        { 
          title: { EN: 'Full Guidance:', BN: 'পূর্ণাঙ্গ গাইডলাইন:' }, 
          desc: { EN: 'Complete institutional support for assignments and university transfer.', BN: 'অ্যাসাইনমেন্ট তৈরি এবং ইউনিভার্সিটি ট্রান্সফারের জন্য প্রতিষ্ঠানের সম্পূর্ণ সার্বিক সহযোগিতা।' } 
        },
      ],
      linkText: { EN: 'Learn About OTHM', BN: 'OTHM সম্পর্কে জানুন' },
      linkUrl: '/study-abroad'
    },
    {
      id: 'abroad',
      title: { EN: 'Study Abroad', BN: 'স্টাডি অ্যাব্রড (বিদেশ যাত্রা)' },
      subtitle: { EN: 'End-to-end Visa Support', BN: 'এন্ড-টু-এন্ড ভিসা প্রসেসিং সাপোর্ট' },
      badge: { EN: 'Global Processing', BN: 'গ্লোবাল ভিসা প্রসেসিং' },
      icon: '✈️',
      color: 'from-purple-600 to-pink-600',
      features: [
        { 
          title: { EN: 'Expert Counseling:', BN: 'এক্সপার্ট কাউন্সেলিং:' }, 
          desc: { EN: 'Career counseling & university selection for UK, Canada, Japan & Malaysia.', BN: 'ইউকে, কানাডা, জাপান ও মালয়েশিয়ার জন্য সঠিক কোর্স ও বিশ্ববিদ্যালয় নির্বাচনে প্রফেশনাল পরামর্শ।' } 
        },
        { 
          title: { EN: 'Quick Admissions:', BN: 'দ্রুত অ্যাডমিশন:' }, 
          desc: { EN: 'Fast university shortlisting & direct Offer Letter application processing.', BN: 'দ্রুততম সময়ের মধ্যে বিশ্ববিদ্যালয় শর্ট লিস্টিং এবং সরাসরি অফার লেটার প্রসেসিং।' } 
        },
        { 
          title: { EN: 'Documentation:', BN: 'ডকুমেন্টেশন:' }, 
          desc: { EN: 'Professional SOP, LOR & academic CV guidance for admission.', BN: 'নির্ভুল অ্যাডমিশনের জন্য প্রফেশনাল SOP, LOR এবং অ্যাকাডেমিক সিভী তৈরিতে সহায়তা।' } 
        },
        { 
          title: { EN: 'Visa & Solvency:', BN: 'ভিসা ও সলভেন্সি:' }, 
          desc: { EN: 'Complete embassy file processing, bank solvency guidance & interview prep.', BN: 'পূর্ণাঙ্গ এম্বাসি ফাইল প্রসেসিং, সঠিক ব্যাংক সলভেন্সি গাইডলাইন এবং ইন্টারভিউ প্রস্তুতি।' } 
        },
      ],
      linkText: { EN: 'Check Visa Guidelines', BN: 'ভিসা গাইডলাইন দেখুন' },
      linkUrl: '/study-abroad'
    }
  ];

  // 2. Corporate & Industrial Solutions Data (EN & BN Integrated)
  const corporateServices = [
    {
      id: 'worker',
      title: { EN: 'Skilled Worker Supply', BN: 'স্কিলড ওয়ার্কার সাপ্লাই (দক্ষ কর্মী)' },
      subtitle: { EN: 'For Hospitals, Clinics & Diagnostic Centers', BN: 'হাসপাতাল, ক্লিনিক এবং ডায়াগনস্টিক সেন্টারের জন্য' },
      badge: { EN: 'B2B Healthcare Staffing', BN: 'হেলথকেয়ার স্টাফিং' },
      icon: '🏥',
      borderColor: 'border-l-emerald-500',
      badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      features: [
        { 
          title: { EN: 'Trained Workforce:', BN: 'প্রশিক্ষিত জনবল:' }, 
          desc: { EN: 'We supply officially NSDA certified Caregivers and Medical Assistants.', BN: 'আমরা সরকারি NSDA সার্টিফাইড দক্ষ কেয়ারগিভার এবং মেডিকেল অ্যাসিস্ট্যান্ট সরবরাহ করি।' } 
        },
        { 
          title: { EN: 'Direct Placement:', BN: 'সরাসরি নিয়োগ:' }, 
          desc: { EN: 'Deploying skilled staff directly to hospitals, clinics, and diagnostic centers.', BN: 'দেশের ও বিদেশের স্বনামধন্য হাসপাতাল, ক্লিনিক এবং ডায়াগনস্টিক সেন্টারে সরাসরি কর্মী নিয়োগ।' } 
        },
        { 
          title: { EN: '100% Reliability:', BN: '১০০% বিশ্বস্ততা:' }, 
          desc: { EN: 'All candidates are background-verified and professionally trained by us.', BN: 'আমাদের সকল প্রার্থীর ব্যাকগ্রাউন্ড ভেরিফাইড এবং আমাদের নিজস্ব ল্যাবে প্রফেশনালি প্রশিক্ষিত।' } 
        },
        { 
          title: { EN: 'The Perfect Bridge:', BN: 'নির্ভরযোগ্য সেতুবন্ধন:' }, 
          desc: { EN: 'Connecting healthcare employers with ready-to-work compassionate professionals.', BN: 'হেলথকেয়ার প্রতিষ্ঠান এবং কর্মঠ ও সেবা-মনোভাবাপন্ন দক্ষ কর্মীদের মাঝে নির্ভরযোগ্য সেতুবন্ধন।' } 
        },
      ]
    },
    {
      id: 'industrial',
      title: { EN: 'Industrial Safety & Medical Training', BN: 'ইন্ডাস্ট্রিয়াল সেফটি ও মেডিকেল ট্রেনিং' },
      subtitle: { EN: 'For Factories, Garments (RMG) & Corporate Offices', BN: 'গার্মেন্টস (RMG), ফ্যাক্টরি এবং কর্পোরেট অফিসের জন্য' },
      badge: { EN: 'Workplace Compliance', BN: 'ওয়ার্কপ্লেস কমপ্লায়েন্স' },
      icon: '🏭',
      borderColor: 'border-l-amber-500',
      badgeBg: 'bg-amber-100 text-amber-800 border-amber-200',
      features: [
        { 
          title: { EN: 'Basic Medical Skills:', BN: 'প্রাথমিক চিকিৎসা জ্ঞান:' }, 
          desc: { EN: 'First Aid and emergency response training specifically tailored for factory workers.', BN: 'ফ্যাক্টরি ও গার্মেন্টস কর্মীদের জন্য বিশেষায়িত ফার্স্ট এইড (First Aid) এবং জরুরি চিকিৎসা প্রশিক্ষণ।' } 
        },
        { 
          title: { EN: 'Safety & Hygiene:', BN: 'নিরাপত্তা ও হাইজিন:' }, 
          desc: { EN: 'Educating workers on occupational workplace safety, hygiene, and fire safety.', BN: 'কর্মক্ষেত্রে স্বাস্থ্যবিধি, ফায়ার সেফটি এবং পেশাগত নিরাপত্তা সম্পর্কে কর্মীদের সচেতন ও প্রশিক্ষিত করা।' } 
        },
        { 
          title: { EN: 'Instant Response:', BN: 'জরুরি পরিস্থিতি মোকাবিলা:' }, 
          desc: { EN: 'Preparing factory staff to handle immediate medical emergencies on the floor.', BN: 'ফ্যাক্টরি ফ্লোরে যেকোনো দুর্ঘটনা বা জরুরি শারীরিক অসুস্থতায় তাৎক্ষণিক ব্যবস্থা গ্রহণের প্রস্তুতি।' } 
        },
        { 
          title: { EN: 'Custom Modules:', BN: 'কাস্টম মডিউল:' }, 
          desc: { EN: 'Specialized training modules designed specifically for RMG and industrial environments.', BN: 'গার্মেন্টস শিল্প ও কারখানার কর্মপরিবেশের সাথে সামঞ্জস্য রেখে তৈরি বিশেষ কাস্টমাইজড ট্রেনিং মডিউল।' } 
        },
      ]
    }
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      
      {/* ================= 1. PAGE HEADER ================= */}
      <section className="pt-6 sm:pt-10 text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/70 border border-white/80 shadow-sm text-blue-700 font-extrabold text-xs uppercase tracking-wider">
          <span>💼 {lang === 'EN' ? 'WHAT WE OFFER' : 'আমাদের সার্ভিসসমূহ'}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-800 leading-tight">
          {lang === 'EN' ? 'Comprehensive ' : 'সবার জন্য '} 
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {lang === 'EN' ? 'Solutions' : 'সমন্বিত সল্যুশন'}
          </span> 
          {lang === 'EN' ? ' For All.' : ''}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto">
          {lang === 'EN'
            ? 'From practical Skill Development to Global Career Management. We bridge the gap by supporting both ambitious students and corporate industrial employers.'
            : 'ব্যবহারিক স্কিল ডেভেলপমেন্ট থেকে শুরু করে গ্লোবাল ক্যারিয়ার ম্যানেজমেন্ট—আমরা উচ্চাকাঙ্ক্ষী শিক্ষার্থী এবং কর্পোরেট ও ইন্ডাস্ট্রিয়াল নিয়োগদাতাদের মাঝে নির্ভরযোগ্য সেতুবন্ধন তৈরি করি।'}
        </p>

        {/* Quick Jump Navigation Pill */}
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <a href="#education-pathways" className="px-5 py-2.5 rounded-full bg-blue-600 text-white font-bold text-xs shadow-md hover:bg-blue-700 transition">
            🎓 {lang === 'EN' ? 'Education & Career Pathways ↓' : 'শিক্ষা ও ক্যারিয়ার পাথওয়ে ↓'}
          </a>
          <a href="#corporate-solutions" className="px-5 py-2.5 rounded-full bg-white/80 border border-slate-300 text-slate-700 font-bold text-xs shadow-sm hover:bg-white transition">
            🏢 {lang === 'EN' ? 'Corporate & Industrial Solutions ↓' : 'কর্পোরেট ও ইন্ডাস্ট্রিয়াল সল্যুশন ↓'}
          </a>
        </div>
      </section>

      {/* ================= 2. EDUCATION & CAREER PATHWAYS ================= */}
      <section id="education-pathways" className="space-y-12">
        <div className="border-b border-slate-200/60 pb-4">
          <span className="text-xs font-black text-blue-600 uppercase tracking-widest block mb-1">
            {lang === 'EN' ? 'PART 01 : FOR INDIVIDUALS' : 'পর্ব ০১ : শিক্ষার্থীদের জন্য'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-800">
            {lang === 'EN' ? 'Education & Career Pathways' : 'শিক্ষা এবং ক্যারিয়ার পাথওয়ে'}
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            {lang === 'EN' 
              ? 'Empowering students with practical training, UK degree shortcuts, and global visa solutions.'
              : 'ব্যবহারিক কারিগরি প্রশিক্ষণ, স্বল্প খরচে ইউকে ডিগ্রির সুযোগ এবং বিশ্বজুড়ে কর্মসংস্থানের বিশ্বস্ত গাইডলাইন।'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {studentServices.map((srv) => (
            <NeoCard key={srv.id} className="flex flex-col justify-between bg-white/70 hover:bg-white/95 border-white/90 transition-all duration-300 group relative overflow-hidden">
              
              {/* Top Accent Bar */}
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${srv.color}`}></div>

              <div>
                {/* Header Info */}
                <div className="flex justify-between items-start mb-6 pt-2">
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 border border-slate-200/80 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform duration-300">
                    {srv.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
                    {srv.badge[lang]}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">
                  {srv.title[lang]}
                </h3>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-6 pb-4 border-b border-slate-200/60">
                  {srv.subtitle[lang]}
                </h4>

                {/* Features Matrix Grid */}
                <div className="space-y-3.5 mb-8">
                  {srv.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 p-2.5 rounded-xl bg-white/60 border border-white shadow-sm">
                      <span className="text-emerald-600 font-bold text-sm mt-0.5">✓</span>
                      <div>
                        <strong className="text-xs font-black text-slate-800 block">{feat.title[lang]}</strong>
                        <span className="text-[11px] text-slate-600 leading-normal font-medium block mt-0.5">{feat.desc[lang]}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-slate-200/60">
                <Link to={srv.linkUrl}>
                  <NeoButton variant="secondary" className="w-full !py-3 !text-xs font-black justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600">
                    {srv.linkText[lang]} →
                  </NeoButton>
                </Link>
              </div>

            </NeoCard>
          ))}
        </div>
      </section>

      {/* ================= 3. CORPORATE & INDUSTRIAL SOLUTIONS ================= */}
      <section id="corporate-solutions" className="space-y-12">
        <div className="border-b border-slate-200/60 pb-4">
          <span className="text-xs font-black text-emerald-600 uppercase tracking-widest block mb-1">
            {lang === 'EN' ? 'PART 02 : FOR EMPLOYERS & INSTITUTIONS' : 'পর্ব ০২ : প্রতিষ্ঠান ও নিয়োগদাতাদের জন্য'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-800">
            {lang === 'EN' ? 'Corporate & Industrial Solutions' : 'কর্পোরেট ও ইন্ডাস্ট্রিয়াল সল্যুশন'}
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            {lang === 'EN'
              ? 'Specialized workforce supply for hospitals & custom safety training modules for garments and factories.'
              : 'হাসপাতাল ও ক্লিনিকের জন্য দক্ষ কর্মী সরবরাহ এবং গার্মেন্টস ও কারখানার জন্য বিশেষ স্বাস্থ্য ও নিরাপত্তা প্রশিক্ষণ।'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {corporateServices.map((corp) => (
            <NeoCard key={corp.id} className={`bg-white/80 hover:bg-white border-white/90 border-l-8 ${corp.borderColor} transition-all duration-300 flex flex-col justify-between group`}>
              
              <div>
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center space-x-3">
                    <span className="text-4xl">{corp.icon}</span>
                    <div>
                      <h3 className="text-2xl font-black text-slate-800 group-hover:text-emerald-700 transition-colors">
                        {corp.title[lang]}
                      </h3>
                      <p className="text-xs font-bold text-slate-500">{corp.subtitle[lang]}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <span className={`inline-block px-3 py-1 rounded-md text-xs font-extrabold border ${corp.badgeBg}`}>
                    {corp.badge[lang]}
                  </span>
                </div>

                {/* Corporate Features List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                  {corp.features.map((feat, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 shadow-inner flex flex-col justify-between">
                      <span className="w-6 h-6 rounded-full bg-slate-800 text-white flex items-center justify-center text-[10px] font-bold mb-2">
                        0{idx + 1}
                      </span>
                      <div>
                        <h4 className="text-xs font-black text-slate-800">{feat.title[lang]}</h4>
                        <p className="text-[11px] text-slate-600 mt-1 leading-relaxed font-medium">{feat.desc[lang]}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* B2B Action Button */}
              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500">
                  {lang === 'EN' ? '🤝 Institutional Partnership Available' : '🤝 প্রাতিষ্ঠানিক চুক্তির সুবিধা রয়েছে'}
                </span>
                <Link to="/about-us">
                  <button className="px-6 py-2.5 rounded-xl bg-slate-800 text-white font-bold text-xs shadow-md hover:bg-slate-900 active:scale-95 transition">
                    {lang === 'EN' ? 'Request Workforce / Training →' : 'কর্মী বা ট্রেনিংয়ের জন্য যোগাযোগ →'}
                  </button>
                </Link>
              </div>

            </NeoCard>
          ))}
        </div>
      </section>

      {/* ================= 4. CUSTOMIZED SOLUTION CTA BOX ================= */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 rounded-3xl p-8 sm:p-14 text-white shadow-neo-float relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <span className="px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 font-extrabold text-xs uppercase tracking-widest border border-blue-400/30">
            🤝 {lang === 'EN' ? 'Tailored To Your Needs' : 'আপনার চাহিদা অনুযায়ী কাস্টমাইজড'}
          </span>

          <h2 className="text-3xl sm:text-5xl font-black leading-tight tracking-tight">
            {lang === 'EN' ? 'Need a Customized Solution?' : 'বিশেষ কোনো কাস্টম সল্যুশন প্রয়োজন?'}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            {lang === 'EN'
              ? 'Whether you are a student looking for a dream career pathway or a company looking for NSDA certified skilled workers and industrial medical training modules—we are ready to partner with you.'
              : 'আপনি আপনার স্বপ্নের ক্যারিয়ার গড়তে চাওয়া একজন শিক্ষার্থী হন, কিংবা সরকারি (NSDA) সার্টিফাইড দক্ষ কর্মী ও ফ্যাক্টরি সেফটি ট্রেনিং খুঁজতে থাকা কোনো প্রতিষ্ঠান—আমরা আপনার সাথে কাজ করতে সম্পূর্ণ প্রস্তুত।'}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/about-us" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-black text-sm shadow-lg shadow-blue-500/30 active:scale-95 transition-all">
                {lang === 'EN' ? 'Contact Us Today →' : 'আজই যোগাযোগ করুন →'}
              </button>
            </Link>
            <Link to="/nsda-free-course" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold text-sm backdrop-blur-md active:scale-95 transition-all">
                {lang === 'EN' ? 'View Free Scholarship Courses' : 'ফ্রি স্কলারশিপ কোর্সসমূহ দেখুন'}
              </button>
            </Link>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-wrap justify-center gap-6 text-xs text-slate-400 font-medium">
            <span>✓ {lang === 'EN' ? 'Verified Workforce' : 'ভেরিফাইড জনবল'}</span>
            <span>•</span>
            <span>✓ {lang === 'EN' ? 'Official NSDA Curriculum' : 'সরকারি কারিকুলাম'}</span>
            <span>•</span>
            <span>✓ {lang === 'EN' ? 'Direct Hospital & Factory Deployment' : 'সরাসরি ফ্যাক্টরি ও হাসপাতাল প্লেসমেন্ট'}</span>
          </div>
        </div>
      </section>

    </div>
  );
}