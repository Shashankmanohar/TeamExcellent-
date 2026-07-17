import { Link } from "react-router-dom";
import {
  Layers,
  BookOpen,
  Target,
  Award,
  Brain,
  PenTool,
  Lightbulb,
} from "lucide-react";

function Class6to10Content() {
  const groups = [
    {
      id: 1,
      title: "Class 6",
      badge: "Foundation",
      color: "bg-green-600",
      icon: <Lightbulb className="w-8 h-8 text-white drop-shadow" />,
      description:
        "Class 6 marks the beginning of concept-based learning. Focus is on strengthening fundamentals and building interest in Science & Mathematics.",
      highlights: [
        "Basic Algebra & Geometry",
        "Number System & Fractions",
        "Living Organisms & Environment",
        "Introduction to Physics & Chemistry",
      ],
    },
    {
      id: 2,
      title: "Class 7",
      badge: "Foundation Builder",
      color: "bg-blue-600",
      icon: <BookOpen className="w-8 h-8 text-white drop-shadow" />,
      description:
        "Class 7 builds upon Class 6 knowledge with deeper concepts in Math and Science, while introducing logical reasoning.",
      highlights: [
        "Integers, Linear Equations, Perimeter & Area",
        "Heat, Motion & Forces",
        "Nutrition, Respiration & Reproduction in Plants/Animals",
        "Social Science & English Skill Development",
      ],
    },
    {
      id: 3,
      title: "Class 8",
      badge: "Pre-Foundation",
      color: "bg-yellow-600",
      icon: <Target className="w-8 h-8 text-white drop-shadow" />,
      description:
        "Class 8 bridges the gap between middle school and high school. Students are prepared for advanced board concepts and Olympiads.",
      highlights: [
        "Algebraic Expressions, Mensuration, Data Handling",
        "Force & Pressure, Sound, Light",
        "Reproduction, Microorganisms, Metals & Non-Metals",
        "Reasoning and Aptitude Skills",
      ],
    },
    {
      id: 4,
      title: "Class 9",
      badge: "Board Foundation",
      color: "bg-indigo-600",
      icon: <BookOpen className="w-8 h-8 text-white drop-shadow" />,
      description:
        "Class 9 is a stepping stone for board exams. Focus is on NCERT fundamentals, application-based learning, and problem-solving skills.",
      highlights: [
        "Algebra, Geometry, Mensuration, Statistics",
        "Mechanics, Sound, Motion & Laws of Motion",
        "Cell Biology, Tissues, Improvement in Food Resources",
        "Social Science & English for board prep",
      ],
    },
    {
      id: 5,
      title: "Class 10",
      badge: "Board Excellence",
      color: "bg-purple-700",
      icon: <Target className="w-8 h-8 text-white drop-shadow" />,
      description:
        "Class 10 lays the foundation for future competitive exams. We prepare students for Boards + Olympiads with regular practice and assessments.",
      highlights: [
        "Trigonometry, Probability, Coordinate Geometry",
        "Electricity, Magnetic Effects, Light & Human Eye",
        "Genetics, Evolution, Environment",
        "Writing Skills & Social Science mastery",
      ],
    },
  ];

  const overview = [
    {
      title: "Board + Olympiad Prep",
      detail:
        "Strong NCERT coverage combined with Olympiad-style questions to sharpen analytical skills.",
      icon: <Brain className="w-6 h-6" />,
    },
    {
      title: "Concept Mastery",
      detail:
        "Emphasis on application-based learning, lab experiments, and visualization of concepts.",
      icon: <Layers className="w-6 h-6" />,
    },
    {
      title: "Exam Readiness",
      detail:
        "Frequent mock tests, board pattern question practice, and detailed feedback sessions.",
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "Future-Oriented Learning",
      detail:
        "Foundation for JEE/NEET starts here with exposure to problem-solving beyond textbooks.",
      icon: <PenTool className="w-6 h-6" />,
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
            <Brain className="w-4 h-4 text-[#5B2D7C]" />
            <span className="tracking-wide">Academic Foundation Programs</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1e1b4b] leading-tight mb-6">
            Classes 6 – 10 <br />
            <span className="bg-gradient-to-r from-[#5B2D7C] via-[#8424bd] to-[#b72e2f] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(91,45,124,0.08)]">
              Junior Foundation Program
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-medium">
            Strong foundation courses for Classes 6–10 designed to excel in school exams, Olympiads, and lay the groundwork for JEE/NEET preparation.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="w-full bg-gray-50 py-16 px-6" aria-label="Programs for Classes 6 to 10">

      {/* Class-wise Cards */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-8 sm:gap-y-6">
        {groups.map((g) => (
          <div
            key={g.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-8 flex flex-col h-full"
          >
            <div
              className={`w-14 h-14 flex items-center justify-center rounded-full ${g.color} mb-6`}
            >
              {g.icon}
            </div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-semibold text-gray-800">
                {g.title}
              </h2>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                {g.badge}
              </span>
            </div>
            <p className="text-gray-600 mb-4">{g.description}</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-auto">
              {g.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Course Overview */}
      <div
        className="max-w-6xl mx-auto mt-16"
        aria-label="Course Overview Section"
      >
        <h2 className="text-3xl font-bold text-[#522871] mb-8 flex items-center gap-2">
          <Layers className="w-8 h-8 text-purple-600" /> Course Overview
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {overview.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition h-full"
            >
              <div className="flex items-center gap-3 mb-2 text-[#522871]">
                <span>{item.icon}</span>
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-600">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Team Excellent */}
      <div
        className="max-w-4xl mx-auto mt-20 text-center"
        aria-label="Why Choose Team Excellent"
      >
        <h2 className="text-3xl font-bold text-[#522871] mb-6 flex items-center justify-center gap-2">
          <Award className="w-8 h-8 text-purple-600" /> Why Learn with Team
          Excellent?
        </h2>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          At Team Excellent, we focus on holistic growth. From Classes 6–10, our
          students receive strong academic support, Olympiad exposure, board
          preparation, and the foundation to tackle JEE, NEET, and other
          competitive exams in higher classes.
        </p>
      </div>

      {/* Explore Other Programs / Links */}
      <div className="max-w-5xl mx-auto mt-20 border-t border-gray-200 pt-12 pb-8 text-center">
        <h2 className="text-2xl font-extrabold text-gray-800 mb-6">Explore Other Programs & Predictors</h2>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/jee" className="px-5 py-2 bg-white border border-slate-200 text-slate-700 rounded-xl hover:border-[#5B2D7C] hover:text-[#5B2D7C] transition duration-200 font-semibold text-xs sm:text-sm shadow-sm">
            JEE Coaching
          </Link>
          <Link to="/neet" className="px-5 py-2 bg-white border border-slate-200 text-slate-700 rounded-xl hover:border-[#5B2D7C] hover:text-[#5B2D7C] transition duration-200 font-semibold text-xs sm:text-sm shadow-sm">
            NEET Coaching
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

export default Class6to10Content;
