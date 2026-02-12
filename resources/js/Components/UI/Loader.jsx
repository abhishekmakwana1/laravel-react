import React from 'react';

const Loader = ({
    variant = 'spinner',
    size = 'md',
    overlay = false,
    text = '',
    color = 'primary',
    className = '',
}) => {
    const sizeClasses = {
        sm: 'spinner-border-sm',
        md: '',
        lg: 'spinner-border-lg',
    };

    const colorClasses = {
        primary: 'text-primary',
        secondary: 'text-secondary',
        success: 'text-success',
        danger: 'text-danger',
        warning: 'text-warning',
        info: 'text-info',
        light: 'text-light',
        dark: 'text-dark',
    };

    const renderSpinner = () => (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <div
                className={`spinner-border ${colorClasses[color]} ${sizeClasses[size]} ${className}`}
                role="status"
            >
                <span className="visually-hidden">Loading...</span>
            </div>
            {text && <p className="mt-3 mb-0 text-muted">{text}</p>}
        </div>
    );

    const renderDots = () => (
        <div className="d-flex align-items-center justify-content-center">
            <div className="spinner-grow spinner-grow-sm text-primary me-2" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div
                className="spinner-grow spinner-grow-sm text-primary me-2"
                role="status"
                style={{ animationDelay: '0.15s' }}
            >
                <span className="visually-hidden">Loading...</span>
            </div>
            <div
                className="spinner-grow spinner-grow-sm text-primary"
                role="status"
                style={{ animationDelay: '0.3s' }}
            >
                <span className="visually-hidden">Loading...</span>
            </div>
            {text && <span className="ms-3 text-muted">{text}</span>}
        </div>
    );

    const renderBars = () => (
        <div className="d-flex align-items-center justify-content-center">
            <div
                className="spinner-border text-primary me-2"
                role="status"
                style={{ width: '1rem', height: '1rem', borderWidth: '0.15em' }}
            >
                <span className="visually-hidden">Loading...</span>
            </div>
            {text && <span className="text-muted">{text}</span>}
        </div>
    );

    const renderLoader = () => {
        switch (variant) {
            case 'dots':
                return renderDots();
            case 'bars':
                return renderBars();
            case 'spinner':
            default:
                return renderSpinner();
        }
    };

    if (overlay) {
        return (
            <div
                className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-white bg-opacity-75"
                style={{ zIndex: 9999 }}
            >
                {renderLoader()}
            </div>
        );
    }

    return renderLoader();
};

export default Loader;
