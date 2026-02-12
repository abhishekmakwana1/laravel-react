// ============================================
// GLOBAL CONSTANTS
// ============================================
// This file contains constants that are used across the entire application
// Organized by category for easy maintenance

// ============================================
// COMMON LABELS
// ============================================
export const COMMON_LABELS = {
    HOME: 'Home',
    DASHBOARD: 'Dashboard',
    BACK_TO_LIST: 'Back to List',
    SAVE: 'Save',
    CANCEL: 'Cancel',
    SUBMIT: 'Submit',
    DELETE: 'Delete',
    EDIT: 'Edit',
    VIEW: 'View',
    CREATE: 'Create',
    UPDATE: 'Update',
    SEARCH: 'Search',
    FILTER: 'Filter',
    EXPORT: 'Export',
    IMPORT: 'Import',
    ACTIONS: 'Actions',
    STATUS: 'Status',
    ACTIVE: 'Active',
    INACTIVE: 'Inactive',
    YES: 'Yes',
    NO: 'No',
};

// ============================================
// COMMON PLACEHOLDERS
// ============================================
export const COMMON_PLACEHOLDERS = {
    SEARCH: 'Search...',
    SELECT: 'Select...',
    ENTER_TEXT: 'Enter text...',
    SELECT_DATE: 'Select date...',
    SELECT_TIME: 'Select time...',
};

// ============================================
// COMMON ICONS (Tabler Icons)
// ============================================
export const COMMON_ICONS = {
    // Navigation
    HOME: 'ti ti-home',
    DASHBOARD: 'ti ti-dashboard',
    MENU: 'ti ti-menu-2',

    // Actions
    PLUS: 'ti ti-plus',
    EDIT: 'ti ti-edit',
    TRASH: 'ti ti-trash',
    SEARCH: 'ti ti-search',
    FILTER: 'ti ti-filter',
    DOWNLOAD: 'ti ti-download',
    UPLOAD: 'ti ti-upload',
    SAVE: 'ti ti-device-floppy',
    CLOSE: 'ti ti-x',
    CHECK: 'ti ti-check',

    // Status
    CIRCLE_FILLED: 'ti ti-circle-filled',
    ALERT: 'ti ti-alert-circle',
    INFO: 'ti ti-info-circle',
    SUCCESS: 'ti ti-circle-check',
    WARNING: 'ti ti-alert-triangle',
    ERROR: 'ti ti-circle-x',

    // Common
    LIST: 'ti ti-list',
    GRID: 'ti ti-grid-dots',
    CALENDAR: 'ti ti-calendar',
    CLOCK: 'ti ti-clock',
    EYE: 'ti ti-eye',
    EYE_OFF: 'ti ti-eye-off',
    SETTINGS: 'ti ti-settings',
    DOTS: 'ti ti-dots-vertical',
};

// ============================================
// COMMON GRADIENTS
// ============================================
export const COMMON_GRADIENTS = {
    PURPLE: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    PINK: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    BLUE: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    GREEN: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    ORANGE: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    RED: 'linear-gradient(135deg, #f857a6 0%, #ff5858 100%)',
    TEAL: 'linear-gradient(135deg, #0ba360 0%, #3cba92 100%)',
    INDIGO: 'linear-gradient(135deg, #5f72bd 0%, #9b23ea 100%)',
};

// ============================================
// DATE & TIME FORMATS
// ============================================
export const DATE_FORMATS = {
    // Date formats
    SHORT_DATE: {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    },
    LONG_DATE: {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    },
    NUMERIC_DATE: {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
    },

    // Time formats
    SHORT_TIME: {
        hour: '2-digit',
        minute: '2-digit',
    },
    LONG_TIME: {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    },

    // DateTime formats
    SHORT_DATETIME: {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    },
};

// ============================================
// AVATAR COLORS
// ============================================
export const AVATAR_COLORS = ['primary', 'success', 'warning', 'danger', 'info', 'secondary'];

// ============================================
// COMMON ROUTES
// ============================================
export const COMMON_ROUTES = {
    DASHBOARD: 'dashboard',
};

// ============================================
// TABLE DEFAULTS
// ============================================
export const TABLE_DEFAULTS = {
    PER_PAGE: 10,
    PER_PAGE_OPTIONS: [10, 25, 50, 100],
    NO_DATA_MESSAGE: 'No records found',
};

// ============================================
// VALIDATION MESSAGES
// ============================================
export const VALIDATION_MESSAGES = {
    REQUIRED: 'This field is required',
    EMAIL: 'Please enter a valid email address',
    MIN_LENGTH: 'Minimum length is',
    MAX_LENGTH: 'Maximum length is',
    NUMERIC: 'Please enter a valid number',
    CONFIRM_DELETE: 'Are you sure you want to delete this item?',
};

// ============================================
// BUTTON VARIANTS
// ============================================
export const BUTTON_VARIANTS = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    SUCCESS: 'success',
    DANGER: 'danger',
    WARNING: 'warning',
    INFO: 'info',
    LIGHT: 'light',
    DARK: 'dark',
    LINK: 'link',
};

// ============================================
// INPUT TYPES
// ============================================
export const INPUT_TYPES = {
    TEXT: 'text',
    EMAIL: 'email',
    PASSWORD: 'password',
    NUMBER: 'number',
    TEL: 'tel',
    URL: 'url',
    SEARCH: 'search',
    DATE: 'date',
    TIME: 'time',
    DATETIME: 'datetime-local',
};
