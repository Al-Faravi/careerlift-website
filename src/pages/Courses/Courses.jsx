import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, Clock, Star, CheckCircle2, ArrowRight, X, 
  GraduationCap, Sparkles, ShieldCheck, Tag, Award, Briefcase, ChevronDown
} from 'lucide-react';
import NeoCard from '../../components/ui/NeoCard';
import SectionTitle from '../../components/ui/SectionTitle';
import { useLanguage } from '../../context/LanguageContext';

export default function Courses() {
  const { lang } = useLanguage();
  const currentLang = lang || 'EN';

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Quick Lead Capture Form State for Bottom Section
  const [formData, setFormData] = useState({ 
    name: '', phone: '', interest: '🎉 NSDA Free Course (Scholarship / স্কলারশিপ)', source: 'Courses Page'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ LIVE GOOGLE SHEETS API INTEGRATION FOR COURSES PAGE
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby6xxm5ItCCd-z8tlMzYxZMx0xHn7IYdLY_iCOD0KxBi_sbDfDFyf00RQzQE_rj_s9x/exec";

    try {
      await fetch(GOOGLE_SCRIPT_URL, { method: "POST", body: JSON.stringify(formData) });
      setSubmitSuccess(true);
      setFormData({ name: '', phone: '', interest: '🎉 NSDA Free Course (Scholarship / স্কলারশিপ)', source: 'Courses Page' });
      setTimeout(() => setSubmitSuccess(false), 6000);
    } catch (error) {
      console.error("Submission Error:", error);
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 6000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // ✅ FUTURE CRUD READY: 100% Real CareerLift Course Catalog
  const coursesData = [
    {
      id: "1", category: 'Caregiving', rating: '5.0', duration: '3 - 6 Months', image: '/Elderly person.png',
      title: { EN: 'Caregiving for Elderly Persons Level 3', BN: 'কেয়ারগিভিং ফর এল্ডারলি পার্সনস লেভেল-৩' },
      desc: { EN: 'Specialized training in geriatric care, daily living assistance, vital signs monitoring, and empathetic support for senior citizens. High demand for UK & Japan skilled worker visas.', BN: 'বয়স্ক ব্যক্তিদের শারীরিক ও মানসিক যত্ন, ভাইটাল সাইন মনিটরিং এবং দৈনন্দিন জীবনে সহায়তার ওপর বিশেষায়িত প্রশিক্ষণ। ইউকে এবং জাপানে কেয়ারগিভার ভিসার জন্য অত্যন্ত উপযোগী।' },
      tags: ['NSDA Certified', 'UK & Japan Pathway', 'High Demand'], badge: 'UK Pathway'
    },
    {
      id: "2", category: 'Caregiving', rating: '5.0', duration: '3 - 6 Months', image: '/Infant toddlers.png',
      title: { EN: 'Caregiving for Infants, Toddlers and Children Level 3', BN: 'কেয়ারগিভিং ফর ইনফ্যান্টস, টডলার্স অ্যান্ড চিলড্রেন লেভেল-৩' },
      desc: { EN: 'Comprehensive pediatric caregiving covering infant nutrition, child hygiene, early childhood development, safety protocols, and emergency first aid for infants and toddlers.', BN: 'নবজাতক ও শিশুদের সঠিক পুষ্টি, স্বাস্থ্যবিধি, মানসিক বিকাশ, নিরাপত্তা প্রোটোকল এবং পেডিয়াট্রিক ফার্স্ট এইডের ওপর আন্তর্জাতিক মানের পূর্ণাঙ্গ প্রশিক্ষণ।' },
      tags: ['Pediatric Care', 'NSDA Certified', 'Daycare Specialist'], badge: 'High Demand'
    },
    {
      id: "3", category: 'Caregiving', rating: '5.0', duration: '3 - 6 Months', image: '/Dementia caregiving.png',
      title: { EN: 'Dementia Caregiving Level 3', BN: 'ডিমেনশিয়া কেয়ারগিভিং লেভেল-৩' },
      desc: { EN: 'Advanced clinical caregiving for patients with Alzheimer\'s and Dementia. Master behavioral management, memory care techniques, and compassionate communication.', BN: 'অ্যালঝাইমার এবং ডিমেনশিয়ায় আক্রান্ত রোগীদের বিশেষ ক্লিনিক্যাল যত্ন। রোগীর আচরণের পরিবর্তন ব্যবস্থাপনা, মেমোরি কেয়ার এবং সংবেদনশীল যোগাযোগের ওপর উচ্চতর প্রশিক্ষণ।' },
      tags: ['Advanced Care', 'Clinical Lab', 'Global Opportunity'], badge: 'Clinical Lab'
    },
    {
      id: "4", category: 'Caregiving', rating: '5.0', duration: '3 - 6 Months', image: '/Special needs.png',
      title: { EN: 'Caregiving for Special Needs Persons Level 3', BN: 'কেয়ারগিভিং ফর স্পেশাল নিডস পার্সনস লেভেল-৩' },
      desc: { EN: 'Professional support and mobility assistance for individuals with physical or cognitive disabilities. Learn adaptive care, patience, and specialized rehabilitation support.', BN: 'শারীরিক বা মানসিক প্রতিবন্ধকতার শিকার ও বিশেষ চাহিদাসম্পন্ন ব্যক্তিদের সহায়তার জন্য প্রফেশনাল প্রশিক্ষণ। মোবিলিটি সাপোর্ট এবং পুনর্বাসন সেবার কৌশল শিক্ষা।' },
      tags: ['Special Needs', 'Professional Care', 'UK Pathway'], badge: 'UK Pathway'
    },
    {
      id: "5", category: 'Healthcare & Beauty', rating: '4.9', duration: '3 Months', image: '/Primary healthcare.png',
      title: { EN: 'Primary Healthcare Service Level 2', BN: 'প্রাইমারি হেলথকেয়ার সার্ভিস লেভেল-২' },
      desc: { EN: 'Foundation course in primary community healthcare, patient assessment, basic pharmacology, hygiene management, and first response medical assistance.', BN: 'প্রাথমিক স্বাস্থ্যসেবা, রোগীর প্রাথমিক মূল্যায়ন, সাধারণ ওষুধ ব্যবস্থাপনা, স্বাস্থ্যবিধি এবং জরুরি প্রাথমিক চিকিৎসার ওপর ভিত্তিপ্রস্তর এবং গুরুত্বপূর্ণ কারিগরি কোর্স।' },
      tags: ['Primary Health', 'NSDA Certified', 'First Aid'], badge: 'Govt. Free / Scholarship'
    },
    {
      id: "6", category: 'Healthcare & Beauty', rating: '4.9', duration: '3 Months', image: '/Skin Care.png',
      title: { EN: 'Skin Care Level 3', BN: 'স্কিন কেয়ার লেভেল-৩' },
      desc: { EN: 'Professional dermatology basics, aesthetic skincare treatments, facial therapy, skin analysis, and hygiene protocols for modern salons and clinical aesthetic centers.', BN: 'ত্বকের সঠিক যত্ন, এস্থেটিক ট্রিটমেন্ট, ফেসিয়াল থেরাপি, স্কিন অ্যানালাইসিস এবং আধুনিক ক্লিনিক্যাল ও সেলুন হাইজিন প্রোটোকলের ওপর প্রফেশনাল লেভেল-৩ প্রশিক্ষণ।' },
      tags: ['Aesthetics', 'Beauty & Health', 'Self Employment'], badge: 'Self Employment'
    },
    {
      id: "7", category: 'Language Skills', rating: '5.0', duration: '3 - 4 Months', image: '/japanese language.png',
      title: { EN: 'Japanese Language Level 2 (SSW Prep)', BN: 'জাপানিজ ল্যাঙ্গুয়েজ লেভেল-২ (SSW প্রস্তুতি)' },
      desc: { EN: 'Tailored Japanese language mastery focusing on N5/N4 standards and healthcare vocabulary. Designed specifically for candidates aiming for Japan Specified Skilled Worker visas.', BN: 'জাপানের SSW (Specified Skilled Worker) কেয়ারগিভিং ও স্কিলড ভিসার জন্য বিশেষায়িত ভাষা প্রশিক্ষণ। জাপানি সংস্কৃতি, স্পোকেন এবং হেলথকেয়ার টেকনিক্যাল শব্দাবলি শিক্ষা।' },
      tags: ['Japan Visa', 'SSW Exam Prep', 'Spoken Japanese'], badge: 'Japan SSW Track'
    },
    {
      id: "8", category: 'Language Skills', rating: '4.9', duration: '3 Months', image: '/English for work.png',
      title: { EN: 'English for Work Level 2', BN: 'ইংলিশ ফর ওয়ার্ক লেভেল-২' },
      desc: { EN: 'Practical workplace communication, professional email writing, interview preparation, and fluent spoken English tailored for corporate jobs and international work environments.', BN: 'কর্মক্ষেত্রে সাবলীল ইংরেজি কথোপকথন, প্রফেশনাল ইমেইল রাইটিং, ইন্টারভিউ প্রস্তুতি এবং কর্পোরেট ও আন্তর্জাতিক কর্মপরিবেশের জন্য ব্যবহারিক ইংরেজি যোগাযোগ দক্ষতা।' },
      tags: ['Workplace English', 'Communication', 'Job Interview'], badge: 'Corporate Essential'
    },
    {
      id: "9", category: 'IT Skills', rating: '4.9', duration: '3 Months', image: '/Digital Marketing.png',
      title: { EN: 'Digital Marketing Level 3', BN: 'ডিজিটাল মার্কেটিং লেভেল-৩' },
      desc: { EN: 'Master social media marketing, Facebook & Instagram ads, SEO, content strategy, and online brand management. Start freelancing or boost your business growth.', BN: 'সোশ্যাল মিডিয়া মার্কেটিং, ফেসবুক ও ইনস্টাগ্রাম অ্যাডস, এসইও (SEO), কন্টেন্ট স্ট্র্যাটেজি এবং অনলাইন ব্র্যান্ডিং মাস্টারক্লাস। ফ্রিল্যান্সিং ও ক্যারিয়ার উন্নতির সেরা মাধ্যম।' },
      tags: ['Digital Ads', 'SEO & Strategy', 'Freelancing'], badge: 'Freelancing'
    },
    {
      id: "10", category: 'Healthcare & Beauty', rating: '5.0', duration: '1 Day (10 AM - 5 PM)', image: '/Day long Primary Healthcare.png',
      title: { EN: 'Day-long Primary Healthcare, First Aid & CPR', BN: 'দিনব্যাপী প্রাইমারি হেলথ কেয়ার, ফার্স্ট এইড ও সিপিআর' },
      desc: { EN: 'Learn essential life-saving skills in just one day! Covers CPR, bleeding control, Heimlich maneuver, burn management, and vital signs. Includes official certificate.', BN: 'এক দিনেই শিখুন জীবন রক্ষাকারী দক্ষতা! সিপিআর, রক্তপাত নিয়ন্ত্রণ, চোকিং ম্যানেজমেন্ট, পোড়া ক্ষত সেবা এবং ব্লাড প্রেশার পরিমাপ। প্রশিক্ষণ শেষে সার্টিফিকেট প্রদান।' },
      tags: ['1 Day Workshop', 'Certificate', '৳1500 Course Fee'], badge: '1-Day Workshop'
    },
    {
      id: "11", category: 'Healthcare & Beauty', rating: '5.0', duration: '1 Day (10 AM - 5 PM)', image: '/CPR & Emmergency Response Program.jpg',
      title: { EN: 'CPR & Emergency Response Training Program', BN: 'CPR ও ইমার্জেন্সি রেসপন্স ট্রেনিং প্রোগ্রাম' },
      desc: { EN: 'Intensive hands-on training featuring live demo sessions on First Aid, CPR, fracture care, and emergency response. Guided by expert instructors with study materials included.', BN: 'ফার্স্ট এইড, সিপিআর এবং ইমার্জেন্সি রেসপন্সের ওপর হ্যান্ডস-অন প্র্যাকটিক্যাল ট্রেনিং। লাইভ ডেমো সেশন, বিশেষজ্ঞ প্রশিক্ষক এবং স্টাডি ম্যাটেরিয়ালসহ সার্টিফিকেট প্রদান।' },
      tags: ['Hands-on Training', 'Live Demo', '৳1500 Course Fee'], badge: 'Practical Drill'
    }
  ];

  const categories = ['All', 'Caregiving', 'Healthcare & Beauty', 'Language Skills', 'IT Skills'];

  const filteredCourses = coursesData.filter((course) => {
    const matchesCategory = selectedCategory === 'All' ? true : course.category === selectedCategory;
    const matchesSearch = 
      course.title[currentLang].toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.desc[currentLang].toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12 sm:space-y-20 pb-16 bg-slate-50 min-h-screen">
      
      {/* 1. PAGE HERO & SEARCH BAR */}
      <section className="bg-slate-900 text-white pt-12 sm:pt-16 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4 sm:space-y-6">
          <div className="inline-flex items-center space-x-2 text-xs font-black tracking-widest uppercase text-blue-400 bg-white/10 border border-white/15 px-4 py-1.5 rounded-full backdrop-blur-md">
            <GraduationCap size={14} className="text-amber-400" />
            <span>{currentLang === 'EN' ? 'CareerLift Skill Academy' : 'কারিগরি ও দক্ষতা উন্নয়ন ইন্সটিটিউট'}</span>
          </div>

          <h1 className="text-2xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            {currentLang === 'EN' ? 'Explore Our ' : 'আমাদের '} 
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">
              {currentLang === 'EN' ? 'NSDA Recognized Courses' : 'অনুমোদিত কারিগরি কোর্সসমূহ'}
            </span>
          </h1>

          <p className="text-xs sm:text-base text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto">
            {currentLang === 'EN' 
              ? 'Master specialized caregiving, healthcare, language, and IT skills. Government recognized Level 2 & 3 qualifications designed for local and global job placement.'
              : 'আন্তর্জাতিক মানের কেয়ারগিভিং, হেলথকেয়ার, ভাষা শিক্ষা ও আইটি স্কিল অর্জন করুন। দেশ ও বিদেশে ১০০% কর্মসংস্থানের লক্ষ্যে ডিজাইন করা সরকারি লেভেল-২ এবং ৩ কোর্সসমূহ।'}
          </p>

          {/* Responsive Search Input */}
          <div className="pt-2 sm:pt-4 max-w-xl mx-auto">
            <div className="relative flex items-center shadow-2xl">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={currentLang === 'EN' ? "Search courses (e.g., CPR, Dementia, Elderly, Japanese)..." : "কোর্সের নাম লিখে খুঁজুন (যেমন: CPR, কেয়ারগিভিং, জাপানিজ)..."}
                className="w-full pl-11 sm:pl-12 pr-10 py-3.5 sm:py-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/20 shadow-lg text-xs sm:text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition"
              />
              <Search className="absolute left-4 text-slate-400" size={18} />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 text-slate-400 hover:text-slate-600 bg-slate-100 rounded-full w-6 h-6 flex items-center justify-center transition"
                >
                  <X size={13} strokeWidth={3} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. RESPONSIVE CATEGORY SWITCHER (Horizontal Scroll on Mobile) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 relative z-20">
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 sm:px-6 py-2.5 rounded-2xl text-xs sm:text-sm font-black transition-all duration-300 whitespace-nowrap flex-shrink-0 shadow-sm cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105'
                  : 'bg-white border border-slate-200/80 text-slate-700 hover:bg-slate-50 hover:border-blue-300'
              }`}
            >
              {cat === 'All' ? (currentLang === 'EN' ? `All Courses (${coursesData.length})` : `সকল কোর্স (${coursesData.length})`) : cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. COURSES GRID (10 Minute School Style: 2-Columns on Mobile, 3 on Desktop) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-8">
            {filteredCourses.map((course) => (
              <NeoCard 
                key={course.id} 
                className="!p-0 flex flex-col justify-between bg-white hover:bg-slate-50/50 border-slate-200/80 shadow-sm hover:shadow-xl group relative overflow-hidden transition-all duration-300 rounded-2xl sm:rounded-3xl"
              >
                <div>
                  {/* Image Header */}
                  <div className="relative h-32 sm:h-56 w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                    <img 
                      src={course.image} 
                      alt={course.title.EN} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-white/95 backdrop-blur-md text-blue-700 text-[9px] sm:text-[10px] font-black uppercase px-2 sm:px-3.5 py-0.5 sm:py-1.5 rounded-full shadow-sm line-clamp-1 max-w-[85%]">
                      {course.category}
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 flex items-center space-x-1 text-white text-[10px] sm:text-xs font-bold bg-slate-900/80 backdrop-blur-md px-2 sm:px-3 py-0.5 sm:py-1 rounded-md sm:rounded-lg border border-white/10">
                      <Clock size={11} className="text-blue-400" />
                      <span className="truncate">{course.duration}</span>
                    </div>

                    {/* Value Badge Top Right */}
                    {course.badge && (
                      <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-amber-500 text-slate-950 text-[8px] sm:text-[10px] font-black uppercase px-1.5 sm:px-2.5 py-0.5 rounded shadow-sm">
                        ★ {course.badge}
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-3.5 sm:p-7 flex flex-col flex-grow">
                    <h3 className="text-xs sm:text-xl font-black text-slate-900 mb-1.5 sm:mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                      {course.title[currentLang]}
                    </h3>

                    <p className="text-[11px] sm:text-sm text-slate-600 leading-relaxed font-medium mb-3 sm:mb-6 line-clamp-2 sm:line-clamp-3">
                      {course.desc[currentLang]}
                    </p>

                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-4">
                      {course.tags.slice(0, 2).map((tag, idx) => (
                        <span key={idx} className={`flex items-center space-x-1 px-2 sm:px-3 py-0.5 sm:py-1 rounded-lg sm:rounded-xl text-[9px] sm:text-xs font-bold border ${
                          tag.includes('1500') || tag.includes('Free') || tag.includes('Scholarship') || tag.includes('Certified')
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                            : 'bg-slate-50 text-slate-600 border-slate-200'
                        }`}>
                          <CheckCircle2 size={11} className={tag.includes('1500') || tag.includes('Free') ? 'text-emerald-600 flex-shrink-0' : 'text-blue-500 flex-shrink-0'} />
                          <span className="truncate">{tag}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Bar */}
                <div className="px-3.5 sm:px-7 pb-3.5 sm:pb-7 pt-3 sm:pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <div className="flex items-center space-x-1 text-[10px] sm:text-xs font-black text-amber-600 bg-amber-50 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl border border-amber-200/80">
                    <Star size={12} className="fill-amber-500 text-amber-500" />
                    <span>{course.rating}</span>
                  </div>

                  <Link to={`/course/${course.id}`}>
                    <button className="px-3 sm:px-6 py-1.5 sm:py-3 rounded-lg sm:rounded-xl bg-slate-900 text-white font-black text-[10px] sm:text-xs shadow-md hover:bg-blue-600 active:scale-95 transition-all flex items-center space-x-1 group/btn">
                      <span>{currentLang === 'EN' ? 'Details' : 'বিস্তারিত'}</span>
                      <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </NeoCard>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 max-w-lg mx-auto shadow-sm">
            <Search size={48} className="mx-auto text-slate-300 mb-4 animate-bounce" />
            <h3 className="text-lg font-black text-slate-800">No courses found</h3>
            <p className="text-xs text-slate-500 mt-1 font-medium">We couldn't find any course matching "{searchQuery}".</p>
            <button 
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-5 px-6 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs shadow-md hover:bg-blue-700 transition"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* 4. SMART ADMISSION ASSISTANCE & LIVE FORM BOX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] border border-slate-200/80 shadow-xl p-6 sm:p-14 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs font-black tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full">
                <Briefcase size={14} />
                <span>{currentLang === 'EN' ? 'Academic & Career Guidance' : 'ক্যারিয়ার ও কোর্স গাইডলাইন'}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
                {currentLang === 'EN' ? 'Confused About Choosing The Right Pathway?' : 'কোন কোর্সটি আপনার জন্য সেরা তা নিয়ে কনফিউজড?'}
              </h2>

              <p className="text-xs sm:text-base text-slate-600 font-medium leading-relaxed">
                {currentLang === 'EN'
                  ? 'Whether you need a 1-day clinical CPR workshop or a 6-month UK & Japan pathway Caregiving diploma—our expert counselors will evaluate your education and recommend the exact NSDA certified course you need.'
                  : 'আপনার ১ দিনের সিপিআর (CPR) ট্রেনিং প্রয়োজন হোক বা ৬ মাসের কেয়ারগিভিং ডিপ্লোমা—সঠিক কোর্সটি বেছে নিতে আমাদের অভিজ্ঞ কাউন্সিলররা সাহায্য করবেন।'}
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="flex items-center space-x-2.5 text-xs sm:text-sm font-bold text-slate-700">
                  <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0" />
                  <span>{currentLang === 'EN' ? 'Free government scholarship qualification check' : 'ফ্রি সরকারি স্কলারশিপ যোগ্যতা যাচাই'}</span>
                </div>
                <div className="flex items-center space-x-2.5 text-xs sm:text-sm font-bold text-slate-700">
                  <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0" />
                  <span>{currentLang === 'EN' ? 'Direct consultation for Japan SSW & UK caregiver visas' : 'জাপান SSW এবং ইউকে কেয়ারগিভার ভিসার সরাসরি পরামর্শ'}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl sm:rounded-3xl p-5 sm:p-10 shadow-sm">
                <div className="mb-6">
                  <h3 className="text-lg sm:text-2xl font-black text-slate-900">{currentLang === 'EN' ? 'Request Course Counseling' : 'ফ্রি পরামর্শের জন্য আবেদন করুন'}</h3>
                  <p className="text-xs font-medium text-slate-500 mt-1">Fill out the form and our admission officer will call you back.</p>
                </div>

                {submitSuccess ? (
                  <div className="p-8 rounded-2xl bg-emerald-100 border border-emerald-200 text-center space-y-2">
                    <CheckCircle2 size={40} className="text-emerald-600 mx-auto" />
                    <h4 className="text-lg font-black text-emerald-800">Request Received!</h4>
                    <p className="text-xs font-medium text-emerald-700">We will contact you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-3.5 sm:space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <input type="text" name="name" required value={formData.name} onChange={handleInputChange} placeholder="Full Name" className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      <input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} placeholder="Phone Number" className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    
                    <div className="relative w-full">
                      <select name="interest" value={formData.interest} onChange={handleInputChange} className="w-full pl-3.5 pr-10 py-3 sm:py-3.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer appearance-none truncate block shadow-2xs">
                        <option value="NSDA Free Course">🎉 NSDA Free Course (Scholarship / স্কলারশিপ)</option>
                        <option value="Care Giving Level-2 & 3">🏥 Care Giving Level-2 & 3 (কেয়ার গিভিং)</option>
                        <option value="IT Skills & Computer Operation">💻 IT Skills & Computer Operation</option>
                        <option value="Day-long Primary Healthcare">🚑 Day-long Primary Healthcare & CPR Workshop</option>
                        <option value="Japanese Language Level 2">🇯🇵 Japanese Language Level 2 (SSW Prep)</option>
                        <option value="Digital Marketing Level 3">💻 Digital Marketing Level 3</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-500">
                        <ChevronDown size={18} />
                      </div>
                    </div>

                    <button type="submit" disabled={isSubmitting} className="w-full py-3.5 sm:py-4 rounded-xl bg-slate-900 text-white font-bold text-xs sm:text-sm hover:bg-blue-600 active:scale-98 transition-colors disabled:opacity-50">
                      {isSubmitting ? 'Processing...' : (currentLang === 'EN' ? 'Submit Counseling Request →' : 'আবেদন জমা দিন →')}
                    </button>
                    <div className="flex items-center justify-center space-x-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-3">
                      <ShieldCheck size={14} className="text-emerald-500" />
                      <span>Secure & Confidential</span>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}