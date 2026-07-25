import React, { useState } from 'react';
import { Plus, Trash2, Globe, CheckCircle2, Save, Tag, Clock, FileText, Check } from 'lucide-react';

export default function ManagePackages() {
  // ১. ডাইনামিক কান্ট্রি লিস্ট (অ্যাডমিন চাইলে নতুন দেশ যুক্ত করতে পারবে)
  const [countries, setCountries] = useState([
    { name: "United Kingdom", flag: "🇬🇧" },
    { name: "Schengen Area", flag: "🇪🇺" },
    { name: "Japan", flag: "🇯🇵" },
    { name: "Canada", flag: "🇨🇦" },
    { name: "Australia", flag: "🇦🇺" },
    { name: "Malaysia", flag: "🇲🇾" },
    { name: "Finland", flag: "🇫🇮" },
    { name: "Germany", flag: "🇩🇪" }
  ]);
  const [showNewCountryInput, setShowNewCountryInput] = useState(false);
  const [customCountry, setCustomCountry] = useState('');

  // ২. লাইভ প্যাকেজ স্টেট (বিস্তারিত ডেসক্রিপশনসহ)
  const [packages, setPackages] = useState([
    { 
      id: "1", 
      country: "United Kingdom", 
      flag: "🇬🇧",
      title: "UK Direct 3rd Year Entry via OTHM Diploma", 
      badge: "Save 50% Tuition", 
      intake: "September / January", 
      price: "Special Credit Transfer Pack",
      desc: "বাংলাদেশে আমাদের ইনস্টিটিউটে লেভেল ৪ ও ৫ শেষ করে ইউকের সেরা ইউনিভার্সিটিতে সরাসরি ফাইনাল ইয়ারে ভর্তি। সাথে থাকছে ২ বছরের ফুল-টাইম ওয়ার্ক ভিসা।" 
    },
    { 
      id: "2", 
      country: "Schengen Area", 
      flag: "🇪🇺",
      title: "Europe 29 Countries Study & Job Search Package", 
      badge: "Free Tuition in Germany", 
      intake: "Winter & Summer", 
      price: "Low Bank Show & High Ratio",
      desc: "জার্মানি, ফিনল্যান্ড বা মাল্টায় সম্পূর্ণ ফ্রি বা স্বল্প খরচে পড়াশোনা। ২৯টি ইউরোপীয় দেশে কোনো বর্ডার ছাড়াই অবাধ যাতায়াত এবং পড়াশোনা শেষে ১৮ মাসের দীর্ঘ জব সার্চ পারমিট।" 
    },
  ]);

  // ৩. নতুন প্যাকেজের স্টেট
  const [newPkg, setNewPkg] = useState({ 
    country: 'United Kingdom', 
    flag: '🇬🇧',
    title: '', 
    badge: 'Special Offer', 
    intake: 'September / January', 
    price: 'Scholarship Available',
    desc: '' 
  });
  const [successMsg, setSuccessMsg] = useState('');

  // কান্ট্রি সিলেক্ট লজিক
  const handleCountrySelect = (e) => {
    const val = e.target.value;
    if (val === "ADD_NEW") {
      setShowNewCountryInput(true);
    } else {
      const selectedObj = countries.find(c => c.name === val);
      setNewPkg({ ...newPkg, country: val, flag: selectedObj ? selectedObj.flag : '🌐' });
    }
  };

  // নতুন কান্ট্রি সেভ লজিক
  const handleAddNewCountry = (e) => {
    e.preventDefault();
    if (customCountry.trim() !== '') {
      const newObj = { name: customCountry.trim(), flag: '🌐' };
      setCountries([...countries, newObj]);
      setNewPkg({ ...newPkg, country: customCountry.trim(), flag: '🌐' });
      setCustomCountry('');
      setShowNewCountryInput(false);
    }
  };

  const handleAddPackage = (e) => {
    e.preventDefault();
    if (!newPkg.title) return;

    const created = { ...newPkg, id: Date.now().toString() };
    setPackages([created, ...packages]);
    setNewPkg({ country: 'United Kingdom', flag: '🇬🇧', title: '', badge: 'Special Offer', intake: 'September / January', price: 'Scholarship Available', desc: '' });
    
    setSuccessMsg('বিস্তারিত তথ্যসহ নতুন স্টাডি প্যাকেজ সফলভাবে যুক্ত হয়েছে ও লাইভ হয়েছে!');
    setTimeout(() => setSuccessMsg(''), 4000);
  };

  const handleDelete = (id) => {
    if (window.confirm("আপনি কি নিশ্চিতভাবে এই প্যাকেজটি ডিলিট করতে চান?")) {
      setPackages(packages.filter(p => p.id !== id));
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Top Banner */}
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-black text-white flex items-center gap-2">
            <Globe className="text-blue-400" /> Manage Study Abroad Packages
          </h3>
          <p className="text-xs text-slate-400 mt-1">ইউকে, ইউরোপ, জাপান ও কানাডার স্পেশাল স্টাডি ও ভিসা প্যাকেজ লাইভ কন্ট্রোল করুন।</p>
        </div>
        <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap">
          {packages.length} Active Packages
        </span>
      </div>

      {successMsg && (
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center space-x-3 text-emerald-400 text-xs font-bold animate-bounce">
          <CheckCircle2 size={18} className="flex-shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* ================= 5 COLS: ADD PACKAGE FORM ================= */}
        <div className="lg:col-span-5 bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-4 shadow-xl">
          <h4 className="text-sm font-black text-white uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 pb-3">
            <Plus size={16} className="text-emerald-400" /> Add New Package
          </h4>
          
          <form onSubmit={handleAddPackage} className="space-y-3.5 pt-1">
            
            {/* কান্ট্রি ড্রপডাউন ও কাস্টম অ্যাড অপশন */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-bold text-slate-300">Target Country *</label>
                <button 
                  type="button" 
                  onClick={() => setShowNewCountryInput(!showNewCountryInput)} 
                  className="text-[10px] font-extrabold text-emerald-400 hover:underline flex items-center gap-0.5"
                >
                  <Plus size={12} /> {showNewCountryInput ? "Cancel" : "Add Custom Country"}
                </button>
              </div>

              {showNewCountryInput ? (
                <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-xl border border-emerald-500/50">
                  <input 
                    type="text" 
                    placeholder="নতুন দেশের নাম লিখুন..." 
                    value={customCountry} 
                    onChange={e => setCustomCountry(e.target.value)} 
                    className="w-full px-3 py-1.5 rounded-lg bg-transparent text-xs font-semibold text-white focus:outline-none" 
                  />
                  <button 
                    type="button" 
                    onClick={handleAddNewCountry} 
                    className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold flex items-center gap-1 shrink-0"
                  >
                    <Check size={14} /> Add
                  </button>
                </div>
              ) : (
                <select 
                  value={newPkg.country} 
                  onChange={handleCountrySelect} 
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer"
                >
                  {countries.map((c, i) => (
                    <option key={i} value={c.name}>{c.flag} {c.name}</option>
                  ))}
                  <option value="ADD_NEW" className="text-emerald-400 font-bold">➕ + Add New Country...</option>
                </select>
              )}
            </div>

            {/* প্যাকেজ টাইটেল */}
            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">Package Title *</label>
              <input type="text" required placeholder="e.g. UK Direct 3rd Year Entry via OTHM" value={newPkg.title} onChange={e => setNewPkg({...newPkg, title: e.target.value})} className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition" />
            </div>

            {/* ব্যাজ ও ইনটেক */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Badge Highlight</label>
                <input type="text" placeholder="e.g. Save 50% Tuition" value={newPkg.badge} onChange={e => setNewPkg({...newPkg, badge: e.target.value})} className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition" />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Available Intake</label>
                <input type="text" placeholder="e.g. Sep / Jan Intake" value={newPkg.intake} onChange={e => setNewPkg({...newPkg, intake: e.target.value})} className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition" />
              </div>
            </div>

            {/* প্রাইস বা অফার ইনফো */}
            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">Key Offer / Price Info</label>
              <input type="text" placeholder="e.g. Special Credit Transfer Pack" value={newPkg.price} onChange={e => setNewPkg({...newPkg, price: e.target.value})} className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition" />
            </div>

            {/* নতুন: বিস্তারিত ডেসক্রিপশন */}
            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">Detailed Description *</label>
              <textarea rows="3" required placeholder="প্যাকেজের মূল সুবিধা, ওয়ার্ক পারমিট ও সম্ভাবনার বিস্তারিত বিবরণ লিখুন..." value={newPkg.desc} onChange={e => setNewPkg({...newPkg, desc: e.target.value})} className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-medium text-white focus:outline-none focus:ring-2 focus:ring-blue-600 leading-relaxed transition"></textarea>
            </div>

            <button type="submit" className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-xs transition shadow-lg shadow-emerald-600/25 flex items-center justify-center space-x-2 mt-3 cursor-pointer active:scale-98">
              <Save size={16} />
              <span>Publish Package to Website</span>
            </button>
          </form>
        </div>

        {/* ================= 7 COLS: LIVE PACKAGE LIST ================= */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between px-1">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Active Study Abroad Packages</h4>
            <span className="text-[11px] font-bold text-emerald-400">Live Website Sync</span>
          </div>

          <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
            {packages.map((p) => (
              <div key={p.id} className="p-4 bg-slate-900 border border-slate-800 rounded-2xl flex items-start justify-between gap-4 hover:border-slate-700 transition shadow-sm group">
                
                <div className="space-y-1.5 min-w-0">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-black uppercase text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded flex items-center gap-1">
                      <span>{p.flag}</span> <span>{p.country}</span>
                    </span>
                    <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">★ {p.badge}</span>
                  </div>
                  
                  <h5 className="font-bold text-sm text-white truncate group-hover:text-emerald-400 transition-colors">{p.title}</h5>
                  <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">{p.desc}</p>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 pt-1">
                    <span className="flex items-center font-bold text-blue-300"><Tag size={12} className="mr-1 text-blue-400"/> {p.price}</span>
                    <span className="flex items-center"><Clock size={12} className="mr-1 text-emerald-400"/> Intake: {p.intake}</span>
                  </div>
                </div>

                <button onClick={() => handleDelete(p.id)} className="p-2.5 rounded-xl bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white transition border border-red-500/20 cursor-pointer flex-shrink-0" title="Delete Package">
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}