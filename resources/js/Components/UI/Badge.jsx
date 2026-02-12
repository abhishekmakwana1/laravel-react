import React from 'react';

const Badge = ({
    variant = 'primary',
    size = 'md',
    pill = false,
    dot = false,
    icon = null,
    children,
    className = '',
    ...props
}) => {
    const variantClasses = {
        primary: 'badge-primary',
        secondary: 'badge-secondary',
        success: 'badge-success',
        danger: 'badge-danger',
        warning: 'badge-warning',
        info: 'badge-info',
        light: 'badge-light',
        dark: 'badge-dark',
    };

    const sizeClasses = {
        sm: 'badge-sm',
        md: '',
        lg: 'badge-lg',
    };

    const classes = [
        'badge',
        variantClasses[variant] || variantClasses.primary,
        sizeClasses[size],
        pill ? 'rounded-pill' : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <span className={classes} {...props}>
            {dot && (
                <span className="badge-dot me-1">
                    <i className="ti ti-circle-filled" style={{ fontSize: '8px' }}></i>
                </span>
            )}
            {icon && <i className={`${icon} me-1`}></i>}
            {children}
        </span>
    );
};

export default Badge;
