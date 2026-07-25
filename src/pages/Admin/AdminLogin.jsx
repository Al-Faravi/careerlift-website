import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Lock, User, ArrowRight, AlertCircle, Sparkles } from 'lucide-react';

export default function AdminLogin() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // 🔐 সিকিউর অ্যাডমিন ক্রেডেনশিয়াল (পরবর্তীতে .env ফাইলে রাখা যাবে)
  const ADMIN_USER = "admin@careerlift";
  const ADMIN_PASS = "CL-ADMIN-2026";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      if (credentials.username === ADMIN_USER && credentials.password === ADMIN_PASS) {
        // সফল লগিনে সেশন টোকেন সেভ করা হচ্ছে
        sessionStorage.setItem('careerlift_admin_auth', 'VERIFIED_SESSION_TOKEN');
        sessionStorage.setItem('careerlift_admin_user', credentials.username);
        navigate('/admin-dashboard');
      } else {
        setError('ভুল ইউজারনেম অথবা পাসওয়ার্ড! আবার চেষ্টা করুন।');
        setLoading(false);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl relative z-10 space-y-8">
        
        {/* Header & Brand */}
        <div className="text-center space-y-3">
          <div className="w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center mx-auto shadow-inner">
            <Lock size={32} />
          </div>
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-[11px] font-bold tracking-wider uppercase">
            <Sparkles size={12} className="text-amber-400" />
            <span>CareerLift Admin Portal</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Executive Login
          </h1>
          <p className="text-xs text-slate-400 font-medium">
            শুধুমাত্র অনুমোদিত প্রশাসনিক কর্মকর্তাদের প্রবেশের জন্য সংরক্ষিত।
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center space-x-3 text-red-400 text-xs font-bold animate-shake">
            <AlertCircle size={18} className="flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300 block">Username / Email</label>
            <div className="relative">
              <input 
                type="text" 
                name="username" 
                required 
                value={credentials.username} 
                onChange={handleInputChange} 
                placeholder="admin@careerlift" 
                className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm font-semibold text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-600 transition" 
              />
              <User size={18} className="absolute left-3.5 top-3.5 text-slate-500" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300 block">Security PIN / Password</label>
            <div className="relative">
              <input 
                type="password" 
                name="password" 
                required 
                value={credentials.password} 
                onChange={handleInputChange} 
                placeholder="••••••••••••" 
                className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm font-semibold text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-600 transition" 
              />
              <Lock size={18} className="absolute left-3.5 top-3.5 text-slate-500" />
            </div>
          </div>

          <div className="pt-2">
            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-98 text-white font-black text-sm transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center space-x-2 disabled:opacity-50 cursor-pointer"
            >
              <span>{loading ? 'Verifying Credentials...' : 'Access Dashboard →'}</span>
            </button>
          </div>
        </form>

        {/* Footer Info */}
        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-bold text-slate-500">
          <span className="flex items-center space-x-1">
            <ShieldCheck size={14} className="text-emerald-500" />
            <span>256-bit Encrypted</span>
          </span>
          <span>© 2026 CareerLift</span>
        </div>

      </div>
    </div>
  );
}