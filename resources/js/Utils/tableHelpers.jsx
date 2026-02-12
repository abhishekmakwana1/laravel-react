import React from 'react';
import { Link, router } from '@inertiajs/react';
import { COMMON_ICONS, COMMON_LABELS } from '@/Constants';
import { getAvatarColor, getInitials, formatDate, formatTime } from '@/Utils';

export const createSerialColumn = (paginationData, label = COMMON_LABELS.ACTIONS) => ({
    name: label === COMMON_LABELS.ACTIONS ? '#' : label,
    selector: (row, index) => {
        const { current_page = 1, per_page = 10 } = paginationData;
        return index + 1 + (current_page - 1) * per_page;
    },
    width: '80px',
    sortable: false,
    center: true,
});

export const createUserColumn = (options = {}) => {
    const {
        nameField = 'name',
        emailField = 'email',
        label = 'User',
        sortable = true,
        minWidth = '250px',
    } = options;

    return {
        name: label,
        cell: (row) => (
            <div className="d-flex align-items-center py-2" style={{ minWidth: '200px' }}>
                <div
                    className={`avtar avtar-s bg-light-${getAvatarColor(row[nameField])} me-3 flex-shrink-0`}
                >
                    <span className={`text-${getAvatarColor(row[nameField])} f-16 fw-bold`}>
                        {getInitials(row[nameField])}
                    </span>
                </div>
                <div className="flex-grow-1" style={{ minWidth: 0 }}>
                    <h6 className="mb-1 fw-semibold" style={{ wordBreak: 'break-word' }}>
                        {row[nameField]}
                    </h6>
                    <small className="text-muted d-block" style={{ wordBreak: 'break-all' }}>
                        {row[emailField]}
                    </small>
                </div>
            </div>
        ),
        sortable,
        sortField: nameField,
        grow: 2,
        minWidth,
    };
};

export const createStatusColumn = (options = {}) => {
    const {
        field = 'status',
        label = COMMON_LABELS.STATUS,
        statusMap = {
            active: { label: 'Active', class: 'bg-light-success' },
            inactive: { label: 'Inactive', class: 'bg-light-danger' },
        },
        width = '120px',
    } = options;

    return {
        name: label,
        cell: (row) => {
            const status = row[field] || 'active';
            const statusConfig = statusMap[status] || statusMap.active;

            return (
                <span className={`badge ${statusConfig.class}`}>
                    <i className={`${COMMON_ICONS.CIRCLE_FILLED} f-10 me-1`}></i>
                    {statusConfig.label}
                </span>
            );
        },
        width,
        center: true,
    };
};
export const createDateColumn = (options = {}) => {
    const {
        field = 'created_at',
        label = 'Date',
        dateFormat = { month: 'short', day: 'numeric', year: 'numeric' },
        timeFormat = { hour: '2-digit', minute: '2-digit' },
        showTime = true,
        sortable = true,
        width = '160px',
    } = options;

    return {
        name: label,
        cell: (row) => (
            <div>
                <div className="text-body">{formatDate(row[field], dateFormat)}</div>
                {showTime && (
                    <small className="text-muted">{formatTime(row[field], timeFormat)}</small>
                )}
            </div>
        ),
        sortable,
        sortField: field,
        width,
    };
};

