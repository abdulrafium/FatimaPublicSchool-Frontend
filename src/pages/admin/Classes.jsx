import React from 'react';
import { Plus, Edit, Trash2, Users } from 'lucide-react';
import Button from '../../components/Button';
import Card from '../../components/Card';
import classesData from '../../data/classes.json';

const Classes = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">Class Management</h1>
                <Button>
                    <Plus className="h-5 w-5 mr-2" />
                    Add Class
                </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {classesData.map((cls) => (
                    <Card key={cls.id} className="p-6 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">{cls.name}</h3>
                                <p className="text-sm text-gray-500">Teacher: {cls.teacher}</p>
                            </div>
                            <div className="flex gap-2">
                                <button className="text-gray-400 hover:text-primary">
                                    <Edit className="h-4 w-4" />
                                </button>
                                <button className="text-gray-400 hover:text-red-500">
                                    <Trash2 className="h-4 w-4" />
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-gray-600 mb-4">
                            <Users className="h-4 w-4" />
                            <span className="text-sm font-medium">{cls.students} Students</span>
                        </div>

                        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                            <div
                                className="bg-primary h-2 rounded-full"
                                style={{ width: `${(cls.students / 50) * 100}%` }}
                            />
                        </div>
                        <p className="text-xs text-gray-500 text-right">Capacity: 50</p>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Classes;
