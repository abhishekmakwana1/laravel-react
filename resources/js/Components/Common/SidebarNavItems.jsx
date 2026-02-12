import React from 'react';
import { Link } from '@inertiajs/react';

export function NavItem({ href, icon, text, badge, active, target }) {
    return (
        <li className={`pc-item ${active ? 'active' : ''}`}>
            <Link href={href} className="pc-link" target={target}>
                <span className="pc-micon">
                    <svg className="pc-icon">
                        <use xlinkHref={`#${icon}`}></use>
                    </svg>
                </span>
                <span className="pc-mtext">{text}</span>
                {badge && <span className="pc-badge">{badge}</span>}
            </Link>
        </li>
    );
}

export function NavGroup({ title, icon }) {
    return (
        <li className="pc-item pc-caption">
            <label>{title}</label>
            {icon && (
                <svg className="pc-icon">
                    <use xlinkHref={`#${icon}`}></use>
                </svg>
            )}
        </li>
    );
}

export function NavHasMenu({ icon, text, badge, children }) {
    return (
        <li className="pc-item pc-hasmenu">
            <a href="#!" className="pc-link">
                <span className="pc-micon">
                    <svg className="pc-icon">
                        <use xlinkHref={`#${icon}`}></use>
                    </svg>
                </span>
                <span className="pc-mtext">{text}</span>
                <span className="pc-arrow">
                    <i data-feather="chevron-right"></i>
                </span>
                {badge && <span className="pc-badge">{badge}</span>}
            </a>
            <ul className="pc-submenu">{children}</ul>
        </li>
    );
}
