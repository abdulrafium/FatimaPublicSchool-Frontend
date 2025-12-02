import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import LoadingSpinner from '../../components/LoadingSpinner';

const Login = () => {
    const [activeTab, setActiveTab] = useState('student');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate network delay
        setTimeout(() => {
            setIsLoading(false);
            if (activeTab === 'admin') {
                navigate('/admin');
            } else {
                alert(`Logged in as ${activeTab}`);
            }
        }, 1500);
    };

    const tabs = [
        { id: 'student', label: 'Student', icon: GraduationCap },
        { id: 'teacher', label: 'Teacher', icon: User },
        { id: 'admin', label: 'Admin', icon: ShieldCheck },
    ];

    return (
        <div>
            <div className="mb-8">
                <h2 className="text-center text-3xl font-extrabold text-gray-900">
                    Welcome Back
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Please sign in to your account
                </p>
            </div>

            <div className="flex justify-center space-x-4 mb-8">
                {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex flex-col items-center p-4 rounded-xl transition-all duration-200 w-24 ${activeTab === tab.id
                                ? 'bg-primary text-white shadow-lg scale-105'
                                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                }`}
                        >
                            <Icon size={24} className="mb-2" />
                            <span className="text-xs font-medium">{tab.label}</span>
                        </button>
                    );
                })}
            </div>

            <motion.form
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
                onSubmit={handleLogin}
            >
                <Input
                    label={`${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} ID / Email`}
                    placeholder={activeTab === 'admin' ? 'admin@school.com' : 'Enter ID'}
                    type={activeTab === 'admin' ? 'email' : 'text'}
                    required
                    defaultValue={activeTab === 'admin' ? 'admin@school.com' : 'S-12345'}
                />
                <Input
                    label="Password"
                    type="password"
                    placeholder="••••••••"
                    required
                    defaultValue="password123"
                />

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                            Remember me
                        </label>
                    </div>

                    <div className="text-sm">
                        <a href="#" className="font-medium text-primary hover:text-secondary">
                            Forgot password?
                        </a>
                    </div>
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                    {isLoading ? (
                        <LoadingSpinner size={24} color="white" />
                    ) : (
                        `Sign in as ${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}`
                    )}
                </Button>
            </motion.form>
        </div>
    );
};

export default Login;
