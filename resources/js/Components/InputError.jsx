import React from 'react';

const InputError = ({ message, className = '', ...props }) => {
    if (!message) {
        return null;
    }

    return (
        <div className={`invalid-feedback d-block ${className}`} {...props}>
            {message}
        </div>
    );
};

export default InputError;
