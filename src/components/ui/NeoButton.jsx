import React from 'react';

export default function NeoButton({
  children,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  disabled = false
}) {
  const baseStyles = "px-6 py-3 rounded-xl font-semibold transition-all duration-200 active:scale-95 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-neo-btn hover:from-blue-700 hover:to-indigo-700",
    secondary: "bg-white/50 backdrop-blur-md border border-white/70 text-slate-700 shadow-neo-float hover:bg-white/70",
    inset: "bg-white/80 text-blue-600 shadow-neo-inset border border-white/40 font-bold",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
    >
      {children}
    </button>
  );
}