import React from 'react';
import { Link } from '@inertiajs/react';

export default function UserProfileDropdown({ user, avatars, imgProfileCard }) {
    const { avatar1, avatar2, avatar3, avatar4, avatar5 } = avatars;

    return (
        <li className="dropdown pc-h-item header-user-profile">
            <a
                className="pc-head-link dropdown-toggle arrow-none me-0"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                data-bs-auto-close="outside"
                aria-expanded="false"
            >
                <img src={avatar2} alt="user-image" className="user-avtar" />
            </a>
            <div className="dropdown-menu dropdown-user-profile dropdown-menu-end pc-h-dropdown">
                <div className="dropdown-header d-flex align-items-center justify-content-between">
                    <h5 className="m-0">Profile</h5>
                </div>
                <div className="dropdown-body">
                    <div
                        className="profile-notification-scroll position-relative"
                        style={{ maxHeight: 'calc(100vh - 225px)' }}
                        data-simplebar
                    >
                        <div className="d-flex mb-1">
                            <div className="flex-shrink-0">
                                <img src={avatar2} alt="user-image" className="user-avtar wid-35" />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h6 className="mb-1">{user.name} 🖐️</h6>
                                <span>{user.email}</span>
                            </div>
                        </div>
                        <hr className="border-secondary border-opacity-50" />
                        <div className="card">
                            <div className="card-body py-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <h5 className="mb-0 d-inline-flex align-items-center">
                                        <svg className="pc-icon text-muted me-2">
                                            <use xlinkHref="#custom-notification-outline"></use>
                                        </svg>
                                        Notification
                                    </h5>
                                    <div className="form-check form-switch form-check-reverse m-0">
                                        <input
                                            className="form-check-input f-18"
                                            type="checkbox"
                                            role="switch"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-span">Manage</p>
                        <Link
                            href={route('profile.edit')}
                            className="dropdown-item d-flex align-items-center"
                        >
                            <svg className="pc-icon text-muted me-2">
                                <use xlinkHref="#custom-setting-outline"></use>
                            </svg>
                            <span>Settings</span>
                        </Link>
                        <a href="#" className="dropdown-item d-flex align-items-center">
                            <svg className="pc-icon text-muted me-2">
                                <use xlinkHref="#custom-share-bold"></use>
                            </svg>
                            <span>Share</span>
                        </a>
                        <Link
                            href={route('profile.edit')}
                            className="dropdown-item d-flex align-items-center"
                        >
                            <svg className="pc-icon text-muted me-2">
                                <use xlinkHref="#custom-lock-outline"></use>
                            </svg>
                            <span>Change Password</span>
                        </Link>
                        <hr className="border-secondary border-opacity-50" />
                        <p className="text-span">Team</p>
                        <a
                            href="#"
                            className="dropdown-item d-flex align-items-center justify-content-between"
                        >
                            <div className="d-flex align-items-center">
                                <svg className="pc-icon text-muted me-2">
                                    <use xlinkHref="#custom-profile-2user-outline"></use>
                                </svg>
                                <span>UI Design team</span>
                            </div>
                            <div className="user-group">
                                <img src={avatar1} alt="user-image" className="avtar" />
                                <span className="avtar bg-danger text-white">K</span>
                                <span className="avtar bg-success text-white">
                                    <svg className="pc-icon m-0">
                                        <use xlinkHref="#custom-user"></use>
                                    </svg>
                                </span>
                                <span className="avtar bg-light-primary text-primary">+2</span>
                            </div>
                        </a>
                        <hr className="border-secondary border-opacity-50" />
                        <div className="mb-3">
                            <Link
                                href={route('logout')}
                                method="post"
                                as="button"
                                className="dropdown-item d-flex align-items-center"
                            >
                                <svg className="pc-icon text-muted me-2">
                                    <use xlinkHref="#custom-logout-1-outline"></use>
                                </svg>
                                <span>Logout</span>
                            </Link>
                        </div>
                        <div
                            className="card border-0 shadow-none drp-upgrade-card mb-0"
                            style={{ backgroundImage: `url(${imgProfileCard})` }}
                        >
                            <div className="card-body">
                                <div className="user-group">
                                    <img src={avatar1} alt="user-image" className="avtar" />
                                    <img src={avatar2} alt="user-image" className="avtar" />
                                    <img src={avatar3} alt="user-image" className="avtar" />
                                    <img src={avatar4} alt="user-image" className="avtar" />
                                    <img src={avatar5} alt="user-image" className="avtar" />
                                    <span className="avtar bg-light-primary text-primary">+20</span>
                                </div>
                                <h3 className="my-3 text-dark">
                                    245.3k <small className="text-muted">Followers</small>
                                </h3>
                                <div className="btn btn-warning">
                                    <svg className="pc-icon me-2">
                                        <use xlinkHref="#custom-logout-1-outline"></use>
                                    </svg>
                                    Upgrade to Business
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}
