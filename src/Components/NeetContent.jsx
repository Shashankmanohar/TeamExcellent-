import React, { useState } from "react";
import { HeartPulse, BookOpen, Award, Layers, ArrowRight } from "lucide-react";
import ExploreLinks from "./ExploreLinks";
import EnrollmentForm from "./EnrollmentForm";
import FAQSection from "./FAQSection";

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
  ];

  const faqs = [
    {
      question: "What NEET prep programs do you offer?",
      answer: "We offer comprehensive offline programs for NEET UG, including year-long batches for Class 11 and 12, repeater batches for dropouts, and crash courses paired with structured test series."
    },
    {
      question: "How is Biology taught for NEET at Team Excellent?",
      answer: "We emphasize complete NCERT mastery for Biology. Our teachers utilize audio-visual smart classroom tools to explain complex physiological processes, followed by rigorous diagram-based analysis."
    },
    {
      question: "Do you conduct practice tests on OMR sheets?",
      answer: "Yes. Since NEET is a pen-and-paper test, we conduct regular offline mock tests on actual NEET-pattern OMR sheets to build time-management skills and minimize bubbling errors."
    },
    {
      question: "How do you help students who struggle with Physics?",
      answer: "Physics is often a hurdle for medical students. We begin with basic mathematical concepts needed for physics, followed by step-by-step problem-solving tutorials and dedicated daily doubt sessions."
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
      <section className="relative w-full bg-[#fafafc] pt-[140px] pb-[80px] flex items-center justify-center overflow-hidden text-center animate-fade-in border-b border-slate-100">
        {/* Ambient Grid & Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e0ff_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
        <div className="absolute -top-30 left-1/4 -z-10 h-[250px] w-[250px] rounded-full bg-purple-200/40 blur-[80px]" />
        <div className="absolute top-20 right-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-rose-100/30 blur-[90px]" />

        <div className="relative max-w-4xl mx-auto px-6 w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50/80 px-4 py-1.5 text-[10px] sm:text-xs font-semibold text-[#5B2D7C] shadow-sm backdrop-blur-sm mb-6">
            <HeartPulse className="w-4 h-4 text-[#5B2D7C]" />
            <span className="tracking-wide">Medical Entrance Preparation</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1e1b4b] leading-tight mb-6">
            NEET <br />
            <span className="bg-gradient-to-r from-[#5B2D7C] via-[#8424bd] to-[#b72e2f] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(91,45,124,0.08)]">
              UG Medical Coaching
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-medium">
            Learn about the NEET exam, its structure, and how Team Excellent helps you build a strong concepts library in Biology, Physics, and Chemistry to secure admission in top medical colleges.
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
        </div>
      </section>

      {/* Main Content Area */}
      <section className="w-full bg-gray-50 py-16 px-6">

      {/* Exam Info */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-8 mb-16">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-red-500">
            <HeartPulse className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">
            {examInfo.title}
          </h2>
        </div>
        <p className="text-gray-600 mb-4">{examInfo.description}</p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {examInfo.highlights.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>

      {/* Course Overview */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#522871] mb-10 flex items-center gap-2">
          <Layers className="w-8 h-8 text-purple-600" /> Course Overview
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {overview.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Team Excellent */}
      <div className="max-w-4xl mx-auto mt-20 text-center">
        <h2 className="text-3xl font-bold text-[#522871] mb-6 flex items-center justify-center gap-2">
          <Award className="w-8 h-8 text-purple-600" /> Why Prepare with Team
          Excellent?
        </h2>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          At Team Excellent, we provide a result-oriented approach for NEET
          aspirants. Our expert faculty, regular practice tests, personalized
          doubt-solving, and structured study materials ensure that every
          student is fully prepared to excel in the exam and achieve their dream
          of becoming a doctor.
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
