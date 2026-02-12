import React from 'react';

const Button = ({
    variant = 'primary',
    size = 'md',
    type = 'button',
    loading = false,
    disabled = false,
    fullWidth = false,
    outline = false,
    icon = null,
    iconPosition = 'left',
    children,
    className = '',
    ...props
}) => {
    const variantClasses = {
        primary: outline ? 'btn-outline-primary' : 'btn-primary',
        secondary: outline ? 'btn-outline-secondary' : 'btn-secondary',
        success: outline ? 'btn-outline-success' : 'btn-success',
        danger: outline ? 'btn-outline-danger' : 'btn-danger',
        warning: outline ? 'btn-outline-warning' : 'btn-warning',
        info: outline ? 'btn-outline-info' : 'btn-info',
        light: outline ? 'btn-outline-light' : 'btn-light',
        dark: outline ? 'btn-outline-dark' : 'btn-dark',
        link: 'btn-link',
    };

    const sizeClasses = {
        sm: 'btn-sm',
        md: '',
        lg: 'btn-lg',
    };

    const classes = [
        'btn',
        variantClasses[variant] || variantClasses.primary,
        sizeClasses[size],
        fullWidth ? 'w-100' : '',
        disabled || loading ? 'disabled' : '',
        'shadow-sm', // Add subtle shadow
        className,
    ]
        .filter(Boolean)
        .join(' ');

    // Custom inline styles for better appearance
    const buttonStyle = {
        borderRadius: '8px',
        padding:
            size === 'sm' ? '0.375rem 0.75rem' : size === 'lg' ? '0.75rem 1.5rem' : '0.5rem 1rem',
        fontWeight: '500',
        transition: 'all 0.2s ease-in-out',
        border: outline ? '1.5px solid' : 'none',
    };

    const renderContent = () => {
        if (loading) {
            return (
                <>
                    <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                    ></span>
                    {children || 'Loading...'}
                </>
            );
        }

        if (icon && iconPosition === 'left') {
            return (
                <>
                    <i className={`${icon} me-2`}></i>
                    {children}
                </>
            );
        }

        if (icon && iconPosition === 'right') {
            return (
                <>
                    {children}
                    <i className={`${icon} ms-2`}></i>
                </>
            );
        }

        if (icon && !children) {
            return <i className={icon}></i>;
        }

        return children;
    };

    return (
        <button
            type={type}
            className={classes}
            style={buttonStyle}
            disabled={disabled || loading}
            {...props}
        >
            {renderContent()}
        </button>
    );
};

export default Button;
