import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { lang, toggleLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation Items without special highlighting
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Study Abroad', path: '/study-abroad' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about-us' },
    { name: 'NSDA Free Course', path: '/nsda-free-course' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-4 sm:pt-5 px-4 sm:px-6 lg:px-8 pointer-events-none">
      
      {/* Floating Glass Pill Container */}
      <nav className={`max-w-6xl mx-auto pointer-events-auto transition-all duration-300 rounded-full px-5 py-2.5 flex items-center justify-between border ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-xl border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.08)]' 
          : 'bg-white/60 backdrop-blur-lg border-white/60 shadow-[0_8px_24px_rgba(165,175,190,0.25)]'
      }`}>
        
        {/* 👇 Logo Section with Bold & Aesthetic CAREERLIFT Text */}
        <Link to="/" className="flex items-center space-x-2.5 cursor-pointer pl-1 group">
          <img 
            src="/careerlift-logo.png" 
            alt="CareerLift" 
            className="h-8 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
          <span className="text-base sm:text-xl font-black tracking-widest text-slate-900 group-hover:text-blue-600 transition-colors leading-none font-sans">
            CAREER<span className="text-blue-600 group-hover:text-slate-900 transition-colors">LIFT</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-1 bg-slate-200/50 p-1 rounded-full border border-white/60 backdrop-blur-md">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`px-3.5 py-1.5 rounded-full font-medium text-xs xl:text-sm transition-all duration-300 ${
                isActive(item.path)
                  ? 'bg-white text-blue-600 shadow-[0_2px_8px_rgba(0,0,0,0.08)] font-semibold scale-100'
                  : 'text-slate-600 hover:text-blue-600 hover:bg-white/40 scale-95 hover:scale-100'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Side: Language Switcher & Action Button */}
        <div className="hidden lg:flex items-center space-x-3 pr-1">
          {/* Language Toggle Button */}
          <button 
            onClick={toggleLang}
            className="px-3.5 py-1.5 rounded-full bg-white/70 border border-white/80 text-slate-700 font-bold text-xs shadow-sm hover:bg-white transition flex items-center space-x-1"
          >
            <span className={lang === 'EN' ? 'text-blue-600 underline' : 'text-slate-400'}>EN</span>
            <span>/</span>
            <span className={lang === 'BN' ? 'text-blue-600 underline' : 'text-slate-400'}>বাংলা</span>
          </button>

          <Link 
            to="/courses"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-xs xl:text-sm shadow-[0_4px_12px_rgba(79,70,229,0.3)] hover:shadow-[0_6px_16px_rgba(79,70,229,0.4)] hover:scale-105 active:scale-95 transition-all duration-200 inline-block"
          >
            Explore Courses
          </Link>
        </div>

        {/* Mobile Menu Toggle Button & Lang Switcher for Mobile */}
        <div className="lg:hidden flex items-center space-x-2">
          <button 
            onClick={toggleLang}
            className="px-3 py-1.5 rounded-full bg-white/80 border border-white/80 text-slate-700 font-bold text-xs shadow-sm"
          >
            {lang === 'EN' ? 'EN' : 'বাংলা'}
          </button>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-full bg-white/70 border border-white/80 text-slate-700 flex items-center justify-center shadow-sm active:scale-95 transition"
            aria-label="Toggle Menu"
          >
            <span className="text-lg leading-none">{mobileMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden pointer-events-auto max-w-md mx-auto mt-3 p-4 bg-white/90 backdrop-blur-2xl border border-white/80 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] flex flex-col space-y-1.5 animate-fadeIn">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-left px-5 py-3 rounded-2xl font-medium text-sm transition ${
                isActive(item.path)
                  ? 'bg-blue-600 text-white font-semibold shadow-md'
                  : 'text-slate-700 hover:bg-white/80'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-3 border-t border-slate-200/60 mt-1">
            <Link 
              to="/courses"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm shadow-md flex items-center justify-center"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}