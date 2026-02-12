import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm, router } from '@inertiajs/react';
import React, { useState } from 'react';
import { COMMON_LABELS, COMMON_ICONS } from '@/Constants';
import Button from '@/Components/UI/Button';
import Form from '@/Components/UI/Form';
import PageHeader from '@/Components/UI/PageHeader';
import useConfirm from '@/Hooks/useConfirm';
import toast from 'react-hot-toast';
import { PAGE_TITLES, BREADCRUMBS, ROUTES } from './constants';
import useUserValidation from '@/Hooks/useUserValidation';
import UserAccountSection from './Partials/UserAccountSection';
import UserPasswordSection from './Partials/UserPasswordSection';

export default function Edit({ user }) {
    const PAGE_TITLE = `${PAGE_TITLES.EDIT_PREFIX} - ${user.name}`;
    const PAGE_HEADING = `${PAGE_TITLES.EDIT_PREFIX}: ${user.name}`;
    const confirm = useConfirm();

    const {
        data,
        setData,
        put,
        processing,
        errors: serverErrors,
    } = useForm({
        name: user.name || '',
        email: user.email || '',
        role: user.role || '',
        password: '',
        password_confirmation: '',
    });

    const [errors, setErrors] = useState({});
    const { validateUser } = useUserValidation();

    const allErrors = { ...serverErrors, ...errors };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validateUser(data, true); // true for isEdit
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            toast.error('Please fix the validation errors before submitting');
            return;
        }

        put(route(ROUTES.USERS_UPDATE, user.id), {
            onSuccess: () => {
                // Flash message handled by AdminLayout
                setErrors({});
            },
            onError: () => {
                toast.error('Failed to update user. Please check the form.');
            },
        });
    };

    const clearError = (field) => {
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: undefined }));
        }
    };

    const handleDelete = async () => {
        const confirmed = await confirm(
            `Are you sure you want to delete ${user.name}? This action cannot be undone.`,
            {
                title: 'Delete User',
                confirmText: 'Delete',
                cancelText: 'Cancel',
                variant: 'danger',
            }
        );

        if (confirmed) {
            router.delete(route(ROUTES.USERS_DESTROY, user.id), {
                onSuccess: () => {
                    // Flash message handled by AdminLayout
                },
            });
        }
    };

    const roleOptions = [
        { value: 'admin', label: 'Administrator' },
        { value: 'user', label: 'User' },
        { value: 'moderator', label: 'Moderator' },
    ];

    return (
        <AdminLayout>
            <Head title={PAGE_TITLE} />

            <PageHeader
                title={PAGE_HEADING}
                subtitle="Update user information and credentials"
                icon="ti ti-user-edit"
                iconGradient="linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)"
                breadcrumbs={[
                    { label: 'Home', href: route(ROUTES.DASHBOARD), icon: COMMON_ICONS.HOME },
                    { label: BREADCRUMBS.USER_MANAGEMENT, href: route(ROUTES.USERS_INDEX) },
                    { label: BREADCRUMBS.EDIT_USER, active: true },
                ]}
            />

            <div className="mb-4 d-flex justify-content-end">
                <Button variant="danger" outline icon={COMMON_ICONS.TRASH} onClick={handleDelete}>
                    Delete User
                </Button>
            </div>

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
                            isEdit={true}
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
                                {COMMON_LABELS.UPDATE}
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </AdminLayout>
    );
}
