import React, { useState } from "react";
import { Award, ArrowRight } from "lucide-react";
import EnrollmentForm from "./EnrollmentForm";

export default function TMatSection({ theme = "purple" }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const themeClasses = {
    purple: "from-indigo-900 via-[#5B2D7C] to-purple-900",
    red: "from-red-950 via-[#b72e2f] to-rose-950",
  };

  const selectedTheme = themeClasses[theme] || themeClasses.purple;

  return (
    <div className="w-full bg-gray-50 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`bg-gradient-to-r ${selectedTheme} rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden`}>
          <div className="absolute right-0 bottom-0 opacity-10 translate-x-12 translate-y-12 select-none pointer-events-none">
            <Award className="w-72 h-72 sm:w-96 sm:h-96" />
          </div>
          
          <div className="relative z-10 max-w-3xl">
            <span className="bg-amber-400 text-purple-950 text-[10px] sm:text-xs font-black uppercase px-3 py-1.5 rounded-full tracking-wider">
              T-MAT Scholarship Test
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-6 mb-4 tracking-tight leading-tight">
              Get Up to <span className="text-amber-300">100% Scholarship</span> on Course Fees
            </h2>
            <p className="text-purple-100 text-sm sm:text-base md:text-lg mb-8 leading-relaxed font-medium">
              Unlock your dream of studying at top IITs and Medical Colleges. Participate in our <strong>T-MAT (Team Excellent Mentorship & Admission Test)</strong> to evaluate your potential and claim scholarship rewards based on your performance.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-purple-950 font-black px-8 py-4 rounded-xl text-sm sm:text-base transition-all duration-200 shadow-md flex items-center justify-center gap-2"
              >
                Apply for T-MAT Test
                <ArrowRight className="w-5 h-5 text-purple-950" />
              </button>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-purple-200 font-semibold justify-center sm:justify-start">
                <span className="flex items-center gap-1">✔ Zero Registration Fees</span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-1">✔ Online & Offline Modes</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EnrollmentForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialCourse="T-MAT Scholarship"
      />
    </div>
  );
}
