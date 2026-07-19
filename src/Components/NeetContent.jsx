import React, { useState } from "react";
import { HeartPulse, BookOpen, Award, Layers, ArrowRight, GraduationCap, Laptop, HelpCircle, Trophy, TrendingUp, ClipboardCheck, Clock, Users } from "lucide-react";
import ExploreLinks from "./ExploreLinks";
import EnrollmentForm from "./EnrollmentForm";
import FAQSection from "./FAQSection";
import TMatSection from "./TMatSection";

function NeetContent() {
  const examInfo = {
    title: "NEET (National Eligibility cum Entrance Test)",
    description:
      "NEET is the single national-level entrance exam for admission to MBBS, BDS, AYUSH, and other medical courses in India. Conducted by the NTA, NEET tests students’ knowledge in Physics, Chemistry, and Biology (Class 11 & 12 level).",
    highlights: [
      "Single paper exam conducted by NTA",
      "Subjects: Physics, Chemistry, Biology (Botany + Zoology)",
      "Duration: 3 Hours 20 Minutes",
      "Mode: Offline (Pen & Paper)",
      "Total Questions: 200 (180 to be attempted)",
      "Marking Scheme: +4 for correct, -1 for wrong",
    ],
  };

  const overview = [
    {
      title: "Strong Foundation",
      detail:
        "Focus on NCERT-based concepts of Physics, Chemistry, and Biology to ensure clarity of fundamentals.",
    },
    {
      title: "Biology Emphasis",
      detail:
        "Special attention to Biology, which carries maximum weightage (50% of the paper).",
    },
    {
      title: "Regular Mock Tests",
      detail:
        "NEET-pattern tests conducted weekly and monthly to improve accuracy, speed, and time management.",
    },
    {
      title: "Doubt Clearing Sessions",
      detail:
        "Dedicated doubt-solving hours and one-on-one mentorship to help students overcome weaknesses.",
    },
    {
      title: "Comprehensive Study Material",
      detail:
        "Updated notes and practice booklets designed by expert faculty, aligned with the NEET syllabus.",
    },
    {
      title: "Performance Tracking",
      detail:
        "Access to our Student Portal to check mock test results, download report cards, and track academic progress.",
    },
  ];

  const faqs = [
    {
      question: "Why should I choose Team Excellent Career Institute for NEET preparation?",
      answer: "We focus on concept-based learning, regular tests, experienced faculty, and personal mentoring. Every student receives individual attention, regular performance reviews, and doubt-solving support to help them prepare with confidence."
    },
    {
      question: "Who can join the NEET coaching program?",
      answer: "Students studying in Class 11, Class 12, or those taking a drop year after Class 12 can join our NEET coaching programs."
    },
    {
      question: "Do you offer separate batches for Class 11, Class 12, and droppers?",
      answer: "Yes. We have dedicated batches for Class 11 students, Class 12 students, and NEET droppers so that the teaching pace and study plan match each student's needs."
    },
    {
      question: "Which subjects are covered in the course?",
      answer: "Our NEET coaching covers all three subjects—Biology, Physics, and Chemistry—according to the latest NEET syllabus."
    },
    {
      question: "How often are tests conducted?",
      answer: "We conduct regular chapter-wise tests, unit tests, revision tests, and full-length mock tests to track every student's progress and improve exam performance."
    },
    {
      question: "Will I get study materials?",
      answer: "Yes. Students receive comprehensive study materials, practice worksheets, assignments, revision notes, and mock test papers prepared by our experienced faculty."
    },
    {
      question: "What if I have doubts after class?",
      answer: "No problem. We conduct dedicated doubt-solving sessions where students can ask questions and get clear explanations from our faculty."
    },
    {
      question: "How do you help students improve their scores?",
      answer: "After every test, we analyze each student's performance, identify weak areas, and provide personalized guidance so they can improve continuously."
    },
    {
      question: "Are there scholarship programs available?",
      answer: "Yes. We offer up to 100% scholarship to students after they clear the T-MAT Scholarship Test. Scholarships are awarded based on test scores and performance."
    },
    {
      question: "Do you provide counseling for students and parents?",
      answer: "Yes. We offer academic counseling to help students choose the right batch, plan their preparation, and keep parents informed about their child's progress."
    },
    {
      question: "What is the batch size?",
      answer: "We maintain a limited batch size so that every student receives proper attention and has the opportunity to interact with the faculty."
    },
    {
      question: "Can I join the course if my preparation has already started?",
      answer: "Absolutely. Our counselors will assess your current preparation level and recommend the most suitable batch for you."
    },
    {
      question: "How can I take admission?",
      answer: "You can visit our institute, call our admission team, or fill out the enquiry form on our website. Our counselors will guide you through the complete admission process."
    },
    {
      question: "Do you provide regular progress reports?",
      answer: "Yes. Students receive regular performance reports based on classroom tests, mock exams, attendance, and overall academic progress."
    },
    {
      question: "How can I book a free counseling session?",
      answer: "Simply contact us by phone, WhatsApp, or fill out the enquiry form on our website. Our team will schedule a counseling session at your convenience."
    }
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCourse, setModalCourse] = useState("");

  const handleOpenModal = (course = "") => {
    setModalCourse(course);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full">
      {/* Subpage Hero Section */}
      <section className="relative w-full min-h-[85vh] bg-[#fafafc] pt-[120px] pb-[40px] flex items-center justify-center overflow-x-hidden text-center animate-fade-in border-b border-slate-100">
        {/* Ambient Grid & Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e0ff_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
        <div className="absolute -top-30 left-1/4 -z-10 h-[250px] w-[250px] rounded-full bg-purple-200/40 blur-[80px]" />
        <div className="absolute top-20 right-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-rose-100/30 blur-[90px]" />

        <div className="relative max-w-4xl mx-auto px-6 w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50/80 px-4 py-1.5 text-[10px] sm:text-xs font-semibold text-[#5B2D7C] shadow-sm backdrop-blur-sm mb-6">
            <HeartPulse className="w-4 h-4 text-[#5B2D7C]" />
            <span className="tracking-wide">Medical Entrance Preparation | Up to 100% Scholarship after T-MAT Test</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1e1b4b] leading-tight mb-6">
            Best NEET Coaching <br />
            <span className="bg-gradient-to-r from-[#5B2D7C] via-[#8424bd] to-[#b72e2f] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(91,45,124,0.08)]">
              in Patna
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-medium">
            Are you searching for the best coaching for NEET in Patna? Team Excellent Career Institute provides premium medical entrance coaching, offering deep NCERT-focused study and expert guidance to help you clear NEET UG with top scores.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto mt-8">
            <button
              onClick={() => handleOpenModal("NEET")}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#5B2D7C] to-[#8424bd] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              Apply for NEET Coaching
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleOpenModal("NEET")}
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-6 py-3 text-xs sm:text-sm font-bold text-slate-700 hover:border-[#5B2D7C]/60 hover:bg-[#5B2D7C]/5 hover:-translate-y-0.5 transition-all duration-200"
            >
              Book Free Demo
            </button>
          </div>

          {/* Key NEET Highlights / Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12 pt-8 border-t border-slate-200/60">
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.015)] border border-slate-100/80 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-purple-100 hover:-translate-y-0.5 transition-all duration-300">
              <span className="text-base sm:text-lg font-black text-[#5B2D7C]">Expert Biology</span>
              <span className="text-[10px] sm:text-xs text-slate-500 font-bold mt-1">NCERT Mastery Focus</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.015)] border border-slate-100/80 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-purple-100 hover:-translate-y-0.5 transition-all duration-300">
              <span className="text-base sm:text-lg font-black text-[#5B2D7C]">Doubt Desk</span>
              <span className="text-[10px] sm:text-xs text-slate-500 font-bold mt-1">1-on-1 Mentorship</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.015)] border border-slate-100/80 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-purple-100 hover:-translate-y-0.5 transition-all duration-300">
              <span className="text-base sm:text-lg font-black text-[#5B2D7C]">OMR Mock Tests</span>
              <span className="text-[10px] sm:text-xs text-slate-500 font-bold mt-1">Real NEET Environment</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.015)] border border-slate-100/80 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-purple-100 hover:-translate-y-0.5 transition-all duration-300">
              <span className="text-base sm:text-lg font-black text-[#5B2D7C]">Daily DPPs</span>
              <span className="text-[10px] sm:text-xs text-slate-500 font-bold mt-1">Physics & Chemistry Drill</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="w-full bg-gray-50 py-16 px-6">

      {/* Course Overview */}
      <div className="max-w-5xl mx-auto mt-10">
        <h2 className="text-3xl font-bold text-[#522871] mb-10 flex items-center gap-2">
          <Layers className="w-8 h-8 text-purple-600" /> Course Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {overview.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border border-slate-100/80 shadow-[0_4px_20px_rgba(0,0,0,0.015)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-purple-200/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-5 bg-[#5B2D7C] rounded-full inline-block"></span>
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Target Programs / Batches */}
      <div className="max-w-6xl mx-auto mt-24 px-4">
        <div className="text-center mb-12">
          <span className="text-[#5B2D7C] text-xs sm:text-sm font-bold tracking-wider uppercase bg-purple-50 px-4 py-1.5 rounded-full border border-purple-100">
            Coaching Batches
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#522871] mt-4 mb-4">
            Available Batches for NEET UG
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Choose the right program matching your current academic class to start your target medical preparation with Team Excellent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Class 11 */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-md hover:shadow-xl hover:border-purple-200 transition-all duration-300 overflow-hidden flex flex-col justify-between">
            <div className="p-8">
              <span className="bg-purple-100 text-[#5B2D7C] text-xs font-extrabold uppercase px-3.5 py-1 rounded-full">2-Year Program</span>
              <h3 className="text-2xl font-bold text-gray-800 mt-4 mb-3">Class 11 Program</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Lays down basic fundamentals of Physics, Chemistry, and intensive Biology (NCERT focus) from the beginning of Class 11.
              </p>
              <ul className="space-y-2.5 text-slate-700 text-sm font-medium">
                <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✔</span> Integrated Board + NEET syllabus</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✔</span> Comprehensive NCERT line-by-line cover</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✔</span> Focus on clearing basic numericals</li>
              </ul>
            </div>
            <div className="px-8 pb-8 pt-4 border-t border-slate-50">
              <button onClick={() => handleOpenModal("NEET Class 11")} className="w-full bg-[#5B2D7C] hover:bg-[#8424bd] text-white font-bold py-3 rounded-xl transition duration-300">Enroll Now</button>
            </div>
          </div>

          {/* Card 2: Class 12 */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-md hover:shadow-xl hover:border-purple-200 transition-all duration-300 overflow-hidden flex flex-col justify-between">
            <div className="p-8">
              <span className="bg-red-100 text-[#b72e2f] text-xs font-extrabold uppercase px-3.5 py-1 rounded-full">1-Year Program</span>
              <h3 className="text-2xl font-bold text-gray-800 mt-4 mb-3">Class 12 Program</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Provides thorough coverage of Class 12 concepts, board preparations, mock drills, and structured revision of Class 11 chapters.
              </p>
              <ul className="space-y-2.5 text-slate-700 text-sm font-medium">
                <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✔</span> 100% board curriculum mapping</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✔</span> Targeted mock tests on OMR sheets</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✔</span> Fast-track revision of Class 11 chapters</li>
              </ul>
            </div>
            <div className="px-8 pb-8 pt-4 border-t border-slate-50">
              <button onClick={() => handleOpenModal("NEET Class 12")} className="w-full bg-[#5B2D7C] hover:bg-[#8424bd] text-white font-bold py-3 rounded-xl transition duration-300">Enroll Now</button>
            </div>
          </div>

          {/* Card 3: Droppers */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-md hover:shadow-xl hover:border-purple-200 transition-all duration-300 overflow-hidden flex flex-col justify-between">
            <div className="p-8">
              <span className="bg-blue-100 text-blue-600 text-xs font-extrabold uppercase px-3.5 py-1 rounded-full">Repeater Program</span>
              <h3 className="text-2xl font-bold text-gray-800 mt-4 mb-3">Dropper Batch</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Exclusively for passout students. A rigorous, high-density lecture format covering entire NCERT syllabus, DPP drills, and test analytics.
              </p>
              <ul className="space-y-2.5 text-slate-700 text-sm font-medium">
                <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✔</span> Complete syllabus drill in 8-9 months</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✔</span> Weekly OMR drills + national rank ranking</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✔</span> 1-on-1 mentorship sessions</li>
              </ul>
            </div>
            <div className="px-8 pb-8 pt-4 border-t border-slate-50">
              <button onClick={() => handleOpenModal("NEET Dropper")} className="w-full bg-[#5B2D7C] hover:bg-[#8424bd] text-white font-bold py-3 rounded-xl transition duration-300">Enroll Now</button>
            </div>
          </div>
        </div>
      </div>

      <TMatSection theme="red" />

      {/* Our NEET Preparation Strategy */}
      <div className="max-w-6xl mx-auto mt-24 px-4">
        <div className="text-center mb-16">
          <span className="text-[#5B2D7C] text-xs sm:text-sm font-bold tracking-wider uppercase bg-purple-50 px-4 py-1.5 rounded-full border border-purple-100">
            Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#522871] mt-4 mb-4">
            Our NEET Preparation Strategy
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Success in NEET is built on strong concepts, regular practice, and consistent guidance. At <strong>Team Excellent Career Institute</strong>, we follow a well-structured preparation strategy that helps students develop a deep understanding of Biology, Physics, and Chemistry while improving their accuracy, speed, and confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-purple-100 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-purple-50 text-[#5B2D7C] mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-800 text-base mb-2">Build Strong Fundamentals</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Our teaching begins with the basics of every chapter to ensure students develop a clear understanding of each concept. Instead of encouraging rote learning, we focus on helping students understand the logic behind every topic so they can confidently solve application-based questions.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-red-100 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-red-50 text-[#b72e2f] mb-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-800 text-base mb-2">Learn Through Regular Practice</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                After every class, students receive topic-wise assignments and practice questions based on the latest NEET exam pattern. Regular practice strengthens concepts, improves accuracy, and prepares students to handle different types of questions with confidence.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-4">
                <Laptop className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-800 text-base mb-2">Weekly Tests & Mock Exams</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                To monitor progress, we conduct regular chapter-wise tests, unit tests, and full-length mock examinations. These tests recreate the actual NEET exam environment, helping students improve time management and reduce exam-day stress.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 mb-4">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-800 text-base mb-2">Detailed Performance Analysis</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Every test is followed by a detailed performance review. Our faculty discuss mistakes, explain the correct approach, and guide students on the topics that require additional attention. This personalized feedback helps students continuously improve their performance.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-emerald-100 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 mb-4">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-800 text-base mb-2">Dedicated Doubt-Solving</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Learning becomes easier when doubts are cleared at the right time. Our dedicated doubt-solving sessions allow students to interact directly with experienced faculty and gain complete clarity before moving on to new topics.
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-amber-100 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-amber-50 text-amber-600 mb-4">
                <ClipboardCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-800 text-base mb-2">Smart Revision Plan</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Regular revision is a key part of our preparation strategy. Through revision classes, quick notes, formula sheets, and repeated practice of important questions, students retain concepts effectively and stay well-prepared throughout the year.
              </p>
            </div>
          </div>

          {/* Card 7 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-rose-100 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-rose-50 text-rose-600 mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-800 text-base mb-2">Time & Exam Strategy</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                NEET is not only about knowledge but also about attempting the paper efficiently. We teach students how to manage time, maintain accuracy, avoid negative marking, and develop the confidence to perform well under exam pressure.
              </p>
            </div>
          </div>

          {/* Card 8 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-teal-100 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-teal-50 text-teal-600 mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-800 text-base mb-2">Continuous Mentorship</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Preparing for a medical entrance exam requires dedication and motivation. Our mentors regularly monitor each student's progress, provide guidance, and encourage them to stay focused on their goals throughout their preparation journey.
              </p>
            </div>
          </div>
        </div>

        {/* Our Goal Block */}
        <div className="mt-12 bg-gradient-to-r from-red-900 to-rose-950 text-white rounded-3xl p-8 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-10 translate-x-12 translate-y-12">
            <Trophy className="w-64 h-64 text-white" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <span className="text-amber-400 text-xs sm:text-sm font-extrabold uppercase tracking-wider">Our Goal</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold mt-2 mb-4">Empowering Future Doctors</h3>
            <p className="text-rose-100 text-sm sm:text-base leading-relaxed">
              Our mission is to help every student achieve their dream of becoming a doctor by providing quality education, expert guidance, disciplined preparation, and continuous support. With the right strategy and consistent effort, students can confidently aim for top scores in <strong>NEET UG</strong> and secure admission to leading medical colleges across India.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Team Excellent for NEET Grid Section */}
      <div className="max-w-6xl mx-auto mt-24 px-4">
        <div className="text-center mb-16">
          <span className="text-[#b72e2f] text-xs sm:text-sm font-bold tracking-wider uppercase bg-red-50 px-4 py-1.5 rounded-full border border-red-100">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#522871] mt-4 mb-4">
            Why Team Excellent is the Best NEET Coaching in Patna
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Our specialized medical prep curriculum, rigorous test patterns, and expert teachers pave the way for your MBBS dreams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-50 text-[#522871] mb-5">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-800 text-lg mb-2">Expert Biology Faculty</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Master the NCERT biology syllabus line-by-line with experienced educators, using diagrammatic study aids and mnemonic tricks to score 340+ in Biology.
            </p>
          </div>
          
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-red-200 transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-red-50 text-[#b72e2f] mb-5">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-800 text-lg mb-2">NCERT-Aligned Study Material</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Access high-yield summary charts, statement-type worksheets, and assertion-reason questions mapping 100% to the latest NTA NEET exam syllabus.
            </p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-5">
              <Laptop className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-800 text-lg mb-2">Real OMR Test Practice</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Prepare in real exam conditions. Our paper-and-pen mock tests are conducted on standard OMR sheets to minimize bubbling errors and optimize speed.
            </p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 mb-5">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-800 text-lg mb-2">Dedicated Doubt Desk</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Dedicated daily hours for one-on-one doubt solving. Clear your conceptual blockages in physics equations and organic chemistry mechanism immediately.
            </p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-violet-200 transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-violet-50 text-violet-600 mb-5">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-800 text-lg mb-2">Special Medical Physics Focus</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We know physics can be challenging for medical students. Our teachers offer step-by-step problem-solving tutorials to make numerical concepts easy.
            </p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-amber-200 transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-amber-50 text-amber-600 mb-5">
              <Trophy className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-800 text-lg mb-2">Outstanding Success Rate</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our structured methods, daily evaluations, and disciplined test schedule help aspirants secure high ranks and MBBS seats in top government colleges.
            </p>
          </div>
        </div>
      </div>

      {/* Our Promise Summary Box */}
      <div className="max-w-4xl mx-auto mt-20 text-center bg-purple-50 p-10 rounded-2xl shadow-inner">
        <h2 className="text-3xl font-bold text-[#522871] mb-6 flex items-center justify-center gap-2">
          <Award className="w-8 h-8 text-purple-600" /> Our Promise
        </h2>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          At Team Excellent, we provide the best neet coaching in patna by offering an intensive NCERT-based curriculum, dedicated faculty for Physics, Chemistry & Biology, custom exam-pattern mock tests, and regular doubt resolution. As the premier neet preparation institute in patna, we are committed to turning your dream of a medical career into reality.
        </p>
      </div>

      <FAQSection faqs={faqs} />
      <ExploreLinks />
    </section>

    <EnrollmentForm
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      initialCourse={modalCourse}
    />
  </div>
  );
}

export default NeetContent;
