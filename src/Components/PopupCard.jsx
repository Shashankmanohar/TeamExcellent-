import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trophy, Star, Zap, GraduationCap } from "lucide-react";

export default function PopupCard() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the popup was already shown in this session
    const isShown = sessionStorage.getItem("scholarshipPopupShown");

    if (!isShown) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500); // 1.5 second delay
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("scholarshipPopupShown", "true");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-gradient-to-br from-[#5B2D7C] to-[#2D1640] 
                       rounded-[2rem] shadow-2xl overflow-hidden border border-white/20"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center 
                         bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content Area */}
            <div className="p-6 sm:p-8 text-center">
              {/* Header Icon */}
              <motion.div 
                animate={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="inline-flex items-center justify-center w-14 h-14 
                           bg-yellow-400 rounded-2xl shadow-lg mb-6 transform -rotate-3"
              >
                <Trophy className="w-8 h-8 text-[#5B2D7C]" />
              </motion.div>

              {/* Title Section */}
              <h2 className="text-5xl sm:text-6xl font-black text-yellow-400 mb-1 tracking-tighter drop-shadow-md">
                TE-MAT
              </h2>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-tight">
                Team Excellent <br />
                <span className="text-yellow-400 italic font-medium">Scholarship Test</span>
              </h3>

              {/* Subheading */}
              <p className="text-purple-100 text-base mb-6 font-medium">
                Your Gateway to <span className="text-white font-bold underline decoration-yellow-400 underline-offset-4 decoration-2">NEET | IIT-JEE</span> Success
              </p>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 gap-2.5 mb-8 text-left">
                <BenefitItem icon={<Star className="w-4 h-4 text-yellow-400" />} text="Upto 100% Scholarship" />
                <BenefitItem icon={<Zap className="w-4 h-4 text-yellow-400" />} text="Win Scholarships" />
                <BenefitItem icon={<GraduationCap className="w-4 h-4 text-yellow-400" />} text="Boost Your Preparation" />
              </div>

              {/* Call to Action */}
              <div className="flex flex-col gap-3">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/admission"
                    onClick={handleClose}
                    className="block w-full py-4 bg-yellow-400 hover:bg-yellow-300 
                               text-[#5B2D7C] font-black text-lg rounded-xl 
                               shadow-lg transition-colors tracking-tight uppercase"
                  >
                    Register Free Now
                  </Link>
                </motion.div>
                <p className="text-purple-300 text-xs font-medium">Limited slots available!</p>
              </div>
            </div>

            {/* Bottom Accent Decor */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-yellow-400/50" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function BenefitItem({ icon, text }) {
  return (
    <div className="flex items-center gap-2.5 py-2 px-4 bg-white/5 rounded-xl border border-white/10 group hover:bg-white/10 transition-colors">
      {icon}
      <span className="text-white font-semibold text-sm sm:text-base">{text}</span>
    </div>
  );
}
