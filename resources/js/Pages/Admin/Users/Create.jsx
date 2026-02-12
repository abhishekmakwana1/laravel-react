import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import React, { useState } from 'react';
import { COMMON_LABELS, COMMON_ICONS } from '@/Constants';
import Button from '@/Components/UI/Button';
import Form from '@/Components/UI/Form';
import PageHeader from '@/Components/UI/PageHeader';
import toast from 'react-hot-toast';
import { PAGE_TITLES, BREADCRUMBS, CARD_TITLES, ROUTES } from './constants';
import useUserValidation from '@/Hooks/useUserValidation';
import UserAccountSection from './Partials/UserAccountSection';
import UserPasswordSection from './Partials/UserPasswordSection';

export default function Create() {
    const {
        data,
        setData,
        post,
        processing,
        errors: serverErrors,
        reset,
    } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        role: '',
    });

    const [errors, setErrors] = useState({});
    const { validateUser } = useUserValidation();

    const allErrors = { ...serverErrors, ...errors };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validateUser(data);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            toast.error('Please fix the validation errors before submitting');
            return;
        }

        post(route(ROUTES.USERS_STORE), {
            onSuccess: () => {
                // Flash message handled by AdminLayout
                reset();
                setErrors({});
            },
            onError: () => {
                toast.error('Failed to create user. Please check the form.');
            },
        });
    };

    const clearError = (field) => {
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: undefined }));
        }
    };

    const roleOptions = [
        { value: 'admin', label: 'Administrator' },
        { value: 'user', label: 'User' },
        { value: 'moderator', label: 'Moderator' },
    ];

    return (
        <AdminLayout>
            <Head title={PAGE_TITLES.CREATE} />

            <PageHeader
                title={PAGE_TITLES.CREATE}
                subtitle="Add a new user to the system"
                icon="ti ti-user-plus"
                iconGradient="linear-gradient(135deg, #2CA87F 0%, #4BC0A0 100%)"
                breadcrumbs={[
                    { label: 'Home', href: route(ROUTES.DASHBOARD), icon: COMMON_ICONS.HOME },
                    { label: BREADCRUMBS.USER_MANAGEMENT, href: route(ROUTES.USERS_INDEX) },
                    { label: BREADCRUMBS.CREATE_USER, active: true },
                ]}
            />

            <div className="row">
                <div className="col-12">
                    <Form onSubmit={handleSubmit}>
                        <UserAccountSection
                            data={data}
                            setData={setData}
                            errors={allErrors}
                            clearError={clearError}
                            roleOptions={roleOptions}
                        />

                        <UserPasswordSection
                            data={data}
                            setData={setData}
                            errors={allErrors}
                            clearError={clearError}
                        />

                        <div className="d-flex gap-2 justify-content-end mb-4">
                            <Link href={route(ROUTES.USERS_INDEX)}>
                                <Button variant="secondary" icon={COMMON_ICONS.BACK}>
                                    {COMMON_LABELS.CANCEL}
                                </Button>
                            </Link>

                            <Button
                                type="submit"
                                variant="primary"
                                loading={processing}
                                icon="ti ti-check"
                            >
                                {COMMON_LABELS.CREATE}
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </AdminLayout>
    );
}
