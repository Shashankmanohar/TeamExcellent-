import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Laptop, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function PopupCard() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup once per session with a 1.5s delay
    const isShown = sessionStorage.getItem("aitsPopupShown");
    if (!isShown) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("aitsPopupShown", "true");
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
            className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.25)] 
                       overflow-hidden border border-gray-100"
          >
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-500/5 rounded-full blur-3xl -ml-20 -mb-20" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center 
                         bg-gray-100 hover:bg-gray-200 rounded-full text-gray-500 hover:text-gray-800 transition-all z-20"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Content Area */}
            <div className="relative p-8 sm:p-10 text-center z-10">
              {/* "Online Practice Platform" Floating Badge */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-100 text-[#5B2D7C] 
                           rounded-full text-xs font-bold uppercase tracking-wider mb-6 shadow-sm"
              >
                <Laptop className="w-3.5 h-3.5" />
                Online Practice Platform
              </motion.div>

              {/* Main Branding */}
              <div className="mb-6">
                <motion.h2 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-5xl sm:text-6xl font-black text-[#0F172A] leading-tight tracking-tight"
                >
                  AITS
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-[#5B2D7C] text-base sm:text-lg font-bold mt-2 uppercase tracking-widest leading-snug"
                >
                  Online Examination Practice Centre
                </motion.p>
              </div>

              {/* Hook Section */}
              <div className="space-y-4 mb-8">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Prepare for India's toughest exams with real CBT-simulation mock tests.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                  <Badge text="JEE" />
                  <Badge text="NEET" />
                  <Badge text="Board" />
                  <Badge text="NCERT" />
                </div>
              </div>

              {/* Main CTA */}
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a
                    href="https://teamexcellent-aits.online/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleClose}
                    className="group relative block w-full py-4 bg-[#0F172A] hover:bg-[#5B2D7C] text-white font-black 
                               text-xl rounded-2xl shadow-[0_10px_30px_rgba(15,23,42,0.15)] 
                               transition-all duration-300 overflow-hidden text-center"
                  >
                    {/* Reflective shine animation */}
                    <motion.div 
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" 
                    />
                    <span className="relative flex items-center justify-center gap-2">
                      Start Practicing Now
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </a>
                </motion.div>
                <div className="mt-4 flex items-center justify-center gap-2 text-gray-500 text-xs sm:text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Practice anytime, anywhere!
                </div>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="h-2 bg-gradient-to-r from-[#5B2D7C] via-pink-500 to-[#5B2D7C]" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function Badge({ text }) {
  return (
    <span className="px-3.5 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-700 font-bold text-xs">
      {text}
    </span>
  );
}
