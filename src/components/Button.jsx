import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className,
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden';

    const variants = {
        primary: 'bg-primary text-white shadow-lg shadow-primary/30 hover:shadow-primary/50',
        secondary: 'bg-secondary text-white shadow-lg shadow-secondary/30 hover:shadow-secondary/50',
        outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
        ghost: 'bg-transparent text-gray-700 hover:bg-gray-100',
        danger: 'bg-red-600 text-white shadow-lg shadow-red-600/30 hover:shadow-red-600/50',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-6 py-2.5 text-base',
        lg: 'px-8 py-3.5 text-lg',
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={twMerge(clsx(baseStyles, variants[variant], sizes[size], className))}
            {...props}
        >
            <span className="relative z-10 flex items-center gap-2">{children}</span>
            {variant === 'primary' && (
                <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                />
            )}
        </motion.button>
    );
};

export default Button;
