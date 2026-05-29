import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plus, Edit, Trash2, Eye, EyeOff, X } from 'lucide-react';
import { fetchAllCareers, deleteCareer, toggleCareerStatus, createCareer, updateCareer } from '../lib/careerApi';
import toast from 'react-hot-toast';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default function AdminCareers() {
    const navigate = useNavigate();
    const [careers, setCareers] = useState([]);
    const [loading, setLoading] = useState(true);
    
    // Modal state
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingCareer, setEditingCareer] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        requirements: '',
        location: 'Patna, Bihar',
        jobType: 'Full-time',
        experience: 'Fresher',
        salary: 'Not Disclosed',
        isActive: true
    });

    useEffect(() => {
        // Check if admin is logged in
        const token = localStorage.getItem('adminToken');
        if (!token) {
            toast.error('Please login as admin');
            navigate('/admin-login');
            return;
        }
        loadCareers();
    }, []);

    const loadCareers = async () => {
        try {
            setLoading(true);
            const data = await fetchAllCareers();
            setCareers(data);
        } catch (error) {
            console.error('Error loading careers:', error);
            toast.error('Failed to load careers');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id, title) => {
        if (!window.confirm(`Are you sure you want to delete "${title}"?`)) {
            return;
        }

        try {
            await deleteCareer(id);
            toast.success('Career deleted successfully');
            loadCareers();
        } catch (error) {
            console.error('Error deleting career:', error);
            toast.error('Failed to delete career');
        }
    };

    const handleToggleStatus = async (id, currentStatus) => {
        try {
            await toggleCareerStatus(id);
            toast.success(`Career ${currentStatus ? 'hidden' : 'published'} successfully`);
            loadCareers();
        } catch (error) {
            console.error('Error toggling status:', error);
            toast.error('Failed to update career status');
        }
    };

    const openModal = (career = null) => {
        if (career) {
            setEditingCareer(career);
            setFormData({
                title: career.title,
                description: career.description,
                requirements: career.requirements || '',
                location: career.location,
                jobType: career.jobType,
                experience: career.experience || '',
                salary: career.salary || '',
                isActive: career.isActive
            });
        } else {
            setEditingCareer(null);
            setFormData({
                title: '',
                description: '',
                requirements: '',
                location: 'Patna, Bihar',
                jobType: 'Full-time',
                experience: 'Fresher',
                salary: 'Not Disclosed',
                isActive: true
            });
        }
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingCareer(null);
    };

    const handleFormChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingCareer) {
                await updateCareer(editingCareer._id, formData);
                toast.success('Career updated successfully');
            } else {
                await createCareer(formData);
                toast.success('Career created successfully');
            }
            closeModal();
            loadCareers();
        } catch (error) {
            console.error('Error saving career:', error);
            toast.error('Failed to save career');
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
                    <div className="bg-white rounded-lg shadow-md p-4 mb-6 overflow-x-auto">
                        <div className="flex gap-4 min-w-max">
                            <button
                                onClick={() => navigate('/admin-login')}
                                className="px-4 py-2 bg-white border-2 border-[#5B2D7C] text-[#5B2D7C] rounded font-semibold hover:bg-[#5B2D7C] hover:text-white transition-colors"
                            >
                                📊 Marks Management
                            </button>
                            <button
                                onClick={() => navigate('/admin/blogs')}
                                className="px-4 py-2 bg-white border-2 border-[#5B2D7C] text-[#5B2D7C] rounded font-semibold hover:bg-[#5B2D7C] hover:text-white transition-colors"
                            >
                                📝 Blog Management
                            </button>
                            <button
                                onClick={() => navigate('/admin/enrollments')}
                                className="px-4 py-2 bg-white border-2 border-[#5B2D7C] text-[#5B2D7C] rounded font-semibold hover:bg-[#5B2D7C] hover:text-white transition-colors"
                            >
                                🎓 Student Enrollments
                            </button>
                            <button
                                onClick={() => navigate('/admin/careers')}
                                className="px-4 py-2 bg-[#5B2D7C] text-white rounded font-semibold"
                            >
                                💼 Career Management
                            </button>
                        </div>
                    </div>

                    {/* Header */}
                    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                        <div className="flex justify-between items-center flex-wrap gap-4">
                            <div>
                                <h1 className="text-3xl font-bold text-[#5B2D7C]">Career Management</h1>
                                <p className="text-gray-600 mt-1">Post and manage job opportunities</p>
                            </div>
                            <button
                                onClick={() => openModal()}
                                className="flex items-center gap-2 px-6 py-3 bg-[#5B2D7C] text-white rounded-lg hover:bg-[#3F1D5B] transition-colors font-semibold"
                            >
                                <Plus size={20} />
                                Post New Job
                            </button>
                        </div>
                    </div>

                    {/* Loading State */}
                    {loading ? (
                        <div className="flex justify-center items-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5B2D7C]"></div>
                        </div>
                    ) : careers.length === 0 ? (
                        <div className="bg-white rounded-lg shadow-md p-12 text-center">
                            <p className="text-xl text-gray-600 mb-4">No job postings yet</p>
                            <button
                                onClick={() => openModal()}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#5B2D7C] text-white rounded-lg hover:bg-[#3F1D5B] transition-colors"
                            >
                                <Plus size={20} />
                                Create Your First Job Post
                            </button>
                        </div>
                    ) : (
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Title & Type</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Posted</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {careers.map((career) => (
                                            <tr key={career._id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4">
                                                    <div className="text-sm font-medium text-gray-900">{career.title}</div>
                                                    <div className="text-sm text-gray-500">{career.jobType}</div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-900">{career.location}</div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${career.isActive ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                                        {career.isActive ? 'Active' : 'Hidden'}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    {formatDate(career.datePosted)}
                                                </td>
                                                <td className="px-6 py-4 text-sm font-medium">
                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            onClick={() => openModal(career)}
                                                            className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50"
                                                            title="Edit"
                                                        >
                                                            <Edit size={18} />
                                                        </button>
                                                        <button
                                                            onClick={() => handleToggleStatus(career._id, career.isActive)}
                                                            className={`${career.isActive ? 'text-orange-600 hover:text-orange-900' : 'text-green-600 hover:text-green-900'} p-1 rounded hover:bg-gray-100`}
                                                            title={career.isActive ? 'Hide' : 'Show'}
                                                        >
                                                            {career.isActive ? <EyeOff size={18} /> : <Eye size={18} />}
                                                        </button>
                                                        <button
                                                            onClick={() => handleDelete(career._id, career.title)}
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
                        </div>
                    )}
                </div>
            </div>

            {/* Modal for Create/Edit */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center p-6 border-b">
                            <h2 className="text-2xl font-bold text-[#5B2D7C]">
                                {editingCareer ? 'Edit Job Posting' : 'Create New Job Posting'}
                            </h2>
                            <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                                <X size={24} />
                            </button>
                        </div>
                        
                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Job Title *</label>
                                    <input
                                        type="text"
                                        name="title"
                                        required
                                        value={formData.title}
                                        onChange={handleFormChange}
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#5B2D7C] focus:border-transparent"
                                        placeholder="e.g. Mathematics Faculty"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Job Type *</label>
                                    <select
                                        name="jobType"
                                        required
                                        value={formData.jobType}
                                        onChange={handleFormChange}
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#5B2D7C] focus:border-transparent"
                                    >
                                        <option value="Full-time">Full-time</option>
                                        <option value="Part-time">Part-time</option>
                                        <option value="Contract">Contract</option>
                                        <option value="Internship">Internship</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
                                    <input
                                        type="text"
                                        name="location"
                                        required
                                        value={formData.location}
                                        onChange={handleFormChange}
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#5B2D7C] focus:border-transparent"
                                        placeholder="e.g. Patna, Bihar"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
                                    <input
                                        type="text"
                                        name="experience"
                                        value={formData.experience}
                                        onChange={handleFormChange}
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#5B2D7C] focus:border-transparent"
                                        placeholder="e.g. 2-5 Years"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Salary</label>
                                    <input
                                        type="text"
                                        name="salary"
                                        value={formData.salary}
                                        onChange={handleFormChange}
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#5B2D7C] focus:border-transparent"
                                        placeholder="e.g. ₹30,000 - ₹50,000"
                                    />
                                </div>
                                <div className="flex items-center h-full pt-6">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="isActive"
                                            checked={formData.isActive}
                                            onChange={handleFormChange}
                                            className="w-5 h-5 text-[#5B2D7C] rounded focus:ring-[#5B2D7C]"
                                        />
                                        <span className="text-sm font-medium text-gray-700">Active (Visible to public)</span>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Job Description *</label>
                                <textarea
                                    name="description"
                                    required
                                    rows="4"
                                    value={formData.description}
                                    onChange={handleFormChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#5B2D7C] focus:border-transparent"
                                    placeholder="Describe the job role and responsibilities..."
                                ></textarea>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Requirements</label>
                                <textarea
                                    name="requirements"
                                    rows="4"
                                    value={formData.requirements}
                                    onChange={handleFormChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#5B2D7C] focus:border-transparent"
                                    placeholder="List required skills and qualifications..."
                                ></textarea>
                            </div>

                            <div className="flex justify-end gap-4 pt-4 border-t mt-6">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-[#5B2D7C] text-white rounded-lg hover:bg-[#3F1D5B] font-medium"
                                >
                                    {editingCareer ? 'Update Job' : 'Post Job'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            <Footer />
        </>
    );
}
