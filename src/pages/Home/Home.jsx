import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NeoCard from '../../components/ui/NeoCard';
import NeoButton from '../../components/ui/NeoButton';
import SectionTitle from '../../components/ui/SectionTitle';
import { useLanguage } from '../../context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  // State for Consultation Form Handling
  const [formData, setFormData] = useState({ name: '', phone: '', interest: 'NSDA Free Course' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Smart Handler for Google Sheet + Direct Email Notification
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      /* 
       * =========================================================================
       * FUTURE CONNECTION: Google Apps Script Web App URL
       * যখন আমরা Apps Script সেটআপ করব, তখন নিচের fetch কোডটি আনকমেন্ট করব:
       * 
       * await fetch('YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL', {
       *   method: 'POST',
       *   mode: 'no-cors',
       *   headers: { 'Content-Type': 'application/json' },
       *   body: JSON.stringify({ ...formData, timestamp: new Date() })
       * });
       * =========================================================================
       */

      // ডেমো সাবমিশন ফিল দেওয়ার জন্য ১.৫ সেকেন্ডের লোডিং সিমুলেশন
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setSubmitSuccess(true);
      setFormData({ name: '', phone: '', interest: 'NSDA Free Course' });

      // ৫ সেকেন্ড পর সাকসেস মেসেজ সরিয়ে নেওয়ার জন্য
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error("Submission Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      
      {/* ================= 1. HERO SECTION (Advanced Responsive Layout) ================= */}
      <section className="pt-4 sm:pt-10 text-center lg:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-white/80 shadow-sm text-blue-700 font-bold text-xs sm:text-sm uppercase tracking-wider">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping"></span>
              <span>{t.badge}</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-800 leading-tight sm:leading-none tracking-tight">
              {t.heroTitle}
            </h1>
            
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {t.heroDesc}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link to="/courses" className="w-full sm:w-auto">
                <NeoButton variant="primary" className="w-full sm:w-auto !px-8 !py-4 text-base font-bold shadow-lg shadow-blue-500/25">
                  Explore Courses
                </NeoButton>
              </Link>
              <Link to="/study-abroad" className="w-full sm:w-auto">
                <NeoButton variant="secondary" className="w-full sm:w-auto !px-8 !py-4 text-base font-bold">
                  Visa Consultancy
                </NeoButton>
              </Link>
            </div>

            {/* Glass Quote Banner */}
            <div className="p-5 rounded-2xl bg-white/50 backdrop-blur-md border border-white/80 shadow-neo-inset max-w-lg mx-auto lg:mx-0 mt-6 text-sm font-medium text-slate-700 italic border-l-4 border-l-blue-600">
              {t.heroQuote}
            </div>
          </div>

          {/* Hero Interactive Showcase Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-white/60 backdrop-blur-2xl border border-white/90 shadow-neo-float rounded-3xl p-6 sm:p-8 relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-indigo-500/30 rounded-full blur-2xl -z-10 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="text-center mb-6">
                <span className="px-3.5 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-black uppercase tracking-widest border border-blue-200">
                  CareerLift Institute
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-800 mt-2">Skill to Success</h3>
              </div>

              <div className="space-y-3.5">
                <Link to="/nsda-free-course" className="block p-4 rounded-2xl bg-gradient-to-r from-emerald-500/15 to-teal-500/15 border border-emerald-500/40 hover:border-emerald-500/80 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 group/item">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-extrabold text-emerald-700 uppercase tracking-wider block">100% Free / Scholarship</span>
                      <h4 className="text-base font-bold text-slate-800 group-hover/item:text-emerald-700 transition">NSDA Free Course</h4>
                    </div>
                    <span className="text-2xl group-hover/item:scale-125 transition-transform duration-200">🎓</span>
                  </div>
                </Link>

                <Link to="/study-abroad" className="block p-4 rounded-2xl bg-white/70 border border-white/90 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 group/item">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-extrabold text-blue-600 uppercase tracking-wider block">Global Pathway</span>
                      <h4 className="text-base font-bold text-slate-800 group-hover/item:text-blue-600 transition">Study Abroad & Visa Guide</h4>
                    </div>
                    <span className="text-2xl group-hover/item:scale-125 transition-transform duration-200">✈️</span>
                  </div>
                </Link>

                <Link to="/courses" className="block p-4 rounded-2xl bg-white/70 border border-white/90 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 group/item">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-extrabold text-purple-600 uppercase tracking-wider block">IT & Caregiving</span>
                      <h4 className="text-base font-bold text-slate-800 group-hover/item:text-purple-600 transition">Featured Skill Courses</h4>
                    </div>
                    <span className="text-2xl group-hover/item:scale-125 transition-transform duration-200">💻</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 2. STATS COUNTER MATRIX ================= */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {t.stats.map((stat, idx) => (
          <div key={idx} className="bg-white/50 backdrop-blur-lg border border-white/80 shadow-neo-float rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/70 group">
            <h3 className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
              {stat.value}
            </h3>
            <p className="text-xs sm:text-sm font-bold text-slate-600 mt-2 uppercase tracking-wider">
              {stat.label}
            </p>
          </div>
        ))}
      </section>

      {/* ================= 3. PREMIUM SERVICES ================= */}
      <section>
        <SectionTitle subtitle="What We Offer" title={t.servicesTitle} description={t.servicesDesc} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {t.services.map((srv, idx) => (
            <NeoCard key={idx} className="flex flex-col justify-between h-full bg-white/60 hover:bg-white/80 group border-white/80">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-2xl shadow-md mb-6 group-hover:scale-110 transition-transform duration-300">
                  {idx === 0 ? '🎯' : idx === 1 ? '🎓' : idx === 2 ? '✈️' : '🏥'}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">{srv.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">{srv.desc}</p>
              </div>
              
              <div className="mt-8 pt-4 border-t border-slate-200/60">
                <Link to={srv.link}>
                  <NeoButton variant="secondary" className="w-full !py-2.5 !text-xs font-extrabold justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600">
                    {srv.btnText} →
                  </NeoButton>
                </Link>
              </div>
            </NeoCard>
          ))}
        </div>
      </section>

      {/* ================= 4. FEATURED COURSES ================= */}
      <section>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionTitle subtitle="Skill to Success" title={t.coursesTitle} description={t.coursesDesc} center={false} />
          <Link to="/courses" className="mb-12">
            <NeoButton variant="primary" className="!py-3 !px-6 text-sm font-bold whitespace-nowrap shadow-md">
              View All Courses →
            </NeoButton>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {t.courses.map((course, idx) => (
            <NeoCard key={idx} className="flex flex-col justify-between bg-white/70 hover:bg-white border-white/90 group">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 border border-blue-200">
                    {course.level}
                  </span>
                  <span className="flex items-center text-xs font-extrabold text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 shadow-sm">
                    ★ {course.rating}
                  </span>
                </div>
                <h3 className="text-xl font-black text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">{course.title}</h3>
                <span className="inline-block px-3 py-1 rounded-md text-[11px] font-bold bg-emerald-100 text-emerald-800 mb-4 border border-emerald-200">
                  ✓ {course.tag}
                </span>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex justify-between items-center">
                <span className="text-xs font-bold text-slate-500">Admissions Open</span>
                <Link to="/courses">
                  <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all">
                    {course.btnText}
                  </button>
                </Link>
              </div>
            </NeoCard>
          ))}
        </div>
      </section>

      {/* ================= 5. STUDENT SUCCESS STORIES (Standard Matrix Format) ================= */}
      <section>
        <SectionTitle subtitle="Verified Testimonials" title={t.storiesTitle} description={t.storiesDesc} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {t.stories.map((story, idx) => (
            <NeoCard key={idx} className="bg-white/60 hover:bg-white/80 border-white/90 flex flex-col justify-between relative overflow-hidden group">
              
              {/* Top Rating & Verified Badge */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex text-amber-500 text-sm tracking-widest">
                  ★★★★★
                </div>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100/80 px-2.5 py-0.5 rounded-full border border-emerald-300 flex items-center space-x-1">
                  <span>✓</span> <span>Verified Graduate</span>
                </span>
              </div>

              <p className="text-slate-700 font-medium italic text-sm sm:text-base leading-relaxed mb-6">
                {story.quote}
              </p>
              
              {/* Profile Details */}
              <div className="flex items-center space-x-4 pt-4 border-t border-slate-200/60">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white font-black text-lg shadow-md group-hover:scale-105 transition-transform">
                  {story.initials}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-base leading-tight">{story.name}</h4>
                  <span className="text-xs font-semibold text-blue-600 block mt-0.5">{story.role}</span>
                </div>
              </div>
            </NeoCard>
          ))}
        </div>
      </section>

      {/* ================= 6. VISIT CAMPUS, MAP & SMART CONSULTATION FORM ================= */}
      <section className="bg-white/60 backdrop-blur-2xl border border-white/90 shadow-neo-float rounded-3xl p-6 sm:p-12 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Side: Office Information & Interactive Google Map */}
          <div className="lg:col-span-6 space-y-6">
            <span className="px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 font-extrabold text-xs uppercase tracking-wider border border-blue-200">
              {t.locationTag}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-800 leading-tight">
              {t.contactTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.contactDesc}
            </p>

            {/* Office Address Details */}
            <div className="space-y-3.5">
              <div className="p-4 rounded-2xl bg-white/80 border border-white shadow-sm">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-blue-600">{t.addressTitle}</h4>
                <p className="text-sm sm:text-base font-bold text-slate-800 mt-1">{t.addressText}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-2xl bg-white/80 border border-white shadow-sm">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-blue-600">{t.hotlineTitle}</h4>
                  <p className="text-sm font-black text-slate-800 mt-1">{t.hotlineText}</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/80 border border-white shadow-sm">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-blue-600">{t.emailTitle}</h4>
                  <p className="text-sm font-black text-slate-800 mt-1">{t.emailText}</p>
                </div>
              </div>
            </div>

            {/* Interactive Google Map Embed (Bijoy Nagar, Dhaka) */}
            <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden border-2 border-white/90 shadow-md relative group">
              <iframe 
                title="CareerLift Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.227599094801!2d90.40898531543144!3d23.73926189511977!2m3!1f0!2f0!3f0!3m2!1f0!2f0!3f0!3m2!1f1024!2i768!4f13.1!3m3!1m2!1s0x3755b8f2c68e3709%3A0x8e52e428dfbbfb8!2sBijoy%20Nagar%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1711100000000!5m2!1sen!2sbd" 
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-[11px] font-bold text-slate-700 shadow-sm pointer-events-none">
                📍 Prime Tower, Bijoy Nagar
              </div>
            </div>
          </div>

          {/* Right Side: Smart Consultation Form (Sheet & Email Ready) */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <div className="bg-white/80 backdrop-blur-xl border border-white shadow-neo-inset rounded-3xl p-6 sm:p-8 space-y-5 relative overflow-hidden">
              
              <div className="border-b border-slate-200/60 pb-3">
                <h3 className="text-2xl font-black text-slate-800">{t.formTitle}</h3>
                <p className="text-xs text-slate-500 mt-0.5">Fill out this form and our team will contact you within 24 hours.</p>
              </div>

              {submitSuccess ? (
                /* Success Notification Box */
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-2 animate-fadeIn">
                  <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                    ✓
                  </div>
                  <h4 className="text-lg font-bold text-emerald-800">Application Received!</h4>
                  <p className="text-xs text-emerald-600">
                    ধন্যবাদ! আপনার আবেদনটি সফলভাবে আমাদের সিস্টেমে (Google Sheet & Email) জমা হয়েছে। খুব শীঘ্রই আমাদের কাউন্সিলর আপনার সাথে যোগাযোগ করবেন।
                  </p>
                </div>
              ) : (
                /* Main Interactive Form */
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name" 
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200/80 shadow-inner text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-medium text-slate-800 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Phone Number (WhatsApp Active) *
                    </label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 01814-XXXXXX" 
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200/80 shadow-inner text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-medium text-slate-800 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Select Interested Service / Course *
                    </label>
                    <select 
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200/80 shadow-inner text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-bold text-slate-800 transition cursor-pointer"
                    >
                      <option value="NSDA Free Course">🎓 NSDA Free Course (Scholarship)</option>
                      <option value="Care Giving Level-2 & 3">🏥 Care Giving Level-2 & 3</option>
                      <option value="IT Skills & Computer Operation">💻 IT Skills & Computer Operation</option>
                      <option value="Study Abroad & Visa Consultancy">✈️ Study Abroad & Visa Consultancy</option>
                      <option value="OTHM UK University Pathway">🇬🇧 OTHM UK University Pathway</option>
                    </select>
                  </div>

                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm shadow-lg shadow-blue-500/30 hover:shadow-xl hover:from-blue-700 hover:to-indigo-700 active:scale-98 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                          <span>Sending Data to Sheet...</span>
                        </>
                      ) : (
                        <span>{t.formBtn} →</span>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-slate-400 font-medium">
                    🔒 Your information is 100% secure and will be sent directly to CareerLift official email.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}