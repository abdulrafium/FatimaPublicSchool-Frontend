import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AuthLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Navbar />
            <div className="flex-grow flex flex-col justify-center py-6 sm:px-6 lg:px-8">
                <div className="mt-2 w-full sm:mx-auto sm:max-w-md px-4 sm:px-0">
                    <div className="bg-white py-6 px-4 sm:py-8 sm:px-10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-2xl sm:rounded-3xl border border-gray-100 relative">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent rounded-2xl sm:rounded-3xl pointer-events-none" />
                        <div className="relative z-10">
                            <div className="mb-6 sm:mb-8">
                                <Link to="/" className="flex justify-center items-center gap-2">
                                    <GraduationCap className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
                                    <div className="flex flex-col items-center">
                                        <span className="font-bold text-xl sm:text-2xl text-primary">Fatima</span>
                                        <span className="text-[10px] sm:text-xs text-secondary font-medium tracking-wider">Public School</span>
                                    </div>
                                </Link>
                            </div>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AuthLayout;
