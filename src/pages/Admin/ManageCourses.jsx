import React, { useState } from 'react';
import { 
  Plus, Trash2, Save, BookOpen, CheckCircle2, Clock, Star, DollarSign, 
  Upload, Check, FileText, ListChecks, User, Layers, Sparkles, X
} from 'lucide-react';

export default function ManageCourses() {
  // ১. ডাইনামিক ক্যাটাগরি লিস্ট
  const [categories, setCategories] = useState([
    "Healthcare & Beauty",
    "IT Skills & Computer Operation",
    "Caregiving & Nursing",
    "Language & Communication",
    "Corporate HSE & Safety"
  ]);
  const [showNewCatInput, setShowNewCatInput] = useState(false);
  const [customCategory, setCustomCategory] = useState('');

  // ২. ফর্মের জন্য ৩-ট্যাব নেভিগেশন (যাতে ফর্ম হিজিবিজি না হয়)
  const [activeFormTab, setActiveFormTab] = useState('basic'); // 'basic' | 'details' | 'syllabus'

  // ৩. লাইভ কোর্স স্টেট (বিস্তারিত ডেটাসহ)
  const [courses, setCourses] = useState([
    { 
      id: "10", 
      category: "Healthcare & Beauty", 
      title: "Day-long Primary Healthcare, First Aid & CPR", 
      subtitle: "হ্যান্ডস-অন ক্লিনিক্যাল প্র্যাকটিস ও ইমার্জেন্সি রেসপন্স স্কিল ডেভেলপমেন্ট",
      duration: "1 Day (10 AM - 5 PM)", 
      rating: "5.0", 
      tag: "Certificate Included", 
      price: "Free / Sponsored", 
      image: "/Day long Primary Healthcare.png",
      overview: "এই দিনব্যাপী কর্মশালায় অংশগ্রহণকারীরা বিশেষজ্ঞ চিকিৎসকদের তত্ত্বাবধানে সরাসরি ডামির (Dummy) ওপর সিপিআর (CPR), ফার্স্ট এইড, রক্তচাপ পরিমাপ, ক্যানুলা ও ইনজেকশন ব্যবহারের প্র্যাক্টিক্যাল প্রশিক্ষণ পাবেন। এটি হাসপাতাল, ক্লিনিক এবং কর্পোরেট জবের ক্ষেত্রে আপনাকে এগিয়ে রাখবে।",
      eligibility: "এইচএসসি পাশ, নার্সিং বা হেলথকেয়ারে আগ্রহী যেকোনো শিক্ষার্থী বা প্রফেশনাল।",
      outcomes: [
        "সরাসরি ডামির ওপর হাতে-কলমে CPR ও ফার্স্ট এইড প্র্যাকটিস",
        "জরুরি মুহূর্তে রোগীর পালস, ব্লাড প্রেসার ও অক্সিজেন লেভেল পরিমাপ",
        "হাসপাতেল বা ক্লিনিক্যাল জবের জন্য বিশেষ অগ্রাধিকার ও সরকারি সনদ"
      ],
      curriculum: [
        { title: "Module 1: Basic First Aid & Vital Signs", desc: "শারীরিক প্রাথমিক লক্ষণ (Vital Signs) শনাক্তকরণ এবং প্রাথমিক চিকিৎসা।" },
        { title: "Module 2: Hands-on CPR & Emergency Drill", desc: "হৃদরোগ বা ইমার্জেন্সিতে ডামির ওপর সিপিআর (CPR) প্রয়োগ ও কৃত্রিম শ্বাসপ্রশ্বাস প্রদান।" }
      ],
      instructorName: "Dr. Expert Clinical Faculty",
      instructorRole: "Senior Medical Officer & Specialist Trainer"
    }
  ]);

  // ৪. নতুন কোর্সের সম্পূর্ণ স্টেট (ডিটেইলস ফিল্ডসহ)
  const [newCourse, setNewCourse] = useState({
    category: 'Healthcare & Beauty',
    title: '',
    subtitle: '',
    duration: '3 Months',
    rating: '5.0',
    tag: 'NSDA Certified',
    price: 'Free',
    image: '',
    imageFile: null,
    overview: '',
    eligibility: 'ন্যূনতম এসএসসি/এইচএসসি পাশ অথবা শেখার প্রবল আগ্রহ।',
    outcomes: ['হাতে-কলমে ১০০% ব্যবহারিক ল্যাব সুবিধা', 'সরকারি ও রাষ্ট্রীয় স্বীকৃতিপ্রাপ্ত সার্টিফিকেট প্রদান'],
    curriculum: [
      { title: 'Module 1: Introduction & Basic Fundamentals', desc: 'কোর্সের প্রাথমিক ধারণা ও বেসিক থিওরি ক্লাস।' },
      { title: 'Module 2: Practical Lab Session & Live Drill', desc: 'আধুনিক ল্যাবে বিশেষজ্ঞ প্রশিক্ষকের তত্ত্বাবধানে ব্যবহারিক অনুশীলন।' }
    ],
    instructorName: 'Senior Certified Faculty',
    instructorRole: 'Head Coordinator & Lead Trainer'
  });
  
  const [imagePreview, setImagePreview] = useState(null);
  const [successMsg, setSuccessMsg] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  // ছবি সিলেক্ট করলে প্রিভিউ দেখানোর লজিক
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewCourse({ ...newCourse, imageFile: file, image: file.name });
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // নতুন ক্যাটাগরি সেভ করার লজিক
  const handleAddNewCategory = (e) => {
    e.preventDefault();
    if (customCategory.trim() !== '') {
      setCategories([...categories, customCategory.trim()]);
      setNewCourse({ ...newCourse, category: customCategory.trim() });
      setCustomCategory('');
      setShowNewCatInput(false);
    }
  };

  // ডাইনামিক Outcomes (বুলেট পয়েন্ট) যুক্ত ও ডিলিট করা
  const handleOutcomeChange = (index, value) => {
    const updated = [...newCourse.outcomes];
    updated[index] = value;
    setNewCourse({ ...newCourse, outcomes: updated });
  };
  const addOutcome = () => setNewCourse({ ...newCourse, outcomes: [...newCourse.outcomes, ''] });
  const removeOutcome = (index) => setNewCourse({ ...newCourse, outcomes: newCourse.outcomes.filter((_, i) => i !== index) });

  // ডাইনামিক Curriculum (সিলেবাস মডিউল) যুক্ত ও ডিলিট করা
  const handleCurriculumChange = (index, field, value) => {
    const updated = [...newCourse.curriculum];
    updated[index][field] = value;
    setNewCourse({ ...newCourse, curriculum: updated });
  };
  const addModule = () => setNewCourse({ ...newCourse, curriculum: [...newCourse.curriculum, { title: `Module ${newCourse.curriculum.length + 1}: New Topic`, desc: '' }] });
  const removeModule = (index) => setNewCourse({ ...newCourse, curriculum: newCourse.curriculum.filter((_, i) => i !== index) });

  // কোর্স পাবলিশ করার লজিক
  const handleAddCourse = (e) => {
    e.preventDefault();
    if (!newCourse.title) {
      alert("দয়া করে কোর্সের টাইটেল লিখুন!");
      setActiveFormTab('basic');
      return;
    }

    setIsUploading(true);

    setTimeout(() => {
      const created = { 
        ...newCourse, 
        id: Date.now().toString(),
        image: imagePreview || 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80'
      };
      
      setCourses([created, ...courses]);
      
      // ফর্ম রিসেট
      setNewCourse({
        category: 'Healthcare & Beauty', title: '', subtitle: '', duration: '3 Months', rating: '5.0', tag: 'NSDA Certified', price: 'Free', image: '', imageFile: null, overview: '', eligibility: 'ন্যূনতম এসএসসি/এইচএসসি পাশ অথবা শেখার প্রবল আগ্রহ।', outcomes: ['হাতে-কলমে ১০০% ব্যবহারিক ল্যাব সুবিধা', 'সরকারি ও রাষ্ট্রীয় স্বীকৃতিপ্রাপ্ত সার্টিফিকেট প্রদান'], curriculum: [{ title: 'Module 1: Introduction & Fundamentals', desc: '' }], instructorName: 'Senior Certified Faculty', instructorRole: 'Head Coordinator'
      });
      setImagePreview(null);
      setIsUploading(false);
      setActiveFormTab('basic');
      
      setSuccessMsg('সম্পূর্ণ বিস্তারিত সিলেবাসসহ নতুন কোর্স সফলভাবে ওয়েবসাইটে পাবলিশ হয়েছে!');
      setTimeout(() => setSuccessMsg(''), 5000);
    }, 1000);
  };

  const handleDelete = (id) => {
    if (window.confirm("আপনি কি নিশ্চিতভাবে এই কোর্সটি ডিলিট করতে চান?")) {
      setCourses(courses.filter(c => c.id !== id));
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Top Banner */}
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-black text-white flex items-center gap-2">
            <BookOpen className="text-emerald-400" /> Manage Comprehensive Courses
          </h3>
          <p className="text-xs text-slate-400 mt-1">কোর্সের ছবি, বিস্তারিত বিবরণ, সিলেবাস ও প্রশিক্ষক তথ্য এখান থেকে লাইভ কন্ট্রোল করুন।</p>
        </div>
        <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap">
          {courses.length} Active Courses
        </span>
      </div>

      {successMsg && (
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center space-x-3 text-emerald-400 text-xs font-bold animate-bounce">
          <CheckCircle2 size={18} className="flex-shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Grid Layout: 6 Cols for Form, 6 Cols for Catalog */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* ================= 6 COLS: COMPREHENSIVE COURSE FORM ================= */}
        <div className="lg:col-span-6 bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-5 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider flex items-center gap-2">
              <Plus size={16} className="text-blue-400" /> Add New Course
            </h4>
            <span className="text-[10px] text-slate-500 font-bold">3-Step CMS Form</span>
          </div>

          {/* 🎯 স্মার্ট ৩-ট্যাব নেভিগেশন বার */}
          <div className="grid grid-cols-3 gap-1 bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
            <button 
              type="button" onClick={() => setActiveFormTab('basic')}
              className={`py-2 rounded-xl text-xs font-black transition flex items-center justify-center gap-1.5 cursor-pointer ${activeFormTab === 'basic' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
            >
              <FileText size={14} /> <span>1. Basic & Image</span>
            </button>
            <button 
              type="button" onClick={() => setActiveFormTab('details')}
              className={`py-2 rounded-xl text-xs font-black transition flex items-center justify-center gap-1.5 cursor-pointer ${activeFormTab === 'details' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
            >
              <ListChecks size={14} /> <span>2. Overview & Outcomes</span>
            </button>
            <button 
              type="button" onClick={() => setActiveFormTab('syllabus')}
              className={`py-2 rounded-xl text-xs font-black transition flex items-center justify-center gap-1.5 cursor-pointer ${activeFormTab === 'syllabus' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
            >
              <Layers size={14} /> <span>3. Syllabus & Faculty</span>
            </button>
          </div>
          
          <form onSubmit={handleAddCourse} className="space-y-4 pt-1">
            
            {/* ================= TAB 1: BASIC & IMAGE ================= */}
            {activeFormTab === 'basic' && (
              <div className="space-y-4 animate-fadeIn">
                {/* ইমেজ আপলোড */}
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1.5">Course Thumbnail / Image *</label>
                  <div className="relative border-2 border-dashed border-slate-700 hover:border-blue-500 rounded-2xl p-4 transition text-center bg-slate-950/50 group cursor-pointer">
                    <input type="file" accept="image/*" onChange={handleImageChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                    {imagePreview ? (
                      <div className="relative h-32 w-full rounded-xl overflow-hidden shadow-md">
                        <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-xs font-bold">ছবি পরিবর্তন করতে ক্লিক করুন</div>
                      </div>
                    ) : (
                      <div className="py-3 space-y-1">
                        <div className="w-9 h-9 rounded-full bg-slate-800 text-blue-400 flex items-center justify-center mx-auto group-hover:scale-110 transition"><Upload size={16} /></div>
                        <div className="text-xs font-bold text-slate-300">ছবি আপলোড করতে ক্লিক করুন বা টেনে আনুন</div>
                        <p className="text-[10px] text-slate-500">Direct to Google Drive (PNG, JPG, WEBP)</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* টাইটেল ও সাবটাইটেল */}
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Course Title *</label>
                  <input type="text" required placeholder="e.g. Caregiving Level 3" value={newCourse.title} onChange={e => setNewCourse({...newCourse, title: e.target.value})} className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-600" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Short Subtitle (One-liner)</label>
                  <input type="text" placeholder="e.g. জাপান ও দেশীয় হাসপাতালের উপযোগী সরকারি সার্টিফিকেট কোর্স" value={newCourse.subtitle} onChange={e => setNewCourse({...newCourse, subtitle: e.target.value})} className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-600" />
                </div>

                {/* ক্যাটাগরি */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-bold text-slate-300">Category *</label>
                    <button type="button" onClick={() => setShowNewCatInput(!showNewCatInput)} className="text-[10px] font-extrabold text-blue-400 hover:underline flex items-center gap-0.5"><Plus size={12} /> {showNewCatInput ? "Cancel" : "Add Custom Category"}</button>
                  </div>
                  {showNewCatInput ? (
                    <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-xl border border-blue-500/50">
                      <input type="text" placeholder="নতুন ক্যাটাগরির নাম লিখুন..." value={customCategory} onChange={e => setCustomCategory(e.target.value)} className="w-full px-3 py-1.5 rounded-lg bg-transparent text-xs font-semibold text-white focus:outline-none" />
                      <button type="button" onClick={handleAddNewCategory} className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-bold flex items-center gap-1 shrink-0"><Check size={14} /> Add</button>
                    </div>
                  ) : (
                    <select value={newCourse.category} onChange={e => e.target.value === "ADD_NEW" ? setShowNewCatInput(true) : setNewCourse({ ...newCourse, category: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer">
                      {categories.map((cat, i) => <option key={i} value={cat}>{cat}</option>)}
                      <option value="ADD_NEW" className="text-blue-400 font-bold">➕ + Add New Category...</option>
                    </select>
                  )}
                </div>

                {/* ডিউরেশন, ফি, ব্যাজ ও রেটিং */}
                <div className="grid grid-cols-2 gap-3">
                  <div><label className="text-xs font-bold text-slate-300 block mb-1">Duration</label><input type="text" value={newCourse.duration} onChange={e => setNewCourse({...newCourse, duration: e.target.value})} placeholder="3 Months" className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-600" /></div>
                  <div><label className="text-xs font-bold text-slate-300 block mb-1">Fee / Price *</label><input type="text" value={newCourse.price} onChange={e => setNewCourse({...newCourse, price: e.target.value})} placeholder="100% Free" className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-600" /></div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div><label className="text-xs font-bold text-slate-300 block mb-1">Badge Tag</label><input type="text" value={newCourse.tag} onChange={e => setNewCourse({...newCourse, tag: e.target.value})} placeholder="NSDA Certified" className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-600" /></div>
                  <div><label className="text-xs font-bold text-slate-300 block mb-1">Rating</label><input type="text" value={newCourse.rating} onChange={e => setNewCourse({...newCourse, rating: e.target.value})} placeholder="5.0" className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-600" /></div>
                </div>
                <button type="button" onClick={() => setActiveFormTab('details')} className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-blue-400 font-black text-xs transition flex items-center justify-center gap-2 cursor-pointer"><span>Next: Write Overview & Outcomes →</span></button>
              </div>
            )}

            {/* ================= TAB 2: OVERVIEW & OUTCOMES ================= */}
            {activeFormTab === 'details' && (
              <div className="space-y-4 animate-fadeIn">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Comprehensive Course Overview *</label>
                  <textarea rows="4" placeholder="কোর্সের গুরুত্ব, কেন এই কোর্স করবেন এবং ক্যারিয়ার সম্ভাবনা বিস্তারিত লিখুন..." value={newCourse.overview} onChange={e => setNewCourse({...newCourse, overview: e.target.value})} className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-medium text-white focus:outline-none focus:ring-2 focus:ring-blue-600 leading-relaxed"></textarea>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Who This Course is For (Eligibility / Target Audience)</label>
                  <input type="text" placeholder="e.g. ন্যূনতম এসএসসি/এইচএসসি পাশ অথবা হেলথকেয়ারে আগ্রহী যেকোনো শিক্ষার্থী।" value={newCourse.eligibility} onChange={e => setNewCourse({...newCourse, eligibility: e.target.value})} className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-600" />
                </div>

                {/* ডাইনামিক Outcomes (বুলেট পয়েন্ট) */}
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-emerald-400 flex items-center gap-1"><Sparkles size={14} /> What You Will Learn (Key Outcomes)</label>
                    <button type="button" onClick={addOutcome} className="text-[10px] font-extrabold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-lg hover:bg-blue-500/20 transition flex items-center gap-1"><Plus size={12} /> Add Point</button>
                  </div>
                  {newCourse.outcomes.map((out, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-slate-500 text-xs font-bold">✔</span>
                      <input type="text" placeholder="e.g. সরাসরি ডামির ওপর সিপিআর ও ফার্স্ট এইড প্র্যাকটিস" value={out} onChange={e => handleOutcomeChange(idx, e.target.value)} className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-600" />
                      {newCourse.outcomes.length > 1 && (
                        <button type="button" onClick={() => removeOutcome(idx)} className="p-2 bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white rounded-xl transition shrink-0"><X size={14} /></button>
                      )}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2">
                  <button type="button" onClick={() => setActiveFormTab('basic')} className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition cursor-pointer">← Back</button>
                  <button type="button" onClick={() => setActiveFormTab('syllabus')} className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-blue-400 font-black text-xs transition cursor-pointer">Next: Syllabus & Faculty →</button>
                </div>
              </div>
            )}

            {/* ================= TAB 3: SYLLABUS & FACULTY ================= */}
            {activeFormTab === 'syllabus' && (
              <div className="space-y-4 animate-fadeIn">
                {/* ডাইনামিক Curriculum (সিলেবাস মডিউল) */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-blue-400 flex items-center gap-1"><Layers size={14} /> Course Curriculum / Syllabus Modules</label>
                    <button type="button" onClick={addModule} className="text-[10px] font-extrabold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg hover:bg-emerald-500/20 transition flex items-center gap-1"><Plus size={12} /> Add Module</button>
                  </div>
                  
                  <div className="max-h-56 overflow-y-auto space-y-2.5 pr-1">
                    {newCourse.curriculum.map((mod, idx) => (
                      <div key={idx} className="p-3 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 relative group">
                        <div className="flex items-center justify-between gap-2">
                          <input type="text" placeholder="Module Title (e.g. Module 1: Basic First Aid)" value={mod.title} onChange={e => handleCurriculumChange(idx, 'title', e.target.value)} className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-bold text-blue-300 focus:outline-none" />
                          {newCourse.curriculum.length > 1 && (
                            <button type="button" onClick={() => removeModule(idx)} className="p-1.5 bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white rounded-lg transition shrink-0"><Trash2 size={13} /></button>
                          )}
                        </div>
                        <input type="text" placeholder="Module topics & practical drill details..." value={mod.desc} onChange={e => handleCurriculumChange(idx, 'desc', e.target.value)} className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 focus:outline-none" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* প্রশিক্ষক পরিচিতি */}
                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-800">
                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">Instructor Name</label>
                    <input type="text" placeholder="e.g. Senior Medical Faculty" value={newCourse.instructorName} onChange={e => setNewCourse({...newCourse, instructorName: e.target.value})} className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-600" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">Designation / Role</label>
                    <input type="text" placeholder="e.g. Lead Clinical Trainer" value={newCourse.instructorRole} onChange={e => setNewCourse({...newCourse, instructorRole: e.target.value})} className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-600" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2">
                  <button type="button" onClick={() => setActiveFormTab('details')} className="py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition cursor-pointer">← Back</button>
                  <button type="submit" disabled={isUploading} className="col-span-2 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-xs transition shadow-lg shadow-emerald-600/25 flex items-center justify-center space-x-2 cursor-pointer active:scale-98 disabled:opacity-50">
                    <Save size={16} />
                    <span>{isUploading ? 'Publishing...' : 'Publish Course With Details'}</span>
                  </button>
                </div>
              </div>
            )}

          </form>
        </div>

        {/* ================= 6 COLS: LIVE COURSE CATALOG ================= */}
        <div className="lg:col-span-6 space-y-3">
          <div className="flex items-center justify-between px-1">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Active Courses Catalog</h4>
            <span className="text-[11px] font-bold text-blue-400">Live Website Sync</span>
          </div>

          <div className="space-y-3.5 max-h-[680px] overflow-y-auto pr-1">
            {courses.map((c) => (
              <div key={c.id} className="p-4 bg-slate-900 border border-slate-800 rounded-2xl flex items-start justify-between gap-4 hover:border-slate-700 transition group shadow-sm">
                
                <div className="flex items-start space-x-4 min-w-0">
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-slate-800 flex-shrink-0 border border-slate-700 relative">
                    <img 
                      src={c.image} alt={c.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                      onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80' }} 
                    />
                    <span className="absolute bottom-1 left-1 bg-slate-950/80 px-1.5 py-0.5 rounded text-[8px] font-bold text-amber-400">★ {c.rating}</span>
                  </div>

                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-black uppercase text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">{c.category}</span>
                      <span className="text-[9px] font-extrabold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">✔ {c.curriculum?.length || 2} Modules</span>
                    </div>
                    
                    <h5 className="font-bold text-sm text-white truncate group-hover:text-blue-400 transition-colors">{c.title}</h5>
                    <p className="text-[11px] text-slate-400 line-clamp-1">{c.subtitle || c.overview}</p>
                    
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 pt-0.5">
                      <span className="flex items-center"><Clock size={12} className="mr-1 text-emerald-400"/> {c.duration}</span>
                      <span className="flex items-center font-bold text-purple-300"><DollarSign size={12} className="mr-0.5 text-purple-400"/> {c.price}</span>
                      <span className="flex items-center text-[11px] text-blue-300"><User size={11} className="mr-1"/> {c.instructorName}</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => handleDelete(c.id)} 
                  className="p-2.5 rounded-xl bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white transition border border-red-500/20 cursor-pointer flex-shrink-0" 
                  title="Delete Course"
                >
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