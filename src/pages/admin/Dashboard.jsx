import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Trophy, DollarSign, TrendingUp } from 'lucide-react';
import Card from '../../components/Card';
import statsData from '../../data/stats.json';

const Dashboard = () => {
    const dashboardStats = [
        { label: 'Total Students', value: '1,500', icon: Users, color: 'bg-blue-500' },
        { label: 'Total Teachers', value: '85', icon: GraduationCap, color: 'bg-green-500' },
        { label: 'Revenue (Monthly)', value: 'PKR 5.2M', icon: DollarSign, color: 'bg-yellow-500' },
        { label: 'Attendance Rate', value: '94%', icon: TrendingUp, color: 'bg-purple-500' },
    ];

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {dashboardStats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="p-6 flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                                    <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                                </div>
                                <div className={`p-3 rounded-lg text-white ${stat.color}`}>
                                    <Icon size={24} />
                                </div>
                            </Card>
                        </motion.div>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activities</h3>
                    <div className="space-y-4">
                        {[
                            { title: 'New Admission', time: '2 hours ago', desc: 'Ali Khan admitted to Class 5' },
                            { title: 'Fee Payment', time: '3 hours ago', desc: 'Fee received from Class 9 students' },
                            { title: 'Staff Meeting', time: '5 hours ago', desc: 'Monthly staff meeting scheduled' },
                            { title: 'Result Declared', time: '1 day ago', desc: 'Class 10 mid-term results published' },
                        ].map((activity, index) => (
                            <div key={index} className="flex items-start gap-3 pb-3 border-b last:border-0 last:pb-0">
                                <div className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0" />
                                <div>
                                    <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                                    <p className="text-xs text-gray-500">{activity.desc}</p>
                                    <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>

                <Card className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Upcoming Events</h3>
                    <div className="space-y-4">
                        {[
                            { title: 'Annual Sports Day', date: '25 Mar, 2024', type: 'Sports' },
                            { title: 'Parent Teacher Meeting', date: '15 Feb, 2024', type: 'Meeting' },
                            { title: 'Science Exhibition', date: '10 Apr, 2024', type: 'Academic' },
                        ].map((event, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div>
                                    <p className="text-sm font-medium text-gray-900">{event.title}</p>
                                    <p className="text-xs text-gray-500">{event.type}</p>
                                </div>
                                <div className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                                    {event.date}
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;
