import React, { forwardRef } from 'react';

const Select = forwardRef(
    (
        {
            label = '',
            error = '',
            helpText = '',
            placeholder = 'Select an option',
            options = [],
            required = false,
            disabled = false,
            className = '',
            containerClassName = '',
            value = '',
            ...props
        },
        ref
    ) => {
        const selectId = props.id || `select-${Math.random().toString(36).substr(2, 9)}`;
        const hasError = !!error;

        const selectClasses = ['form-select', hasError ? 'is-invalid' : '', className]
            .filter(Boolean)
            .join(' ');

        return (
            <div className={`form-group mb-3 ${containerClassName}`}>
                {label && (
                    <label htmlFor={selectId} className="form-label">
                        {label}
                        {required && <span className="text-danger ms-1">*</span>}
                    </label>
                )}

                <select
                    ref={ref}
                    id={selectId}
                    className={selectClasses}
                    disabled={disabled}
                    required={required}
                    value={value}
                    aria-describedby={
                        error ? `${selectId}-error` : helpText ? `${selectId}-help` : undefined
                    }
                    aria-invalid={hasError}
                    {...props}
                >
                    {placeholder && (
                        <option value="" disabled>
                            {placeholder}
                        </option>
                    )}
                    {options.map((option, index) => (
                        <option
                            key={option.value || index}
                            value={option.value}
                            disabled={option.disabled}
                        >
                            {option.label}
                        </option>
                    ))}
                </select>

                {error && (
                    <div id={`${selectId}-error`} className="invalid-feedback d-block">
                        {error}
                    </div>
                )}

                {helpText && !error && (
                    <div id={`${selectId}-help`} className="form-text">
                        {helpText}
                    </div>
                )}
            </div>
        );
    }
);

Select.displayName = 'Select';

export default Select;
