import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowLeft, Tag, Clock, Share2, Coffee } from 'lucide-react';
import { fetchBlogByPermalink } from '../lib/blogApi';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default function BlogDetail() {
    const { permalink } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadBlog();
    }, [permalink]);

    const loadBlog = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await fetchBlogByPermalink(permalink);
            setBlog(data.blog);
        } catch (error) {
            console.error('Error loading blog:', error);
            setError('Blog post not found');
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
        return `${minutes} min`;
    };

    if (loading) {
        return (
            <>
                <Navbar />
                <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 pb-16 flex justify-center items-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5B2D7C]"></div>
                </div>
                <Footer />
            </>
        );
    }

    if (error || !blog) {
        return (
            <>
                <Navbar />
                <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 pb-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">Blog Post Not Found</h1>
                        <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
                        <Link
                            to="/blogs"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#5B2D7C] text-white rounded-lg hover:bg-[#3F1D5B] transition-colors"
                        >
                            <ArrowLeft size={20} />
                            Back to Blogs
                        </Link>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Helmet>
                <title>{blog.seoTitle || blog.title} | Team Excellent Career Institute</title>
                <meta
                    name="description"
                    content={blog.seoDescription || blog.excerpt || blog.description.replace(/<[^>]*>/g, '').substring(0, 160)}
                />
                {blog.seoKeywords && <meta name="keywords" content={blog.seoKeywords} />}
                {blog.seoExtraHead && (
                    <div dangerouslySetInnerHTML={{ __html: blog.seoExtraHead }} />
                )}
            </Helmet>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 pt-32 pb-20">
                {/* Back Button */}
                <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 mb-8">
                    <Link
                        to="/blogs"
                        className="inline-flex items-center gap-2 text-[#5B2D7C] hover:text-[#3F1D5B] font-semibold transition-all hover:gap-3"
                    >
                        <ArrowLeft size={20} />
                        Back to All Blogs
                    </Link>
                </div>

                <article className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
                    {/* Blog Header */}
                    <header className="mb-12">
                        {/* Category Badge */}
                        {blog.categories && (
                            <div className="flex items-center gap-2 mb-6">
                                <span className="inline-block px-5 py-2 text-sm font-bold text-white bg-gradient-to-r from-[#5B2D7C] to-[#902ce8] rounded-full shadow-md">
                                    {blog.categories}
                                </span>
                            </div>
                        )}

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0B0B45] mb-8 leading-tight tracking-tight">
                            {blog.title}
                        </h1>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-6 text-gray-600 pb-8 border-b border-gray-200">
                            <div className="flex items-center gap-2">
                                <Calendar size={18} className="text-[#5B2D7C]" />
                                <span className="font-medium">{formatDate(blog.datePosted)}</span>
                            </div>
                            {blog.author && (
                                <div className="flex items-center gap-2">
                                    <User size={18} className="text-[#5B2D7C]" />
                                    <span className="font-medium">By Team Excellent</span>
                                </div>
                            )}
                            <div className="flex items-center gap-2">
                                <Coffee size={18} className="text-[#5B2D7C]" />
                                <span className="font-medium">{getReadingTime(blog.description)} read</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    {blog.featuredImage && (
                        <div className="mb-12 -mx-6 sm:-mx-8 lg:-mx-12">
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src={blog.featuredImage}
                                    alt={blog.seoTitle || blog.title}
                                    className="w-full h-auto max-h-[600px] object-cover"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </div>
                        </div>
                    )}

                    {/* Excerpt - Highlighted */}
                    {blog.excerpt && (
                        <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 border-l-4 border-[#5B2D7C] p-8 mb-12 rounded-r-2xl shadow-lg">
                            <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed italic">
                                "{blog.excerpt}"
                            </p>
                        </div>
                    )}

                    {/* Blog Content - Optimized for Reading */}
                    <div
                        className="prose prose-lg lg:prose-xl max-w-none
              prose-headings:text-[#0B0B45] prose-headings:font-bold prose-headings:tracking-tight
              prose-h1:text-4xl prose-h1:mt-12 prose-h1:mb-6 prose-h1:leading-tight
              prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-5 prose-h2:leading-snug
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:leading-snug
              prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3
              prose-p:text-gray-700 prose-p:leading-[1.8] prose-p:mb-6 prose-p:text-lg
              prose-a:text-[#5B2D7C] prose-a:font-semibold prose-a:underline hover:prose-a:text-[#902ce8] prose-a:transition-colors
              prose-strong:text-[#0B0B45] prose-strong:font-bold
              prose-em:text-gray-600 prose-em:italic
              prose-ul:my-6 prose-ul:space-y-3
              prose-ol:my-6 prose-ol:space-y-3
              prose-li:text-gray-700 prose-li:text-lg prose-li:leading-relaxed
              prose-blockquote:border-l-4 prose-blockquote:border-[#5B2D7C] 
              prose-blockquote:pl-6 prose-blockquote:py-3 prose-blockquote:my-8 prose-blockquote:italic 
              prose-blockquote:text-gray-700 prose-blockquote:text-lg prose-blockquote:bg-gray-50 prose-blockquote:rounded-r-lg
              prose-code:text-[#5B2D7C] prose-code:bg-purple-50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:font-medium prose-code:text-base
              prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-6 prose-pre:rounded-xl prose-pre:shadow-lg prose-pre:my-8
              prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8 prose-img:w-full
              prose-hr:border-gray-300 prose-hr:my-12"
                        dangerouslySetInnerHTML={{ __html: blog.description }}
                    />

                    {/* Divider with Icon */}
                    <div className="flex items-center justify-center my-16">
                        <div className="flex-1 border-t border-gray-300"></div>
                        <div className="px-6">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5B2D7C] to-[#902ce8] flex items-center justify-center shadow-lg">
                                <span className="text-white text-2xl">✦</span>
                            </div>
                        </div>
                        <div className="flex-1 border-t border-gray-300"></div>
                    </div>

                    {/* Share Section - More Engaging */}
                    <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-8 rounded-2xl mb-16 shadow-lg border border-purple-100">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5B2D7C] to-[#902ce8] flex items-center justify-center shadow-md">
                                    <Share2 size={24} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">Enjoyed this article?</h3>
                                    <p className="text-gray-600">Share it with your friends!</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <button className="px-6 py-3 bg-white text-[#5B2D7C] rounded-xl hover:bg-[#5B2D7C] hover:text-white transition-all font-semibold shadow-md hover:shadow-xl transform hover:-translate-y-1">
                                    Twitter
                                </button>
                                <button className="px-6 py-3 bg-white text-[#5B2D7C] rounded-xl hover:bg-[#5B2D7C] hover:text-white transition-all font-semibold shadow-md hover:shadow-xl transform hover:-translate-y-1">
                                    Facebook
                                </button>
                                <button className="px-6 py-3 bg-white text-[#5B2D7C] rounded-xl hover:bg-[#5B2D7C] hover:text-white transition-all font-semibold shadow-md hover:shadow-xl transform hover:-translate-y-1">
                                    LinkedIn
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Back to Blogs - Enhanced */}
                    <div className="text-center pt-8 border-t border-gray-200">
                        <Link
                            to="/blogs"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#5B2D7C] to-[#902ce8] text-white rounded-2xl hover:shadow-2xl transition-all font-bold text-lg transform hover:-translate-y-1"
                        >
                            <ArrowLeft size={24} />
                            Explore More Articles
                        </Link>
                    </div>
                </article>
            </div>
            <Footer />
        </>
    );
}
