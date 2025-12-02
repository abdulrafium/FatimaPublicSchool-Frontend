import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Beaker, Monitor, Award } from 'lucide-react';
import Card from '../components/Card';

const Academics = () => {
    return (
        <div className="bg-white min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Academics</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Providing a comprehensive curriculum that balances academic rigor with creative exploration.
                    </p>
                </motion.div>

                {/* Levels */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Academic Levels</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'Pre-Primary', classes: 'Nursery - Prep', desc: 'Focus on foundational skills, motor development, and social interaction through play-based learning.' },
                            { title: 'Primary', classes: 'Class 1 - 5', desc: 'Building core competencies in literacy, numeracy, and critical thinking with a broad curriculum.' },
                            { title: 'Secondary', classes: 'Class 6 - 10', desc: 'Advanced subject specialization, preparation for board exams, and career guidance.' }
                        ].map((level, index) => (
                            <motion.div
                                key={level.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="p-8 h-full border-t-4 border-t-primary hover:shadow-lg transition-shadow">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{level.title}</h3>
                                    <span className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium mb-4">
                                        {level.classes}
                                    </span>
                                    <p className="text-gray-600">{level.desc}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Methodology */}
                <section className="mb-20 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Teaching Methodology</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { title: 'Interactive Learning', icon: Monitor, desc: 'Using smart boards and digital resources.' },
                                { title: 'Practical Focus', icon: Beaker, desc: 'Hands-on experiments in science labs.' },
                                { title: 'Student Centered', icon: BookOpen, desc: 'Personalized attention to each student.' },
                                { title: 'Holistic Growth', icon: Award, desc: 'Emphasis on sports and co-curriculars.' }
                            ].map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    className="text-center group"
                                    whileHover={{ y: -10 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                                        <item.icon className="h-10 w-10" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-accent transition-colors">{item.title}</h3>
                                    <p className="text-gray-600 text-base leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Achievements */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Recent Achievements</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div whileHover={{ y: -10 }}>
                            <Card className="p-8 flex gap-6 items-start h-full bg-white rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                                <div className="bg-yellow-100 p-4 rounded-2xl text-yellow-600 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                                    <Award className="h-10 w-10" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">100% Result in Matric Board</h3>
                                    <p className="text-gray-600 leading-relaxed">Our students secured 100% pass percentage in the recent BISE annual examinations, with 15 students securing A+ grade.</p>
                                </div>
                            </Card>
                        </motion.div>
                        <motion.div whileHover={{ y: -10 }}>
                            <Card className="p-8 flex gap-6 items-start h-full bg-white rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                                <div className="bg-blue-100 p-4 rounded-2xl text-blue-600 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                                    <Award className="h-10 w-10" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">District Science Fair Winners</h3>
                                    <p className="text-gray-600 leading-relaxed">Our science team won the 1st prize in the inter-school science exhibition for their project on renewable energy.</p>
                                </div>
                            </Card>
                        </motion.div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Academics;
