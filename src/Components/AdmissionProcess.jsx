import React, { useState } from "react";
import { HelpCircle } from "lucide-react";

function AdmissionProcess() {
  const steps = [
    {
      id: 1,
      title: "Do Enquiry",
      description:
        "Reach out to Team Excellent for course details, fee structure, and guidance from our counselors.",
      color: "text-purple-600",
    },
    {
      id: 2,
      title: "Test at Institute",
      description:
        "An entrance test will be conducted at our institute to evaluate the student’s aptitude.",
      color: "text-red-600",
    },
    {
      id: 3,
      title: "Scholarship",
      description:
        "Based on performance in the entrance test, eligible students can avail scholarship benefits.",
      color: "text-yellow-500",
    },
    {
      id: 4,
      title: "Document Submission",
      description:
        "Submit the required documents such as ID proof, mark sheets, and photographs for verification.",
      color: "text-blue-600",
    },
    {
      id: 5,
      title: "Take Admission",
      description:
        "Complete the admission process with scholarship (if eligible) and join Team Excellent.",
      color: "text-green-600",
    },
  ];

  const faqs = [
    {
      question: "Is the entrance test mandatory for admission?",
      answer:
        "Yes, the entrance test is mandatory to evaluate the student’s aptitude and eligibility for scholarships.",
    },
    {
      question: "Can I apply for a scholarship after admission?",
      answer:
        "No, scholarships are only awarded based on performance in the entrance test conducted before admission.",
    },
    {
      question: "What documents are required during admission?",
      answer:
        "You need to submit ID proof, mark sheets, passport size photos, and other relevant certificates if applicable.",
    },
    {
      question: "When does the new batch start?",
      answer:
        "Batch start dates vary by course. Please contact the institute for the latest schedule.",
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
        <h1 className="text-4xl sm:text-5xl font-bold text-[#522871]">
          Admission Process
        </h1>
        <div className="w-40 h-1 bg-purple-600 mx-auto mt-2 rounded"></div>
        <p className="text-gray-600 mt-3 text-base sm:text-lg">
          Follow these simple steps to join{" "}
          <span className="text-[#b72e2f] font-semibold">Team Excellent</span>
        </p>
      </div>

      {/* Step by Step Grid */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="flex items-start gap-6 p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition"
          >
            <h2
              className={`text-5xl font-extrabold ${step.color} shrink-0`}
            >
              {index + 1}
            </h2>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                {step.title}
              </h3>
              <p className="text-gray-600 mt-1 text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-center text-[#522871] mb-8 flex items-center justify-center gap-2">
          <HelpCircle className="w-8 h-8 text-purple-600" /> Frequently Asked
          Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-4 cursor-pointer hover:shadow-md transition"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <span className="text-purple-600 font-bold text-xl">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdmissionProcess;
