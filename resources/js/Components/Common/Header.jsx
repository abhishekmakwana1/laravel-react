import { Link, usePage } from '@inertiajs/react';
import React, { useEffect } from 'react';
import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';
import avatar4 from '../../assets/images/user/avatar-4.jpg';
import avatar5 from '../../assets/images/user/avatar-5.jpg';
import imgProfileCard from '@/assets/images/layout/img-profile-card.jpg';

import ThemeSwitcher from './ThemeSwitcher';
import NotificationsDropdown from './NotificationsDropdown';
import UserProfileDropdown from './UserProfileDropdown';

export default function Header() {
    const { auth } = usePage().props;
    const user = auth.user;

    const avatars = { avatar1, avatar2, avatar3, avatar4, avatar5 };

    useEffect(() => {
        const sidebarHide = document.querySelector('#sidebar-hide');
        const mobileCollapse = document.querySelector('#mobile-collapse');

        const toggleSidebar = () => {
            const sidebar = document.querySelector('.pc-sidebar');
            if (sidebar) {
                sidebar.classList.toggle('pc-sidebar-hide');
            }
        };

        const toggleMobileMenu = () => {
            const sidebar = document.querySelector('.pc-sidebar');
            if (sidebar) {
                if (sidebar.classList.contains('mob-sidebar-active')) {
                    sidebar.classList.remove('mob-sidebar-active');
                    const overlay = sidebar.querySelector('.pc-menu-overlay');
                    if (overlay) overlay.remove();
                } else {
                    sidebar.classList.add('mob-sidebar-active');
                    sidebar.insertAdjacentHTML('beforeend', '<div class="pc-menu-overlay"></div>');
                    const newOverlay = sidebar.querySelector('.pc-menu-overlay');
                    if (newOverlay) {
                        newOverlay.addEventListener('click', toggleMobileMenu);
                    }
                }
            }
        };

        if (sidebarHide) {
            sidebarHide.addEventListener('click', (e) => {
                e.preventDefault();
                toggleSidebar();
            });
        }

        if (mobileCollapse) {
            mobileCollapse.addEventListener('click', (e) => {
                e.preventDefault();
                toggleMobileMenu();
            });
        }

        return () => {
            if (sidebarHide) sidebarHide.removeEventListener('click', toggleSidebar);
            if (mobileCollapse) mobileCollapse.removeEventListener('click', toggleMobileMenu);
        };
    }, []);

    return (
        <header
            className="pc-header"
            style={{
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
            }}
        >
            <div className="header-wrapper" style={{ padding: '0.75rem 1.5rem' }}>
                <div className="me-auto pc-mob-drp">
                    <ul className="list-unstyled d-flex align-items-center gap-2 mb-0">
                        <li className="pc-h-item pc-sidebar-collapse">
                            <a
                                href="#"
                                className="pc-head-link ms-0 d-flex align-items-center justify-content-center"
                                id="sidebar-hide"
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '10px',
                                    transition: 'all 0.3s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor =
                                        'rgba(70, 128, 255, 0.1)';
                                    e.currentTarget.style.color = '#4680FF';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.color = '';
                                }}
                            >
                                <i className="ti ti-menu-2" style={{ fontSize: '20px' }}></i>
                            </a>
                        </li>
                        <li className="pc-h-item pc-sidebar-popup">
                            <a
                                href="#"
                                className="pc-head-link ms-0 d-flex align-items-center justify-content-center"
                                id="mobile-collapse"
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '10px',
                                    transition: 'all 0.3s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor =
                                        'rgba(70, 128, 255, 0.1)';
                                    e.currentTarget.style.color = '#4680FF';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.color = '';
                                }}
                            >
                                <i className="ti ti-menu-2" style={{ fontSize: '20px' }}></i>
                            </a>
                        </li>
                        <li className="dropdown pc-h-item d-none d-md-block">
                            <a
                                className="pc-head-link dropdown-toggle arrow-none m-0 trig-drp-search d-flex align-items-center justify-content-center"
                                data-bs-toggle="dropdown"
                                href="#"
                                role="button"
                                aria-haspopup="false"
                                aria-expanded="false"
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '10px',
                                    transition: 'all 0.3s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor =
                                        'rgba(70, 128, 255, 0.1)';
                                    e.currentTarget.style.color = '#4680FF';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.color = '';
                                }}
                            >
                                <i className="ti ti-search" style={{ fontSize: '20px' }}></i>
                            </a>
                            <div
                                className="dropdown-menu pc-h-dropdown drp-search"
                                style={{
                                    borderRadius: '12px',
                                    border: '1px solid rgba(0, 0, 0, 0.06)',
                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                                    marginTop: '8px',
                                }}
                            >
                                <form className="px-3 py-2">
                                    <input
                                        type="search"
                                        className="form-control border-0 shadow-none"
                                        placeholder="Search..."
                                        style={{
                                            backgroundColor: 'rgba(0, 0, 0, 0.03)',
                                            borderRadius: '8px',
                                            padding: '0.5rem 1rem',
                                        }}
                                    />
                                </form>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="ms-auto">
                    <ul className="list-unstyled d-flex align-items-center gap-1 mb-0">
                        <ThemeSwitcher />

                        <li className="dropdown pc-h-item">
                            <a
                                className="pc-head-link dropdown-toggle arrow-none me-0 d-flex align-items-center justify-content-center"
                                data-bs-toggle="dropdown"
                                href="#"
                                role="button"
                                aria-haspopup="false"
                                aria-expanded="false"
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '10px',
                                    transition: 'all 0.3s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor =
                                        'rgba(70, 128, 255, 0.1)';
                                    e.currentTarget.style.color = '#4680FF';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.color = '';
                                }}
                            >
                                <i className="ti ti-settings" style={{ fontSize: '20px' }}></i>
                            </a>
                            <div
                                className="dropdown-menu dropdown-menu-end pc-h-dropdown"
                                style={{
                                    borderRadius: '12px',
                                    border: '1px solid rgba(0, 0, 0, 0.06)',
                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                                    marginTop: '8px',
                                    minWidth: '200px',
                                }}
                            >
                                <a
                                    href="#!"
                                    className="dropdown-item"
                                    style={{
                                        padding: '0.75rem 1rem',
                                        borderRadius: '8px',
                                        margin: '0.25rem 0.5rem',
                                        transition: 'all 0.2s ease',
                                    }}
                                >
                                    <i className="ti ti-user me-2"></i>
                                    <span>My Account</span>
                                </a>
                                <a
                                    href="#!"
                                    className="dropdown-item"
                                    style={{
                                        padding: '0.75rem 1rem',
                                        borderRadius: '8px',
                                        margin: '0.25rem 0.5rem',
                                        transition: 'all 0.2s ease',
                                    }}
                                >
                                    <i className="ti ti-settings me-2"></i>
                                    <span>Settings</span>
                                </a>
                                <a
                                    href="#!"
                                    className="dropdown-item"
                                    style={{
                                        padding: '0.75rem 1rem',
                                        borderRadius: '8px',
                                        margin: '0.25rem 0.5rem',
                                        transition: 'all 0.2s ease',
                                    }}
                                >
                                    <i className="ti ti-headset me-2"></i>
                                    <span>Support</span>
                                </a>
                                <a
                                    href="#!"
                                    className="dropdown-item"
                                    style={{
                                        padding: '0.75rem 1rem',
                                        borderRadius: '8px',
                                        margin: '0.25rem 0.5rem',
                                        transition: 'all 0.2s ease',
                                    }}
                                >
                                    <i className="ti ti-lock me-2"></i>
                                    <span>Lock Screen</span>
                                </a>
                            </div>
                        </li>

                        <NotificationsDropdown />

                        <UserProfileDropdown
                            user={user}
                            avatars={avatars}
                            imgProfileCard={imgProfileCard}
                        />
                    </ul>
                </div>
            </div>
        </header>
    );
}
