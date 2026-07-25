import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, BookOpen, Globe, LogOut, ShieldCheck, 
  Users, TrendingUp, Bell, Menu, X, Sparkles, CheckCircle2, 
  Activity, Database, Layers, ArrowUpRight, Clock
} from 'lucide-react';

// সাব-কম্পোনেন্টগুলো ইম্পোর্ট করা হচ্ছে
import ManageCourses from './ManageCourses';
import ManagePackages from './ManagePackages';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [adminUser, setAdminUser] = useState('Admin');
  const navigate = useNavigate();

  // 🔐 সিকিউরিটি চেক
  useEffect(() => {
    const token = sessionStorage.getItem('careerlift_admin_auth');
    const user = sessionStorage.getItem('careerlift_admin_user');
    if (!token) {
      navigate('/admin-portal-login');
    } else if (user) {
      setAdminUser(user.split('@')[0].toUpperCase());
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem('careerlift_admin_auth');
    sessionStorage.removeItem('careerlift_admin_user');
    navigate('/admin-portal-login');
  };

  const menuItems = [
    { id: 'overview', label: 'Command Center', icon: <LayoutDashboard size={18} /> },
    { id: 'courses', label: 'Manage Courses (CMS)', icon: <BookOpen size={18} /> },
    { id: 'packages', label: 'Study Abroad Matrix', icon: <Globe size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-[#090A0F] text-zinc-100 flex font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* ================= 1. PREMIUM SIDEBAR ================= */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-[#0D0E15] border-r border-zinc-800/80 flex flex-col justify-between transition-transform duration-300 lg:translate-x-0 lg:static ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        
        {/* Top Brand Area (Transparent Logo Optimized) */}
        <div className="p-6 border-b border-zinc-800/80 flex items-center justify-between bg-[#12141C]/50">
          <div className="flex items-center space-x-3.5">
            <div className="p-2 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-inner flex items-center justify-center">
              <img src="/careerlift-logo.png" alt="Logo" className="h-8 w-auto object-contain drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
            </div>
            <div>
              <span className="text-sm font-black tracking-widest text-white block leading-none">CAREERLIFT</span>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-indigo-400 block mt-1.5 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping"></span> Enterprise OS
              </span>
            </div>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-zinc-400 hover:text-white">
            <X size={20} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-4 space-y-2 flex-grow overflow-y-auto">
          <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500 px-3 pb-2 pt-2">Core Modules</div>
          {menuItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => { setActiveTab(item.id); setSidebarOpen(false); }}
                className={`w-full flex items-center space-x-3 px-4 py-3.5 rounded-2xl font-bold text-xs sm:text-sm transition-all cursor-pointer group ${
                  isActive 
                    ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-[0_4px_20px_rgba(99,102,241,0.35)] scale-[1.02]' 
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900/80'
                }`}
              >
                <span className={`${isActive ? 'text-white' : 'text-indigo-400 group-hover:text-white'} transition-colors`}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* System Health Widget */}
        <div className="p-4 mx-4 mb-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-2">
          <div className="flex items-center justify-between text-[11px] font-bold text-zinc-400">
            <span>API Latency</span>
            <span className="text-emerald-400 font-mono">24ms</span>
          </div>
          <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 rounded-full w-[94%] animate-pulse"></div>
          </div>
          <span className="text-[9px] font-semibold text-zinc-500 block">Google Sheets Database Linked</span>
        </div>

        {/* Bottom Profile & Logout */}
        <div className="p-4 border-t border-zinc-800/80 bg-[#12141C]/80 space-y-3">
          <div className="flex items-center space-x-3 px-2">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 via-violet-600 to-cyan-500 flex items-center justify-center text-white font-black text-xs shadow-lg">
              {adminUser.slice(0, 2)}
            </div>
            <div className="overflow-hidden">
              <h4 className="text-xs font-black text-white truncate">{adminUser}</h4>
              <span className="text-[10px] font-semibold text-emerald-400 flex items-center gap-1">
                <ShieldCheck size={12} /> Secure Auth
              </span>
            </div>
          </div>

          <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-600 text-rose-400 hover:text-white font-bold text-xs transition border border-rose-500/20 cursor-pointer shadow-sm"
          >
            <LogOut size={15} />
            <span>Terminate Session</span>
          </button>
        </div>

      </aside>

      {/* ================= 2. MAIN CONTENT AREA ================= */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#090A0F]">
        
        {/* Top Navbar */}
        <header className="h-20 bg-[#0D0E15]/80 backdrop-blur-xl border-b border-zinc-800/80 px-4 sm:px-8 flex items-center justify-between sticky top-0 z-40">
          <div className="flex items-center space-x-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-zinc-400 hover:text-white p-2 rounded-xl bg-zinc-900 border border-zinc-800">
              <Menu size={20} />
            </button>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 block">Executive Workspace</span>
              <h2 className="text-base sm:text-xl font-black text-white uppercase tracking-wider flex items-center gap-2">
                <span>{menuItems.find(i => i.id === activeTab)?.label}</span>
              </h2>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold shadow-inner">
              <Activity size={14} className="animate-spin-slow" />
              <span>Live System Operational</span>
            </div>

            <div className="w-10 h-10 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white transition cursor-pointer relative" title="Notifications">
              <Bell size={18} />
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-indigo-500"></span>
            </div>
          </div>
        </header>

        {/* Dynamic View Rendering */}
        <main className="flex-1 p-4 sm:p-8 overflow-y-auto">
          
          {/* TAB 1: OVERVIEW / COMMAND CENTER */}
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-fadeIn">
              
              {/* Premium Hero Banner */}
              <div className="bg-gradient-to-r from-indigo-950/80 via-[#12141C] to-zinc-900 border border-indigo-500/30 rounded-3xl p-6 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
                
                <div className="space-y-3 relative z-10">
                  <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-bold tracking-wide">
                    <Sparkles size={14} className="text-cyan-400" />
                    <span>CareerLift Intelligence Hub</span>
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                    Central Management System
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl leading-relaxed font-medium">
                    ওয়েবসাইটের লাইভ কোর্স ক্যাটালগ, আন্তর্জাতিক স্টাডি অ্যাব্রোড প্যাকেজ এবং গুগল শিট লিড ডেটাবেস এখান থেকে রিয়েল-টাইমে পরিচালিত হচ্ছে।
                  </p>
                </div>

                <div className="flex items-center gap-3 relative z-10 w-full lg:w-auto">
                  <a 
                    href="/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 lg:flex-none px-5 py-3.5 rounded-2xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs border border-zinc-700 transition flex items-center justify-center space-x-2 shadow-md"
                  >
                    <span>Visit Live Site</span>
                    <ArrowUpRight size={16} className="text-indigo-400" />
                  </a>
                </div>
              </div>

              {/* Interactive Quick Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                
                <div className="bg-[#0D0E15] border border-zinc-800/80 p-6 rounded-3xl space-y-3 hover:border-indigo-500/40 transition group">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-widest text-zinc-400">Active Courses</span>
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform">
                      <BookOpen size={20} />
                    </div>
                  </div>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-black text-white font-mono">06</span>
                    <span className="text-xs font-bold text-emerald-400 flex items-center">
                      <ArrowUpRight size={14} /> +12% this month
                    </span>
                  </div>
                  <span className="text-[11px] text-zinc-500 font-medium block">NSDA & Skill Academy Catalog</span>
                </div>

                <div className="bg-[#0D0E15] border border-zinc-800/80 p-6 rounded-3xl space-y-3 hover:border-cyan-500/40 transition group">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-widest text-zinc-400">Global Packages</span>
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                      <Globe size={20} />
                    </div>
                  </div>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-black text-white font-mono">04</span>
                    <span className="text-xs font-bold text-cyan-400 flex items-center">
                      <ArrowUpRight size={14} /> Synced
                    </span>
                  </div>
                  <span className="text-[11px] text-zinc-500 font-medium block">UK, Europe, Japan & Canada</span>
                </div>

                <div className="bg-[#0D0E15] border border-zinc-800/80 p-6 rounded-3xl space-y-3 hover:border-emerald-500/40 transition group">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-widest text-zinc-400">Database Status</span>
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
                      <Database size={20} />
                    </div>
                  </div>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-2xl font-black text-emerald-400 flex items-center gap-1.5 mt-1 font-mono">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span> ONLINE
                    </span>
                  </div>
                  <span className="text-[11px] text-zinc-500 font-medium block">Google Apps Script API Connected</span>
                </div>

              </div>

              {/* Quick Activity Log Section */}
              <div className="bg-[#0D0E15] border border-zinc-800/80 p-6 sm:p-8 rounded-3xl space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                  <h4 className="text-sm font-black text-white uppercase tracking-wider flex items-center gap-2">
                    <Activity size={16} className="text-indigo-400" /> System Audit & Recent Actions
                  </h4>
                  <span className="text-xs font-bold text-zinc-500 flex items-center gap-1">
                    <Clock size={14} /> Real-time feed
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      <span className="text-zinc-300 font-medium">Course database successfully synced with frontend components.</span>
                    </div>
                    <span className="text-zinc-500 font-mono text-[10px]">Just now</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                      <span className="text-zinc-300 font-medium">Admin session authenticated via secure token protocol.</span>
                    </div>
                    <span className="text-zinc-500 font-mono text-[10px]">Today, 02:23 PM</span>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: MANAGE COURSES */}
          {activeTab === 'courses' && <ManageCourses />}

          {/* TAB 3: MANAGE PACKAGES */}
          {activeTab === 'packages' && <ManagePackages />}

        </main>

      </div>

    </div>
  );
}