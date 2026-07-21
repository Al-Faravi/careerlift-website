import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NeoCard from '../../components/ui/NeoCard';
import NeoButton from '../../components/ui/NeoButton';
import SectionTitle from '../../components/ui/SectionTitle';
import { useLanguage } from '../../context/LanguageContext';

export default function Courses() {
  const { lang } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // 100% Real CareerLift Course Catalog (Updated with 9 Specialized Courses)
  const coursesData = [
    {
      id: 1,
      category: 'Caregiving',
      isFree: true,
      rating: '5.0',
      duration: '3 - 6 Months',
      title: {
        EN: 'Caregiving for Elderly Persons Level 3',
        BN: 'কেয়ারগিভিং ফর এল্ডারলি পার্সনস লেভেল-৩'
      },
      desc: {
        EN: 'Specialized training in geriatric care, daily living assistance, vital signs monitoring, and empathetic support for senior citizens. High demand for UK & Japan skilled worker visas.',
        BN: 'বয়স্ক ব্যক্তিদের শারীরিক ও মানসিক যত্ন, ভাইটাল সাইন মনিটরিং এবং দৈনন্দিন জীবনে সহায়তার ওপর বিশেষায়িত প্রশিক্ষণ। ইউকে এবং জাপানে কেয়ারগিভার ভিসার জন্য অত্যন্ত উপযোগী।'
      },
      tags: ['NSDA Certified', 'UK & Japan Pathway', 'High Demand'],
      icon: '👴'
    },
    {
      id: 2,
      category: 'Caregiving',
      isFree: true,
      rating: '5.0',
      duration: '3 - 6 Months',
      title: {
        EN: 'Caregiving for Infants, Toddlers and Children Level 3',
        BN: 'কেয়ারগিভিং ফর ইনফ্যান্টস, টডলার্স অ্যান্ড চিলড্রেন লেভেল-৩'
      },
      desc: {
        EN: 'Comprehensive pediatric caregiving covering infant nutrition, child hygiene, early childhood development, safety protocols, and emergency first aid for infants and toddlers.',
        BN: 'নবজাতক ও শিশুদের সঠিক পুষ্টি, স্বাস্থ্যবিধি, মানসিক বিকাশ, নিরাপত্তা প্রোটোকল এবং পেডিয়াট্রিক ফার্স্ট এইডের ওপর আন্তর্জাতিক মানের পূর্ণাঙ্গ প্রশিক্ষণ।'
      },
      tags: ['Pediatric Care', 'NSDA Certified', 'Daycare Specialist'],
      icon: '👶'
    },
    {
      id: 3,
      category: 'Caregiving',
      isFree: false,
      rating: '5.0',
      duration: '3 - 6 Months',
      title: {
        EN: 'Dementia Caregiving Level 3',
        BN: 'ডিমেনশিয়া কেয়ারগিভিং লেভেল-৩'
      },
      desc: {
        EN: 'Advanced clinical caregiving for patients with Alzheimer\'s and Dementia. Master behavioral management, memory care techniques, and compassionate communication.',
        BN: 'অ্যালঝাইমার এবং ডিমেনশিয়ায় আক্রান্ত রোগীদের বিশেষ ক্লিনিক্যাল যত্ন। রোগীর আচরণের পরিবর্তন ব্যবস্থাপনা, মেমোরি কেয়ার এবং সংবেদনশীল যোগাযোগের ওপর উচ্চতর প্রশিক্ষণ।'
      },
      tags: ['Advanced Care', 'Clinical Lab', 'Global Opportunity'],
      icon: '🧠'
    },
    {
      id: 4,
      category: 'Caregiving',
      isFree: false,
      rating: '5.0',
      duration: '3 - 6 Months',
      title: {
        EN: 'Caregiving for Special Needs Persons Level 3',
        BN: 'কেয়ারগিভিং ফর স্পেশাল নিডস পার্সনস লেভেল-৩'
      },
      desc: {
        EN: 'Professional support and mobility assistance for individuals with physical or cognitive disabilities. Learn adaptive care, patience, and specialized rehabilitation support.',
        BN: 'শারীরিক বা মানসিক প্রতিবন্ধকতার শিকার ও বিশেষ চাহিদাসম্পন্ন ব্যক্তিদের সহায়তার জন্য প্রফেশনাল প্রশিক্ষণ। মোড়েবিলিটি সাপোর্ট এবং পুনর্বাসন সেবার কৌশল শিক্ষা।'
      },
      tags: ['Special Needs', 'Professional Care', 'UK Pathway'],
      icon: '♿'
    },
    {
      id: 5,
      category: 'Healthcare & Beauty',
      isFree: true,
      rating: '4.9',
      duration: '3 Months',
      title: {
        EN: 'Primary Healthcare Service Level 2',
        BN: 'প্রাইমারি হেলথকেয়ার সার্ভিস লেভেল-২'
      },
      desc: {
        EN: 'Foundation course in primary community healthcare, patient assessment, basic pharmacology, hygiene management, and first response medical assistance.',
        BN: 'প্রাথমিক স্বাস্থ্যসেবা, রোগীর প্রাথমিক মূল্যায়ন, সাধারণ ওষুধ ব্যবস্থাপনা, স্বাস্থ্যবিধি এবং জরুরি প্রাথমিক চিকিৎসার ওপর ভিত্তিপ্রস্তর এবং গুরুত্বপূর্ণ কারিগরি কোর্স।'
      },
      tags: ['Primary Health', 'NSDA Certified', 'Free Scholarship'],
      icon: '🩺'
    },
    {
      id: 6,
      category: 'Healthcare & Beauty',
      isFree: false,
      rating: '4.9',
      duration: '3 Months',
      title: {
        EN: 'Skin Care Level 3',
        BN: 'স্কিন কেয়ার লেভেল-৩'
      },
      desc: {
        EN: 'Professional dermatology basics, aesthetic skincare treatments, facial therapy, skin analysis, and hygiene protocols for modern salons and clinical aesthetic centers.',
        BN: 'ত্বকের সঠিক যত্ন, এস্থেটিক ট্রিটমেন্ট, ফেসিয়াল থেরাপি, স্কিন অ্যানালাইসিস এবং আধুনিক ক্লিনিক্যাল ও সেলুন হাইজিন প্রোটোকলের ওপর প্রফেশনাল লেভেল-৩ প্রশিক্ষণ।'
      },
      tags: ['Aesthetics', 'Beauty & Health', 'Self Employment'],
      icon: '✨'
    },
    {
      id: 7,
      category: 'Language Skills',
      isFree: false,
      rating: '5.0',
      duration: '3 - 4 Months',
      title: {
        EN: 'Japanese Language Level 2 (SSW Prep)',
        BN: 'জাপানিজ ল্যাঙ্গুয়েজ লেভেল-২ (SSW প্রস্তুতি)'
      },
      desc: {
        EN: 'Tailored Japanese language mastery focusing on N5/N4 standards and healthcare vocabulary. Designed specifically for candidates aiming for Japan Specified Skilled Worker visas.',
        BN: 'জাপানের SSW (Specified Skilled Worker) কেয়ারগিভিং ও স্কিলড ভিসার জন্য বিশেষায়িত ভাষা প্রশিক্ষণ। জাপানি সংস্কৃতি, স্পোকেন এবং হেলথকেয়ার টেকনিক্যাল শব্দাবলি শিক্ষা।'
      },
      tags: ['Japan Visa', 'SSW Exam Prep', 'Spoken Japanese'],
      icon: '🇯🇵'
    },
    {
      id: 8,
      category: 'Language Skills',
      isFree: false,
      rating: '4.9',
      duration: '3 Months',
      title: {
        EN: 'English for Work Level 2',
        BN: 'ইংলিশ ফর ওয়ার্ক লেভেল-২'
      },
      desc: {
        EN: 'Practical workplace communication, professional email writing, interview preparation, and fluent spoken English tailored for corporate jobs and international work environments.',
        BN: 'কর্মক্ষেত্রে সাবলীল ইংরেজি কথোপকথন, প্রফেশনাল ইমেইল রাইটিং, ইন্টারভিউ প্রস্তুতি এবং কর্পোরেট ও আন্তর্জাতিক কর্মপরিবেশের জন্য ব্যবহারিক ইংরেজি যোগাযোগ দক্ষতা।'
      },
      tags: ['Workplace English', 'Communication', 'Job Interview'],
      icon: '🗣️'
    },
    {
      id: 9,
      category: 'IT Skills',
      isFree: false,
      rating: '4.9',
      duration: '3 Months',
      title: {
        EN: 'Digital Marketing Level 3',
        BN: 'ডিজিটাল মার্কেটিং লেভেল-৩'
      },
      desc: {
        EN: 'Master social media marketing, Facebook & Instagram ads, SEO, content strategy, and online brand management. Start freelancing or boost your business growth.',
        BN: 'সোশ্যাল মিডিয়া মার্কেটিং, ফেসবুক ও ইনস্টাগ্রাম অ্যাডস, এসইও (SEO), কন্টেন্ট স্ট্র্যাটেজি এবং অনলাইন ব্র্যান্ডিং মাস্টারক্লাস। ফ্রিল্যান্সিং ও ক্যারিয়ার উন্নতির সেরা মাধ্যম।'
      },
      tags: ['Digital Ads', 'SEO & Strategy', 'Freelancing'],
      icon: '📱'
    }
  ];

  // Dynamic Categories for Smart Filtering
  const categories = ['All', 'Caregiving', 'Healthcare & Beauty', 'Language Skills', 'IT Skills', 'Free Scholarship'];

  // Filter & Search Logic
  const filteredCourses = coursesData.filter((course) => {
    const matchesCategory = 
      selectedCategory === 'All' ? true :
      selectedCategory === 'Free Scholarship' ? course.isFree :
      course.category === selectedCategory;

    const matchesSearch = 
      course.title[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.desc[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 pb-16">
      
      {/* ================= 1. PAGE HEADER & SEARCH SECTION ================= */}
      <section className="pt-6 sm:pt-10 text-center max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/70 border border-white/80 shadow-sm text-blue-700 font-bold text-xs uppercase tracking-wider">
          <span>🎓 CareerLift Skill Academy</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-800 leading-tight">
          {lang === 'EN' ? 'Explore Our ' : 'আমাদের '} 
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {lang === 'EN' ? 'NSDA Recognized Courses' : 'অনুমোদিত কোর্সসমূহ'}
          </span>
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
          {lang === 'EN' 
            ? 'Master specialized caregiving, healthcare, language, and IT skills. Government recognized Level 2 & 3 qualifications designed for local and global job placement.'
            : 'আন্তর্জাতিক মানের কেয়ারগিভিং, হেলথকেয়ার, ভাষা শিক্ষা ও আইটি স্কিল অর্জন করুন। দেশ ও বিদেশে ১০০% কর্মসংস্থানের লক্ষ্যে ডিজাইন করা সরকারি লেভেল-২ এবং ৩ কোর্সসমূহ।'}
        </p>

        {/* Interactive Search Bar */}
        <div className="pt-2 max-w-xl mx-auto">
          <div className="relative flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'EN' ? "Search courses (e.g., Dementia, Elderly, Japanese, IT)..." : "কোর্সের নাম লিখে খুঁজুন (যেমন: কেয়ারগিভিং, জাপানিজ, আইটি)..."}
              className="w-full pl-12 pr-10 py-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/90 shadow-neo-inset text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <span className="absolute left-4 text-xl text-slate-400 select-none">🔍</span>
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 text-xs font-bold text-slate-400 hover:text-slate-600 bg-slate-200/60 rounded-full w-6 h-6 flex items-center justify-center transition"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ================= 2. CATEGORY FILTER PILLS ================= */}
      <section className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
              selectedCategory === cat
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md scale-105'
                : 'bg-white/60 backdrop-blur-md border border-white/80 text-slate-700 hover:bg-white/90 shadow-sm scale-98 hover:scale-100'
            }`}
          >
            {cat === 'Free Scholarship' ? '🎁 100% Free / Scholarship' : cat === 'All' ? (lang === 'EN' ? 'All Courses (9)' : 'সকল কোর্স (৯)') : cat}
          </button>
        ))}
      </section>

      {/* ================= 3. COURSES GRID ================= */}
      <section>
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCourses.map((course) => (
              <NeoCard key={course.id} className="flex flex-col justify-between bg-white/70 hover:bg-white/95 border-white/90 group relative overflow-hidden transition-all duration-300">
                
                {/* Free Badge Ribbon */}
                {course.isFree && (
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-sm animate-pulse">
                    🔥 Free Option
                  </div>
                )}

                <div>
                  {/* Top Meta Data */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                      {course.icon}
                    </div>
                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-600 block">
                        {course.category}
                      </span>
                      <span className="text-xs font-bold text-slate-500 block mt-0.5">
                        ⏱️ {course.duration}
                      </span>
                    </div>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-lg sm:text-xl font-black text-slate-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                    {course.title[lang]}
                  </h3>

                  {/* Course Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6 line-clamp-3">
                    {course.desc[lang]}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {course.tags.map((tag, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-md text-[10px] font-extrabold bg-slate-100 text-slate-700 border border-slate-200/80">
                        ✓ {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Action */}
                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <div className="flex items-center text-xs font-extrabold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                    ★ {course.rating}
                  </div>

                  <Link to={course.isFree ? "/nsda-free-course" : "/about-us"}>
                    <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs shadow-md hover:shadow-lg hover:from-blue-700 hover:to-indigo-700 active:scale-95 transition-all flex items-center space-x-1.5">
                      <span>{course.isFree ? (lang === 'EN' ? 'Apply Free' : 'ফ্রি আবেদন') : (lang === 'EN' ? 'Enroll Now' : 'ভর্তি হন')}</span>
                      <span>→</span>
                    </button>
                  </Link>
                </div>

              </NeoCard>
            ))}
          </div>
        ) : (
          /* Empty State when Search yields no results */
          <div className="text-center py-16 bg-white/40 backdrop-blur-md rounded-3xl border border-white/60 max-w-lg mx-auto shadow-neo-float">
            <span className="text-5xl block mb-3">🔍</span>
            <h3 className="text-lg font-bold text-slate-800">No courses found</h3>
            <p className="text-xs text-slate-500 mt-1">We couldn't find any course matching "{searchQuery}". Try a different term or reset filters.</p>
            <button 
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-5 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs shadow-md hover:bg-blue-700 active:scale-95 transition"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* ================= 4. BOTTOM ADMISSION HELP BOX ================= */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-8 sm:p-12 text-white text-center relative overflow-hidden shadow-neo-float">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-2xl mx-auto space-y-4 relative z-10">
          <span className="px-3.5 py-1 rounded-full bg-white/20 text-white font-extrabold text-xs uppercase tracking-wider backdrop-blur-md">
            🤝 Personal Guidance
          </span>
          <h2 className="text-2xl sm:text-4xl font-black leading-tight">
            {lang === 'EN' ? 'Need Help Choosing the Right Level 3 Course?' : 'সঠিক লেভেল-৩ কোর্সটি বেছে নিতে সাহায্য প্রয়োজন?'}
          </h2>
          <p className="text-sm sm:text-base text-blue-100 font-normal leading-relaxed">
            {lang === 'EN'
              ? 'Whether you are aiming for a healthcare job in the UK, caregiving in Japan, or a local corporate career—our expert counselors will guide you to the exact NSDA certified course you need.'
              : 'ইউকে-র হেলথকেয়ার জব, জাপানে কেয়ারগিভিং কিংবা দেশীয় কর্পোরেট ক্যারিয়ার—আপনার লক্ষ্যের সাথে মিল রেখে সঠিক সরকারি (NSDA) কোর্সটি বেছে নিতে আমাদের অভিজ্ঞ কাউন্সিলররা আপনাকে সম্পূর্ণ সাহায্য করবেন।'}
          </p>
          <div className="pt-3">
            <Link to="/about-us">
              <button className="px-8 py-4 rounded-xl bg-white text-blue-700 font-black text-sm shadow-lg hover:bg-blue-50 active:scale-95 transition-all">
                {lang === 'EN' ? 'Contact Office for Free Consultation →' : 'ফ্রি কাউন্সিলিংয়ের জন্য যোগাযোগ করুন →'}
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}