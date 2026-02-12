import { Link } from '@inertiajs/react';
import React from 'react';

/**
 * Modern Page Header Component
 *
 * A reusable page header with breadcrumbs, title, subtitle, and icon.
 * Features a modern design with gradient background and smooth animations.
 *
 * @param {Object} props
 * @param {string} props.title - Main page title
 * @param {string} props.subtitle - Page subtitle/description
 * @param {string} props.icon - Tabler icon class (e.g., 'ti ti-users')
 * @param {Array} props.breadcrumbs - Array of breadcrumb items: [{ label, href, icon?, active? }]
 * @param {string} props.iconGradient - Optional custom gradient for icon (default: primary blue)
 * @param {string} props.backgroundGradient - Optional custom background gradient
 */
export default function PageHeader({
    title,
    subtitle,
    icon,
    breadcrumbs = [],
    iconGradient = 'linear-gradient(135deg, #4680FF 0%, #6B9AFF 100%)',
    backgroundGradient = 'linear-gradient(135deg, rgba(70, 128, 255, 0.05) 0%, rgba(70, 128, 255, 0.02) 100%)',
}) {
    return (
        <div
            className="page-header mb-4 mt-4"
            style={{
                background: backgroundGradient,
                borderRadius: '16px',
                padding: '1.5rem',
                border: '1px solid rgba(70, 128, 255, 0.1)',
            }}
        >
            <div className="page-block">
                <div className="row align-items-center">
                    {/* Breadcrumbs */}
                    {breadcrumbs.length > 0 && (
                        <div className="col-md-12 mb-3">
                            <ul
                                className="breadcrumb mb-0"
                                style={{
                                    backgroundColor: 'transparent',
                                    padding: 0,
                                }}
                            >
                                {breadcrumbs.map((crumb, index) => (
                                    <li
                                        key={index}
                                        className={`breadcrumb-item ${crumb.active ? 'active' : ''}`}
                                        aria-current={crumb.active ? 'page' : undefined}
                                        style={
                                            crumb.active
                                                ? {
                                                      color: '#4680FF',
                                                      fontWeight: '500',
                                                  }
                                                : {}
                                        }
                                    >
                                        {crumb.active ? (
                                            crumb.label
                                        ) : (
                                            <Link
                                                href={crumb.href}
                                                className={`text-decoration-none ${crumb.icon ? 'd-flex align-items-center' : ''}`}
                                                style={{
                                                    color: '#6c757d',
                                                    transition: 'color 0.2s ease',
                                                }}
                                                onMouseEnter={(e) =>
                                                    (e.currentTarget.style.color = '#4680FF')
                                                }
                                                onMouseLeave={(e) =>
                                                    (e.currentTarget.style.color = '#6c757d')
                                                }
                                            >
                                                {crumb.icon && (
                                                    <i
                                                        className={`${crumb.icon} me-1`}
                                                        style={{ fontSize: '14px' }}
                                                    ></i>
                                                )}
                                                <span>{crumb.label}</span>
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Title and Icon */}
                    <div className="col-md-12">
                        <div className="d-flex align-items-center">
                            {icon && (
                                <div
                                    className="avtar avtar-l me-3"
                                    style={{
                                        background: iconGradient,
                                        boxShadow: '0 4px 12px rgba(70, 128, 255, 0.25)',
                                        width: '56px',
                                        height: '56px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '14px',
                                    }}
                                >
                                    <i
                                        className={`${icon} text-white`}
                                        style={{ fontSize: '26px' }}
                                    ></i>
                                </div>
                            )}
                            <div>
                                <h2
                                    className="mb-1"
                                    style={{
                                        fontWeight: '700',
                                        fontSize: '1.75rem',
                                        color: '#2c3e50',
                                        letterSpacing: '-0.5px',
                                    }}
                                >
                                    {title}
                                </h2>
                                {subtitle && (
                                    <p
                                        className="mb-0"
                                        style={{
                                            color: '#6c757d',
                                            fontSize: '0.95rem',
                                            fontWeight: '400',
                                        }}
                                    >
                                        {subtitle}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
