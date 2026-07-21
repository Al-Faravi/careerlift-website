import React from 'react';
import NeoCard from '../../components/ui/NeoCard';
import NeoButton from '../../components/ui/NeoButton';
import SectionTitle from '../../components/ui/SectionTitle';

export default function NsdaFreeCourse() {
  return (
    <div className="py-12">
      {/* Hero Section of NSDA Free Course */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-block px-4 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-4 border border-emerald-300">
          🎉 100% Scholarship / Free Training
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-800 leading-tight">
          NSDA Recognized <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Free Skill Development</span> Courses
        </h1>
        <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
          গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের অধীনে ন্যাশনাল স্কিলস ডেভেলপমেন্ট অথরিটি (NSDA) অনুমোদিত সম্পূর্ণ বিনামূল্যে কারিগরি প্রশিক্ষণ এবং ১০০% কর্মসংস্থান সহায়তা।
        </p>
      </div>

      {/* Course Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
        <NeoCard className="border-l-4 border-l-emerald-500">
          <div className="flex justify-between items-start mb-4">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold">Free Course</span>
            <span className="text-sm font-bold text-slate-500">Level - 2 & 3</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-2">Care Giving (কেয়ার গিভিং)</h3>
          <p className="text-sm text-slate-600 mb-6 leading-relaxed">
            বৃদ্ধ, শিশু এবং রোগীদের সঠিক সেবা প্রদানের আন্তর্জাতিক মানের প্রশিক্ষণ। কোর্স শেষে জাপান, ইউকে এবং কানাডায় উচ্চ বেতনে চাকরির সুযোগ ও ভিসা প্রসেসিং সহায়তা।
          </p>
          <ul className="space-y-2 text-xs text-slate-600 mb-6 font-medium">
            <li>✅ সরকারি সার্টিফিকেট প্রদান (NSDA Certified)</li>
            <li>✅ সম্পূর্ণ প্র্যাকটিক্যাল ল্যাব সুবিধা</li>
            <li>✅ স্পোকেন ইংলিশ ও জাপানিজ ভাষা শিক্ষা</li>
          </ul>
          <NeoButton variant="primary" className="w-full !bg-gradient-to-r !from-emerald-600 !to-teal-600 hover:!from-emerald-700 hover:!to-teal-700">
            Apply For Free Seminar
          </NeoButton>
        </NeoCard>

        <NeoCard className="border-l-4 border-l-blue-500">
          <div className="flex justify-between items-start mb-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold">Free Course</span>
            <span className="text-sm font-bold text-slate-500">Level - 3</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-2">IT Skills & Computer Operation</h3>
          <p className="text-sm text-slate-600 mb-6 leading-relaxed">
            অফিস ম্যানেজমেন্ট, ডেটা এন্ট্রি, বেসিক হার্ডওয়্যার এবং ইন্টারনেট ব্যবহারের ওপর প্রফেশনাল প্রশিক্ষণ। কর্পোরেট চাকরিতে যোগদানের জন্য নিজেকে ১০০% প্রস্তুত করুন।
          </p>
          <ul className="space-y-2 text-xs text-slate-600 mb-6 font-medium">
            <li>✅ মাইক্রোসফট অফিস (Word, Excel, PowerPoint) মাস্টারক্লাস</li>
            <li>✅ ফ্রিল্যান্সিং ও অনলাইন আর্নিং গাইডলাইন</li>
            <li>✅ কোর্স শেষে বিভিন্ন কর্পোরেট প্রতিষ্ঠানে জব প্লেসমেন্ট</li>
          </ul>
          <NeoButton variant="primary" className="w-full">
            Apply For Free Seminar
          </NeoButton>
        </NeoCard>
      </div>

      {/* Why Join Banner */}
      <div className="bg-white/50 backdrop-blur-md border border-white/80 rounded-3xl p-8 max-w-4xl mx-auto text-center shadow-neo-float">
        <h3 className="text-xl font-bold text-slate-800 mb-2">কারা আবেদন করতে পারবেন?</h3>
        <p className="text-sm text-slate-600 max-w-2xl mx-auto mb-6">
          ন্যূনতম এসএসসি (SSC) বা সমমান পাশ যেকোনো বয়সের আগ্রহী প্রার্থী আবেদন করতে পারবেন। আসন সংখ্যা সীমিত হওয়ায় আজই আপনার সিট কনফার্ম করুন।
        </p>
        <div className="inline-block">
          <NeoButton variant="secondary" onClick={() => window.location.href = '/about-us'}>
            যোগাযোগ ও অফিসের ঠিকানা →
          </NeoButton>
        </div>
      </div>
    </div>
  );
}