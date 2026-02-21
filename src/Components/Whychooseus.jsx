import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Beaker,
  Trophy,
  Users,
  Target
} from "lucide-react";

const features = [
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "JEE Exam Preparation",
    description: "Specialized coaching and resources to help students excel in the Joint Entrance Examination (JEE).",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-100",
  },
  {
    icon: <Beaker className="w-8 h-8" />,
    title: "NEET Exam Preparation",
    description: "Comprehensive guidance and support for students aiming for top ranks in the NEET medical entrance exam.",
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-100",
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Kota-Level Education",
    description: "Experience the same high-quality teaching standards and rigorous study material as Kota, right here in Patna.",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-100",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Experienced Faculty",
    description: "Our faculty members are highly qualified and experienced, ensuring top-tier education and mentorship.",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-100",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Personalized Attention",
    description: "Individual student needs are our priority, providing custom mentorship to help them succeed.",
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-100",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Whychooseus() {
  return (
    <section className="w-full bg-gray-50/50 py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-purple-100 text-[#522871] text-sm font-bold rounded-full mb-6 uppercase tracking-wider"
          >
            Why Team Excellent?
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-[#522871] mb-6 tracking-tight">
            The Foundation of Your <span className="text-[#b72e2f]">Success</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            At our institution, we are dedicated to providing the highest quality
            education and support for our students.
          </p>
        </div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`p-8 bg-white border ${feature.borderColor} rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col group h-full`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 flex items-center justify-center rounded-2xl ${feature.bgColor} ${feature.color} mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3 duration-300`}>
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-4 leading-snug">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
