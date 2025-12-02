import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Star, Book, Trophy, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import statsData from '../data/stats.json';
import featuresData from '../data/features.json';
import testimonialsData from '../data/testimonials.json';
import heroImage from '../images/image.png';

const Home = () => {
    return (
        <div className="overflow-hidden bg-white">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-start pt-12 lg:pt-16 overflow-hidden bg-[#fbe8e2]">
                {/* Background Decorations */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent rounded-l-full transform translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl opacity-50 transform -translate-x-1/2 translate-y-1/2" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-left"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                whileHover={{ scale: 1.05 }}
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold text-sm uppercase tracking-wider mb-6 shadow-lg shadow-orange-500/30"
                            >
                                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                                Admissions Open 2026
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="inline-block p-4 md:p-6 rounded-[2rem] md:rounded-[2.5rem] bg-white/60 backdrop-blur-sm border border-white/40 shadow-sm hover:shadow-md transition-all duration-300 cursor-default"
                            >
                                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight font-sans whitespace-nowrap md:whitespace-normal">
                                    <span className="relative inline-block">
                                        Fatima Public
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: '100%' }}
                                            transition={{ duration: 0.8, delay: 0.5 }}
                                            className="absolute -bottom-1 md:-bottom-2 left-0 h-1 md:h-2 bg-gradient-to-r from-[#0A4D68] to-[#088395] rounded-full"
                                        />
                                    </span> <br className="hidden md:block" />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary block md:inline mt-1 md:mt-0">
                                        School
                                    </span>
                                </h1>
                            </motion.div>

                            <p className="text-base md:text-lg text-gray-900 font-medium mt-6 md:mt-8 mb-6 md:mb-8 max-w-lg leading-relaxed">
                                Nurturing Minds, Building Character, Shaping Futures. Excellence in education for a better tomorrow.
                            </p>

                            <div className="flex flex-row gap-3 md:gap-4">
                                <Link to="/admissions" className="flex-1 md:flex-none">
                                    <Button
                                        size="lg"
                                        className="w-full md:w-auto bg-gradient-to-r from-primary via-[#0A4D68] to-secondary text-white shadow-lg shadow-primary/30 border-none px-4 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-lg font-bold tracking-wide flex items-center justify-center whitespace-nowrap"
                                    >
                                        Admissions
                                        <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                                    </Button>
                                </Link>
                                <Link to="/contact" className="flex-1 md:flex-none">
                                    <button className="w-full md:w-auto flex items-center justify-center gap-2 md:gap-3 px-4 md:px-8 py-2.5 rounded-full bg-white text-primary font-bold text-sm md:text-lg tracking-wide hover:bg-gray-50 transition-colors shadow-sm border border-gray-100 group h-full">
                                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                                            <Phone className="h-4 w-4 md:h-5 md:w-5 text-primary fill-primary" />
                                        </div>
                                        <span className="whitespace-nowrap">Contact Us</span>
                                    </button>
                                </Link>
                            </div>
                        </motion.div>

                        {/* Right Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative flex justify-center items-center"
                        >
                            <div className="relative z-10 w-full max-w-lg">
                                {/* Decorative Geometric Shapes */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -z-10"
                                />
                                <div className="absolute top-10 right-0 w-64 h-64 bg-[#00B894]/10 rounded-full filter blur-3xl -z-20" />

                                {/* Triangle Shape 1 */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="absolute top-1/2 right-0 w-48 h-48 bg-[#088395] rounded-3xl transform rotate-45 -z-10 opacity-20"
                                />

                                {/* Triangle Shape 2 */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.7 }}
                                    className="absolute bottom-0 left-10 w-32 h-32 bg-[#0A4D68] rounded-3xl transform -rotate-12 -z-10 opacity-20"
                                />

                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    src={heroImage}
                                    alt="Students"
                                    className="relative z-10 w-full object-cover mask-image-gradient cursor-pointer"
                                    style={{
                                        maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                                        WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                                        filter: 'drop-shadow(30px -30px 20px rgba(0,0,0,0.25))'
                                    }}
                                />

                                {/* Floating Icons */}
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-0 left-0 bg-white p-3 rounded-2xl shadow-lg z-20"
                                >
                                    <div className="bg-yellow-100 p-2 rounded-full">
                                        <Star className="h-6 w-6 text-yellow-500 fill-yellow-500" />
                                    </div>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, 15, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute bottom-20 -right-4 bg-white p-3 rounded-2xl shadow-lg z-20"
                                >
                                    <div className="bg-blue-100 p-2 rounded-full">
                                        <Book className="h-6 w-6 text-blue-500" />
                                    </div>
                                </motion.div>

                                <motion.div
                                    animate={{ x: [0, 10, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                    className="absolute top-1/2 -left-8 bg-white p-3 rounded-2xl shadow-lg z-20"
                                >
                                    <div className="bg-green-100 p-2 rounded-full">
                                        <Trophy className="h-6 w-6 text-green-500" />
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-white relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {statsData.map((stat, index) => (
                            <motion.div
                                key={stat.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100 text-center hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.12)] transition-all duration-300 group"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">{stat.value}</div>
                                <div className="text-gray-600 font-medium text-lg group-hover:text-secondary transition-colors">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-sans">Why Choose Us?</h2>
                        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
                            We provide a holistic learning environment that fosters academic excellence and personal growth, preparing students for a bright future.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {featuresData.map((feature, index) => (
                            <motion.div
                                key={feature.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                            >
                                <Card className="p-8 h-full bg-white rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                                    <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                                        <Star className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">{feature.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-base">{feature.description}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative order-2 md:order-1"
                        >
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-100 rounded-full -z-10" />
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-100 rounded-full -z-10" />
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&q=80"
                                alt="Students studying"
                                className="rounded-3xl shadow-2xl relative z-10 w-full h-auto cursor-pointer"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-1 md:order-2"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 font-sans">Our Vision & Mission</h2>
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Trophy className="h-7 w-7 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Vision</h3>
                                        <p className="text-lg text-gray-700 leading-relaxed font-medium">
                                            To be a center of excellence in education, nurturing young minds to become responsible, ethical, and successful global citizens.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                                        <Users className="h-7 w-7 text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Mission</h3>
                                        <p className="text-lg text-gray-700 leading-relaxed font-medium">
                                            To provide quality education through innovative teaching methodologies, state-of-the-art facilities, and a supportive learning environment.
                                        </p>
                                    </div>
                                </div>
                                <Link to="/about">
                                    <Button variant="outline" className="mt-4 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 py-3 rounded-xl">Learn More About Us</Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-[#0A4D68] text-white overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl" />
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sans">What Parents Say</h2>
                        <p className="text-gray-300 max-w-2xl mx-auto">Trusted by thousands of parents for our commitment to excellence.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonialsData.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/20 transition-colors duration-300"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-14 h-14 rounded-full object-cover ring-4 ring-white/10"
                                    />
                                    <div>
                                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                                        <p className="text-accent text-sm font-medium">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-200 italic leading-relaxed">"{testimonial.content}"</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <div className="bg-gradient-to-r from-primary to-secondary rounded-[3rem] p-12 md:p-20 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full transform translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full transform -translate-x-1/2 translate-y-1/2" />

                        <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10 font-sans">Ready to Join Our Family?</h2>
                        <p className="text-xl text-gray-100 mb-10 max-w-2xl mx-auto relative z-10">
                            Admissions are open for the upcoming academic session. Apply now to secure a bright future for your child.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                            <Link to="/admissions">
                                <Button size="lg" className="bg-white text-primary hover:bg-gray-50 border-none px-10 py-4 text-lg shadow-xl">
                                    Apply Now
                                </Button>
                            </Link>
                            <Link to="/contact">
                                <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/10 px-10 py-4 text-lg">
                                    Contact Us
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
