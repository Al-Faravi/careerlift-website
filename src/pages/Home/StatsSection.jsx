import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export default function StatsSection() {
  const { t } = useLanguage();

  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20 sm:mb-28">
      {t.stats.map((stat, idx) => (
        <div key={idx} className="bg-white/60 backdrop-blur-lg border border-slate-200/60 shadow-sm rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
          <h3 className="text-3xl sm:text-5xl font-black text-slate-800 group-hover:text-blue-600 transition-colors">
            {stat.value}
          </h3>
          <p className="text-xs sm:text-sm font-bold text-slate-500 mt-2 uppercase tracking-wider">
            {stat.label}
          </p>
        </div>
      ))}
    </section>
  );
}