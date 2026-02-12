import React from 'react';

export default function SidebarUserCard({ user, avatar }) {
    return (
        <div className="card pc-user-card">
            <div className="card-body">
                <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                        <img
                            src={avatar}
                            alt="user-image"
                            className="user-avtar wid-45 rounded-circle"
                        />
                    </div>
                    <div className="flex-grow-1 ms-3">
                        <h6 className="mb-0">{user ? user.name : 'Admin'}</h6>
                        <small>Administrator</small>
                    </div>
                </div>
            </div>
        </div>
    );
}
