import React from "react";
import { Star, Award, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function TrustedSection() {
    const stats = [
        {
            label: "NEET Selections",
            value: "100+",
            color: "text-[#b72e2f]",
        },
        {
            label: "JEE Selections",
            value: "150+",
            color: "text-[#522871]",
        },
    ];

    return (
        <section className="w-full bg-white py-16 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* Left: Branding & Tagline */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#522871] mb-6 leading-tight">
                            A Name You Can <span className="text-[#b72e2f]">Trust</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 max-w-xl">
                            We take pride in our proven track record of excellence. At Team Excellent,
                            we don't just teach; we prepare you for a lifetime of success with
                            our dedicated approach and expert mentoring.
                        </p>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                            <div className="flex items-center gap-2 px-5 py-3 bg-green-50 rounded-full border border-green-200">
                                <CheckCircle2 className="w-6 h-6 text-green-600" />
                                <span className="font-semibold text-green-700">Complete Preparation</span>
                            </div>
                            <div className="flex items-center gap-2 px-5 py-3 bg-purple-50 rounded-full border border-purple-200">
                                <ShieldCheck className="w-6 h-6 text-[#522871]" />
                                <span className="font-semibold text-[#522871]">Trusted By Private School Association</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Statistics & Ratings */}
                    <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">

                        {/* Stats Cards */}
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 p-8 rounded-3xl text-center border-b-4 border-[#522871] hover:shadow-xl transition-all duration-300"
                            >
                                <div className={`text-5xl font-black ${stat.color} mb-2`}>{stat.value}</div>
                                <div className="text-xl font-bold text-gray-700">{stat.label}</div>
                            </div>
                        ))}

                        {/* Google Rating Card */}
                        <div className="sm:col-span-2 bg-[#522871] p-8 rounded-3xl text-white flex flex-col sm:flex-row items-center justify-between gap-6 hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-center gap-4">
                                <div className="bg-white p-3 rounded-full">
                                    <svg className="w-10 h-10" viewBox="0 0 24 24">
                                        <path
                                            fill="#4285F4"
                                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                        />
                                        <path
                                            fill="#34A853"
                                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                        />
                                        <path
                                            fill="#FBBC05"
                                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                        />
                                        <path
                                            fill="#EA4335"
                                            d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold">Google Reviews</div>
                                    <div className="flex items-center gap-1 mt-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="text-5xl font-black">4.9/5</div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
