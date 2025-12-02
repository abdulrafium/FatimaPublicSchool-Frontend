import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';

const Contact = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We'd love to hear from you. Reach out to us for any queries or information.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="grid sm:grid-cols-2 gap-6">
                            <motion.div whileHover={{ y: -10 }}>
                                <Card className="p-6 flex flex-col items-center text-center h-full bg-white rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                                    <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                                        <MapPin className="h-8 w-8" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">Visit Us</h3>
                                    <p className="text-gray-600 text-sm">Sukkur IBA University, Airport Road, Sukkur</p>
                                </Card>
                            </motion.div>
                            <motion.div whileHover={{ y: -10 }}>
                                <Card className="p-6 flex flex-col items-center text-center h-full bg-white rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                                    <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                                        <Phone className="h-8 w-8" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">Call Us</h3>
                                    <p className="text-gray-600 text-sm">+92 71 5644000</p>
                                    <p className="text-gray-600 text-sm">+92 71 5644020</p>
                                </Card>
                            </motion.div>
                            <motion.div whileHover={{ y: -10 }}>
                                <Card className="p-6 flex flex-col items-center text-center h-full bg-white rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                                    <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                                        <Mail className="h-8 w-8" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">Email Us</h3>
                                    <p className="text-gray-600 text-sm">info@iba-suk.edu.pk</p>
                                    <p className="text-gray-600 text-sm">admissions@iba-suk.edu.pk</p>
                                </Card>
                            </motion.div>
                            <motion.div whileHover={{ y: -10 }}>
                                <Card className="p-6 flex flex-col items-center text-center h-full bg-white rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                                    <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                                        <Clock className="h-8 w-8" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">Office Hours</h3>
                                    <p className="text-gray-600 text-sm">Mon - Sat: 9:00 AM - 5:00 PM</p>
                                    <p className="text-gray-600 text-sm">Sunday: Closed</p>
                                </Card>
                            </motion.div>
                        </div>

                        {/* Map Placeholder */}
                        <Card className="h-80 bg-gray-200 flex items-center justify-center overflow-hidden relative rounded-[2rem] shadow-lg">
                            <iframe
                                src="https://maps.google.com/maps?q=Sukkur%20IBA%20University&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="School Location"
                            ></iframe>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <Card className="p-8 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-[2rem] border border-gray-100 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent pointer-events-none" />
                            <div className="relative z-10">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <Input label="Your Name" placeholder="John Doe" />
                                        <Input label="Email Address" type="email" placeholder="john@example.com" />
                                    </div>
                                    <Input label="Subject" placeholder="Inquiry about..." />
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                        <textarea
                                            rows={6}
                                            className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-4 py-2 border"
                                            placeholder="Type your message here..."
                                        />
                                    </div>
                                    <Button className="w-full" size="lg">Send Message</Button>
                                </form>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
