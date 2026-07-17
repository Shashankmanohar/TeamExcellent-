import React, { useState } from "react";
import { Star, ArrowRight, GraduationCap, Calendar, Award, Users } from "lucide-react";
import EnrollmentForm from "./EnrollmentForm";

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCourse, setModalCourse] = useState("");

  const handleOpenModal = (course = "") => {
    setModalCourse(course);
    setIsModalOpen(true);
  };

  const stats = [
    {
      value: "12+ Years",
      label: "Academic Excellence",
      icon: <Calendar className="w-5 h-5 text-[#5B2D7C]" />,
    },
    {
      value: "250+ Selections",
      label: "IIT & NEET Placements",
      icon: <Award className="w-5 h-5 text-[#5B2D7C]" />,
    },
    {
      value: "5000+ Students",
      label: "Mentored & Guided",
      icon: <Users className="w-5 h-5 text-[#5B2D7C]" />,
    },
  ];

  return (
    <section className="relative w-full min-h-screen pt-[90px] flex items-center justify-center overflow-hidden bg-[#fafafc] py-4 sm:py-6 animate-fade-in">
      {/* Handcrafted ambient backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e0ff_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
      
      {/* Custom ambient light shapes */}
      <div className="absolute -top-30 left-1/4 -z-10 h-[350px] w-[350px] rounded-full bg-purple-200/40 blur-[80px]" />
      <div className="absolute top-20 right-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-rose-100/30 blur-[90px]" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-between py-2 sm:py-4">
        <div className="flex flex-col items-center text-center w-full flex-grow justify-start pt-2 sm:pt-4 md:pt-6 gap-4 sm:gap-5 md:gap-6">
          {/* Badge: Admissions Open */}
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50/80 px-4 py-1.5 text-[10px] sm:text-xs font-semibold text-[#5B2D7C] shadow-sm backdrop-blur-sm">
            <GraduationCap className="w-4 h-4 text-[#5B2D7C] mt-0.5" />
            <span className="tracking-wide">Admissions Open for JEE & NEET 2027</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1e1b4b] leading-tight px-2">
            IIT-JEE & NEET <br />
            <span className="bg-gradient-to-r from-[#5B2D7C] via-[#8424bd] to-[#b72e2f] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(91,45,124,0.08)]">
              Coaching Institute
            </span>{" "}
            in Patna
          </h1>

          {/* Subheading */}
          <p className="max-w-2xl text-[11px] sm:text-xs md:text-sm lg:text-base text-slate-600 leading-relaxed px-4 font-medium">
            Build a Strong Foundation for IIT-JEE & NEET with Experienced
            Faculty, Structured Learning, Regular Mock Tests, and Personal Mentorship.
          </p>

          {/* Social Proof Stars Badge */}
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <div className="flex items-center gap-1.5 bg-amber-50/80 px-2.5 py-1 rounded-full border border-amber-200/60 shadow-sm">
              <div className="flex gap-0.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-[9px] sm:text-xs font-bold text-amber-800">5.0 Star Rated</span>
            </div>
            <span className="text-[10px] sm:text-xs font-semibold text-slate-600">
              Trusted by Top Rankers & Parents in Bihar
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto px-6 sm:px-0 justify-center">
            <button
              id="apply-admission-hero-btn"
              onClick={() => handleOpenModal("")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#5B2D7C] to-[#8424bd] px-6 py-3 text-xs sm:text-sm md:text-base font-bold text-white shadow-[0_4px_14px_rgba(91,45,124,0.3)] hover:shadow-[0_6px_20px_rgba(91,45,124,0.45)] hover:-translate-y-0.5 transition-all duration-200 active:scale-[0.98]"
            >
              Apply for Admission
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              id="book-demo-hero-btn"
              onClick={() => handleOpenModal("")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-6 py-3 text-xs sm:text-sm md:text-base font-bold text-slate-700 hover:border-[#5B2D7C]/60 hover:bg-[#5B2D7C]/5 hover:-translate-y-0.5 transition-all duration-200 active:scale-[0.98]"
            >
              Book Free Demo
            </button>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="w-full max-w-5xl border-t border-slate-200/60 pt-4 mt-auto">
          {/* Mobile View: Vertically stacked cards (one upon one card) - accent border design */}
          <div className="flex sm:hidden flex-col gap-2 w-full px-2">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-2.5 rounded-xl bg-white border-l-4 border-l-[#5B2D7C] border-y border-r border-slate-100 w-full shadow-sm"
              >
                <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#5B2D7C]/5 text-[#5B2D7C] shrink-0 [&_img]:w-4.5 [&_img]:h-4.5">
                  {stat.icon}
                </div>
                <div className="text-left">
                  <div className="text-xs font-black text-[#1e1b4b] leading-tight">{stat.value}</div>
                  <div className="text-[8px] font-bold text-slate-500 uppercase tracking-wider leading-none">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View: Full-size stat cards with light shadows */}
          <div className="hidden sm:grid grid-cols-3 gap-4 md:gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center gap-3 p-3 rounded-xl bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-purple-100 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-50 text-[#5B2D7C] shrink-0 shadow-sm">
                  {stat.icon}
                </div>
                <div className="text-left">
                  <div className="text-sm md:text-base font-black text-[#1e1b4b]">{stat.value}</div>
                  <div className="text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <EnrollmentForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialCourse={modalCourse}
      />
    </section>
  );
}

export default React.memo(Hero);
