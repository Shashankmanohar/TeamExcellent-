import { Link } from "react-router-dom";
import { HeartPulse, BookOpen, Award, Layers } from "lucide-react";

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

      {/* Explore Other Programs / Links */}
      <div className="max-w-5xl mx-auto mt-20 border-t border-gray-200 pt-12 pb-8 text-center">
        <h2 className="text-2xl font-extrabold text-gray-800 mb-6">Explore Other Programs & Predictors</h2>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/jee" className="px-5 py-2 bg-white border border-slate-200 text-slate-700 rounded-xl hover:border-[#5B2D7C] hover:text-[#5B2D7C] transition duration-200 font-semibold text-xs sm:text-sm shadow-sm">
            JEE Coaching
          </Link>
          <Link to="/class6to10" className="px-5 py-2 bg-white border border-slate-200 text-slate-700 rounded-xl hover:border-[#5B2D7C] hover:text-[#5B2D7C] transition duration-200 font-semibold text-xs sm:text-sm shadow-sm">
            Class 6-10 Foundation
          </Link>
          <Link to="/admission" className="px-5 py-2 bg-white border border-slate-200 text-slate-700 rounded-xl hover:border-[#5B2D7C] hover:text-[#5B2D7C] transition duration-200 font-semibold text-xs sm:text-sm shadow-sm">
            Admission Procedure
          </Link>
          <Link to="/rank-predictor" className="px-5 py-2 bg-white border border-slate-200 text-slate-700 rounded-xl hover:border-[#5B2D7C] hover:text-[#5B2D7C] transition duration-200 font-semibold text-xs sm:text-sm shadow-sm">
            JEE/NEET Rank Predictor
          </Link>
          <Link to="/college-predictor" className="px-5 py-2 bg-white border border-slate-200 text-slate-700 rounded-xl hover:border-[#5B2D7C] hover:text-[#5B2D7C] transition duration-200 font-semibold text-xs sm:text-sm shadow-sm">
            JEE College Predictor
          </Link>
          <Link to="/contact" className="px-5 py-2 bg-white border border-slate-200 text-slate-700 rounded-xl hover:border-[#5B2D7C] hover:text-[#5B2D7C] transition duration-200 font-semibold text-xs sm:text-sm shadow-sm">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  </div>
  );
}

export default NeetContent;
