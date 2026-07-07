import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, FileText, MessageSquare, Briefcase, LogOut, Menu, X, Shield, Award } from 'lucide-react';
import toast from 'react-hot-toast';
import TeamExcellent from '../assets/TeamExcellent.webp';

export default function AdminNav() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        toast.success('Logged out successfully');
        navigate('/admin-login');
    };

    const linkClass = ({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
            isActive
                ? 'bg-[#5B2D7C] text-white shadow-lg shadow-[#5B2D7C]/20'
                : 'text-gray-300 hover:bg-slate-800 hover:text-white'
        }`;

    const sidebarContent = (
        <div className="flex flex-col h-full justify-between py-6 px-4 bg-[#0B0B45] text-white">
            <div className="space-y-8">
                {/* Logo / Header */}
                <div className="flex flex-col items-center gap-2 px-4 py-3 bg-white/5 rounded-2xl border border-white/10 mx-2">
                    <img 
                        src={TeamExcellent} 
                        alt="Team Excellent Logo" 
                        className="h-10 object-contain w-auto brightness-0 invert"
                    />
                    <span className="text-[9px] text-purple-300 uppercase tracking-widest font-bold">Admin Portal</span>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col gap-2">
                    <NavLink to="/admin" end className={linkClass} onClick={() => setIsOpen(false)}>
                        <LayoutDashboard size={18} />
                        <span>Dashboard</span>
                    </NavLink>
                    <NavLink to="/admin/enrollments" className={linkClass} onClick={() => setIsOpen(false)}>
                        <Users size={18} />
                        <span>Enrollments</span>
                    </NavLink>
                    <NavLink to="/admin-login" className={linkClass} onClick={() => setIsOpen(false)}>
                        <Award size={18} />
                        <span>Marks</span>
                    </NavLink>
                    <NavLink to="/admin/blogs" className={linkClass} onClick={() => setIsOpen(false)}>
                        <FileText size={18} />
                        <span>Blogs</span>
                    </NavLink>
                    <NavLink to="/admin/reviews" className={linkClass} onClick={() => setIsOpen(false)}>
                        <MessageSquare size={18} />
                        <span>Reviews</span>
                    </NavLink>
                    <NavLink to="/admin/careers" className={linkClass} onClick={() => setIsOpen(false)}>
                        <Briefcase size={18} />
                        <span>Careers</span>
                    </NavLink>
                </nav>
            </div>

            {/* Logout button */}
            <div className="border-t border-slate-800 pt-4">
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-red-400 hover:bg-red-950/30 hover:text-red-500 transition-all"
                >
                    <LogOut size={18} />
                    <span>Logout</span>
                </button>
            </div>
        </div>
    );

    return (
        <>
            {/* Mobile Header Bar */}
            <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-[#0B0B45] text-white flex items-center justify-between px-4 z-40 border-b border-slate-800">
                <div className="flex items-center gap-2">
                    <img 
                        src={TeamExcellent} 
                        alt="Team Excellent Logo" 
                        className="h-8 object-contain w-auto bg-white/10 px-2 py-1 rounded-xl brightness-0 invert"
                    />
                    <span className="font-extrabold text-xs tracking-wider text-purple-300 uppercase">Admin</span>
                </div>
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 hover:bg-slate-800 rounded-lg text-white"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Desktop Sidebar (Always Visible) */}
            <aside className="hidden lg:block fixed top-0 left-0 bottom-0 w-64 z-50 border-r border-slate-800 bg-[#0B0B45]">
                {sidebarContent}
            </aside>

            {/* Mobile Sidebar (Drawer Overlay) */}
            {isOpen && (
                <div className="lg:hidden fixed inset-0 z-50 flex">
                    {/* Backdrop */}
                    <div 
                        className="fixed inset-0 bg-black/60 transition-opacity" 
                        onClick={() => setIsOpen(false)}
                    />
                    
                    {/* Drawer Content */}
                    <aside className="relative flex-1 flex flex-col max-w-xs w-full bg-[#0B0B45] pt-16">
                        {sidebarContent}
                    </aside>
                </div>
            )}
        </>
    );
}
