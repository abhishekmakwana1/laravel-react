import React, { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import Input from '@/Components/UI/Input';
import Button from '@/Components/UI/Button';
import toast from 'react-hot-toast';
import logoDark from '../../assets/images/logo-dark.svg';

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    useEffect(
        () => () => {
            reset('password', 'password_confirmation');
        },
        []
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('password.store'), {
            onSuccess: () => {
                toast.success('Password reset successfully! You can now login.');
            },
            onError: () => {
                toast.error('Failed to reset password. Please try again.');
            },
        });
    };

    return (
        <GuestLayout>
            <Head title="Reset Password" />

            <Link href="/">
                <img src={logoDark} alt="img" className="mb-4 img-fluid" />
            </Link>
            <div className="mb-4">
                <h3 className="mb-2">
                    <b>Reset Password</b>
                </h3>
                <p className="text-muted">Please choose your new password</p>
            </div>

            <form onSubmit={handleSubmit}>
                <Input
                    label="Email Address"
                    type="email"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                    error={errors.email}
                    required
                    autoComplete="username"
                    icon="ti ti-mail"
                    disabled
                />

                <Input
                    label="New Password"
                    type="password"
                    placeholder="Enter new password"
                    value={data.password}
                    onChange={(e) => setData('password', e.target.value)}
                    error={errors.password}
                    required
                    autoComplete="new-password"
                    autoFocus
                    icon="ti ti-lock"
                    helpText="Password must be at least 8 characters"
                />

                <Input
                    label="Confirm Password"
                    type="password"
                    placeholder="Confirm new password"
                    value={data.password_confirmation}
                    onChange={(e) => setData('password_confirmation', e.target.value)}
                    error={errors.password_confirmation}
                    required
                    autoComplete="new-password"
                    icon="ti ti-lock"
                />

                <div className="d-grid mt-4">
                    <Button type="submit" variant="primary" loading={processing} icon="ti ti-check">
                        Reset Password
                    </Button>
                </div>

                <div className="text-center mt-4">
                    <Link href={route('login')} className="link-primary">
                        <i className="ti ti-arrow-left me-1"></i>
                        Back to Login
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
