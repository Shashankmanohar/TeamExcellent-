import React, { useState } from "react";
import { HelpCircle } from "lucide-react";

function AdmissionProcess() {
  const steps = [
    {
      id: 1,
      title: "Do Enquiry",
      description:
        "Reach out to Team Excellent for course details, fee structure, and guidance from our counselors.",
      color: "text-[#9333ea]", // purple-600
    },
    {
      id: 2,
      title: "Test at Institute",
      description:
        "An entrance test will be conducted at our institute to evaluate the student’s aptitude.",
      color: "text-[#dc2626]", // red-600
    },
    {
      id: 3,
      title: "Scholarship",
      description:
        "Based on performance in the entrance test, eligible students can avail scholarship benefits.",
      color: "text-[#eab308]", // yellow-500
    },
    {
      id: 4,
      title: "Document Submission",
      description:
        "Submit the required documents such as ID proof, mark sheets, and photographs for verification.",
      color: "text-[#2563eb]", // blue-600
    },
    {
      id: 5,
      title: "Take Admission",
      description:
        "Complete the admission process with scholarship (if eligible) and join Team Excellent.",
      color: "text-[#16a34a]", // green-600
    },
  ];

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

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-12 mt-30 px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#522871]">
          Admission Process
        </h2>
        <div className="w-40 h-1 bg-[#9333ea] mx-auto mt-2 rounded"></div>
        <p className="text-[#4b5563] mt-3 text-base sm:text-lg">
          Follow these simple steps to join{" "}
          <span className="text-[#b72e2f] font-semibold">Team Excellent</span>
        </p>
      </div>

      {/* Step by Step Grid */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="flex items-start gap-6 p-6 bg-[#f9fafb] rounded-2xl shadow hover:shadow-md transition"
          >
            <h2 className={`text-5xl font-extrabold ${step.color} shrink-0`}>
              {index + 1}
            </h2>
            <div>
              <h3 className="text-xl font-semibold text-[#1f2937]">
                {step.title}
              </h3>
              <p className="text-[#4b5563] mt-1 text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-center text-[#522871] mb-8 flex items-center justify-center gap-2">
          <HelpCircle className="w-8 h-8 text-[#9333ea]" /> Frequently Asked
          Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#d1d5db] rounded-lg p-4 cursor-pointer hover:shadow-md transition"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-[#1f2937]">
                  {faq.question}
                </h3>
                <span className="text-[#9333ea] font-bold text-xl">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <p className="text-[#4b5563] mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdmissionProcess;
