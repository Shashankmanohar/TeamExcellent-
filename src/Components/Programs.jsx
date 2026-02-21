import React, { useState } from "react";
import { Link } from "react-router-dom";
import EnrollmentForm from "./EnrollmentForm";
import Banner1 from "../assets/Banner_1.webp";
import Banner2 from "../assets/Banner_2.webp";
import Banner3 from "../assets/Banner_3.webp";

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
            image: Banner1,
            link: "/programs/jee",
            tag: "Offline",
            accentColor: "bg-[#522871]",
            hoverColor: "hover:bg-[#472164]",
        },
        {
            id: 2,
            title: "NEET UG Medical Entrance Program",
            description:
                "From NCERT mastery to advanced problem solving — a complete program designed to help you crack NEET with confidence.",
            image: Banner2,
            link: "/programs/neet",
            tag: "Offline",
            accentColor: "bg-[#b72e2f]",
            hoverColor: "hover:bg-[#a02829]",
        },
        {
            id: 3,
            title: "School Foundation Course (Class 6–10)",
            description:
                "Understand concepts clearly, practice smartly, and build strong basics in Science and Mathematics for better results in school and future exams.",
            image: Banner3,
            link: "/programs/class-6-to-10",
            tag: "Offline",
            accentColor: "bg-blue-600",
            hoverColor: "hover:bg-blue-700",
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
                            className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full relative"
                        >
                            {/* Image Container */}
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={program.image}
                                    alt={program.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />

                                {/* Offline Tag */}
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-1.5 rounded-full text-sm font-bold shadow-sm border border-gray-100">
                                    {program.tag}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold text-[#1f2937] mb-4">
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
                                        className="bg-white border-2 border-gray-200 text-gray-700 text-center py-3 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all duration-300"
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
