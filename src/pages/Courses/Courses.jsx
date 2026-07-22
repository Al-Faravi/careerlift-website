import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Clock, Star, CheckCircle2, ArrowRight, X } from 'lucide-react';
import NeoCard from '../../components/ui/NeoCard';
import SectionTitle from '../../components/ui/SectionTitle';
import { useLanguage } from '../../context/LanguageContext';

export default function Courses() {
  const { lang } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // 100% Real CareerLift Course Catalog
  const coursesData = [
    {
      id: "1",
      category: 'Caregiving',
      rating: '5.0',
      duration: '3 - 6 Months',
      image: '/Elderly person.png',
      title: {
        EN: 'Caregiving for Elderly Persons Level 3',
        BN: 'কেয়ারগিভিং ফর এল্ডারলি পার্সনস লেভেল-৩'
      },
      desc: {
        EN: 'Specialized training in geriatric care, daily living assistance, vital signs monitoring, and empathetic support for senior citizens. High demand for UK & Japan skilled worker visas.',
        BN: 'বয়স্ক ব্যক্তিদের শারীরিক ও মানসিক যত্ন, ভাইটাল সাইন মনিটরিং এবং দৈনন্দিন জীবনে সহায়তার ওপর বিশেষায়িত প্রশিক্ষণ। ইউকে এবং জাপানে কেয়ারগিভার ভিসার জন্য অত্যন্ত উপযোগী।'
      },
      tags: ['NSDA Certified', 'UK & Japan Pathway', 'High Demand']
    },
    {
      id: "2",
      category: 'Caregiving',
      rating: '5.0',
      duration: '3 - 6 Months',
      image: '/Infant toddlers.png',
      title: {
        EN: 'Caregiving for Infants, Toddlers and Children Level 3',
        BN: 'কেয়ারগিভিং ফর ইনফ্যান্টস, টডলার্স অ্যান্ড চিলড্রেন লেভেল-৩'
      },
      desc: {
        EN: 'Comprehensive pediatric caregiving covering infant nutrition, child hygiene, early childhood development, safety protocols, and emergency first aid for infants and toddlers.',
        BN: 'নবজাতক ও শিশুদের সঠিক পুষ্টি, স্বাস্থ্যবিধি, মানসিক বিকাশ, নিরাপত্তা প্রোটোকল এবং পেডিয়াট্রিক ফার্স্ট এইডের ওপর আন্তর্জাতিক মানের পূর্ণাঙ্গ প্রশিক্ষণ।'
      },
      tags: ['Pediatric Care', 'NSDA Certified', 'Daycare Specialist']
    },
    {
      id: "3",
      category: 'Caregiving',
      rating: '5.0',
      duration: '3 - 6 Months',
      image: '/Dementia caregiving.png',
      title: {
        EN: 'Dementia Caregiving Level 3',
        BN: 'ডিমেনশিয়া কেয়ারগিভিং লেভেল-৩'
      },
      desc: {
        EN: 'Advanced clinical caregiving for patients with Alzheimer\'s and Dementia. Master behavioral management, memory care techniques, and compassionate communication.',
        BN: 'অ্যালঝাইমার এবং ডিমেনশিয়ায় আক্রান্ত রোগীদের বিশেষ ক্লিনিক্যাল যত্ন। রোগীর আচরণের পরিবর্তন ব্যবস্থাপনা, মেমোরি কেয়ার এবং সংবেদনশীল যোগাযোগের ওপর উচ্চতর প্রশিক্ষণ।'
      },
      tags: ['Advanced Care', 'Clinical Lab', 'Global Opportunity']
    },
    {
      id: "4",
      category: 'Caregiving',
      rating: '5.0',
      duration: '3 - 6 Months',
      image: '/Special needs.png',
      title: {
        EN: 'Caregiving for Special Needs Persons Level 3',
        BN: 'কেয়ারগিভিং ফর স্পেশাল নিডস পার্সনস লেভেল-৩'
      },
      desc: {
        EN: 'Professional support and mobility assistance for individuals with physical or cognitive disabilities. Learn adaptive care, patience, and specialized rehabilitation support.',
        BN: 'শারীরিক বা মানসিক প্রতিবন্ধকতার শিকার ও বিশেষ চাহিদাসম্পন্ন ব্যক্তিদের সহায়তার জন্য প্রফেশনাল প্রশিক্ষণ। মোবিলিটি সাপোর্ট এবং পুনর্বাসন সেবার কৌশল শিক্ষা।'
      },
      tags: ['Special Needs', 'Professional Care', 'UK Pathway']
    },
    {
      id: "5",
      category: 'Healthcare & Beauty',
      rating: '4.9',
      duration: '3 Months',
      image: '/Primary healthcare.png',
      title: {
        EN: 'Primary Healthcare Service Level 2',
        BN: 'প্রাইমারি হেলথকেয়ার সার্ভিস লেভেল-২'
      },
      desc: {
        EN: 'Foundation course in primary community healthcare, patient assessment, basic pharmacology, hygiene management, and first response medical assistance.',
        BN: 'প্রাথমিক স্বাস্থ্যসেবা, রোগীর প্রাথমিক মূল্যায়ন, সাধারণ ওষুধ ব্যবস্থাপনা, স্বাস্থ্যবিধি এবং জরুরি প্রাথমিক চিকিৎসার ওপর ভিত্তিপ্রস্তর এবং গুরুত্বপূর্ণ কারিগরি কোর্স।'
      },
      tags: ['Primary Health', 'NSDA Certified', 'First Aid']
    },
    {
      id: "6",
      category: 'Healthcare & Beauty',
      rating: '4.9',
      duration: '3 Months',
      image: '/Skin Care.png',
      title: {
        EN: 'Skin Care Level 3',
        BN: 'স্কিন কেয়ার লেভেল-৩'
      },
      desc: {
        EN: 'Professional dermatology basics, aesthetic skincare treatments, facial therapy, skin analysis, and hygiene protocols for modern salons and clinical aesthetic centers.',
        BN: 'ত্বকের সঠিক যত্ন, এস্থেটিক ট্রিটমেন্ট, ফেসিয়াল থেরাপি, স্কিন অ্যানালাইসিস এবং আধুনিক ক্লিনিক্যাল ও সেলুন হাইজিন প্রোটোকলের ওপর প্রফেশনাল লেভেল-৩ প্রশিক্ষণ।'
      },
      tags: ['Aesthetics', 'Beauty & Health', 'Self Employment']
    },
    {
      id: "7",
      category: 'Language Skills',
      rating: '5.0',
      duration: '3 - 4 Months',
      image: '/japanese language.png',
      title: {
        EN: 'Japanese Language Level 2 (SSW Prep)',
        BN: 'জাপানিজ ল্যাঙ্গুয়েজ লেভেল-২ (SSW প্রস্তুতি)'
      },
      desc: {
        EN: 'Tailored Japanese language mastery focusing on N5/N4 standards and healthcare vocabulary. Designed specifically for candidates aiming for Japan Specified Skilled Worker visas.',
        BN: 'জাপানের SSW (Specified Skilled Worker) কেয়ারগিভিং ও স্কিলড ভিসার জন্য বিশেষায়িত ভাষা প্রশিক্ষণ। জাপানি সংস্কৃতি, স্পোকেন এবং হেলথকেয়ার টেকনিক্যাল শব্দাবলি শিক্ষা।'
      },
      tags: ['Japan Visa', 'SSW Exam Prep', 'Spoken Japanese']
    },
    {
      id: "8",
      category: 'Language Skills',
      rating: '4.9',
      duration: '3 Months',
      image: '/English for work.png',
      title: {
        EN: 'English for Work Level 2',
        BN: 'ইংলিশ ফর ওয়ার্ক লেভেল-২'
      },
      desc: {
        EN: 'Practical workplace communication, professional email writing, interview preparation, and fluent spoken English tailored for corporate jobs and international work environments.',
        BN: 'কর্মক্ষেত্রে সাবলীল ইংরেজি কথোপকথন, প্রফেশনাল ইমেইল রাইটিং, ইন্টারভিউ প্রস্তুতি এবং কর্পোরেট ও আন্তর্জাতিক কর্মপরিবেশের জন্য ব্যবহারিক ইংরেজি যোগাযোগ দক্ষতা।'
      },
      tags: ['Workplace English', 'Communication', 'Job Interview']
    },
    {
      id: "9",
      category: 'IT Skills',
      rating: '4.9',
      duration: '3 Months',
      image: '/Digital Marketing.png',
      title: {
        EN: 'Digital Marketing Level 3',
        BN: 'ডিজিটাল মার্কেটিং লেভেল-৩'
      },
      desc: {
        EN: 'Master social media marketing, Facebook & Instagram ads, SEO, content strategy, and online brand management. Start freelancing or boost your business growth.',
        BN: 'সোশ্যাল মিডিয়া মার্কেটিং, ফেসবুক ও ইনস্টাগ্রাম অ্যাডস, এসইও (SEO), কন্টেন্ট স্ট্র্যাটেজি এবং অনলাইন ব্র্যান্ডিং মাস্টারক্লাস। ফ্রিল্যান্সিং ও ক্যারিয়ার উন্নতির সেরা মাধ্যম।'
      },
      tags: ['Digital Ads', 'SEO & Strategy', 'Freelancing']
    },
    {
      id: "10",
      category: 'Healthcare & Beauty',
      rating: '5.0',
      duration: '1 Day (10 AM - 5 PM)',
      image: '/Day long Primary Healthcare.png',
      title: {
        EN: 'Day-long Primary Healthcare, First Aid & CPR',
        BN: 'দিনব্যাপী প্রাইমারি হেলথ কেয়ার, ফার্স্ট এইড ও সিপিআর'
      },
      desc: {
        EN: 'Learn essential life-saving skills in just one day! Covers CPR, bleeding control, Heimlich maneuver, burn management, and vital signs. Includes official certificate.',
        BN: 'এক দিনেই শিখুন জীবন রক্ষাকারী দক্ষতা! সিপিআর, রক্তপাত নিয়ন্ত্রণ, চোকিং ম্যানেজমেন্ট, পোড়া ক্ষত সেবা এবং ব্লাড প্রেশার পরিমাপ। প্রশিক্ষণ শেষে সার্টিফিকেট প্রদান।'
      },
      tags: ['1 Day Workshop', 'Certificate', '৳1500 Course Fee']
    },
    {
      id: "11",
      category: 'Healthcare & Beauty',
      rating: '5.0',
      duration: '1 Day (10 AM - 5 PM)',
      image: '/CPR & Emmergency Response Program.jpg',
      title: {
        EN: 'CPR & Emergency Response Training Program',
        BN: 'CPR ও ইমার্জেন্সি রেসপন্স ট্রেনিং প্রোগ্রাম'
      },
      desc: {
        EN: 'Intensive hands-on training featuring live demo sessions on First Aid, CPR, fracture care, and emergency response. Guided by expert instructors with study materials included.',
        BN: 'ফার্স্ট এইড, সিপিআর এবং ইমার্জেন্সি রেসপন্সের ওপর হ্যান্ডস-অন প্র্যাকটিক্যাল ট্রেনিং। লাইভ ডেমো সেশন, বিশেষজ্ঞ প্রশিক্ষক এবং স্টাডি ম্যাটেরিয়ালসহ সার্টিফিকেট প্রদান।'
      },
      tags: ['Hands-on Training', 'Live Demo', '৳1500 Course Fee']
    }
  ];

  const categories = ['All', 'Caregiving', 'Healthcare & Beauty', 'Language Skills', 'IT Skills'];

  const filteredCourses = coursesData.filter((course) => {
    const matchesCategory = selectedCategory === 'All' ? true : course.category === selectedCategory;

    const matchesSearch = 
      course.title[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.desc[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 pb-16">
      
      {/* ================= 1. PAGE HEADER ================= */}
      <section className="pt-6 sm:pt-10 text-center max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-200 shadow-sm text-blue-700 font-bold text-xs uppercase tracking-wider">
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

        {/* Search */}
        <div className="pt-2 max-w-xl mx-auto">
          <div className="relative flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'EN' ? "Search courses (e.g., CPR, Dementia, Elderly, Japanese)..." : "কোর্সের নাম লিখে খুঁজুন (যেমন: CPR, কেয়ারগিভিং, জাপানিজ)..."}
              className="w-full pl-12 pr-10 py-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-slate-200 shadow-sm text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <Search className="absolute left-4 text-slate-400" size={20} />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 text-slate-400 hover:text-slate-600 bg-slate-100 rounded-full w-6 h-6 flex items-center justify-center transition"
              >
                <X size={14} strokeWidth={3} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ================= 2. CATEGORY FILTERS ================= */}
      <section className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
              selectedCategory === cat
                ? 'bg-slate-900 text-white shadow-md scale-105'
                : 'bg-white/60 backdrop-blur-md border border-slate-200 text-slate-600 hover:bg-white hover:text-slate-900 shadow-sm scale-98 hover:scale-100'
            }`}
          >
            {cat === 'All' ? (lang === 'EN' ? 'All Courses (11)' : 'সকল কোর্স (১১)') : cat}
          </button>
        ))}
      </section>

      {/* ================= 3. COURSES GRID ================= */}
      <section>
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCourses.map((course) => (
              <NeoCard key={course.id} className="!p-0 flex flex-col bg-white/80 hover:bg-white border-slate-200/60 group relative overflow-hidden transition-all duration-300">
                
                <div className="relative h-52 w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                  <img 
                    src={course.image} 
                    alt={course.title.EN} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-blue-700 text-[10px] font-black uppercase px-3 py-1.5 rounded-full shadow-sm">
                    {course.category}
                  </div>

                  <div className="absolute bottom-4 left-4 flex items-center space-x-1.5 text-white text-xs font-bold">
                    <Clock size={14} />
                    <span>{course.duration}</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl font-black text-slate-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                    {course.title[lang]}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mb-6 line-clamp-3">
                    {course.desc[lang]}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {course.tags.map((tag, idx) => (
                      <span key={idx} className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg text-[10px] font-bold border ${tag.includes('1500') || tag.includes('Free') ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-slate-50 text-slate-600 border-slate-200'}`}>
                        <CheckCircle2 size={12} className={tag.includes('1500') || tag.includes('Free') ? 'text-emerald-600' : 'text-blue-500'} />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>

                  {/* 3. Bottom CTA Action (Here is where the dynamic link belongs!) */}
                  <div className="mt-auto pt-5 border-t border-slate-200/60 flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-xs font-black text-amber-600 bg-amber-50 px-2.5 py-1.5 rounded-lg border border-amber-200">
                      <Star size={14} className="fill-amber-500" />
                      <span>{course.rating}</span>
                    </div>

                    {/* ✅ Correctly placed dynamic Link to Course Details */}
                    <Link to={`/course/${course.id}`}>
                      <button className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs shadow-md hover:bg-blue-600 active:scale-95 transition-colors flex items-center space-x-1.5 group/btn">
                        <span>{lang === 'EN' ? 'View Details' : 'বিস্তারিত দেখুন'}</span>
                        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                </div>

              </NeoCard>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white/40 backdrop-blur-md rounded-3xl border border-slate-200 max-w-lg mx-auto shadow-sm">
            <Search size={48} className="mx-auto text-slate-300 mb-4" />
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

      {/* ================= 4. BOTTOM ADMISSION HELP BOX (Fixed) ================= */}
      <section className="bg-slate-900 rounded-[2.5rem] p-8 sm:p-14 text-white text-center relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-2xl mx-auto space-y-5 relative z-10">
          <span className="px-4 py-1.5 rounded-full bg-white/10 text-white font-bold text-xs uppercase tracking-widest backdrop-blur-md border border-white/20">
            🤝 {lang === 'EN' ? 'Personal Guidance' : 'ক্যারিয়ার গাইডলাইন'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black leading-tight">
            {lang === 'EN' ? 'Need Help Choosing the Right Course?' : 'সঠিক কোর্সটি বেছে নিতে সাহায্য প্রয়োজন?'}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
            {lang === 'EN'
              ? 'Whether you need a 1-day CPR training or a 6-month UK pathway Caregiving diploma—our expert counselors will guide you to the exact NSDA certified course you need.'
              : 'আপনার ১ দিনের সিপিআর (CPR) ট্রেনিং প্রয়োজন হোক বা ৬ মাসের কেয়ারগিভিং ডিপ্লোমা—সঠিক কোর্সটি বেছে নিতে আমাদের অভিজ্ঞ কাউন্সিলররা সাহায্য করবেন।'}
          </p>
          
          {/* ✅ Correctly placed link to Contact/About Us */}
          <div className="pt-4">
            <Link to="/about-us">
              <button className="px-8 py-4 rounded-xl bg-blue-600 text-white font-bold text-sm shadow-lg shadow-blue-500/30 hover:bg-blue-500 active:scale-95 transition-all">
                {lang === 'EN' ? 'Contact Office for Free Consultation →' : 'ফ্রি কাউন্সিলিংয়ের জন্য যোগাযোগ করুন →'}
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}