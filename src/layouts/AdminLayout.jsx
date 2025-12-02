import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard, Users, GraduationCap, BookOpen,
    Calendar, FileText, Settings, LogOut, Menu, X
} from 'lucide-react';
import Modal from '../components/Modal';
import Button from '../components/Button';
import LoadingSpinner from '../components/LoadingSpinner';

const AdminLayout = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const menuItems = [
        { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
        { name: 'Students', path: '/admin/students', icon: Users },
        { name: 'Teachers', path: '/admin/teachers', icon: GraduationCap },
        { name: 'Classes', path: '/admin/classes', icon: BookOpen },
        { name: 'Attendance', path: '/admin/attendance', icon: Calendar },
        { name: 'Exams', path: '/admin/exams', icon: FileText },
        { name: 'Settings', path: '/admin/settings', icon: Settings },
    ];

    const handleLogout = () => {
        setIsLoading(true);
        // Simulate network delay
        setTimeout(() => {
            setIsLoading(false);
            setLogoutModalOpen(false);
            navigate('/login');
        }, 1500);
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside
                className={`${isSidebarOpen ? 'w-64' : 'w-20'
                    } bg-primary text-white transition-all duration-300 ease-in-out flex flex-col`}
            >
                <div className="p-4 flex items-center justify-between">
                    {isSidebarOpen && <span className="font-bold text-xl">Admin Panel</span>}
                    <button
                        onClick={() => setSidebarOpen(!isSidebarOpen)}
                        className="p-1 hover:bg-white/10 rounded"
                    >
                        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                <nav className="flex-1 overflow-y-auto py-4">
                    <ul className="space-y-2 px-2">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = location.pathname === item.path;
                            return (
                                <li key={item.path}>
                                    <Link
                                        to={item.path}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                            ? 'bg-white/10 text-white'
                                            : 'text-gray-300 hover:bg-white/5 hover:text-white'
                                            }`}
                                    >
                                        <Icon size={20} />
                                        {isSidebarOpen && <span>{item.name}</span>}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div className="p-4 border-t border-white/10">
                    <button
                        onClick={() => setLogoutModalOpen(true)}
                        className="flex items-center gap-3 text-gray-300 hover:text-white w-full px-4 py-2 rounded-lg hover:bg-white/5 transition-colors"
                    >
                        <LogOut size={20} />
                        {isSidebarOpen && <span>Logout</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                <header className="bg-white shadow-sm p-4 flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-800">
                        {menuItems.find(item => item.path === location.pathname)?.name || 'Dashboard'}
                    </h2>
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-primary font-bold">
                            A
                        </div>
                        <span className="text-sm font-medium text-gray-600">Admin User</span>
                    </div>
                </header>
                <div className="p-6">
                    <Outlet />
                </div>
            </main>

            {/* Logout Confirmation Modal */}
            <Modal
                isOpen={isLogoutModalOpen}
                onClose={() => !isLoading && setLogoutModalOpen(false)}
                title=""
            >
                <div className="flex flex-col items-center text-center p-4">
                    <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4">
                        <LogOut className="h-8 w-8 text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Logging Out</h3>
                    <p className="text-gray-500 mb-8 max-w-xs">
                        Are you sure you want to log out of the admin panel? You will need to login again to access.
                    </p>
                    <div className="flex gap-3 w-full">
                        <Button
                            variant="ghost"
                            onClick={() => setLogoutModalOpen(false)}
                            className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-700"
                            disabled={isLoading}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="primary"
                            onClick={handleLogout}
                            className="flex-1"
                            disabled={isLoading}
                        >
                            {isLoading ? <LoadingSpinner size={20} color="white" /> : 'Yes, Logout'}
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default AdminLayout;
