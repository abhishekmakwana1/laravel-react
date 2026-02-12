import React, { useEffect } from 'react';
import InputError from '@/Components/InputError';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import logoDark from '../../assets/images/logo-dark.svg';

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    });

    useEffect(
        () => () => {
            reset('password');
        },
        []
    );

    const submit = (e) => {
        e.preventDefault();
        post(route('password.confirm'));
    };

    return (
        <GuestLayout>
            <Head title="Confirm Password" />

            <Link href="/">
                <img src={logoDark} alt="img" className="mb-4 img-fluid" />
            </Link>
            <div className="mb-4">
                <h3 className="mb-2">
                    <b>Confirm Password</b>
                </h3>
                <p className="text-muted">
                    This is a secure area of the application. Please confirm your password before
                    continuing.
                </p>
            </div>

            <form onSubmit={submit}>
                <div className="form-group mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        placeholder="Password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        required
                        autoFocus
                    />
                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="d-grid mt-4">
                    <button type="submit" className="btn btn-primary" disabled={processing}>
                        Confirm
                    </button>
                </div>
            </form>
        </GuestLayout>
    );
}
