import React from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  Snowflake,
  Smartphone,
  Building2,
  Users,
  HelpCircle,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Digital Learning System",
    description: "Interactive smart classrooms and digital boards for effective concept-based learning.",
    icon: <Monitor className="w-7 h-7" />,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-100",
  },
  {
    id: 2,
    title: "AC Classroom",
    description: "Comfortable, air-conditioned classrooms designed for focused learning.",
    icon: <Snowflake className="w-7 h-7" />,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100",
  },
  {
    id: 3,
    title: "Online Platform",
    description: "Access recorded lectures, study material, and live classes anytime, anywhere.",
    icon: <Smartphone className="w-7 h-7" />,
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-100",
  },
  {
    id: 5,
    title: "Hostel Facility",
    description: "Safe, secure, and fully furnished hostels for students with mess facilities.",
    icon: <Building2 className="w-7 h-7" />,
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-100",
  },
  {
    id: 6,
    title: "Counselling & Mentoring",
    description: "Personalized mentorship and career counselling sessions to guide every student.",
    icon: <Users className="w-7 h-7" />,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-100",
  },
  {
    id: 7,
    title: "Help Desk",
    description: "Dedicated help desk for student support, queries, and administrative assistance.",
    icon: <HelpCircle className="w-7 h-7" />,
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-100",
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

export default function Features() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#522871] mb-4">
              Our <span className="text-[#b72e2f]">Features</span>
            </h2>
            <div className="w-20 h-1.5 bg-[#9333ea] rounded-full mb-4"></div>
            <p className="text-gray-600 text-lg max-w-xl">
              Providing world-class facilities to ensure our students have everything
              they need to achieve academic excellence.
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="px-6 py-3 bg-purple-50 text-[#522871] font-semibold rounded-2xl border border-purple-100">
              Student-First Approach
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`p-8 bg-white rounded-[2.5rem] border ${feature.borderColor} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group`}
            >
              <div className={`w-14 h-14 flex items-center justify-center rounded-2xl ${feature.bgColor} ${feature.color} mb-6 transition-transform group-hover:scale-110 duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
