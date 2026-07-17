import { Link } from "react-router-dom";
import { BookOpen, Target, Award, Layers } from "lucide-react";

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
            <BookOpen className="w-4 h-4 text-[#5B2D7C]" />
            <span className="tracking-wide">Engineering Entrance Preparation</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1e1b4b] leading-tight mb-6">
            IIT-JEE <br />
            <span className="bg-gradient-to-r from-[#5B2D7C] via-[#8424bd] to-[#b72e2f] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(91,45,124,0.08)]">
              Mains & Advanced
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-medium">
            Learn about the JEE Mains and JEE Advanced exams, their structure, and how Team Excellent helps you build a strong foundation to secure a seat in top IITs and NITs.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="w-full bg-gray-50 py-16 px-6">

      {/* Sections */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 sm:gap-y-8">
        {sections.map((section) => (
          <div
            key={section.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-8 flex flex-col h-full"
          >
            <div
              className={`w-14 h-14 flex items-center justify-center rounded-full ${section.color} mb-6 shadow-md`}
            >
              {section.icon}
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              {section.title}
            </h2>
            <p className="text-gray-600 mb-4">{section.description}</p>
            <ul className="space-y-2 text-gray-700">
              {section.highlights.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">✔</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Course Overview */}
      <div className="max-w-5xl mx-auto mt-20">
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

      {/* Our Edge */}
      <div className="max-w-4xl mx-auto mt-20 text-center bg-purple-50 p-10 rounded-2xl shadow-inner">
        <h2 className="text-3xl font-bold text-[#522871] mb-6 flex items-center justify-center gap-2">
          <Award className="w-8 h-8 text-purple-600" /> Why Prepare with Team
          Excellent?
        </h2>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          At Team Excellent, we provide expert faculty, regular mock tests,
          detailed study material, and one-on-one mentorship to ensure our
          students excel in both JEE Mains and Advanced. With our structured
          curriculum and personalized guidance, we help aspirants achieve their
          IIT/NIT dreams.
        </p>
      </div>

      {/* Explore Other Programs / Links */}
      <div className="max-w-5xl mx-auto mt-20 border-t border-gray-200 pt-12 pb-8 text-center">
        <h2 className="text-2xl font-extrabold text-gray-800 mb-6">Explore Other Programs & Predictors</h2>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/neet" className="px-5 py-2 bg-white border border-slate-200 text-slate-700 rounded-xl hover:border-[#5B2D7C] hover:text-[#5B2D7C] transition duration-200 font-semibold text-xs sm:text-sm shadow-sm">
            NEET Coaching
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

export default JeeContent;
