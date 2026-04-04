import React, { useState, useEffect } from "react";
import { User, Phone, Mail, MapPin, BookOpen, Send, CheckCircle2, X, Sparkles, GraduationCap } from "lucide-react";
import { submitEnrollment } from "../lib/enrollmentApi";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

export default function TematEnrollmentForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    currentClass: "",
    city: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setLoading(false);
      setFormData({
        fullName: "",
        mobileNumber: "",
        email: "",
        currentClass: "",
        city: "",
      });
    }
  }, [isOpen]);

  const classes = [
    "Class 6", "Class 7", "Class 8", "Class 9", "Class 10",
    "Class 11 (Engineering)", "Class 11 (Medical)",
    "Class 12 (Engineering)", "Class 12 (Medical)",
    "Class 12 Pass (Engineering)", "Class 12 Pass (Medical)"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.mobileNumber || !formData.currentClass || !formData.city) {
      toast.error("Please fill in all mandatory fields");
      return;
    }

    try {
      setLoading(true);
      // Tag as TE-MAT Scholarship Test enrollment
      const submissionData = {
        ...formData,
        course: `TE-MAT (${formData.currentClass})`,
        query: "Registered through TE-MAT Scholarship Popup"
      };
      
      await submitEnrollment(submissionData);
      toast.success("Registration successful!");
      setSubmitted(true);
    } catch (error) {
      console.error("TEMAT Registration error:", error);
      toast.error(error.message || "Failed to register. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 overflow-y-auto">
          {/* Enhanced Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0B0B45]/70 backdrop-blur-md"
          />

          {/* Premium Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl bg-white rounded-[2rem] shadow-[0_25px_60px_rgba(0,0,0,0.5)] 
                       overflow-hidden border border-white/20 my-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center 
                         bg-gray-100 hover:bg-gray-200 rounded-full text-gray-400 hover:text-gray-800 transition-all z-20"
            >
              <X className="w-6 h-6" />
            </button>

            {submitted ? (
              <div className="p-8 md:p-12 text-center">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </motion.div>
                <h2 className="text-3xl font-black text-[#0B0B45] mb-4 tracking-tight leading-none">Registration Confirmed!</h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Get ready for the scholarship test this Sunday. Our team will contact you with the test details.
                </p>
                <button
                  onClick={onClose}
                  className="w-full md:w-auto px-10 py-4 bg-[#5B2D7C] text-white rounded-2xl font-bold 
                             hover:bg-[#472164] transition-all shadow-xl hover:shadow-[#5B2D7C]/30"
                >
                  Great, See You!
                </button>
              </div>
            ) : (
              <>
                {/* Header Branding */}
                <div className="bg-[#5B2D7C] px-8 py-10 md:px-12 md:py-12 relative overflow-hidden">
                   {/* Background Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl -mr-16 -mt-16" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-400/20 rounded-full blur-2xl -ml-12 -mb-12" />
                  
                  <div className="relative z-10 flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-sm">
                      <GraduationCap className="w-8 h-8 text-yellow-400" />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-black text-white leading-none tracking-tight">TE-MAT</h2>
                      <p className="text-yellow-400 text-sm font-bold uppercase tracking-widest mt-1">Scholarship Test 2026</p>
                    </div>
                  </div>
                  <p className="relative z-10 text-purple-100/90 text-lg md:pr-10 leading-snug">
                    Register now and lock your seat at <span className="text-white font-bold underline decoration-yellow-400 underline-offset-4">₹0 cost</span>.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-1.5 font-semibold">
                      <label className="text-sm text-gray-700">Full Name *</label>
                      <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#5B2D7C] transition-colors" />
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl 
                                     focus:ring-2 focus:ring-[#5B2D7C] focus:border-transparent outline-none transition-all"
                          required
                        />
                      </div>
                    </div>

                    {/* Mobile */}
                    <div className="space-y-1.5 font-semibold">
                      <label className="text-sm text-gray-700">Mobile Number *</label>
                      <div className="relative group">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#5B2D7C] transition-colors" />
                        <input
                          type="tel"
                          name="mobileNumber"
                          value={formData.mobileNumber}
                          onChange={handleChange}
                          placeholder="10-digit number"
                          className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl 
                                     focus:ring-2 focus:ring-[#5B2D7C] focus:border-transparent outline-none transition-all"
                          required
                        />
                      </div>
                    </div>

                    {/* City */}
                    <div className="space-y-1.5 font-semibold">
                      <label className="text-sm text-gray-700">City *</label>
                      <div className="relative group">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#5B2D7C] transition-colors" />
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="e.g. Patna"
                          className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl 
                                     focus:ring-2 focus:ring-[#5B2D7C] focus:border-transparent outline-none transition-all"
                          required
                        />
                      </div>
                    </div>

                    {/* Current Class */}
                    <div className="space-y-1.5 font-semibold">
                      <label className="text-sm text-gray-700">Current Class *</label>
                      <div className="relative group">
                        <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#5B2D7C] transition-colors" />
                        <select
                          name="currentClass"
                          value={formData.currentClass}
                          onChange={handleChange}
                          className="w-full pl-12 pr-10 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl 
                                     focus:ring-2 focus:ring-[#5B2D7C] focus:border-transparent outline-none transition-all appearance-none"
                          required
                        >
                          <option value="" disabled>Select class</option>
                          {classes.map((cls) => (
                            <option key={cls} value={cls}>{cls}</option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                           <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                           </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5 font-semibold">
                    <label className="text-sm text-gray-700">Email Address (Optional)</label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#5B2D7C] transition-colors" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl 
                                   focus:ring-2 focus:ring-[#5B2D7C] focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full group bg-[#5B2D7C] text-white py-4 md:py-5 rounded-[1.5rem] font-black 
                                 text-xl hover:shadow-[0_15px_40px_rgba(91,45,124,0.3)] transform hover:-translate-y-1 
                                 transition-all flex items-center justify-center gap-3"
                    >
                      {loading ? (
                        <div className="h-6 w-6 border-2 border-white border-t-transparent animate-spin rounded-full"></div>
                      ) : (
                        <>
                          Confirm Registration <Send className="w-6 h-6 group-hover:translate-x-1 transition-all" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-gray-400 text-sm mt-5 font-medium flex items-center justify-center gap-2">
                       <Sparkles className="w-4 h-4 text-yellow-500" />
                       Test Date: Next Sunday | Reporting: 10:00 AM
                    </p>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
