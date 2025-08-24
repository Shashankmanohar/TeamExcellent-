import React from "react";
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
        <div className="w-40 h-1 bg-purple-600 mx-auto mt-2 rounded"></div>
      </div>

      {/* Introduction */}
      <div className="max-w-5xl mx-auto text-gray-700 leading-relaxed text-lg">
        <p className="mb-6">
          Team Excellent is a premier coaching institute committed to nurturing
          young minds and preparing them for competitive exams like{" "}
          <span className="font-semibold text-purple-700">JEE</span>,{" "}
          <span className="font-semibold text-purple-700">NEET</span>, and
          school-level foundations from{" "}
          <span className="font-semibold text-purple-700">Class 6 to 10</span>.
          With experienced faculty, modern facilities, and personalized mentoring,
          we ensure every student achieves academic excellence.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
        <div className="p-6 bg-purple-50 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">🎯 Our Mission</h2>
          <p className="text-gray-700">
            To provide a transformative learning experience that fosters intellectual
            curiosity and critical thinking, and enables our students to excel in
            competitive exams while becoming leaders in their chosen fields.
          </p>
        </div>
        <div className="p-6 bg-red-50 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-red-600 mb-4">🌟 Our Vision</h2>
          <p className="text-gray-700">
            We believe that every student has the potential to excel when given the
            right guidance, support, environment, and resources. Our expert faculty,
            cutting-edge teaching methods, and state-of-the-art infrastructure
            come together to create a holistic learning ecosystem that nurtures
            academic excellence, boosts confidence, and shapes the minds of
            tomorrow's leaders.
          </p>
        </div>
      </div>
      {/* Founder & Director Section */}
      <div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 gap-10 items-center">
        {/* Photo */}
        <div className="flex justify-center">
          <img
            src={DirectorPhoto}
            alt="Director"
            className="rounded-2xl shadow-lg w-[350px] h-auto"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold text-[#522871] mb-6">
            From the Desk of Founder & Director
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Welcome to Team Excellent where excellence is not just a goal but a
            tradition. As the director, I'm honoured to lead a team of dedicated
            educators who are passionate about shaping the future of aspiring
            Medical & Engineering Professionals.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            In today's competitive world, success in the IIT & Medical entrance
            requires more than just hard work – it demands strategic guidance,
            personalised attention, and unwavering commitment to excellence.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            I believe in our age-old traditional concept of{" "}
            <span className="font-semibold text-purple-700">"Guru-Shishya"</span>{" "}
            association where a guru shares his reserve of knowledge and
            experience with his pupils, and shishya strives hard to quench their
            thirst for knowledge to excel in this field of competition.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            I believe that with our coherent energy and efforts, we will
            definitely excel in this competitive world.
          </p>

          <div className="mt-6">
            <p className="font-bold text-lg text-red-600">Albert Newwel</p>
            <p className="text-gray-600">M.Tech, IIT-BHU, Varanasi (UP)</p>
            <p className="text-gray-600">12+ Years Experience</p>
          </div>
        </div>
      </div>
      {/* Achievements Section */}
      <div className="max-w-6xl mx-auto mt-16 text-center">
        <h2 className="text-3xl font-bold text-[#522871] mb-8">🏆 Achievements & Recognition</h2>
        <p className="text-gray-600 mb-6">
          We take pride in our contributions to education and skill development.
          Our work has been recognized and appreciated at various prestigious events.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <img
            src={about1}
            alt="Achievement 1"
            className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
          />
          <img
            src={about2}
            alt="Achievement 2"
            className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
          />
          <img
            src={about3}
            alt="Achievement 3"
            className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
          />
          <img
            src={about4}
            alt="Achievement 4"
            className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
          />
        </div>
      </div>
    </section>
  );
}
