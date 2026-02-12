import React from 'react';

export default function Form({ children, onSubmit, className = '', ...props }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit(e);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={className} {...props} noValidate>
            {children}
        </form>
    );
}
