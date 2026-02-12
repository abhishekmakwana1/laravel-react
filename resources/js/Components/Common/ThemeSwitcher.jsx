import React from 'react';

export default function ThemeSwitcher() {
    const handleThemeChange = (theme) => {
        if (window.layout_change) {
            window.layout_change(theme);
        }
    };

    const handleThemeDefault = () => {
        if (window.layout_change_default) {
            window.layout_change_default();
        }
    };

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
                    <use xlinkHref="#custom-sun-1"></use>
                </svg>
            </a>
            <div className="dropdown-menu dropdown-menu-end pc-h-dropdown">
                <a href="#!" className="dropdown-item" onClick={() => handleThemeChange('dark')}>
                    <svg className="pc-icon">
                        <use xlinkHref="#custom-moon"></use>
                    </svg>
                    <span>Dark</span>
                </a>
                <a href="#!" className="dropdown-item" onClick={() => handleThemeChange('light')}>
                    <svg className="pc-icon">
                        <use xlinkHref="#custom-sun-1"></use>
                    </svg>
                    <span>Light</span>
                </a>
                <a href="#!" className="dropdown-item" onClick={handleThemeDefault}>
                    <svg className="pc-icon">
                        <use xlinkHref="#custom-setting-2"></use>
                    </svg>
                    <span>Default</span>
                </a>
            </div>
        </li>
    );
}
