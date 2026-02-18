import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ChevronRight, Clock } from 'lucide-react';
import { fetchPublishedBlogs } from '../lib/blogApi';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        loadBlogs();
    }, [currentPage]);

    const loadBlogs = async () => {
        try {
            setLoading(true);
            const data = await fetchPublishedBlogs(currentPage, 9);
            setBlogs(data.blogs);
            setTotalPages(data.totalPages);
        } catch (error) {
            console.error('Error loading blogs:', error);
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const getReadingTime = (description) => {
        const text = description.replace(/<[^>]*>/g, '');
        const words = text.split(/\s+/).length;
        const minutes = Math.ceil(words / 200);
        return `${minutes} min read`;
    };

    const createExcerpt = (description, maxLength = 150) => {
        const text = description.replace(/<[^>]*>/g, '');
        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    };

    return (
        <>
            <Helmet>
                <title>Our Blog | Team Excellent Career Institute</title>
                <meta
                    name="description"
                    content="Stay updated with the latest insights, tips, and news from Team Excellent Career Institute. Articles on JEE, NEET, and school foundations."
                />
            </Helmet>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-bold text-[#0B0B45] mb-6">
                            Our Blog
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Insights, tips, and updates from Team Excellent Career Institute
                        </p>
                    </div>

                    {/* Loading State */}
                    {loading ? (
                        <div className="flex justify-center items-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5B2D7C]"></div>
                        </div>
                    ) : blogs.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-xl text-gray-600">No blog posts available yet.</p>
                        </div>
                    ) : (
                        <>
                            {/* Blog Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                {blogs.map((blog) => (
                                    <Link
                                        key={blog._id}
                                        to={`/blogs/${blog.permalink}`}
                                        className="group"
                                    >
                                        <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                                            {/* Featured Image */}
                                            {blog.featuredImage ? (
                                                <div className="relative h-72 overflow-hidden bg-gradient-to-br from-[#5B2D7C] to-[#902ce8]">
                                                    <img
                                                        src={blog.featuredImage}
                                                        alt={blog.title}
                                                        className="w-full h-full object-cover transition-transform duration-300"
                                                        onError={(e) => {
                                                            e.target.style.display = 'none';
                                                            e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-white text-6xl">📝</div>';
                                                        }}
                                                    />
                                                    {/* Category Badge on Image */}
                                                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                                                        {blog.categories && (
                                                            <span className="inline-block px-4 py-2 text-xs font-bold text-white bg-black bg-opacity-60 backdrop-blur-sm rounded-full">
                                                                {blog.categories}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="relative h-72 bg-gradient-to-br from-[#5B2D7C] to-[#902ce8] flex items-center justify-center">
                                                    <span className="text-white text-7xl">📝</span>
                                                    {/* Category Badge */}
                                                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                                                        {blog.categories && (
                                                            <span className="inline-block px-4 py-2 text-xs font-bold text-white bg-black bg-opacity-60 backdrop-blur-sm rounded-full">
                                                                {blog.categories}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Content */}
                                            <div className="p-6 flex-1 flex flex-col">
                                                {/* Title */}
                                                <h2 className="text-2xl font-bold text-[#0B0B45] mb-3 line-clamp-2 group-hover:text-[#5B2D7C] transition-colors">
                                                    {blog.title}
                                                </h2>

                                                {/* Excerpt */}
                                                <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                                                    {blog.excerpt || createExcerpt(blog.description)}
                                                </p>

                                                {/* Meta Info */}
                                                <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                                                    <div className="flex flex-col gap-2">
                                                        <div className="flex items-center gap-4">
                                                            <div className="flex items-center gap-1">
                                                                <Calendar size={16} />
                                                                <span>{formatDate(blog.datePosted)}</span>
                                                            </div>
                                                            <div className="flex items-center gap-1">
                                                                <Clock size={16} />
                                                                <span>{getReadingTime(blog.description)}</span>
                                                            </div>
                                                        </div>
                                                        {blog.authorName && (
                                                            <div className="flex items-center gap-1 text-[#5B2D7C] font-medium">
                                                                <User size={16} />
                                                                <span>By {blog.authorName}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Read More */}
                                                <div className="mt-4">
                                                    <span className="inline-flex items-center gap-2 text-[#5B2D7C] font-semibold group-hover:gap-3 transition-all">
                                                        Read More <ChevronRight size={18} />
                                                    </span>
                                                </div>
                                            </div>
                                        </article>
                                    </Link>
                                ))}
                            </div>

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="flex justify-center items-center gap-2">
                                    <button
                                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                        disabled={currentPage === 1}
                                        className="px-6 py-3 rounded-lg bg-white border-2 border-gray-300 text-gray-700 font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#5B2D7C] hover:text-white hover:border-[#5B2D7C] transition-all"
                                    >
                                        Previous
                                    </button>

                                    <span className="px-6 py-3 text-gray-700 font-semibold">
                                        Page {currentPage} of {totalPages}
                                    </span>

                                    <button
                                        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                                        disabled={currentPage === totalPages}
                                        className="px-6 py-3 rounded-lg bg-white border-2 border-gray-300 text-gray-700 font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#5B2D7C] hover:text-white hover:border-[#5B2D7C] transition-all"
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
