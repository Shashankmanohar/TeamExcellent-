import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Briefcase, MapPin, Clock, IndianRupee, Send, Calendar } from 'lucide-react';
import { fetchCareerById } from '../lib/careerApi';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default function CareerDetail() {
    const { id } = useParams();
    const [career, setCareer] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadCareer = async () => {
            try {
                const data = await fetchCareerById(id);
                setCareer(data);
            } catch (error) {
                console.error("Failed to fetch career details", error);
            } finally {
                setLoading(false);
            }
        };

        loadCareer();
    }, [id]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if (loading) {
        return (
            <>
                <Navbar />
                <div className="min-h-screen bg-gray-50 flex justify-center items-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5B2D7C]"></div>
                </div>
                <Footer />
            </>
        );
    }

    if (!career) {
        return (
            <>
                <Navbar />
                <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-20 px-4">
                    <h2 className="text-3xl font-bold text-[#5B2D7C] mb-4">Job Not Found</h2>
                    <p className="text-gray-600 mb-8">The job posting you are looking for does not exist or has been removed.</p>
                    <Link to="/careers" className="px-6 py-3 bg-[#5B2D7C] text-white rounded-lg hover:bg-[#3F1D5B] transition-colors">
                        View All Careers
                    </Link>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Helmet>
                <title>{career.title} - Careers | Team Excellent</title>
                <meta name="description" content={`Apply for ${career.title} at Team Excellent.`} />
            </Helmet>
            <Navbar />
            
            <div className="min-h-screen bg-gray-50 pt-32 pb-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <Link to="/careers" className="inline-flex items-center gap-2 text-[#5B2D7C] hover:underline mb-8 font-medium">
                        <ArrowLeft size={20} />
                        Back to Careers
                    </Link>

                    <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 border border-gray-100">
                        {/* Job Header */}
                        <div className="border-b border-gray-100 pb-8 mb-8">
                            <h1 className="text-3xl md:text-4xl font-bold text-[#5B2D7C] mb-6">{career.title}</h1>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 text-gray-700">
                                    <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-[#5B2D7C]">
                                        <Briefcase size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-medium">Job Type</p>
                                        <p className="font-semibold">{career.jobType}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-gray-700">
                                    <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-[#5B2D7C]">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-medium">Location</p>
                                        <p className="font-semibold">{career.location}</p>
                                    </div>
                                </div>
                                {career.experience && (
                                    <div className="flex items-center gap-3 text-gray-700">
                                        <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-[#5B2D7C]">
                                            <Clock size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 font-medium">Experience</p>
                                            <p className="font-semibold">{career.experience}</p>
                                        </div>
                                    </div>
                                )}
                                {career.salary && career.salary !== 'Not Disclosed' && (
                                    <div className="flex items-center gap-3 text-gray-700">
                                        <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-[#5B2D7C]">
                                            <IndianRupee size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 font-medium">Salary</p>
                                            <p className="font-semibold">{career.salary}</p>
                                        </div>
                                    </div>
                                )}
                                <div className="flex items-center gap-3 text-gray-700">
                                    <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-[#5B2D7C]">
                                        <Calendar size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-medium">Date Posted</p>
                                        <p className="font-semibold">{formatDate(career.datePosted)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Job Description */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-[#5B2D7C] mb-4">Job Description</h2>
                            <div className="prose prose-purple max-w-none text-gray-700 whitespace-pre-wrap">
                                {career.description}
                            </div>
                        </div>

                        {/* Requirements */}
                        {career.requirements && (
                            <div className="mb-10">
                                <h2 className="text-2xl font-bold text-[#5B2D7C] mb-4">Requirements & Qualifications</h2>
                                <div className="prose prose-purple max-w-none text-gray-700 whitespace-pre-wrap">
                                    {career.requirements}
                                </div>
                            </div>
                        )}

                        {/* Apply Section */}
                        <div className="bg-purple-50 rounded-xl p-8 mt-12 text-center border border-purple-100">
                            <h3 className="text-xl font-bold text-[#5B2D7C] mb-2">Interested in this role?</h3>
                            <p className="text-gray-600 mb-6">
                                Send your updated resume to our email. Mention the job title in the subject line.
                            </p>
                            <a 
                                href={`mailto:teamexcellentcareerinstitute@gmail.com?subject=Application for ${career.title}`}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-[#5B2D7C] text-white rounded-lg hover:bg-[#3F1D5B] transition-colors font-bold text-lg"
                            >
                                <Send size={20} />
                                Apply Now via Email
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </>
    );
}
