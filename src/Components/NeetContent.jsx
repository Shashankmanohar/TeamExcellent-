import React from "react";
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
    <section className="w-full min-h-screen bg-gray-50 mt-30 py-12 px-6">
      {/* Page Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#522871]">
          NEET Preparation
        </h1>
        <div className="w-40 h-1 bg-purple-600 mx-auto mt-2 rounded"></div>
        <p className="text-gray-600 mt-3 text-base sm:text-lg max-w-2xl mx-auto">
          Learn about the{" "}
          <span className="text-[#b72e2f] font-semibold">NEET exam</span>, its
          structure, and how{" "}
          <span className="text-[#b72e2f] font-semibold">Team Excellent</span>{" "}
          helps you excel in your medical entrance journey.
        </p>
      </div>

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
    </section>
  );
}

export default NeetContent;
