import React from 'react';

export default function NeoCard({ children, className = '', hoverEffect = true, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl p-6 transition-all duration-300 ${
        hoverEffect 
          ? 'shadow-neo-float hover:shadow-neo-float-hover hover:-translate-y-1' 
          : 'shadow-neo-float'
      } ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </div>
  );
}