import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2, CheckCircle, XCircle, Star, MessageSquare, User, Calendar, Loader2, Search, Plus } from 'lucide-react';
import { fetchAllReviewsAdmin, deleteReview, toggleReviewApproval, submitReview } from '../lib/reviewApi';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import toast from 'react-hot-toast';

export default function AdminReviews() {
    const navigate = useNavigate();
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [newReview, setNewReview] = useState({ name: '', review: '', rating: 5, studentRole: 'Student' });

    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            toast.error('Please login as admin');
            navigate('/admin-login');
            return;
        }
        loadReviews();
    }, []);

    const loadReviews = async () => {
        try {
            setLoading(true);
            const data = await fetchAllReviewsAdmin();
            if (data.success) {
                setReviews(data.reviews);
            }
        } catch (error) {
            toast.error('Failed to load reviews');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this review?')) return;
        try {
            await deleteReview(id);
            toast.success('Review deleted');
            setReviews(prev => prev.filter(r => r._id !== id));
        } catch (error) {
            toast.error('Failed to delete');
        }
    };

    const handleToggleApproval = async (id) => {
        try {
            const data = await toggleReviewApproval(id);
            if (data.success) {
                toast.success('Status updated');
                setReviews(prev => prev.map(r => r._id === id ? { ...r, isApproved: data.review.isApproved } : r));
            }
        } catch (error) {
            toast.error('Failed to update status');
        }
    };

    const handleAddReview = async (e) => {
        e.preventDefault();
        try {
            const data = await submitReview(newReview);
            if (data.success) {
                toast.success('Review added successfully');
                setIsAddModalOpen(false);
                setNewReview({ name: '', review: '', rating: 5, studentRole: 'Student' });
                loadReviews();
            }
        } catch (error) {
            toast.error('Failed to add review');
        }
    };

    const filteredReviews = reviews.filter(r =>
        r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.review.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50 pt-32 pb-16 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Header Controls */}
                    <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 flex flex-col md:flex-row justify-between items-center gap-4 border border-gray-100">
                        <div>
                            <h1 className="text-3xl font-extrabold text-[#0B0B45] mb-1">Student Reviews</h1>
                            <p className="text-gray-500">Manage testimonials and ratings for SEO ({filteredReviews.length})</p>
                        </div>
                        <button
                            onClick={() => setIsAddModalOpen(true)}
                            className="flex items-center gap-2 px-6 py-3 bg-[#5B2D7C] text-white rounded-xl font-bold hover:bg-[#4a2465] transition-all shadow-md"
                        >
                            <Plus size={20} /> Add Review
                        </button>
                    </div>

                    {/* Search bar */}
                    <div className="relative mb-6">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <Search size={20} />
                        </span>
                        <input
                            type="text"
                            placeholder="Search by name or content..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-[#5B2D7C] focus:border-transparent outline-none transition-all"
                        />
                    </div>

                    {/* Review Grid */}
                    {loading ? (
                        <div className="py-20 flex justify-center items-center">
                            <Loader2 className="animate-spin text-[#5B2D7C]" size={48} />
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {filteredReviews.map((r) => (
                                <div key={r._id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all group">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-purple-100 text-[#5B2D7C] rounded-full flex items-center justify-center font-bold text-xl">
                                                {r.name[0]}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-800">{r.name}</h3>
                                                <div className="flex items-center gap-1">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star key={i} size={14} className={i < r.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"} />
                                                    ))}
                                                    <span className="text-xs text-gray-400 ml-2">{r.date}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => handleToggleApproval(r._id)}
                                                className={`p-2 rounded-lg transition-all ${r.isApproved ? 'text-green-500 hover:bg-green-50' : 'text-gray-400 hover:bg-gray-100'}`}
                                                title={r.isApproved ? "Approved" : "Pending Approval"}
                                            >
                                                {r.isApproved ? <CheckCircle size={20} /> : <XCircle size={20} />}
                                            </button>
                                            <button
                                                onClick={() => handleDelete(r._id)}
                                                className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-all"
                                                title="Delete"
                                            >
                                                <Trash2 size={20} />
                                            </button>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 italic mb-4">"{r.review}"</p>
                                    <div className="flex items-center gap-2 text-xs text-gray-400 border-t pt-4">
                                        <Calendar size={12} />
                                        <span>Last Updated: {new Date(r.updatedAt).toLocaleDateString()}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Add Modal */}
            {isAddModalOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl w-full max-w-md p-8 shadow-2xl animate-in fade-in zoom-in duration-200">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-extrabold text-[#0B0B45]">Add New Review</h2>
                            <button onClick={() => setIsAddModalOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                                <XCircle size={24} />
                            </button>
                        </div>
                        <form onSubmit={handleAddReview} className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Student Name</label>
                                <input
                                    type="text"
                                    required
                                    value={newReview.name}
                                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#5B2D7C] outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Rating (1-5)</label>
                                <div className="flex gap-2">
                                    {[1, 2, 3, 4, 5].map((num) => (
                                        <button
                                            key={num}
                                            type="button"
                                            onClick={() => setNewReview({ ...newReview, rating: num })}
                                            className={`p-2 rounded-lg transition-all ${newReview.rating >= num ? 'text-yellow-400' : 'text-gray-200'}`}
                                        >
                                            <Star size={32} className={newReview.rating >= num ? "fill-current" : ""} />
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Review Content</label>
                                <textarea
                                    required
                                    rows={4}
                                    value={newReview.review}
                                    onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#5B2D7C] outline-none resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 bg-[#5B2D7C] text-white rounded-xl font-bold hover:bg-[#4a2465] transition-all shadow-lg"
                            >
                                Publish Review
                            </button>
                        </form>
                    </div>
                </div>
            )}
            <Footer />
        </>
    );
}
