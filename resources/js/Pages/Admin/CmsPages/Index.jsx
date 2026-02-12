import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import React from 'react';
import DataTableComponent from '@/Components/UI/DataTable';
import PageHeader from '@/Components/UI/PageHeader';
import Button from '@/Components/UI/Button';
import Badge from '@/Components/UI/Badge';
import Card from '@/Components/UI/Card';
import { COMMON_ICONS, COMMON_GRADIENTS } from '@/Constants';
import { PAGE_TITLES, PAGE_SUBTITLES, BREADCRUMBS, STATS_LABELS, ICONS, ROUTES } from './constants';
import { getTableColumns } from './tableConfig';

export default function Index({ pages, filters, stats }) {
    const columns = getTableColumns(pages);

    const { total, active, inactive } = stats;

    return (
        <AdminLayout>
            <Head title={PAGE_TITLES.INDEX} />

            <PageHeader
                title={PAGE_TITLES.INDEX}
                subtitle={PAGE_SUBTITLES.INDEX}
                icon={ICONS.PAGES}
                iconGradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                breadcrumbs={[
                    { label: 'Home', href: route(ROUTES.DASHBOARD), icon: COMMON_ICONS.HOME },
                    { label: BREADCRUMBS.CMS_PAGES, href: route(ROUTES.CMS_PAGES_INDEX) },
                    { label: BREADCRUMBS.PAGE_LIST, active: true },
                ]}
            />

            <div className="row mb-4">
                <div className="col-md-4 col-sm-6 mb-3">
                    <div
                        className="card shadow-sm"
                        style={{
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            border: 'none',
                        }}
                    >
                        <div className="card-body py-3">
                            <div className="d-flex align-items-center">
                                <div className="avtar avtar-l bg-white bg-opacity-25 flex-shrink-0">
                                    <i className={`${ICONS.PAGES} text-white f-24`}></i>
                                </div>
                                <div className="ms-3 flex-grow-1">
                                    <p className="mb-1 text-white text-opacity-75 fw-medium">
                                        {STATS_LABELS.TOTAL_PAGES}
                                    </p>
                                    <h4 className="mb-0 text-white fw-bold">{total}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 mb-3">
                    <div
                        className="card shadow-sm"
                        style={{
                            background: 'linear-gradient(135deg, #2CA87F 0%, #4BC0A0 100%)',
                            border: 'none',
                        }}
                    >
                        <div className="card-body py-3">
                            <div className="d-flex align-items-center">
                                <div className="avtar avtar-l bg-white bg-opacity-25 flex-shrink-0">
                                    <i className={`${ICONS.ACTIVE} text-white f-24`}></i>
                                </div>
                                <div className="ms-3 flex-grow-1">
                                    <p className="mb-1 text-white text-opacity-75 fw-medium">
                                        {STATS_LABELS.ACTIVE_PAGES}
                                    </p>
                                    <h4 className="mb-0 text-white fw-bold">{active}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 mb-3">
                    <div
                        className="card shadow-sm"
                        style={{
                            background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
                            border: 'none',
                        }}
                    >
                        <div className="card-body py-3">
                            <div className="d-flex align-items-center">
                                <div className="avtar avtar-l bg-white bg-opacity-25 flex-shrink-0">
                                    <i className={`${ICONS.INACTIVE} text-white f-24`}></i>
                                </div>
                                <div className="ms-3 flex-grow-1">
                                    <p className="mb-1 text-white text-opacity-75 fw-medium">
                                        {STATS_LABELS.INACTIVE_PAGES}
                                    </p>
                                    <h4 className="mb-0 text-white fw-bold">{inactive}</h4>
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
                                        All CMS Pages
                                    </h5>
                                    <small className="text-muted">
                                        Manage your website content
                                    </small>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <Link
                                        href={route(ROUTES.CMS_PAGES_CREATE)}
                                        className="d-inline-flex align-items-center justify-content-center gap-2 px-4 py-2 bg-gradient-to-r from-[#4facfe] to-[#00f2fe] text-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 transform active:scale-95 text-decoration-none fw-semibold border-0"
                                        style={{ height: '38px', whiteSpace: 'nowrap' }}
                                    >
                                        <i className={`${ICONS.CREATE} f-18`}></i>
                                        Create Page
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="card-body pt-3">
                            <DataTableComponent
                                columns={columns}
                                data={Array.isArray(pages) ? pages : pages?.data || []}
                                pagination
                                paginationServer={false}
                                searchPlaceholder="Search pages..."
                                searchValue=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
