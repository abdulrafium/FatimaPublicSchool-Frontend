import React from 'react';
import { Plus, FileText, Calendar } from 'lucide-react';
import Button from '../../components/Button';
import Card from '../../components/Card';

const Exams = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">Exams & Results</h1>
                <Button>
                    <Plus className="h-5 w-5 mr-2" />
                    Schedule Exam
                </Button>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
                {/* Upcoming Exams */}
                <Card className="p-6">
                    <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        Upcoming Exams
                    </h2>
                    <div className="space-y-4">
                        {[
                            { title: 'Final Term Mathematics', class: 'Class 10', date: '2024-03-25', time: '09:00 AM' },
                            { title: 'Mid Term English', class: 'Class 9', date: '2024-03-26', time: '09:00 AM' },
                            { title: 'Science Quiz', class: 'Class 5', date: '2024-03-28', time: '10:00 AM' },
                        ].map((exam, index) => (
                            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
                                <div>
                                    <h3 className="font-bold text-gray-800">{exam.title}</h3>
                                    <p className="text-sm text-gray-500">{exam.class}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-bold text-primary">{exam.date}</p>
                                    <p className="text-xs text-gray-500">{exam.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Recent Results */}
                <Card className="p-6">
                    <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <FileText className="h-5 w-5 text-primary" />
                        Recent Results Published
                    </h2>
                    <div className="space-y-4">
                        {[
                            { title: 'Class 10 Mock Exams', date: '2024-02-15', passRate: '92%' },
                            { title: 'Class 8 Monthly Test', date: '2024-02-10', passRate: '88%' },
                            { title: 'Class 5 Science Project', date: '2024-02-05', passRate: '95%' },
                        ].map((result, index) => (
                            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
                                <div>
                                    <h3 className="font-bold text-gray-800">{result.title}</h3>
                                    <p className="text-sm text-gray-500">Published: {result.date}</p>
                                </div>
                                <div className="text-right">
                                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-bold">
                                        {result.passRate} Pass
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Button variant="outline" className="w-full mt-4">View All Results</Button>
                </Card>
            </div>
        </div>
    );
};

export default Exams;
