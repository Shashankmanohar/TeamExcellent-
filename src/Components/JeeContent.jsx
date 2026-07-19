import React, { useState } from "react";
import { BookOpen, Target, Award, Layers, ArrowRight, GraduationCap, Laptop, HelpCircle, Trophy, TrendingUp, ClipboardCheck, Clock, Users } from "lucide-react";
import ExploreLinks from "./ExploreLinks";
import EnrollmentForm from "./EnrollmentForm";
import FAQSection from "./FAQSection";
import TMatSection from "./TMatSection";

function JeeContent() {
  const sections = [
    {
      id: 1,
      title: "JEE Mains",
      description:
        "The first stage of the Joint Entrance Examination. It tests students on NCERT-level concepts of Physics, Chemistry, and Mathematics. Performance in JEE Mains decides eligibility for JEE Advanced and admission to NITs, IIITs, and other central institutions.",
      highlights: [
        "Objective type questions (MCQs & Numerical)",
        "Syllabus aligned with NCERT (Class 11 & 12)",
        "Duration: 3 Hours",
        "Conducted 2 times a year by NTA",
      ],
      color: "bg-blue-600",
      icon: <BookOpen className="w-8 h-8 text-white" aria-label="JEE Mains Icon" />,
    },
    {
      id: 2,
      title: "JEE Advanced",
      description:
        "The second stage of the examination, only for students who qualify JEE Mains. It is the gateway to the prestigious IITs and requires in-depth understanding, analytical skills, and problem-solving abilities.",
      highlights: [
        "Questions test analytical & logical reasoning",
        "More challenging than JEE Mains",
        "Duration: 6 Hours (2 Papers of 3 Hours each)",
        "Conducted once a year by IITs",
      ],
      color: "bg-purple-700",
      icon: <Target className="w-8 h-8 text-white" aria-label="JEE Advanced Icon" />,
    },
  ];

  const overview = [
    {
      title: "Foundation Program",
      detail:
        "Strong focus on building NCERT fundamentals of Physics, Chemistry, and Mathematics from Class 11 onwards.",
    },
    {
      title: "Conceptual Learning",
      detail:
        "Emphasis on understanding core concepts instead of rote learning, ensuring problem-solving ability.",
    },
    {
      title: "Regular Mock Tests",
      detail:
        "Weekly and monthly tests with detailed analysis to track progress and improve time management.",
    },
    {
      title: "Doubt Solving Sessions",
      detail:
        "Dedicated sessions for clearing doubts with one-on-one mentorship for personalized guidance.",
    },
    {
      title: "Study Material",
      detail:
        "Comprehensive and updated study material curated by expert faculty aligned with the latest JEE syllabus.",
    },
    {
      title: "Performance Tracking",
      detail:
        "Access to our Student Portal to check mock test results, download report cards, and track academic progress.",
    },
  ];

  const faqs = [
    {
      question: "Why should I choose Team Excellent Career Institute for JEE preparation?",
      answer: "At Team Excellent Career Institute, we focus on building strong concepts, regular practice, and personal mentoring. Our experienced faculty, structured study plan, and regular mock tests help students prepare confidently for both JEE Main and JEE Advanced."
    },
    {
      question: "Who can join the JEE coaching program?",
      answer: "Students studying in Class 11, Class 12, or those taking a drop year after Class 12 can join our JEE coaching program."
    },
    {
      question: "Do you have separate batches for Class 11, Class 12, and droppers?",
      answer: "Yes. We offer separate batches for Class 11, Class 12, and JEE droppers so that every student learns at the right pace with a syllabus designed for their level."
    },
    {
      question: "Which subjects are covered in the JEE course?",
      answer: "The course covers all three JEE subjects—Physics, Chemistry, and Mathematics—according to the latest JEE Main and JEE Advanced syllabus."
    },
    {
      question: "How often are tests conducted?",
      answer: "Students take regular chapter-wise tests, unit tests, revision tests, and full-length mock exams throughout the course to track their progress and improve their performance."
    },
    {
      question: "Do you provide study materials?",
      answer: "Yes. Every student receives well-prepared study materials, practice sheets, assignments, revision notes, and mock test papers designed by our faculty."
    },
    {
      question: "What if I have doubts after class?",
      answer: "We conduct dedicated doubt-solving sessions where students can discuss their questions directly with our teachers until every concept is clear."
    },
    {
      question: "How do you help students improve their JEE scores?",
      answer: "After every test, our faculty review each student's performance, identify weak areas, and provide personalized guidance and extra practice to help improve scores."
    },
    {
      question: "Do you prepare students for both JEE Main and JEE Advanced?",
      answer: "Yes. Our teaching methodology is designed to prepare students for both JEE Main and JEE Advanced, with separate practice sessions for advanced-level questions."
    },
    {
      question: "Are scholarship programs available?",
      answer: "Yes. We offer up to 100% scholarship to students based on their performance in the T-MAT Scholarship Test. High-scoring candidates can receive complete fee concessions."
    },
    {
      question: "What is the batch size?",
      answer: "We keep our batch sizes limited so that every student receives individual attention and can interact freely with the faculty."
    },
    {
      question: "Can I join if I have already started preparing for JEE?",
      answer: "Absolutely. Our academic counselors will assess your current preparation level and recommend the most suitable batch based on your needs."
    },
    {
      question: "How can I take admission?",
      answer: "You can visit our institute, call our admission team, or submit the enquiry form on our website. Our counselors will guide you through the admission process."
    },
    {
      question: "Do you provide regular progress reports?",
      answer: "Yes. We regularly track students' attendance, test scores, and overall performance. Parents and students receive updates to help monitor progress."
    },
    {
      question: "How can I book a free counseling session?",
      answer: "You can call us, send us a WhatsApp message, or fill out the enquiry form on our website. Our counselors will schedule a free counseling session and help you choose the right JEE program."
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
            <BookOpen className="w-4 h-4 text-[#5B2D7C]" />
            <span className="tracking-wide">Engineering Entrance Preparation | Up to 100% Scholarship after T-MAT Test</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1e1b4b] leading-tight mb-6">
            Best IIT-JEE Coaching <br />
            <span className="bg-gradient-to-r from-[#5B2D7C] via-[#8424bd] to-[#b72e2f] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(91,45,124,0.08)]">
              in Patna
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-medium">
            Are you searching for the best JEE coaching in Patna? Team Excellent Career Institute offers top-tier IIT JEE preparation, helping students build strong foundation concepts to crack JEE Main & Advanced and secure admission in elite IITs and NITs.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto mt-8">
            <button
              onClick={() => handleOpenModal("JEE")}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#5B2D7C] to-[#8424bd] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              Apply for JEE Coaching
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleOpenModal("JEE")}
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-6 py-3 text-xs sm:text-sm font-bold text-slate-700 hover:border-[#5B2D7C]/60 hover:bg-[#5B2D7C]/5 hover:-translate-y-0.5 transition-all duration-200"
            >
              Book Free Demo
            </button>
          </div>

          {/* Key JEE Highlights / Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12 pt-8 border-t border-slate-200/60">
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.015)] border border-slate-100/80 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-purple-100 hover:-translate-y-0.5 transition-all duration-300">
              <span className="text-base sm:text-lg font-black text-[#5B2D7C]">IITian Faculty</span>
              <span className="text-[10px] sm:text-xs text-slate-500 font-bold mt-1">Expert Mentors</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.015)] border border-slate-100/80 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-purple-100 hover:-translate-y-0.5 transition-all duration-300">
              <span className="text-base sm:text-lg font-black text-[#5B2D7C]">1-on-1 Doubt Desk</span>
              <span className="text-[10px] sm:text-xs text-slate-500 font-bold mt-1">Personal Mentorship</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.015)] border border-slate-100/80 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-purple-100 hover:-translate-y-0.5 transition-all duration-300">
              <span className="text-base sm:text-lg font-black text-[#5B2D7C]">Weekly CBT Tests</span>
              <span className="text-[10px] sm:text-xs text-slate-500 font-bold mt-1">NTA Pattern Mock Tests</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.015)] border border-slate-100/80 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-purple-100 hover:-translate-y-0.5 transition-all duration-300">
              <span className="text-base sm:text-lg font-black text-[#5B2D7C]">Daily DPP Sheets</span>
              <span className="text-[10px] sm:text-xs text-slate-500 font-bold mt-1">NCERT & Advanced Level</span>
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
            Available Batches for IIT-JEE
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Choose the right program matching your current academic class to start your target IIT preparation with Team Excellent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Class 11 */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-md hover:shadow-xl hover:border-purple-200 transition-all duration-300 overflow-hidden flex flex-col justify-between">
            <div className="p-8">
              <span className="bg-purple-100 text-[#5B2D7C] text-xs font-extrabold uppercase px-3.5 py-1 rounded-full">2-Year Program</span>
              <h3 className="text-2xl font-bold text-gray-800 mt-4 mb-3">Class 11 Program</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Builds a solid conceptual base in Physics, Chemistry, and Math from the ground up. Perfect for starting early and securing top ranks.
              </p>
              <ul className="space-y-2.5 text-slate-700 text-sm font-medium">
                <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✔</span> Comprehensive board integration</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✔</span> Gradual transition to JEE advanced level</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✔</span> Regular chapter tests & practice sessions</li>
              </ul>
            </div>
            <div className="px-8 pb-8 pt-4 border-t border-slate-50">
              <button onClick={() => handleOpenModal("JEE Class 11")} className="w-full bg-[#5B2D7C] hover:bg-[#8424bd] text-white font-bold py-3 rounded-xl transition duration-300">Enroll Now</button>
            </div>
          </div>

          {/* Card 2: Class 12 */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-md hover:shadow-xl hover:border-purple-200 transition-all duration-300 overflow-hidden flex flex-col justify-between">
            <div className="p-8">
              <span className="bg-red-100 text-[#b72e2f] text-xs font-extrabold uppercase px-3.5 py-1 rounded-full">1-Year Program</span>
              <h3 className="text-2xl font-bold text-gray-800 mt-4 mb-3">Class 12 Program</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Covers Class 12 board preparations alongside complete JEE Mains/Advanced applications and revision of Class 11 concepts.
              </p>
              <ul className="space-y-2.5 text-slate-700 text-sm font-medium">
                <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✔</span> Focus on board exams & rank building</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✔</span> Intensive Class 11 revision capsules</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✔</span> Part-test and full CBT mock series</li>
              </ul>
            </div>
            <div className="px-8 pb-8 pt-4 border-t border-slate-50">
              <button onClick={() => handleOpenModal("JEE Class 12")} className="w-full bg-[#5B2D7C] hover:bg-[#8424bd] text-white font-bold py-3 rounded-xl transition duration-300">Enroll Now</button>
            </div>
          </div>

          {/* Card 3: Droppers */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-md hover:shadow-xl hover:border-purple-200 transition-all duration-300 overflow-hidden flex flex-col justify-between">
            <div className="p-8">
              <span className="bg-blue-100 text-blue-600 text-xs font-extrabold uppercase px-3.5 py-1 rounded-full">Repeater Program</span>
              <h3 className="text-2xl font-bold text-gray-800 mt-4 mb-3">Dropper Batch</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Designed for Class 12 passout students who want to dedicate a year exclusively to crack JEE. Covers 11th & 12th syllabus in detail.
              </p>
              <ul className="space-y-2.5 text-slate-700 text-sm font-medium">
                <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✔</span> Highly intensive problem solving</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✔</span> Advanced level test series analytics</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✔</span> Direct mentoring by senior IITians</li>
              </ul>
            </div>
            <div className="px-8 pb-8 pt-4 border-t border-slate-50">
              <button onClick={() => handleOpenModal("JEE Dropper")} className="w-full bg-[#5B2D7C] hover:bg-[#8424bd] text-white font-bold py-3 rounded-xl transition duration-300">Enroll Now</button>
            </div>
          </div>
        </div>
      </div>

      <TMatSection theme="purple" />

      {/* Our JEE Preparation Strategy */}
      <div className="max-w-6xl mx-auto mt-24 px-4">
        <div className="text-center mb-16">
          <span className="text-[#5B2D7C] text-xs sm:text-sm font-bold tracking-wider uppercase bg-purple-50 px-4 py-1.5 rounded-full border border-purple-100">
            Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#522871] mt-4 mb-4">
            Our JEE Preparation Strategy
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Cracking IIT JEE isn't about studying for long hours—it's about studying the right way with consistency and proper guidance. At Team Excellent Career Institute, we've designed a preparation strategy that helps students strengthen their concepts, improve problem-solving skills, and build the confidence needed to perform well in JEE Main and JEE Advanced.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-purple-100 transition-all duration-300">
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-purple-50 text-[#5B2D7C] mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-800 text-base mb-2">Build Strong Fundamentals</h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Every chapter starts with the basics because a strong foundation is essential for solving advanced JEE problems. Our faculty explain concepts in a simple and practical way, ensuring students understand the "why" behind every formula instead of just memorizing it.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-red-100 transition-all duration-300">
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-red-50 text-[#b72e2f] mb-4">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-800 text-base mb-2">Learn Through Regular Practice</h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              After each classroom session, students receive practice sheets and assignments based on the topics covered. These questions gradually increase in difficulty, helping students improve accuracy, speed, and confidence.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300">
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-4">
              <Laptop className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-800 text-base mb-2">Weekly Tests & Mock Exams</h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Regular chapter-wise tests and full-length mock exams are conducted throughout the course. These tests simulate the real JEE exam environment and help students evaluate their preparation, identify mistakes, and improve their performance before the actual exam.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all duration-300">
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 mb-4">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-800 text-base mb-2">Detailed Performance Analysis</h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Every test is followed by a detailed discussion where students understand what went wrong, which topics need more attention, and how they can improve. This personalized feedback helps students focus on their weak areas while maintaining their strengths.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-emerald-100 transition-all duration-300">
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 mb-4">
              <HelpCircle className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-800 text-base mb-2">Dedicated Doubt-Solving</h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              We believe that no doubt should remain unanswered. Students can ask questions during class as well as in dedicated doubt sessions, ensuring they move forward with complete clarity in every subject.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-amber-100 transition-all duration-300">
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-amber-50 text-amber-600 mb-4">
              <ClipboardCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-800 text-base mb-2">Smart Revision Plan</h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Revision is built into our teaching process. Important concepts, formulas, and frequently asked questions are revised regularly through special classes, revision notes, and practice tests so that students retain what they learn.
            </p>
          </div>

          {/* Card 7 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-rose-100 transition-all duration-300">
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-rose-50 text-rose-600 mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-800 text-base mb-2">Time & Exam Strategy</h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Knowing the syllabus is only part of the preparation. We also teach students how to manage time during the exam, choose the right questions first, avoid common mistakes, and maximize their scores under exam pressure.
            </p>
          </div>

          {/* Card 8 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-teal-100 transition-all duration-300">
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-teal-50 text-teal-600 mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-800 text-base mb-2">Continuous Mentorship</h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Preparing for JEE can be challenging, but students are never alone. Our mentors regularly monitor progress, motivate students, and provide guidance whenever they need support, helping them stay focused throughout their preparation journey.
            </p>
          </div>
        </div>

        {/* Our Goal Block */}
        <div className="mt-12 bg-gradient-to-r from-purple-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-10 translate-x-12 translate-y-12">
            <Trophy className="w-64 h-64 text-white" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <span className="text-amber-400 text-xs sm:text-sm font-extrabold uppercase tracking-wider">Our Goal</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold mt-2 mb-4">Shaping Future IITians & NITians</h3>
            <p className="text-purple-100 text-sm sm:text-base leading-relaxed">
              Our aim is not only to help students clear JEE Main and JEE Advanced, but also to develop analytical thinking, problem-solving ability, and the confidence required to secure admission into top engineering institutes such as the IITs, NITs, and other prestigious colleges across India.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Team Excellent for JEE Grid Section */}
      <div className="max-w-6xl mx-auto mt-24 px-4">
        <div className="text-center mb-16">
          <span className="text-[#b72e2f] text-xs sm:text-sm font-bold tracking-wider uppercase bg-red-50 px-4 py-1.5 rounded-full border border-red-100">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#522871] mt-4 mb-4">
            Why Team Excellent is the Best JEE Coaching in Patna
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Our structured coaching programs, veteran IITian mentorship, and concept-based curriculum make us the preferred partner in your IIT-JEE journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-50 text-[#522871] mb-5">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-800 text-lg mb-2">IITian & NITian Mentors</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Learn directly from faculty members who are alumni of premier IITs and NITs. They offer deep concept insights and effective exam shortcuts.
            </p>
          </div>
          
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-red-200 transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-red-50 text-[#b72e2f] mb-5">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-800 text-lg mb-2">Customized JEE Material</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Exhaustive study packages, topic-wise worksheets, and Daily Practice Problems (DPPs) tailored to both Mains & Advanced difficulty levels.
            </p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-5">
              <Laptop className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-800 text-lg mb-2">Real NTA CBT Experience</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Attempt mock tests designed precisely on the national-level CBT pattern. Access real-time analytics to find and improve your weak areas.
            </p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 mb-5">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-800 text-lg mb-2">Dedicated Doubt Desk</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Never pile up doubts. Get personalized one-on-one attention daily from our teachers to clear numerical and conceptual blockages.
            </p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-violet-200 transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-violet-50 text-violet-600 mb-5">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-800 text-lg mb-2">Calculus & Math Rigor</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We lay specialized stress on advanced mathematics and conceptual physics to build strong analytical reasoning from day one.
            </p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-amber-200 transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-amber-50 text-amber-600 mb-5">
              <Trophy className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-800 text-lg mb-2">Proven Track Record</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Year after year, our classroom students secure placements in premium engineering programs at IITs, NITs, and IIITs across India.
            </p>
          </div>
        </div>
      </div>

      {/* Our Edge Summary Box */}
      <div className="max-w-4xl mx-auto mt-20 text-center bg-purple-50 p-10 rounded-2xl shadow-inner">
        <h2 className="text-3xl font-bold text-[#522871] mb-6 flex items-center justify-center gap-2">
          <Award className="w-8 h-8 text-purple-600" /> Our Promise
        </h2>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          At Team Excellent, we provide the best coaching for JEE in Patna by combining top-tier faculty, regular computer-based mock tests, comprehensive study material, and one-on-one mentorship. As a leading institute for IIT jee preparation in Patna, we offer structured learning pathways designed to help you excel in both JEE Mains & Advanced and secure a top rank.
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

export default JeeContent;
