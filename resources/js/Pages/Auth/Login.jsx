import React, { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import Input from '@/Components/UI/Input';
import Button from '@/Components/UI/Button';
import logoDark from '../../assets/images/logo-dark.svg';
import facebookImg from '../../assets/images/authentication/facebook.svg';
import twitterImg from '../../assets/images/authentication/twitter.svg';
import googleImg from '../../assets/images/authentication/google.svg';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(
        () => () => {
            reset('password');
        },
        []
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <GuestLayout v2={true}>
            <Head title="Log in" />

            <div className="text-center">
                <Link href="/">
                    <img src={logoDark} alt="img" className="mb-4" />
                </Link>
                <div className="d-grid my-3">
                    <Button variant="light" className="mt-2 text-muted">
                        <img src={facebookImg} alt="img" className="me-2" />
                        <span>Sign In with Facebook</span>
                    </Button>
                    <Button variant="light" className="mt-2 text-muted">
                        <img src={twitterImg} alt="img" className="me-2" />
                        <span>Sign In with Twitter</span>
                    </Button>
                    <Button variant="light" className="mt-2 text-muted">
                        <img src={googleImg} alt="img" className="me-2" />
                        <span>Sign In with Google</span>
                    </Button>
                </div>
            </div>
            <div className="saprator my-3">
                <span>OR</span>
            </div>
            <h4 className="text-center f-w-500 mb-3">Login with your email</h4>

            {status && <div className="mb-4 text-sm font-medium text-green-600">{status}</div>}

            <form onSubmit={handleSubmit}>
                <Input
                    type="email"
                    placeholder="Email Address"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                    error={errors.email}
                    required
                    autoComplete="username"
                    autoFocus
                    containerClassName="mb-3"
                />

                <Input
                    type="password"
                    placeholder="Password"
                    value={data.password}
                    onChange={(e) => setData('password', e.target.value)}
                    error={errors.password}
                    required
                    autoComplete="current-password"
                    containerClassName="mb-3"
                />

                <div className="d-flex mt-1 justify-content-between align-items-center">
                    <div className="form-check">
                        <input
                            className="form-check-input input-primary"
                            type="checkbox"
                            id="customCheckc1"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <label className="form-check-label text-muted" htmlFor="customCheckc1">
                            Remember me?
                        </label>
                    </div>
                    {canResetPassword && (
                        <Link href={route('password.request')}>
                            <h6 className="text-secondary f-w-400 mb-0">Forgot Password?</h6>
                        </Link>
                    )}
                </div>
                <div className="d-grid mt-4">
                    <Button type="submit" variant="primary" loading={processing}>
                        Login
                    </Button>
                </div>
                <div className="d-flex justify-content-between align-items-end mt-4">
                    <h6 className="f-w-500 mb-0">Don't have an Account?</h6>
                    <Link href={route('register')} className="link-primary">
                        Create Account
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
