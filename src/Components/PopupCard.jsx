import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trophy, Calendar, Sparkles, CheckCircle2 } from "lucide-react";
import TematEnrollmentForm from "./TematEnrollmentForm";

export default function PopupCard() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    // Show popup once per session with a 1.5s delay
    const isShown = sessionStorage.getItem("scholarshipPopupShown");
    if (!isShown) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("scholarshipPopupShown", "true");
  };

  const handleRegisterClick = (e) => {
    e.preventDefault();
    setIsFormOpen(true);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop with heavy blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Premium Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-[#5B2D7C] rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] 
                       overflow-hidden border border-white/10"
          >
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl -ml-20 -mb-20" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center 
                         bg-white/10 hover:bg-white/20 rounded-full text-white/80 hover:text-white transition-all z-20"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Content Area */}
            <div className="relative p-8 sm:p-10 text-center z-10">
              {/* "Test Every Sunday" Floating Badge */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-400 text-[#5B2D7C] 
                           rounded-full text-xs font-bold uppercase tracking-wider mb-6 shadow-lg shadow-yellow-400/20"
              >
                <Calendar className="w-3.5 h-3.5" />
                Test Every Sunday
              </motion.div>

              {/* Main Branding */}
              <div className="mb-6">
                <motion.h2 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-6xl sm:text-7xl font-black text-white leading-none tracking-tighter"
                >
                  TE-MAT
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-yellow-400 text-lg sm:text-xl font-bold mt-1 uppercase tracking-widest"
                >
                  Team Excellent Scholarship Test
                </motion.p>
              </div>

              {/* Hook Section */}
              <div className="space-y-4 mb-10">
                <div className="inline-block px-6 py-3 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <p className="text-xl sm:text-2xl font-bold text-white leading-tight">
                    Lock Your Seat at <span className="text-yellow-400 underline decoration-2 underline-offset-4">₹0</span>
                  </p>
                </div>
                <p className="text-purple-100/90 text-lg">
                  Get up to <span className="text-white font-black text-2xl">100%</span> Scholarship
                </p>
              </div>

              {/* Benefits Pills */}
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                <Badge text="IIT-JEE" />
                <Badge text="NEET" />
                <Badge text="Class 6-12" />
              </div>

              {/* Main CTA */}
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/admission"
                    onClick={handleRegisterClick}
                    className="group relative block w-full py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 
                               hover:from-yellow-300 hover:to-yellow-400 text-[#5B2D7C] font-black 
                               text-2xl rounded-2xl shadow-[0_10px_30px_rgba(250,204,21,0.3)] 
                               transition-all duration-300 overflow-hidden"
                  >
                    {/* Reflective shine animation */}
                    <motion.div 
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" 
                    />
                    <span className="relative flex items-center justify-center gap-2">
                      Register Now
                      <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                    </span>
                  </Link>
                </motion.div>
                <div className="mt-4 flex items-center justify-center gap-2 text-purple-200/80 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400" />
                  Limited seats available for upcoming Sunday!
                </div>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="h-2 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400" />
          </motion.div>

          {/* Dedicated Scholarship Form */}
          <TematEnrollmentForm 
            isOpen={isFormOpen} 
            onClose={() => setIsFormOpen(false)} 
          />
        </div>
      )}
    </AnimatePresence>
  );
}

function Badge({ text }) {
  return (
    <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-white font-bold text-sm">
      {text}
    </span>
  );
}
