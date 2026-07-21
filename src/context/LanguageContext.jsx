import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('EN'); // 'EN' or 'BN'

  const toggleLang = () => {
    setLang((prev) => (prev === 'EN' ? 'BN' : 'EN'));
  };

  // Content Dictionary (Buttons remain English mostly, content shifts EN/BN)
  const content = {
    EN: {
      badge: "NSDA Recognized Institute",
      heroTitle: "Launch Your Global Career With Us.",
      heroDesc: "CareerLift bridges the gap between education and employment. Expert training in Caregiving, IT Skills, and complete Visa Solutions.",
      heroQuote: '"Empowering 500+ students to find careers in UK, Japan & Canada."',
      stats: [
        { value: "500+", label: "Students Trained" },
        { value: "98%", label: "Success Rate" },
        { value: "Global", label: "Partners" },
        { value: "100%", label: "Job Assistance" },
      ],
      servicesTitle: "Our Premium Services",
      servicesDesc: "Comprehensive solutions designed for your career growth.",
      services: [
        {
          title: "Skill Development",
          desc: "Professional training in IT, Caregiving, and Languages. We follow the official NSDA curriculum to ensure you are job-ready for both local and global markets.",
          btnText: "Explore Courses",
          link: "/courses"
        },
        {
          title: "OTHM (UK Diploma)",
          desc: "Pathway to UK University: Complete your Level 3-5 Diploma here at a low cost, then transfer to a UK university for the final year to earn a full degree.",
          btnText: "Learn More",
          link: "/study-abroad"
        },
        {
          title: "Study Abroad",
          desc: "End-to-end Visa processing for UK, Canada, Malaysia & Japan. We handle university admission, bank solvency, and file processing with a high success rate.",
          btnText: "Visa Guide",
          link: "/study-abroad"
        },
        {
          title: "Skilled Worker",
          desc: "We supply trained Caregivers and Medical Assistants to international hospitals and clinics. Bridging the gap between skilled Bangladeshi workers and global employers.",
          btnText: "Contact Us",
          link: "/about-us"
        }
      ],
      coursesTitle: "Featured Courses",
      coursesDesc: "Start learning today, start earning tomorrow.",
      courses: [
        {
          level: "Beginner",
          title: "Care Giving Level-2",
          rating: "5.0",
          tag: "NSDA Certified",
          btnText: "View Details"
        },
        {
          level: "IT Skills",
          title: "Computer Operation Level-3",
          rating: "4.9",
          tag: "Office Mgmt",
          btnText: "View Details"
        },
        {
          level: "Advanced",
          title: "Care Giving Level-3",
          rating: "5.0",
          tag: "Job Ready",
          btnText: "View Details"
        }
      ],
      storiesTitle: "Student Success Stories",
      storiesDesc: "Real stories from our graduates working globally.",
      stories: [
        {
          quote: '"CareerLift changed my life. The Caregiving course was so practical. I got my visa for the UK within 3 months of completing the course. The instructors are amazing!"',
          name: "Rahim Ahmed",
          role: "Care Worker, UK",
          initials: "RA"
        },
        {
          quote: '"I completed Computer Operation Level-3 here. The lab facilities are great. Now I am working as an Admin Officer in a reputed company in Dhaka."',
          name: "Sadia Jahan",
          role: "Admin Officer, Dhaka",
          initials: "SJ"
        },
        {
          quote: '"The OTHM program guidance was excellent. I finished my Diploma here and now I am applying for my final year at a UK University. Highly recommended!"',
          name: "Tanvir Islam",
          role: "Student, UK Pathway",
          initials: "TI"
        },
        {
          quote: '"I got my Skilled Worker Visa for Japan through CareerLift. Their language training and processing support were 10/10. Thank you CareerLift family!"',
          name: "Mitu Khanom",
          role: "Caregiver, Japan",
          initials: "MK"
        }
      ],
      contactTitle: "Visit Campus",
      contactDesc: "Visit our office directly for a face-to-face consultation.",
      addressTitle: "Address",
      addressText: "Prime Tower (Lift-3), 180–181 Shaheed Nazrul Islam Sharak, Bijoy Nagar, Dhaka-1000",
      hotlineTitle: "Hotline",
      hotlineText: "+880 1814-304081",
      emailTitle: "Email",
      emailText: "careerliftbd@gmail.com",
      locationTag: "📍 Prime Tower",
      formTitle: "Request Consultation",
      formBtn: "Send Message"
    },
    BN: {
      badge: "এনএসডিএ (NSDA) স্বীকৃত ইনস্টিটিউট",
      heroTitle: "আমাদের সাথে আপনার গ্লোবাল ক্যারিয়ার শুরু করুন।",
      heroDesc: "ক্যারিয়ারলিফট শিক্ষা এবং কর্মসংস্থানের মধ্যে সেতুবন্ধন তৈরি করে। কেয়ারগিভিং, আইটি স্কিলস এবং সম্পূর্ণ ভিসা সল্যুশনে অভিজ্ঞদের দ্বারা প্রশিক্ষণ দেওয়া হয়।",
      heroQuote: '"যুক্তরাজ্য, জাপান এবং কানাডায় ক্যারিয়ার গড়তে ৫০০+ শিক্ষার্থীকে সফলভাবে প্রস্তুত করা হয়েছে।"',
      stats: [
        { value: "৫০০+", label: "প্রশিক্ষিত শিক্ষার্থী" },
        { value: "৯৮%", label: "সাফল্যের হার" },
        { value: "গ্লোবাল", label: "পার্টনারসমূহ" },
        { value: "১০০%", label: "জব অ্যাসিস্ট্যান্স" },
      ],
      servicesTitle: "আমাদের প্রিমিয়াম সার্ভিসসমূহ",
      servicesDesc: "আপনার পেশাগত উন্নতির জন্য ডিজাইন করা সমন্বিত সল্যুশন।",
      services: [
        {
          title: "স্কিল ডেভেলপমেন্ট",
          desc: "আইটি, কেয়ারগিভিং এবং ল্যাঙ্গুয়েজের ওপর প্রফেশনাল ট্রেনিং। আমরা অফিসিয়াল NSDA কারিকুলাম অনুসরণ করি যাতে আপনি দেশী ও বিদেশী চাকরির বাজারের জন্য প্রস্তুত হতে পারেন।",
          btnText: "Explore Courses",
          link: "/courses"
        },
        {
          title: "OTHM (ইউকে ডিপ্লোমা)",
          desc: "ইউকে ইউনিভার্সিটিতে পড়ার সহজ মাধ্যম: এখানে স্বল্প খরচে লেভেল ৩-৫ ডিপ্লোমা শেষ করুন, তারপর পূর্ণাঙ্গ ডিগ্রির জন্য শেষ বর্ষে সরাসরি ইউকে ইউনিভার্সিটিতে ক্রেডিট ট্রান্সফার করুন।",
          btnText: "Learn More",
          link: "/study-abroad"
        },
        {
          title: "স্টাডি অ্যাব্রড (বিদেশ যাত্রা)",
          desc: "ইউকে, কানাডা, মালয়েশিয়া ও জাপানের জন্য এন্ড-টু-এন্ড ভিসা প্রসেসিং। আমরা সর্বোচ্চ সাফল্যের হারে ইউনিভার্সিটি অ্যাডমিশন, ব্যাংক সলভেন্সি এবং ফাইল প্রসেসিং সম্পন্ন করি।",
          btnText: "Visa Guide",
          link: "/study-abroad"
        },
        {
          title: "স্কিলড ওয়ার্কার (দক্ষ কর্মী)",
          desc: "আমরা আন্তর্জাতিক হাসপাতাল ও ক্লিনিকে প্রশিক্ষিত কেয়ারগিভার ও মেডিকেল অ্যাসিস্ট্যান্ট সরবরাহ করি। দক্ষ বাংলাদেশি কর্মী ও বিশ্বমানের নিয়োগদাতাদের সেতুবন্ধন।",
          btnText: "Contact Us",
          link: "/about-us"
        }
      ],
      coursesTitle: "ফিচার্ড কোর্সসমূহ",
      coursesDesc: "আজই শেখা শুরু করুন, আগামীর ক্যারিয়ার গড়ে তুলুন।",
      courses: [
        {
          level: "Beginner",
          title: "Care Giving Level-2",
          rating: "5.0",
          tag: "NSDA Certified",
          btnText: "View Details"
        },
        {
          level: "IT Skills",
          title: "Computer Operation Level-3",
          rating: "4.9",
          tag: "Office Mgmt",
          btnText: "View Details"
        },
        {
          level: "Advanced",
          title: "Care Giving Level-3",
          rating: "5.0",
          tag: "Job Ready",
          btnText: "View Details"
        }
      ],
      storiesTitle: "শিক্ষার্থীদের সাফল্যের গল্প",
      storiesDesc: "বিশ্বজুড়ে কর্মরত আমাদের সফল শিক্ষার্থীদের বাস্তব অভিজ্ঞতা।",
      stories: [
        {
          quote: '"ক্যারিয়ারলিফট আমার জীবন বদলে দিয়েছে। কেয়ারগিভিং কোর্সটি অত্যন্ত চমৎকার ছিল। কোর্স শেষ করার ৩ মাসের মধ্যেই আমি ইউকে-র ভিসা পেয়েছি। এখানকার ইন্সট্রাক্টররা অসাধারণ!"',
          name: "রহিম আহমেদ",
          role: "কেয়ার ওয়ার্কার, ইউকে",
          initials: "RA"
        },
        {
          quote: '"আমি এখান থেকে কম্পিউটার অপারেশন লেভেল-৩ সম্পন্ন করেছি। এখানকার ল্যাব সুবিধা অনেক ভালো। এখন আমি ঢাকার একটি সুপরিচিত প্রতিষ্ঠানে অ্যাডমিন অফিসার হিসেবে কর্মরত আছি।"',
          name: "সাদিয়া জাহান",
          role: "অ্যাডমিন অফিসার, ঢাকা",
          initials: "SJ"
        },
        {
          quote: '"OTHM প্রোগ্রামের গাইডলাইন এক কথায় অসাধারণ ছিল। আমি এখানে আমার ডিপ্লোমা শেষ করেছি এবং এখন ইউকে ইউনিভার্সিটিতে শেষ বর্ষের জন্য আবেদন করছি। সবাইকে হাইলি রেকমেন্ড করছি!"',
          name: "তানভীর ইসলাম",
          role: "শিক্ষার্থী, ইউকে পাথওয়ে",
          initials: "TI"
        },
        {
          quote: '"আমি ক্যারিয়ারলিফটের মাধ্যমে জাপানের স্কিলড ওয়ার্কার ভিসা পেয়েছি। তাদের ল্যাঙ্গুয়েজ ট্রেনিং এবং প্রসেসিং সাপোর্ট ছিল ১০/১০। ধন্যবাদ ক্যারিয়ারলিফট পরিবারকে!"',
          name: "মিতু খানম",
          role: "কেয়ারগিভার, জাপান",
          initials: "MK"
        }
      ],
      contactTitle: "সরাসরি ভিজিট করুন",
      contactDesc: "সরাসরি কথা বলতে চলে আসুন আমাদের অফিসে।",
      addressTitle: "ঠিকানা",
      addressText: "প্রাইম টাওয়ার (লিফট-৩), ১৮০–১৮১ শহীদ নজরুল ইসলাম সড়ক, বিজয় নগর, ঢাকা-১০০০",
      hotlineTitle: "হটলাইন",
      hotlineText: "+৮৮০ ১৮১৪-৩০৪০৮১",
      emailTitle: "ইমেইল",
      emailText: "careerliftbd@gmail.com",
      locationTag: "📍 প্রাইম টাওয়ার",
      formTitle: "কাউন্সিলিংয়ের জন্য আবেদন করুন",
      formBtn: "মেসেজ পাঠান"
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};