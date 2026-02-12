/**
 * ============================================
 * GLOBAL UTILITY FUNCTIONS
 * ============================================
 * Reusable utility functions for the entire application
 */

import { AVATAR_COLORS } from '@/Constants';

// ============================================
// AVATAR UTILITIES
// ============================================

/**
 * Generate avatar color based on name
 * @param {string} name - User's name or any string
 * @returns {string} - Color class name (e.g., 'primary', 'success')
 */
export const getAvatarColor = (name) => {
    if (!name) return AVATAR_COLORS[0];
    const index = name.charCodeAt(0) % AVATAR_COLORS.length;
    return AVATAR_COLORS[index];
};

/**
 * Get initials from name
 * @param {string} name - Full name
 * @returns {string} - Initials (max 2 characters, uppercase)
 */
export const getInitials = (name) => {
    if (!name) return '??';
    return name
        .split(' ')
        .map((word) => word[0])
        .join('')
        .toUpperCase()
        .substring(0, 2);
};

// ============================================
// DATE & TIME UTILITIES
// ============================================

/**
 * Format date to locale string
 * @param {string|Date} date - Date to format
 * @param {object} options - Intl.DateTimeFormat options
 * @param {string} locale - Locale string (default: 'en-US')
 * @returns {string} - Formatted date string
 */
export const formatDate = (date, options, locale = 'en-US') => {
    if (!date) return '';
    return new Date(date).toLocaleDateString(locale, options);
};

/**
 * Format time to locale string
 * @param {string|Date} date - Date to format
 * @param {object} options - Intl.DateTimeFormat options
 * @param {string} locale - Locale string (default: 'en-US')
 * @returns {string} - Formatted time string
 */
export const formatTime = (date, options, locale = 'en-US') => {
    if (!date) return '';
    return new Date(date).toLocaleTimeString(locale, options);
};

/**
 * Format datetime to locale string
 * @param {string|Date} date - Date to format
 * @param {object} options - Intl.DateTimeFormat options
 * @param {string} locale - Locale string (default: 'en-US')
 * @returns {string} - Formatted datetime string
 */
export const formatDateTime = (date, options, locale = 'en-US') => {
    if (!date) return '';
    const dateObj = new Date(date);
    return `${dateObj.toLocaleDateString(locale, options)} ${dateObj.toLocaleTimeString(locale, options)}`;
};

/**
 * Get relative time (e.g., "2 hours ago", "3 days ago")
 * @param {string|Date} date - Date to compare
 * @returns {string} - Relative time string
 */
export const getRelativeTime = (date) => {
    if (!date) return '';

    const now = new Date();
    const past = new Date(date);
    const diffInSeconds = Math.floor((now - past) / 1000);

    if (diffInSeconds < 60) return 'just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} days ago`;
    if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 604800)} weeks ago`;
    if (diffInSeconds < 31536000) return `${Math.floor(diffInSeconds / 2592000)} months ago`;
    return `${Math.floor(diffInSeconds / 31536000)} years ago`;
};

// ============================================
// STRING UTILITIES
// ============================================

/**
 * Capitalize first letter of string
 * @param {string} str - String to capitalize
 * @returns {string} - Capitalized string
 */
export const capitalize = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Convert string to title case
 * @param {string} str - String to convert
 * @returns {string} - Title case string
 */
export const toTitleCase = (str) => {
    if (!str) return '';
    return str.replace(
        /\w\S*/g,
        (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
};

/**
 * Truncate string with ellipsis
 * @param {string} str - String to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} - Truncated string
 */
export const truncate = (str, maxLength = 50) => {
    if (!str) return '';
    if (str.length <= maxLength) return str;
    return str.substring(0, maxLength) + '...';
};

// ============================================
// NUMBER UTILITIES
// ============================================

/**
 * Format number with commas
 * @param {number} num - Number to format
 * @returns {string} - Formatted number string
 */
export const formatNumber = (num) => {
    if (num === null || num === undefined) return '0';
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * Format currency
 * @param {number} amount - Amount to format
 * @param {string} currency - Currency code (default: 'USD')
 * @param {string} locale - Locale string (default: 'en-US')
 * @returns {string} - Formatted currency string
 */
export const formatCurrency = (amount, currency = 'USD', locale = 'en-US') => {
    if (amount === null || amount === undefined) return '$0.00';
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
    }).format(amount);
};

// ============================================
// VALIDATION UTILITIES
// ============================================

/**
 * Validate email address
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid email
 */
export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Validate phone number (basic)
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - True if valid phone
 */
export const isValidPhone = (phone) => {
    const phoneRegex = /^[\d\s\-+()]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
};

// ============================================
// ARRAY UTILITIES
// ============================================

/**
 * Remove duplicates from array
 * @param {Array} arr - Array with potential duplicates
 * @returns {Array} - Array without duplicates
 */
export const removeDuplicates = (arr) => [...new Set(arr)];

/**
 * Sort array of objects by key
 * @param {Array} arr - Array to sort
 * @param {string} key - Key to sort by
 * @param {string} order - 'asc' or 'desc' (default: 'asc')
 * @returns {Array} - Sorted array
 */
export const sortByKey = (arr, key, order = 'asc') =>
    [...arr].sort((a, b) => {
        if (order === 'asc') {
            return a[key] > b[key] ? 1 : -1;
        }
        return a[key] < b[key] ? 1 : -1;
    });

// ============================================
// OBJECT UTILITIES
// ============================================

/**
 * Deep clone an object
 * @param {Object} obj - Object to clone
 * @returns {Object} - Cloned object
 */
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

/**
 * Check if object is empty
 * @param {Object} obj - Object to check
 * @returns {boolean} - True if empty
 */
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
