import React from 'react';

const Card = ({
    shadow = 'sm',
    border = true,
    loading = false,
    className = '',
    children,
    ...props
}) => {
    const shadowClasses = {
        none: '',
        sm: 'shadow-sm',
        md: 'shadow',
        lg: 'shadow-lg',
    };

    const classes = ['card', shadowClasses[shadow], !border ? 'border-0' : '', className]
        .filter(Boolean)
        .join(' ');

    if (loading) {
        return (
            <div className={classes} {...props}>
                <div className="card-body text-center py-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={classes} {...props}>
            {children}
        </div>
    );
};

const CardHeader = ({ className = '', children, ...props }) => (
    <div className={`card-header ${className}`} {...props}>
        {children}
    </div>
);

const CardBody = ({ className = '', children, ...props }) => (
    <div className={`card-body ${className}`} {...props}>
        {children}
    </div>
);

const CardFooter = ({ className = '', children, ...props }) => (
    <div className={`card-footer ${className}`} {...props}>
        {children}
    </div>
);

const CardTitle = ({ className = '', children, ...props }) => (
    <h5 className={`card-title mb-0 ${className}`} {...props}>
        {children}
    </h5>
);

const CardSubtitle = ({ className = '', children, ...props }) => (
    <p className={`card-subtitle text-muted mb-0 ${className}`} {...props}>
        {children}
    </p>
);

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;

export default Card;
