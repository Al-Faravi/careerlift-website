import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NeoCard from '../../components/ui/NeoCard';
import NeoButton from '../../components/ui/NeoButton';
import SectionTitle from '../../components/ui/SectionTitle';
import { useLanguage } from '../../context/LanguageContext';

export default function StudyAbroad() {
  const { lang } = useLanguage();
  
  // Interactive Tab State for Visa Guidelines
  const [activeCountryTab, setActiveCountryTab] = useState('UK');

  // Form State for Free Profile Assessment
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', qualification: '', countries: [], message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Handle Checkbox for multiple countries selection
  const handleCountryCheckbox = (countryName) => {
    setFormData((prev) => {
      const exists = prev.countries.includes(countryName);
      if (exists) {
        return { ...prev, countries: prev.countries.filter((c) => c !== countryName) };
      } else {
        return { ...prev, countries: [...prev.countries, countryName] };
      }
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAssessmentSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      /* FUTURE CONNECTION: Google Apps Script Web App URL for Assessment Sheet */
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', qualification: '', countries: [], message: '' });
      setTimeout(() => setSubmitSuccess(false), 6000);
    } catch (error) {
      console.error("Assessment Submission Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // 4-Step Simple Process Data (EN & BN Integrated)
  const processSteps = [
    { 
      step: '01', 
      title: { EN: 'Free Assessment', BN: 'ফ্রি প্রোফাইল অ্যাসেসমেন্ট' }, 
      desc: { EN: 'Submit your academic profile. Our experts analyze your eligibility and best scholarship options.', BN: 'আপনার শিক্ষাগত যোগ্যতার তথ্য জমা দিন। আমাদের এক্সপার্টরা আপনার প্রোফাইল ও স্কলারশিপের সুযোগ বিশ্লেষণ করবেন।' }, 
      icon: '📋' 
    },
    { 
      step: '02', 
      title: { EN: 'Apply & Offer Letter', BN: 'আবেদন ও অফার লেটার' }, 
      desc: { EN: 'We apply to top-ranked universities & secure your Offer Letter within the shortest time.', BN: 'আমরা শীর্ষস্থানীয় বিশ্ববিদ্যালয়ে আবেদন করি এবং দ্রুততম সময়ের মধ্যে আপনার অফার লেটার নিশ্চিত করি।' }, 
      icon: '🎓' 
    },
    { 
      step: '03', 
      title: { EN: 'Visa Processing', BN: 'ভিসা ও এম্বাসি প্রসেসিং' }, 
      desc: { EN: 'We prepare your bank solvency, embassy file, and conduct mock interviews perfectly.', BN: 'নিখুঁতভাবে এম্বাসি ফাইল প্রস্তুত, সঠিক ব্যাংক সলভেন্সি গাইডলাইন এবং মক ইন্টারভিউয়ের মাধ্যমে চূড়ান্ত প্রস্তুতি।' }, 
      icon: '📁' 
    },
    { 
      step: '04', 
      title: { EN: 'Fly Abroad', BN: 'স্বপ্নযাত্রার ফ্লাইট' }, 
      desc: { EN: 'Visa received! We assist with flight booking, pre-departure briefing, and housing support.', BN: 'ভিসা প্রাপ্তির পর সাশ্রয়ী টিকেট বুকিং, এয়ারপোর্ট গাইডলাইন এবং বিদেশে বাসস্থান খোঁজার সার্বিক সহযোগিতা।' }, 
      icon: '✈️' 
    },
  ];

  // Top Destinations Grid Data (EN & BN Integrated)
  const destinations = [
    { 
      name: 'United Kingdom', 
      tag: { EN: 'Top Choice', BN: 'শীর্ষ পছন্দ' }, 
      flag: '🇬🇧', 
      feature: { EN: 'Masters with Spouse & Work Permit.', BN: 'স্পাউসসহ মাস্টার্স এবং কাজের সুযোগ।' }, 
      img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80' 
    },
    { 
      name: 'Canada', 
      tag: { EN: 'PR Pathway', BN: 'পিআর (PR) পাথওয়ে' }, 
      flag: '🇨🇦', 
      feature: { EN: 'Best for long-term settlement & career.', BN: 'স্থায়ী বসবাস ও উজ্জ্বল ক্যারিয়ারের সেরা দেশ।' }, 
      img: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80' 
    },
    { 
      name: 'Japan', 
      tag: { EN: 'Job Visa', BN: 'জব ও স্টাডি' }, 
      flag: '🇯🇵', 
      feature: { EN: 'Study and earn high salary (28h/week allowed).', BN: 'পড়াশোনার পাশাপাশি সপ্তাহে ২৮ ঘণ্টা উচ্চ বেতনে পার্ট-টাইম কাজ।' }, 
      img: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80' 
    },
    { 
      name: 'Malaysia', 
      tag: { EN: 'Affordable', BN: 'সাশ্রয়ী খরচ' }, 
      flag: '🇲🇾', 
      feature: { EN: 'No Bank Pressure. Easy & fast Visa approval.', BN: 'কোনো ব্যাংক সলভেন্সির ঝামেলা নেই। দ্রুত ভিসা অনুমোদন।' }, 
      img: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=600&q=80' 
    },
    { 
      name: 'China', 
      tag: { EN: 'Full Free', BN: 'ফুল স্কলারশিপ' }, 
      flag: '🇨🇳', 
      feature: { EN: 'Scholarships with monthly Stipend available.', BN: 'সম্পূর্ণ টিউশন ফি ফ্রি এবং মাসিক পকেট মানিসহ স্কলারশিপ।' }, 
      img: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=600&q=80' 
    },
    { 
      name: 'Sri Lanka', 
      tag: { EN: 'Scholarships', BN: 'কম খরচে ডিগ্রি' }, 
      flag: '🇱🇰', 
      feature: { EN: 'Quality Education at extremely Low Cost.', BN: 'অত্যন্ত কম খরচে আন্তর্জাতিক মানের মেডিকেল ও ইঞ্জিনিয়ারিং ডিগ্রি।' }, 
      img: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=600&q=80' 
    },
    { 
      name: 'Europe (Schengen)', 
      tag: { EN: 'Schengen', BN: 'শেনজেন ভিসা' }, 
      flag: '🇪🇺', 
      feature: { EN: 'Germany, France, Finland, Italy opportunities.', BN: 'জার্মানি, ফ্রান্স, ফিনল্যান্ড এবং ইতালিতে পড়ার দারুণ সুযোগ।' }, 
      img: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80' 
    },
    { 
      name: 'Australia', 
      tag: { EN: 'Work Rights', BN: 'ওয়ার্ক রাইটস' }, 
      flag: '🇦🇺', 
      feature: { EN: 'High Salary Part-time jobs & excellent degrees.', BN: 'উচ্চ বেতনের পার্ট-টাইম কাজ এবং বিশ্বমানের ডিগ্রি।' }, 
      img: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=600&q=80' 
    },
  ];

  // Country Guidelines Dictionary (EN & BN Integrated)
  const guidelines = {
    UK: { flag: '🇬🇧', title: { EN: 'United Kingdom Guidelines', BN: 'যুক্তরাজ্য (UK) ভিসা গাইডলাইন' }, points: [
      { label: { EN: 'Language:', BN: 'ভাষা যোগ্যতা:' }, text: { EN: 'IELTS 6.0 overall. OIETC / Duolingo accepted by selected universities.', BN: 'আইইএলটিএস ওভারঅল ৬.০। বেশ কিছু বিশ্ববিদ্যালয়ে OIETC বা Duolingo গ্রহণযোগ্য।' } },
      { label: { EN: 'Spouse Visa:', BN: 'স্পাউস ভিসা:' }, text: { EN: 'Allowed for Masters (Research) & PhD programs.', BN: 'মাস্টার্স (রিসার্চ) এবং পিএইচডি প্রোগ্রামে স্পাউস বা স্বামী/স্ত্রী সাথে নিয়ে যাওয়ার সুযোগ।' } },
      { label: { EN: 'Bank Solvency:', BN: 'ব্যাংক সলভেন্সি:' }, text: { EN: 'Keep funds strictly for 28 days maturity before visa submission.', BN: 'ভিসা আবেদনের আগে একাউন্টে টিউশন ও লিভিং কস্ট অবশ্যই ২৮ দিন মেয়াদি হতে হবে।' } },
      { label: { EN: 'Interview:', BN: 'ইন্টারভিউ:' }, text: { EN: 'University & Embassy Credibility interview is the key to success.', BN: 'বিশ্ববিদ্যালয় এবং এম্বাসির ক্রেডিবিলিটি ইন্টারভিউতে সফল হওয়াই ভিসার মূল চাবিকাঠি।' } },
    ]},
    Japan: { flag: '🇯🇵', title: { EN: 'Japan Guidelines', BN: 'জাপান (Japan) ভিসা গাইডলাইন' }, points: [
      { label: { EN: 'Language:', BN: 'ভাষা যোগ্যতা:' }, text: { EN: 'NAT / JLPT N5 level certificate is highly recommended.', BN: 'জাপানিজ ভাষার NAT বা JLPT N5 লেভেল সার্টিফিকেট থাকা অত্যন্ত সুপারিশকৃত।' } },
      { label: { EN: 'Sponsor:', BN: 'স্পন্সরশিপ:' }, text: { EN: 'Strong financial sponsor required with valid tax & income papers.', BN: 'বৈধ আয় এবং ট্যাক্সের কাগজপত্রসহ শক্তিশালী আর্থিক স্পন্সর প্রয়োজন।' } },
      { label: { EN: 'Bank Solvency:', BN: 'ব্যাংক সলভেন্সি:' }, text: { EN: 'Show approx 15 - 18 Lac BDT liquid money in account.', BN: 'স্পন্সরের ব্যাংক একাউন্টে আনুমানিক ১৫ থেকে ১৮ লাখ টাকা দেখাতে হয়।' } },
      { label: { EN: 'Career Rights:', BN: 'কাজের সুযোগ:' }, text: { EN: 'Part-time job allowed (28 hours/week) with high hourly rates.', BN: 'পড়াশোনার পাশাপাশি সপ্তাহে বৈধভাবে ২৮ ঘণ্টা উচ্চ বেতনে কাজ করার সুযোগ।' } },
    ]},
    Canada: { flag: '🇨🇦', title: { EN: 'Canada Guidelines', BN: 'কানাডা (Canada) ভিসা গাইডলাইন' }, points: [
      { label: { EN: 'Profile:', BN: 'প্রোফাইল যোগ্যতা:' }, text: { EN: 'Strong academic background required (Min GPA 3.5+ recommended).', BN: 'ভালো অ্যাকাডেমিক রেজাল্ট প্রয়োজন (এসএসসি ও এইচএসসিতে ন্যূনতম জিপিএ ৩.৫+ সুপারিশকৃত)।' } },
      { label: { EN: 'IELTS:', BN: 'আইইএলটিএস:' }, text: { EN: '6.0 or 6.5 Overall (No band less than 6.0 for SDS category).', BN: 'ওভারঅল ৬.০ বা ৬.৫ (SDS ক্যাটাগরির জন্য কোনো ব্যান্ডে ৬.০ এর নিচে থাকা যাবে না)।' } },
      { label: { EN: 'Funds:', BN: 'আর্থিক সলভেন্সি:' }, text: { EN: 'Show 1 year tuition + 1 year living cost (GIC account preferred).', BN: '১ বছরের টিউশন ফি এবং ১ বছরের লিভিং কস্ট (GIC একাউন্টের মাধ্যমে জমা দেওয়া শ্রেয়)।' } },
      { label: { EN: 'PR Opportunity:', BN: 'পিআর (PR) সুযোগ:' }, text: { EN: 'Post-Graduation Work Permit (PGWP) leads to easy Permanent Residency.', BN: 'পড়াশোনা শেষে পোস্ট-গ্র্যাজুয়েশন ওয়ার্ক পারমিটের (PGWP) মাধ্যমে সহজে স্থায়ী বসবাসের সুযোগ।' } },
    ]},
    Malaysia: { flag: '🇲🇾', title: { EN: 'Malaysia Guidelines', BN: 'মালয়েশিয়া (Malaysia) ভিসা গাইডলাইন' }, points: [
      { label: { EN: 'Eligibility:', BN: 'শিক্ষাগত যোগ্যতা:' }, text: { EN: 'Minimum GPA 2.5 in both SSC & HSC or Diploma.', BN: 'এসএসসি এবং এইচএসসি বা সমমান পরীক্ষায় ন্যূনতম জিপিএ ২.৫ থাকতে হবে।' } },
      { label: { EN: 'IELTS:', BN: 'আইইএলটিএস:' }, text: { EN: 'Not mandatory for all universities. MOI (Medium of Instruction) accepted.', BN: 'সকল বিশ্ববিদ্যালয়ে বাধ্যতামূলক নয়। ইংরেজি মাধ্যমের সার্টিফিকেট (MOI) দিয়েও আবেদন সম্ভব।' } },
      { label: { EN: 'Bank Solvency:', BN: 'ব্যাংক সলভেন্সি:' }, text: { EN: 'Usually not required for EMGS approval (depends on University).', BN: 'EMGS ভিসা অনুমোদনের জন্য সাধারণত কোনো ব্যাংক সলভেন্সি দেখাতে হয় না।' } },
      { label: { EN: 'Success Rate:', BN: 'সাফল্যের হার:' }, text: { EN: 'Almost 99% visa success rate once EMGS is approved.', BN: 'EMGS অ্যাপ্রুভাল চলে আসলে ভিসা সাফল্যের হার প্রায় ৯৯%।' } },
    ]},
    China: { flag: '🇨🇳', title: { EN: 'China Guidelines', BN: 'চীন (China) ভিসা গাইডলাইন' }, points: [
      { label: { EN: 'Documents:', BN: 'প্রয়োজনীয় পেপারস:' }, text: { EN: 'Official JW202 Visa Form is mandatory from the university.', BN: 'বিশ্ববিদ্যালয় থেকে ইস্যুকৃত অফিসিয়াল JW202 ভিসা ফরম থাকা বাধ্যতামূলক।' } },
      { label: { EN: 'Medical:', BN: 'মেডিকেল টেস্ট:' }, text: { EN: 'Physical Examination Record for Foreigners is strictly required.', BN: 'বিদেশীদের জন্য নির্ধারিত ফরমে মেডিকেল বা শারীরিক ফিটনেস টেস্ট রিপোর্ট বাধ্যতামূলক।' } },
      { label: { EN: 'Scholarship:', BN: 'স্কলারশিপ সুবিধা:' }, text: { EN: 'CSC and Provincial scholarships available (Full Free Tuition + Stipend).', BN: 'চাইনিজ গভর্মেন্ট (CSC) ও প্রভিন্সিয়াল স্কলারশিপের মাধ্যমে ফুল ফ্রি ও মাসিক ভাতার সুযোগ।' } },
      { label: { EN: 'IELTS:', BN: 'আইইএলটিএস:' }, text: { EN: 'Not required for most English-taught undergraduate/postgraduate programs.', BN: 'অধিকাংশ ইংলিশ-মিয়াম আন্ডারগ্র্যাজুয়েট ও মাস্টার্স প্রোগ্রামের জন্য আইইএলটিএস প্রয়োজন নেই।' } },
    ]},
    SriLanka: { flag: '🇱🇰', title: { EN: 'Sri Lanka Guidelines', BN: 'শ্রীলঙ্কা (Sri Lanka) ভিসা গাইডলাইন' }, points: [
      { label: { EN: 'Visa Type:', BN: 'ভিসার ধরন:' }, text: { EN: 'Entry Visa first from Bangladesh, then converted to Resident Visa.', BN: 'বাংলাদেশ থেকে প্রথমে এন্ট্রি ভিসা নিয়ে যেতে হয়, পরবর্তীতে সেখানে রেসিডেন্ট ভিসায় রূপান্তর হয়।' } },
      { label: { EN: 'Living Cost:', BN: 'জীবনযাত্রার মান ও খরচ:' }, text: { EN: 'Very affordable living expenses (~15k - 20k BDT/month).', BN: 'জীবনযাত্রার মান অত্যন্ত ভালো এবং খরচ খুবই কম (মাসে আনুমানিক ১৫ থেকে ২০ হাজার টাকা)।' } },
      { label: { EN: 'Processing:', BN: 'প্রসেসিং সময়:' }, text: { EN: 'Extremely quick Offer Letter processing within 7-10 days.', BN: 'মাত্র ৭ থেকে ১০ দিনের মধ্যে অতি দ্রুত বিশ্ববিদ্যালয় থেকে অফার লেটার প্রসেসিং।' } },
      { label: { EN: 'Requirements:', BN: 'ন্যূনতম যোগ্যতা:' }, text: { EN: 'Basic English skills and HSC/A-Level pass certificate.', BN: 'এইচএসসি বা সমমান পাশ এবং বেসিক ইংরেজি কমিউনিকেশন স্কিল থাকলেই আবেদন সম্ভব।' } },
    ]},
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      
      {/* ================= 1. HERO SECTION ================= */}
      <section className="pt-6 sm:pt-10 text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-100 border border-blue-300 shadow-sm text-blue-800 font-extrabold text-xs uppercase tracking-wider">
          <span>✈️ {lang === 'EN' ? 'GLOBAL CONSULTANCY' : 'গ্লোবাল কনসালটেন্সি'}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-800 leading-tight">
          {lang === 'EN' ? 'Your Dream of ' : 'বিদেশে উচ্চশিক্ষার '} 
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {lang === 'EN' ? 'Studying Abroad' : 'স্বপ্ন পূরণ হোক'}
          </span> 
          {lang === 'EN' ? ' Starts Here.' : ' এখান থেকেই।'}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto">
          {lang === 'EN' 
            ? 'We provide expert guidance for student visas in UK, Canada, Malaysia, Sri Lanka, China, Japan & more. ' 
            : 'আমরা ইউকে, কানাডা, মালয়েশিয়া, শ্রীলঙ্কা, চীন, জাপানসহ বিভিন্ন দেশের স্টুডেন্ট ভিসার প্রফেশনাল গাইডলাইন প্রদান করি। '}
          <span className="text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded inline-block mt-1">
            {lang === 'EN' ? 'File opening charge is FREE' : 'সীমিত সময়ের জন্য ফাইল প্রসেসিং চার্জ সম্পূর্ণ ফ্রি!'}
          </span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a href="#assessment-form" className="w-full sm:w-auto">
            <NeoButton variant="primary" className="w-full sm:w-auto !px-8 !py-4 text-base font-bold shadow-lg shadow-blue-500/25">
              {lang === 'EN' ? 'Free Profile Assessment' : 'ফ্রি প্রোফাইল অ্যাসেসমেন্ট'}
            </NeoButton>
          </a>
          <a href="#destinations" className="w-full sm:w-auto">
            <NeoButton variant="secondary" className="w-full sm:w-auto !px-8 !py-4 text-base font-bold">
              {lang === 'EN' ? 'Explore Countries ↓' : 'দেশসমূহ দেখুন ↓'}
            </NeoButton>
          </a>
        </div>
      </section>

      {/* ================= 2. ACCREDITATION & PATHWAY PARTNERS ================= */}
      <section className="bg-white/50 backdrop-blur-md border border-white/80 rounded-3xl p-8 text-center shadow-neo-float">
        <p className="text-xs font-black tracking-widest uppercase text-slate-400 mb-6">
          {lang === 'EN' 
            ? 'OFFICIALLY RECOGNIZED BY INTERNATIONAL AWARDING BODIES & PATHWAY PARTNERS'
            : 'আন্তর্জাতিক স্বীকৃতিপ্রাপ্ত সংস্থা ও প্রাতিষ্ঠানিক পার্টনারসমূহ'}
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-center max-w-4xl mx-auto">
          {/* Partner 1: OTHM */}
          <div className="p-4 rounded-2xl bg-white/70 border border-slate-200/60 shadow-sm flex flex-col items-center justify-center hover:scale-105 transition">
            <span className="text-2xl font-black tracking-tighter text-blue-800">othm</span>
            <span className="text-[10px] font-bold text-slate-500">{lang === 'EN' ? 'Approved Centre (UK)' : 'অ্যাপ্রুভড সেন্টার (UK)'}</span>
          </div>

          {/* Partner 2: QUALIFI */}
          <div className="p-4 rounded-2xl bg-white/70 border border-slate-200/60 shadow-sm flex flex-col items-center justify-center hover:scale-105 transition">
            <span className="text-2xl font-black tracking-wide text-indigo-700">QUALIFI</span>
            <span className="text-[10px] font-bold text-slate-500">{lang === 'EN' ? 'Degree Pathway' : 'ডিগ্রি পাথওয়ে'}</span>
          </div>

          {/* Partner 3: UKQAS */}
          <div className="p-4 rounded-2xl bg-white/70 border border-slate-200/60 shadow-sm flex flex-col items-center justify-center hover:scale-105 transition">
            <span className="text-2xl font-black text-purple-700">UKQAS</span>
            <span className="text-[10px] font-bold text-slate-500">{lang === 'EN' ? 'Quality Assurance' : 'কোয়ালিটি অ্যাসিওরেন্স'}</span>
          </div>

          {/* Partner 4: NSDA */}
          <div className="p-4 rounded-2xl bg-white/70 border border-slate-200/60 shadow-sm flex flex-col items-center justify-center hover:scale-105 transition">
            <span className="text-2xl font-black text-emerald-700">NSDA</span>
            <span className="text-[10px] font-bold text-slate-500">{lang === 'EN' ? 'Govt Recognized' : 'সরকারি স্বীকৃতিপ্রাপ্ত'}</span>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-200/60 max-w-3xl mx-auto text-xs text-slate-600 font-medium leading-relaxed">
          💡 <strong className="text-slate-800">{lang === 'EN' ? 'Why OTHM & Qualifi?' : 'কেন OTHM এবং Qualifi করবেন?'}</strong> {lang === 'EN' 
            ? 'Complete your Level 3 to Level 5 UK Diploma directly at CareerLift campus in Bangladesh at 80% lower cost, then transfer your credits to final year at top UK & European Universities!'
            : 'বাংলাদেশে বসে প্রায় ৮০% কম খরচে লেভেল ৩ থেকে লেভেল ৫ ডিপ্লোমা সম্পন্ন করুন, এরপর সরাসরি ইউকে বা ইউরোপের শীর্ষ বিশ্ববিদ্যালয়ে শেষ বর্ষে ক্রেডিট ট্রান্সফার করে পূর্ণাঙ্গ ডিগ্রি অর্জন করুন!'}
        </div>
      </section>

      {/* ================= 3. SIMPLE 4-STEP PROCESS ================= */}
      <section>
        <SectionTitle 
          subtitle={lang === 'EN' ? "Simple Process" : "সহজ প্রসেসিং"} 
          title={lang === 'EN' ? "Your Journey From Application To Flight In 4 Steps" : "আবেদন থেকে ফ্লাইট পর্যন্ত আপনার পুরো যাত্রা ৪টি সহজ ধাপে"} 
          description={lang === 'EN' ? "We make international student visa processing smooth, transparent, and hassle-free." : "আমরা আন্তর্জাতিক স্টুডেন্ট ভিসা প্রসেসিংকে করি ১০০% স্বচ্ছ, ঝামেলাহীন এবং অত্যন্ত সহজ।"} 
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((item, idx) => (
            <NeoCard key={idx} className="bg-white/60 hover:bg-white/90 border-white/90 relative group">
              <div className="text-4xl font-black text-blue-500/15 absolute top-4 right-4 select-none group-hover:scale-125 transition-transform duration-300">
                {item.step}
              </div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-2xl shadow-md mb-6">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">{item.title[lang]}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{item.desc[lang]}</p>
            </NeoCard>
          ))}
        </div>
      </section>

      {/* ================= 4. TOP DESTINATIONS GRID ================= */}
      <section id="destinations">
        <SectionTitle 
          subtitle={lang === 'EN' ? "Top Destinations" : "শীর্ষ দেশসমূহ"} 
          title={lang === 'EN' ? "Choose Your Dream Country. We Handle The Rest." : "আপনার পছন্দের দেশ নির্বাচন করুন, বাকি দায়িত্ব আমাদের।"} 
          description={lang === 'EN' ? "We have direct representation with top-ranked universities across the globe." : "বিশ্বের শীর্ষস্থানীয় বিশ্ববিদ্যালয়গুলোর সাথে আমাদের রয়েছে সরাসরি রিপ্রেজেন্টেশন ও পার্টনারশিপ।"} 
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, idx) => (
            <div key={idx} className="bg-white/60 backdrop-blur-md border border-white/90 shadow-neo-float rounded-2xl overflow-hidden hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between">
              
              {/* Card Image Banner */}
              <div className="h-40 w-full overflow-hidden relative">
                <img src={dest.img} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-slate-800 text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-sm">
                  {dest.tag[lang]}
                </div>
                <div className="absolute bottom-3 left-3 flex items-center space-x-2 text-white">
                  <span className="text-2xl drop-shadow">{dest.flag}</span>
                  <h3 className="text-lg font-black drop-shadow">{dest.name}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mb-4">
                  ✓ {dest.feature[lang]}
                </p>
                
                <button 
                  onClick={() => setActiveCountryTab(dest.name === 'United Kingdom' ? 'UK' : dest.name === 'Sri Lanka' ? 'SriLanka' : dest.name.split(' ')[0])} 
                  className="w-full py-2 rounded-xl bg-blue-50 text-blue-700 font-bold text-xs hover:bg-blue-600 hover:text-white transition-all border border-blue-200"
                >
                  {lang === 'EN' ? 'View Visa Rules →' : 'ভিসার নিয়মকানুন দেখুন →'}
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* ================= 5. INTERACTIVE VISA REQUIREMENTS & COUNTRY GUIDELINES ================= */}
      <section className="bg-white/60 backdrop-blur-2xl border border-white/90 shadow-neo-float rounded-3xl p-6 sm:p-12">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-800 font-extrabold text-xs uppercase tracking-wider">
            📄 {lang === 'EN' ? 'Visa Requirements & Guidelines' : 'ভিসা রিকোয়ারমেন্টস ও গাইডলাইন'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-800 mt-2">
            {lang === 'EN' ? 'Country-Specific Embassy Guidelines' : 'দেশভিত্তিক এম্বাসি ও বিশ্ববিদ্যালয়ের নিয়মাবলি'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            {lang === 'EN' 
              ? 'Click on your preferred country below to review exact academic, language, and bank solvency rules.'
              : 'নিচের বাটনে ক্লিক করে আপনার পছন্দের দেশের শিক্ষাগত যোগ্যতা, আইইএলটিএস এবং ব্যাংক সলভেন্সি সম্পর্কে বিস্তারিত জেনে নিন।'}
          </p>
        </div>

        {/* General Documents Banner (Required for All) */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-6 text-white mb-8 shadow-md">
          <h3 className="text-base font-bold flex items-center space-x-2 mb-4 text-amber-400">
            <span>📄</span> 
            <span>{lang === 'EN' ? 'General Documents (Required for All Countries)' : 'সাধারণ ডকুমেন্টসমূহ (সকল দেশের জন্য প্রযোজ্য)'}</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
            <div>• <strong className="text-white">{lang === 'EN' ? 'Passport:' : 'পাসপোর্ট:'}</strong> {lang === 'EN' ? 'Must be valid for at least 1 year.' : 'কমপক্ষে ১ বছর মেয়াদ থাকতে হবে।'}</div>
            <div>• <strong className="text-white">{lang === 'EN' ? 'Photos:' : 'ছবি:'}</strong> {lang === 'EN' ? '35x45mm Lab Print (White Background).' : '৩৫x৪৫ মিমি ল্যাব প্রিন্ট (সাদা ব্যাকগ্রাউন্ড)।'}</div>
            <div>• <strong className="text-white">{lang === 'EN' ? 'Academic:' : 'একাডেমিক:'}</strong> {lang === 'EN' ? 'All Original Certificates & Transcripts.' : 'সকল মূল সার্টিফিকেট এবং মার্কশিট।'}</div>
            <div>• <strong className="text-white">{lang === 'EN' ? 'Financials:' : 'আর্থিক সলভেন্সি:'}</strong> {lang === 'EN' ? 'Bank Statement & Solvency Certificate.' : 'ব্যাংক স্টেটমেন্ট এবং সলভেন্সি সার্টিফিকেট।'}</div>
            <div>• <strong className="text-white">{lang === 'EN' ? 'Other:' : 'অন্যান্য:'}</strong> {lang === 'EN' ? 'NID/Birth Certificate, Police Clearance.' : 'এনআইডি/জন্ম নিবন্ধন, পুলিশ ক্লিয়ারেন্স।'}</div>
            <div>• <strong className="text-white">{lang === 'EN' ? 'English:' : 'ইংরেজি দক্ষতা:'}</strong> {lang === 'EN' ? 'IELTS / Duolingo / MOI (as per rule).' : 'IELTS / Duolingo / MOI (বিশ্ববিদ্যালয়ের নিয়ম অনুযায়ী)।'}</div>
          </div>
        </div>

        {/* Country Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {Object.keys(guidelines).map((key) => (
            <button
              key={key}
              onClick={() => setActiveCountryTab(key)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-black transition-all duration-300 flex items-center space-x-2 ${
                activeCountryTab === key
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105'
                  : 'bg-white/80 border border-slate-200/80 text-slate-700 hover:bg-white'
              }`}
            >
              <span className="text-lg">{guidelines[key].flag}</span>
              <span>{key === 'SriLanka' ? 'Sri Lanka' : key}</span>
            </button>
          ))}
        </div>

        {/* Active Country Content Box */}
        {guidelines[activeCountryTab] && (
          <div className="bg-white/80 rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm animate-fadeIn">
            <div className="flex items-center space-x-3 border-b border-slate-200/60 pb-4 mb-6">
              <span className="text-3xl">{guidelines[activeCountryTab].flag}</span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-800">{guidelines[activeCountryTab].title[lang]}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {guidelines[activeCountryTab].points.map((pt, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-blue-50/50 border border-blue-100 flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-slate-800">{pt.label[lang]}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed font-medium">{pt.text[lang]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* ================= 6. FREE PROFILE ASSESSMENT FORM (Sheet Ready) ================= */}
      <section id="assessment-form" className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-700 rounded-3xl p-6 sm:p-12 text-white shadow-neo-float relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
          
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <span className="px-3.5 py-1 rounded-full bg-white/20 text-white font-extrabold text-xs uppercase tracking-wider backdrop-blur-md">
              🎯 {lang === 'EN' ? 'Free Consultation' : 'ফ্রি কাউন্সিলিং'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black leading-tight">
              {lang === 'EN' ? 'Free Profile Assessment' : 'ফ্রি প্রোফাইল অ্যাসেসমেন্ট'}
            </h2>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed font-normal">
              {lang === 'EN'
                ? 'Fill out this form. Our expert visa consultants will review your academic background, bank solvency, and language score, and contact you within 24 hours with the best university pathway!'
                : 'নিচের ফরমটি পূরণ করুন। আমাদের এক্সপার্ট ভিসা কনসালটেন্টরা আপনার রেজাল্ট ও ব্যাংক সলভেন্সি বিশ্লেষণ করে ২৪ ঘণ্টার মধ্যে আপনার সাথে যোগাযোগ করে সেরা বিশ্ববিদ্যালয়ের গাইডলাইন দেবেন!'}
            </p>
            <div className="p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md text-xs sm:text-sm space-y-2">
              <div>✅ <strong className="text-white">{lang === 'EN' ? '100% Free File Opening' : '১০০% ফ্রি ফাইল প্রসেসিং'}</strong> ({lang === 'EN' ? 'Limited Time' : 'সীমিত সময়ের জন্য'})</div>
              <div>✅ <strong className="text-white">{lang === 'EN' ? 'Direct University Interview Preparation' : 'সরাসরি ইন্টারভিউ প্রস্তুতি ও স্পোকেন গাইড'}</strong></div>
              <div>✅ <strong className="text-white">{lang === 'EN' ? 'High Visa Approval Rate & Solvency Support' : 'সর্বোচ্চ ভিসা সাফল্যের হার ও সলভেন্সি সহায়তা'}</strong></div>
            </div>
          </div>

          {/* Right Interactive Form Box */}
          <div className="lg:col-span-7">
            <div className="bg-white/95 backdrop-blur-2xl text-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5">
              
              {submitSuccess ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-3 animate-fadeIn my-6">
                  <div className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto text-3xl font-bold">✓</div>
                  <h4 className="text-xl font-black text-emerald-800">{lang === 'EN' ? 'Assessment Submitted!' : 'আবেদন জমা হয়েছে!'}</h4>
                  <p className="text-xs sm:text-sm text-emerald-600">
                    {lang === 'EN'
                      ? 'Thank you! Your profile assessment request has been received. Our expert visa team will review your details and contact you within 24 hours.'
                      : 'ধন্যবাদ! আপনার প্রোফাইল অ্যাসেসমেন্ট ফরমটি সফলভাবে জমা হয়েছে। আমাদের এক্সপার্ট ভিসা টিম আপনার তথ্য বিশ্লেষণ করে ২৪ ঘণ্টার মধ্যে যোগাযোগ করবে।'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleAssessmentSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">{lang === 'EN' ? 'Your Name *' : 'আপনার নাম *'}</label>
                      <input 
                        type="text" name="name" required value={formData.name} onChange={handleInputChange} placeholder={lang === 'EN' ? "Full Name" : "সম্পূর্ণ নাম"} 
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 shadow-inner text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">{lang === 'EN' ? 'Phone (WhatsApp) *' : 'ফোন নম্বর (হোয়াটসঅ্যাপ) *'}</label>
                      <input 
                        type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} placeholder="018XX-XXXXXX" 
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 shadow-inner text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">{lang === 'EN' ? 'Email Address *' : 'ইমেইল অ্যাড্রেস *'}</label>
                      <input 
                        type="email" name="email" required value={formData.email} onChange={handleInputChange} placeholder="email@example.com" 
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 shadow-inner text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">{lang === 'EN' ? 'Select Last Degree *' : 'সর্বশেষ শিক্ষাগত যোগ্যতা *'}</label>
                      <select 
                        name="qualification" required value={formData.qualification} onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 shadow-inner text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold text-slate-700 cursor-pointer"
                      >
                        <option value="">{lang === 'EN' ? '-- Select Education --' : '-- যোগ্যতা নির্বাচন করুন --'}</option>
                        <option value="SSC / O-Level">SSC / O-Level</option>
                        <option value="HSC / A-Level / Diploma">HSC / A-Level / Diploma</option>
                        <option value="Bachelor / Honours">Bachelor / Honours</option>
                        <option value="Masters">Masters</option>
                      </select>
                    </div>
                  </div>

                  {/* Interested Countries (Multi-select Checkboxes) */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                      {lang === 'EN' ? 'Interested Countries (Select multiple) *' : 'পছন্দের দেশসমূহ (একাধিক নির্বাচন করা যাবে) *'}
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['UK', 'Canada', 'Japan', 'Malaysia', 'China', 'Sri Lanka', 'Europe', 'Australia'].map((c) => (
                        <label key={c} className={`flex items-center space-x-2 p-2.5 rounded-xl border cursor-pointer text-xs font-bold transition ${
                          formData.countries.includes(c) ? 'bg-blue-600 text-white border-blue-600 shadow-sm' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}>
                          <input 
                            type="checkbox" 
                            checked={formData.countries.includes(c)} 
                            onChange={() => handleCountryCheckbox(c)} 
                            className="hidden" 
                          />
                          <span>{formData.countries.includes(c) ? '✓' : '+'}</span>
                          <span>{c}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">{lang === 'EN' ? 'Additional Message / IELTS Score (Optional)' : 'অতিরিক্ত বার্তা / আইইএলটিএস স্কোর (ঐচ্ছিক)'}</label>
                    <textarea 
                      name="message" value={formData.message} onChange={handleInputChange} rows="2" placeholder={lang === 'EN' ? "Mention your GPA, IELTS score, or any specific query..." : "আপনার জিপিএ, আইইএলটিএস স্কোর বা কোনো বিশেষ প্রশ্ন থাকলে লিখুন..."} 
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 shadow-inner text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-sm shadow-xl shadow-blue-500/20 hover:from-blue-700 hover:to-indigo-700 active:scale-98 transition-all disabled:opacity-50 flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                          <span>{lang === 'EN' ? 'Sending to Sheet...' : 'তথ্য শীটে পাঠানো হচ্ছে...'}</span>
                        </>
                      ) : (
                        <span>{lang === 'EN' ? 'Submit for Free Assessment →' : 'ফ্রি অ্যাসেসমেন্টের জন্য আবেদন করুন →'}</span>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}