import React from 'react';

export default function SectionTitle({ subtitle, title, description, center = true }) {
  return (
    <div className={`mb-12 ${center ? 'text-center max-w-2xl mx-auto' : 'text-left'}`}>
      {subtitle && (
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/50 border border-white/70 shadow-sm text-blue-700 font-semibold text-xs uppercase tracking-wider mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-slate-600 mt-3 font-normal leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}