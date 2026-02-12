export const validateUser = (data, isEdit = false) => {
    const errors = {};

    // Name validation
    if (!data.name || data.name.trim() === '') {
        errors.name = 'Full name is required';
    } else if (data.name.length < 2) {
        errors.name = 'Name must be at least 2 characters';
    } else if (data.name.length > 255) {
        errors.name = 'Name must not exceed 255 characters';
    }

    // Email validation
    if (!data.email || data.email.trim() === '') {
        errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        errors.email = 'Please enter a valid email address';
    }

    if (!isEdit) {
        if (!data.password || data.password.trim() === '') {
            errors.password = 'Password is required';
        } else if (data.password.length < 8) {
            errors.password = 'Password must be at least 8 characters';
        }
    } else {
        if (data.password && data.password.length > 0) {
            if (data.password.length < 8) {
                errors.password = 'Password must be at least 8 characters';
            }
        }
    }
    if ((!isEdit && data.password) || (isEdit && data.password && data.password.length > 0)) {
        if (!data.password_confirmation || data.password_confirmation.trim() === '') {
            errors.password_confirmation = 'Please confirm your password';
        } else if (data.password !== data.password_confirmation) {
            errors.password_confirmation = 'Passwords do not match';
        }
    }
    if (!data.role || data.role.trim() === '') {
        errors.role = 'Please select a role';
    }

    return errors;
};

const useUserValidation = () => ({ validateUser });

export default useUserValidation;