export const createActionsColumn = (options = {}) => {
    const {
        editRoute = null,
        deleteRoute = null,
        editLabel = COMMON_LABELS.EDIT,
        deleteLabel = COMMON_LABELS.DELETE,
        customActions = [],
        width = '120px',
    } = options;

    return {
        name: COMMON_LABELS.ACTIONS,
        cell: (row) => (
            <div className="d-flex gap-2">
                {editRoute && (
                    <Link
                        href={route(editRoute, row.id)}
                        className="avtar avtar-xs btn-link-secondary"
                        title={editLabel}
                    >
                        <i className={`${COMMON_ICONS.EDIT} f-18`}></i>
                    </Link>
                )}

                {deleteRoute && (
                    <button
                        className="avtar avtar-xs btn-link-danger border-0 bg-transparent"
                        title={deleteLabel}
                        onClick={() => handleDelete(row, deleteRoute)}
                    >
                        <i className={`${COMMON_ICONS.TRASH} f-18`}></i>
                    </button>
                )}

                {customActions.map((action, index) => (
                    <React.Fragment key={index}>{action(row)}</React.Fragment>
                ))}
            </div>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
        width,
        center: true,
    };
};

/**
 * Handle delete action with toast confirmation
 * Import this function along with toast in your component
 * @param {object} row - Row data
 * @param {string} deleteRoute - Route name for deletion
 */
export const handleDelete = async (row, deleteRoute) => {
    const { default: toast } = await import('react-hot-toast');

    // Show confirmation toast
    toast(
        (t) => (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'start',
                    gap: '12px',
                    minWidth: '350px',
                }}
            >
                {/* Icon */}
                <div
                    style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: '#fee2e2',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                    }}
                >
                    <i
                        className="ti ti-alert-triangle"
                        style={{
                            fontSize: '20px',
                            color: '#dc2626',
                        }}
                    ></i>
                </div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                    <h6
                        style={{
                            margin: '0 0 4px 0',
                            fontSize: '15px',
                            fontWeight: '600',
                            color: '#1f2937',
                        }}
                    >
                        Delete {row.name}?
                    </h6>
                    <p
                        style={{
                            margin: '0 0 12px 0',
                            fontSize: '13px',
                            color: '#6b7280',
                            lineHeight: '1.4',
                        }}
                    >
                        This action cannot be undone
                    </p>

                    {/* Buttons */}
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <button
                            className="btn btn-sm btn-danger"
                            style={{
                                padding: '6px 16px',
                                fontSize: '13px',
                                fontWeight: '500',
                            }}
                            onClick={() => {
                                toast.dismiss(t.id);

                                // Show loading toast
                                const loadingToast = toast.loading('Deleting...', {
                                    style: {
                                        padding: '12px 16px',
                                    },
                                });

                                // Perform deletion
                                router.delete(route(deleteRoute, row.id), {
                                    onSuccess: () => {
                                        toast.dismiss(loadingToast);
                                        toast.success('Deleted successfully!', {
                                            duration: 3000,
                                            style: {
                                                padding: '12px 16px',
                                            },
                                        });
                                    },
                                    onError: () => {
                                        toast.dismiss(loadingToast);
                                        toast.error('Failed to delete', {
                                            duration: 3000,
                                            style: {
                                                padding: '12px 16px',
                                            },
                                        });
                                    },
                                });
                            }}
                        >
                            Delete
                        </button>
                        <button
                            className="btn btn-sm btn-light"
                            style={{
                                padding: '6px 16px',
                                fontSize: '13px',
                                fontWeight: '500',
                                border: '1px solid #e5e7eb',
                            }}
                            onClick={() => toast.dismiss(t.id)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        ),
        {
            duration: Infinity,
            style: {
                padding: '16px',
                maxWidth: '450px',
            },
        }
    );
};

// ============================================
// PAGINATION HELPERS
// ============================================

/**
 * Create pagination change handler
 * @param {string} routeName - Route name for navigation
 * @param {object} additionalParams - Additional query parameters
 * @returns {function} - Page change handler
 */
export const createPageChangeHandler =
    (routeName, additionalParams = {}) =>
    (page) => {
        router.get(
            route(routeName),
            {
                page,
                ...additionalParams,
            },
            {
                preserveState: true,
                preserveScroll: true,
            }
        );
    };

/**
 * Create rows per page change handler
 * @param {string} routeName - Route name for navigation
 * @param {object} additionalParams - Additional query parameters
 * @returns {function} - Rows per page change handler
 */
export const createPerRowsChangeHandler =
    (routeName, additionalParams = {}) =>
    (newPerPage, page) => {
        router.get(
            route(routeName),
            {
                per_page: newPerPage,
                page,
                ...additionalParams,
            },
            {
                preserveState: true,
                preserveScroll: true,
            }
        );
    };

/**
 * Create search handler
 * @param {string} routeName - Route name for navigation
 * @param {function} setSearchTerm - State setter for search term
 * @param {object} additionalParams - Additional query parameters
 * @returns {function} - Search handler
 */
export const createSearchHandler =
    (routeName, setSearchTerm, additionalParams = {}) =>
    (value) => {
        setSearchTerm(value);
        router.get(
            route(routeName),
            {
                search: value,
                ...additionalParams,
            },
            {
                preserveState: true,
                preserveScroll: true,
            }
        );
    };
