import React from "react";
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
    <section className="w-full min-h-screen bg-gray-50 mt-30 py-12 px-6">
      {/* Page Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#522871]">
          JEE Mains & Advanced
        </h1>
        <div className="w-40 h-1 bg-purple-600 mx-auto mt-2 rounded"></div>
        <p className="text-gray-600 mt-3 text-base sm:text-lg max-w-2xl mx-auto">
          Learn about the{" "}
          <span className="text-[#b72e2f] font-semibold">JEE Mains</span> and{" "}
          <span className="text-[#b72e2f] font-semibold">JEE Advanced</span>{" "}
          exams, their structure, and how Team Excellent helps you prepare.
        </p>
      </div>

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
    </section>
  );
}

export default JeeContent;
