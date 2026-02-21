import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2, ExternalLink, Calendar, User, Phone, Mail, MapPin, BookOpen, Search, Download } from 'lucide-react';
import { fetchEnrollments, deleteEnrollment } from '../lib/enrollmentApi';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import toast from 'react-hot-toast';

export default function AdminEnrollments() {
    const navigate = useNavigate();
    const [enrollments, setEnrollments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            toast.error('Please login as admin');
            navigate('/admin-login');
            return;
        }
        loadEnrollments();
    }, []);

    const loadEnrollments = async () => {
        try {
            setLoading(true);
            const data = await fetchEnrollments();
            setEnrollments(data.enrollments);
        } catch (error) {
            console.error('Error loading enrollments:', error);
            toast.error('Failed to load enrollments');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this enrollment?')) return;

        try {
            await deleteEnrollment(id);
            toast.success('Enrollment deleted');
            setEnrollments(prev => prev.filter(e => e._id !== id));
        } catch (error) {
            toast.error('Failed to delete');
        }
    };

    const filteredEnrollments = enrollments.filter(e =>
        e.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        e.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
        e.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        e.mobileNumber.includes(searchTerm)
    );

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const downloadCSV = () => {
        const headers = ["Date", "Name", "Mobile", "Email", "Course", "City", "Query"];
        const rows = filteredEnrollments.map(e => [
            new Date(e.createdAt).toLocaleDateString(),
            e.fullName,
            e.mobileNumber,
            e.email || 'N/A',
            e.course,
            e.city,
            e.query || 'N/A'
        ]);

        const csvContent = "data:text/csv;charset=utf-8,"
            + headers.join(",") + "\n"
            + rows.map(r => r.join(",")).join("\n");

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `enrollments_${new Date().toLocaleDateString()}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50 pt-32 pb-16 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Header Controls */}
                    <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 flex flex-col md:flex-row justify-between items-center gap-4 border border-gray-100">
                        <div>
                            <h1 className="text-3xl font-extrabold text-[#0B0B45] mb-1">Student Enrollments</h1>
                            <p className="text-gray-500">Manage and track incoming admission leads ({filteredEnrollments.length})</p>
                        </div>
                        <div className="flex gap-4 w-full md:w-auto">
                            <button
                                onClick={loadEnrollments}
                                className="p-3 text-[#5B2D7C] hover:bg-purple-50 rounded-xl transition-all"
                                title="Refresh data"
                            >
                                <ExternalLink size={24} />
                            </button>
                            <button
                                onClick={downloadCSV}
                                className="flex items-center gap-2 px-6 py-3 bg-[#16a34a] text-white rounded-xl font-bold hover:bg-[#15803d] transition-all shadow-md"
                            >
                                <Download size={20} /> Export CSV
                            </button>
                        </div>
                    </div>

                    {/* Stats Summary */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-2">Total Submissions</h3>
                            <p className="text-4xl font-bold text-[#5B2D7C]">{enrollments.length}</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-2">Today's Leads</h3>
                            <p className="text-4xl font-bold text-[#b72e2f]">
                                {enrollments.filter(e => new Date(e.createdAt).toDateString() === new Date().toDateString()).length}
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-2">Average per Month</h3>
                            <p className="text-4xl font-bold text-blue-600">~{Math.ceil(enrollments.length / Math.max(1, new Date().getMonth() + 1))}</p>
                        </div>
                    </div>

                    {/* Search bar */}
                    <div className="relative mb-6">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <Search size={20} />
                        </span>
                        <input
                            type="text"
                            placeholder="Search by name, course, city or phone..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-[#5B2D7C] focus:border-transparent outline-none transition-all"
                        />
                    </div>

                    {/* Enrollment Table */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                        {loading ? (
                            <div className="py-20 flex justify-center items-center">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5B2D7C]"></div>
                            </div>
                        ) : filteredEnrollments.length === 0 ? (
                            <div className="py-20 text-center text-gray-500">
                                <User size={48} className="mx-auto mb-4 opacity-20" />
                                <p className="text-xl">No enrollments found matching your criteria.</p>
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="bg-gray-50 border-b border-gray-100">
                                        <tr>
                                            <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Student Details</th>
                                            <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Contact Info</th>
                                            <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Course & Goal</th>
                                            <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Location</th>
                                            <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                        {filteredEnrollments.map((e) => (
                                            <tr key={e._id} className="hover:bg-gray-50 transition-colors">
                                                <td className="px-6 py-6">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-full bg-purple-100 text-[#5B2D7C] flex items-center justify-center font-bold">
                                                            {e.fullName[0].toUpperCase()}
                                                        </div>
                                                        <div>
                                                            <div className="font-bold text-gray-800">{e.fullName}</div>
                                                            <div className="flex items-center gap-1 text-xs text-gray-400">
                                                                <Calendar size={12} /> {formatDate(e.createdAt)}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-6">
                                                    <div className="space-y-1">
                                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                                            <Phone size={14} className="text-[#5B2D7C]" />
                                                            <a href={`tel:${e.mobileNumber}`} className="hover:text-[#5B2D7C] underline font-medium">{e.mobileNumber}</a>
                                                        </div>
                                                        {e.email && (
                                                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                                                <Mail size={14} />
                                                                <span>{e.email}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-6">
                                                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold mb-2">
                                                        {e.course}
                                                    </span>
                                                    {e.query && (
                                                        <div className="max-w-xs text-xs text-gray-500 italic line-clamp-2" title={e.query}>
                                                            "{e.query}"
                                                        </div>
                                                    )}
                                                </td>
                                                <td className="px-6 py-6">
                                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                                        <MapPin size={14} className="text-red-500" />
                                                        {e.city}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-6 text-right">
                                                    <button
                                                        onClick={() => handleDelete(e._id)}
                                                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-all"
                                                        title="Delete Lead"
                                                    >
                                                        <Trash2 size={20} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
