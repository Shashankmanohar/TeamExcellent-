import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  BookOpen,
  ClipboardCheck,
  HelpCircle,
  TrendingUp,
  Users,
  Layers,
  Trophy,
  Compass,
  Heart,
  MapPin,
  Laptop
} from "lucide-react";

const advantages = [
  {
    icon: <Laptop className="w-6 h-6" />,
    title: "Student Performance Tracking App",
    description: "Access our digital Student Portal to check mock test results, download report cards, and track academic progress using your Roll Number.",
    textColor: "text-blue-600",
    bgColor: "bg-blue-50",
    hoverBorder: "hover:border-blue-200",
    link: "/student-portal"
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Expert Faculty",
    description: "Learn from experienced educators who simplify complex concepts and provide exam-oriented strategies for IIT-JEE and NEET preparation.",
    textColor: "text-[#522871]",
    bgColor: "bg-purple-50",
    hoverBorder: "hover:border-purple-200"
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Comprehensive Study Material",
    description: "Receive updated study material, practice questions, DPPs, previous year papers, and revision notes aligned with the latest exam syllabus.",
    textColor: "text-[#b72e2f]",
    bgColor: "bg-red-50",
    hoverBorder: "hover:border-red-200"
  },
  {
    icon: <ClipboardCheck className="w-6 h-6" />,
    title: "Regular Tests & Performance Analysis",
    description: "Weekly tests, mock exams, and detailed performance reports help students identify strengths, improve weak areas, and stay exam-ready.",
    textColor: "text-indigo-600",
    bgColor: "bg-indigo-50",
    hoverBorder: "hover:border-indigo-200"
  },
  {
    icon: <HelpCircle className="w-6 h-6" />,
    title: "Personalized Doubt Solving",
    description: "Dedicated doubt-clearing sessions ensure every student gets individual attention and develops a strong conceptual understanding.",
    textColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
    hoverBorder: "hover:border-emerald-200"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Individual Progress Tracking",
    description: "Parents and students receive regular progress updates, enabling continuous improvement throughout the academic journey.",
    textColor: "text-violet-600",
    bgColor: "bg-violet-50",
    hoverBorder: "hover:border-violet-200"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Small Batch Sizes",
    description: "Smaller classroom batches allow teachers to focus on each student's learning needs and encourage interactive learning.",
    textColor: "text-pink-600",
    bgColor: "bg-pink-50",
    hoverBorder: "hover:border-pink-200"
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Foundation Programs",
    description: "Special foundation courses for students in Classes 8–10 help build strong fundamentals for IIT-JEE, NEET, NTSE, and Olympiad examinations.",
    textColor: "text-amber-600",
    bgColor: "bg-amber-50",
    hoverBorder: "hover:border-amber-200"
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Proven Academic Excellence",
    description: "Our structured teaching methodology, disciplined study plans, and continuous mentoring have helped students achieve outstanding academic results.",
    textColor: "text-[#522871]",
    bgColor: "bg-purple-50",
    hoverBorder: "hover:border-purple-200"
  },
  {
    icon: <Compass className="w-6 h-6" />,
    title: "Career Guidance & Mentorship",
    description: "Beyond classroom teaching, students receive career counseling, motivation sessions, and exam strategies to build confidence and reduce stress.",
    textColor: "text-teal-600",
    bgColor: "bg-teal-50",
    hoverBorder: "hover:border-teal-200"
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Parent Involvement",
    description: "Regular parent-teacher meetings and progress reports keep parents informed about their child's academic development.",
    textColor: "text-rose-600",
    bgColor: "bg-rose-50",
    hoverBorder: "hover:border-rose-200"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Convenient Location in Patna",
    description: "Located in Patna, Team Excellent Career Institute provides quality coaching for students from across Bihar preparing for IIT-JEE and NEET.",
    textColor: "text-indigo-600",
    bgColor: "bg-indigo-50",
    hoverBorder: "hover:border-indigo-200"
  }
];

export default function WhyChooseSection() {
  return (
    <section className="w-full bg-[#fcfbfe] py-20 px-6 border-y border-slate-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#b72e2f] text-sm font-bold tracking-wider uppercase bg-red-50 px-4 py-1.5 rounded-full border border-red-100">
            Our Key Advantages
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#522871] mt-6 mb-4 tracking-tight leading-tight">
            Why Choose <span className="text-[#b72e2f]">Team Excellent</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Helping Bihar's Future Engineers & Doctors Achieve Their Dreams through concept-based learning and personalized support.
          </p>
        </div>

        {/* Advantages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {advantages.map((adv, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 4) * 0.05, duration: 0.4 }}
              className={`bg-white border border-slate-100 rounded-2xl p-6 transition-all duration-300 flex flex-col h-full hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${adv.hoverBorder} group cursor-pointer`}
            >
              {/* Icon container */}
              <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${adv.bgColor} ${adv.textColor} mb-5 group-hover:scale-105 transition-transform duration-300`}>
                {adv.icon}
              </div>

              {/* Title */}
              <h3 className="font-bold text-gray-800 text-lg mb-2 leading-snug group-hover:text-[#522871] transition-colors duration-200">
                {adv.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                {adv.description}
              </p>

              {/* Link for Tracker app */}
              {adv.link && (
                <div className="mt-4">
                  <Link
                    to={adv.link}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    Open Student Portal →
                  </Link>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
