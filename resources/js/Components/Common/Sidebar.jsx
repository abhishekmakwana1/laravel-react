import { Link, usePage } from '@inertiajs/react';
import React, { useEffect } from 'react';
import logoDark from '../../assets/images/logo-dark.svg';
import avatar1 from '../../assets/images/user/avatar-1.jpg';

// Sub-components
import SidebarUserCard from './SidebarUserCard';
import { NavItem, NavGroup } from './SidebarNavItems';

export default function Sidebar() {
    const { url } = usePage();
    const { auth } = usePage().props;
    const user = auth.user;

    useEffect(() => {
        if (window.feather) {
            window.feather.replace();
        }
    }, []);

    return (
        <nav className="pc-sidebar">
            <div className="navbar-wrapper">
                <div className="m-header">
                    <Link href="/" className="b-brand text-primary">
                        <img src={logoDark} alt="logo" className="logo-lg" />
                        <span className="badge bg-light-success rounded-pill ms-2 theme-version">
                            v9.0
                        </span>
                    </Link>
                </div>
                <div className="navbar-content" data-simplebar>
                    <SidebarUserCard user={user} avatar={avatar1} />

                    <ul className="pc-navbar">
                        <NavGroup title="Navigation" icon="custom-status-up" />
                        <NavItem
                            href={route('dashboard')}
                            icon="custom-home"
                            text="Dashboard"
                            active={url === '/dashboard'}
                        />

                        <NavGroup title="Management" icon="custom-user" />
                        <NavItem
                            href={route('users.index')}
                            icon="custom-user"
                            text="User Management"
                            active={url.startsWith('/admin/users')}
                        />

                        <NavGroup title="Content" icon="custom-document" />
                        <NavItem
                            href={route('admin.cms-pages.index')}
                            icon="custom-document"
                            text="CMS Pages"
                            active={url.startsWith('/admin/cms-pages')}
                        />
                    </ul>
                </div>
            </div>
        </nav>
    );
}
