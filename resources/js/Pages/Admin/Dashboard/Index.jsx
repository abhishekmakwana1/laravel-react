import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import React from 'react';
import Card from '@/Components/UI/Card';
import Badge from '@/Components/UI/Badge';

export default function Dashboard() {
    const stats = [
        {
            title: 'All Earnings',
            value: '$3,020',
            trend: '+30.6%',
            trendUp: true,
            color: 'primary',
            icon: 'ti ti-wallet',
        },
        {
            title: 'Page Views',
            value: '15,678',
            trend: '+30.6%',
            trendUp: true,
            color: 'warning',
            icon: 'ti ti-eye',
        },
        {
            title: 'Total Tasks',
            value: '1,568',
            trend: '-30.6%',
            trendUp: false,
            color: 'success',
            icon: 'ti ti-checklist',
        },
        {
            title: 'Downloads',
            value: '30,564',
            trend: '-30.6%',
            trendUp: false,
            color: 'danger',
            icon: 'ti ti-download',
        },
    ];

    return (
        <AdminLayout>
            <Head title="Dashboard" />

            {/* Page Header */}
            <div className="page-header">
                <div className="page-block">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link href="/">Home</Link>
                                </li>
                                <li className="breadcrumb-item" aria-current="page">
                                    Dashboard
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-12">
                            <div className="page-header-title">
                                <h2 className="mb-0">Dashboard</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="row">
                {stats.map((stat, index) => (
                    <div key={index} className="col-md-6 col-xl-3">
                        <Card>
                            <Card.Body>
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <div className={`avtar avtar-s bg-light-${stat.color}`}>
                                            <i
                                                className={`${stat.icon} f-20 text-${stat.color}`}
                                            ></i>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h6 className="mb-0">{stat.title}</h6>
                                    </div>
                                </div>
                                <div className="bg-body p-3 mt-3 rounded">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <h3 className="mb-0">{stat.value}</h3>
                                        <Badge
                                            variant={stat.trendUp ? 'success' : 'danger'}
                                            size="sm"
                                        >
                                            <i
                                                className={`ti ti-arrow-${stat.trendUp ? 'up' : 'down'} me-1`}
                                            ></i>
                                            {stat.trend}
                                        </Badge>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>

            {/* Welcome Card */}
            <div className="row">
                <div className="col-12">
                    <Card>
                        <Card.Body>
                            <div className="text-center py-5">
                                <i className="ti ti-rocket f-60 text-primary mb-3"></i>
                                <h3 className="mb-3">Welcome to Your Dashboard!</h3>
                                <p className="text-muted mb-4">
                                    This is a clean starter template with reusable components.
                                    <br />
                                    Start building your application by customizing this dashboard.
                                </p>
                                <div className="d-flex gap-2 justify-content-center flex-wrap">
                                    <Link href="/admin/users" className="btn btn-primary">
                                        <i className="ti ti-users me-2"></i>
                                        Manage Users
                                    </Link>
                                    <a
                                        href="https://github.com/yourusername/yourrepo"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-outline-secondary"
                                    >
                                        <i className="ti ti-book me-2"></i>
                                        Documentation
                                    </a>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="row">
                <div className="col-md-6 col-lg-4">
                    <Card>
                        <Card.Header>
                            <Card.Title>Recent Activity</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center mb-3">
                                <div className="flex-shrink-0">
                                    <div className="avtar avtar-s bg-light-primary">
                                        <i className="ti ti-user-plus text-primary"></i>
                                    </div>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <h6 className="mb-0">New user registered</h6>
                                    <small className="text-muted">2 minutes ago</small>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <div className="flex-shrink-0">
                                    <div className="avtar avtar-s bg-light-success">
                                        <i className="ti ti-check text-success"></i>
                                    </div>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <h6 className="mb-0">Task completed</h6>
                                    <small className="text-muted">1 hour ago</small>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <div className="avtar avtar-s bg-light-warning">
                                        <i className="ti ti-alert-triangle text-warning"></i>
                                    </div>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <h6 className="mb-0">System update available</h6>
                                    <small className="text-muted">3 hours ago</small>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-md-6 col-lg-4">
                    <Card>
                        <Card.Header>
                            <Card.Title>Quick Links</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="list-group list-group-flush">
                                <Link
                                    href="/admin/users/create"
                                    className="list-group-item list-group-item-action d-flex align-items-center"
                                >
                                    <i className="ti ti-user-plus me-2 text-primary"></i>
                                    Add New User
                                </Link>
                                <Link
                                    href="/admin/users"
                                    className="list-group-item list-group-item-action d-flex align-items-center"
                                >
                                    <i className="ti ti-users me-2 text-success"></i>
                                    View All Users
                                </Link>
                                <a
                                    href="#"
                                    className="list-group-item list-group-item-action d-flex align-items-center"
                                >
                                    <i className="ti ti-settings me-2 text-warning"></i>
                                    Settings
                                </a>
                            </div>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-md-12 col-lg-4">
                    <Card>
                        <Card.Header>
                            <Card.Title>System Status</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="mb-3">
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                    <span className="text-muted">Server Status</span>
                                    <Badge variant="success">Online</Badge>
                                </div>
                                <div className="progress" style={{ height: '6px' }}>
                                    <div
                                        className="progress-bar bg-success"
                                        style={{ width: '100%' }}
                                    ></div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                    <span className="text-muted">Database</span>
                                    <Badge variant="success">Connected</Badge>
                                </div>
                                <div className="progress" style={{ height: '6px' }}>
                                    <div
                                        className="progress-bar bg-success"
                                        style={{ width: '100%' }}
                                    ></div>
                                </div>
                            </div>
                            <div>
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                    <span className="text-muted">Storage</span>
                                    <Badge variant="warning">75%</Badge>
                                </div>
                                <div className="progress" style={{ height: '6px' }}>
                                    <div
                                        className="progress-bar bg-warning"
                                        style={{ width: '75%' }}
                                    ></div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </AdminLayout>
    );
}
