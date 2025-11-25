import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useResume } from '../context/ResumeContext';
import { LogOut, Home } from 'lucide-react';

const Layout = ({ children }) => {
    const { logout } = useResume();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div className="flex flex-col h-screen bg-gray-100 overflow-hidden font-sans">
            {/* Header */}
            <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-3 flex justify-between items-center z-10">
                <div className="flex items-center space-x-4">
                    <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                        ResumeForge
                    </Link>
                </div>
                <div className="flex items-center space-x-4">
                    <Link to="/" className="flex items-center text-gray-600 hover:text-purple-600 transition">
                        <Home size={18} className="mr-1" />
                        <span className="text-sm font-medium">Home</span>
                    </Link>
                    <button
                        onClick={handleLogout}
                        className="flex items-center text-gray-600 hover:text-red-500 transition"
                    >
                        <LogOut size={18} className="mr-1" />
                        <span className="text-sm font-medium">Logout</span>
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
                {children}
            </div>
        </div>
    );
};

export default Layout;
