import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

// Pages
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import StudyAbroad from './pages/StudyAbroad/StudyAbroad';
import Services from './pages/Services/Services';
import AboutUs from './pages/AboutUs/AboutUs';
import NsdaFreeCourse from './pages/Courses/NsdaFreeCourse'; // New Dedicated Page

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-between relative overflow-hidden">
        
        {/* Decorative Background Glows for Glassmorphism */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl -z-10 animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/15 rounded-full blur-3xl -z-10 animate-pulse pointer-events-none"></div>

        {/* Top Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/study-abroad" element={<StudyAbroad />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/nsda-free-course" element={<NsdaFreeCourse />} /> {/* Dedicated Route */}
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

      </div>
    </Router>
  );
}