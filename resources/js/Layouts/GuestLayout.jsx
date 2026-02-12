import React from 'react';
import authSideImg from '../assets/images/authentication/img-auth-sideimg.jpg';

export default function GuestLayout({ children, v2 = false }) {
    return (
        <div
            data-pc-preset="preset-1"
            data-pc-sidebar-caption="true"
            data-pc-direction="ltr"
            data-pc-theme_contrast=""
            data-pc-theme="light"
        >
            <div className="loader-bg">
                <div className="loader-track">
                    <div className="loader-fill"></div>
                </div>
            </div>
            <div className="auth-main">
                <div className={`auth-wrapper ${v2 ? 'v2' : 'v1'}`}>
                    {v2 && (
                        <div className="auth-sidecontent">
                            <img
                                src={authSideImg}
                                alt="images"
                                className="img-fluid img-auth-side"
                            />
                        </div>
                    )}
                    <div className="auth-form">
                        <div className="card my-5">
                            <div className="card-body">{children}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
