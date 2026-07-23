import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Award, Users, Target, Sparkles, ArrowRight, 
  MapPin, Phone, Mail, Building2, CheckCircle2, Quote, 
  Briefcase, GraduationCap, Laptop, Globe, HeartHandshake, Linkedin
} from 'lucide-react';
import NeoCard from '../../components/ui/NeoCard';
import NeoButton from '../../components/ui/NeoButton';
import SectionTitle from '../../components/ui/SectionTitle';
import { useLanguage } from '../../context/LanguageContext';

export default function AboutUs() {
  const { lang } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 1. Core Values Data (EN & BN Integrated)
  const coreValues = [
    {
      title: { EN: 'Excellence', BN: 'সর্বোচ্চ মান (Excellence)' },
      desc: { EN: 'Highest standards in teaching outcomes and practical industry skill development.', BN: 'প্রশিক্ষণ এবং ব্যবহারিক কারিগরি দক্ষতা অর্জনে আন্তর্জাতিক ও সর্বোচ্চ মান নিশ্চিতকরণ।' },
      icon: '🏆',
      color: 'border-t-blue-600 bg-blue-50/40'
    },
    {
      title: { EN: 'Integrity', BN: 'সততা ও স্বচ্ছতা (Integrity)' },
      desc: { EN: 'Ethics, honesty, and absolute transparency in student counseling and visa processing.', BN: 'শিক্ষার্থী কাউন্সেলিং এবং ভিসা প্রসেসিংয়ে নৈতিকতা, সততা এবং শতভাগ স্বচ্ছতা।' },
      icon: '🤝',
      color: 'border-t-indigo-600 bg-indigo-50/40'
    },
    {
      title: { EN: 'Empowerment', BN: 'স্বাবলম্বীকরণ (Empowerment)' },
      desc: { EN: 'Building confidence, self-reliance, and global employability for the future workforce.', BN: 'ভবিষ্যৎ কর্মজীবীদের জন্য আত্মবিশ্বাস, স্বনির্ভরতা এবং বিশ্বজুড়ে কর্মসংস্থানের যোগ্যতা তৈরি।' },
      icon: '⚡',
      color: 'border-t-purple-600 bg-purple-50/40'
    },
    {
      title: { EN: 'Innovation', BN: 'উদ্ভাবন (Innovation)' },
      desc: { EN: 'Adopting modern technologies, digital labs, and forward-thinking training modules.', BN: 'আধুনিক প্রযুক্তি, ডিজিটাল ল্যাব এবং যুগোপযোগী কাস্টমাইজড ট্রেনিং মডিউল গ্রহণ।' },
      icon: '💡',
      color: 'border-t-amber-600 bg-amber-50/40'
    },
    {
      title: { EN: 'Inclusion', BN: 'অন্তর্ভুক্তি (Inclusion)' },
      desc: { EN: 'Creating a fair, supportive, and respectful learning environment for all backgrounds.', BN: 'সকল স্তরের ও পটভূমির মানুষের জন্য একটি নিরপেক্ষ, সহযোগিতাপূর্ণ এবং সম্মানজনক শিক্ষার পরিবেশ।' },
      icon: '🌍',
      color: 'border-t-emerald-600 bg-emerald-50/40'
    }
  ];

  // 2. Leadership & Management Team Data
  const executiveDirector = {
    name: 'Sumaiya Tabassum',
    role: { EN: 'Executive Director (ED)', BN: 'নির্বাহী পরিচালক (ED)' },
    quote: { 
      EN: '"Ensuring quality education and operational excellence is my top priority. At CareerLift, we strive to create a structured learning environment that fosters sustainable professional growth and innovation."',
      BN: '"মানসম্মত শিক্ষা এবং প্রাতিষ্ঠানিক উৎকর্ষতা নিশ্চিত করাই আমার প্রধান অগ্রাধিকার। ক্যারিয়ারলিফটে আমরা এমন একটি শিক্ষার পরিবেশ তৈরি করতে বদ্ধপরিকর যা শিক্ষার্থীদের পেশাগত বিকাশ ও উদ্ভাবনকে উৎসাহিত করে।"'
    },
    email: null,
    linkedin: 'https://www.linkedin.com',
    badge: { EN: 'Executive Leadership', BN: 'নির্বাহী ব্যবস্থাপনা' }
  };

  const managementTeam = [
    {
      name: 'Nur Mohammad',
      role: { EN: 'Course Coordinator', BN: 'কোর্স কো-অর্ডিনেটর' },
      quote: { 
        EN: '"Guiding students to the right career path is not just my responsibility, it is my commitment. Every student\'s professional success is a milestone for our institute."',
        BN: '"শিক্ষার্থীদের সঠিক ক্যারিয়ারের দিকনির্দেশনা দেওয়া শুধুমাত্র আমার দায়িত্ব নয়, এটি আমার অঙ্গীকার। প্রতিটি শিক্ষার্থীর পেশাগত সাফল্যই আমাদের প্রতিষ্ঠানের জন্য এক একটি মাইলফলক।"'
      },
      email: 'nurmdpt@gmail.com',
      image: '/nur.jpg',
      linkedin: 'https://www.linkedin.com',
      badge: 'Academic Operations'
    },
    {
      name: 'Sirajis Salehin',
      role: { EN: 'Operations Manager', BN: 'অপারেশনস ম্যানেজার' },
      quote: { 
        EN: '"Operational discipline and administrative excellence ensure that our students get the best learning environment. We are strictly committed to quality and compliance."',
        BN: '"প্রাতিষ্ঠানিক শৃঙ্খলা ও প্রশাসনিক উৎকর্ষতা নিশ্চিত করে আমাদের শিক্ষার্থীরা যেন সেরা শিক্ষার পরিবেশ পায়। আমরা গুণগত মান এবং কমপ্লায়েন্সের প্রতি শতভাগ অঙ্গীকারবদ্ধ।"'
      },
      email: 'sirajissalehin98@gmail.com',
      image: '/salehin.jpg',
      linkedin: 'https://www.linkedin.com',
      badge: 'Administration'
    },
    {
      name: 'Md. Shakawat Hossain Faravi',
      role: { EN: 'IT Executive & Web Developer', BN: 'আইটি এক্সিকিউটিভ ও ওয়েব ডেভেলপার' },
      quote: { 
        EN: '"Architecting robust digital infrastructure and modern LMS platforms for future leaders. Technology is our catalyst, but the learner\'s ambition remains our true driving force."',
        BN: '"ভবিষ্যৎ লিডারদের জন্য ডিজিটাল পরিকাঠামো ও আধুনিক লার্নিং ম্যানেজমেন্ট সিস্টেম তৈরি করছি। প্রযুক্তি হলো আমাদের মাধ্যম, কিন্তু শিক্ষার্থীর অদম্য স্বপ্নই হলো মূল চালিকাশক্তি।"'
      },
      email: 'alfaravi17@gmail.com',
      image: '/Faravi 2.jpg',
      linkedin: 'https://www.linkedin.com/in/md-shakawat-hossain-faravi?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      badge: 'Technology & Dev'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      
      {/* ================= 1. PAGE HEADER & HERO ================= */}
      <section className="bg-slate-900 text-white pt-16 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-blue-300 font-bold text-xs uppercase tracking-wider backdrop-blur-md">
            <Building2 size={16} />
            <span>{lang === 'EN' ? 'Institutional Overview' : 'প্রাতিষ্ঠানিক পরিচিতি'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-4xl mx-auto">
            {lang === 'EN' ? 'Architecting ' : 'শিক্ষা ও কর্মসংস্থানের '} 
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              {lang === 'EN' ? 'Global Careers' : 'টেকসই সেতুবন্ধন'}
            </span> 
            {lang === 'EN' ? ' & Excellence.' : ' নির্মাণে আমরা।'}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium max-w-3xl mx-auto">
            {lang === 'EN' 
              ? 'CareerLift is a premier skill development institute and migration advisory firm in Bangladesh. We combine government accreditation (NSDA) with international standards to empower the future workforce.' 
              : 'বাংলাদেশের পেশাগত ক্যারিয়ার উন্নয়নে নিবেদিত একটি শীর্ষস্থানীয় কারিগরি প্রশিক্ষণ ও কনসালটেন্সি প্রতিষ্ঠান। গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের ন্যাশনাল স্কিলস ডেভেলপমেন্ট অথরিটি (NSDA) কর্তৃক সরকারিভাবে স্বীকৃতিপ্রাপ্ত ও পরিচালিত।'}
          </p>

          {/* Quick Stats Matrix */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6">
            <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-center">
              <h4 className="text-2xl sm:text-3xl font-black text-blue-400">NSDA</h4>
              <p className="text-xs text-slate-300 font-bold uppercase mt-1">{lang === 'EN' ? 'Govt. Accredited' : 'সরকার অনুমোদিত'}</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-center">
              <h4 className="text-2xl sm:text-3xl font-black text-emerald-400">98%</h4>
              <p className="text-xs text-slate-300 font-bold uppercase mt-1">{lang === 'EN' ? 'Visa Success' : 'ভিসা সাফল্যের হার'}</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-center">
              <h4 className="text-2xl sm:text-3xl font-black text-purple-400">500+</h4>
              <p className="text-xs text-slate-300 font-bold uppercase mt-1">{lang === 'EN' ? 'Students Trained' : 'প্রশিক্ষিত শিক্ষার্থী'}</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-center">
              <h4 className="text-2xl sm:text-3xl font-black text-amber-400">100%</h4>
              <p className="text-xs text-slate-300 font-bold uppercase mt-1">{lang === 'EN' ? 'Lab Focused' : 'ব্যবহারিক প্রশিক্ষণ'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. VISION & MISSION SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full blur-2xl group-hover:scale-125 transition-transform"></div>
            <div className="space-y-6 relative z-10">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 font-black text-xs uppercase tracking-widest border border-blue-200">
                <Target size={14} />
                <span>{lang === 'EN' ? 'OUR VISION' : 'আমাদের রূপকল্প (Vision)'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                {lang === 'EN' ? 'To Become The Most Trusted Center For Career-Focused Education.' : 'ক্যারিয়ার-কেন্দ্রিক শিক্ষার সবচেয়ে বিশ্বস্ত কেন্দ্র হিসেবে গড়ে ওঠা।'}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {lang === 'EN'
                  ? 'We aim to inspire innovation, encourage lifelong learning, and prepare the future workforce of Bangladesh to compete effectively in both local and global job markets.'
                  : 'উদ্ভাবনকে অনুপ্রাণিত করা, জীবনব্যাপী শিক্ষার সুযোগ তৈরি করা এবং বাংলাদেশের ভবিষ্যৎ কর্মজীবীদের দেশী ও আন্তর্জাতিক কর্মসংস্থানের বাজারের জন্য যোগ্য করে গড়ে তোলাই আমাদের প্রধান লক্ষ্য।'}
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100 text-xs text-blue-600 font-bold flex items-center justify-between relative z-10">
              <span className="flex items-center"><CheckCircle2 size={16} className="mr-1.5"/> NSDA Recognized Standard</span>
              <span>★ ★ ★ ★ ★</span>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="space-y-6 relative z-10">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-black text-xs uppercase tracking-widest border border-emerald-500/30">
                <GraduationCap size={14} />
                <span>{lang === 'EN' ? 'OUR MISSION' : 'আমাদের লক্ষ্য (Mission)'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black leading-tight">
                {lang === 'EN' ? 'Equipping Learners With Skills, Confidence & Adaptability.' : 'শিক্ষার্থীদের দক্ষতা, আত্মবিশ্বাস ও মানিয়ে নেওয়ার ক্ষমতায় সমৃদ্ধ করা।'}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {lang === 'EN'
                  ? 'CareerLift Skill Development Institute provides modern curriculums, experienced instructors, and advanced laboratory systems. We strive to create sustainable employment pathways globally.'
                  : 'ক্যারিয়ারলিফট আধুনিক কারিকুলাম, অভিজ্ঞ প্রশিক্ষক এবং উন্নত লার্নিং সিস্টেম প্রদান করে। দ্রুত পরিবর্তনশীল বিশ্বব্যবস্থায় শিক্ষার্থীদের জন্য টেকসই কর্মসংস্থানের সুযোগ সৃষ্টি করতে আমরা প্রতিশ্রুতিবদ্ধ।'}
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10 text-xs text-emerald-400 font-bold flex items-center justify-between relative z-10">
              <span className="flex items-center"><CheckCircle2 size={16} className="mr-1.5"/> 100% Practical & Lab Focused</span>
              <span>🎓 Global Standard</span>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 3. CEO & PRINCIPAL PROFILE (HIGHEST PRIORITY) ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-white rounded-[2.5rem] border border-slate-200/80 shadow-xl p-8 sm:p-14 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl pointer-events-none -mr-40 -mt-40"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            
            {/* Compact Executive Image Framing */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
              <div className="relative w-48 h-56 sm:w-56 sm:h-64 rounded-3xl overflow-hidden shadow-xl border-4 border-white group">
                <img 
                  src="/Mostafizur.png" 
                  alt="Dr. Mostafizur Rahman Faisal" 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" 
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <span className="px-3 py-1 rounded-full bg-blue-600 text-white font-black text-[10px] uppercase tracking-wider inline-block shadow-sm">
                    {lang === 'EN' ? 'Chief Executive Officer' : 'প্রধান নির্বাহী কর্মকর্তা'}
                  </span>
                </div>
              </div>
            </div>

            {/* CEO Message & Details */}
            <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 text-xs font-black tracking-widest uppercase text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200/60">
                <span>👑 {lang === 'EN' ? 'CEO & PRINCIPAL STATEMENT' : 'সিইও ও প্রিন্সিপাল স্যারের বাণী'}</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight">
                    Dr. Mostafizur Rahman Faisal
                  </h2>
                  <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider mt-1">
                    {lang === 'EN' ? 'CEO & Principal | CareerLift Institute' : 'সিইও ও প্রিন্সিপাল | ক্যারিয়ারলিফট স্কিল ডেভেলপমেন্ট ইনস্টিটিউট'}
                  </div>
                </div>

                <a 
                  href="https://www.linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-all text-xs font-bold mx-auto sm:mx-0 shadow-sm flex-shrink-0"
                >
                  <Linkedin size={16} />
                  <span>LinkedIn Profile</span>
                </a>
              </div>

              <div className="relative bg-slate-50 border border-slate-200/80 p-6 sm:p-8 rounded-3xl shadow-inner text-left">
                <Quote size={36} className="text-blue-200 absolute top-4 right-4 pointer-events-none" />
                <p className="text-base sm:text-lg font-semibold italic text-slate-700 leading-relaxed relative z-10">
                  {lang === 'EN'
                    ? '"At CareerLift, we firmly believe that structured skill education is the definitive passport to the future. Our primary objective is to empower the youth of Bangladesh with technical and healthcare competencies that command respect and high value globally."'
                    : '"ক্যারিয়ারলিফটে আমরা বিশ্বাস করি যে শিক্ষাই হলো ভবিষ্যতের পাসপোর্ট। আমাদের মূল লক্ষ্য হলো বাংলাদেশের তরুণ সমাজকে আন্তর্জাতিক মানের কারিগরি ও হেলথকেয়ার দক্ষতায় স্বাবলম্বী করে তোলা, যা বিশ্বজুড়ে তাদের সম্মানজনক কর্মসংস্থান নিশ্চিত করবে।"'}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-bold text-slate-600">
                <span className="flex items-center"><CheckCircle2 className="text-emerald-600 mr-2" size={16}/> Visionary Leadership</span>
                <span className="flex items-center"><CheckCircle2 className="text-blue-600 mr-2" size={16}/> Global Educational Strategy</span>
                <span className="flex items-center"><CheckCircle2 className="text-purple-600 mr-2" size={16}/> Institutional Integrity</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 4. EXECUTIVE DIRECTOR PROFILE (DEDICATED VIP CARD) ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-[2.5rem] p-8 sm:p-12 border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Compact Executive Badge / Avatar Area (No photo as requested) */}
            <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-blue-600 to-indigo-600 border-4 border-white/10 shadow-2xl flex items-center justify-center text-4xl mb-4 backdrop-blur-md">
                👩‍💼
              </div>
              <span className="px-3.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 font-black text-xs uppercase tracking-wider">
                {executiveDirector.badge[lang]}
              </span>
            </div>

            {/* ED Info & Quote */}
            <div className="lg:col-span-9 space-y-4 text-center lg:text-left">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-blue-400">
                    {lang === 'EN' ? 'EXECUTIVE MANAGEMENT' : 'নির্বাহী ব্যবস্থাপনা'}
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-black tracking-tight text-white mt-0.5">
                    {executiveDirector.name}
                  </h3>
                  <div className="text-sm font-bold text-blue-200 uppercase tracking-wider">
                    {executiveDirector.role[lang]}
                  </div>
                </div>

                <a 
                  href={executiveDirector.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-blue-600 text-white transition-all text-xs font-bold mx-auto sm:mx-0 border border-white/15 flex-shrink-0"
                >
                  <Linkedin size={16} />
                  <span>LinkedIn Profile</span>
                </a>
              </div>

              <p className="text-sm sm:text-base text-slate-300 italic font-medium leading-relaxed bg-white/5 p-6 rounded-2xl border border-white/10">
                {executiveDirector.quote[lang]}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 5. MANAGEMENT & OPERATIONS TEAM (FULL NAME VISIBLE NO TRUNCATE) ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <SectionTitle 
          subtitle={lang === 'EN' ? "Operations & Administration" : "ব্যবস্থাপনা ও টিম"} 
          title={lang === 'EN' ? "Our Management & Technical Team" : "পরিচিত হোন আমাদের দক্ষ টিমের সাথে"} 
          description={lang === 'EN' ? "The dedicated professionals driving our academic operations, discipline, and technological infrastructure." : "যাদের নিরলস পরিশ্রম, প্রশাসনিক শৃঙ্খলা এবং প্রযুক্তিগত দক্ষতায় এগিয়ে চলেছে আমাদের প্রতিষ্ঠান।"} 
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {managementTeam.map((member, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between group"
            >
              <div>
                {/* Top Row: Compact Shape Image + Full Name & Role (No Truncate!) */}
                <div className="flex items-start space-x-4 mb-6 pb-5 border-b border-slate-100">
                  <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-2xl overflow-hidden bg-slate-100 border-2 border-slate-200 flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-500">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-top"
                      onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80' }}
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-black uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md inline-block mb-1.5">
                      {member.badge}
                    </span>
                    
                    {/* ✅ TRUNCATE REMOVED: Name will wrap smoothly to 2 lines if needed! */}
                    <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug break-words group-hover:text-blue-600 transition-colors">
                      {member.name}
                    </h3>
                    
                    {/* ✅ LINE-CLAMP REMOVED: Role will wrap smoothly without cutting off */}
                    <span className="text-xs font-bold text-slate-500 block mt-1 leading-normal">
                      {member.role[lang]}
                    </span>
                  </div>
                </div>

                {/* Quote Box */}
                <div className="mb-6">
                  <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed font-medium">
                    {member.quote[lang]}
                  </p>
                </div>
              </div>

              {/* Contact & LinkedIn Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold gap-2">
                <a 
                  href={`mailto:${member.email}`} 
                  className="text-slate-500 hover:text-blue-600 flex items-center space-x-1.5 transition min-w-0 flex-1"
                  title={member.email}
                >
                  <Mail size={14} className="text-blue-600 flex-shrink-0" />
                  <span className="truncate">{member.email}</span>
                </a>

                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-2xs flex items-center justify-center flex-shrink-0"
                  title="Connect on LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 6. OUR CORE VALUES ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <SectionTitle 
          subtitle={lang === 'EN' ? "Guiding Principles" : "আমাদের মূলনীতি"} 
          title={lang === 'EN' ? "Our Core Values" : "যে আদর্শ ও নীতির ওপর আমরা প্রতিষ্ঠিত"} 
          description={lang === 'EN' ? "The fundamental institutional standards that govern our academic quality and professional counseling." : "আমাদের প্রতিটি পদক্ষেপ, প্রশিক্ষণ এবং কনসালটেন্সির ক্ষেত্রে আমরা এই ৫টি মূলনীতি মেনে চলি।"} 
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {coreValues.map((val, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 border-t-4 ${val.color} flex flex-col justify-between group`}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200/80 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform shadow-2xs">
                  {val.icon}
                </div>
                <h3 className="text-base font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {val.title[lang]}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {val.desc[lang]}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-100 text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center justify-between">
                <span>0{idx + 1} / VALUE</span>
                <Sparkles size={12} className="text-blue-500" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 7. INSTITUTIONAL CONTACT & CAMPUS VISIT ================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-white rounded-[2.5rem] border border-slate-200/80 shadow-xl p-8 sm:p-14 text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl pointer-events-none"></div>

          <div className="space-y-3 relative z-10">
            <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-xs uppercase tracking-wider border border-emerald-200 inline-block">
              📍 {lang === 'EN' ? 'VISIT OUR CAMPUS' : 'ক্যাম্পাস ভিজিট করুন'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight tracking-tight">
              {lang === 'EN' ? 'Ready To Build Your Career With Us?' : 'আমাদের সাথে আপনার স্বপ্নের ক্যারিয়ার গড়তে প্রস্তুত?'}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
              {lang === 'EN'
                ? 'Visit our Bijoy Nagar executive campus for a direct one-on-one consultation with our course coordinators and visa experts. Open Saturday to Thursday.'
                : 'সরাসরি কথা বলতে চলে আসুন আমাদের ঢাকার বিজয় নগর অফিসে। আমাদের অভিজ্ঞ কোর্স কো-অর্ডিনেটর এবং ভিসা এক্সপার্টরা শনিবার থেকে বৃহস্পতিবার প্রতিদিন উপস্থিত থাকেন।'}
            </p>
          </div>

          {/* Contact Details Box */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 max-w-2xl mx-auto text-left sm:text-center space-y-2 relative z-10 shadow-inner">
            <p className="text-xs sm:text-sm font-bold text-slate-800 flex items-center justify-center space-x-2">
              <MapPin className="text-blue-600 flex-shrink-0" size={18} />
              <span><strong className="text-blue-700">{lang === 'EN' ? 'Address:' : 'ঠিকানা:'}</strong> 180–181 Prime Tower (Lift-3), Shaheed Nazrul Islam Sharak, Bijoy Nagar, Dhaka-1000</span>
            </p>
            <p className="text-xs sm:text-sm font-bold text-slate-800 flex items-center justify-center space-x-2 pt-1">
              <Phone className="text-blue-600 flex-shrink-0" size={18} />
              <span><strong className="text-blue-700">{lang === 'EN' ? 'Hotline:' : 'হটলাইন:'}</strong> +880 1818-304081 | +880 1965-157203</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 relative z-10">
            <Link to="/courses">
              <NeoButton variant="primary" className="!px-8 !py-4 text-sm font-bold shadow-lg shadow-blue-500/20">
                {lang === 'EN' ? 'Explore Skill Courses →' : 'স্কিল কোর্সসমূহ দেখুন →'}
              </NeoButton>
            </Link>
            <Link to="/study-abroad">
              <NeoButton variant="secondary" className="!px-8 !py-4 text-sm font-bold shadow-sm">
                {lang === 'EN' ? 'Free Profile Assessment' : 'ফ্রি প্রোফাইল অ্যাসেসমেন্ট'}
              </NeoButton>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}