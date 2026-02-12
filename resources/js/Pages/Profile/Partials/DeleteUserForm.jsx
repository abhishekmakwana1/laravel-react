import Modal from '@/Components/UI/Modal';
import InputError from '@/Components/InputError';
import { useForm } from '@inertiajs/react';
import React, { useRef, useState } from 'react';

export default function DeleteUserForm({ className = '' }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        clearErrors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        clearErrors();
        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <p className="mt-1 text-sm text-muted">
                Once your account is deleted, all of its resources and data will be permanently
                deleted. Before deleting your account, please download any data or information that
                you wish to retain.
            </p>

            <button className="btn btn-danger" onClick={confirmUserDeletion}>
                Delete Account
            </button>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={deleteUser} className="p-4">
                    <h2 className="text-lg font-medium text-dark">
                        Are you sure you want to delete your account?
                    </h2>

                    <p className="mt-1 text-sm text-muted">
                        Once your account is deleted, all of its resources and data will be
                        permanently deleted. Please enter your password to confirm you would like to
                        permanently delete your account.
                    </p>

                    <div className="mt-3">
                        <label className="form-label sr-only" htmlFor="password">
                            Password
                        </label>

                        <input
                            id="password"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className={`form-control ${errors.password ? 'is-invalid' : ''} w-75`}
                            placeholder="Password"
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-4 flex justify-end">
                        <button type="button" className="btn btn-secondary" onClick={closeModal}>
                            Cancel
                        </button>

                        <button type="submit" className="btn btn-danger ms-3" disabled={processing}>
                            Delete Account
                        </button>
                    </div>
                </form>
            </Modal>
        </section>
    );
}
