import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, GraduationCap, PlaneTakeoff, Stethoscope, Star, 
  CheckCircle2, MapPin, Phone, Mail, Quote, PlayCircle, ShieldCheck, ArrowRight, Clock, Sparkles
} from 'lucide-react';

import NeoCard from '../../components/ui/NeoCard';
import NeoButton from '../../components/ui/NeoButton';
import SectionTitle from '../../components/ui/SectionTitle';
import { useLanguage } from '../../context/LanguageContext';

// Import split components
import HeroSection from './HeroSection';
import StatsSection from './StatsSection';

export default function Home() {
  const { t = {}, lang = 'EN' } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // State for Consultation Form Handling (Home Page)
  const [formData, setFormData] = useState({ 
    name: '', 
    phone: '', 
    interest: '🎉 NSDA Free Course (Scholarship / স্কলারশিপ)',
    source: 'Home Page' // Lead Source Tracking
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ LIVE GOOGLE SHEETS API INTEGRATION
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Your actual Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby6xxm5ItCCd-z8tlMzYxZMx0xHn7IYdLY_iCOD0KxBi_sbDfDFyf00RQzQE_rj_s9x/exec";

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      setSubmitSuccess(true);
      setFormData({ 
        name: '', 
        phone: '', 
        interest: '🎉 NSDA Free Course (Scholarship / স্কলারশিপ)',
        source: 'Home Page'
      });
      setTimeout(() => setSubmitSuccess(false), 6000);
    } catch (error) {
      console.error("Submission Error:", error);
      // Fallback success trigger in case of CORS redirect
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 6000);
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

  // Safe fallbacks for language translation object
  const servicesList = t.services || [
    { title: "Study Abroad & Visa Consultancy", desc: "End-to-end guidance for UK, Japan, Canada & Europe with 98% success rate.", link: "/study-abroad", btnText: "Explore Destinations" },
    { title: "Govt. NSDA Free Training", desc: "Prime Minister's Office authorized Level 2 & 3 practical skill courses.", link: "/courses", btnText: "View Free Courses" },
    { title: "Healthcare Staffing Solutions", desc: "Certified caregiver and nurse supply to top medical institutes.", link: "/about-us", btnText: "Request Staffing" },
    { title: "Corporate HSE & Safety Drills", desc: "Customized workplace safety, fire drills, and CPR seminars for organizations.", link: "/about-us", btnText: "Corporate Consultation" }
  ];

  const storiesList = t.stories || [
    { quote: "CareerLift transformed my career path completely. Their practical lab sessions in Caregiving helped me secure an immediate job placement.", name: "Tanvir Ahmed", role: "Caregiver Level-3 Graduate", initials: "TA" },
    { quote: "The study abroad team is genuinely transparent. They guided me through my UK student visa without any hidden charges or false promises.", name: "Farhana Yasmin", role: "UK Student Visa Approved", initials: "FY" }
  ];

  return (
    <div className="pb-16 bg-slate-50 min-h-screen">
      
      {/* Imported Modular Components */}
      <HeroSection />
      <StatsSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28 pt-8">
        
        {/* ================= 3. PREMIUM SERVICES ================= */}
        <section>
          <SectionTitle 
            subtitle={lang === 'EN' ? "What We Offer" : "আমাদের সেবাসমূহ"} 
            title={t.servicesTitle || (lang === 'EN' ? "Comprehensive Institutional Services" : "আপনার পেশাগত উন্নয়নে আমাদের বিশেষায়িত সেবা")} 
            description={t.servicesDesc || (lang === 'EN' ? "Empowering individuals and institutions with certified skills, healthcare support, and global migration advisory." : "স্বীকৃত দক্ষতা, হেলথকেয়ার সাপোর্ট এবং আন্তর্জাতিক মাইগ্রেশনের মাধ্যমে আমরা দিচ্ছি সর্বাত্মক সহায়তা।")} 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {servicesList.map((srv, idx) => {
              const icons = [
                <Target size={28} className="text-white" strokeWidth={2} />,
                <GraduationCap size={28} className="text-white" strokeWidth={2} />,
                <PlaneTakeoff size={28} className="text-white" strokeWidth={2} />,
                <Stethoscope size={28} className="text-white" strokeWidth={2} />
              ];
              const gradients = [
                "from-blue-600 to-indigo-600",
                "from-emerald-600 to-teal-600",
                "from-purple-600 to-indigo-600",
                "from-amber-600 to-orange-600"
              ];
              
              return (
                <NeoCard key={idx} className="flex flex-col justify-between h-full bg-white hover:bg-slate-50/80 group border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 rounded-3xl p-6 sm:p-8">
                  <div>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${gradients[idx % gradients.length]} flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {icons[idx % icons.length]}
                    </div>
                    <h3 className="text-xl font-black text-slate-800 mb-3 group-hover:text-blue-600 transition-colors leading-tight">{srv.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">{srv.desc}</p>
                  </div>
                  
                  <div className="mt-8 pt-5 border-t border-slate-100">
                    <Link to={srv.link || "/courses"} className="flex items-center text-xs sm:text-sm font-black text-slate-900 hover:text-blue-600 transition-colors group/link">
                      <span>{srv.btnText || "Learn More"}</span>
                      <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1.5 transition-transform text-blue-600" />
                    </Link>
                  </div>
                </NeoCard>
              );
            })}
          </div>
        </section>

        {/* ================= 4. FEATURED COURSES (IMAGE CARDS) ================= */}
        <section>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <SectionTitle 
              subtitle={lang === 'EN' ? "Skill to Success" : "দক্ষতা ও সাফল্য"} 
              title={t.coursesTitle || (lang === 'EN' ? "Featured Certified Courses" : "আমাদের জনপ্রিয় কোর্সসমূহ")} 
              description={t.coursesDesc || (lang === 'EN' ? "Handpicked practical courses designed to meet industry demands and ensure rapid job placements." : "ইন্ডাস্ট্রির বাস্তব চাহিদার সাথে মিল রেখে তৈরি ল্যাব-ভিত্তিক ব্যবহারিক প্রশিক্ষণ কোর্স।")} 
              center={false} 
            />
            <Link to="/courses" className="self-start md:self-end mb-2">
              <NeoButton variant="primary" className="!py-3.5 !px-7 text-xs sm:text-sm font-bold whitespace-nowrap shadow-md">
                {lang === 'EN' ? 'View All Courses →' : 'সকল কোর্স দেখুন →'}
              </NeoButton>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {featuredCourses.map((course, idx) => (
              <NeoCard key={idx} className="!p-0 flex flex-col bg-white hover:bg-slate-50/50 border-slate-200/80 shadow-sm hover:shadow-xl group relative overflow-hidden transition-all duration-300 rounded-3xl">
                
                {/* Image Header Section */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                  <img 
                    src={course.image} 
                    alt={course.title[lang] || course.title.EN} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent"></div>
                  
                  {/* Floating Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-blue-700 text-[10px] font-black uppercase px-3.5 py-1.5 rounded-full shadow-sm">
                    {course.category}
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-4 left-4 flex items-center space-x-1.5 text-white text-xs font-bold bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
                    <Clock size={13} className="text-blue-400" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                    {course.title[lang] || course.title.EN}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className={`flex items-center space-x-1.5 px-3 py-1 rounded-xl text-xs font-bold border ${
                      course.tag.EN.includes('Certificate') || course.tag.EN.includes('Hands') || course.tag.EN.includes('NSDA') 
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                        : 'bg-slate-50 text-slate-600 border-slate-200'
                    }`}>
                      <CheckCircle2 size={14} className="text-emerald-600" />
                      <span>{course.tag[lang] || course.tag.EN}</span>
                    </span>
                  </div>

                  {/* Bottom CTA Action */}
                  <div className="mt-auto pt-5 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center space-x-1.5 text-xs font-black text-amber-600 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-200/80">
                      <Star size={14} className="fill-amber-500 text-amber-500" />
                      <span>{course.rating}</span>
                    </div>

                    <Link to={`/course/${course.id}`}>
                      <button className="px-6 py-3 rounded-xl bg-slate-900 text-white font-black text-xs shadow-md hover:bg-blue-600 active:scale-95 transition-all flex items-center space-x-1.5 group/btn">
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
        <section className="bg-slate-900 rounded-[2.5rem] p-8 sm:p-14 text-white overflow-hidden relative shadow-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 relative z-10 gap-4">
            <div className="max-w-xl">
              <span className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-2 block flex items-center">
                <Sparkles size={14} className="mr-1.5 text-amber-400" /> Campus Gallery
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                {lang === 'EN' ? 'Life at CareerLift Institute' : 'ক্যারিয়ারলিফটের ক্যাম্পাস জীবন'}
              </h2>
            </div>
            <Link to="/about-us">
              <button className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-blue-400 hover:text-white bg-white/10 hover:bg-white/20 px-5 py-3 rounded-xl border border-white/15 transition-all">
                <PlayCircle size={18} />
                <span>{lang === 'EN' ? 'Explore Campus Infrastructure →' : 'ক্যাম্পাস পরিকাঠামো দেখুন →'}</span>
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
            <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden group relative aspect-square sm:aspect-auto border border-white/10">
              <img src="https://images.unsplash.com/photo-1576267423048-15c0040fec78?auto=format&fit=crop&w=800&q=80" alt="Lab" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <span className="text-[10px] font-bold uppercase bg-blue-600 px-2.5 py-1 rounded">Practical Facility</span>
                <h4 className="font-black text-base sm:text-lg mt-1">Modern Computer & IT Lab</h4>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden group relative h-44 sm:h-52 border border-white/10">
              <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80" alt="Study" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-transparent transition-colors"></div>
              <div className="absolute bottom-3 left-3 text-white text-xs font-bold">Collaborative Study</div>
            </div>
            <div className="rounded-3xl overflow-hidden group relative h-44 sm:h-52 border border-white/10">
              <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=400&q=80" alt="Discussion" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-transparent transition-colors"></div>
              <div className="absolute bottom-3 left-3 text-white text-xs font-bold">1-on-1 Counseling</div>
            </div>
            <div className="col-span-2 rounded-3xl overflow-hidden group relative h-44 sm:h-52 border border-white/10">
              <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80" alt="Seminar" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <span className="text-[10px] font-bold uppercase bg-emerald-600 px-2.5 py-1 rounded">Seminars</span>
                <h4 className="font-bold text-sm sm:text-base mt-1">Visa & Scholarship Workshops</h4>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 5. VERIFIED TESTIMONIALS ================= */}
        <section>
          <SectionTitle 
            subtitle={lang === 'EN' ? "Success Stories" : "সাফল্যের গল্প"} 
            title={t.storiesTitle || (lang === 'EN' ? "What Our Students & Clients Say" : "আমাদের শিক্ষার্থী ও ক্লায়েন্টদের মতামত")} 
            description={t.storiesDesc || (lang === 'EN' ? "Real reviews from students who transformed their careers and achieved global mobility with us." : "ক্যারিয়ারলিফটের হাত ধরে নিজেদের জীবন ও ক্যারিয়ার বদলে ফেলার বাস্তব অভিজ্ঞতা।")} 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {storiesList.map((story, idx) => (
              <NeoCard key={idx} className="bg-white hover:bg-slate-50/50 border-slate-200/80 shadow-sm hover:shadow-lg flex flex-col justify-between relative rounded-3xl p-8 transition-all duration-300">
                <Quote size={48} className="absolute top-6 right-6 text-slate-100 pointer-events-none" />
                
                <div>
                  <div className="flex space-x-1 mb-6">
                    {[1,2,3,4,5].map((s) => <Star key={s} size={16} className="fill-amber-400 text-amber-400" />)}
                  </div>

                  <p className="text-slate-700 font-semibold leading-relaxed mb-8 relative z-10 text-sm sm:text-base italic">
                    "{story.quote ? story.quote.replace(/"/g, '') : ''}"
                  </p>
                </div>
                
                <div className="flex items-center space-x-4 pt-5 border-t border-slate-100">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white font-black text-base shadow-sm flex-shrink-0">
                    {story.initials || "CL"}
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-base leading-tight">{story.name || "Verified Student"}</h4>
                    <span className="text-xs font-bold text-blue-600 mt-0.5 flex items-center space-x-1">
                      <CheckCircle2 size={13} className="text-emerald-600" />
                      <span>{story.role || "Alumni"}</span>
                    </span>
                  </div>
                </div>
              </NeoCard>
            ))}
          </div>
        </section>

        {/* ================= 6. VISIT CAMPUS, MAP & SMART FORM ================= */}
        <section className="bg-white border border-slate-200/80 shadow-xl rounded-[2.5rem] p-6 sm:p-14 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-blue-600 font-black text-xs uppercase tracking-widest block mb-2">
                  📍 {t.locationTag ? t.locationTag.replace('📍 ', '') : (lang === 'EN' ? 'VISIT OUR CAMPUS' : 'ক্যাম্পাস ভিজিট করুন')}
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
                  {t.contactTitle || (lang === 'EN' ? "CareerLift Head Office" : "আমাদের অফিস ও যোগাযোগ")}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mt-3 leading-relaxed">
                  {t.contactDesc || (lang === 'EN' ? "Our office is centrally located in Bijoy Nagar, Dhaka. Feel free to walk in for any course or visa inquiries." : "আমাদের অফিস ঢাকার বিজয়নগরের কেন্দ্রস্থলে অবস্থিত। ভিসা বা যেকোনো কোর্সের বিস্তারিত জানতে সরাসরি চলে আসুন।")}
                </p>
              </div>

              <div className="space-y-3.5">
                <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-blue-600 flex-shrink-0 font-bold">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400">{t.addressTitle || (lang === 'EN' ? "Office Address" : "ঠিকানা")}</h4>
                    <p className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5 leading-snug">{t.addressText || "180–181 Prime Tower (Lift-3), Shaheed Nazrul Islam Sharak, Bijoy Nagar, Dhaka-1000"}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-emerald-600 flex-shrink-0 font-bold">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400">{t.hotlineTitle || (lang === 'EN' ? "Direct Hotline" : "হটলাইন")}</h4>
                    <p className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5">{t.hotlineText || "+880 1818-304081 | +880 1965-157203"}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-purple-600 flex-shrink-0 font-bold">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400">{t.emailTitle || (lang === 'EN' ? "Official Email" : "ইমেইল")}</h4>
                    <p className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5">{t.emailText || "careerliftinstitute@gmail.com"}</p>
                  </div>
                </div>
              </div>

              {/* ✅ FAIL-PROOF OPEN QUERY EMBED (VISIBLE) */}
              <div className="w-full h-52 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <iframe 
                  title="CareerLift Office Map"
                  src="https://maps.google.com/maps?q=Prime+Tower,+Shaheed+Nazrul+Islam+Sharak,+Bijoy+Nagar,+Dhaka&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                  className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* ✅ UPDATED: Live Map Link Option pointing to new Google link */}
              <div className="mt-3 flex items-center justify-between bg-slate-100 px-4 py-2.5 rounded-xl border border-slate-200">
                <span className="text-xs font-bold text-slate-700 flex items-center">
                  📍 180–181 Prime Tower, Bijoy Nagar
                </span>
                <a 
                  href="https://maps.app.goo.gl/PAuPP7wDQW79Emk49" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-black text-blue-600 hover:text-blue-800 underline flex items-center space-x-1"
                >
                  <span>Get Live Directions ↗</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10">
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-800">{t.formTitle || (lang === 'EN' ? "Book Free Consultation" : "ফ্রি পরামর্শের জন্য রেজিস্ট্রেশন করুন")}</h3>
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
                      <option value="NSDA Free Course">🎉 NSDA Free Course (Scholarship / স্কলারশিপ)</option>
                      <option value="Care Giving Level-2 & 3">🏥 Care Giving Level-2 & 3 (কেয়ার গিভিং)</option>
                      <option value="IT Skills & Computer Operation">💻 IT Skills & Computer Operation</option>
                      <option value="Day-long Primary Healthcare">🚑 Day-long Primary Healthcare & CPR Workshop</option>
                      <option value="Study Abroad & Visa Consultancy">✈️ Study Abroad & Student Visa Consultancy</option>
                      <option value="Visit & Tourist Visa">🧳 Tourist / Visit Visa Advisory</option>
                    </select>
                    <button
                      type="submit" disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-blue-600 active:scale-98 transition-colors disabled:opacity-50"
                    >
                      {isSubmitting ? 'Processing...' : (t.formBtn || 'Submit Request')}
                    </button>
                    <div className="flex items-center justify-center space-x-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-4">
                      <ShieldCheck size={14} />
                      <span>Secure & Confidential</span>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}