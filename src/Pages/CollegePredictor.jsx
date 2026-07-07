import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Landmark, GraduationCap, ChevronRight, Send, Calculator } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import { submitCounselingRequest } from "../lib/counselingApi";

// Static mock databases for predictors
const JEE_COLLEGES = [
  { name: "NIT Trichy", code: "NITT", state: "Tamil Nadu", tier: 1, branches: ["CSE", "ECE", "EEE", "Mech", "Civil"] },
  { name: "NIT Surathkal", code: "NITK", state: "Karnataka", tier: 1, branches: ["CSE", "ECE", "EEE", "Mech", "Civil"] },
  { name: "NIT Warangal", code: "NITW", state: "Telangana", tier: 1, branches: ["CSE", "ECE", "EEE", "Mech", "Civil"] },
  { name: "MNNIT Allahabad", code: "MNNIT", state: "Uttar Pradesh", tier: 2, branches: ["CSE", "ECE", "EEE", "Mech", "Civil"] },
  { name: "NIT Patna", code: "NITP", state: "Bihar", tier: 2, branches: ["CSE", "ECE", "EEE", "Mech", "Civil"] },
  { name: "NIT Calicut", code: "NITC", state: "Kerala", tier: 2, branches: ["CSE", "ECE", "EEE", "Mech", "Civil"] },
  { name: "VNIT Nagpur", code: "VNIT", state: "Maharashtra", tier: 2, branches: ["CSE", "ECE", "EEE", "Mech", "Civil"] },
  { name: "IIIT Allahabad", code: "IIITA", state: "Uttar Pradesh", tier: 1, branches: ["IT", "ECE"] },
  { name: "IIIT Gwalior", code: "IIITG", state: "Madhya Pradesh", tier: 2, branches: ["CSE", "IT"] },
  { name: "IIIT Jabalpur", code: "IIITJ", state: "Madhya Pradesh", tier: 3, branches: ["CSE", "ECE", "Mech"] },
  { name: "BIT Mesra", code: "BITM", state: "Jharkhand", tier: 3, branches: ["CSE", "ECE", "EEE", "Mech", "Civil"] },
  { name: "PEC Chandigarh", code: "PEC", state: "Punjab", tier: 3, branches: ["CSE", "ECE", "EEE", "Mech", "Civil"] }
];

const NEET_COLLEGES = [
  { name: "AIIMS New Delhi", code: "AIIMSD", state: "Delhi", type: "Central", cutoffRankRange: [1, 100] },
  { name: "MAMC Delhi", code: "MAMC", state: "Delhi", type: "Government", cutoffRankRange: [50, 400] },
  { name: "VMMC Delhi", code: "VMMC", state: "Delhi", type: "Government", cutoffRankRange: [100, 600] },
  { name: "AIIMS Patna", code: "AIIMSP", state: "Bihar", type: "Central", cutoffRankRange: [500, 2000] },
  { name: "PMC Patna", code: "PMCH", state: "Bihar", type: "Government", cutoffRankRange: [1500, 4500] },
  { name: "KGMU Lucknow", code: "KGMU", state: "Uttar Pradesh", type: "Government", cutoffRankRange: [800, 3000] },
  { name: "IGIMS Patna", code: "IGIMS", state: "Bihar", type: "Government", cutoffRankRange: [3000, 7500] },
  { name: "DMC Laheriasarai", code: "DMCH", state: "Bihar", type: "Government", cutoffRankRange: [5000, 11000] },
  { name: "ANMMCH Gaya", code: "ANMMCH", state: "Bihar", type: "Government", cutoffRankRange: [7000, 14000] },
  { name: "Deemed KIMS Bhubaneswar", code: "KIMS", state: "Odisha", type: "Deemed", cutoffRankRange: [20000, 65000] },
  { name: "DY Patil Medical College", code: "DYP", state: "Maharashtra", type: "Deemed", cutoffRankRange: [50000, 120000] }
];

