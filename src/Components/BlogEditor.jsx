import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Code, Eye, Monitor } from 'lucide-react';
import { createBlog, updateBlog, fetchBlogById } from '../lib/blogApi';
import axios from 'axios';
import toast from 'react-hot-toast';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function BlogEditor() {
    const navigate = useNavigate();
    const { id } = useParams();
    const isEditMode = !!id;

    const [formData, setFormData] = useState({
        title: '',
        permalink: '',
        description: '',
        excerpt: '',
        featuredImage: '',
        categories: '',
        published: false,
        datePosted: new Date().toISOString().split('T')[0]
    });
    const [loading, setLoading] = useState(false);
    const [loadingBlog, setLoadingBlog] = useState(isEditMode);
    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [showSource, setShowSource] = useState(false);

    useEffect(() => {
        // Check if admin is logged in
        const token = localStorage.getItem('adminToken');
        if (!token) {
            toast.error('Please login as admin');
            navigate('/admin-login');
            return;
        }

        if (isEditMode) {
            loadBlog();
        }
    }, [id]);

    const loadBlog = async () => {
        try {
            setLoadingBlog(true);
            const data = await fetchBlogById(id);
            const blog = data.blog;
            setFormData({
                title: blog.title,
                permalink: blog.permalink,
                description: blog.description,
                excerpt: blog.excerpt || '',
                featuredImage: blog.featuredImage || '',
                categories: blog.categories || '',
                published: blog.published,
                datePosted: new Date(blog.datePosted).toISOString().split('T')[0]
            });
        } catch (error) {
            console.error('Error loading blog:', error);
            toast.error('Failed to load blog');
            navigate('/admin/blogs');
        } finally {
            setLoadingBlog(false);
        }
    };

    const generatePermalink = (title) => {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
    };

    const handleTitleChange = (e) => {
        const title = e.target.value;
        setFormData(prev => ({
            ...prev,
            title,
            permalink: isEditMode ? prev.permalink : generatePermalink(title)
        }));
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (publishStatus) => {
        if (!formData.title || !formData.permalink || !formData.description) {
            toast.error('Title, permalink, and description are required');
            return;
        }

        try {
            setLoading(true);
            const blogData = {
                ...formData,
                published: publishStatus
            };

            if (isEditMode) {
                await updateBlog(id, blogData);
                toast.success('Blog updated successfully');
            } else {
                await createBlog(blogData);
                toast.success('Blog created successfully');
            }

            navigate('/admin/blogs');
        } catch (error) {
            console.error('Error saving blog:', error);
            console.error('Error response:', error.response?.data);
            toast.error(error.response?.data?.message || 'Failed to save blog');
        } finally {
            setLoading(false);
        }
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Validate file type
        if (!file.type.startsWith('image/')) {
            toast.error('Please select an image file');
            return;
        }

        // Validate file size (5MB)
        if (file.size > 5 * 1024 * 1024) {
            toast.error('Image size should be less than 5MB');
            return;
        }

        try {
            setUploading(true);
            setUploadProgress(0);

            const formDataToUpload = new FormData();
            formDataToUpload.append('image', file);

            const token = localStorage.getItem('adminToken');

            const response = await axios.post(
                `${import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api'}/upload/image`,
                formDataToUpload,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data'
                    },
                    onUploadProgress: (progressEvent) => {
                        const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                        setUploadProgress(progress);
                    }
                }
            );

            // Set the uploaded image URL
            setFormData(prev => ({
                ...prev,
                featuredImage: response.data.url
            }));

            toast.success('Image uploaded successfully!');
        } catch (error) {
            console.error('Upload error:', error);

            // Check if it's a Cloudinary configuration error
            if (error.response?.status === 503) {
                toast.error('Cloudinary not configured. Please use the Image URL field instead or contact admin to set up Cloudinary.');
            } else {
                toast.error(error.response?.data?.message || 'Failed to upload image');
            }
        } finally {
            setUploading(false);
            setUploadProgress(0);
            // Reset file input
            e.target.value = '';
        }
    };

    const handlePreview = () => {
        // Store current form data in sessionStorage for preview
        sessionStorage.setItem('blogPreview', JSON.stringify(formData));
        window.open('/blog-preview', '_blank');
    };

    if (loadingBlog) {
        return (
            <div className="min-h-screen bg-gray-50 flex justify-center items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5B2D7C]"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-6 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Navigation Menu */}
                <div className="bg-white rounded-lg shadow-md p-4 mb-4">
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
                    </div>
                </div>

                {/* Header */}
                <div className="mb-6">
                    <button
                        onClick={() => navigate('/admin/blogs')}
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
                    >
                        <ArrowLeft size={20} />
                        Back to Blog Management
                    </button>
                    <h1 className="text-3xl font-bold text-[#0B0B45]">
                        {isEditMode ? 'Edit Blog Post' : 'Create New Blog Post'}
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Content Area */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Post Title */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Post Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleTitleChange}
                                placeholder="Thinking About Remote Legal Transcription Jobs? 26 Companies Offering Remote Work in 2026"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B2D7C] focus:border-transparent text-lg"
                            />
                        </div>

                        {/* Permalink */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Permalink
                            </label>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-500 text-sm">yoursite.com/blogs/</span>
                                <input
                                    type="text"
                                    name="permalink"
                                    value={formData.permalink}
                                    onChange={handleChange}
                                    placeholder="thinking-about-remote-legal-transcription-jobs-26-companies-offering-remote-work-in-2026"
                                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B2D7C] focus:border-transparent"
                                />
                            </div>
                        </div>

                        {/* Description (Main Content) */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex justify-between items-center mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Description
                                </label>
                                <button
                                    type="button"
                                    onClick={() => setShowSource(!showSource)}
                                    className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-[#5B2D7C] bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors border border-purple-200"
                                >
                                    {showSource ? (
                                        <>
                                            <Monitor size={16} />
                                            Visual Editor
                                        </>
                                    ) : (
                                        <>
                                            <Code size={16} />
                                            Edit Source
                                        </>
                                    )}
                                </button>
                            </div>

                            <div className="prose-editor">
                                {showSource ? (
                                    <div className="relative rounded-lg overflow-hidden border border-gray-700 shadow-inner">
                                        <textarea
                                            value={formData.description}
                                            onChange={handleChange}
                                            name="description"
                                            rows={20}
                                            className="w-full px-4 py-3 bg-[#1e1e1e] text-[#d4d4d4] font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#5B2D7C] resize-y"
                                            placeholder="Paste your raw HTML here..."
                                            spellCheck="false"
                                        />
                                        <div className="absolute top-0 right-0 px-3 py-1 bg-[#2d2d2d] text-xs text-gray-400 font-mono border-b border-l border-gray-700 rounded-bl-lg">
                                            HTML Source
                                        </div>
                                    </div>
                                ) : (
                                    <ReactQuill
                                        theme="snow"
                                        value={formData.description}
                                        onChange={(content) => {
                                            setFormData(prev => ({ ...prev, description: content }));
                                        }}
                                        modules={{
                                            toolbar: [
                                                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                                                ['bold', 'italic', 'underline', 'strike'],
                                                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                                [{ 'script': 'sub' }, { 'script': 'super' }],
                                                [{ 'indent': '-1' }, { 'indent': '+1' }],
                                                [{ 'direction': 'rtl' }],
                                                [{ 'color': [] }, { 'background': [] }],
                                                [{ 'font': [] }],
                                                [{ 'align': [] }],
                                                ['link', 'image', 'video'],
                                                ['clean']
                                            ],
                                        }}
                                        className="h-96 mb-12"
                                    />
                                )}
                            </div>
                        </div>

                        {/* Excerpt */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Excerpt
                            </label>
                            <textarea
                                name="excerpt"
                                value={formData.excerpt}
                                onChange={handleChange}
                                rows={3}
                                placeholder="Optional short summary of your blog post..."
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B2D7C] focus:border-transparent"
                            />
                        </div>

                        {/* Featured Image */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                Featured Image
                            </label>

                            {/* Upload Button */}
                            <div className="mb-4">
                                <input
                                    type="file"
                                    id="imageUpload"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="hidden"
                                />
                                <label
                                    htmlFor="imageUpload"
                                    className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 bg-[#5B2D7C] text-white rounded-lg hover:bg-[#3F1D5B] transition-colors font-semibold"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                    {uploading ? 'Uploading...' : 'Upload Image'}
                                </label>
                                {uploading && (
                                    <div className="mt-3">
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-[#5B2D7C] h-2 rounded-full transition-all duration-300"
                                                style={{ width: `${uploadProgress}%` }}
                                            ></div>
                                        </div>
                                        <p className="text-sm text-gray-600 mt-1">{uploadProgress}% uploaded</p>
                                    </div>
                                )}
                            </div>

                            {/* OR Divider */}
                            <div className="flex items-center gap-3 my-4">
                                <div className="flex-1 border-t border-gray-300"></div>
                                <span className="text-sm text-gray-500 font-medium">OR</span>
                                <div className="flex-1 border-t border-gray-300"></div>
                            </div>

                            {/* URL Input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Image URL
                                </label>
                                <input
                                    type="url"
                                    name="featuredImage"
                                    value={formData.featuredImage}
                                    onChange={handleChange}
                                    placeholder="https://example.com/image.jpg"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B2D7C] focus:border-transparent"
                                />
                                <p className="text-xs text-gray-500 mt-2">
                                    Or paste an image URL directly
                                </p>
                            </div>

                            {/* Image Preview */}
                            {formData.featuredImage && (
                                <div className="mt-4">
                                    <p className="text-sm font-medium text-gray-700 mb-2">Preview:</p>
                                    <div className="relative rounded-lg overflow-hidden border-2 border-gray-200">
                                        <img
                                            src={formData.featuredImage}
                                            alt="Featured preview"
                                            className="w-full h-48 object-cover"
                                            onError={(e) => {
                                                e.target.parentElement.innerHTML = '<div class="w-full h-48 flex items-center justify-center bg-gray-100 text-gray-400 text-sm">Invalid image URL</div>';
                                            }}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Publish Box */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Publish</h3>

                            <div className="space-y-4">
                                {/* Update/Publish Button */}
                                <button
                                    onClick={() => handleSubmit(true)}
                                    disabled={loading}
                                    className="w-full px-4 py-2 bg-[#5B2D7C] text-white rounded-lg hover:bg-[#3F1D5B] transition-colors font-semibold disabled:opacity-50"
                                >
                                    {loading ? 'Saving...' : isEditMode ? 'Update' : 'Publish'}
                                </button>

                                {/* Move to Draft */}
                                <button
                                    onClick={() => handleSubmit(false)}
                                    disabled={loading}
                                    className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-semibold disabled:opacity-50"
                                >
                                    {loading ? 'Saving...' : 'Move to Draft'}
                                </button>

                                {/* Preview */}
                                <button
                                    onClick={handlePreview}
                                    type="button"
                                    className="w-full px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                                >
                                    Preview
                                </button>

                                {/* Published Checkbox */}
                                <div className="flex items-center pt-4 border-t border-gray-200">
                                    <input
                                        type="checkbox"
                                        id="published"
                                        name="published"
                                        checked={formData.published}
                                        onChange={handleChange}
                                        className="w-4 h-4 text-[#5B2D7C] border-gray-300 rounded focus:ring-[#5B2D7C]"
                                    />
                                    <label htmlFor="published" className="ml-2 text-sm text-gray-700">
                                        Published
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Date Posted */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Date Posted</h3>
                            <input
                                type="date"
                                name="datePosted"
                                value={formData.datePosted}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B2D7C] focus:border-transparent"
                            />
                        </div>

                        {/* Categories */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                            <input
                                type="text"
                                name="categories"
                                value={formData.categories}
                                onChange={handleChange}
                                placeholder="e.g., Legal Transcription"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B2D7C] focus:border-transparent"
                            />
                            <p className="text-xs text-gray-500 mt-2">
                                Enter a category name for this blog post
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
