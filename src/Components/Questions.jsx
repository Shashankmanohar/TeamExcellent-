import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What courses are offered at Team Excellent Career Institute?",
    answer:
      "Team Excellent Career Institute offers coaching for IIT-JEE, NEET, and Foundation courses for Class 6 to Class 10 students, focusing on strong concept building and competitive exam preparation.",
  },
  {
    question: "Are doubt classes available for students?",
    answer:
      "Yes. Regular doubt-clearing classes are conducted where students can ask questions and get detailed explanations from faculty members. These sessions help students strengthen concepts and improve confidence.",
  },
  {
    question: "What are smart classes and how do they help students?",
    answer:
      "Smart classes use digital learning tools, visual explanations, and interactive teaching methods to make complex topics easier to understand. This improves student engagement and helps in better concept retention.",
  },
  {
    question: "Is personal attention given to each student?",
    answer:
      "Yes. The institute maintains focused batch sizes so that every student receives individual attention, mentoring, and academic guidance.",
  },
  {
    question: "Do you conduct regular tests series?",
    answer:
      "Yes. Regular tests, mock exams, and performance analysis are conducted to track student progress and improve exam readiness.",
  },
  {
    question: "Can beginners join JEE or NEET coaching?",
    answer:
      "Yes. Students without prior competitive exam experience can join. The institute provides foundation-level teaching and step-by-step guidance for beginners.",
  },
  {
    question: "How can students take admission?",
    answer:
      "Students can visit the institute, contact the admission team, or fill out the enquiry form on the official website for admission details.",
  },
  {
    question: "Can Bihar Board students prepare for JEE and NEET?",
    answer:
      "Yes, absolutely. Bihar Board students can successfully prepare for JEE and NEET. The syllabus of these competitive exams is largely based on NCERT, which makes it suitable for Bihar Board students as well. With proper guidance, regular practice, and concept-based learning, many Bihar Board students achieve excellent results in competitive exams.",
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
