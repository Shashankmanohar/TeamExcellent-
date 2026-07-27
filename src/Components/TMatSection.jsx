import React, { useState } from "react";
import { Link } from "react-router-dom";
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
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="bg-amber-400 text-purple-950 text-[10px] sm:text-xs font-black uppercase px-3 py-1.5 rounded-full tracking-wider">
                T-MAT Scholarship Test
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-6 mb-4 tracking-tight leading-tight">
                Get Up to <span className="text-amber-300">100% Scholarship</span> on Course Fees
              </h2>
              <p className="text-purple-100 text-sm sm:text-base md:text-lg mb-8 leading-relaxed font-medium">
                Unlock your dream of studying at top IITs and Medical Colleges through our <Link to="/jee-coaching-in-patna" className="text-amber-300 font-bold hover:underline">JEE Main/Advanced Coaching</Link> & <Link to="/neet-coaching-in-patna" className="text-amber-300 font-bold hover:underline">NEET Preparation</Link>. Participate in <strong>T-MAT (Team Excellent Mentorship & Admission Test)</strong> to claim scholarship rewards. Check our <Link to="/admission" className="text-white font-bold underline hover:text-amber-200">Admission Process</Link>, read more <Link to="/about" className="text-white font-bold underline hover:text-amber-200">About Our Institute</Link>, or estimate scores with our <Link to="/rank-predictor" className="text-white font-bold underline hover:text-amber-200">Rank Predictor</Link>.
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

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 transform hover:scale-[1.02] transition-transform duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" 
                  alt="Students studying and collaborating" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/40 via-transparent to-transparent"></div>
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