export default function CollegePredictor() {
  const [activeExam, setActiveExam] = useState("JEE"); // JEE or NEET

  // Form States - JEE College
  const [jeeRank, setJeeRank] = useState("");
  const [jeeCategory, setJeeCategory] = useState("General");
  const [jeeState, setJeeState] = useState("Bihar");
  const [jeeGender, setJeeGender] = useState("Neutral");
  const [jeeBranch, setJeeBranch] = useState("Any");
  const [jeeCollegesResult, setJeeCollegesResult] = useState(null);

  // Form States - NEET College
  const [neetRank, setNeetRank] = useState("");
  const [neetCategory, setNeetCategory] = useState("General");
  const [neetState, setNeetState] = useState("Bihar");
  const [neetCollegesResult, setNeetCollegesResult] = useState(null);

  // Counseling banner modal trigger
  const [showConsultModal, setShowConsultModal] = useState(false);
  const [counselingName, setCounselingName] = useState("");
  const [counselingPhone, setCounselingPhone] = useState("");
  const [counselingExam, setCounselingExam] = useState("JEE Main / Advanced");

  // JEE College Prediction
  const predictJEEColleges = (e) => {
    e.preventDefault();
    const rankNum = parseInt(jeeRank);
    if (isNaN(rankNum) || rankNum <= 0) {
      toast.error("Please enter a valid CRL Rank");
      return;
    }

    // Category weighting simulation
    let factor = 1;
    if (jeeCategory === "OBC") factor = 3;
    if (jeeCategory === "SC") factor = 6;
    if (jeeCategory === "ST") factor = 10;
    if (jeeCategory === "EWS") factor = 1.6;

    const adjustedRank = rankNum / factor;

    const results = JEE_COLLEGES.map(college => {
      let baseCutoff = 15000;
      if (college.tier === 1) baseCutoff = 6000;
      if (college.tier === 2) baseCutoff = 18000;
      if (college.tier === 3) baseCutoff = 35000;

      // Bihar local preference for NIT Patna
      let localBonus = 1;
      if (college.code === "NITP" && jeeState === "Bihar") {
        localBonus = 1.4;
      }

      const matchingBranches = college.branches.map(branch => {
        let branchCutoff = baseCutoff;
        if (branch === "CSE") branchCutoff = baseCutoff;
        else if (branch === "ECE" || branch === "IT") branchCutoff = baseCutoff * 1.5;
        else if (branch === "EEE") branchCutoff = baseCutoff * 2.0;
        else if (branch === "Mech") branchCutoff = baseCutoff * 3.0;
        else branchCutoff = baseCutoff * 4.2;

        const maxClosingRank = branchCutoff * localBonus;
        let chance = "Low";
        let color = "text-red-500 bg-red-50 border-red-100";

        if (adjustedRank <= maxClosingRank * 0.8) {
          chance = "High";
          color = "text-green-600 bg-green-50 border-green-100";
        } else if (adjustedRank <= maxClosingRank * 1.2) {
          chance = "Medium";
          color = "text-amber-600 bg-amber-50 border-amber-100";
        }

        return {
          branch,
          cutoff: Math.round(maxClosingRank * factor),
          chance,
          color
        };
      }).filter(b => jeeBranch === "Any" || b.branch === jeeBranch);

      return {
        ...college,
        branches: matchingBranches
      };
    }).filter(c => c.branches.length > 0);

    setJeeCollegesResult(results);
  };

  // NEET College Prediction
  const predictNEETColleges = (e) => {
    e.preventDefault();
    const rankNum = parseInt(neetRank);
    if (isNaN(rankNum) || rankNum <= 0) {
      toast.error("Please enter a valid NEET All India Rank");
      return;
    }

    let categoryBonus = 0;
    if (neetCategory === "OBC") categoryBonus = 3000;
    if (neetCategory === "SC") categoryBonus = 40000;
    if (neetCategory === "ST") categoryBonus = 60000;
    if (neetCategory === "EWS") categoryBonus = 2000;

    const results = NEET_COLLEGES.map(college => {
      const minCutoff = college.cutoffRankRange[0];
      let maxCutoff = college.cutoffRankRange[1] + categoryBonus;

      if (college.state === neetState && college.type === "Government") {
        maxCutoff = maxCutoff * 1.6;
      }

      let chance = "Low";
      let color = "text-red-500 bg-red-50 border-red-100";

      if (rankNum <= maxCutoff * 0.8) {
        chance = "High";
        color = "text-green-600 bg-green-50 border-green-100";
      } else if (rankNum <= maxCutoff * 1.15) {
        chance = "Medium";
        color = "text-amber-600 bg-amber-50 border-amber-100";
      }

      return {
        ...college,
        cutoff: Math.round(maxCutoff),
        chance,
        color
      };
    });

    setNeetCollegesResult(results);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100/50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-[#522871] leading-tight"
          >
            JEE & NEET <span className="text-[#b72e2f]">College Predictor</span>
          </motion.h1>
          <div className="w-24 h-1 bg-[#b72e2f] mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 mt-4 text-base md:text-lg max-w-2xl mx-auto">
            Predict your admission probabilities in top engineering and medical colleges based on previous year JoSAA/MCC cutoff ranks.
          </p>
        </div>

        <div className="flex justify-center mb-12 gap-4">
          <button
            onClick={() => {
              setActiveExam("JEE");
              setJeeCollegesResult(null);
            }}
            className={`px-8 py-3.5 rounded-2xl font-bold transition-all shadow-md duration-300 flex items-center gap-2 ${
              activeExam === "JEE"
                ? "bg-[#522871] text-white shadow-[#522871]/20 scale-105"
                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            <Landmark size={18} />
            JEE College Predictor
          </button>
          <button
            onClick={() => {
              setActiveExam("NEET");
              setNeetCollegesResult(null);
            }}
            className={`px-8 py-3.5 rounded-2xl font-bold transition-all shadow-md duration-300 flex items-center gap-2 ${
              activeExam === "NEET"
                ? "bg-[#b72e2f] text-white shadow-[#b72e2f]/20 scale-105"
                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            <GraduationCap size={18} />
            NEET College Predictor
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 bg-white p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-100 border border-slate-100">
            <h2 className="text-xl md:text-2xl font-extrabold text-[#0B0B45] mb-6">Find Matching Colleges</h2>

            {activeExam === "JEE" && (
              <form onSubmit={predictJEEColleges} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">JEE Main CRL Rank</label>
                  <input
                    type="number"
                    placeholder="e.g. 14500"
                    value={jeeRank}
                    onChange={(e) => setJeeRank(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-purple-600/10 focus:border-purple-600 outline-none transition-all"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                    <select
                      value={jeeCategory}
                      onChange={(e) => setJeeCategory(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white outline-none cursor-pointer"
                    >
                      <option value="General">General</option>
                      <option value="OBC">OBC-NCL</option>
                      <option value="SC">SC</option>
                      <option value="ST">ST</option>
                      <option value="EWS">EWS</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Home State</label>
                    <select
                      value={jeeState}
                      onChange={(e) => setJeeState(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white outline-none cursor-pointer"
                    >
                      <option value="Bihar">Bihar</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Delhi">Delhi</option>
                      <option value="West Bengal">West Bengal</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Gender Pool</label>
                    <select
                      value={jeeGender}
                      onChange={(e) => setJeeGender(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white outline-none cursor-pointer"
                    >
                      <option value="Neutral">Gender-Neutral</option>
                      <option value="Female">Female Only</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Branch</label>
                    <select
                      value={jeeBranch}
                      onChange={(e) => setJeeBranch(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white outline-none cursor-pointer"
                    >
                      <option value="Any">Any Branch</option>
                      <option value="CSE">Computer Science (CSE)</option>
                      <option value="ECE">Electronics (ECE / IT)</option>
                      <option value="EEE">Electrical (EEE)</option>
                      <option value="Mech">Mechanical</option>
                      <option value="Civil">Civil</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#522871] to-[#6d3a91] text-white rounded-xl font-bold shadow-lg hover:shadow-xl active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                >
                  <Landmark size={18} /> Predict Colleges
                </button>
              </form>
            )}

            {activeExam === "NEET" && (
              <form onSubmit={predictNEETColleges} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">NEET All India Rank (AIR)</label>
                  <input
                    type="number"
                    placeholder="e.g. 8500"
                    value={neetRank}
                    onChange={(e) => setNeetRank(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-red-600/10 focus:border-red-600 outline-none transition-all"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                    <select
                      value={neetCategory}
                      onChange={(e) => setNeetCategory(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white outline-none cursor-pointer"
                    >
                      <option value="General">General</option>
                      <option value="OBC">OBC-NCL</option>
                      <option value="SC">SC</option>
                      <option value="ST">ST</option>
                      <option value="EWS">EWS</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Home State</label>
                    <select
                      value={neetState}
                      onChange={(e) => setNeetState(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white outline-none cursor-pointer"
                    >
                      <option value="Bihar">Bihar</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#b72e2f] to-[#d34546] text-white rounded-xl font-bold shadow-lg hover:shadow-xl active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                >
                  <Landmark size={18} /> Predict Colleges
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-100 border border-slate-100 min-h-[450px]">
              <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center justify-between">
                <span>Predicted Matchings</span>
                {((activeExam === "JEE" && jeeCollegesResult) || (activeExam === "NEET" && neetCollegesResult)) && (
                  <span className="text-xs text-gray-400 font-normal">Based on recent round cutoffs</span>
                )}
              </h3>

              <AnimatePresence mode="wait">
                {activeExam === "JEE" && jeeCollegesResult && (
                  <motion.div
                    key="jee-colleges"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4 max-h-[500px] overflow-y-auto pr-2"
                  >
                    {jeeCollegesResult.length > 0 ? (
                      jeeCollegesResult.map((college, idx) => (
                        <div key={idx} className="p-5 border border-slate-100 rounded-2xl bg-slate-50/50 hover:bg-slate-50 transition-all duration-300">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h4 className="font-bold text-slate-800 text-base md:text-lg">{college.name}</h4>
                              <span className="text-xs text-gray-400 font-semibold">{college.code} • {college.state}</span>
                            </div>
                          </div>
                          <div className="space-y-2 mt-3 pt-3 border-t border-slate-100">
                            {college.branches.map((b, bIdx) => (
                              <div key={bIdx} className="flex justify-between items-center text-sm">
                                <span className="font-semibold text-slate-600">{b.branch}</span>
                                <div className="flex items-center gap-3">
                                  <span className="text-xs text-gray-400">Est. Cutoff: ~{b.cutoff.toLocaleString()}</span>
                                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${b.color}`}>
                                    {b.chance} Chance
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-12 text-gray-400 font-semibold">No direct matches found. Try entering a higher rank.</div>
                    )}
                  </motion.div>
                )}

                {activeExam === "NEET" && neetCollegesResult && (
                  <motion.div
                    key="neet-colleges"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4 max-h-[500px] overflow-y-auto pr-2"
                  >
                    {neetCollegesResult.length > 0 ? (
                      neetCollegesResult.map((college, idx) => (
                        <div key={idx} className="p-5 border border-slate-100 rounded-2xl bg-slate-50/50 hover:bg-slate-50 transition-all duration-300 flex flex-col md:flex-row justify-between md:items-center gap-4">
                          <div>
                            <h4 className="font-bold text-slate-800 text-base md:text-lg">{college.name}</h4>
                            <span className="text-xs text-gray-400 font-semibold uppercase">{college.type} • {college.state}</span>
                          </div>
                          <div className="flex items-center gap-4 justify-between md:justify-end">
                            <span className="text-xs text-gray-400">Est. Cutoff: ~{college.cutoff.toLocaleString()}</span>
                            <span className={`px-3.5 py-1.5 rounded-full text-xs font-bold border ${college.color}`}>
                              {college.chance} Chance
                            </span>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-12 text-gray-400 font-semibold">No matching medical colleges found.</div>
                    )}
                  </motion.div>
                )}

                {!((activeExam === "JEE" && jeeCollegesResult) || (activeExam === "NEET" && neetCollegesResult)) && (
                  <motion.div
                    key="empty-colleges"
                    className="text-center space-y-4 text-gray-400 py-16"
                  >
                    <Landmark className="w-12 h-12 mx-auto stroke-1" />
                    <p className="font-semibold text-lg">Input your score / category to match colleges</p>
                    <p className="text-sm max-w-sm mx-auto">Shows predicted admission probabilities for top central and state universities.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#522871] to-[#b72e2f] p-8 md:p-12 rounded-3xl text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/5 blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-black/10 blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="space-y-4 text-center lg:text-left max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-black leading-tight">Need expert counseling for choice filling?</h3>
              <p className="opacity-90 text-sm md:text-base leading-relaxed">
                Connect with our top counselors. Get guidance on JoSAA, CSAB, MCC, and state pools.
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
