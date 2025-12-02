import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Admissions', path: '/admissions' },
        { name: 'Academics', path: '/academics' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
                            <motion.div
                                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                                className="bg-primary/5 p-2 rounded-xl"
                            >
                                <GraduationCap className="h-8 w-8 text-primary" />
                            </motion.div>
                            <div className="flex flex-col">
                                <motion.span
                                    className="font-bold text-2xl text-primary leading-none tracking-tight"
                                    whileHover={{ x: 2 }}
                                >
                                    Fatima
                                </motion.span>
                                <span className="text-xs text-secondary font-bold tracking-[0.2em] uppercase">Public School</span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="relative px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 group uppercase"
                            >
                                <span className={`relative z-10 transition-colors duration-300 ${isActive(link.path) ? 'text-primary' : 'text-gray-500 group-hover:text-primary'}`}>
                                    {link.name}
                                </span>
                                {isActive(link.path) && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute inset-0 bg-primary/5 rounded-full border border-primary/10"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                {!isActive(link.path) && (
                                    <div className="absolute inset-0 bg-gray-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-200 origin-center" />
                                )}
                            </Link>
                        ))}
                        <Link to="/login" className="ml-6">
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(10, 77, 104, 0.4)" }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-primary via-[#0A4D68] to-secondary text-white px-8 py-3 rounded-full font-bold tracking-wider shadow-lg shadow-primary/20 transition-all duration-300 border border-white/10"
                            >
                                LOGIN
                            </motion.button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-primary focus:outline-none p-2 rounded-lg hover:bg-gray-50"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${isActive(link.path)
                                        ? 'bg-primary/10 text-primary translate-x-2'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-primary hover:translate-x-2'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 mt-4 border-t border-gray-100">
                                <Link
                                    to="/login"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center bg-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-secondary transition-colors shadow-lg shadow-primary/20"
                                >
                                    Portal Login
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
