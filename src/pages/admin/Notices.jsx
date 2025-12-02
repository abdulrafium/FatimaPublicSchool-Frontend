import React from 'react';
import { Plus, Bell, Calendar, Trash2 } from 'lucide-react';
import Button from '../../components/Button';
import Card from '../../components/Card';
import noticesData from '../../data/notices.json';

const Notices = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">Notice Board</h1>
                <Button>
                    <Plus className="h-5 w-5 mr-2" />
                    Create Notice
                </Button>
            </div>

            <div className="grid gap-6">
                {noticesData.map((notice) => (
                    <Card key={notice.id} className="p-6 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start">
                            <div className="flex gap-4">
                                <div className="bg-primary/10 p-3 rounded-lg h-fit">
                                    <Bell className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{notice.title}</h3>
                                    <p className="text-gray-600 mb-4">{notice.content}</p>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <Calendar className="h-4 w-4" />
                                        <span>Published: {notice.date}</span>
                                        <span className="mx-2">•</span>
                                        <span>To: All Students, Parents</span>
                                    </div>
                                </div>
                            </div>
                            <button className="text-gray-400 hover:text-red-500 p-2">
                                <Trash2 className="h-5 w-5" />
                            </button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Notices;
