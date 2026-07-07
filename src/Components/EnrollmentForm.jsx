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

    const getFilteredCourses = () => {
        if (!initialCourse) return courses;
        const lower = initialCourse.toLowerCase();
        if (lower.includes("jee") || lower.includes("engineering")) {
            return [
                'Class 11 Studying (for Engineering)',
                'Class 12 Studying (for Engineering)',
                'Class 12 Pass (for Engineering)'
            ];
        } else if (lower.includes("neet") || lower.includes("medical")) {
            return [
                'Class 11 Studying (for Medical)',
                'Class 12 Studying (for Medical)',
                'Class 12 Pass (for Medical)'
            ];
        } else if (lower.includes("foundation") || lower.includes("class 6") || lower.includes("school")) {
            return [
                'Class 6',
                'Class 7',
                'Class 8',
                'Class 9',
                'Class 10'
            ];
        }
        return courses;
    };

    const filteredCourses = getFilteredCourses();

    const getThemeConfig = () => {
        if (!initialCourse) {
            return {
                gradient: "from-[#5B2D7C] to-[#b72e2f]",
                focusRing: "focus:ring-[#5B2D7C]/20",
                focusBorder: "focus:border-[#5B2D7C]",
                buttonBg: "from-[#5B2D7C] to-[#b72e2f]",
                doneBtnBg: "bg-[#5B2D7C] hover:bg-[#472164]",
                iconColor: "text-[#5B2D7C]",
                badgeColor: "bg-[#5B2D7C]/10 text-[#5B2D7C]"
            };
        }
        const lower = initialCourse.toLowerCase();
        if (lower.includes("jee") || lower.includes("engineering")) {
            return {
                gradient: "from-[#522871] to-[#6d3a91]",
                focusRing: "focus:ring-[#522871]/20",
                focusBorder: "focus:border-[#522871]",
                buttonBg: "from-[#522871] to-[#6d3a91]",
                doneBtnBg: "bg-[#522871] hover:bg-[#472164]",
                iconColor: "text-[#522871]",
                badgeColor: "bg-[#522871]/10 text-[#522871]"
            };
        } else if (lower.includes("neet") || lower.includes("medical")) {
            return {
                gradient: "from-[#b72e2f] to-[#d34546]",
                focusRing: "focus:ring-[#b72e2f]/20",
                focusBorder: "focus:border-[#b72e2f]",
                buttonBg: "from-[#b72e2f] to-[#d34546]",
                doneBtnBg: "bg-[#b72e2f] hover:bg-[#a02829]",
                iconColor: "text-[#b72e2f]",
                badgeColor: "bg-[#b72e2f]/10 text-[#b72e2f]"
            };
        } else if (lower.includes("foundation") || lower.includes("class 6") || lower.includes("school")) {
            return {
                gradient: "from-[#2563eb] to-[#3b82f6]",
                focusRing: "focus:ring-[#2563eb]/20",
                focusBorder: "focus:border-[#2563eb]",
                buttonBg: "from-[#2563eb] to-[#3b82f6]",
                doneBtnBg: "bg-[#2563eb] hover:bg-[#1d4ed8]",
                iconColor: "text-[#2563eb]",
                badgeColor: "bg-[#2563eb]/10 text-[#2563eb]"
            };
        }
        return {
            gradient: "from-[#5B2D7C] to-[#b72e2f]",
            focusRing: "focus:ring-[#5B2D7C]/20",
            focusBorder: "focus:border-[#5B2D7C]",
            buttonBg: "from-[#5B2D7C] to-[#b72e2f]",
            doneBtnBg: "bg-[#5B2D7C] hover:bg-[#472164]",
            iconColor: "text-[#5B2D7C]",
            badgeColor: "bg-[#5B2D7C]/10 text-[#5B2D7C]"
        };
    };

    const theme = getThemeConfig();

    // Reset state when modal opens
    useEffect(() => {
        if (isOpen) {
            setSubmitted(false);
            setLoading(false);
            setFormData(prev => ({
                ...prev,
                course: ''
            }));
        }
    }, [isOpen, initialCourse]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation Regex
        const nameRegex = /^[a-zA-Z\s]{3,50}$/;
        const mobileRegex = /^\d{10}$/;
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const cityRegex = /^[a-zA-Z\s]{2,50}$/;

        if (!formData.fullName || !formData.mobileNumber || !formData.course || !formData.city) {
            toast.error('Please fill in all mandatory fields');
            return;
        }

        if (!nameRegex.test(formData.fullName)) {
            toast.error('Name should only contain letters and be 3-50 chars long');
            return;
        }

        if (!mobileRegex.test(formData.mobileNumber)) {
            toast.error('Please enter a valid 10-digit mobile number');
            return;
        }

        if (formData.email && !emailRegex.test(formData.email)) {
            toast.error('Please enter a valid email address');
            return;
        }

        if (!cityRegex.test(formData.city)) {
            toast.error('Please enter a valid city name');
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
                        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-purple-50/30 max-h-[95vh] md:max-h-[90vh] overflow-y-auto"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute right-4 top-4 md:right-6 md:top-6 text-white hover:scale-110 active:scale-95 transition-all duration-300 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full"
                        >
                            <X size={20} className="md:w-6 md:h-6" />
                        </button>

                        {submitted ? (
                            <div className="p-8 md:p-14 text-center">
                                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-100">
                                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B0B45] mb-4">Application Received!</h2>
                                <p className="text-gray-500 text-base md:text-lg mb-8 leading-relaxed max-w-md mx-auto">
                                    Thank you for choosing Team Excellent. Our academic counselors will contact you shortly to guide you through the next steps.
                                </p>
                                <button
                                    onClick={onClose}
                                    className={`w-full md:w-auto px-10 py-3.5 ${theme.doneBtnBg} text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-xl active:scale-[0.98] duration-300`}
                                >
                                    Done
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className={`bg-gradient-to-r ${theme.gradient} px-6 py-8 md:px-10 md:py-12 text-white relative overflow-hidden`}>
                                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 rounded-full bg-white/10 blur-xl pointer-events-none" />
                                    <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-32 h-32 rounded-full bg-black/10 blur-lg pointer-events-none" />
                                    
                                    <div className="relative z-10">
                                        <h2 className="text-2xl md:text-4xl font-extrabold mb-2 leading-tight tracking-tight">Enroll Now</h2>
                                        <p className="opacity-90 text-sm md:text-base max-w-md">Secure your future with Team Excellent's expert guidance.</p>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} className="p-6 md:p-10 space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Full Name */}
                                        <div className="relative">
                                            <label className="block text-xs md:text-sm font-bold text-gray-600 mb-2">
                                                Full Name <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <span className={`absolute left-4 top-1/2 -translate-y-1/2 ${theme.iconColor}`}>
                                                    <User size={18} />
                                                </span>
                                                <input
                                                    type="text"
                                                    name="fullName"
                                                    value={formData.fullName}
                                                    onChange={handleChange}
                                                    placeholder="Enter your full name"
                                                    className={`w-full pl-11 pr-4 py-3 text-sm md:text-base bg-slate-50/50 hover:bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-4 ${theme.focusRing} ${theme.focusBorder} transition-all duration-300 outline-none`}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Mobile Number */}
                                        <div className="relative">
                                            <label className="block text-xs md:text-sm font-bold text-gray-600 mb-2">
                                                Mobile Number <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <span className={`absolute left-4 top-1/2 -translate-y-1/2 ${theme.iconColor}`}>
                                                    <Phone size={18} />
                                                </span>
                                                <input
                                                    type="tel"
                                                    name="mobileNumber"
                                                    value={formData.mobileNumber}
                                                    onChange={handleChange}
                                                    placeholder="Enter 10-digit number"
                                                    className={`w-full pl-11 pr-4 py-3 text-sm md:text-base bg-slate-50/50 hover:bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-4 ${theme.focusRing} ${theme.focusBorder} transition-all duration-300 outline-none`}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div className="relative">
                                            <label className="block text-xs md:text-sm font-bold text-gray-600 mb-2">
                                                Email Address (Optional)
                                            </label>
                                            <div className="relative">
                                                <span className={`absolute left-4 top-1/2 -translate-y-1/2 ${theme.iconColor}`}>
                                                    <Mail size={18} />
                                                </span>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="your.name@example.com"
                                                    className={`w-full pl-11 pr-4 py-3 text-sm md:text-base bg-slate-50/50 hover:bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-4 ${theme.focusRing} ${theme.focusBorder} transition-all duration-300 outline-none`}
                                                />
                                            </div>
                                        </div>

                                        {/* City */}
                                        <div className="relative">
                                            <label className="block text-xs md:text-sm font-bold text-gray-600 mb-2">
                                                City <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <span className={`absolute left-4 top-1/2 -translate-y-1/2 ${theme.iconColor}`}>
                                                    <MapPin size={18} />
                                                </span>
                                                <input
                                                    type="text"
                                                    name="city"
                                                    value={formData.city}
                                                    onChange={handleChange}
                                                    placeholder="e.g. Patna"
                                                    className={`w-full pl-11 pr-4 py-3 text-sm md:text-base bg-slate-50/50 hover:bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-4 ${theme.focusRing} ${theme.focusBorder} transition-all duration-300 outline-none`}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Course Selection */}
                                        <div className="relative col-span-full">
                                            <label className="block text-xs md:text-sm font-bold text-gray-600 mb-2">
                                                Choose Your Target Course <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <span className={`absolute left-4 top-1/2 -translate-y-1/2 ${theme.iconColor}`}>
                                                    <BookOpen size={18} />
                                                </span>
                                                <select
                                                    name="course"
                                                    value={formData.course}
                                                    onChange={handleChange}
                                                    className={`w-full pl-11 pr-10 py-3 text-sm md:text-base bg-slate-50/50 hover:bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-4 ${theme.focusRing} ${theme.focusBorder} transition-all duration-300 outline-none appearance-none cursor-pointer`}
                                                    required
                                                >
                                                    <option value="" disabled>Select a course</option>
                                                    {filteredCourses.map((course, idx) => (
                                                        <option key={idx} value={course}>{course}</option>
                                                    ))}
                                                </select>
                                                <div className={`absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none ${theme.iconColor}`}>
                                                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Query */}
                                        <div className="relative col-span-full">
                                            <label className="block text-xs md:text-sm font-bold text-gray-600 mb-2">
                                                Describe Your Query (Optional)
                                            </label>
                                            <div className="relative">
                                                <span className={`absolute left-4 top-4 ${theme.iconColor}`}>
                                                    <MessageSquare size={18} />
                                                </span>
                                                <textarea
                                                    name="query"
                                                    value={formData.query}
                                                    onChange={handleChange}
                                                    placeholder="Enter any specific questions or details..."
                                                    rows={3}
                                                    className={`w-full pl-11 pr-4 py-3 text-sm md:text-base bg-slate-50/50 hover:bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-4 ${theme.focusRing} ${theme.focusBorder} transition-all duration-300 outline-none resize-none`}
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className={`w-full bg-gradient-to-r ${theme.buttonBg} text-white py-4 rounded-xl font-bold text-base md:text-lg shadow-lg hover:shadow-xl active:scale-[0.99] transform transition-all duration-300 flex items-center justify-center gap-2 group`}
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
