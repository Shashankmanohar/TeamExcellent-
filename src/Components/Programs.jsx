import React, { useState } from "react";
import { Link } from "react-router-dom";
import EnrollmentForm from "./EnrollmentForm";
import Banner1 from "../assets/Banner_1.webp";
import Banner2 from "../assets/Banner_2.webp";
import Banner3 from "../assets/Banner_3.webp";
import Jee from "../assets/Jee.webp";
import Neet from "../assets/Neet.webp";
import Foundation from "../assets/Foundation.webp";

export default function Programs() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState("");

    const openModal = (course) => {
        setSelectedCourse(course);
        setIsModalOpen(true);
    };

    const programs = [
        {
            id: 1,
            title: "IIT JEE Entrance Preparation (Mains & Advance)",
            description:
                "Master Physics, Chemistry, and Mathematics with concept-based learning, regular tests, and expert guidance for IIT JEE success.",
            image: Jee,
            link: "/programs/jee",
            tag: "Offline",
            accentColor: "bg-[#522871]",
            hoverColor: "hover:bg-[#472164]",
            textColor: "group-hover:text-[#522871]",
            borderColor: "border-[#522871]",
            tagClass: "bg-[#522871]/10 text-[#522871] border-[#522871]/20",
            exploreClass: "border-[#522871]/30 text-[#522871] hover:bg-[#522871] hover:text-white hover:border-[#522871]",
        },
        {
            id: 2,
            title: "NEET UG Medical Entrance Program",
            description:
                "From NCERT mastery to advanced problem solving — a complete program designed to help you crack NEET with confidence.",
            image: Neet,
            link: "/programs/neet",
            tag: "Offline",
            accentColor: "bg-[#b72e2f]",
            hoverColor: "hover:bg-[#a02829]",
            textColor: "group-hover:text-[#b72e2f]",
            borderColor: "border-[#b72e2f]",
            tagClass: "bg-[#b72e2f]/10 text-[#b72e2f] border-[#b72e2f]/20",
            exploreClass: "border-[#b72e2f]/30 text-[#b72e2f] hover:bg-[#b72e2f] hover:text-white hover:border-[#b72e2f]",
        },
        {
            id: 3,
            title: "School Foundation Course (Class 6–10)",
            description:
                "Understand concepts clearly, practice smartly, and build strong basics in Science and Mathematics for better results in school and future exams.",
            image: Foundation,
            link: "/programs/class-6-to-10",
            tag: "Offline",
            accentColor: "bg-[#2563eb]",
            hoverColor: "hover:bg-[#1d4ed8]",
            textColor: "group-hover:text-[#2563eb]",
            borderColor: "border-[#2563eb]",
            tagClass: "bg-[#2563eb]/10 text-[#2563eb] border-[#2563eb]/20",
            exploreClass: "border-[#2563eb]/30 text-[#2563eb] hover:bg-[#2563eb] hover:text-white hover:border-[#2563eb]",
        },
    ];

    return (
        <section className="w-full bg-gray-50 py-16 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-[#522871]">
                        Our <span className="text-[#b72e2f]">Programs</span>
                    </h2>
                    <div className="w-24 h-1 bg-[#9333ea] mx-auto mt-4 rounded"></div>
                    <p className="text-gray-600 mt-4 text-lg">
                        Choose the right path for your academic success
                     </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {programs.map((program) => (
                        <div
                            key={program.id}
                            className={`group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full relative border-t-4 ${program.borderColor}`}
                        >
                            {/* Image Container */}
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={program.image}
                                    alt={program.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    loading="lazy"
                                    decoding="async"
                                />

                                {/* Offline Tag */}
                                <div className={`absolute top-4 right-4 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold shadow-sm border ${program.tagClass}`}>
                                    {program.tag}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className={`text-2xl font-bold text-[#1f2937] mb-4 transition-colors duration-300 ${program.textColor}`}>
                                    {program.title}
                                </h3>
                                <p className="text-gray-600 text-base leading-relaxed mb-8 flex-grow">
                                    {program.description}
                                </p>

                                {/* Buttons */}
                                <div className="grid grid-cols-2 gap-4">
                                    <button
                                        onClick={() => openModal(program.title)}
                                        className={`${program.accentColor} ${program.hoverColor} text-white text-center py-3 rounded-xl font-semibold transition-colors duration-300 shadow-sm`}
                                    >
                                        Enroll Now
                                    </button>
                                    <Link
                                        to={program.link}
                                        className={`bg-white border-2 text-center py-3 rounded-xl font-semibold transition-all duration-300 ${program.exploreClass}`}
                                    >
                                        Explore
                                    </Link>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            <EnrollmentForm
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                initialCourse={selectedCourse}
            />
        </section>
    );
}
