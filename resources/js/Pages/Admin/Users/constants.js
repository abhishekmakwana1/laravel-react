import { COMMON_ROUTES } from '@/Constants';
export const PAGE_TITLES = {
    INDEX: 'User Management',
    CREATE: 'Create User',
    EDIT_PREFIX: 'Edit User',
};

export const PAGE_SUBTITLES = {
    INDEX: 'Manage and organize your users',
};
export const BREADCRUMBS = {
    USER_MANAGEMENT: 'User Management',
    USER_LIST: 'User List',
    CREATE_USER: 'Create User',
    EDIT_USER: 'Edit User',
};

export const CARD_TITLES = {
    USER_DETAILS: 'User Details',
    USER_LIST: 'User List',
};

export const CARD_SUBTITLES = {
    USER_LIST: 'Manage your users and their accounts',
};
export const STATS_LABELS = {
    TOTAL_USERS: 'Total Users',
    ACTIVE_USERS: 'Active Users',
    NEW_THIS_MONTH: 'New This Month',
};
export const PLACEHOLDERS = {
    USER_CREATION_FORM: 'This is a placeholder for the User Creation form.',
};

export const ICONS = {
    USERS: 'ti ti-users',
    USER_CHECK: 'ti ti-user-check',
    USER_PLUS: 'ti ti-user-plus',
};
export const ROUTES = {
    ...COMMON_ROUTES,
    USERS_INDEX: 'users.index',
    USERS_CREATE: 'users.create',
    USERS_STORE: 'users.store',
    USERS_EDIT: 'users.edit',
    USERS_UPDATE: 'users.update',
    USERS_DESTROY: 'users.destroy',
};
