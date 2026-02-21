import React, { useState, useEffect } from 'react';
import { User, Phone, Mail, MapPin, MessageSquare, BookOpen, Send, CheckCircle2, X } from 'lucide-react';
import { submitEnrollment } from '../lib/enrollmentApi';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';

export default function EnrollmentForm({ isOpen, onClose, initialCourse }) {
    const [formData, setFormData] = useState({
        fullName: '',
        mobileNumber: '',
        email: '',
        course: '',
        city: '',
        query: ''
    });

    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // Reset state when modal opens
    useEffect(() => {
        if (isOpen) {
            setSubmitted(false);
            setLoading(false);
            setFormData(prev => ({
                ...prev,
                course: initialCourse || ''
            }));
        }
    }, [isOpen, initialCourse]);

    const courses = [
        'Class 6',
        'Class 7',
        'Class 8',
        'Class 9',
        'Class 10',
        'Class 11 Studying (for Engineering)',
        'Class 11 Studying (for Medical)',
        'Class 12 Studying (for Engineering)',
        'Class 12 Studying (for Medical)',
        'Class 12 Pass (for Engineering)',
        'Class 12 Pass (for Medical)'
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.fullName || !formData.mobileNumber || !formData.course || !formData.city) {
            toast.error('Please fill in all mandatory fields');
            return;
        }

        try {
            setLoading(true);
            await submitEnrollment(formData);
            toast.success('Enrollment submitted successfully!');
            setSubmitted(true);
            setFormData({
                fullName: '',
                mobileNumber: '',
                email: '',
                course: '',
                city: '',
                query: ''
            });
        } catch (error) {
            console.error('Enrollment error:', error);
            toast.error(error.message || 'Failed to submit enrollment. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative w-full max-w-2xl bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border border-purple-50 max-h-[95vh] md:max-h-[90vh] overflow-y-auto"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute right-4 top-4 md:right-6 md:top-6 text-white hover:rotate-90 transition-transform duration-300 z-10 p-1 bg-black/20 rounded-full md:bg-transparent"
                        >
                            <X size={24} className="md:w-7 md:h-7" />
                        </button>

                        {submitted ? (
                            <div className="p-6 md:p-12 text-center">
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-green-600" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-[#0B0B45] mb-4">Application Received!</h2>
                                <p className="text-gray-600 text-base md:text-lg mb-8">
                                    Thank you for choosing Team Excellent. Our academic counselors will contact you shortly to guide you through the next steps.
                                </p>
                                <button
                                    onClick={onClose}
                                    className="w-full md:w-auto px-8 py-3 bg-[#5B2D7C] text-white rounded-xl font-bold hover:bg-[#472164] transition-all shadow-lg"
                                >
                                    Done
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="bg-gradient-to-r from-[#5B2D7C] to-[#b72e2f] px-6 py-8 md:px-8 md:py-10 text-white">
                                    <h2 className="text-2xl md:text-4xl font-extrabold mb-1 md:mb-2 leading-tight">Enroll Now</h2>
                                    <p className="opacity-90 text-sm md:text-lg">Secure your future with Team Excellent's expert guidance.</p>
                                </div>

                                <form onSubmit={handleSubmit} className="p-5 md:p-10 space-y-4 md:space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                        {/* Full Name */}
                                        <div className="relative">
                                            <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                                                Full Name <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                                    <User size={16} className="md:w-[18px] md:h-[18px]" />
                                                </span>
                                                <input
                                                    type="text"
                                                    name="fullName"
                                                    value={formData.fullName}
                                                    onChange={handleChange}
                                                    placeholder="Enter your full name"
                                                    className="w-full pl-10 md:pl-11 pr-4 py-2.5 md:py-3 text-sm md:text-base bg-gray-50 border border-gray-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-[#5B2D7C] focus:border-transparent transition-all outline-none"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Mobile Number */}
                                        <div className="relative">
                                            <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                                                Mobile Number <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                                    <Phone size={16} className="md:w-[18px] md:h-[18px]" />
                                                </span>
                                                <input
                                                    type="tel"
                                                    name="mobileNumber"
                                                    value={formData.mobileNumber}
                                                    onChange={handleChange}
                                                    placeholder="Enter 10-digit number"
                                                    className="w-full pl-10 md:pl-11 pr-4 py-2.5 md:py-3 text-sm md:text-base bg-gray-50 border border-gray-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-[#5B2D7C] focus:border-transparent transition-all outline-none"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div className="relative">
                                            <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                                                Email Address (Optional)
                                            </label>
                                            <div className="relative">
                                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                                    <Mail size={16} className="md:w-[18px] md:h-[18px]" />
                                                </span>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="your.name@example.com"
                                                    className="w-full pl-10 md:pl-11 pr-4 py-2.5 md:py-3 text-sm md:text-base bg-gray-50 border border-gray-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-[#5B2D7C] focus:border-transparent transition-all outline-none"
                                                />
                                            </div>
                                        </div>

                                        {/* City */}
                                        <div className="relative">
                                            <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                                                City <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                                    <MapPin size={16} className="md:w-[18px] md:h-[18px]" />
                                                </span>
                                                <input
                                                    type="text"
                                                    name="city"
                                                    value={formData.city}
                                                    onChange={handleChange}
                                                    placeholder="e.g. Patna"
                                                    className="w-full pl-10 md:pl-11 pr-4 py-2.5 md:py-3 text-sm md:text-base bg-gray-50 border border-gray-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-[#5B2D7C] focus:border-transparent transition-all outline-none"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Course Selection */}
                                        <div className="relative col-span-full">
                                            <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                                                Choose Your Target Course <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                                    <BookOpen size={16} className="md:w-[18px] md:h-[18px]" />
                                                </span>
                                                <select
                                                    name="course"
                                                    value={formData.course}
                                                    onChange={handleChange}
                                                    className="w-full pl-10 md:pl-11 pr-10 py-2.5 md:py-3 text-sm md:text-base bg-gray-50 border border-gray-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-[#5B2D7C] focus:border-transparent transition-all outline-none appearance-none"
                                                    required
                                                >
                                                    <option value="" disabled>Select a course</option>
                                                    {courses.map((course, idx) => (
                                                        <option key={idx} value={course}>{course}</option>
                                                    ))}
                                                </select>
                                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Query */}
                                        <div className="relative col-span-full">
                                            <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                                                Describe Your Query (Optional)
                                            </label>
                                            <div className="relative">
                                                <span className="absolute left-4 top-4 text-gray-400">
                                                    <MessageSquare size={16} className="md:w-[18px] md:h-[18px]" />
                                                </span>
                                                <textarea
                                                    name="query"
                                                    value={formData.query}
                                                    onChange={handleChange}
                                                    placeholder="Enter any specific questions or details..."
                                                    rows={3}
                                                    className="w-full pl-10 md:pl-11 pr-4 py-2.5 md:py-3 text-sm md:text-base bg-gray-50 border border-gray-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-[#5B2D7C] focus:border-transparent transition-all outline-none resize-none"
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-2 md:pt-4">
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full bg-gradient-to-r from-[#5B2D7C] to-[#b72e2f] text-white py-3.5 md:py-4 rounded-xl font-bold text-base md:text-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group"
                                        >
                                            {loading ? (
                                                <div className="animate-spin rounded-full h-5 w-5 md:h-6 md:w-6 border-b-2 border-white"></div>
                                            ) : (
                                                <>
                                                    Enroll Now <Send size={18} className="md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
