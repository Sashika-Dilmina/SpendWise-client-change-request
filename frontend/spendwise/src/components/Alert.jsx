import React from 'react';

const Alert = ({ message, type = 'info', icon: Icon }) => {
    const styles = {
        error: 'bg-red-50 border-red-200 text-red-800',
        success: 'bg-green-50 border-green-200 text-green-800',
        info: 'bg-blue-50 border-blue-200 text-blue-800',
        warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    };

    const iconStyles = {
        error: 'bg-red-500',
        success: 'bg-green-500',
        info: 'bg-blue-500',
        warning: 'bg-yellow-500',
    };

    return (
        <div className={`flex items-center gap-4 border p-4 rounded-2xl mb-6 shadow-sm ${styles[type] || styles.info}`}>
            {Icon && (
                <div className={`w-10 h-10 flex items-center justify-center text-white rounded-full shadow-md ${iconStyles[type] || iconStyles.info}`}>
                    <Icon size={20} />
                </div>
            )}
            <p className="font-medium text-sm md:text-base">
                {message}
            </p>
        </div>
    );
};

export default Alert;
