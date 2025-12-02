import React, { useState } from 'react';
import { Calendar as CalendarIcon, Check, X, Clock } from 'lucide-react';
import Button from '../../components/Button';
import Card from '../../components/Card';
import studentsData from '../../data/students.json';

const Attendance = () => {
    const [selectedClass, setSelectedClass] = useState('10th');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h1 className="text-2xl font-bold text-gray-900">Attendance Management</h1>
                <div className="flex gap-4">
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-4 py-2 border"
                    />
                    <select
                        value={selectedClass}
                        onChange={(e) => setSelectedClass(e.target.value)}
                        className="rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-4 py-2 border"
                    >
                        <option value="10th">Class 10th</option>
                        <option value="9th">Class 9th</option>
                        <option value="8th">Class 8th</option>
                    </select>
                </div>
            </div>

            <Card className="p-0 overflow-hidden">
                <div className="p-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
                    <h3 className="font-bold text-gray-700">Mark Attendance for {selectedClass}</h3>
                    <div className="flex gap-2">
                        <Button size="sm" variant="outline">Mark All Present</Button>
                        <Button size="sm">Save Attendance</Button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Roll No</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
                                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Remarks</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {studentsData.filter(s => s.class === selectedClass).map((student) => (
                                <tr key={student.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{student.rollNo}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                                        <div className="flex justify-center gap-2">
                                            <button className="p-1 rounded bg-green-100 text-green-600 hover:bg-green-200">
                                                <Check size={18} />
                                            </button>
                                            <button className="p-1 rounded bg-red-100 text-red-600 hover:bg-red-200">
                                                <X size={18} />
                                            </button>
                                            <button className="p-1 rounded bg-yellow-100 text-yellow-600 hover:bg-yellow-200">
                                                <Clock size={18} />
                                            </button>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <input
                                            type="text"
                                            placeholder="Optional"
                                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
};

export default Attendance;
