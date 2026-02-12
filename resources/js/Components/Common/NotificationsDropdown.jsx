import React from 'react';

export default function NotificationsDropdown() {
    return (
        <li className="dropdown pc-h-item">
            <a
                className="pc-head-link dropdown-toggle arrow-none me-0"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
            >
                <svg className="pc-icon">
                    <use xlinkHref="#custom-notification"></use>
                </svg>
                <span className="badge bg-success pc-h-badge">3</span>
            </a>
            <div className="dropdown-menu dropdown-notification dropdown-menu-end pc-h-dropdown">
                <div className="dropdown-header d-flex align-items-center justify-content-between">
                    <h5 className="m-0">Notifications</h5>
                    <a href="#!" className="btn btn-link btn-sm">
                        Mark all read
                    </a>
                </div>
                <div
                    className="dropdown-body text-wrap header-notification-scroll position-relative"
                    style={{ maxHeight: 'calc(100vh - 215px)' }}
                    data-simplebar
                >
                    <p className="text-span">Today</p>
                    <div className="card mb-2">
                        <div className="card-body">
                            <div className="d-flex">
                                <div className="flex-shrink-0">
                                    <svg className="pc-icon text-primary">
                                        <use xlinkHref="#custom-layer"></use>
                                    </svg>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <span className="float-end text-sm text-muted">2 min ago</span>
                                    <h5 className="text-body mb-2">UI/UX Design</h5>
                                    <p className="mb-0">
                                        Lorem Ipsum has been the industry's standard dummy text ever
                                        since the 1500s, when an unknown printer took a galley of
                                        type and scrambled it to make a type
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-2">
                        <div className="card-body">
                            <div className="d-flex">
                                <div className="flex-shrink-0">
                                    <svg className="pc-icon text-primary">
                                        <use xlinkHref="#custom-sms"></use>
                                    </svg>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <span className="float-end text-sm text-muted">1 hour ago</span>
                                    <h5 className="text-body mb-2">Message</h5>
                                    <p className="mb-0">
                                        Lorem Ipsum has been the industry's standard dummy text ever
                                        since the 1500.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-span">Yesterday</p>
                    <div className="card mb-2">
                        <div className="card-body">
                            <div className="d-flex">
                                <div className="flex-shrink-0">
                                    <svg className="pc-icon text-primary">
                                        <use xlinkHref="#custom-document-text"></use>
                                    </svg>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <span className="float-end text-sm text-muted">2 hour ago</span>
                                    <h5 className="text-body mb-2">Forms</h5>
                                    <p className="mb-0">
                                        Lorem Ipsum has been the industry's standard dummy text ever
                                        since the 1500s, when an unknown printer took a galley of
                                        type and scrambled it to make a type
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center py-2">
                    <a href="#!" className="link-danger">
                        Clear all Notifications
                    </a>
                </div>
            </div>
        </li>
    );
}
