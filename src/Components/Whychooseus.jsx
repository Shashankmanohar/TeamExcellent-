import React from "react";

export default function Whychooseus() {
  const features = [
    {
      icon: "🎓",
      title: "JEE Exam Preparation",
      description:
        "Specialized coaching and resources to help students excel in the Joint Entrance Examination (JEE).",
    },
    {
      icon: "🧪",
      title: "NEET Exam Preparation",
      description:
        "Comprehensive guidance and support for students aiming for top ranks in the NEET medical entrance exam.",
    },
    {
      icon: "👨‍🏫",
      title: "Experienced Faculty",
      description:
        "Our faculty members are highly qualified and experienced in their respective fields, ensuring quality education.",
    },
    {
      icon: "🤝",
      title: "Personalized Attention",
      description:
        "We focus on individual student needs, providing personalized attention and mentorship to help them succeed.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-center text-[#472164] mb-8">
          Why Choose <span className="text-[#b72e2f]">Us?</span>
        </h1>
        <p className="text-lg text-center max-w-2xl mx-auto">
          At our institution, we are dedicated to providing the highest quality
          education and support for our students. Here are some reasons why you
          should choose us:
        </p>

        {/* Responsive Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="text-5xl mb-3">{feature.icon}</div>

              {/* Title */}
              <h2 className="text-xl font-bold text-[#472164] mb-2">
                {feature.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
