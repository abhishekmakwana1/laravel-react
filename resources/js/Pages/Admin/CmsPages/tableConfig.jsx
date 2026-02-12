import { COMMON_LABELS } from '@/Constants';
import {
    createSerialColumn,
    createStatusColumn,
    createDateColumn,
    createActionsColumn,
} from '@/Utils/tableHelpers.jsx';
import { ROUTES } from './constants';

export const getTableColumns = (pages) => [
    createSerialColumn(pages),
    {
        name: 'Title',
        selector: (row) => row.title,
        sortable: true,
        cell: (row) => (
            <div className="d-flex align-items-center">
                <div>
                    <div className="fw-semibold">{row.title}</div>
                    <div className="text-muted small">/{row.slug}</div>
                </div>
            </div>
        ),
        minWidth: '250px',
    },
    {
        name: 'Status',
        cell: (row) => (
            <span className={`badge ${row.is_active ? 'bg-light-success' : 'bg-light-danger'}`}>
                <i className="ti ti-circle-filled f-10 me-1"></i>
                {row.is_active ? 'Active' : 'Inactive'}
            </span>
        ),
        width: '120px',
        center: true,
    },
    createDateColumn({
        field: 'created_at',
        label: 'Created',
        dateFormat: { month: 'short', day: 'numeric', year: 'numeric' },
        timeFormat: { hour: '2-digit', minute: '2-digit' },
        showTime: true,
        sortable: true,
        width: '160px',
    }),
    createActionsColumn({
        editRoute: ROUTES.CMS_PAGES_EDIT,
        deleteRoute: ROUTES.CMS_PAGES_DESTROY,
        editLabel: 'Edit Page',
        deleteLabel: 'Delete Page',
        width: '120px',
    }),
];
