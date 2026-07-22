import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, GraduationCap, PlaneTakeoff, Stethoscope, Star, 
  CheckCircle2, MapPin, Phone, Mail, Quote, PlayCircle, ShieldCheck, ArrowRight, Clock
} from 'lucide-react';

import NeoCard from '../../components/ui/NeoCard';
import NeoButton from '../../components/ui/NeoButton';
import SectionTitle from '../../components/ui/SectionTitle';
import { useLanguage } from '../../context/LanguageContext';

// Import split components
import HeroSection from './HeroSection';
import StatsSection from './StatsSection';

export default function Home() {
  const { t, lang } = useLanguage();

  // State for Consultation Form Handling
  const [formData, setFormData] = useState({ name: '', phone: '', interest: 'NSDA Free Course' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({ name: '', phone: '', interest: 'NSDA Free Course' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error("Submission Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // ================= 🎯 HOMEPAGE FEATURED COURSES (WITH IMAGES) =================
  const featuredCourses = [
    {
      id: "10",
      category: 'Healthcare & Beauty',
      image: '/Day long Primary Healthcare.png',
      duration: '1 Day (10 AM - 5 PM)',
      rating: '5.0',
      title: { EN: 'Day-long Primary Healthcare, First Aid & CPR', BN: 'দিনব্যাপী প্রাইমারি হেলথ কেয়ার, ফার্স্ট এইড ও সিপিআর' },
      tag: { EN: 'Certificate Included', BN: 'সার্টিফিকেট প্রদান' },
    },
    {
      id: "11",
      category: 'Healthcare & Beauty',
      image: '/CPR & Emmergency Response Program.jpg',
      duration: '1 Day (10 AM - 5 PM)',
      rating: '5.0',
      title: { EN: 'CPR & Emergency Response Training Program', BN: 'CPR ও ইমার্জেন্সি রেসপন্স ট্রেনিং প্রোগ্রাম' },
      tag: { EN: 'Hands-on Training', BN: 'হ্যান্ডস-অন ট্রেনিং' },
    },
    {
      id: "5",
      category: 'Healthcare & Beauty',
      image: '/Primary healthcare.png',
      duration: '3 Months',
      rating: '4.9',
      title: { EN: 'Primary Healthcare Service Level 2', BN: 'প্রাইমারি হেলথকেয়ার সার্ভিস লেভেল-২' },
      tag: { EN: 'NSDA Certified', BN: 'NSDA অনুমোদিত' },
    }
  ];

  return (
    <div className="pb-16">
      
      {/* Imported Modular Components */}
      <HeroSection />
      <StatsSection />

      <div className="space-y-20 sm:space-y-28">
        
        {/* ================= 3. PREMIUM SERVICES ================= */}
        <section>
          <SectionTitle subtitle="What We Offer" title={t.servicesTitle} description={t.servicesDesc} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {t.services.map((srv, idx) => {
              const icons = [
                <Target size={28} className="text-white" strokeWidth={2} />,
                <GraduationCap size={28} className="text-white" strokeWidth={2} />,
                <PlaneTakeoff size={28} className="text-white" strokeWidth={2} />,
                <Stethoscope size={28} className="text-white" strokeWidth={2} />
              ];
              
              return (
                <NeoCard key={idx} className="flex flex-col justify-between h-full bg-white/70 hover:bg-white group border-slate-200/60">
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-slate-800 to-slate-700 flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                      {icons[idx]}
                    </div>
                    <h3 className="text-xl font-black text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">{srv.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">{srv.desc}</p>
                  </div>
                  
                  <div className="mt-8 pt-5 border-t border-slate-200/60">
                    <Link to={srv.link} className="flex items-center text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors group/link">
                      <span>{srv.btnText}</span>
                      <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </NeoCard>
              );
            })}
          </div>
        </section>

        {/* ================= 4. FEATURED COURSES (IMAGE CARDS) ================= */}
        <section>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionTitle subtitle="Skill to Success" title={t.coursesTitle} description={t.coursesDesc} center={false} />
            <Link to="/courses" className="mb-12">
              <NeoButton variant="primary" className="!py-3 !px-6 text-sm font-bold whitespace-nowrap shadow-md">
                {lang === 'EN' ? 'View All Courses' : 'সকল কোর্স দেখুন'}
              </NeoButton>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {featuredCourses.map((course, idx) => (
              <NeoCard key={idx} className="!p-0 flex flex-col bg-white/80 hover:bg-white border-slate-200/60 group relative overflow-hidden transition-all duration-300">
                
                {/* Image Header Section */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                  <img 
                    src={course.image} 
                    alt={course.title.EN} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent"></div>
                  
                  {/* Floating Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-blue-700 text-[10px] font-black uppercase px-3 py-1.5 rounded-full shadow-sm">
                    {course.category}
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-4 left-4 flex items-center space-x-1.5 text-white text-xs font-bold">
                    <Clock size={14} />
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl font-black text-slate-800 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                    {course.title[lang]}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg text-[10px] font-bold border ${course.tag.EN.includes('Certificate') || course.tag.EN.includes('Hands') ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-slate-50 text-slate-600 border-slate-200'}`}>
                      <CheckCircle2 size={12} className={course.tag.EN.includes('Certificate') || course.tag.EN.includes('Hands') ? 'text-emerald-600' : 'text-blue-500'} />
                      <span>{course.tag[lang]}</span>
                    </span>
                  </div>

                  {/* Bottom CTA Action */}
                  <div className="mt-auto pt-5 border-t border-slate-200/60 flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-xs font-black text-amber-600 bg-amber-50 px-2.5 py-1.5 rounded-lg border border-amber-200">
                      <Star size={14} className="fill-amber-500" />
                      <span>{course.rating}</span>
                    </div>

                    <Link to={`/course/${course.id}`}>
                      <button className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs shadow-md hover:bg-blue-600 active:scale-95 transition-colors flex items-center space-x-1.5 group/btn">
                        <span>{lang === 'EN' ? 'View Details' : 'বিস্তারিত দেখুন'}</span>
                        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                </div>
              </NeoCard>
            ))}
          </div>
        </section>

        {/* ================= 4.5 LIFE AT CAREERLIFT (Gallery Section) ================= */}
        <section className="bg-slate-900 rounded-[2.5rem] p-8 sm:p-14 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 relative z-10">
            <div className="max-w-xl">
              <span className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-2 block">Campus Gallery</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                {lang === 'EN' ? 'Life at CareerLift Institute' : 'ক্যারিয়ারলিফটের ক্যাম্পাস জীবন'}
              </h2>
            </div>
            <button className="hidden md:flex items-center space-x-2 text-sm font-bold text-blue-400 hover:text-white transition-colors mt-4 md:mt-0">
              <PlayCircle size={20} />
              <span>Watch Campus Tour</span>
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
            <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden group relative">
              <img src="https://images.unsplash.com/photo-1576267423048-15c0040fec78?auto=format&fit=crop&w=800&q=80" alt="Lab" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white font-bold text-sm">Computer Lab</div>
            </div>
            <div className="rounded-2xl overflow-hidden group relative h-40 sm:h-48">
              <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80" alt="Study" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="rounded-2xl overflow-hidden group relative h-40 sm:h-48">
              <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=400&q=80" alt="Discussion" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="col-span-2 rounded-2xl overflow-hidden group relative h-40 sm:h-48">
              <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80" alt="Seminar" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white font-bold text-sm">Visa Seminars & Counseling</div>
            </div>
          </div>
        </section>

        {/* ================= 5. VERIFIED TESTIMONIALS ================= */}
        <section>
          <SectionTitle subtitle="Success Stories" title={t.storiesTitle} description={t.storiesDesc} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {t.stories.map((story, idx) => (
              <NeoCard key={idx} className="bg-white/80 hover:bg-white border-slate-200/60 flex flex-col justify-between relative">
                <Quote size={40} className="absolute top-6 right-6 text-slate-100" />
                
                <div className="flex space-x-1 mb-6">
                  {[1,2,3,4,5].map((s) => <Star key={s} size={16} className="fill-amber-400 text-amber-400" />)}
                </div>

                <p className="text-slate-700 font-medium leading-relaxed mb-8 relative z-10">
                  "{story.quote.replace(/"/g, '')}"
                </p>
                
                <div className="flex items-center space-x-4 pt-5 border-t border-slate-200/60">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-white font-black text-lg shadow-sm">
                    {story.initials}
                  </div>
                  <div>
                    <h4 className="font-black text-slate-800 text-base">{story.name}</h4>
                    <span className="text-xs font-bold text-blue-600 block mt-0.5 flex items-center space-x-1">
                      <CheckCircle2 size={12} />
                      <span>{story.role}</span>
                    </span>
                  </div>
                </div>
              </NeoCard>
            ))}
          </div>
        </section>

        {/* ================= 6. VISIT CAMPUS, MAP & SMART FORM ================= */}
        <section className="bg-white border border-slate-200/60 shadow-xl rounded-[2.5rem] p-6 sm:p-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-blue-600 font-bold text-xs uppercase tracking-widest block mb-2">
                  {t.locationTag.replace('📍 ', '')}
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-800 leading-tight">
                  {t.contactTitle}
                </h2>
                <p className="text-sm sm:text-base text-slate-500 font-medium mt-3">
                  {t.contactDesc}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-blue-600 flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400">{t.addressTitle}</h4>
                    <p className="text-sm font-bold text-slate-800 mt-0.5">{t.addressText}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400">{t.hotlineTitle}</h4>
                    <p className="text-sm font-bold text-slate-800 mt-0.5">{t.hotlineText}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400">{t.emailTitle}</h4>
                    <p className="text-sm font-bold text-slate-800 mt-0.5">{t.emailText}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-black text-slate-800">{t.formTitle}</h3>
                  <p className="text-xs font-medium text-slate-500 mt-1">Fill out the form to request a call back.</p>
                </div>

                {submitSuccess ? (
                  <div className="p-6 rounded-2xl bg-emerald-100 border border-emerald-200 text-center space-y-2">
                    <CheckCircle2 size={40} className="text-emerald-600 mx-auto" />
                    <h4 className="text-lg font-black text-emerald-800">Request Received!</h4>
                    <p className="text-xs font-medium text-emerald-700">We will contact you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input 
                        type="text" name="name" required value={formData.name} onChange={handleInputChange} placeholder="Full Name" 
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input 
                        type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} placeholder="Phone Number" 
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <select 
                      name="interest" value={formData.interest} onChange={handleInputChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-sm font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                    >
                      <option value="NSDA Free Course">NSDA Free Course (Scholarship)</option>
                      <option value="Care Giving Level-2 & 3">Care Giving Level-2 & 3</option>
                      <option value="IT Skills & Computer Operation">IT Skills & Computer Operation</option>
                      <option value="Study Abroad & Visa Consultancy">Study Abroad & Visa Consultancy</option>
                    </select>
                    <button
                      type="submit" disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-blue-600 active:scale-98 transition-colors disabled:opacity-50"
                    >
                      {isSubmitting ? 'Processing...' : t.formBtn}
                    </button>
                    <div className="flex items-center justify-center space-x-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-4">
                      <ShieldCheck size={14} />
                      <span>Secure & Confidential</span>
                    </div>
                  </form>
                )}
              </div>

              <div className="w-full h-48 rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
                <iframe 
                  title="CareerLift Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.227599094801!2d90.40898531543144!3d23.73926189511977!2m3!1f0!2f0!3f0!3m2!1f0!2f0!3f0!3m2!1f1024!2i768!4f13.1!3m3!1m2!1s0x3755b8f2c68e3709%3A0x8e52e428dfbbfb8!2sBijoy%20Nagar%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1711100000000!5m2!1sen!2sbd" 
                  className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500" 
                  style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}