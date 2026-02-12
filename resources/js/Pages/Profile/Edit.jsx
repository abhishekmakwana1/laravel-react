import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import React from 'react';

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <AdminLayout>
            <Head title="Profile" />

            <div className="page-header">
                <div className="page-block">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="/dashboard">Home</a>
                                </li>
                                <li className="breadcrumb-item" aria-current="page">
                                    Profile
                                </li>
                            </ul>
                            <div className="page-header-title">
                                <h2 className="mb-0">Profile</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h5>Profile Information</h5>
                        </div>
                        <div className="card-body">
                            <UpdateProfileInformationForm
                                mustVerifyEmail={mustVerifyEmail}
                                status={status}
                            />
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h5>Update Password</h5>
                        </div>
                        <div className="card-body">
                            <UpdatePasswordForm />
                        </div>
                    </div>
                </div>

                <div className="col-12">
                    <div className="card border-danger">
                        <div className="card-header bg-light-danger">
                            <h5 className="text-danger">Delete Account</h5>
                        </div>
                        <div className="card-body">
                            <DeleteUserForm />
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
