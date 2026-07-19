import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ExploreLinks from '../Components/ExploreLinks';
import { Trophy, Search, ChevronRight, Award, Download, Users, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function JeeResult() {
    const [searchTerm, setSearchTerm] = useState('');

    const stats = [
        { label: "Total Selections", value: "150+", desc: "IITs, NITs & IIITs", icon: <Users className="w-5 h-5 text-purple-600" /> },
        { label: "Highest Percentile", value: "99.87%", desc: "JEE Mains 2025", icon: <Star className="w-5 h-5 text-purple-600" /> },
        { label: "Top Rank Under 5000", value: "12 Students", desc: "JEE Advanced 2025", icon: <Award className="w-5 h-5 text-purple-600" /> }
    ];

    const rankers = [
        { name: "Amit Kumar", rank: "AIR 1420", metric: "99.87 %ile", category: "JEE Advanced", year: "2025", initial: "AK" },
        { name: "Riya Kumari", rank: "AIR 2150", metric: "99.65 %ile", category: "JEE Advanced", year: "2025", initial: "RK" },
        { name: "Vikash Singh", rank: "AIR 3410", metric: "99.42 %ile", category: "JEE Advanced", year: "2025", initial: "VS" },
        { name: "Anjali Gupta", rank: "AIR 5120", metric: "99.18 %ile", category: "JEE Mains", year: "2025", initial: "AG" }
    ];

    const updates = [
        { title: "JEE Advanced Part Test - II Results", date: "April 2026", type: "Result PDF", link: "#" },
        { title: "JEE Mains Full Syllabus Mock Test - 5", date: "March 2026", type: "Answer Key", link: "#" },
        { title: "JEE Advanced Practice Test - 12 (Paper 1 & 2)", date: "February 2026", type: "Result PDF", link: "#" },
        { title: "JEE Mains Phase-1 Selection Report Card", date: "January 2026", type: "Report Card", link: "#" }
    ];

    const filteredUpdates = updates.filter(update => 
        update.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Helmet>
                <title>IIT-JEE Results & Selection Tallies | Team Excellent Patna</title>
                <meta name="description" content="Check Team Excellent's outstanding IIT-JEE Main & Advanced selection ratios, top rankers, and downloadeable mock test marksheet lists in Patna." />
                <link rel="canonical" href="https://teamexcellentcareerinstitute.in/result/jee" />
            </Helmet>
            <Navbar />
            <main className="min-h-screen bg-gray-50 pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center p-3 bg-purple-100 rounded-2xl mb-4">
                            <Trophy className="w-8 h-8 text-[#5B2D7C]" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-[#0B0B45] mb-4">
                            IIT-JEE <span className="text-[#b72e2f]">Results</span>
                        </h1>
                        <div className="w-24 h-1 bg-[#9333ea] mx-auto rounded-full"></div>
                        <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
                            Excellence in action. Witness the milestones of our students who secured their dream seats in premier IITs and NITs.
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
                        {stats.map((stat, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl border border-purple-50 shadow-md hover:shadow-lg transition flex items-center gap-6">
                                <div className="p-4 bg-purple-50 rounded-2xl">
                                    {stat.icon}
                                </div>
                                <div>
                                    <div className="text-3xl font-black text-[#5B2D7C]">{stat.value}</div>
                                    <div className="font-bold text-gray-800 text-sm mt-0.5">{stat.label}</div>
                                    <div className="text-xs text-gray-500 mt-0.5">{stat.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Top Rankers Gallery */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-bold text-[#0B0B45] text-center mb-12 flex items-center justify-center gap-2">
                            Our JEE Stars (2025)
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {rankers.map((ranker, idx) => (
                                <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-md text-center hover:scale-[1.03] transition duration-300">
                                    <div className="w-20 h-20 bg-gradient-to-tr from-[#5B2D7C] to-[#9333ea] text-white font-extrabold text-2xl rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
                                        {ranker.initial}
                                    </div>
                                    <h3 className="font-extrabold text-gray-800 text-lg">{ranker.name}</h3>
                                    <div className="text-sm font-bold text-purple-600 mt-1">{ranker.category}</div>
                                    <div className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 bg-purple-50 rounded-full text-xs font-black text-[#5B2D7C]">
                                        {ranker.rank} • {ranker.metric}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Result Sheets & Updates */}
                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                            <h2 className="text-2xl font-bold text-[#0B0B45] flex items-center gap-2">
                                <Award className="w-6 h-6 text-[#b72e2f]" />
                                Exam Result PDF Sheets
                            </h2>
                            <div className="relative w-full md:w-80">
                                <input
                                    type="text"
                                    placeholder="Search test results..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-4 pr-10 py-2 text-sm bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-purple-600/20"
                                />
                                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                            </div>
                        </div>

                        <div className="space-y-4">
                            {filteredUpdates.length > 0 ? (
                                filteredUpdates.map((item, idx) => (
                                    <div key={idx} className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-[#5B2D7C] group-hover:bg-[#5B2D7C] group-hover:text-white transition-colors">
                                                <ChevronRight className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-800 text-base md:text-lg">{item.title}</h3>
                                                <p className="text-xs md:text-sm text-gray-500">{item.date}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="hidden sm:inline-block px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-bold">
                                                {item.type}
                                            </span>
                                            <button className="p-2.5 bg-gray-50 hover:bg-purple-600 hover:text-white rounded-xl text-gray-600 transition-colors shadow-inner" aria-label="Download Result">
                                                <Download className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-10 bg-white rounded-2xl border border-dashed text-gray-400">
                                    No matching test sheets found.
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </main>
            <ExploreLinks />
            <Footer />
        </>
    );
}
