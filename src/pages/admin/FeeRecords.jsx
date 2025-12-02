import React from 'react';
import { Search, DollarSign, Download, AlertCircle } from 'lucide-react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Card from '../../components/Card';
import studentsData from '../../data/students.json';

const FeeRecords = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">Fee Records</h1>
                <Button>
                    <DollarSign className="h-5 w-5 mr-2" />
                    Collect Fee
                </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 bg-green-50 border-green-100">
                    <h3 className="text-green-800 font-medium">Total Collected (This Month)</h3>
                    <p className="text-2xl font-bold text-green-900 mt-2">PKR 5,250,000</p>
                </Card>
                <Card className="p-6 bg-yellow-50 border-yellow-100">
                    <h3 className="text-yellow-800 font-medium">Pending Dues</h3>
                    <p className="text-2xl font-bold text-yellow-900 mt-2">PKR 450,000</p>
                </Card>
                <Card className="p-6 bg-blue-50 border-blue-100">
                    <h3 className="text-blue-800 font-medium">Scholarships Given</h3>
                    <p className="text-2xl font-bold text-blue-900 mt-2">PKR 150,000</p>
                </Card>
            </div>

            <Card className="p-4">
                <div className="flex gap-4 mb-6">
                    <div className="flex-1">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <Input placeholder="Search student..." className="pl-10" />
                        </div>
                    </div>
                    <select className="rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-4 py-2 border">
                        <option>All Status</option>
                        <option>Paid</option>
                        <option>Pending</option>
                        <option>Overdue</option>
                    </select>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice ID</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {studentsData.slice(0, 5).map((student, index) => (
                                <tr key={student.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">INV-{2024001 + index}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.class}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">PKR 5,000</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${index % 3 === 0 ? 'bg-green-100 text-green-800' :
                                                index % 3 === 1 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                                            }`}>
                                            {index % 3 === 0 ? 'Paid' : index % 3 === 1 ? 'Pending' : 'Overdue'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-03-10</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button className="text-gray-400 hover:text-primary">
                                            <Download className="h-4 w-4" />
                                        </button>
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

export default FeeRecords;
