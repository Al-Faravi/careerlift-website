import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, GraduationCap, Stethoscope, Briefcase, CheckCircle2, 
  ArrowRight, ShieldCheck, Phone, Award, Building2, 
  FileCheck, Users, Layers, Play, Sparkles, Check, ChevronRight, FileText
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import NeoButton from '../../components/ui/NeoButton';

export default function Services() {
  const { lang } = useLanguage();
  const currentLang = lang || 'EN';
  
  // Tab Navigation State (Default: Study Abroad)
  const [activeTab, setActiveTab] = useState('study-abroad');
  const [activeVideoModal, setActiveVideoModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 100% Real CareerLift Services Architecture (Hosted directly from Google Drive / Cloud)
  const servicesData = {
    "study-abroad": {
      id: "study-abroad",
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />,
      category: { EN: "Global Education & Migration", BN: "গ্লোবাল এডুকেশন ও মাইগ্রেশন" },
      title: { 
        EN: "Study Abroad & Visa Consultancy Services", 
        BN: "স্টাডি অ্যাব্রোড ও ভিসা কনসালটেন্সি সার্ভিসেস" 
      },
      subtitle: {
        EN: "Your trusted gateway to higher education in the UK, Japan, Canada, and Europe with 98% visa success.",
        BN: "৯৮% ভিসা সাফল্যের সাথে যুক্তরাজ্য, জাপান, কানাডা এবং ইউরোপে উচ্চশিক্ষার বিশ্বস্ত মাধ্যম।"
      },
      description: { 
        EN: "We provide comprehensive end-to-end educational consulting and migration advisory. Our legal and admission experts evaluate your profile, match you with top global universities, ensure flawless documentation, and prepare you rigorously for embassy interviews.", 
        BN: "আমরা প্রদান করছি পূর্ণাঙ্গ এডুকেশনাল ও মাইগ্রেশন কনসাল্টিং। আমাদের অভিজ্ঞ লিগ্যাল এবং অ্যাডমিশন এক্সপার্টরা আপনার প্রোফাইল মূল্যায়ন করে সেরা ইউনিভার্সিটিতে ভর্তি, নির্ভুল ডকুমেন্টেশন এবং এমব্যাসি ইন্টারভিউয়ের শতভাগ প্রস্তুতি নিশ্চিত করেন।" 
      },
      media: {
        type: "gallery",
        mainImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=80",
        subImages: [
          "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80", 
          "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80", 
          "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80"
        ]
      },
      badgeText: { EN: "98% Visa Success Rate", BN: "৯৮% ভিসা সাফল্যের হার" },
      badgeSub: { EN: "Direct University Partners", BN: "সরাসরি ইউনিভার্সিটি পার্টনার" },
      deliverables: [
        { EN: "Strategic Profile & Eligibility Assessment", BN: "প্রোফাইল এবং যোগ্যতা যাচাই" },
        { EN: "SOP, LOR & Scholarship Documentation Support", BN: "SOP, LOR এবং স্কলারশিপ ডকুমেন্টেশন" },
        { EN: "Direct University & College Placement", BN: "সরাসরি ইউনিভার্সিটি ও কলেজে ভর্তি" },
        { EN: "Embassy Interview Simulation & Preparation", BN: "এমব্যাসি ইন্টারভিউ প্রস্তুতি ও মক টেস্ট" },
        { EN: "Pre-Departure & Accommodation Assistance", BN: "প্রি-ডিপার্চার ও আবাসন সহায়তা" }
      ],
      ctaText: { EN: "Book Free Visa Assessment", BN: "ফ্রি ভিসা এসেসমেন্ট বুক করুন" },
      link: "/study-abroad"
    },
    "nsda-vocational": {
      id: "nsda-vocational",
      icon: <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />,
      category: { EN: "Government Accredited Training", BN: "সরকার স্বীকৃত প্রশিক্ষণ" },
      title: { 
        EN: "NSDA Recognized Skill Development & Training", 
        BN: "NSDA স্বীকৃত কারিগরি ও মানোন্নয়ন প্রশিক্ষণ" 
      },
      subtitle: {
        EN: "Prime Minister's Office authorized Level 2 & Level 3 vocational qualifications for global employability.",
        BN: "প্রধানমন্ত্রীর কার্যালয়ের অধীনস্থ NSDA অনুমোদিত লেভেল-২ এবং লেভেল-৩ আন্তর্জাতিক মানের কারিগরি যোগ্যতা।"
      },
      description: { 
        EN: "CareerLift Skill Academy operates under strict National Skills Development Authority (NSDA) guidelines. We equip youth and professionals with practical, laboratory-tested competencies in caregiving, healthcare, language mastery, and modern IT.", 
        BN: "ক্যারিয়ারলিফ্ট স্কিল একাডেমি ন্যাশনাল স্কিলস ডেভেলপমেন্ট অথরিটি (NSDA)-এর সরাসরি তত্ত্বাবধানে পরিচালিত হয়। আমরা যুবসমাজ ও পেশাজীবীদের কেয়ারগিভিং, হেলথকেয়ার, ভাষা এবং আধুনিক আইটির ল্যাব-ভিত্তিক ব্যবহারিক প্রশিক্ষণ প্রদান করি।" 
      },
      media: {
        type: "image",
        mainImage: "https://images.unsplash.com/photo-1576267423048-15c0040fec78?auto=format&fit=crop&w=1000&q=80",
        secondaryImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
      },
      badgeText: { EN: "Govt. NSDA Approved", BN: "সরকারি NSDA অনুমোদিত" },
      badgeSub: { EN: "Level 2 & Level 3 Competency", BN: "লেভেল-২ এবং ৩ যোগ্যতা" },
      deliverables: [
        { EN: "Caregiving Level 3 (Geriatric, Pediatric & Dementia)", BN: "কেয়ারগিভিং লেভেল-৩ (বয়স্ক, শিশু ও ডিমেনশিয়া)" },
        { EN: "Primary Healthcare & First Aid Operations Level 2", BN: "প্রাইমারি হেলথকেয়ার ও ফার্স্ট এইড লেভেল-২" },
        { EN: "Specialized Japanese Language & SSW Exam Prep", BN: "বিশেষায়িত জাপানিজ ভাষা এবং SSW প্রস্তুতি" },
        { EN: "Professional IT & Corporate Communication", BN: "প্রফেশনাল আইটি ও কর্পোরেট কমিউনিকেশন" },
        { EN: "Official Government Assessment & Certificate", BN: "সরকারি এসেসমেন্ট ও রাষ্ট্রীয় সার্টিফিকেট" }
      ],
      ctaText: { EN: "Explore Accredited Courses", BN: "অনুমোদিত কোর্সসমূহ দেখুন" },
      link: "/courses"
    },
    "medical-staffing": {
      id: "medical-staffing",
      icon: <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />,
      category: { EN: "Healthcare Staffing & Solutions", BN: "হেলথকেয়ার স্টাফিং ও সলিউশন" },
      title: { 
        EN: "Specialized Healthcare & Caregiving Solutions", 
        BN: "বিশেষায়িত হেলথকেয়ার ও কেয়ারগিভিং সলিউশন" 
      },
      subtitle: {
        EN: "Deploying certified caregivers, nurses, and medical first responders to hospitals, diagnostic centers, and homes.",
        BN: "হাসপাতাল, ডায়াগনস্টিক সেন্টার এবং গৃহস্থালির জন্য সার্টিফাইড কেয়ারগিভার, নার্স এবং ইমার্জেন্সি রেসপন্ডার ব্যবস্থাপনা।"
      },
      description: { 
        EN: "Beyond training, CareerLift serves as a reliable institutional bridge. We supply background-checked, clinically trained caregivers and primary healthcare personnel to top medical institutions, specialized care homes, and private patients requiring geriatric or post-operative care.", 
        BN: "শুধুমাত্র প্রশিক্ষণই নয়, ক্যারিয়ারলিফট একটি নির্ভরযোগ্য প্রাতিষ্ঠানিক মাধ্যম হিসেবে কাজ করে। আমরা দেশের স্বনামধন্য হাসপাতাল, ডায়াগনস্টিক সেন্টার এবং ব্যক্তিগত রোগীদের জন্য যাচাইকৃত ও ক্লিনিক্যালি প্রশিক্ষিত কেয়ারগিভার সরবরাহ করি।" 
      },
      media: {
        type: "image",
        mainImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
        secondaryImage: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
      },
      badgeText: { EN: "500+ Caregivers Deployed", BN: "৫০০+ কেয়ারগিভার কর্মরত" },
      badgeSub: { EN: "In Top Medical Institutes", BN: "শীর্ষ হাসপাতাল ও কেয়ার হোমে" },
      deliverables: [
        { EN: "Certified Caregiver Placement (Home & Hospital)", BN: "সার্টিফাইড কেয়ারগিভার প্লেসমেন্ট (হোম ও হাসপাতাল)" },
        { EN: "Elderly & Special Needs Rehabilitation Support", BN: "বয়স্ক ও বিশেষ চাহিদাসম্পন্ন পুনর্বাসন সহায়তা" },
        { EN: "Post-Operative & Clinical Hygiene Management", BN: "পোস্ট-অপারেটিভ ও ক্লিনিক্যাল হাইজিন ব্যবস্থাপনা" },
        { EN: "Day-Long First Aid & CPR Certification Workshops", BN: "দিনব্যাপী ফার্স্ট এইড ও সিপিআর ওয়ার্কশপ" },
        { EN: "Healthcare Staff Compliance & Institutional Audit", BN: "হেলথকেয়ার স্টাফ কমপ্লায়েন্স ও অডিট" }
      ],
      ctaText: { EN: "Request Healthcare Personnel", BN: "হেলথকেয়ার সার্ভিসের জন্য যোগাযোগ করুন" },
      link: "/about-us"
    },
    "corporate-hse": {
      id: "corporate-hse",
      icon: <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />,
      category: { EN: "Corporate Advisory & HSE", BN: "কর্পোরেট এডভাইজরি ও HSE" },
      title: { 
        EN: "Corporate Safety, HSE & Workforce Training", 
        BN: "কর্পোরেট সেফটি, HSE ও ওয়ার্কফোর্স ট্রেনিং" 
      },
      subtitle: {
        EN: "Empowering corporate workforces, factories, and NGOs with ISO/ILO compliant safety and soft skills.",
        BN: "ISO/ILO মানসম্মত সেফটি কমপ্লায়েন্স ও সফট স্কিলসের মাধ্যমে কর্পোরেট ও ফ্যাক্টরি কর্মীবাহিনীকে দক্ষ করে তোলা।"
      },
      description: { 
        EN: "We conduct institutional safety drills, Health, Safety, and Environment (HSE) risk assessments, and executive soft skills workshops. Our corporate training modules are tailored to meet industrial compliance and boost workforce productivity.", 
        BN: "আমরা প্রাতিষ্ঠানিক সেফটি ড্রিল, হেলথ, সেফটি এবং এনভায়রনমেন্ট (HSE) ঝুঁকি মূল্যায়ন এবং এক্সিকিউটিভ সফট স্কিলস কর্মশালা পরিচালনা করি। আমাদের কর্পোরেট ট্রেনিং মডিউলগুলো ইন্ডাস্ট্রিয়াল কমপ্লায়েন্স নিশ্চিত করতে সাহায্য করে।" 
      },
      media: {
        type: "image",
        mainImage: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80",
        secondaryImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
      },
      badgeText: { EN: "ISO & ILO Aligned", BN: "ISO ও ILO মানসম্মত" },
      badgeSub: { EN: "Industrial Safety Compliance", BN: "ইন্ডাস্ট্রিয়াল সেফটি কমপ্লায়েন্স" },
      deliverables: [
        { EN: "Workplace First Aid, Fire Safety & CPR Drills", BN: "ওয়ার্কপ্লেস ফার্স্ট এইড, ফায়ার সেফটি ও সিপিআর ড্রিল" },
        { EN: "Industrial HSE Compliance & Risk Assessment", BN: "ইন্ডাস্ট্রিয়াল HSE কমপ্লায়েন্স ও ঝুঁকি মূল্যায়ন" },
        { EN: "Employee Soft Skills & Executive Communication", BN: "এমপ্লয়ি সফট স্কিলস ও এক্সিকিউটিভ কমিউনিকেশন" },
        { EN: "Institutional Safety Audit & Reporting", BN: "প্রাতিষ্ঠানিক সেফটি অডিট ও রিপোর্টিং" },
        { EN: "Customized Training Modules for Organizations", BN: "প্রতিষ্ঠানের চাহিদা অনুযায়ী কাস্টমাইজড ট্রেনিং মডিউল" }
      ],
      ctaText: { EN: "Schedule Corporate Consultation", BN: "কর্পোরেট মিটিং সিডিউল করুন" },
      link: "/about-us"
    }
  };

  const currentService = servicesData[activeTab];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* ================= 1. EXECUTIVE MINIMALIST HEADER ================= */}
      <section className="bg-slate-900 text-white pt-12 sm:pt-16 pb-20 sm:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-3xl space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 text-xs font-black tracking-widest uppercase text-blue-400 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full backdrop-blur-md">
              <Sparkles size={14} className="text-blue-400 animate-spin-slow" />
              <span>{lang === 'EN' ? 'Institutional Services Portfolio' : 'প্রাতিষ্ঠানিক সেবাসমূহ'}</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              {lang === 'EN' ? 'Professional Consultancy & ' : 'প্রফেশনাল কনসালটেন্সি ও '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">
                {lang === 'EN' ? 'Skill Solutions' : 'স্কিল সলিউশন'}
              </span>
            </h1>
            
            <p className="text-xs sm:text-base text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {lang === 'EN'
                ? 'Explore our structured executive services. Click on any domain below to view interactive specifications, real campus galleries, and deliverables.'
                : 'আমাদের বিশেষায়িত সেবাসমূহ এক্সপ্লোর করুন। বিস্তারিত স্পেসিফিকেশন, রিয়েল ছবি এবং সেবার আওতা দেখতে নিচের যেকোনো ডোমেইনে ক্লিক করুন।'}
            </p>
          </div>

          {/* Official Video Trigger Box */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 sm:p-6 rounded-3xl text-center max-w-xs w-full shadow-2xl space-y-3 hover:bg-white/15 transition duration-300">
            <div 
              className="w-12 h-12 rounded-full bg-red-600 text-white mx-auto flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform" 
              onClick={() => setActiveVideoModal(true)}
            >
              <Play size={20} className="fill-white ml-0.5" />
            </div>
            <h4 className="font-bold text-xs sm:text-sm text-white">
              {lang === 'EN' ? 'Watch Global Career Video' : 'গ্লোবাল ক্যারিয়ার ভিডিও দেখুন'}
            </h4>
            <p className="text-[11px] text-slate-300 font-medium leading-tight">
              {lang === 'EN' ? 'See our interactive campus & strategic pathway in action.' : 'আমাদের ক্যাম্পাস ও স্ট্র্যাটেজিক পাথওয়ের বাস্তব ঝলক।'}
            </p>
          </div>
        </div>
      </section>

      {/* ================= 2. INTERACTIVE TAB NAVIGATION (10-MIN SCHOOL RESPONSIVE GRID) ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-10 relative z-20">
        <div className="bg-white p-2 sm:p-3 rounded-2xl sm:rounded-3xl shadow-xl border border-slate-200/80 grid grid-cols-2 lg:grid-cols-4 gap-2">
          {Object.values(servicesData).map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2.5 sm:space-x-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 text-left cursor-pointer ${
                  isActive 
                    ? 'bg-slate-900 text-white shadow-md scale-[1.02]' 
                    : 'hover:bg-slate-50 text-slate-600 hover:text-slate-900'
                }`}
              >
                <div className={`p-2 sm:p-2.5 rounded-xl flex-shrink-0 ${isActive ? 'bg-white/10 text-white' : 'bg-slate-100'}`}>
                  {tab.icon}
                </div>
                <div className="overflow-hidden">
                  <span className={`text-[9px] sm:text-[10px] font-black uppercase tracking-widest block truncate ${isActive ? 'text-blue-400' : 'text-slate-400'}`}>
                    {tab.category[currentLang]}
                  </span>
                  <span className="text-xs sm:text-sm font-black block truncate mt-0.5">
                    {tab.title[currentLang].split(' ').slice(0, 3).join(' ')}...
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* ================= 3. ACTIVE SERVICE DYNAMIC SHOWCASE ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
        <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] border border-slate-200/80 shadow-lg p-5 sm:p-14 transition-all duration-500">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            
            {/* LEFT: DETAILS & DELIVERABLES (7 COLS) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              
              {/* Title & Subtitle */}
              <div className="space-y-3">
                <div className="inline-flex items-center space-x-2 text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">
                  <span>★ {currentService.category[currentLang]}</span>
                </div>
                <h2 className="text-xl sm:text-4xl font-black text-slate-900 tracking-tight leading-snug">
                  {currentService.title[currentLang]}
                </h2>
                <p className="text-xs sm:text-base font-bold text-slate-700 bg-slate-50 p-3.5 sm:p-4 rounded-2xl border-l-4 border-blue-600 leading-relaxed">
                  {currentService.subtitle[currentLang]}
                </p>
              </div>

              {/* Description */}
              <p className="text-slate-600 text-xs sm:text-base leading-relaxed font-normal">
                {currentService.description[currentLang]}
              </p>

              {/* Deliverables Box */}
              <div className="bg-slate-50/90 border border-slate-200 rounded-2xl p-5 sm:p-8 space-y-4">
                <h3 className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-slate-500 border-b border-slate-200 pb-3 flex items-center">
                  <Layers size={16} className="mr-2 text-blue-600" />
                  {lang === 'EN' ? 'Key Service Deliverables & Scope' : 'মূল সেবাসমূহ ও কার্যপরিধি'}
                </h3>

                <div className="grid grid-cols-1 gap-2.5 sm:gap-3 pt-1">
                  {currentService.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 sm:space-x-3 text-xs sm:text-sm font-semibold text-slate-800 bg-white p-3 sm:p-3.5 rounded-xl border border-slate-200/60 shadow-2xs">
                      <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="leading-snug">{item[currentLang]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-2">
                <Link to={currentService.link} className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-black text-xs sm:text-sm transition-all shadow-md active:scale-98 flex items-center justify-center space-x-2 group">
                    <span>{currentService.ctaText[currentLang]}</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                
                <a href="tel:+8801818304081" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm transition flex items-center justify-center space-x-2">
                    <Phone size={15} className="text-blue-600" />
                    <span>{lang === 'EN' ? 'Call Hotline Now' : 'হটলাইনে কথা বলুন'}</span>
                  </button>
                </a>
              </div>

            </div>

            {/* RIGHT: REAL MEDIA SHOWCASE (5 COLS) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Gallery Mode */}
              {currentService.media.type === 'gallery' && (
                <div className="space-y-3 sm:space-y-4">
                  <div className="aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-slate-200 relative group">
                    <img 
                      src={currentService.media.mainImage} 
                      alt="Service Main" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 bg-slate-900/90 backdrop-blur-md text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/10 flex items-center justify-between">
                      <div>
                        <span className="text-[11px] sm:text-xs font-black block">{currentService.badgeText[currentLang]}</span>
                        <span className="text-[9px] sm:text-[10px] text-slate-400 font-medium">{currentService.badgeSub[currentLang]}</span>
                      </div>
                      <span className="px-2 sm:px-2.5 py-1 bg-blue-600 rounded-lg text-[9px] sm:text-[10px] font-bold">Verified</span>
                    </div>
                  </div>

                  {/* 3 Sub Images Grid */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {currentService.media.subImages.map((img, idx) => (
                      <div key={idx} className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                        <img 
                          src={img} 
                          alt="Sub gallery" 
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Standard Image Mode */}
              {currentService.media.type === 'image' && (
                <div className="space-y-3 sm:space-y-4">
                  <div className="aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-slate-200 relative group">
                    <img 
                      src={currentService.media.mainImage} 
                      alt="Service Main" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 bg-slate-900/90 backdrop-blur-md text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/10 flex items-center justify-between">
                      <div>
                        <span className="text-[11px] sm:text-xs font-black block">{currentService.badgeText[currentLang]}</span>
                        <span className="text-[9px] sm:text-[10px] text-slate-400 font-medium">{currentService.badgeSub[currentLang]}</span>
                      </div>
                      <span className="px-2 sm:px-2.5 py-1 bg-emerald-600 rounded-lg text-[9px] sm:text-[10px] font-bold">NSDA</span>
                    </div>
                  </div>

                  {currentService.media.secondaryImage && (
                    <div className="aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                      <img 
                        src={currentService.media.secondaryImage} 
                        alt="Strategic Pathway" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Interactive Help Banner */}
              <div className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white rounded-2xl p-5 sm:p-6 text-center space-y-2.5 sm:space-y-3 shadow-md">
                <FileText className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400 mx-auto" />
                <h4 className="font-bold text-xs sm:text-sm">
                  {lang === 'EN' ? 'Need Official Brochures or Details?' : 'অফিসিয়াল ব্রোশিওর বা বিস্তারিত প্রয়োজন?'}
                </h4>
                <p className="text-[11px] sm:text-xs text-blue-200">
                  {lang === 'EN' ? 'Get detailed PDF guides and fee structures directly from our desk.' : 'আমাদের ডেস্ক থেকে সরাসরি বিস্তারিত গাইড এবং ফি স্ট্রাকচার সংগ্রহ করুন।'}
                </p>
                <Link to="/about-us" className="inline-block px-5 py-2 rounded-xl bg-white text-slate-900 font-bold text-[11px] sm:text-xs hover:bg-blue-50 transition">
                  {lang === 'EN' ? 'Contact Executive Desk →' : 'এক্সিকিউটিভ ডেস্কে যোগাযোগ →'}
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= 4. COMPLIANCE & TRUST MODULE ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
        <div className="bg-slate-900 text-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-14 border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-5 space-y-3 sm:space-y-4">
              <span className="text-blue-400 font-bold text-xs uppercase tracking-widest block">
                {lang === 'EN' ? 'Institutional Reliability' : 'প্রাতিষ্ঠানিক নির্ভরযোগ্যতা'}
              </span>
              <h2 className="text-xl sm:text-4xl font-black tracking-tight leading-tight">
                {lang === 'EN' ? 'Committed to Quality, Compliance & Trust.' : 'মানসম্পন্ন সেবা, স্বচ্ছতা ও বিশ্বস্ততার প্রতিশ্রুতি।'}
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium">
                {lang === 'EN'
                  ? 'All training curriculums, recruitment processes, and immigration consulting strictly adhere to standard regulatory guidelines, ensuring complete transparency and security for our clients.'
                  : 'আমাদের সমস্ত ট্রেনিং কারিকুলাম, রিক্রুটমেন্ট প্রসেস এবং ইমিগ্রেশন কনসাল্টিং যথাযথ সরকারি ও আন্তর্জাতিক বিধিমালা মেনে পরিচালিত হয়, যা ক্লায়েন্টদের শতভাগ স্বচ্ছতা ও নিরাপত্তা নিশ্চিত করে।'}
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 sm:p-6 space-y-1.5 sm:space-y-2 hover:border-blue-500/50 transition">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
                <h4 className="font-bold text-xs sm:text-sm text-white">{lang === 'EN' ? 'NSDA Accreditation' : 'NSDA স্বীকৃতি'}</h4>
                <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                  {lang === 'EN' ? 'Official training provider under the Prime Minister\'s Office (NSDA).' : 'প্রধানমন্ত্রীর কার্যালয়ের অধীনস্থ (NSDA) অনুমোদিত প্রশিক্ষণ প্রতিষ্ঠান।'}
                </p>
              </div>

              <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 sm:p-6 space-y-1.5 sm:space-y-2 hover:border-blue-500/50 transition">
                <FileCheck className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                <h4 className="font-bold text-xs sm:text-sm text-white">{lang === 'EN' ? 'Ethical Immigration' : 'স্বচ্ছ ইমিগ্রেশন প্রক্রিয়া'}</h4>
                <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                  {lang === 'EN' ? 'Zero hidden fees, realistic profile assessment, and legally compliant paperwork.' : 'লুকানো খরচ ছাড়া সঠিক প্রোফাইল মূল্যায়ন এবং সম্পূর্ণ আইনি প্রক্রিয়া।'}
                </p>
              </div>

              <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 sm:p-6 space-y-1.5 sm:space-y-2 hover:border-blue-500/50 transition">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                <h4 className="font-bold text-xs sm:text-sm text-white">{lang === 'EN' ? 'Specialized Mentorship' : 'অভিজ্ঞ মেন্টরশিপ'}</h4>
                <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                  {lang === 'EN' ? 'Direct guidance from clinical healthcare professionals and visa experts.' : 'ক্লিনিক্যাল হেলথকেয়ার প্রফেশনাল এবং অভিজ্ঞ ভিসা এক্সপার্টদের সরাসরি তত্ত্বাবধান।'}
                </p>
              </div>

              <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 sm:p-6 space-y-1.5 sm:space-y-2 hover:border-blue-500/50 transition">
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
                <h4 className="font-bold text-xs sm:text-sm text-white">{lang === 'EN' ? 'Institutional Partnerships' : 'প্রাতিষ্ঠানিক অংশীদারিত্ব'}</h4>
                <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                  {lang === 'EN' ? 'Trusted by top healthcare centers, corporate firms, and international bodies.' : 'শীর্ষস্থানীয় হাসপাতাল, কর্পোরেট ফার্ম এবং আন্তর্জাতিক সংস্থা দ্বারা বিশ্বস্ত।'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5. REAL CAMPUS VIDEO OVERVIEW MODAL ================= */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <div className="p-4 bg-slate-800 flex justify-between items-center text-white font-bold text-xs sm:text-sm px-6">
              <span>{lang === 'EN' ? 'CareerLift Global Career & Campus Overview' : 'ক্যারিয়ারলিফ্ট প্রাতিষ্ঠানিক পরিচিতি ও ক্যাম্পাস ওভারভিউ'}</span>
              <button 
                onClick={() => setActiveVideoModal(false)}
                className="w-8 h-8 rounded-full bg-slate-700 hover:bg-red-600 flex items-center justify-center text-white transition cursor-pointer"
              >
                ✕
              </button>
            </div>
            
            {/* Real CareerLift Video Player */}
            <div className="aspect-video bg-black flex items-center justify-center relative">
              <video 
                src="/CareerLift__Global_Career.mp4" 
                controls 
                autoPlay 
                className="w-full h-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}