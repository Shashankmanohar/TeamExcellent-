import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2, Calendar, User, Phone, Search, Download, HelpCircle, CheckCircle, Clock } from 'lucide-react';
import { fetchCounselingRequests, deleteCounselingRequest, updateCounselingRequestStatus } from '../lib/counselingApi';
import AdminNav from '../Components/AdminNav';
import toast from 'react-hot-toast';

export default function AdminCounseling() {
    const navigate = useNavigate();
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [examFilter, setExamFilter] = useState('All');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            toast.error('Please login as admin');
            navigate('/admin-login');
            return;
        }
        loadRequests();
    }, []);

    const loadRequests = async () => {
        try {
            setLoading(true);
            const res = await fetchCounselingRequests();
            if (res.success) {
                setRequests(res.data);
            }
        } catch (error) {
            console.error('Error loading counseling requests:', error);
            toast.error('Failed to load counseling requests');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this request?')) return;

        try {
            await deleteCounselingRequest(id);
            toast.success('Request deleted');
            setRequests(prev => prev.filter(r => r._id !== id));
        } catch (error) {
            toast.error('Failed to delete request');
        }
    };

    const handleStatusChange = async (id, newStatus) => {
        try {
            await updateCounselingRequestStatus(id, { status: newStatus });
            toast.success('Status updated successfully');
            setRequests(prev => prev.map(r => r._id === id ? { ...r, status: newStatus } : r));
        } catch (error) {
            toast.error('Failed to update status');
        }
    };

    const handleNotesChange = async (id, newNotes) => {
        try {
            await updateCounselingRequestStatus(id, { notes: newNotes });
            setRequests(prev => prev.map(r => r._id === id ? { ...r, notes: newNotes } : r));
        } catch (error) {
            console.error('Error updating notes:', error);
        }
    };

    const filteredRequests = requests.filter(r => {
        const matchesSearch = r.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            r.contactNumber.includes(searchTerm);

        if (!matchesSearch) return false;

        if (statusFilter !== 'All' && r.status !== statusFilter) return false;
        if (examFilter !== 'All' && r.targetExam !== examFilter) return false;

        const requestDate = new Date(r.createdAt);

        if (startDate) {
            const start = new Date(startDate);
            start.setHours(0, 0, 0, 0);
            if (requestDate < start) return false;
        }

        if (endDate) {
            const end = new Date(endDate);
            end.setHours(23, 59, 59, 999);
            if (requestDate > end) return false;
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
        if (filteredRequests.length === 0) {
            toast.error('No requests to export');
            return;
        }

        const headers = ['Submit Date', 'Full Name', 'Contact Number', 'Target Exam', 'Status', 'Notes'];
        const csvRows = [
            headers.join(','),
            ...filteredRequests.map(r => [
                `"${new Date(r.createdAt).toLocaleString()}"`,
                `"${r.fullName.replace(/"/g, '""')}"`,
                `"${r.contactNumber}"`,
                `"${r.targetExam}"`,
                `"${r.status}"`,
                `"${(r.notes || '').replace(/"/g, '""')}"`
            ].join(','))
        ];

        const csvContent = 'data:text/csv;charset=utf-8,' + csvRows.join('\n');
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', `counseling_requests_${new Date().toISOString().slice(0, 10)}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const totalCount = filteredRequests.length;
    const pendingCount = filteredRequests.filter(r => r.status === 'Pending').length;
    const contactedCount = filteredRequests.filter(r => r.status === 'Contacted').length;

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
            <AdminNav />
            <main className="flex-1 lg:pl-64 p-4 md:p-8 pt-20 lg:pt-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                        <div>
                            <h1 className="text-3xl font-black text-[#0B0B45]">Counseling Requests</h1>
                            <p className="text-gray-500 mt-1">Manage student requests for expert college & rank counseling</p>
                        </div>
                        <button
                            onClick={downloadCSV}
                            className="flex items-center gap-2 px-5 py-2.5 bg-[#5B2D7C] hover:bg-[#4A2464] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                        >
                            <Download size={18} />
                            Export CSV
                        </button>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center gap-4">
                            <div className="p-4 bg-blue-50 rounded-xl text-blue-600">
                                <HelpCircle size={24} />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Total Requests</p>
                                <h3 className="text-2xl font-black text-slate-800 mt-1">{totalCount}</h3>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center gap-4">
                            <div className="p-4 bg-yellow-50 rounded-xl text-yellow-600">
                                <Clock size={24} />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Pending</p>
                                <h3 className="text-2xl font-black text-slate-800 mt-1">{pendingCount}</h3>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center gap-4">
                            <div className="p-4 bg-green-50 rounded-xl text-green-600">
                                <CheckCircle size={24} />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Contacted</p>
                                <h3 className="text-2xl font-black text-slate-800 mt-1">{contactedCount}</h3>
                            </div>
                        </div>
                    </div>

                    {/* Filters Container */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 mb-8 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Search bar */}
                            <div className="relative">
                                <Search className="absolute left-3 top-3.5 text-gray-400" size={18} />
                                <input
                                    type="text"
                                    placeholder="Search by name or mobile..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#5B2D7C] focus:border-transparent outline-none transition-all"
                                />
                            </div>

                            {/* Status Filter */}
                            <div>
                                <select
                                    value={statusFilter}
                                    onChange={(e) => setStatusFilter(e.target.value)}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#5B2D7C] focus:border-transparent outline-none transition-all cursor-pointer font-medium text-gray-600"
                                >
                                    <option value="All">All Statuses</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Contacted">Contacted</option>
                                    <option value="No Response">No Response</option>
                                    <option value="Closed">Closed</option>
                                </select>
                            </div>

                            {/* Exam Filter */}
                            <div>
                                <select
                                    value={examFilter}
                                    onChange={(e) => setExamFilter(e.target.value)}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#5B2D7C] focus:border-transparent outline-none transition-all cursor-pointer font-medium text-gray-600"
                                >
                                    <option value="All">All Exams</option>
                                    <option value="JEE Main / Advanced">JEE Main / Advanced</option>
                                    <option value="NEET UG">NEET UG</option>
                                </select>
                            </div>
                        </div>

                        {/* Date Range Filters */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
                            <div className="flex items-center gap-2">
                                <label className="text-xs font-bold text-gray-500 uppercase min-w-[70px]">From Date</label>
                                <input
                                    type="date"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#5B2D7C] focus:border-transparent outline-none transition-all text-sm font-medium text-gray-600"
                                />
                            </div>
                            <div className="flex items-center gap-2">
                                <label className="text-xs font-bold text-gray-500 uppercase min-w-[70px]">To Date</label>
                                <input
                                    type="date"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#5B2D7C] focus:border-transparent outline-none transition-all text-sm font-medium text-gray-600"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Request List */}
                    {loading ? (
                        <div className="flex justify-center items-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5B2D7C]"></div>
                        </div>
                    ) : filteredRequests.length === 0 ? (
                        <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-slate-100">
                            <HelpCircle className="mx-auto text-gray-300 mb-4" size={48} />
                            <h3 className="text-lg font-bold text-gray-700">No Counseling Requests Found</h3>
                            <p className="text-gray-400 mt-1">There are no counseling requests matching the selected filters.</p>
                        </div>
                    ) : (
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full table-fixed min-w-[850px]">
                                    <thead>
                                        <tr className="bg-slate-50 border-b border-slate-100 text-left">
                                            <th className="w-48 px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Date & Name</th>
                                            <th className="w-36 px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Contact</th>
                                            <th className="w-44 px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Target Exam</th>
                                            <th className="w-40 px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                                            <th className="w-64 px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status Notes / Actions</th>
                                            <th className="w-24 px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {filteredRequests.map(r => (
                                            <tr key={r._id} className="hover:bg-slate-50/50 transition-colors">
                                                <td className="px-6 py-4">
                                                    <div className="flex flex-col gap-1">
                                                        <span className="font-extrabold text-slate-800 text-sm leading-tight">{r.fullName}</span>
                                                        <span className="text-[11px] text-gray-400 flex items-center gap-1">
                                                            <Calendar size={11} /> {formatDate(r.createdAt)}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <a href={`tel:${r.contactNumber}`} className="flex items-center gap-1.5 text-sm font-bold text-slate-700 hover:text-[#5B2D7C] transition-colors">
                                                        <Phone size={13} className="text-gray-400" />
                                                        {r.contactNumber}
                                                    </a>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className="px-3 py-1 bg-purple-50 text-[#5B2D7C] text-xs font-extrabold rounded-full border border-purple-100">
                                                        {r.targetExam}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <select
                                                        value={r.status}
                                                        onChange={(e) => handleStatusChange(r._id, e.target.value)}
                                                        className={`px-3 py-1.5 text-xs font-bold rounded-lg border focus:outline-none cursor-pointer ${
                                                            r.status === 'Pending' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                                                            r.status === 'Contacted' ? 'bg-green-50 text-green-700 border-green-200' :
                                                            r.status === 'No Response' ? 'bg-orange-50 text-orange-700 border-orange-200' :
                                                            'bg-gray-100 text-gray-700 border-gray-350'
                                                        }`}
                                                    >
                                                        <option value="Pending">Pending</option>
                                                        <option value="Contacted">Contacted</option>
                                                        <option value="No Response">No Response</option>
                                                        <option value="Closed">Closed</option>
                                                    </select>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <input
                                                        type="text"
                                                        value={r.notes || ''}
                                                        placeholder="Add quick notes (e.g. Call at 5 PM)"
                                                        onChange={(e) => setRequests(prev => prev.map(item => item._id === r._id ? { ...item, notes: e.target.value } : item))}
                                                        onBlur={(e) => handleNotesChange(r._id, e.target.value)}
                                                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white text-xs outline-none transition-all"
                                                    />
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    <button
                                                        onClick={() => handleDelete(r._id)}
                                                        className="text-red-500 hover:bg-red-50 p-2 rounded-xl transition-all"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
