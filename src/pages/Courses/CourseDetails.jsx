import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  CheckCircle2, Clock, Star, BookOpen, Award, Users, 
  ShieldCheck, ArrowRight, Briefcase, Target, Phone, MapPin, 
  GraduationCap, PlayCircle, FileText, ArrowLeft 
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function CourseDetails() {
  const { id } = useParams();
  const { lang } = useLanguage();

  // স্ক্রল টু টপ
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // ১০০% রিয়েল ডাটাবেজ - ১১টি কোর্সের সম্পূর্ণ সিলেবাস ও ডিটেইলস
  const detailedCourses = {
    "1": {
      category: "Caregiving",
      image: "/Elderly person.png",
      title: { EN: "Caregiving for Elderly Persons Level 3", BN: "কেয়ারগিভিং ফর এল্ডারলি পার্সনস লেভেল-৩" },
      desc: { 
        EN: "A highly specialized training program focused on geriatric care, designed for compassionate individuals aiming to build a secure global career in healthcare.", 
        BN: "বয়স্ক ব্যক্তিদের সঠিক যত্ন ও সেবার ওপর ভিত্তি করে তৈরি বিশেষায়িত কোর্স। যারা দেশ ও বিদেশে হেলথকেয়ার সেক্টরে একটি নিরাপদ ক্যারিয়ার গড়তে চান, তাদের জন্য এই কোর্সটি অপরিহার্য।" 
      },
      duration: "3 - 6 Months",
      rating: "5.0",
      reviews: "128",
      eligibility: { EN: "Minimum SSC Pass", BN: "ন্যূনতম এসএসসি পাশ" },
      audience: [
        { EN: "Aspiring healthcare professionals", BN: "ভবিষ্যৎ হেলথকেয়ার প্রফেশনাল" },
        { EN: "Candidates applying for UK/Japan Visas", BN: "ইউকে এবং জাপান ভিসার আবেদনকারী" },
        { EN: "Anyone passionate about helping the elderly", BN: "যারা বয়স্কদের সেবা করতে আগ্রহী" }
      ],
      syllabus: [
        { EN: "Basic Human Anatomy & Physiology", BN: "বেসিক হিউম্যান অ্যানাটমি ও ফিজিওলজি" },
        { EN: "Vital Signs Monitoring (BP, Sugar, Pulse)", BN: "ভাইটাল সাইন মনিটরিং (বিপি, সুগার, পালস)" },
        { EN: "Infection Control & Hygiene Management", BN: "ইনফেকশন কন্ট্রোল এবং হাইজিন ম্যানেজমেন্ট" },
        { EN: "First Aid & Emergency Response", BN: "ফার্স্ট এইড এবং জরুরি রেসপন্স" },
        { EN: "Geriatric Nutrition & Diet Planning", BN: "বয়স্কদের পুষ্টি ও ডায়েট প্ল্যানিং" }
      ],
      career: { EN: "UK, Japan & Canada Skilled Worker Visa, Top Local Hospitals & Care Homes.", BN: "ইউকে, জাপান, কানাডা কেয়ারগিভার ভিসা এবং দেশীয় স্বনামধন্য হাসপাতাল ও কেয়ার হোম।" }
    },
    "2": {
      category: "Caregiving",
      image: "/Infant toddlers.png",
      title: { EN: "Caregiving for Infants, Toddlers and Children Level 3", BN: "কেয়ারগিভিং ফর ইনফ্যান্টস, টডলার্স অ্যান্ড চিলড্রেন লেভেল-৩" },
      desc: { 
        EN: "Comprehensive pediatric caregiving covering infant nutrition, child hygiene, early childhood development, safety protocols, and pediatric emergency first aid.", 
        BN: "নবজাতক ও শিশুদের সঠিক পুষ্টি, স্বাস্থ্যবিধি, মানসিক বিকাশ, নিরাপত্তা প্রোটোকল এবং পেডিয়াট্রিক ফার্স্ট এইডের ওপর আন্তর্জাতিক মানের পূর্ণাঙ্গ প্রশিক্ষণ।" 
      },
      duration: "3 - 6 Months",
      rating: "5.0",
      reviews: "95",
      eligibility: { EN: "Minimum SSC Pass", BN: "ন্যূনতম এসএসসি পাশ" },
      audience: [
        { EN: "Aspiring Nannies & Daycare workers", BN: "ভবিষ্যৎ ন্যানি এবং ডে-কেয়ার কর্মী" },
        { EN: "Au Pair visa candidates (Europe/USA)", BN: "ইউরোপ বা আমেরিকায় Au Pair ভিসা প্রত্যাশী" },
        { EN: "Pediatric care assistants", BN: "পেডিয়াট্রিক কেয়ার অ্যাসিস্ট্যান্ট" }
      ],
      syllabus: [
        { EN: "Infant Nutrition & Feeding Techniques", BN: "শিশুর পুষ্টি এবং খাওয়ানোর কৌশল" },
        { EN: "Early Childhood Psychological Development", BN: "শিশুর মানসিক ও বুদ্ধিবৃত্তিক বিকাশ" },
        { EN: "Pediatric First Aid & CPR", BN: "পেডিয়াট্রিক ফার্স্ট এইড এবং সিপিআর" },
        { EN: "Hygiene & Infection Control for Kids", BN: "শিশুদের হাইজিন এবং ইনফেকশন কন্ট্রোল" }
      ],
      career: { EN: "Daycare Centers, Au Pair Programs abroad, Pediatric Hospitals.", BN: "ডে-কেয়ার সেন্টার, বিদেশের Au Pair প্রোগ্রাম এবং পেডিয়াট্রিক হাসপাতাল।" }
    },
    "3": {
      category: "Caregiving",
      image: "/Dementia caregiving.png",
      title: { EN: "Dementia Caregiving Level 3", BN: "ডিমেনশিয়া কেয়ারগিভিং লেভেল-৩" },
      desc: { 
        EN: "Advanced clinical caregiving for patients with Alzheimer's and Dementia. Master behavioral management, memory care techniques, and compassionate communication.", 
        BN: "অ্যালঝাইমার এবং ডিমেনশিয়ায় আক্রান্ত রোগীদের বিশেষ ক্লিনিক্যাল যত্ন। রোগীর আচরণের পরিবর্তন ব্যবস্থাপনা, মেমোরি কেয়ার এবং সংবেদনশীল যোগাযোগের ওপর উচ্চতর প্রশিক্ষণ।" 
      },
      duration: "3 - 6 Months",
      rating: "5.0",
      reviews: "112",
      eligibility: { EN: "Minimum SSC Pass", BN: "ন্যূনতম এসএসসি পাশ" },
      audience: [
        { EN: "Experienced Caregivers upgrading skills", BN: "অভিজ্ঞ কেয়ারগিভার যারা দক্ষতা বাড়াতে চান" },
        { EN: "Specialized nurses", BN: "বিশেষায়িত নার্স" },
        { EN: "Japan SSW Visa Candidates", BN: "জাপান SSW ভিসা ক্যান্ডিডেট" }
      ],
      syllabus: [
        { EN: "Understanding Alzheimer's & Dementia", BN: "অ্যালঝাইমার ও ডিমেনশিয়া সম্পর্কে ধারণা" },
        { EN: "Behavioral Change Management", BN: "আচরণের পরিবর্তন নিয়ন্ত্রণ ও ব্যবস্থাপনা" },
        { EN: "Memory Care & Cognitive Exercises", BN: "মেমোরি কেয়ার এবং কগনিটিভ ব্যায়াম" },
        { EN: "Compassionate Communication", BN: "রোগীর সাথে সংবেদনশীল যোগাযোগ" }
      ],
      career: { EN: "Specialized Care Homes in UK, Japan, and Canada.", BN: "ইউকে, জাপান এবং কানাডার বিশেষায়িত কেয়ার হোম।" }
    },
    "4": {
      category: "Caregiving",
      image: "/Special needs.png",
      title: { EN: "Caregiving for Special Needs Persons Level 3", BN: "কেয়ারগিভিং ফর স্পেশাল নিডস পার্সনস লেভেল-৩" },
      desc: { 
        EN: "Professional support and mobility assistance for individuals with physical or cognitive disabilities. Learn adaptive care, patience, and specialized rehabilitation support.", 
        BN: "শারীরিক বা মানসিক প্রতিবন্ধকতার শিকার ও বিশেষ চাহিদাসম্পন্ন ব্যক্তিদের সহায়তার জন্য প্রফেশনাল প্রশিক্ষণ। মোবিলিটি সাপোর্ট এবং পুনর্বাসন সেবার কৌশল শিক্ষা।" 
      },
      duration: "3 - 6 Months",
      rating: "5.0",
      reviews: "88",
      eligibility: { EN: "Minimum SSC Pass", BN: "ন্যূনতম এসএসসি পাশ" },
      audience: [
        { EN: "Disability support workers", BN: "প্রতিবন্ধী সহায়তা কর্মী" },
        { EN: "Rehabilitation assistants", BN: "রিহ্যাবিলিটেশন অ্যাসিস্ট্যান্ট" }
      ],
      syllabus: [
        { EN: "Mobility & Wheelchair Assistance", BN: "মোবিলিটি এবং হুইলচেয়ার সহায়তা" },
        { EN: "Adaptive Care Techniques", BN: "অ্যাডাপটিভ কেয়ার টেকনিক" },
        { EN: "Physical Therapy Basics", BN: "বেসিক ফিজিক্যাল থেরাপি" },
        { EN: "Psychological Support & Empathy", BN: "মানসিক সহায়তা এবং সহানুভূতি" }
      ],
      career: { EN: "Rehab Centers, Disability Support Homes Globally.", BN: "রিহ্যাব সেন্টার এবং গ্লোবাল ডিজেবিলিটি সাপোর্ট হোম।" }
    },
    "5": {
      category: "Healthcare & Beauty",
      image: "/Primary healthcare.png",
      title: { EN: "Primary Healthcare Service Level 2", BN: "প্রাইমারি হেলথকেয়ার সার্ভিস লেভেল-২" },
      desc: { 
        EN: "Foundation course in primary community healthcare, patient assessment, basic pharmacology, hygiene management, and first response medical assistance.", 
        BN: "প্রাথমিক স্বাস্থ্যসেবা, রোগীর প্রাথমিক মূল্যায়ন, সাধারণ ওষুধ ব্যবস্থাপনা, স্বাস্থ্যবিধি এবং জরুরি প্রাথমিক চিকিৎসার ওপর ভিত্তিপ্রস্তর এবং গুরুত্বপূর্ণ কারিগরি কোর্স।" 
      },
      duration: "3 Months",
      rating: "4.9",
      reviews: "156",
      eligibility: { EN: "Minimum SSC Pass", BN: "ন্যূনতম এসএসসি পাশ" },
      audience: [
        { EN: "Community health workers", BN: "কমিউনিটি হেলথ ওয়ার্কার" },
        { EN: "Pharmacy assistants", BN: "ফার্মেসি অ্যাসিস্ট্যান্ট" },
        { EN: "Clinic receptionists & aides", BN: "ক্লিনিক রিসিপশনিস্ট ও এইড" }
      ],
      syllabus: [
        { EN: "Patient Assessment & Triage", BN: "রোগীর মূল্যায়ন এবং ট্রায়াজ" },
        { EN: "Basic Pharmacology & Medicine Intro", BN: "বেসিক ফার্মাকোলজি এবং ওষুধের পরিচিতি" },
        { EN: "First Response Medical Assistance", BN: "ফার্স্ট রেসপন্স মেডিকেল অ্যাসিস্ট্যান্স" },
        { EN: "Clinical Hygiene Management", BN: "ক্লিনিক্যাল হাইজিন ম্যানেজমেন্ট" }
      ],
      career: { EN: "Local Clinics, Diagnostic Centers, and Pharmacies.", BN: "স্থানীয় ক্লিনিক, ডায়াগনস্টিক সেন্টার এবং ফার্মেসি।" }
    },
    "6": {
      category: "Healthcare & Beauty",
      image: "/Skin Care.png",
      title: { EN: "Skin Care Level 3", BN: "স্কিন কেয়ার লেভেল-৩" },
      desc: { 
        EN: "Professional dermatology basics, aesthetic skincare treatments, facial therapy, skin analysis, and hygiene protocols for modern salons and clinical aesthetic centers.", 
        BN: "ত্বকের সঠিক যত্ন, এস্থেটিক ট্রিটমেন্ট, ফেসিয়াল থেরাপি, স্কিন অ্যানালাইসিস এবং আধুনিক ক্লিনিক্যাল ও সেলুন হাইজিন প্রোটোকলের ওপর প্রফেশনাল লেভেল-৩ প্রশিক্ষণ।" 
      },
      duration: "3 Months",
      rating: "4.9",
      reviews: "142",
      eligibility: { EN: "Minimum SSC Pass", BN: "ন্যূনতম এসএসসি পাশ" },
      audience: [
        { EN: "Aspiring Beauticians & Aestheticians", BN: "ভবিষ্যৎ বিউটিশিয়ান এবং এস্থেটিশিয়ান" },
        { EN: "Salon Owners", BN: "পার্লার বা সেলুন মালিক" }
      ],
      syllabus: [
        { EN: "Dermatology Basics & Skin Analysis", BN: "ত্বকের গঠন এবং স্কিন অ্যানালাইসিস" },
        { EN: "Facial Therapy & Aesthetics", BN: "ফেসিয়াল থেরাপি এবং এস্থেটিকস" },
        { EN: "Clinical Salon Hygiene", BN: "ক্লিনিক্যাল সেলুন হাইজিন" },
        { EN: "Product Knowledge & Application", BN: "প্রসাধনী জ্ঞান এবং ব্যবহার বিধি" }
      ],
      career: { EN: "Aesthetic Clinics, Premium Salons, Self-Employment.", BN: "এস্থেটিক ক্লিনিক, প্রিমিয়াম পার্লার এবং আত্মকর্মসংস্থান।" }
    },
    "7": {
      category: "Language Skills",
      image: "/japanese language.png",
      title: { EN: "Japanese Language Level 2 (SSW Prep)", BN: "জাপানিজ ল্যাঙ্গুয়েজ লেভেল-২ (SSW প্রস্তুতি)" },
      desc: { 
        EN: "Tailored Japanese language mastery focusing on N5/N4 standards and healthcare vocabulary. Designed specifically for candidates aiming for Japan Specified Skilled Worker visas.", 
        BN: "জাপানের SSW (Specified Skilled Worker) কেয়ারগিভিং ও স্কিলড ভিসার জন্য বিশেষায়িত ভাষা প্রশিক্ষণ। জাপানি সংস্কৃতি, স্পোকেন এবং হেলথকেয়ার টেকনিক্যাল শব্দাবলি শিক্ষা।" 
      },
      duration: "3 - 4 Months",
      rating: "5.0",
      reviews: "205",
      eligibility: { EN: "Minimum SSC Pass", BN: "ন্যূনতম এসএসসি পাশ" },
      audience: [
        { EN: "Japan SSW Visa Candidates", BN: "জাপান SSW ভিসা প্রত্যাশী" },
        { EN: "Students aiming for higher study in Japan", BN: "জাপানে উচ্চশিক্ষায় আগ্রহী শিক্ষার্থী" }
      ],
      syllabus: [
        { EN: "Hiragana, Katakana & Basic Kanji", BN: "হিরাগানা, কাতাকানা এবং বেসিক কাঞ্জি" },
        { EN: "Everyday Japanese Conversation", BN: "দৈনন্দিন জাপানি কথোপকথন" },
        { EN: "Healthcare & Caregiving Vocabulary", BN: "হেলথকেয়ার ও কেয়ারগিভিং শব্দভাণ্ডার" },
        { EN: "JLPT N5 / NAT Exam Preparation", BN: "JLPT N5 / NAT পরীক্ষার প্রস্তুতি" }
      ],
      career: { EN: "Direct pathway to Japan SSW Visa and Study Visa.", BN: "জাপান SSW জব ভিসা এবং স্টুডেন্ট ভিসার সরাসরি পথ।" }
    },
    "8": {
      category: "Language Skills",
      image: "/English for work.png",
      title: { EN: "English for Work Level 2", BN: "ইংলিশ ফর ওয়ার্ক লেভেল-২" },
      desc: { 
        EN: "Practical workplace communication, professional email writing, interview preparation, and fluent spoken English tailored for corporate jobs and international work environments.", 
        BN: "কর্মক্ষেত্রে সাবলীল ইংরেজি কথোপকথন, প্রফেশনাল ইমেইল রাইটিং, ইন্টারভিউ প্রস্তুতি এবং কর্পোরেট ও আন্তর্জাতিক কর্মপরিবেশের জন্য ব্যবহারিক ইংরেজি যোগাযোগ দক্ষতা।" 
      },
      duration: "3 Months",
      rating: "4.9",
      reviews: "180",
      eligibility: { EN: "Open for Everyone", BN: "সবার জন্য উন্মুক্ত" },
      audience: [
        { EN: "Corporate Employees", BN: "কর্পোরেট পেশাজীবী" },
        { EN: "Job Seekers & Freshers", BN: "চাকরিপ্রার্থী এবং ফ্রেশার" },
        { EN: "Freelancers targeting global clients", BN: "আন্তর্জাতিক ক্লায়েন্ট নিয়ে কাজ করা ফ্রিল্যান্সার" }
      ],
      syllabus: [
        { EN: "Fluent Spoken English Practice", BN: "সাবলীল স্পোকেন ইংলিশ প্র্যাকটিস" },
        { EN: "Professional Email & Business Writing", BN: "প্রফেশনাল ইমেইল ও বিজনেস রাইটিং" },
        { EN: "Job Interview Preparation & Mock Tests", BN: "ইন্টারভিউ প্রস্তুতি এবং মক টেস্ট" },
        { EN: "Corporate Etiquette & Presentation", BN: "কর্পোরেট শিষ্টাচার এবং প্রেজেন্টেশন" }
      ],
      career: { EN: "MNCs, BPO, Freelancing, and Corporate sector.", BN: "মাল্টিন্যাশনাল কোম্পানি, বিপিও এবং কর্পোরেট সেক্টর।" }
    },
    "9": {
      category: "IT Skills",
      image: "/Digital Marketing.png",
      title: { EN: "Digital Marketing Level 3", BN: "ডিজিটাল মার্কেটিং লেভেল-৩" },
      desc: { 
        EN: "Master social media marketing, Facebook & Instagram ads, SEO, content strategy, and online brand management. Start freelancing or boost your business growth.", 
        BN: "সোশ্যাল মিডিয়া মার্কেটিং, ফেসবুক ও ইনস্টাগ্রাম অ্যাডস, এসইও (SEO), কন্টেন্ট স্ট্র্যাটেজি এবং অনলাইন ব্র্যান্ডিং মাস্টারক্লাস। ফ্রিল্যান্সিং ও ক্যারিয়ার উন্নতির সেরা মাধ্যম।" 
      },
      duration: "3 Months",
      rating: "4.9",
      reviews: "220",
      eligibility: { EN: "Basic Computer Knowledge", BN: "বেসিক কম্পিউটার জ্ঞান" },
      audience: [
        { EN: "Aspiring Freelancers", BN: "ভবিষ্যৎ ফ্রিল্যান্সার" },
        { EN: "Business Owners & Entrepreneurs", BN: "ব্যবসায়ী এবং উদ্যোক্তা" },
        { EN: "Marketing Professionals", BN: "মার্কেটিং প্রফেশনাল" }
      ],
      syllabus: [
        { EN: "Social Media Marketing (SMM)", BN: "সোশ্যাল মিডিয়া মার্কেটিং (SMM)" },
        { EN: "Facebook & Instagram Ads Mastery", BN: "ফেসবুক ও ইনস্টাগ্রাম অ্যাডস মাস্টারক্লাস" },
        { EN: "Search Engine Optimization (SEO)", BN: "সার্চ ইঞ্জিন অপটিমাইজেশন (SEO)" },
        { EN: "Fiverr & Upwork Freelancing Guidelines", BN: "ফাইবার ও আপওয়ার্ক ফ্রিল্যান্সিং গাইডলাইন" }
      ],
      career: { EN: "Freelance Marketer, SEO Expert, Digital Marketing Agency.", BN: "ফ্রিল্যান্স মার্কেটার, এসইও এক্সপার্ট এবং ডিজিটাল মার্কেটিং এজেন্সি।" }
    },
    "10": {
      category: "Healthcare & Beauty",
      image: "/Day long Primary Healthcare.png",
      title: { EN: "Day-long Primary Healthcare, First Aid & CPR", BN: "দিনব্যাপী প্রাইমারি হেলথ কেয়ার, ফার্স্ট এইড ও সিপিআর" },
      desc: { 
        EN: "Learn essential life-saving skills in just one day! This intensive hands-on workshop equips you with practical knowledge to handle medical emergencies at home or the workplace.", 
        BN: "এক দিনেই শিখুন জীবন রক্ষাকারী দক্ষতা! এই নিবিড় ব্যবহারিক কর্মশালা আপনাকে বাড়ি বা কর্মক্ষেত্রে যেকোনো জরুরি চিকিৎসা পরিস্থিতি সামলানোর বাস্তব জ্ঞান প্রদান করবে।" 
      },
      duration: "1 Day (10 AM - 5 PM)",
      rating: "5.0",
      reviews: "340",
      eligibility: { EN: "Open for everyone", BN: "সবার জন্য উন্মুক্ত" },
      audience: [
        { EN: "Corporate & Factory Employees", BN: "কর্পোরেট এবং ফ্যাক্টরি কর্মী" },
        { EN: "Parents & School Teachers", BN: "অভিভাবক এবং স্কুল শিক্ষক" }
      ],
      syllabus: [
        { EN: "CPR (Cardiopulmonary Resuscitation)", BN: "সিপিআর (CPR) পদ্ধতি" },
        { EN: "Bleeding Control & Wound Care", BN: "রক্তপাত নিয়ন্ত্রণ ও ক্ষত সেবা" },
        { EN: "Heimlich Maneuver (Choking Management)", BN: "চোকিং ম্যানেজমেন্ট ও হাইমলিচ ম্যানুভার" },
        { EN: "Burn Management & Fracture Care", BN: "পোড়া ক্ষত ব্যবস্থাপনা ও হাড় ভাঙা সেবা" }
      ],
      career: { EN: "Garments/Factory Safety Officer, Personal Life-saving Skill.", BN: "গার্মেন্টস বা ফ্যাক্টরি সেফটি অফিসার এবং ব্যক্তিগত জীবন রক্ষাকারী দক্ষতা।" }
    },
    "11": {
      category: "Healthcare & Beauty",
      image: "/CPR & Emmergency Response Program.jpg",
      title: { EN: "CPR & Emergency Response Training Program", BN: "CPR ও ইমার্জেন্সি রেসপন্স ট্রেনিং প্রোগ্রাম" },
      desc: { 
        EN: "An intensive hands-on training featuring live demo sessions on First Aid, CPR, fracture care, and emergency response. Guided by expert medical instructors.", 
        BN: "ফার্স্ট এইড, সিপিআর এবং ইমার্জেন্সি রেসপন্সের ওপর বিশেষজ্ঞ চিকিৎসকদের দ্বারা পরিচালিত হ্যান্ডস-অন প্র্যাকটিক্যাল ট্রেনিং ও লাইভ ডেমো সেশন।" 
      },
      duration: "1 Day (10 AM - 5 PM)",
      rating: "5.0",
      reviews: "215",
      eligibility: { EN: "Open for everyone", BN: "সবার জন্য উন্মুক্ত" },
      audience: [
        { EN: "Health & Safety Officers (HSE)", BN: "হেলথ ও সেফটি অফিসার (HSE)" },
        { EN: "Emergency Responders", BN: "ইমার্জেন্সি রেসপন্ডার" }
      ],
      syllabus: [
        { EN: "Advanced CPR Techniques", BN: "অ্যাডভান্সড সিপিআর টেকনিক" },
        { EN: "Instant Bleeding Control", BN: "তাৎক্ষণিক রক্তপাত নিয়ন্ত্রণ" },
        { EN: "Emergency Burn & Fracture First Aid", BN: "জরুরি পোড়া ও হাড় ভাঙা ফার্স্ট এইড" },
      ],
      career: { EN: "Corporate First Responder, Safety compliance in industries.", BN: "কর্পোরেট ফার্স্ট রেসপন্ডার এবং ইন্ডাস্ট্রিয়াল সেফটি কমপ্লায়েন্স।" }
    }
  };

  // ফলব্যাক (যদি কোনো ভুল আইডিতে প্রবেশ করে)
  const fallbackCourse = detailedCourses["1"];
  const course = detailedCourses[id] || fallbackCourse;

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      
      {/* ================= 1. PREMIUM HERO BANNER ================= */}
      <div className="relative h-[45vh] sm:h-[55vh] w-full bg-slate-900 flex items-center justify-center overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title.EN} 
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center lg:text-left flex flex-col lg:flex-row items-center lg:items-end justify-between">
          <div className="max-w-3xl">
            
            {/* ✅ BACK BUTTON ADDED HERE */}
            <Link to="/courses" className="inline-flex items-center text-slate-300 hover:text-white mb-6 text-sm font-bold transition-colors group">
              <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              {lang === 'EN' ? 'Back to Courses' : 'কোর্স তালিকায় ফিরে যান'}
            </Link>
            <br />

            <span className="px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-black uppercase tracking-widest mb-5 inline-block backdrop-blur-md">
              {course.category}
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              {course.title[lang]}
            </h1>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm font-bold text-slate-300">
              <span className="flex items-center"><Clock size={18} className="mr-2 text-blue-400"/> {course.duration}</span>
              <span className="flex items-center"><Star size={18} className="mr-2 text-amber-400 fill-amber-400"/> {course.rating} ({course.reviews} Reviews)</span>
              <span className="flex items-center"><ShieldCheck size={18} className="mr-2 text-emerald-400"/> NSDA Approved</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 2. MAIN CONTENT & STICKY SIDEBAR ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ================= LEFT CONTENT AREA ================= */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Overview & Highlights */}
            <div className="bg-white rounded-[2rem] p-6 sm:p-10 shadow-sm border border-slate-200/80">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-800 mb-5 flex items-center">
                <BookOpen size={28} className="mr-3 text-blue-600" />
                {lang === 'EN' ? 'Course Overview' : 'কোর্স সম্পর্কে বিস্তারিত'}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium mb-8">
                {course.desc[lang]}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                    <Award size={24} />
                  </div>
                  <div>
                    <span className="text-[11px] font-black text-slate-400 uppercase tracking-wider block mb-1">
                      {lang === 'EN' ? 'Certification' : 'সার্টিফিকেশন'}
                    </span>
                    <span className="text-sm font-bold text-slate-800 block">
                      {lang === 'EN' ? 'Govt. NSDA Certified & Globally Recognized' : 'গণপ্রজাতন্ত্রী বাংলাদেশ সরকার (NSDA) অনুমোদিত'}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <span className="text-[11px] font-black text-slate-400 uppercase tracking-wider block mb-1">
                      {lang === 'EN' ? 'Eligibility' : 'যোগ্যতা'}
                    </span>
                    <span className="text-sm font-bold text-slate-800 block">
                      {course.eligibility[lang]}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Who is this for? */}
            <div className="bg-white rounded-[2rem] p-6 sm:p-10 shadow-sm border border-slate-200/80">
              <h2 className="text-2xl font-black text-slate-800 mb-6 flex items-center">
                <Target size={24} className="mr-3 text-blue-600" />
                {lang === 'EN' ? 'Who Is This Course For?' : 'কারা এই কোর্সটি করতে পারবেন?'}
              </h2>
              <div className="space-y-3">
                {course.audience.map((aud, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-slate-700 font-medium bg-slate-50 px-4 py-3 rounded-xl border border-slate-100">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="text-sm">{aud[lang]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Syllabus */}
            <div className="bg-white rounded-[2rem] p-6 sm:p-10 shadow-sm border border-slate-200/80">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-800 mb-8 flex items-center">
                <FileText size={28} className="mr-3 text-blue-600" />
                {lang === 'EN' ? 'What You Will Learn' : 'যা যা শিখবেন (সিলেবাস)'}
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.syllabus.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all group">
                    <CheckCircle2 size={20} className="text-emerald-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-bold text-slate-700">{item[lang]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-[2rem] p-8 sm:p-10 shadow-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
              <h2 className="text-2xl sm:text-3xl font-black mb-5 flex items-center relative z-10">
                <Briefcase size={28} className="mr-3 text-blue-400" />
                {lang === 'EN' ? 'Career & Global Opportunities' : 'ক্যারিয়ার ও চাকরির সুযোগ'}
              </h2>
              <p className="text-blue-100/90 text-sm sm:text-base font-medium leading-relaxed relative z-10">
                {course.career[lang]}
              </p>
            </div>

          </div>

          {/* ================= RIGHT STICKY ENROLLMENT CARD ================= */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="bg-white rounded-[2rem] p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden relative">
              
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
              
              <div className="text-center mb-8 pt-2">
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase tracking-widest rounded-full mb-4">
                  {lang === 'EN' ? 'Admissions Open' : 'ভর্তি চলছে'}
                </span>
                
                <h3 className="text-xl sm:text-2xl font-black text-slate-800 leading-tight">
                  {lang === 'EN' ? 'Consult for Fee & Scholarship' : 'ফি ও স্কলারশিপ জানতে যোগাযোগ করুন'}
                </h3>
                <p className="text-xs font-bold text-slate-500 mt-2">
                  {lang === 'EN' ? 'Customized plans available' : 'অফিসে বিশেষ ছাড়ের ব্যবস্থা রয়েছে'}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3.5 border-b border-slate-100">
                  <span className="text-xs sm:text-sm font-bold text-slate-500 flex items-center"><Clock size={16} className="mr-2.5 text-slate-400"/> {lang === 'EN' ? 'Duration' : 'সময়কাল'}</span>
                  <span className="text-xs sm:text-sm font-black text-slate-800 text-right">{course.duration}</span>
                </div>
                <div className="flex justify-between items-center py-3.5 border-b border-slate-100">
                  <span className="text-xs sm:text-sm font-bold text-slate-500 flex items-center"><Users size={16} className="mr-2.5 text-slate-400"/> {lang === 'EN' ? 'Batch Limit' : 'আসন সংখ্যা'}</span>
                  <span className="text-xs sm:text-sm font-black text-slate-800 text-right">{lang === 'EN' ? '24 Seats' : '২৪ সিট'}</span>
                </div>
                <div className="flex justify-between items-center py-3.5 border-b border-slate-100">
                  <span className="text-xs sm:text-sm font-bold text-slate-500 flex items-center"><MapPin size={16} className="mr-2.5 text-slate-400"/> {lang === 'EN' ? 'Location' : 'স্থান'}</span>
                  <span className="text-xs sm:text-sm font-black text-slate-800 text-right">{lang === 'EN' ? 'Bijoy Nagar, Dhaka' : 'বিজয় নগর, ঢাকা'}</span>
                </div>
              </div>

              <div className="space-y-3">
                <Link to="/about-us" className="block">
                  <button className="w-full py-4 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-black text-sm shadow-lg active:scale-95 transition-all flex justify-center items-center space-x-2">
                    <span>{lang === 'EN' ? 'Request a Callback' : 'ফ্রি কনসালটেন্সি বুক করুন'}</span>
                    <ArrowRight size={16} />
                  </button>
                </Link>
                
                <a href="tel:+8801814304081" className="block w-full py-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold text-sm active:scale-95 transition-all flex justify-center items-center space-x-2">
                  <Phone size={16} className="text-blue-600"/>
                  <span>{lang === 'EN' ? 'Call Hotline' : 'হটলাইনে কল করুন'}</span>
                </a>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 border border-blue-100 rounded-2xl p-5 text-center">
              <p className="text-xs font-medium text-slate-600">
                {lang === 'EN' ? 'Need help with UK/Japan Visa?' : 'ইউকে বা জাপান ভিসা প্রসেসিং নিয়ে সাহায্য প্রয়োজন?'}
              </p>
              <Link to="/study-abroad" className="text-sm font-black text-blue-600 hover:underline mt-1 inline-block">
                {lang === 'EN' ? 'Explore Visa Services →' : 'ভিসা গাইডলাইন দেখুন →'}
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}