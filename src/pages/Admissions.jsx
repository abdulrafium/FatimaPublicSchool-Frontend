import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, FileText, Calendar } from 'lucide-react';
import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';

const Admissions = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-8 sm:py-12 overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-10 sm:mb-16"
                >
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Admissions</h1>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                        Join our community of learners. Apply now for the upcoming academic session.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Information Section */}
                    <div className="space-y-8">
                        <section>
                            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                                <FileText className="h-5 w-5 sm:h-6 sm:w-6" />
                                Admission Procedure
                            </h2>
                            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm space-y-4">
                                {[
                                    'Submit the online admission form or visit the school office.',
                                    'Schedule an entrance test and interview.',
                                    'Submit required documents upon selection.',
                                    'Pay the admission fee to confirm the seat.'
                                ].map((step, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                                            {index + 1}
                                        </div>
                                        <p className="text-gray-700 text-sm sm:text-base">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6" />
                                Requirements
                            </h2>
                            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
                                <ul className="space-y-3">
                                    {[
                                        'Birth Certificate (Copy)',
                                        'Previous School Leaving Certificate',
                                        '2 Passport size photographs',
                                        'CNIC copy of parents'
                                    ].map((req, index) => (
                                        <li key={index} className="flex items-center gap-2 text-gray-700 text-sm sm:text-base">
                                            <div className="w-2 h-2 bg-accent rounded-full" />
                                            {req}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">Fee Structure</h2>
                            <div className="bg-white rounded-xl shadow-sm overflow-hidden overflow-x-auto w-full">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                                            <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Admission Fee</th>
                                            <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Monthly Fee</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {[
                                            { class: 'Nursery - Prep', admission: '15,000', monthly: '5,000' },
                                            { class: 'Class 1 - 5', admission: '20,000', monthly: '6,000' },
                                            { class: 'Class 6 - 8', admission: '25,000', monthly: '7,000' },
                                            { class: 'Class 9 - 10', admission: '30,000', monthly: '8,000' },
                                        ].map((row, index) => (
                                            <tr key={index}>
                                                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.class}</td>
                                                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">PKR {row.admission}</td>
                                                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">PKR {row.monthly}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </div>

                    {/* Form Section */}
                    <div>
                        <Card className="p-4 sm:p-6 lg:p-8 sticky top-24">
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Online Admission Inquiry</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Input label="Student Name" placeholder="Enter student name" />
                                    <Input label="Date of Birth" type="date" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Input label="Father's Name" placeholder="Enter father's name" />
                                    <Input label="Phone Number" placeholder="0300-1234567" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Class Applying For</label>
                                    <select className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-4 py-2 border">
                                        <option>Select Class</option>
                                        <option>Nursery</option>
                                        <option>Prep</option>
                                        <option>Class 1</option>
                                        <option>Class 2</option>
                                        <option>Class 3</option>
                                        <option>Class 4</option>
                                        <option>Class 5</option>
                                        <option>Class 6</option>
                                        <option>Class 7</option>
                                        <option>Class 8</option>
                                        <option>Class 9</option>
                                        <option>Class 10</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Previous School (if any)</label>
                                    <input className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-4 py-2 border" placeholder="School name" />
                                </div>
                                <Button className="w-full" size="lg">Submit Inquiry</Button>
                            </form>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admissions;
