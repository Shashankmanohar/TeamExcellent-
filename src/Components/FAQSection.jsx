import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { HelpCircle } from "lucide-react";

export default function FAQSection({ faqs, title = "Frequently Asked Questions" }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Dynamically generate the FAQPage schema
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <div className="max-w-3xl mx-auto mt-20 px-4">
      {/* Dynamic Helmet Schema Injection */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <h2 className="text-3xl font-bold text-center text-[#522871] mb-8 flex items-center justify-center gap-2">
        <HelpCircle className="w-8 h-8 text-[#9333ea]" /> {title}
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-slate-200/80 rounded-2xl p-5 bg-white cursor-pointer hover:shadow-md hover:border-purple-600/20 transition-all duration-300"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center gap-4">
              <h3 className="text-base sm:text-lg font-bold text-slate-850">
                {faq.question}
              </h3>
              <span className="text-[#9333ea] font-extrabold text-xl shrink-0 transition-transform duration-300 select-none">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <p className="text-slate-655 mt-3 text-sm sm:text-base leading-relaxed animate-fade-in">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
