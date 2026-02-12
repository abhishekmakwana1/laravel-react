import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import React, { useState } from 'react';
import { COMMON_ICONS } from '@/Constants';
import Button from '@/Components/UI/Button';
import Form from '@/Components/UI/Form';
import PageHeader from '@/Components/UI/PageHeader';
import toast from 'react-hot-toast';
import { PAGE_TITLES, PAGE_SUBTITLES, BREADCRUMBS, ROUTES } from './constants';
import useCmsValidation from '@/Hooks/useCmsValidation';
import { generateSlug } from '@/Utils/textHelpers';
import PageDetailsSection from './Partials/PageDetailsSection';
import ContentSection from './Partials/ContentSection';
import SeoSection from './Partials/SeoSection';

export default function Create() {
    const {
        data,
        setData,
        post,
        processing,
        errors: serverErrors,
        reset,
    } = useForm({
        title: '',
        slug: '',
        image: null,
        description: '',
        seo_title: '',
        meta_description: '',
        meta_keywords: '',
        is_active: true,
    });

    const [errors, setErrors] = useState({});
    const { validateCms } = useCmsValidation();

    const allErrors = { ...serverErrors, ...errors };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validateCms(data);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            toast.error('Please fix the validation errors before submitting');
            return;
        }

        post(route(ROUTES.CMS_PAGES_STORE), {
            onSuccess: () => {
                // Flash message handled by AdminLayout
                reset();
                setErrors({});
            },
            onError: () => {
                toast.error('Failed to create page. Please check the form.');
            },
        });
    };

    const handleTitleChange = (value) => {
        setData('title', value);
        if (!data.slug) {
            setData('slug', generateSlug(value));
        }
        if (errors.title) {
            setErrors((prev) => ({ ...prev, title: undefined }));
        }
    };

    const clearError = (field) => {
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: undefined }));
        }
    };

    return (
        <AdminLayout>
            <Head title={PAGE_TITLES.CREATE} />

            <PageHeader
                title={PAGE_TITLES.CREATE}
                subtitle={PAGE_SUBTITLES.CREATE}
                icon="ti ti-file-plus"
                iconGradient="linear-gradient(135deg, #2CA87F 0%, #4BC0A0 100%)"
                breadcrumbs={[
                    { label: 'Home', href: route(ROUTES.DASHBOARD), icon: COMMON_ICONS.HOME },
                    { label: BREADCRUMBS.CMS_PAGES, href: route(ROUTES.CMS_PAGES_INDEX) },
                    { label: BREADCRUMBS.CREATE_PAGE, active: true },
                ]}
            />

            <Form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-12">
                        <PageDetailsSection
                            data={data}
                            setData={setData}
                            errors={allErrors}
                            handleTitleChange={handleTitleChange}
                            clearError={clearError}
                        />

                        <ContentSection
                            data={data}
                            setData={setData}
                            errors={allErrors}
                            clearError={clearError}
                        />

                        <SeoSection
                            data={data}
                            setData={setData}
                            errors={allErrors}
                            clearError={clearError}
                        />

                        <div className="d-flex gap-2 justify-content-end mb-4">
                            <Link href={route(ROUTES.CMS_PAGES_INDEX)}>
                                <Button variant="secondary" icon={COMMON_ICONS.BACK}>
                                    Cancel
                                </Button>
                            </Link>
                            <Button
                                type="submit"
                                variant="primary"
                                loading={processing}
                                icon="ti ti-check"
                            >
                                Create Page
                            </Button>
                        </div>
                    </div>
                </div>
            </Form>
        </AdminLayout>
    );
}
