import React from "react";
import { Link } from "react-router-dom";
import about1 from "../assets/About_1.webp";
import about2 from "../assets/About_2.webp";
import about3 from "../assets/About_3.webp";
import about4 from "../assets/About_4.webp";
import DirectorPhoto from "../assets/DirectorPhoto.jpg";

export default function AboutContent() {
  return (
    <section className="w-full h-auto bg-white mt-30 py-12 px-6">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#522871]">
          About <span className="text-[#b72e2f]">Team Excellent</span>
        </h1>
        <div className="w-40 h-1 bg-[#9333ea] mx-auto mt-2 rounded"></div>
      </div>

      {/* Introduction */}
      <div className="max-w-5xl mx-auto text-[#374151] leading-relaxed text-lg">
        <p className="mb-6">
          Team Excellent is a premier coaching institute in Patna committed to nurturing
          young minds and preparing them for competitive exams like{" "}
          <Link to="/jee-coaching-in-patna" className="font-semibold text-[#5B2D7C] hover:underline transition-colors">
            IIT-JEE Main & Advanced Coaching
          </Link>,{" "}
          <Link to="/neet-coaching-in-patna" className="font-semibold text-[#5B2D7C] hover:underline transition-colors">
            NEET UG Medical Preparation
          </Link>, and
          school-level foundations from{" "}
          <Link to="/programs/class-6-to-10" className="font-semibold text-[#5B2D7C] hover:underline transition-colors">
            Class 6 to 10 Foundation Courses
          </Link>.
          With experienced faculty, modern facilities, and personalized mentoring,
          we ensure every student achieves academic excellence. Explore our{" "}
          <Link to="/admission" className="font-semibold text-[#b72e2f] hover:underline transition-colors">
            Admission Procedure
          </Link>{" "}
          or estimate your exam score with our{" "}
          <Link to="/rank-predictor" className="font-semibold text-[#5B2D7C] hover:underline transition-colors">
            JEE & NEET Rank Predictor
          </Link>.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
        <div className="p-6 bg-[#faf5ff] rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-[#7e22ce] mb-4">🎯 Our Mission</h2>
          <p className="text-[#374151] leading-relaxed">
            To provide a transformative learning experience that fosters intellectual
            curiosity and critical thinking, enabling our students to excel in
            competitive exams like <Link to="/jee-coaching-in-patna" className="text-[#7e22ce] font-semibold hover:underline">JEE</Link> and <Link to="/neet-coaching-in-patna" className="text-[#7e22ce] font-semibold hover:underline">NEET</Link> while becoming leaders in their chosen fields. Learn more about our <Link to="/result" className="text-[#7e22ce] font-semibold hover:underline">Success Stories & Results</Link>.
          </p>
        </div>
        <div className="p-6 bg-[#fef2f2] rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-[#dc2626] mb-4">🌟 Our Vision</h2>
          <p className="text-[#374151] leading-relaxed">
            We believe that every student has the potential to excel when given the
            right guidance, support, environment, and resources. Our expert faculty,
            cutting-edge teaching methods, and state-of-the-art infrastructure
            come together to create a holistic learning ecosystem. Students can track performance on our <Link to="/student-portal" className="text-[#dc2626] font-semibold hover:underline">Student Portal</Link> or reach out via <Link to="/contact" className="text-[#dc2626] font-semibold hover:underline">Contact Us</Link>.
          </p>
        </div>
      </div>

      {/* Founder & Director Section */}
      <div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 gap-10 items-center">
        {/* Photo */}
        <div className="flex justify-center">
          <img
            src={DirectorPhoto}
            alt="Albert Newwel - Founder and Director of Team Excellent Career Institute"
            className="rounded-2xl shadow-lg w-[350px] h-auto"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold text-[#522871] mb-6">
            From the Desk of Founder & Director
          </h2>
          <p className="text-[#374151] mb-4 leading-relaxed">
            Welcome to Team Excellent where excellence is not just a goal but a
            tradition. As the director, I'm honoured to lead a team of dedicated
            educators who are passionate about shaping the future of aspiring
            Medical & Engineering Professionals in Patna.
          </p>
          <p className="text-[#374151] mb-4 leading-relaxed">
            In today's competitive world, success in the{" "}
            <Link to="/jee-coaching-in-patna" className="font-semibold text-[#5B2D7C] hover:underline">
              IIT-JEE Entrance Exam
            </Link>{" "}
            &{" "}
            <Link to="/neet-coaching-in-patna" className="font-semibold text-[#5B2D7C] hover:underline">
              NEET Medical Entrance
            </Link>{" "}
            requires more than just hard work – it demands strategic guidance,
            personalised attention, and unwavering commitment to excellence.
          </p>
          <p className="text-[#374151] mb-4 leading-relaxed">
            I believe in our age-old traditional concept of{" "}
            <span className="font-semibold text-[#7e22ce]">"Guru-Shishya"</span>{" "}
            association where a guru shares his reserve of knowledge and
            experience with his pupils, and shishya strives hard to quench their
            thirst for knowledge to excel in this field of competition.
          </p>
          <p className="text-[#374151] mb-6 leading-relaxed">
            Interested in taking admission? Check out our{" "}
            <Link to="/admission" className="font-semibold text-[#b72e2f] hover:underline">
              Step-by-Step Admission Guidelines
            </Link>{" "}
            or use our <Link to="/college-predictor" className="font-semibold text-[#5B2D7C] hover:underline">JEE College Predictor</Link> to explore potential college admissions.
          </p>

          <div className="mt-6">
            <p className="font-bold text-lg text-[#dc2626]">Albert Newwel</p>
            <p className="text-[#4b5563]">M.Tech, IIT-BHU, Varanasi (UP)</p>
            <p className="text-[#4b5563]">12+ Years Experience</p>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="max-w-6xl mx-auto mt-16 text-center">
        <h2 className="text-3xl font-bold text-[#522871] mb-8">🏆 Achievements & Recognition</h2>
        <p className="text-[#4b5563] mb-6">
          We take pride in our contributions to education and skill development in Bihar.
          Our work has been recognized and appreciated at various prestigious events. Read more in our{" "}
          <Link to="/blogs" className="font-semibold text-[#5B2D7C] hover:underline">
            Latest Blogs & Articles
          </Link>{" "}
          or see our <Link to="/result" className="font-semibold text-[#5B2D7C] hover:underline">Toppers List</Link>.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <img
            src={about1}
            alt="Team Excellent Career Institute classroom and facilities achievement recognition"
            className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
            loading="lazy"
            decoding="async"
          />
          <img
            src={about2}
            alt="Team Excellent student success and award ceremony recognition"
            className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
            loading="lazy"
            decoding="async"
          />
          <img
            src={about3}
            alt="Team Excellent Career Institute teaching excellence and campus life"
            className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
            loading="lazy"
            decoding="async"
          />
          <img
            src={about4}
            alt="Team Excellent award for top coaching institute in Patna"
            className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      {/* Core Academic Pillars */}
      <div className="max-w-6xl mx-auto mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#522871]">
            Our 4 Core <span className="text-[#b72e2f]">Academic Pillars</span>
          </h2>
          <div className="w-24 h-1 bg-[#9333ea] mx-auto mt-2 rounded"></div>
          <p className="text-gray-600 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
            The foundation of our consistent rank-producing ecosystem in Patna
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#fcfbfe] border border-purple-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-[#5B2D7C] text-2xl font-bold mb-4">
              01
            </div>
            <h3 className="text-xl font-bold text-[#0B0B45] mb-2">Expert Faculty Team</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Educators from IITs, NITs, and premier medical colleges bring years of competitive exam mentoring experience to every classroom session.
            </p>
          </div>

          <div className="bg-[#fcfbfe] border border-red-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-[#b72e2f] text-2xl font-bold mb-4">
              02
            </div>
            <h3 className="text-xl font-bold text-[#0B0B45] mb-2">Structured Study Material</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Curated modules, Daily Practice Problems (DPPs), NCERT line-by-line notes, and previous 15-year chapterwise question banks.
            </p>
          </div>

          <div className="bg-[#fcfbfe] border border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 text-2xl font-bold mb-4">
              03
            </div>
            <h3 className="text-xl font-bold text-[#0B0B45] mb-2">CBT Mock Test Analytics</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Computer-based test simulation mirroring real NTA exam interfaces with instant negative marking breakdown on our{" "}
              <Link to="/student-portal" className="text-blue-600 font-bold hover:underline">Student Portal</Link>.
            </p>
          </div>

          <div className="bg-[#fcfbfe] border border-emerald-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 text-2xl font-bold mb-4">
              04
            </div>
            <h3 className="text-xl font-bold text-[#0B0B45] mb-2">Personal Mentorship</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              One-on-one doubt clearing, strategy formulation, motivational counseling, and direct parent-teacher updates for continuous growth.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Navigation / Explore Section */}
      <div className="max-w-5xl mx-auto mt-16 p-8 bg-purple-50 rounded-3xl border border-purple-100 text-center shadow-sm">
        <h3 className="text-2xl font-bold text-[#522871] mb-3">
          Explore Our Academic Programs & Resources
        </h3>
        <p className="text-gray-700 text-base leading-relaxed max-w-3xl mx-auto">
          Start your preparation journey with Team Excellent Patna. Check our{" "}
          <Link to="/jee-coaching-in-patna" className="font-bold text-[#5B2D7C] hover:underline">
            JEE Preparation Batches
          </Link>,{" "}
          <Link to="/neet-coaching-in-patna" className="font-bold text-[#5B2D7C] hover:underline">
            NEET Medical Courses
          </Link>, and{" "}
          <Link to="/programs/class-6-to-10" className="font-bold text-[#5B2D7C] hover:underline">
            Class 6–10 Foundation
          </Link>. View step-by-step{" "}
          <Link to="/admission" className="font-bold text-[#b72e2f] hover:underline">
            Admission Guidelines
          </Link>, calculate expected ranks on our{" "}
          <Link to="/rank-predictor" className="font-bold text-[#5B2D7C] hover:underline">
            Rank Predictor
          </Link>, check{" "}
          <Link to="/college-predictor" className="font-bold text-[#5B2D7C] hover:underline">
            College Eligibility
          </Link>, or visit the{" "}
          <Link to="/contact" className="font-bold text-[#b72e2f] hover:underline">
            Contact Us Page
          </Link>.
        </p>
      </div>
    </section>
  );
}
