import React from 'react';
import { Award, Users, Globe, BookOpen, CheckCircle2, TrendingUp } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function StatsSection() {
  const { lang } = useLanguage();
  const currentLang = lang || 'EN';

  const statsData = [
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      number: "50+",
      label: { EN: "Global Universities", BN: "পার্টনার ইউনিভার্সিটি" },
      sub: { EN: "UK, Japan, Canada & Europe", BN: "ইউকে, জাপান, কানাডা ও ইউরোপ" },
      bg: "bg-blue-50/50 border-blue-200/60"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-emerald-600" />,
      number: "98%",
      label: { EN: "Visa Success Rate", BN: "ভিসা সাফল্যের হার" },
      sub: { EN: "Transparent Legal Processing", BN: "১০০% আইনি ও স্বচ্ছ প্রক্রিয়া" },
      bg: "bg-emerald-50/50 border-emerald-200/60"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      number: "500+",
      label: { EN: "Caregivers Deployed", BN: "কেয়ারগিভার কর্মরত" },
      sub: { EN: "In Top Medical Institutes", BN: "শীর্ষ হাসপাতাল ও কেয়ার হোমে" },
      bg: "bg-purple-50/50 border-purple-200/60"
    },
    {
      icon: <Award className="w-8 h-8 text-amber-600" />,
      number: "100%",
      label: { EN: "Govt. NSDA Approved", BN: "সরকার ও NSDA অনুমোদিত" },
      sub: { EN: "Level 2 & 3 Certifications", BN: "লেভেল-২ এবং ৩ কারিগরি যোগ্যতা" },
      bg: "bg-amber-50/50 border-amber-200/60"
    }
  ];

  return (
    <section className="relative z-20 -mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-[2.5rem] border border-slate-200/80 shadow-xl p-6 sm:p-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, idx) => (
            <div 
              key={idx} 
              className={`p-6 rounded-3xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between space-y-4 ${stat.bg}`}
            >
              <div className="flex items-center justify-between">
                <div className="p-3 bg-white rounded-2xl shadow-2xs">
                  {stat.icon}
                </div>
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest">0{idx + 1}</span>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  {stat.number}
                </h3>
                <h4 className="text-sm font-black text-slate-800 mt-1">
                  {stat.label[currentLang]}
                </h4>
                <p className="text-xs font-semibold text-slate-500 mt-0.5">
                  {stat.sub[currentLang]}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Ticker inside Stats Box */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs font-extrabold text-slate-600">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="text-emerald-600" size={16} />
            <span>{currentLang === 'EN' ? 'National Skills Development Authority (NSDA) Recognized' : 'প্রধানমন্ত্রীর কার্যালয়ের অধীনস্থ NSDA অনুমোদিত প্রতিষ্ঠান'}</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="text-blue-600" size={16} />
            <span>{currentLang === 'EN' ? 'UK Regulated OTHM & QUALIFI Awarding Body Partner' : 'যুক্তরাজ্যের সরকারি শিক্ষা বোর্ড OTHM ও QUALIFI পার্টনার'}</span>
          </div>
        </div>

      </div>
    </section>
  );
}