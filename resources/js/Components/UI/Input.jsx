import React, { forwardRef } from 'react';

const Input = forwardRef(
    (
        {
            type = 'text',
            label = '',
            error = '',
            helpText = '',
            placeholder = '',
            icon = null,
            iconPosition = 'left',
            maxLength = null,
            showCharCount = false,
            required = false,
            disabled = false,
            className = '',
            containerClassName = '',
            value = '',
            ...props
        },
        ref
    ) => {
        const inputId = props.id || `input-${Math.random().toString(36).substr(2, 9)}`;
        const hasError = !!error;
        const currentLength = value?.toString().length || 0;

        const inputClasses = [
            'form-control',
            hasError ? 'is-invalid' : '',
            icon && !hasError ? (iconPosition === 'left' ? 'ps-5' : 'pe-5') : '',
            hasError ? 'pe-5' : '', // Add padding for error icon
            className,
        ]
            .filter(Boolean)
            .join(' ');

        return (
            <div className={`form-group mb-3 ${containerClassName}`}>
                {label && (
                    <label htmlFor={inputId} className="form-label">
                        {label}
                        {required && <span className="text-danger ms-1">*</span>}
                    </label>
                )}

                <div className="position-relative">
                    {icon && iconPosition === 'left' && !hasError && (
                        <i
                            className={`${icon} position-absolute top-50 translate-middle-y ms-3 text-muted`}
                            style={{ left: '0', zIndex: 10 }}
                        ></i>
                    )}

                    <input
                        ref={ref}
                        type={type}
                        id={inputId}
                        className={inputClasses}
                        placeholder={placeholder}
                        disabled={disabled}
                        maxLength={maxLength}
                        value={value}
                        aria-describedby={
                            error ? `${inputId}-error` : helpText ? `${inputId}-help` : undefined
                        }
                        aria-invalid={hasError}
                        {...props}
                    />

                    {/* Error Icon - Always show on right when there's an error */}
                    {hasError && (
                        <i
                            className="ti ti-alert-circle position-absolute text-danger"
                            style={{
                                right: '12px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                zIndex: 10,
                                fontSize: '1.25rem',
                                pointerEvents: 'none',
                            }}
                        ></i>
                    )}

                    {/* Regular icon on right (only if no error) */}
                    {icon && iconPosition === 'right' && !hasError && (
                        <i
                            className={`${icon} position-absolute top-50 translate-middle-y me-3 text-muted`}
                            style={{ right: '0', zIndex: 10 }}
                        ></i>
                    )}
                </div>

                {showCharCount && maxLength && (
                    <div className="form-text text-end">
                        {currentLength}/{maxLength}
                    </div>
                )}

                {error && (
                    <div
                        id={`${inputId}-error`}
                        className="text-danger small mt-1"
                        style={{ fontSize: '0.875rem' }}
                    >
                        {error}
                    </div>
                )}

                {helpText && !error && (
                    <div id={`${inputId}-help`} className="form-text">
                        {helpText}
                    </div>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';

export default Input;
