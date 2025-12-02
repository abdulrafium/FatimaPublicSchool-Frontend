import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, GraduationCap } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* School Info */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <GraduationCap className="h-8 w-8 text-accent" />
                            <span className="font-bold text-xl">Fatima Public School</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Empowering students with knowledge, character, and skills for a bright future. Excellence in education since 1995.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-accent">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/admissions" className="text-gray-400 hover:text-white transition-colors">Admissions</Link></li>
                            <li><Link to="/academics" className="text-gray-400 hover:text-white transition-colors">Academics</Link></li>
                            <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-accent">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin size={20} className="text-accent mt-1 flex-shrink-0" />
                                <span>Sukkur IBA University Sindh, Pakistan</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone size={20} className="text-accent flex-shrink-0" />
                                <span>+92 333 3886321</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail size={20} className="text-accent flex-shrink-0" />
                                <span>info@fatimapublicschool.edu.pk</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-accent">Newsletter</h3>
                        <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for latest updates and news.</p>
                        <form className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                            />
                            <button className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-lg transition-colors font-medium">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Fatima Public School. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
