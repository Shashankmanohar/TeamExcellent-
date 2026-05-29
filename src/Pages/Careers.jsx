import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock, IndianRupee, ChevronRight } from 'lucide-react';
import { fetchActiveCareers } from '../lib/careerApi';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default function Careers() {
    const [careers, setCareers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadCareers = async () => {
            try {
                const data = await fetchActiveCareers();
                setCareers(data);
            } catch (error) {
                console.error("Failed to fetch careers", error);
            } finally {
                setLoading(false);
            }
        };

        loadCareers();
    }, []);

    return (
        <>
            <Helmet>
                <title>Careers | Team Excellent</title>
                <meta name="description" content="Join Team Excellent and build your career with us. Explore our current job openings and opportunities." />
            </Helmet>
            <Navbar />
            
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-[#5B2D7C] to-[#8424bd] text-white pt-32 pb-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Mission to Shape Futures</h1>
                    <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
                        At Team Excellent, we are always looking for passionate educators and professionals who want to make a difference in students' lives.
                    </p>
                </div>
            </div>

            <div className="min-h-screen bg-gray-50 py-16 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-[#5B2D7C] mb-4">Current Openings</h2>
                        <div className="w-20 h-1 bg-red-600"></div>
                    </div>

                    {loading ? (
                        <div className="flex justify-center items-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5B2D7C]"></div>
                        </div>
                    ) : careers.length === 0 ? (
                        <div className="bg-white rounded-xl shadow-md p-12 text-center border border-gray-100">
                            <Briefcase size={48} className="mx-auto mb-4 text-gray-400" />
                            <h3 className="text-xl font-bold text-gray-800 mb-2">No Open Positions Currently</h3>
                            <p className="text-gray-600">
                                We don't have any open positions at the moment. However, you can always send your resume to our email, and we'll keep it on file for future opportunities.
                            </p>
                        </div>
                    ) : (
                        <div className="grid gap-6">
                            {careers.map((career) => (
                                <Link 
                                    key={career._id} 
                                    to={`/careers/${career._id}`}
                                    className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6 md:p-8 group"
                                >
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-[#5B2D7C] mb-2 group-hover:text-red-600 transition-colors">
                                                {career.title}
                                            </h3>
                                            <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                                                <div className="flex items-center gap-1">
                                                    <Briefcase size={16} className="text-[#5B2D7C]" />
                                                    <span className="text-sm font-medium">{career.jobType}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <MapPin size={16} className="text-[#5B2D7C]" />
                                                    <span className="text-sm font-medium">{career.location}</span>
                                                </div>
                                                {career.experience && (
                                                    <div className="flex items-center gap-1">
                                                        <Clock size={16} className="text-[#5B2D7C]" />
                                                        <span className="text-sm font-medium">{career.experience}</span>
                                                    </div>
                                                )}
                                                {career.salary && career.salary !== 'Not Disclosed' && (
                                                    <div className="flex items-center gap-1">
                                                        <IndianRupee size={16} className="text-[#5B2D7C]" />
                                                        <span className="text-sm font-medium">{career.salary}</span>
                                                    </div>
                                                )}
                                            </div>
                                            <p className="text-gray-600 line-clamp-2">
                                                {career.description}
                                            </p>
                                        </div>
                                        <div className="shrink-0">
                                            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-50 text-[#5B2D7C] group-hover:bg-[#5B2D7C] group-hover:text-white transition-colors">
                                                <ChevronRight size={24} />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}
