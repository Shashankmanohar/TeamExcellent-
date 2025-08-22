import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What courses does Team Excellent offer?",
    answer:
      "We provide foundation and advanced courses for Class 6 to Class 10 students, as well as specialized coaching for JEE (Mains & Advanced) and NEET.",
  },
  {
    question: "How can I take admission?",
    answer:
      "You can register online through our admission page or visit our center directly. Our counselors will guide you through the process.",
  },
  {
    question: "Is there any scholarship or discount available?",
    answer:
      "Yes, we offer merit-based scholarships after evaluation tests. Contact our admission team for more details.",
  },
  {
    question: "Where is Team Excellent located?",
    answer:
      "We are located in Patna, Bihar. Visit our Contact page for the exact address and directions.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-[#472164]">
        Frequently Asked <span className="text-[#b72e2f]">Questions</span>
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl shadow-sm bg-white"
          >
            <button
              className="w-full flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 text-left font-medium text-sm sm:text-base text-[#0B0B45] focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-[#613087]" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#613087]" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-4 sm:px-6 pb-3 sm:pb-4 text-xs sm:text-sm text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
