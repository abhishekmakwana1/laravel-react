import React from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import logoDark from '../../assets/images/logo-dark.svg';

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();
        post(route('verification.send'));
    };

    return (
        <GuestLayout>
            <Head title="Email Verification" />

            <Link href="/">
                <img src={logoDark} alt="img" className="mb-4 img-fluid" />
            </Link>
            <div className="mb-4">
                <h3 className="mb-2">
                    <b>Verify Email</b>
                </h3>
                <p className="text-muted">
                    Thanks for signing up! Please verify your email address by clicking on the link
                    we just emailed to you.
                </p>
            </div>

            {status === 'verification-link-sent' && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    A new verification link has been sent to the email address you provided during
                    registration.
                </div>
            )}

            <form onSubmit={submit}>
                <div className="d-grid mt-4">
                    <button type="submit" className="btn btn-primary" disabled={processing}>
                        Resend Verification Email
                    </button>
                </div>
                <div className="d-flex justify-content-between align-items-end mt-4">
                    <Link href={route('logout')} method="post" as="button" className="link-danger">
                        Log Out
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
