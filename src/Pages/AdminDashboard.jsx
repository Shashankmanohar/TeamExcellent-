import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Users, FileText, MessageSquare, Briefcase, Calendar, MapPin, ArrowRight, Clock, Plus, ExternalLink, PhoneCall } from 'lucide-react';
import { fetchEnrollments } from '../lib/enrollmentApi';
import { fetchAllBlogs } from '../lib/blogApi';
import { fetchAllReviewsAdmin } from '../lib/reviewApi';
import { fetchAllCareers } from '../lib/careerApi';
import { fetchCounselingRequests } from '../lib/counselingApi';
import AdminNav from '../Components/AdminNav';
import toast from 'react-hot-toast';

export default function AdminDashboard() {
    const navigate = useNavigate();
    const [stats, setStats] = useState({
        leadsTotal: 0,
        leadsToday: 0,
        blogsTotal: 0,
        reviewsTotal: 0,
        reviewsPending: 0,
        careersTotal: 0,
        counselingTotal: 0,
        counselingPending: 0,
    });
    const [recentLeads, setRecentLeads] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            toast.error('Please login as admin');
            navigate('/admin-login');
            return;
        }
        loadDashboardData();
    }, []);

    const loadDashboardData = async () => {
        try {
            setLoading(true);
            
            // Fetch everything in parallel
            const [leadsData, blogsData, reviewsData, careersData] = await Promise.all([
                fetchEnrollments().catch(() => ({ enrollments: [] })),
                fetchAllBlogs(1, 100).catch(() => ({ blogs: [], totalBlogs: 0 })),
                fetchAllReviewsAdmin().catch(() => ({ success: false, reviews: [] })),
                fetchAllCareers().catch(() => ([])),
                fetchCounselingRequests().catch(() => ({ success: false, data: [] }))
            ]);

            const leads = leadsData.enrollments || [];
            const blogsCount = blogsData.totalBlogs || (blogsData.blogs ? blogsData.blogs.length : 0);
            const reviews = reviewsData.reviews || [];
            const pendingReviews = reviews.filter(r => !r.isApproved).length;
            const careersCount = careersData.length;
            const counselingRequests = counselingData.data || [];
            const pendingCounseling = counselingRequests.filter(r => r.status === 'Pending').length;

            const today = new Date().toDateString();
            const todayLeads = leads.filter(e => new Date(e.createdAt).toDateString() === today).length;

            setStats({
                leadsTotal: leads.length,
                leadsToday: todayLeads,
                blogsTotal: blogsCount,
                reviewsTotal: reviews.length,
                reviewsPending: pendingReviews,
                careersTotal: careersCount,
                counselingTotal: counselingRequests.length,
                counselingPending: pendingCounseling
            });

            // Set top 5 recent leads
            setRecentLeads(leads.slice(0, 5));

        } catch (error) {
            console.error('Error loading dashboard data:', error);
            toast.error('Failed to load dashboard statistics');
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
            <AdminNav />
            <main className="flex-1 lg:pl-64 p-4 md:p-8 pt-20 lg:pt-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-extrabold text-[#0B0B45]">Admin Control Panel</h1>
                        <p className="text-gray-500 mt-1">Overview of your website state, content, and student inquiries.</p>
                    </div>

                    {loading ? (
                        <div className="py-20 flex justify-center items-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5B2D7C]"></div>
                        </div>
                    ) : (
                        <div className="space-y-8">
                            {/* KPI Metrics */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
                                    <div>
                                        <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Total Leads</p>
                                        <h3 className="text-3xl font-bold text-[#0B0B45] mt-1">{stats.leadsTotal}</h3>
                                        <p className="text-xs text-green-500 font-semibold mt-1">+{stats.leadsToday} today</p>
                                    </div>
                                    <div className="p-4 bg-purple-50 text-[#5B2D7C] rounded-2xl">
                                        <Users size={24} />
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
                                    <div>
                                        <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Blog Articles</p>
                                        <h3 className="text-3xl font-bold text-[#0B0B45] mt-1">{stats.blogsTotal}</h3>
                                        <Link to="/admin/blogs/new" className="text-xs text-[#5B2D7C] hover:underline font-semibold mt-1 inline-flex items-center gap-1">
                                            <Plus size={12} /> Add new article
                                        </Link>
                                    </div>
                                    <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl">
                                        <FileText size={24} />
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
                                    <div>
                                        <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Student Reviews</p>
                                        <h3 className="text-3xl font-bold text-[#0B0B45] mt-1">{stats.reviewsTotal}</h3>
                                        {stats.reviewsPending > 0 ? (
                                            <p className="text-xs text-amber-500 font-semibold mt-1">{stats.reviewsPending} pending approval</p>
                                        ) : (
                                            <p className="text-xs text-gray-400 font-semibold mt-1">All approved</p>
                                        )}
                                    </div>
                                    <div className="p-4 bg-yellow-50 text-yellow-600 rounded-2xl">
                                        <MessageSquare size={24} />
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
                                    <div>
                                        <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Careers Openings</p>
                                        <h3 className="text-3xl font-bold text-[#0B0B45] mt-1">{stats.careersTotal}</h3>
                                        <p className="text-xs text-gray-400 font-semibold mt-1">Open positions listed</p>
                                    </div>
                                    <div className="p-4 bg-red-50 text-red-600 rounded-2xl">
                                        <Briefcase size={24} />
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
                                    <div>
                                        <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Counseling Requests</p>
                                        <h3 className="text-3xl font-bold text-[#0B0B45] mt-1">{stats.counselingTotal}</h3>
                                        {stats.counselingPending > 0 ? (
                                            <p className="text-xs text-yellow-500 font-semibold mt-1">{stats.counselingPending} pending action</p>
                                        ) : (
                                            <p className="text-xs text-gray-400 font-semibold mt-1">All processed</p>
                                        )}
                                    </div>
                                    <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl">
                                        <PhoneCall size={24} />
                                    </div>
                                </div>
                            </div>

                            {/* Main Content Split Grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {/* Left Side: Quick Nav Links */}
                                <div className="space-y-6">
                                    <h2 className="text-xl font-bold text-[#0B0B45]">Quick Navigation</h2>
                                    <div className="grid grid-cols-1 gap-4">
                                        <Link
                                            to="/admin/enrollments"
                                            className="group bg-white p-5 rounded-2xl border border-gray-100 hover:border-[#5B2D7C] hover:shadow-md transition-all flex items-center justify-between"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="p-3 bg-purple-50 text-[#5B2D7C] rounded-xl group-hover:bg-[#5B2D7C] group-hover:text-white transition-colors">
                                                    <Users size={20} />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-800">Enrollments Manager</h4>
                                                    <p className="text-xs text-gray-500">View and update student leads</p>
                                                </div>
                                            </div>
                                            <ArrowRight size={18} className="text-gray-400 group-hover:text-[#5B2D7C] group-hover:translate-x-1 transition-all" />
                                        </Link>

                                        <Link
                                            to="/admin/blogs"
                                            className="group bg-white p-5 rounded-2xl border border-gray-100 hover:border-[#5B2D7C] hover:shadow-md transition-all flex items-center justify-between"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                                    <FileText size={20} />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-800">Blogs Editor</h4>
                                                    <p className="text-xs text-gray-500">Write, edit, and publish blogs</p>
                                                </div>
                                            </div>
                                            <ArrowRight size={18} className="text-gray-400 group-hover:text-[#5B2D7C] group-hover:translate-x-1 transition-all" />
                                        </Link>

                                        <Link
                                            to="/admin/reviews"
                                            className="group bg-white p-5 rounded-2xl border border-gray-100 hover:border-[#5B2D7C] hover:shadow-md transition-all flex items-center justify-between"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="p-3 bg-yellow-50 text-yellow-600 rounded-xl group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                                                    <MessageSquare size={20} />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-800">Reviews Approver</h4>
                                                    <p className="text-xs text-gray-500">Moderate student testimonials</p>
                                                </div>
                                            </div>
                                            <ArrowRight size={18} className="text-gray-400 group-hover:text-[#5B2D7C] group-hover:translate-x-1 transition-all" />
                                        </Link>

                                        <Link
                                            to="/admin/careers"
                                            className="group bg-white p-5 rounded-2xl border border-gray-100 hover:border-[#5B2D7C] hover:shadow-md transition-all flex items-center justify-between"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="p-3 bg-red-50 text-red-600 rounded-xl group-hover:bg-red-600 group-hover:text-white transition-colors">
                                                    <Briefcase size={20} />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-800">Careers & Openings</h4>
                                                    <p className="text-xs text-gray-500">Manage job postings</p>
                                                </div>
                                            </div>
                                            <ArrowRight size={18} className="text-gray-400 group-hover:text-[#5B2D7C] group-hover:translate-x-1 transition-all" />
                                        </Link>

                                        <Link
                                            to="/admin/counseling"
                                            className="group bg-white p-5 rounded-2xl border border-gray-100 hover:border-[#5B2D7C] hover:shadow-md transition-all flex items-center justify-between"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                                    <PhoneCall size={20} />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-800">Counseling Requests</h4>
                                                    <p className="text-xs text-gray-500">Call back and consult students</p>
                                                </div>
                                            </div>
                                            <ArrowRight size={18} className="text-gray-400 group-hover:text-[#5B2D7C] group-hover:translate-x-1 transition-all" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Right Side: Recent Activity/Leads (Span 2) */}
                                <div className="lg:col-span-2 space-y-6">
                                    <div className="flex justify-between items-center">
                                        <h2 className="text-xl font-bold text-[#0B0B45]">Latest Student Leads</h2>
                                        <Link to="/admin/enrollments" className="text-xs font-bold text-[#5B2D7C] hover:underline flex items-center gap-1">
                                            View all leads <ExternalLink size={12} />
                                        </Link>
                                    </div>

                                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                                        {recentLeads.length === 0 ? (
                                            <div className="py-12 text-center text-gray-500">
                                                <Clock size={40} className="mx-auto mb-3 opacity-20 text-gray-400" />
                                                <p className="font-medium">No leads submitted yet.</p>
                                            </div>
                                        ) : (
                                            <div className="divide-y divide-gray-50">
                                                {recentLeads.map((e) => (
                                                    <div key={e._id} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
                                                        <div>
                                                            <div className="flex items-center gap-2">
                                                                <span className="font-bold text-gray-800 text-sm sm:text-base">{e.fullName}</span>
                                                                <span className="text-[10px] px-2 py-0.5 bg-blue-50 text-blue-700 font-bold rounded-full">{e.course}</span>
                                                            </div>
                                                            <div className="flex items-center gap-4 text-xs text-gray-400 mt-1">
                                                                <span className="flex items-center gap-1"><Calendar size={12} /> {formatDate(e.createdAt)}</span>
                                                                <span className="flex items-center gap-1"><MapPin size={12} /> {e.city}</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-3 self-start sm:self-center">
                                                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                                                !e.status || e.status.toLowerCase() === 'pending'
                                                                    ? 'bg-amber-50 text-amber-700 border border-amber-100'
                                                                    : 'bg-green-50 text-green-700 border border-green-100'
                                                            }`}>
                                                                {e.status || 'Pending'}
                                                            </span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
