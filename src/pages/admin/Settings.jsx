import React from 'react';
import { Save, User, Lock, Bell, Globe } from 'lucide-react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Card from '../../components/Card';

const Settings = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Settings</h1>

            <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1 space-y-2">
                    {['General', 'Security', 'Notifications', 'Appearance'].map((item, index) => (
                        <button
                            key={item}
                            className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${index === 0 ? 'bg-primary text-white' : 'bg-white text-gray-600 hover:bg-gray-50'
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                <div className="lg:col-span-2 space-y-6">
                    <Card className="p-6">
                        <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <User className="h-5 w-5 text-primary" />
                            Profile Settings
                        </h2>
                        <form className="space-y-6">
                            <div className="flex items-center gap-6 mb-6">
                                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold text-gray-500">
                                    A
                                </div>
                                <Button variant="outline" size="sm">Change Avatar</Button>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <Input label="First Name" defaultValue="Admin" />
                                <Input label="Last Name" defaultValue="User" />
                                <Input label="Email" defaultValue="admin@fatimapublicschool.edu.pk" type="email" />
                                <Input label="Phone" defaultValue="+92 300 1234567" />
                            </div>

                            <div className="pt-4 border-t">
                                <Button>
                                    <Save className="h-4 w-4 mr-2" />
                                    Save Changes
                                </Button>
                            </div>
                        </form>
                    </Card>

                    <Card className="p-6">
                        <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <Lock className="h-5 w-5 text-primary" />
                            Change Password
                        </h2>
                        <form className="space-y-6">
                            <Input label="Current Password" type="password" />
                            <Input label="New Password" type="password" />
                            <Input label="Confirm New Password" type="password" />

                            <div className="pt-4 border-t">
                                <Button>Update Password</Button>
                            </div>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Settings;
