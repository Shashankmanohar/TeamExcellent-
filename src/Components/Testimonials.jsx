import React, { useState, useRef, useEffect } from "react";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Arvind Yadav",
        review: "Very good couching, all teachers are very good n cooperative with students and give their best to understand the chapter, concept to the students.",
        rating: 5,
        date: "a day ago",
    },
    {
        name: "Aniket Kumar",
        review: "The instructors are highly knowledgeable and engaging, creating an environment conducive to learning. The well-structured curriculum and regular assessments ensure thorough understanding of the subjects. I highly recommend this coaching institute for anyone seeking quality education.",
        rating: 5,
        date: "2 years ago",
    },
    {
        name: "Pc Volt",
        review: "The facilities here is most unique and best, thing is student can come and study any time 24*7 with all facilities of doubts. Facilities:- ac + water cooler+ water heater+ library+ study room, etc. itz best couching in my opinion.",
        rating: 5,
        date: "a year ago",
    },
    {
        name: "Sambhu Kr",
        review: "Excellent JEE coaching in Patna. I prefer to take admission in this coaching in patna. The atmosphere is very positive for competitive preparation.",
        rating: 5,
        date: "2 months ago",
    },
    {
        name: "Aadarsh Kumar",
        review: "I visited here in December 2025 the campus is well and clean, teachers are well experienced, best coaching for Jee, neet in bajar samiti Patna.",
        rating: 5,
        date: "3 weeks ago",
    },
];

export default function Testimonials() {
    const [isPaused, setIsPaused] = useState(false);
    const stopTimeoutRef = useRef(null);

    // Duplicate the list for seamless infinite scroll
    const duplicatedTestimonials = [...testimonials, ...testimonials];

    const handleMouseMove = () => {
        // If moving, resume scrolling
        setIsPaused(false);

        // Reset the timer to pause after 100ms of no movement
        if (stopTimeoutRef.current) clearTimeout(stopTimeoutRef.current);

        stopTimeoutRef.current = setTimeout(() => {
            setIsPaused(true);
        }, 150); // Small delay to detect "stillness"
    };

    const handleMouseLeave = () => {
        if (stopTimeoutRef.current) clearTimeout(stopTimeoutRef.current);
        setIsPaused(false);
    };

    useEffect(() => {
        return () => {
            if (stopTimeoutRef.current) clearTimeout(stopTimeoutRef.current);
        };
    }, []);

    return (
        <section className="w-full bg-white py-20 overflow-hidden">
            <style>
                {`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
                `}
            </style>
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-[#522871] text-center mb-4">
                    What Our <span className="text-[#b72e2f]">Students Say</span>
                </h2>
                <div className="w-24 h-1.5 bg-[#9333ea] mx-auto rounded-full"></div>
            </div>

            <div className="relative flex overflow-hidden">
                {/* Infinite Scroll Container */}
                <div
                    className="flex gap-6 py-4 px-3 animate-marquee"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        width: "fit-content",
                        animationPlayState: isPaused ? "paused" : "running"
                    }}
                >
                    {duplicatedTestimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="w-[350px] sm:w-[450px] flex-shrink-0 bg-gray-50 p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-[#522871] text-white rounded-full flex items-center justify-center font-bold text-xl shadow-inner group-hover:scale-110 transition-transform duration-300">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 text-lg">{testimonial.name}</h3>
                                    <div className="flex items-center gap-1">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                        <span className="text-xs text-gray-400 ml-2">{testimonial.date}</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed italic">
                                "{testimonial.review}"
                            </p>
                        </div>
                    ))}
                </div>

                {/* Gradient Overlays for smooth edges */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
            </div>
        </section>
    );
}
