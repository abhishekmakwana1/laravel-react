import { COMMON_LABELS } from '@/Constants';
import {
    createSerialColumn,
    createUserColumn,
    createStatusColumn,
    createDateColumn,
    createActionsColumn,
} from '@/Utils/tableHelpers.jsx';
import { ROUTES } from './constants';
export const getTableColumns = (users) => [
    createSerialColumn(users),
    createUserColumn({
        nameField: 'name',
        emailField: 'email',
        label: 'User',
        sortable: true,
        minWidth: '250px',
    }),
    createStatusColumn({
        field: 'status',
        label: COMMON_LABELS.STATUS,
        statusMap: {
            active: { label: COMMON_LABELS.ACTIVE, class: 'bg-light-success' },
            inactive: { label: COMMON_LABELS.INACTIVE, class: 'bg-light-danger' },
        },
        width: '120px',
    }),
    createDateColumn({
        field: 'created_at',
        label: 'Joined Date',
        dateFormat: { month: 'short', day: 'numeric', year: 'numeric' },
        timeFormat: { hour: '2-digit', minute: '2-digit' },
        showTime: true,
        sortable: true,
        width: '160px',
    }),
    createActionsColumn({
        editRoute: ROUTES.USERS_EDIT,
        deleteRoute: ROUTES.USERS_DESTROY,
        editLabel: 'Edit User',
        deleteLabel: 'Delete User',
        width: '120px',
    }),
];
