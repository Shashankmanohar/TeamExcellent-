import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2, ExternalLink, Calendar, User, Phone, Mail, MapPin, BookOpen, Search, Download, Sparkles } from 'lucide-react';
import { fetchEnrollments, deleteEnrollment, updateEnrollmentStatus } from '../lib/enrollmentApi';
import AdminNav from '../Components/AdminNav';
import toast from 'react-hot-toast';

export default function AdminEnrollments() {
    const navigate = useNavigate();
    const [enrollments, setEnrollments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

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

    const updateLocalStatus = (id, newStatus) => {
        setEnrollments(prev => prev.map(e => e._id === id ? { ...e, status: newStatus } : e));
    };

    const handleStatusSubmit = async (id, newStatus) => {
        try {
            await updateEnrollmentStatus(id, newStatus);
            toast.success('Status updated');
        } catch (error) {
            console.error('Error updating status:', error);
            toast.error('Failed to update status');
        }
    };

    const filteredEnrollments = enrollments.filter(e => {
        const matchesSearch = e.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            e.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
            e.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
            e.mobileNumber.includes(searchTerm);

        if (!matchesSearch) return false;

        const enrollDate = new Date(e.createdAt);

        if (startDate) {
            const start = new Date(startDate);
            start.setHours(0, 0, 0, 0);
            if (enrollDate < start) return false;
        }

        if (endDate) {
            const end = new Date(endDate);
            end.setHours(23, 59, 59, 999);
            if (enrollDate > end) return false;
        }

        return true;
    });

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
        const headers = ["Date", "Name", "Mobile", "Email", "Course", "City", "Query", "Status"];
        const rows = filteredEnrollments.map(e => [
            new Date(e.createdAt).toLocaleDateString(),
            e.fullName,
            e.mobileNumber,
            e.email || 'N/A',
            e.course,
            e.city,
            e.query || 'N/A',
            e.status || 'Pending'
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
        <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
            <AdminNav />
            <main className="flex-1 lg:pl-64 p-4 md:p-8 pt-20 lg:pt-8">
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

                    {/* Search and Filter Controls */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-6">
                        <div className="md:col-span-6 relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                <Search size={20} />
                            </span>
                            <input
                                type="text"
                                placeholder="Search by name, course, city or phone..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-[#5B2D7C] focus:border-transparent outline-none transition-all"
                            />
                        </div>
                        <div className="md:col-span-3 flex items-center gap-2">
                            <span className="text-xs font-semibold text-gray-500 uppercase shrink-0">From</span>
                            <input
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-[#5B2D7C] focus:border-transparent outline-none transition-all text-sm text-gray-600"
                            />
                        </div>
                        <div className="md:col-span-3 flex items-center gap-2">
                            <span className="text-xs font-semibold text-gray-500 uppercase shrink-0">To</span>
                            <input
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-[#5B2D7C] focus:border-transparent outline-none transition-all text-sm text-gray-600"
                            />
                        </div>
                        {(startDate || endDate) && (
                            <div className="md:col-span-12 text-right">
                                <button
                                    onClick={() => { setStartDate(''); setEndDate(''); }}
                                    className="text-xs text-red-500 hover:text-red-700 font-semibold underline"
                                >
                                    Clear Date Filters
                                </button>
                            </div>
                        )}
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
                            <div className="overflow-x-auto w-full">
                                <table className="w-full text-left table-fixed" style={{ minWidth: '750px' }}>
                                    <thead className="bg-gray-50 border-b border-gray-100">
                                        <tr>
                                            <th className="px-3 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider w-[24%]">Student Details</th>
                                            <th className="px-3 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider w-[18%]">Contact Info</th>
                                            <th className="px-3 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider w-[18%]">Course & Goal</th>
                                            <th className="px-3 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider w-[12%]">Location</th>
                                            <th className="px-3 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider w-[24%]">Status / Notes</th>
                                            <th className="px-3 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider text-right w-[4%]">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                        {filteredEnrollments.map((e) => (
                                            <tr key={e._id} className="hover:bg-gray-50 transition-colors">
                                                <td className="px-3 py-3">
                                                    <div className="flex items-center gap-3">
                                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                                                            e.course.includes('TE-MAT')
                                                            ? 'bg-yellow-400 text-[#5B2D7C] ring-2 ring-yellow-200 shadow-sm'
                                                            : 'bg-purple-100 text-[#5B2D7C]'
                                                        }`}>
                                                            {e.fullName[0].toUpperCase()}
                                                        </div>
                                                        <div className="min-w-0">
                                                            <div className="font-bold text-gray-800 truncate">{e.fullName}</div>
                                                            <div className="flex items-center gap-1 text-xs text-gray-400">
                                                                <Calendar size={12} /> {formatDate(e.createdAt)}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-3 py-3">
                                                    <div className="space-y-1 min-w-0">
                                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                                            <Phone size={14} className="text-[#5B2D7C]" />
                                                            <a href={`tel:${e.mobileNumber}`} className="hover:text-[#5B2D7C] underline font-medium truncate">{e.mobileNumber}</a>
                                                        </div>
                                                        {e.email && (
                                                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                                                <Mail size={14} className="shrink-0" />
                                                                <span className="truncate" title={e.email}>{e.email}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="px-3 py-3 font-medium">
                                                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-2 ${
                                                        e.course.includes('TE-MAT') 
                                                        ? 'bg-yellow-100 text-yellow-800 border border-yellow-200 shadow-sm' 
                                                        : 'bg-blue-50 text-blue-700'
                                                    }`}>
                                                        {e.course.includes('TE-MAT') && <Sparkles size={12} className="text-yellow-600 animate-pulse" />}
                                                        {e.course}
                                                    </span>
                                                    {e.query && (
                                                        <div className="max-w-xs text-xs text-gray-500 italic line-clamp-2" title={e.query}>
                                                            "{e.query}"
                                                        </div>
                                                    )}
                                                </td>
                                                <td className="px-3 py-3">
                                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                                        <MapPin size={14} className="text-red-500" />
                                                        {e.city}
                                                    </div>
                                                </td>
                                                <td className="px-3 py-3">
                                                    <input
                                                        type="text"
                                                        value={e.status || ''}
                                                        placeholder="Add status/notes..."
                                                        onChange={(event) => updateLocalStatus(e._id, event.target.value)}
                                                        onBlur={(event) => handleStatusSubmit(e._id, event.target.value)}
                                                        className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#5B2D7C] focus:border-transparent outline-none transition-all duration-200 font-medium"
                                                    />
                                                </td>
                                                <td className="px-3 py-3 text-right">
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
            </main>
        </div>
    );
}
