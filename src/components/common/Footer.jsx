import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Youtube, MessageCircle, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="mt-24 border-t border-slate-200/60 bg-white/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Socials */}
          <div className="md:col-span-5 space-y-6">
            <div onClick={() => window.location.href = '/'} className="inline-block cursor-pointer">
              <img 
                src="/careerlift-logo.png" 
                alt="CareerLift" 
                className="h-10 sm:h-12 w-auto object-contain drop-shadow-sm hover:scale-105 transition-transform"
              />
            </div>
            <p className="text-sm text-slate-600 leading-relaxed font-medium pr-4">
              <span className="font-bold text-slate-800">Global Education & Migration Services. NSDA Recognized.</span><br/>
              {lang === 'EN' 
                ? 'Empowering individuals with practical tech skills, healthcare training, and study abroad consultancy to build a brighter future.'
                : 'প্র্যাকটিক্যাল টেক স্কিল, হেলথকেয়ার ট্রেনিং এবং স্টাডি অ্যাব্রোড কনসালটেন্সির মাধ্যমে ভবিষ্যৎ প্রজন্মকে দক্ষ করে তোলা হচ্ছে।'}
            </p>
            
            {/* Social Media Icons with Official X (Twitter) Logo SVG */}
            <div className="flex items-center space-x-4 pt-2">
              <a href="https://www.facebook.com/careerliftskill/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-sm" title="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://www.youtube.com/@CareerliftInstitute" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all shadow-sm" title="YouTube">
                <Youtube size={18} />
              </a>
              <a href="https://wa.me/8801818304081" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all shadow-sm" title="WhatsApp">
                <MessageCircle size={18} />
              </a>
              
              {/* Official X (Twitter) Icon */}
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-sm" title="X (Twitter)">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all shadow-sm" title="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-black text-slate-800 text-sm uppercase tracking-widest mb-6">Services & Links</h4>
            <ul className="space-y-3 text-sm font-medium text-slate-600">
              <li><Link to="/courses" className="hover:text-blue-600 hover:translate-x-1 inline-block transition-all">All Courses</Link></li>
              <li><Link to="/study-abroad" className="hover:text-blue-600 hover:translate-x-1 inline-block transition-all">Student Visa & Immigration</Link></li>
              <li><Link to="/courses" className="hover:text-blue-600 hover:translate-x-1 inline-block transition-all">NSDA Free Training</Link></li>
              <li><Link to="/about-us" className="hover:text-blue-600 hover:translate-x-1 inline-block transition-all">About Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="md:col-span-4">
            <h4 className="font-black text-slate-800 text-sm uppercase tracking-widest mb-6">Contact Office</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-600">
              <li className="flex items-start space-x-3 group">
                <Phone size={18} className="text-blue-600 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <a href="tel:+8801818304081" className="hover:text-blue-600 block transition">+880 1818-304081 (WhatsApp)</a>
                  <a href="tel:+8801965157203" className="hover:text-blue-600 block transition">+880 1965-157203</a>
                </div>
              </li>
              <li className="flex items-start space-x-3 group">
                <Mail size={18} className="text-blue-600 mt-0.5 group-hover:scale-110 transition-transform" />
                <a href="mailto:careerliftinstitute@gmail.com" className="hover:text-blue-600 transition break-all">
                  careerliftinstitute@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3 group">
                <MapPin size={18} className="text-blue-600 mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="leading-relaxed">
                  180-181 Prime Tower (Lift-3),<br/>
                  Shaheed Nazrul Islam Sharak,<br/>
                  Bijoy Nagar, Dhaka-1000
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-12 pt-6 border-t border-slate-200/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-bold text-slate-500">
          <div className="text-center md:text-left">
            © 2025 CareerLift (A Skill Development Institute And Medical Solutions). All Rights Reserved.
          </div>
          <div className="flex items-center space-x-4">
            <Link to="#" className="hover:text-blue-600 transition">Privacy Policy</Link>
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <Link to="#" className="hover:text-blue-600 transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}