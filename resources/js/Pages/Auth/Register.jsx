import React, { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import Input from '@/Components/UI/Input';
import Button from '@/Components/UI/Button';
import toast from 'react-hot-toast';
import logoDark from '../../assets/images/logo-dark.svg';
import facebookImg from '../../assets/images/authentication/facebook.svg';
import twitterImg from '../../assets/images/authentication/twitter.svg';
import googleImg from '../../assets/images/authentication/google.svg';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        terms: false,
    });

    useEffect(
        () => () => {
            reset('password', 'password_confirmation');
        },
        []
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!data.terms) {
            toast.error('Please agree to the Terms & Conditions');
            return;
        }

        post(route('register'), {
            onSuccess: () => {
                toast.success('Account created successfully! Welcome aboard!');
            },
            onError: () => {
                toast.error('Failed to create account. Please check the form.');
            },
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <div className="text-center">
                <Link href="/">
                    <img src={logoDark} alt="img" className="mb-4" />
                </Link>
                <div className="d-grid my-3">
                    <Button variant="light" className="mt-2 text-muted">
                        <img src={facebookImg} alt="img" className="me-2" />
                        <span>Sign Up with Facebook</span>
                    </Button>
                    <Button variant="light" className="mt-2 text-muted">
                        <img src={twitterImg} alt="img" className="me-2" />
                        <span>Sign Up with Twitter</span>
                    </Button>
                    <Button variant="light" className="mt-2 text-muted">
                        <img src={googleImg} alt="img" className="me-2" />
                        <span>Sign Up with Google</span>
                    </Button>
                </div>
            </div>
            <div className="saprator my-3">
                <span>OR</span>
            </div>
            <h4 className="text-center f-w-500 mb-3">Sign up with your work email</h4>

            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Full Name"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    error={errors.name}
                    required
                    autoComplete="name"
                    autoFocus
                    icon="ti ti-user"
                    containerClassName="mb-3"
                />

                <Input
                    type="email"
                    placeholder="Email Address"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                    error={errors.email}
                    required
                    autoComplete="username"
                    icon="ti ti-mail"
                    containerClassName="mb-3"
                />

                <Input
                    type="password"
                    placeholder="Password"
                    value={data.password}
                    onChange={(e) => setData('password', e.target.value)}
                    error={errors.password}
                    required
                    autoComplete="new-password"
                    icon="ti ti-lock"
                    helpText="Password must be at least 8 characters"
                    containerClassName="mb-3"
                />

                <Input
                    type="password"
                    placeholder="Confirm Password"
                    value={data.password_confirmation}
                    onChange={(e) => setData('password_confirmation', e.target.value)}
                    error={errors.password_confirmation}
                    required
                    autoComplete="new-password"
                    icon="ti ti-lock"
                    containerClassName="mb-3"
                />

                <div className="d-flex mt-1 justify-content-between">
                    <div className="form-check">
                        <input
                            className="form-check-input input-primary"
                            type="checkbox"
                            id="customCheckc1"
                            checked={data.terms}
                            onChange={(e) => setData('terms', e.target.checked)}
                        />
                        <label className="form-check-label text-muted" htmlFor="customCheckc1">
                            I agree to all the Terms & Condition
                        </label>
                    </div>
                </div>

                <div className="d-grid mt-4">
                    <Button
                        type="submit"
                        variant="primary"
                        loading={processing}
                        icon="ti ti-user-plus"
                    >
                        Sign up
                    </Button>
                </div>

                <div className="d-flex justify-content-between align-items-end mt-4">
                    <h6 className="f-w-500 mb-0">Already have an Account?</h6>
                    <Link href={route('login')} className="link-primary">
                        Login
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
