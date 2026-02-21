import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react';
import { fetchAllBlogs, deleteBlog, togglePublishStatus } from '../lib/blogApi';
import toast from 'react-hot-toast';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default function AdminBlogs() {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        // Check if admin is logged in
        const token = localStorage.getItem('adminToken');
        if (!token) {
            toast.error('Please login as admin');
            navigate('/admin-login');
            return;
        }
        loadBlogs();
    }, [currentPage]);

    const loadBlogs = async () => {
        try {
            setLoading(true);
            const data = await fetchAllBlogs(currentPage, 10);
            setBlogs(data.blogs);
            setTotalPages(data.totalPages);
        } catch (error) {
            console.error('Error loading blogs:', error);
            toast.error('Failed to load blogs');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id, title) => {
        if (!window.confirm(`Are you sure you want to delete "${title}"?`)) {
            return;
        }

        try {
            await deleteBlog(id);
            toast.success('Blog deleted successfully');
            loadBlogs();
        } catch (error) {
            console.error('Error deleting blog:', error);
            toast.error('Failed to delete blog');
        }
    };

    const handleTogglePublish = async (id, currentStatus) => {
        try {
            await togglePublishStatus(id);
            toast.success(`Blog ${currentStatus ? 'unpublished' : 'published'} successfully`);
            loadBlogs();
        } catch (error) {
            console.error('Error toggling publish status:', error);
            toast.error('Failed to update blog status');
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50 py-8 px-4 pt-32">
                <div className="max-w-7xl mx-auto">
                    {/* Navigation Menu */}
                    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
                        <div className="flex gap-4">
                            <button
                                onClick={() => navigate('/admin-login')}
                                className="px-4 py-2 bg-white border-2 border-[#5B2D7C] text-[#5B2D7C] rounded font-semibold hover:bg-[#5B2D7C] hover:text-white transition-colors"
                            >
                                📊 Marks Management
                            </button>
                            <button
                                onClick={() => navigate('/admin/blogs')}
                                className="px-4 py-2 bg-[#5B2D7C] text-white rounded font-semibold"
                            >
                                📝 Blog Management
                            </button>
                            <button
                                onClick={() => navigate('/admin/enrollments')}
                                className="px-4 py-2 bg-white border-2 border-[#5B2D7C] text-[#5B2D7C] rounded font-semibold hover:bg-[#5B2D7C] hover:text-white transition-colors"
                            >
                                🎓 Student Enrollments
                            </button>
                        </div>
                    </div>

                    {/* Header */}
                    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                        <div className="flex justify-between items-center">
                            <div>
                                <h1 className="text-3xl font-bold text-[#0B0B45]">Blog Management</h1>
                                <p className="text-gray-600 mt-1">Create and manage your blog posts</p>
                            </div>
                            <Link
                                to="/admin/blogs/new"
                                className="flex items-center gap-2 px-6 py-3 bg-[#5B2D7C] text-white rounded-lg hover:bg-[#3F1D5B] transition-colors font-semibold"
                            >
                                <Plus size={20} />
                                New Blog Post
                            </Link>
                        </div>
                    </div>

                    {/* Loading State */}
                    {loading ? (
                        <div className="flex justify-center items-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5B2D7C]"></div>
                        </div>
                    ) : blogs.length === 0 ? (
                        <div className="bg-white rounded-lg shadow-md p-12 text-center">
                            <p className="text-xl text-gray-600 mb-4">No blog posts yet</p>
                            <Link
                                to="/admin/blogs/new"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#5B2D7C] text-white rounded-lg hover:bg-[#3F1D5B] transition-colors"
                            >
                                <Plus size={20} />
                                Create Your First Blog Post
                            </Link>
                        </div>
                    ) : (
                        <>
                            {/* Blog Table */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Title
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Category & Tag
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Author
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Status
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Date
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {blogs.map((blog) => (
                                            <tr key={blog._id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4">
                                                    <div className="text-sm font-medium text-gray-900">{blog.title}</div>
                                                    <div className="text-sm text-gray-500">/{blog.permalink}</div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex flex-col gap-1">
                                                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800 w-fit">
                                                            {blog.categories || 'Uncategorized'}
                                                        </span>
                                                        {blog.tag && (
                                                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 w-fit">
                                                                {blog.tag}
                                                            </span>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-900">{blog.authorName || 'No Author'}</div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${blog.published
                                                        ? 'bg-green-100 text-green-800'
                                                        : 'bg-yellow-100 text-yellow-800'
                                                        }`}>
                                                        {blog.published ? 'Published' : 'Draft'}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    {formatDate(blog.datePosted)}
                                                </td>
                                                <td className="px-6 py-4 text-sm font-medium">
                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            onClick={() => navigate(`/admin/blogs/edit/${blog._id}`)}
                                                            className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50"
                                                            title="Edit"
                                                        >
                                                            <Edit size={18} />
                                                        </button>
                                                        <button
                                                            onClick={() => handleTogglePublish(blog._id, blog.published)}
                                                            className={`${blog.published ? 'text-orange-600 hover:text-orange-900' : 'text-green-600 hover:text-green-900'
                                                                } p-1 rounded hover:bg-gray-100`}
                                                            title={blog.published ? 'Unpublish' : 'Publish'}
                                                        >
                                                            {blog.published ? <EyeOff size={18} /> : <Eye size={18} />}
                                                        </button>
                                                        <button
                                                            onClick={() => handleDelete(blog._id, blog.title)}
                                                            className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50"
                                                            title="Delete"
                                                        >
                                                            <Trash2 size={18} />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="flex justify-center items-center gap-2 mt-6">
                                    <button
                                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                        disabled={currentPage === 1}
                                        className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                                    >
                                        Previous
                                    </button>

                                    <span className="px-4 py-2 text-gray-700">
                                        Page {currentPage} of {totalPages}
                                    </span>

                                    <button
                                        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                                        disabled={currentPage === totalPages}
                                        className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                                    >
                                        Next
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}
