import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Trophy, Search, ChevronRight, Award } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function Result() {
    return (
        <>
            <Helmet>
                <title>Examination Results | Team Excellent Career Institute</title>
                <meta name="description" content="Check your competitive exam results, mock tests, and performance reports at Team Excellent Career Institute Patna." />
            </Helmet>
            <Navbar />
            <main className="min-h-screen bg-gray-50 pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center p-3 bg-purple-100 rounded-2xl mb-4">
                            <Trophy className="w-8 h-8 text-[#5B2D7C]" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-[#0B0B45] mb-4">
                            Examination <span className="text-[#b72e2f]">Results</span>
                        </h1>
                        <div className="w-24 h-1 bg-[#9333ea] mx-auto rounded-full"></div>
                        <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
                            Track your academic progress and competitive exam performance. 
                            Results for both offline and online tests are uploaded here periodically.
                        </p>
                    </div>

                    {/* Result Search/Filter Section (Placeholder UI) */}
                    <div className="bg-white rounded-[2.5rem] shadow-xl p-8 md:p-12 border border-gray-100 max-w-4xl mx-auto mb-16">
                        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                            <div className="w-full md:flex-1">
                                <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Enter Enrollment ID</label>
                                <div className="relative">
                                    <input 
                                        type="text" 
                                        placeholder="e.g. TE-2024-001" 
                                        className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#5B2D7C] outline-none transition-all"
                                    />
                                    <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                </div>
                            </div>
                            <div className="w-full md:w-auto mt-7">
                                <button className="w-full md:w-auto px-10 py-4 bg-[#5B2D7C] text-white font-bold rounded-2xl hover:bg-[#3F1D5B] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                    Search Result
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Notice Board / Recent Results */}
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-bold text-[#0B0B45] flex items-center gap-2">
                                <Award className="w-6 h-6 text-[#b72e2f]" />
                                Recent Updates
                            </h2>
                        </div>
                        
                        <div className="space-y-4">
                            {[
                                { title: "NEET Monthly Mock Test - March 2024", date: "Released on 30th March", status: "Published" },
                                { title: "JEE Advance Practice Paper - Set A", date: "Released on 25th March", status: "Published" },
                                { title: "Foundation Class 10 Scholarship Test", date: "Released on 20th March", status: "Update soon" },
                            ].map((item, idx) => (
                                <div key={idx} className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex items-center justify-between cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-[#5B2D7C] group-hover:bg-[#5B2D7C] group-hover:text-white transition-colors">
                                            < ChevronRight className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-800 text-lg">{item.title}</h3>
                                            <p className="text-sm text-gray-500">{item.date}</p>
                                        </div>
                                    </div>
                                    <span className={`px-4 py-1 rounded-full text-xs font-bold ${item.status === 'Published' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                                        {item.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                        
                        <div className="mt-12 text-center p-8 bg-purple-50 rounded-3xl border border-purple-100">
                            <p className="text-[#5B2D7C] font-semibold italic">
                                "Success is not final, failure is not fatal: it is the courage to continue that counts."
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
