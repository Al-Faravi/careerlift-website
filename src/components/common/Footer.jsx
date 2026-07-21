import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/60 bg-white/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
{/* Clean Logo Only - Click to Refresh & Go Home */}
          <div className="md:col-span-2 space-y-4">
            <div onClick={() => window.location.href = '/'} className="inline-block cursor-pointer">
              <img 
                src="/careerlift-logo.png" 
                alt="CareerLift" 
                className="h-10 sm:h-12 w-auto object-contain drop-shadow-sm"
              />
            </div>
            <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
              Empowering individuals with practical tech skills, expert career mentorship, and study abroad consultancy to build a brighter future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link to="/courses" className="hover:text-blue-600 transition">All Courses</Link></li>
              <li><Link to="/study-abroad" className="hover:text-blue-600 transition">Study Abroad</Link></li>
              <li><Link to="/services" className="hover:text-blue-600 transition">Our Services</Link></li>
              <li><Link to="/about-us" className="hover:text-blue-600 transition">About Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Email: info@careerlift.com</li>
              <li>Phone: +880 1XXX-XXXXXX</li>
              <li>Location: Dhaka, Bangladesh</li>
            </ul>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-white/40 text-center text-xs text-slate-500 font-medium">
          © {new Date().getFullYear()} CareerLift Institute. All rights reserved.
        </div>
      </div>
    </footer>
  );
}