import React from 'react';
import { motion } from 'framer-motion';
import { Award, History, Users, Target } from 'lucide-react';
import Card from '../components/Card';

import mhmProfile from '../images/mhm-profile.jpg';

const About = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-sans">About Fatima Public School</h1>
                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
                        A legacy of excellence, dedication, and holistic development since 1995.
                    </p>
                </motion.div>

                {/* History Section */}
                <section className="mb-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                                <History className="h-8 w-8" />
                                Our History
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                                Fatima Public School was established in 1995 with a vision to provide quality education to the community. Starting with just 50 students and 5 teachers, we have grown into a premier educational institution with over 1500 students.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Over the decades, we have consistently achieved academic excellence and have produced alumni who are serving in various prestigious positions across the globe.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80"
                                alt="School Building"
                                className="rounded-2xl shadow-xl cursor-pointer"
                            />
                        </motion.div>
                    </div>
                </section>

                {/* Principal Message */}
                <section className="mb-20">
                    <Card className="bg-white p-8 md:p-12 rounded-[2rem] shadow-lg">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="w-48 h-48 flex-shrink-0">
                                <motion.img
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                    src={mhmProfile}
                                    alt="Principal"
                                    className="w-full h-full object-cover rounded-full ring-4 ring-primary/20 cursor-pointer shadow-md"
                                />
                            </div>
                            <div className="text-center md:text-left">
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">Principal's Message</h2>
                                <h3 className="text-2xl text-primary font-bold mb-3">Engr. Dr. Muhammad Hussain Mughal</h3>
                                <motion.div
                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(10, 77, 104, 0.2)" }}
                                    className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20 cursor-default transition-colors"
                                >
                                    Assistant Professor, Sukkur IBA University
                                </motion.div>
                                <p className="text-gray-600 italic leading-relaxed text-lg">
                                    "Education is not just about academic excellence, but about character building and holistic development. At Fatima Public School, we strive to create an environment where every child feels valued and inspired to learn. We believe in nurturing the unique potential of each student."
                                </p>
                            </div>
                        </div>
                    </Card>
                </section>

                {/* Values */}
                <section>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-sans">Our Core Values</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'Excellence', icon: Award, desc: 'Striving for the highest standards in everything we do.' },
                            { title: 'Integrity', icon: Target, desc: 'Upholding honesty and strong moral principles.' },
                            { title: 'Community', icon: Users, desc: 'Fostering a sense of belonging and social responsibility.' }
                        ].map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                            >
                                <Card className="p-8 h-full bg-white rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                                    <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                                        <value.icon className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors text-center">{value.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-base text-center">{value.desc}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
