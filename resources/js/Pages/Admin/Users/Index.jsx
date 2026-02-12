import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import React from 'react';
import DataTableComponent from '@/Components/UI/DataTable';
import PageHeader from '@/Components/UI/PageHeader';
import { COMMON_ICONS, COMMON_LABELS, COMMON_GRADIENTS } from '@/Constants';
import {
    PAGE_TITLES,
    PAGE_SUBTITLES,
    BREADCRUMBS,
    CARD_TITLES,
    CARD_SUBTITLES,
    STATS_LABELS,
    ICONS,
    ROUTES,
} from './constants';
import { getTableColumns } from './tableConfig';

export default function Index({ users, filters, stats }) {
    const columns = getTableColumns(users);

    return (
        <AdminLayout>
            <Head title={PAGE_TITLES.INDEX} />

            <PageHeader
                title={PAGE_TITLES.INDEX}
                subtitle={PAGE_SUBTITLES.INDEX}
                icon={ICONS.USERS}
                breadcrumbs={[
                    { label: 'Home', href: route(ROUTES.DASHBOARD), icon: COMMON_ICONS.HOME },
                    { label: PAGE_TITLES.INDEX, href: route(ROUTES.USERS_INDEX) },
                    { label: BREADCRUMBS.USER_LIST, active: true },
                ]}
            />

            <div className="row mb-4">
                <div className="col-md-4 col-sm-6 mb-3">
                    <div
                        className="card shadow-sm"
                        style={{ background: COMMON_GRADIENTS.PURPLE, border: 'none' }}
                    >
                        <div className="card-body py-3">
                            <div className="d-flex align-items-center">
                                <div className="avtar avtar-l bg-white bg-opacity-25 flex-shrink-0">
                                    <i className={`${ICONS.USERS} text-white f-24`}></i>
                                </div>
                                <div className="ms-3 flex-grow-1">
                                    <p className="mb-1 text-white text-opacity-75 fw-medium">
                                        {STATS_LABELS.TOTAL_USERS}
                                    </p>
                                    <h3 className="mb-0 text-white fw-bold">{stats.total}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 mb-3">
                    <div
                        className="card shadow-sm"
                        style={{ background: COMMON_GRADIENTS.PINK, border: 'none' }}
                    >
                        <div className="card-body py-3">
                            <div className="d-flex align-items-center">
                                <div className="avtar avtar-l bg-white bg-opacity-25 flex-shrink-0">
                                    <i className={`${ICONS.USER_CHECK} text-white f-24`}></i>
                                </div>
                                <div className="ms-3 flex-grow-1">
                                    <p className="mb-1 text-white text-opacity-75 fw-medium">
                                        {STATS_LABELS.ACTIVE_USERS}
                                    </p>
                                    <h3 className="mb-0 text-white fw-bold">{stats.active}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 mb-3">
                    <div
                        className="card shadow-sm"
                        style={{ background: COMMON_GRADIENTS.BLUE, border: 'none' }}
                    >
                        <div className="card-body py-3">
                            <div className="d-flex align-items-center">
                                <div className="avtar avtar-l bg-white bg-opacity-25 flex-shrink-0">
                                    <i className={`${ICONS.USER_PLUS} text-white f-24`}></i>
                                </div>
                                <div className="ms-3 flex-grow-1">
                                    <p className="mb-1 text-white text-opacity-75 fw-medium">
                                        {STATS_LABELS.NEW_THIS_MONTH}
                                    </p>
                                    <h3 className="mb-0 text-white fw-bold">
                                        {stats.new_this_month}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12">
                    <div className="card shadow-sm">
                        <div className="card-header bg-white border-bottom px-4 py-3">
                            <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                                <div>
                                    <h5 className="mb-1 fw-semibold">
                                        <i className={`${COMMON_ICONS.LIST} me-2 text-primary`}></i>
                                        {CARD_TITLES.USER_LIST}
                                    </h5>
                                    <small className="text-muted">{CARD_SUBTITLES.USER_LIST}</small>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <Link
                                        href={route(ROUTES.USERS_CREATE)}
                                        className="d-inline-flex align-items-center justify-content-center gap-2 px-4 py-2 bg-gradient-to-r from-[#4facfe] to-[#00f2fe] text-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 transform active:scale-95 text-decoration-none fw-semibold border-0"
                                        style={{ height: '38px', whiteSpace: 'nowrap' }}
                                    >
                                        <i className={`${COMMON_ICONS.PLUS} f-18`}></i>
                                        Add User
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="card-body pt-3">
                            <DataTableComponent
                                columns={columns}
                                data={Array.isArray(users) ? users : users?.data || []}
                                pagination
                                paginationServer={false}
                                searchPlaceholder={COMMON_LABELS.SEARCH + ' users...'}
                                searchValue=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
