import React from "react";

export default function Strip() {
  return (
    <div className="w-full bg-purple-700 text-white overflow-hidden">
      <div className="flex whitespace-nowrap py-4 animate-marquee">
        {/* 1st Set */}
        <span className="mx-12 text-3xl font-semibold">
          🚀 Admissions Open – Enroll Now!
        </span>
        <span className="mx-12 text-3xl font-semibold">
          🎓 Scholarship Test Available
        </span>

        <span className="mx-12 text-3xl font-semibold">
          🏠 Hostel & Mentoring Support
        </span>

        {/* 2nd Set (Duplicate for continuous effect) */}
        <span className="mx-12 text-3xl font-semibold">
          🚀 Admissions Open – Enroll Now!
        </span>
        <span className="mx-12 text-3xl font-semibold">
          🎓 Scholarship Test Available
        </span>

        <span className="mx-12 text-3xl font-semibold">
          🏠 Hostel & Mentoring Support
        </span>
      </div>
    </div>
  );
}
