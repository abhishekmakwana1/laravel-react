import React from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import Input from '@/Components/UI/Input';
import Button from '@/Components/UI/Button';
import toast from 'react-hot-toast';
import logoDark from '../../assets/images/logo-dark.svg';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('password.email'), {
            onSuccess: () => {
                toast.success('Password reset link sent to your email!');
            },
            onError: () => {
                toast.error('Failed to send reset link. Please check your email.');
            },
        });
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />

            <Link href="/">
                <img src={logoDark} alt="img" className="mb-4 img-fluid" />
            </Link>
            <div className="d-flex justify-content-between align-items-end mb-4">
                <h3 className="mb-0">
                    <b>Forgot Password</b>
                </h3>
                <Link href={route('login')} className="link-primary">
                    Back to Login
                </Link>
            </div>

            {status && (
                <div className="alert alert-success mb-4" role="alert">
                    <i className="ti ti-circle-check me-2"></i>
                    {status}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <Input
                    label="Email Address"
                    type="email"
                    placeholder="Enter your email address"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                    error={errors.email}
                    required
                    autoFocus
                    icon="ti ti-mail"
                    helpText="We'll send you a password reset link"
                />

                <div className="alert alert-info d-flex align-items-start mb-3">
                    <i className="ti ti-info-circle me-2 mt-1"></i>
                    <small>
                        Don't forget to check your SPAM folder if you don't see the email in your
                        inbox.
                    </small>
                </div>

                <div className="d-grid mt-4">
                    <Button
                        type="submit"
                        variant="primary"
                        loading={processing}
                        icon="ti ti-mail-forward"
                    >
                        Send Password Reset Email
                    </Button>
                </div>
            </form>
        </GuestLayout>
    );
}
