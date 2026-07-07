import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Calculator, Award, GraduationCap, ChevronRight, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import { submitCounselingRequest } from "../lib/counselingApi";

export default function RankPredictor() {
  const [activeExam, setActiveExam] = useState("JEE"); // JEE or NEET

  // Form States - JEE Rank
  const [jeeInputType, setJeeInputType] = useState("percentile");
  const [jeePercentile, setJeePercentile] = useState("");
  const [jeeMarks, setJeeMarks] = useState("");
  const [jeePredictedRank, setJeePredictedRank] = useState(null);

  // Form States - NEET Rank
  const [neetMarks, setNeetMarks] = useState("");
  const [neetPredictedRank, setNeetPredictedRank] = useState(null);

  // Counseling modal trigger
  const [showConsultModal, setShowConsultModal] = useState(false);
  const [counselingName, setCounselingName] = useState("");
  const [counselingPhone, setCounselingPhone] = useState("");
  const [counselingExam, setCounselingExam] = useState("JEE Main / Advanced");

  // JEE Rank Calculation
  const calculateJEERank = (e) => {
    e.preventDefault();
    let p = parseFloat(jeePercentile);
    if (jeeInputType === "marks") {
      let m = parseFloat(jeeMarks);
      if (isNaN(m) || m < 0 || m > 300) {
        toast.error("Please enter marks between 0 and 300");
        return;
      }
      p = marksToPercentileJEE(m);
    } else {
      if (isNaN(p) || p < 0 || p > 100) {
        toast.error("Please enter a valid percentile between 0 and 100");
        return;
      }
    }
    const totalCandidates = 1400000;
    const rank = Math.round(((100 - p) * totalCandidates) / 100);
    setJeePredictedRank({
      rank: Math.max(1, rank),
      percentile: p.toFixed(2),
      rangeMin: Math.max(1, Math.round(rank * 0.95)),
      rangeMax: Math.round(rank * 1.05)
    });
  };

  const marksToPercentileJEE = (marks) => {
    if (marks >= 280) return 99.99;
    if (marks >= 250) return 99.8;
    if (marks >= 200) return 99.3;
    if (marks >= 170) return 98.5;
    if (marks >= 140) return 97.0;
    if (marks >= 120) return 95.0;
    if (marks >= 100) return 92.5;
    if (marks >= 80) return 88.0;
    if (marks >= 60) return 80.0;
    if (marks >= 40) return 65.0;
    return 40.0;
  };

  // NEET Rank Calculation
  const calculateNEETRank = (e) => {
    e.preventDefault();
    const marks = parseInt(neetMarks);
    if (isNaN(marks) || marks < 0 || marks > 720) {
      toast.error("Please enter NEET score between 0 and 720");
      return;
    }

    let estimatedRank = 0;
    if (marks >= 715) estimatedRank = 15;
    else if (marks >= 700) estimatedRank = Math.round(50 + (715 - marks) * 12);
    else if (marks >= 680) estimatedRank = Math.round(250 + (700 - marks) * 60);
    else if (marks >= 650) estimatedRank = Math.round(1500 + (680 - marks) * 130);
    else if (marks >= 600) estimatedRank = Math.round(5500 + (650 - marks) * 380);
    else if (marks >= 550) estimatedRank = Math.round(24500 + (600 - marks) * 650);
    else if (marks >= 500) estimatedRank = Math.round(57000 + (550 - marks) * 950);
    else if (marks >= 450) estimatedRank = Math.round(105000 + (500 - marks) * 1300);
    else if (marks >= 400) estimatedRank = Math.round(170000 + (450 - marks) * 1600);
    else estimatedRank = Math.round(250000 + (400 - marks) * 2100);

    setNeetPredictedRank({
      rank: estimatedRank,
      marks: marks,
      rangeMin: Math.max(1, Math.round(estimatedRank * 0.9)),
      rangeMax: Math.round(estimatedRank * 1.1)
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100/50 flex flex-col font-sans">
      <Navbar />

      {/* Main Container */}
      <main className="flex-grow pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
        {/* Page Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-[#522871] leading-tight"
          >
            JEE & NEET <span className="text-[#b72e2f]">Rank Predictor</span>
          </motion.h1>
          <div className="w-24 h-1 bg-[#b72e2f] mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 mt-4 text-base md:text-lg max-w-2xl mx-auto">
            Input your expected marks or percentile to calculate your estimated All India Rank (AIR) based on current parameters.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center mb-12 gap-4">
          <button
            onClick={() => {
              setActiveExam("JEE");
              setJeePredictedRank(null);
            }}
            className={`px-8 py-3.5 rounded-2xl font-bold transition-all shadow-md duration-300 flex items-center gap-2 ${
              activeExam === "JEE"
                ? "bg-[#522871] text-white shadow-[#522871]/20 scale-105"
                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            <Calculator size={18} />
            JEE Rank Predictor
          </button>
          <button
            onClick={() => {
              setActiveExam("NEET");
              setNeetPredictedRank(null);
            }}
            className={`px-8 py-3.5 rounded-2xl font-bold transition-all shadow-md duration-300 flex items-center gap-2 ${
              activeExam === "NEET"
                ? "bg-[#b72e2f] text-white shadow-[#b72e2f]/20 scale-105"
                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            <GraduationCap size={18} />
            NEET Rank Predictor
          </button>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form Side */}
          <div className="lg:col-span-5 bg-white p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-100 border border-slate-100">
            <h2 className="text-xl md:text-2xl font-extrabold text-[#0B0B45] mb-6 flex items-center gap-2">
              Estimate Your Rank
            </h2>

            {/* JEE Tool Forms */}
            {activeExam === "JEE" && (
              <form onSubmit={calculateJEERank} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Input Mode</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setJeeInputType("percentile")}
                      className={`py-2 px-4 rounded-xl border text-sm font-bold transition-all ${
                        jeeInputType === "percentile"
                          ? "bg-purple-50 text-[#522871] border-[#522871]"
                          : "border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      Percentile
                    </button>
                    <button
                      type="button"
                      onClick={() => setJeeInputType("marks")}
                      className={`py-2 px-4 rounded-xl border text-sm font-bold transition-all ${
                        jeeInputType === "marks"
                          ? "bg-purple-50 text-[#522871] border-[#522871]"
                          : "border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      Expected Marks
                    </button>
                  </div>
                </div>

                {jeeInputType === "percentile" ? (
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">JEE Main Percentile</label>
                    <input
                      type="number"
                      step="0.0000001"
                      placeholder="e.g. 99.45"
                      value={jeePercentile}
                      onChange={(e) => setJeePercentile(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-purple-600/10 focus:border-purple-600 outline-none transition-all"
                      required
                    />
                  </div>
                ) : (
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Expected Marks (out of 300)</label>
                    <input
                      type="number"
                      placeholder="e.g. 185"
                      value={jeeMarks}
                      onChange={(e) => setJeeMarks(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-purple-600/10 focus:border-purple-600 outline-none transition-all"
                      required
                    />
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#522871] to-[#6d3a91] text-white rounded-xl font-bold shadow-lg hover:shadow-xl active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                >
                  <Calculator size={18} /> Predict Rank
                </button>
              </form>
            )}

            {/* NEET Tool Forms */}
            {activeExam === "NEET" && (
              <form onSubmit={calculateNEETRank} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Expected NEET Marks (out of 720)</label>
                  <input
                    type="number"
                    placeholder="e.g. 640"
                    value={neetMarks}
                    onChange={(e) => setNeetMarks(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-red-600/10 focus:border-red-600 outline-none transition-all"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#b72e2f] to-[#d34546] text-white rounded-xl font-bold shadow-lg hover:shadow-xl active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                >
                  <Calculator size={18} /> Predict Rank
                </button>
              </form>
            )}
          </div>

          {/* Results Side */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-100 border border-slate-100 min-h-[300px] flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 rounded-full bg-slate-100/50 blur-xl pointer-events-none" />

              <AnimatePresence mode="wait">
                {((activeExam === "JEE" && jeePredictedRank) || (activeExam === "NEET" && neetPredictedRank)) ? (
                  <motion.div
                    key={activeExam}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center space-y-6"
                  >
                    <Award className={`w-16 h-16 mx-auto ${activeExam === "JEE" ? "text-purple-600" : "text-red-500"}`} />
                    <div>
                      <span className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-widest">Estimated AIR</span>
                      <div className="text-5xl md:text-6xl font-black text-slate-800 mt-2">
                        #{(activeExam === "JEE" ? jeePredictedRank.rank : neetPredictedRank.rank).toLocaleString()}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 max-w-md mx-auto pt-4 border-t border-slate-100">
                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                        <span className="text-gray-400 text-xs font-semibold block">Possible Rank Range</span>
                        <span className="text-lg font-bold text-slate-700 block mt-1">
                          #{(activeExam === "JEE" ? jeePredictedRank.rangeMin : neetPredictedRank.rangeMin).toLocaleString()} - #{(activeExam === "JEE" ? jeePredictedRank.rangeMax : neetPredictedRank.rangeMax).toLocaleString()}
                        </span>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                        <span className="text-gray-400 text-xs font-semibold block">
                          {activeExam === "JEE" ? "Derived Percentile" : "Input Marks"}
                        </span>
                        <span className="text-lg font-bold text-slate-700 block mt-1">
                          {activeExam === "JEE" ? `${jeePredictedRank.percentile}%` : neetPredictedRank.marks}
                        </span>
                      </div>
                    </div>

                    <p className="text-slate-500 text-sm leading-relaxed max-w-lg mx-auto">
                      Rank estimates are dynamic computations calibrated on historical parameters. Actual cutoffs depend on paper difficulty levels and total test takers.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty-rank"
                    className="text-center space-y-4 text-gray-400 py-12"
                  >
                    <Calculator className="w-12 h-12 mx-auto stroke-1" />
                    <p className="font-semibold text-lg">Input your scores to estimate your All India Rank</p>
                    <p className="text-sm max-w-sm mx-auto">Estimates are computed dynamically based on historical counseling data curves.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Counseling CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#522871] to-[#b72e2f] p-8 md:p-12 rounded-3xl text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/5 blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-black/10 blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="space-y-4 text-center lg:text-left max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-black leading-tight">Need help matching this rank to the right colleges?</h3>
              <p className="opacity-90 text-sm md:text-base leading-relaxed">
                Connect with our expert counselors at Team Excellent. Get dedicated guidance on choice filling, seat allocation, and state quotas.
              </p>
            </div>
            <button
              onClick={() => setShowConsultModal(true)}
              className="bg-white text-slate-800 font-black px-8 py-4 rounded-xl shadow-lg hover:shadow-xl active:scale-[0.98] transition-all whitespace-nowrap flex items-center gap-2 hover:bg-slate-50 duration-300"
            >
              Get Free Counseling <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </main>

      {/* Counseling Request Modal */}
      <AnimatePresence>
        {showConsultModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowConsultModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-purple-50/20 relative z-10 p-6 md:p-8"
            >
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-2">Request Expert Counseling</h3>
              <p className="text-sm text-gray-500 mb-6">Leave your details and our counselor will call you back within 24 hours.</p>

              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  try {
                    await submitCounselingRequest({
                      fullName: counselingName,
                      contactNumber: counselingPhone,
                      targetExam: counselingExam
                    });
                    toast.success("Counseling request submitted successfully!");
                    setShowConsultModal(false);
                    setCounselingName("");
                    setCounselingPhone("");
                  } catch (error) {
                    toast.error(error.message || "Failed to submit request");
                  }
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1.5">Full Name</label>
                  <input
                    type="text"
                    value={counselingName}
                    onChange={(e) => setCounselingName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white outline-none transition-all text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1.5">Contact Number</label>
                  <input
                    type="tel"
                    value={counselingPhone}
                    onChange={(e) => setCounselingPhone(e.target.value)}
                    placeholder="Enter mobile number"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white outline-none transition-all text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1.5">Target Exam</label>
                  <select 
                    value={counselingExam}
                    onChange={(e) => setCounselingExam(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white outline-none transition-all text-sm"
                  >
                    <option>JEE Main / Advanced</option>
                    <option>NEET UG</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-[#522871] to-[#b72e2f] text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 mt-4 text-sm"
                >
                  Submit Request <Send size={14} />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
