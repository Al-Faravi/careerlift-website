import React from 'react';
import { Link } from 'react-router-dom';
import NeoCard from '../../components/ui/NeoCard';
import NeoButton from '../../components/ui/NeoButton';
import SectionTitle from '../../components/ui/SectionTitle';
import { useLanguage } from '../../context/LanguageContext';

export default function AboutUs() {
  const { lang } = useLanguage();

  // 1. Core Values Data (EN & BN Integrated)
  const coreValues = [
    {
      title: { EN: 'Excellence', BN: 'সর্বোচ্চ মান (Excellence)' },
      desc: { EN: 'Highest standards in teaching outcomes and practical industry skill development.', BN: 'প্রশিক্ষণ এবং ব্যবহারিক কারিগরি দক্ষতা অর্জনে আন্তর্জাতিক ও সর্বোচ্চ মান নিশ্চিতকরণ।' },
      icon: '🏆',
      color: 'border-l-blue-500'
    },
    {
      title: { EN: 'Integrity', BN: 'সততা ও স্বচ্ছতা (Integrity)' },
      desc: { EN: 'Ethics, honesty, and absolute transparency in student counseling and visa processing.', BN: 'শিক্ষার্থী কাউন্সেলিং এবং ভিসা প্রসেসিংয়ে নৈতিকতা, সততা এবং শতভাগ স্বচ্ছতা।' },
      icon: '🤝',
      color: 'border-l-indigo-500'
    },
    {
      title: { EN: 'Empowerment', BN: 'স্বাবলম্বীকরণ (Empowerment)' },
      desc: { EN: 'Building confidence, self-reliance, and global employability for the future workforce.', BN: 'ভবিষ্যৎ কর্মজীবীদের জন্য আত্মবিশ্বাস, স্বনির্ভরতা এবং বিশ্বজুড়ে কর্মসংস্থানের যোগ্যতা তৈরি।' },
      icon: '⚡',
      color: 'border-l-purple-500'
    },
    {
      title: { EN: 'Innovation', BN: 'উদ্ভাবন (Innovation)' },
      desc: { EN: 'Adopting modern technologies, digital labs, and forward-thinking training modules.', BN: 'আধুনিক প্রযুক্তি, ডিজিটাল ল্যাব এবং যুগোপযোগী কাস্টমাইজড ট্রেনিং মডিউল গ্রহণ।' },
      icon: '💡',
      color: 'border-l-amber-500'
    },
    {
      title: { EN: 'Inclusion', BN: 'অন্তর্ভুক্তি (Inclusion)' },
      desc: { EN: 'Creating a fair, supportive, and respectful learning environment for all backgrounds.', BN: 'সকল স্তরের ও পটভূমির মানুষের জন্য একটি নিরপেক্ষ, সহযোগিতাপূর্ণ এবং সম্মানজনক শিক্ষার পরিবেশ।' },
      icon: '🌍',
      color: 'border-l-emerald-500'
    }
  ];

  // 2. Leadership & Management Team Data (EN & BN Integrated)
  const teamMembers = [
    {
      name: 'Dr. Mostafizur Rahman Faisal',
      role: { EN: 'Director', BN: 'পরিচালক (Director)' },
      quote: { 
        EN: '"At CareerLift, we believe that education is the passport to the future. Our goal is to empower the youth of Bangladesh with technical skills that are globally recognized."',
        BN: '"ক্যারিয়ারলিফটে আমরা বিশ্বাস করি যে শিক্ষাই হলো ভবিষ্যতের পাসপোর্ট। আমাদের মূল লক্ষ্য হলো বাংলাদেশের তরুণ সমাজকে আন্তর্জাতিক মানের কারিগরি দক্ষতায় স্বাবলম্বী করে তোলা।"'
      },
      email: null,
      isDirector: true,
      avatar: '👨‍⚕️'
    },
    {
      name: 'Sumaiya Tabassum',
      role: { EN: 'Executive Director (ED)', BN: 'নির্বাহী পরিচালক (ED)' },
      quote: { 
        EN: '"Ensuring quality education and operational excellence is my top priority. At CareerLift, we strive to create a learning environment that fosters innovation."',
        BN: '"মানসম্মত শিক্ষা এবং প্রাতিষ্ঠানিক উৎকর্ষতা নিশ্চিত করাই আমার প্রধান অগ্রাধিকার। ক্যারিয়ারলিফটে আমরা এমন একটি শিক্ষার পরিবেশ তৈরি করতে বদ্ধপরিকর যা উদ্ভাবনকে উৎসাহিত করে।"'
      },
      email: null,
      isDirector: false,
      avatar: '👩‍💼'
    },
    {
      name: 'Nur Mohammad',
      role: { EN: 'Course Coordinator', BN: 'কোর্স কো-অর্ডিনেটর' },
      quote: { 
        EN: '"Guiding students to the right career path is not just my job, it\'s my passion. Every student\'s success is a milestone for us."',
        BN: '"শিক্ষার্থীদের সঠিক ক্যারিয়ারের দিকনির্দেশনা দেওয়া শুধুমাত্র আমার দায়িত্ব নয়, এটি আমার ভালোলাগা। প্রতিটি শিক্ষার্থীর সাফল্যই আমাদের জন্য এক একটি মাইলফলক।"'
      },
      email: 'nurmdpt@gmail.com',
      isDirector: false,
      avatar: '👨‍🏫'
    },
    {
      name: 'Sirajis Salehin',
      role: { EN: 'Operations Manager', BN: 'অপারেশনস ম্যানেজার' },
      quote: { 
        EN: '"Operational excellence ensures our students get the best learning environment. We are committed to quality and discipline."',
        BN: '"প্রাতিষ্ঠানিক উৎকর্ষতা নিশ্চিত করে আমাদের শিক্ষার্থীরা যেন সেরা শিক্ষার পরিবেশ পায়। আমরা গুণগত মান এবং শৃঙ্খলার প্রতি ১০০% অঙ্গীকারবদ্ধ।"'
      },
      email: 'sirajissalehin98@gmail.com',
      isDirector: false,
      avatar: '👨‍💻'
    },
    {
      name: 'Md. Shakawat Hossain Faravi',
      role: { EN: 'IT Executive & Developer', BN: 'আইটি এক্সিকিউটিভ ও ডেভেলপার' },
      quote: { 
        EN: '"Building the digital infrastructure for future leaders. Technology is the tool, but your ambition is the fuel."',
        BN: '"ভবিষ্যৎ লিডারদের জন্য ডিজিটাল পরিকাঠামো ও আধুনিক লার্নিং সিস্টেম তৈরি করছি। প্রযুক্তি হলো হাতিয়ার, কিন্তু আপনার স্বপ্ন আর অদম্য ইচ্ছাশক্তিই হলো মূল জ্বালানি।"'
      },
      email: 'alfaravi17@gmail.com',
      isDirector: false,
      avatar: '💻'
    }
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      
      {/* ================= 1. PAGE HEADER & HERO ================= */}
      <section className="pt-6 sm:pt-10 text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-100 border border-blue-300 shadow-sm text-blue-800 font-extrabold text-xs uppercase tracking-wider">
          <span>🏢 {lang === 'EN' ? 'ABOUT CAREERLIFT' : 'ক্যারিয়ারলিফট সম্পর্কে'}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-800 leading-tight">
          {lang === 'EN' ? 'Bridging ' : 'শিক্ষা ও কর্মসংস্থানের '} 
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {lang === 'EN' ? 'Education & Employment' : 'সেতুবন্ধন'}
          </span> 
          {lang === 'EN' ? ' For A Global Future.' : ' তৈরি করছি আমরা।'}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto">
          {lang === 'EN' 
            ? 'A leading skill development institute dedicated to enhancing professional careers in Bangladesh. Officially recognized by the National Skills Development Authority (NSDA).' 
            : 'বাংলাদেশের পেশাগত ক্যারিয়ার উন্নয়নে নিবেদিত একটি শীর্ষস্থানীয় কারিগরি প্রশিক্ষণ প্রতিষ্ঠান। গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের ন্যাশনাল স্কিলস ডেভেলপমেন্ট অথরিটি (NSDA) কর্তৃক সরকারিভাবে স্বীকৃতিপ্রাপ্ত।'}
        </p>

        {/* Quick Stats Matrix */}
        <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto pt-4">
          <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/80 shadow-neo-float">
            <h4 className="text-2xl sm:text-3xl font-black text-blue-600">1+</h4>
            <p className="text-xs text-slate-500 font-bold uppercase mt-0.5">{lang === 'EN' ? 'Years Experience' : 'বছরের অভিজ্ঞতা'}</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/80 shadow-neo-float">
            <h4 className="text-2xl sm:text-3xl font-black text-indigo-600">500+</h4>
            <p className="text-xs text-slate-500 font-bold uppercase mt-0.5">{lang === 'EN' ? 'Students Trained' : 'প্রশিক্ষিত শিক্ষার্থী'}</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/80 shadow-neo-float">
            <h4 className="text-2xl sm:text-3xl font-black text-purple-600">100%</h4>
            <p className="text-xs text-slate-500 font-bold uppercase mt-0.5">{lang === 'EN' ? 'Job Assistance' : 'জব সহায়তা'}</p>
          </div>
        </div>
      </section>

      {/* ================= 2. VISION & MISSION SECTION ================= */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Vision Card */}
        <NeoCard className="bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div>
            <span className="px-3.5 py-1 rounded-full bg-white/10 text-blue-300 font-black text-xs uppercase tracking-widest border border-white/20 inline-block mb-6">
              👁️ {lang === 'EN' ? 'OUR VISION' : 'আমাদের রূপকল্প (Vision)'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black mb-4 leading-tight">
              {lang === 'EN' ? 'To Become The Most Trusted Center For Career-Focused Education.' : 'ক্যারিয়ার-কেন্দ্রিক শিক্ষার সবচেয়ে বিশ্বস্ত কেন্দ্র হিসেবে গড়ে ওঠা।'}
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {lang === 'EN'
                ? 'We aim to inspire innovation, encourage lifelong learning, and prepare the future workforce of Bangladesh to compete in both local and global job markets.'
                : 'উদ্ভাবনকে অনুপ্রাণিত করা, জীবনব্যাপী শিক্ষার সুযোগ তৈরি করা এবং বাংলাদেশের ভবিষ্যৎ কর্মজীবীদের দেশী ও আন্তর্জাতিক কর্মসংস্থানের বাজারের জন্য যোগ্য করে গড়ে তোলাই আমাদের প্রধান লক্ষ্য।'}
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-white/10 text-xs text-blue-200 font-bold flex items-center justify-between">
            <span>✓ NSDA Recognized Standard</span>
            <span>★ ★ ★ ★ ★</span>
          </div>
        </NeoCard>

        {/* Mission Card */}
        <NeoCard className="bg-white/80 backdrop-blur-xl border-white/90 p-8 sm:p-10 flex flex-col justify-between shadow-neo-float">
          <div>
            <span className="px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-black text-xs uppercase tracking-widest border border-emerald-200 inline-block mb-6">
              🎯 {lang === 'EN' ? 'OUR MISSION' : 'আমাদের লক্ষ্য (Mission)'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-800 mb-4 leading-tight">
              {lang === 'EN' ? 'Equipping Learners With Skills, Confidence & Adaptability.' : 'শিক্ষার্থীদের দক্ষতা, আত্মবিশ্বাস ও মানিয়ে নেওয়ার ক্ষমতায় সমৃদ্ধ করা।'}
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {lang === 'EN'
                ? 'CareerLift Skill Development Institute provides modern curriculum, experienced instructors, and advanced learning systems. We strive to create sustainable employment pathways in a rapidly evolving global world.'
                : 'ক্যারিয়ারলিফট আধুনিক কারিকুলাম, অভিজ্ঞ প্রশিক্ষক এবং উন্নত লার্নিং সিস্টেম প্রদান করে। দ্রুত পরিবর্তনশীল বিশ্বব্যবস্থায় শিক্ষার্থীদের জন্য টেকসই কর্মসংস্থানের সুযোগ সৃষ্টি করতে আমরা প্রতিশ্রুতিবদ্ধ।'}
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-200/60 text-xs text-emerald-700 font-bold flex items-center justify-between">
            <span>✓ 100% Practical & Lab Focused</span>
            <span>🎓 Global Standard</span>
          </div>
        </NeoCard>
      </section>

      {/* ================= 3. MESSAGE FROM THE DIRECTOR ================= */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-8 sm:p-14 text-white shadow-neo-float relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          
          <div className="md:col-span-4 flex flex-col items-center text-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white/20 border-4 border-white/40 shadow-2xl flex items-center justify-center text-6xl mb-4 backdrop-blur-md">
              👨‍⚕️
            </div>
            <span className="px-3 py-1 rounded-full bg-white text-blue-700 font-black text-xs uppercase tracking-wider">
              {lang === 'EN' ? 'Director' : 'পরিচালক'}
            </span>
          </div>

          <div className="md:col-span-8 space-y-4 text-center md:text-left">
            <h3 className="text-xs sm:text-sm font-black tracking-widest uppercase text-blue-200">
              {lang === 'EN' ? 'MESSAGE FROM THE DIRECTOR' : 'পরিচালকের বাণী'}
            </h3>
            <p className="text-lg sm:text-2xl font-medium italic leading-relaxed text-white">
              {teamMembers[0].quote[lang]}
            </p>
            <div className="pt-2 border-t border-white/20">
              <h4 className="text-xl font-black text-white">{teamMembers[0].name}</h4>
              <p className="text-xs text-blue-200 font-semibold mt-0.5">{lang === 'EN' ? 'Director, CareerLift Skill Development Institute' : 'পরিচালক, ক্যারিয়ারলিফট স্কিল ডেভেলপমেন্ট ইনস্টিটিউট'}</p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 4. MEET OUR MANAGEMENT & TEAM ================= */}
      <section>
        <SectionTitle 
          subtitle={lang === 'EN' ? "Leadership & Team" : "ব্যবস্থাপনা ও টিম"} 
          title={lang === 'EN' ? "Meet Our Management & Team" : "পরিচিত হোন আমাদের দক্ষ টিমের সাথে"} 
          description={lang === 'EN' ? "The industry experts and dedicated leaders driving our continuous success." : "যাদের নিরলস পরিশ্রম, দক্ষতা এবং সঠিক দিকনির্দেশনায় এগিয়ে চলেছে আমাদের প্রতিষ্ঠান।"} 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamMembers.slice(1).map((member, idx) => (
            <NeoCard key={idx} className="bg-white/70 hover:bg-white border-white/90 flex flex-col justify-between group transition-all duration-300">
              
              <div>
                {/* Avatar & Role Header */}
                <div className="flex items-center space-x-3.5 mb-5 pb-4 border-b border-slate-200/60">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white text-3xl shadow-md group-hover:scale-105 transition-transform">
                    {member.avatar}
                  </div>
                  <div>
                    <h3 className="text-base font-black text-slate-800 leading-tight group-hover:text-blue-600 transition-colors">
                      {member.name}
                    </h3>
                    <span className="text-xs font-bold text-blue-600 block mt-0.5">
                      {member.role[lang]}
                    </span>
                  </div>
                </div>

                {/* Quote / Bio */}
                <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed mb-6">
                  {member.quote[lang]}
                </p>
              </div>

              {/* Bottom Email Contact */}
              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                {member.email ? (
                  <a 
                    href={`mailto:${member.email}`}
                    className="text-[11px] font-bold text-slate-500 hover:text-blue-600 truncate flex items-center space-x-1 transition"
                  >
                    <span>✉️</span> <span>{member.email}</span>
                  </a>
                ) : (
                  <span className="text-[11px] font-bold text-slate-400">🏢 Executive Board</span>
                )}
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Active
                </span>
              </div>

            </NeoCard>
          ))}
        </div>
      </section>

      {/* ================= 5. OUR CORE VALUES ================= */}
      <section>
        <SectionTitle 
          subtitle={lang === 'EN' ? "Guiding Principles" : "আমাদের মূলনীতি"} 
          title={lang === 'EN' ? "Our Core Values" : "যে আদর্শ ও নীতির ওপর আমরা প্রতিষ্ঠিত"} 
          description={lang === 'EN' ? "The fundamental principles that guide everything we do at CareerLift." : "আমাদের প্রতিটি পদক্ষেপ, প্রশিক্ষণ এবং সেবার ক্ষেত্রে আমরা এই ৫টি মূলনীতি মেনে চলি।"} 
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {coreValues.map((val, idx) => (
            <NeoCard key={idx} className={`bg-white/60 hover:bg-white border-white/90 border-l-4 ${val.color} flex flex-col justify-between group`}>
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                  {val.icon}
                </div>
                <h3 className="text-base font-black text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {val.title[lang]}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {val.desc[lang]}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/50 text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
                0{idx + 1} / VALUE
              </div>
            </NeoCard>
          ))}
        </div>
      </section>

      {/* ================= 6. FINAL CAMPUS VISIT & JOIN CTA ================= */}
      <section className="bg-white/70 backdrop-blur-xl border border-white/90 shadow-neo-float rounded-3xl p-8 sm:p-14 text-center space-y-6">
        <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-xs uppercase tracking-wider border border-emerald-300">
          📍 {lang === 'EN' ? 'VISIT OUR CAMPUS' : 'ক্যাম্পাস ভিজিট করুন'}
        </span>

        <h2 className="text-3xl sm:text-5xl font-black text-slate-800 leading-tight">
          {lang === 'EN' ? 'Ready To Build Your Career With Us?' : 'আমাদের সাথে আপনার স্বপ্নের ক্যারিয়ার গড়তে প্রস্তুত?'}
        </h2>

        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {lang === 'EN'
            ? 'Visit our Bijoy Nagar campus for a direct one-on-one consultation with our course coordinators and visa experts. We are open from Saturday to Thursday.'
            : 'সরাসরি কথা বলতে চলে আসুন আমাদের ঢাকার বিজয় নগর অফিসে। আমাদের অভিজ্ঞ কোর্স কো-অর্ডিনেটর এবং ভিসা এক্সপার্টরা শনিবার থেকে বৃহস্পতিবার প্রতিদিন উপস্থিত থাকেন।'}
        </p>

        <div className="p-5 rounded-2xl bg-blue-50/80 border border-blue-200 max-w-xl mx-auto text-left sm:text-center space-y-1">
          <p className="text-xs sm:text-sm font-bold text-slate-800">
            🏢 <strong className="text-blue-700">{lang === 'EN' ? 'Address:' : 'ঠিকানা:'}</strong> Prime Tower (Lift-3), 180–181 Shaheed Nazrul Islam Sharak, Bijoy Nagar, Dhaka-1000
          </p>
          <p className="text-xs sm:text-sm font-bold text-slate-800">
            📞 <strong className="text-blue-700">{lang === 'EN' ? 'Hotline:' : 'হটলাইন:'}</strong> +880 1814-304081 | ✉️ <strong className="text-blue-700">{lang === 'EN' ? 'Email:' : 'ইমেইল:'}</strong> careerliftbd@gmail.com
          </p>
        </div>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <Link to="/courses">
            <NeoButton variant="primary" className="!px-8 !py-4 text-sm font-bold">
              {lang === 'EN' ? 'Explore Skill Courses →' : 'স্কিল কোর্সসমূহ দেখুন →'}
            </NeoButton>
          </Link>
          <Link to="/study-abroad">
            <NeoButton variant="secondary" className="!px-8 !py-4 text-sm font-bold">
              {lang === 'EN' ? 'Free Profile Assessment' : 'ফ্রি প্রোফাইল অ্যাসেসমেন্ট'}
            </NeoButton>
          </Link>
        </div>
      </section>

    </div>
  );
}