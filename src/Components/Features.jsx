import React from "react";
import {
  Monitor,
  Snowflake,
  Smartphone,
  LibraryBig,
  Building2,
  Users,
  HelpCircle,
} from "lucide-react";

function Features() {
  const features = [
    {
      id: 1,
      title: "Digital Learning System",
      description:
        "Interactive smart classrooms and digital boards for effective concept-based learning.",
      icon: <Monitor className="w-10 h-10 text-purple-600" />,
    },
    {
      id: 2,
      title: "AC Classroom",
      description:
        "Comfortable, air-conditioned classrooms designed for focused learning.",
      icon: <Snowflake className="w-10 h-10 text-blue-600" />,
    },
    {
      id: 3,
      title: "Online Learning Platform & Application",
      description:
        "Access recorded lectures, study material, and live classes anytime, anywhere.",
      icon: <Smartphone className="w-10 h-10 text-green-600" />,
    },
    {
      id: 4,
      title: "Library 24x7",
      description:
        "Well-equipped library with reference books, journals, and digital resources available 24x7.",
      icon: <LibraryBig className="w-10 h-10 text-yellow-600" />,
    },
    {
      id: 5,
      title: "Hostel",
      description:
        "Safe, secure, and fully furnished hostels for students with mess facilities.",
      icon: <Building2 className="w-10 h-10 text-red-600" />,
    },
    {
      id: 6,
      title: "Counselling & Mentoring",
      description:
        "Personalized mentorship and career counselling sessions to guide every student.",
      icon: <Users className="w-10 h-10 text-indigo-600" />,
    },
    {
      id: 7,
      title: "Help Desk",
      description:
        "Dedicated help desk for student support, queries, and administrative assistance.",
      icon: <HelpCircle className="w-10 h-10 text-pink-600" />,
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#522871]">Our Features</h1>
        <div className="w-24 h-1 bg-purple-600 mx-auto mt-2 rounded"></div>
        <p className="text-gray-600 mt-2">
          Providing world-class facilities for our students' growth
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition"
          >
            <div className="flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-center mt-2 text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
