import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm, router } from '@inertiajs/react';
import React, { useState } from 'react';
import { COMMON_ICONS } from '@/Constants';
import Input from '@/Components/UI/Input';
import Button from '@/Components/UI/Button';
import Card from '@/Components/UI/Card';
import PageHeader from '@/Components/UI/PageHeader';
import RichTextEditor from '@/Components/UI/RichTextEditor';
import ImageUpload from '@/Components/UI/ImageUpload';
import toast from 'react-hot-toast';
import useConfirm from '@/Hooks/useConfirm';
import {
    PAGE_TITLES,
    PAGE_SUBTITLES,
    BREADCRUMBS,
    CARD_TITLES,
    CARD_SUBTITLES,
    PLACEHOLDERS,
    ROUTES,
} from './constants';

export default function Edit({ page }) {
    const {
        data,
        setData,
        post,
        processing,
        errors: serverErrors,
    } = useForm({
        title: page.title || '',
        slug: page.slug || '',
        image: null,
        description: page.description || '',
        seo_title: page.seo_title || '',
        meta_description: page.meta_description || '',
        meta_keywords: page.meta_keywords || '',
        is_active: page.is_active ?? true,
        remove_image: false,
        _method: 'PUT',
    });

    const [errors, setErrors] = useState({});
    const { showConfirm } = useConfirm();

    // Validation function (same as Create)
    const validate = () => {
        const newErrors = {};

        if (!data.title || data.title.trim() === '') {
            newErrors.title = 'Page title is required';
        } else if (data.title.length < 3) {
            newErrors.title = 'Title must be at least 3 characters';
        } else if (data.title.length > 255) {
            newErrors.title = 'Title must not exceed 255 characters';
        }

        if (data.slug && !/^[a-z0-9-]+$/.test(data.slug)) {
            newErrors.slug = 'Slug can only contain lowercase letters, numbers, and hyphens';
        }

        if (
            !data.description ||
            data.description.trim() === '' ||
            data.description === '<p><br></p>'
        ) {
            newErrors.description = 'Page content is required';
        } else if (data.description.replace(/<[^>]*>/g, '').trim().length < 10) {
            newErrors.description = 'Content must be at least 10 characters';
        }

        if (data.image) {
            const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif', 'image/webp'];
            if (!validTypes.includes(data.image.type)) {
                newErrors.image = 'Image must be JPEG, PNG, JPG, GIF, or WEBP';
            }
            if (data.image.size > 2048 * 1024) {
                newErrors.image = 'Image size must not exceed 2MB';
            }
        }

        if (data.seo_title && data.seo_title.length > 60) {
            newErrors.seo_title = 'SEO title should not exceed 60 characters';
        }

        if (data.meta_description && data.meta_description.length > 160) {
            newErrors.meta_description = 'Meta description should not exceed 160 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validate()) {
            toast.error('Please fix the validation errors before submitting');
            return;
        }

        post(route(ROUTES.CMS_PAGES_UPDATE, page.id), {
            onSuccess: () => {
                toast.success('CMS Page updated successfully!');
                setErrors({});
            },
            onError: () => {
                toast.error('Failed to update page. Please check the form.');
            },
        });
    };

    const clearError = (field) => {
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: undefined }));
        }
    };

    const handleDelete = () => {
        showConfirm({
            title: 'Delete CMS Page',
            message: `Are you sure you want to delete "${page.title}"? This action cannot be undone.`,
            confirmText: 'Delete',
            confirmVariant: 'danger',
            onConfirm: () => {
                router.delete(route(ROUTES.CMS_PAGES_DESTROY, page.id), {
                    onSuccess: () => {
                        toast.success('CMS Page deleted successfully!');
                    },
                });
            },
        });
    };

    return (
        <AdminLayout>
            <Head title={`${PAGE_TITLES.EDIT_PREFIX}: ${page.title}`} />

            <PageHeader
                title={`${PAGE_TITLES.EDIT_PREFIX}: ${page.title}`}
                subtitle={PAGE_SUBTITLES.EDIT}
                icon="ti ti-edit"
                iconGradient="linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)"
                breadcrumbs={[
                    { label: 'Home', href: route(ROUTES.DASHBOARD), icon: COMMON_ICONS.HOME },
                    { label: BREADCRUMBS.CMS_PAGES, href: route(ROUTES.CMS_PAGES_INDEX) },
                    { label: BREADCRUMBS.EDIT_PAGE, active: true },
                ]}
            />

            {/* Delete Button */}
            <div className="mb-4 d-flex justify-content-end">
                <Button variant="danger" outline icon={COMMON_ICONS.TRASH} onClick={handleDelete}>
                    Delete Page
                </Button>
            </div>

            <form onSubmit={handleSubmit} noValidate>
                <div className="row">
                    <div className="col-12">
                        {/* Page Details Card */}
                        <Card shadow="sm" className="mb-4">
                            <Card.Header className="bg-white border-bottom px-4 py-3">
                                <h5 className="mb-0 fw-semibold">{CARD_TITLES.PAGE_DETAILS}</h5>
                                <p className="text-muted small mb-0">
                                    {CARD_SUBTITLES.PAGE_DETAILS}
                                </p>
                            </Card.Header>
                            <Card.Body className="p-4">
                                <Input
                                    label="Page Title"
                                    value={data.title}
                                    onChange={(e) => {
                                        setData('title', e.target.value);
                                        clearError('title');
                                    }}
                                    error={errors.title || serverErrors.title}
                                    placeholder={PLACEHOLDERS.TITLE}
                                    required
                                    icon="ti ti-heading"
                                />

                                <Input
                                    label="URL Slug"
                                    value={data.slug}
                                    onChange={(e) => {
                                        setData('slug', e.target.value);
                                        clearError('slug');
                                    }}
                                    error={errors.slug || serverErrors.slug}
                                    placeholder={PLACEHOLDERS.SLUG}
                                    helpText="URL-friendly version of the title"
                                    icon="ti ti-link"
                                />

                                <ImageUpload
                                    label="Featured Image"
                                    onChange={(file) => {
                                        setData('image', file);
                                        clearError('image');
                                    }}
                                    currentImage={page.image_url}
                                    onRemove={() => setData('remove_image', true)}
                                    error={errors.image || serverErrors.image}
                                />

                                <div className="form-check form-switch">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="is_active"
                                        checked={data.is_active}
                                        onChange={(e) => setData('is_active', e.target.checked)}
                                    />
                                    <label className="form-check-label" htmlFor="is_active">
                                        Active (Publish this page)
                                    </label>
                                </div>
                            </Card.Body>
                        </Card>

                        {/* Content Card */}
                        <Card shadow="sm" className="mb-4">
                            <Card.Header className="bg-white border-bottom px-4 py-3">
                                <h5 className="mb-0 fw-semibold">{CARD_TITLES.CONTENT}</h5>
                                <p className="text-muted small mb-0">{CARD_SUBTITLES.CONTENT}</p>
                            </Card.Header>
                            <Card.Body className="p-4">
                                <RichTextEditor
                                    label="Page Content"
                                    value={data.description}
                                    onChange={(content) => {
                                        setData('description', content);
                                        clearError('description');
                                    }}
                                    error={errors.description || serverErrors.description}
                                    required
                                    height={500}
                                />
                            </Card.Body>
                        </Card>

                        {/* SEO Settings Card */}
                        <Card shadow="sm" className="mb-4">
                            <Card.Header className="bg-white border-bottom px-4 py-3">
                                <h5 className="mb-0 fw-semibold">{CARD_TITLES.SEO_SETTINGS}</h5>
                                <p className="text-muted small mb-0">
                                    {CARD_SUBTITLES.SEO_SETTINGS}
                                </p>
                            </Card.Header>
                            <Card.Body className="p-4">
                                <Input
                                    label="SEO Title"
                                    value={data.seo_title}
                                    onChange={(e) => {
                                        setData('seo_title', e.target.value);
                                        clearError('seo_title');
                                    }}
                                    error={errors.seo_title || serverErrors.seo_title}
                                    placeholder={PLACEHOLDERS.SEO_TITLE}
                                    helpText={`Optimized title for search engines (${data.seo_title.length}/60 characters)`}
                                    icon="ti ti-seo"
                                />

                                <div className="form-group mb-3">
                                    <label className="form-label">Meta Description</label>
                                    <textarea
                                        className={`form-control ${errors.meta_description || serverErrors.meta_description ? 'is-invalid' : ''}`}
                                        rows={3}
                                        value={data.meta_description}
                                        onChange={(e) => {
                                            setData('meta_description', e.target.value);
                                            clearError('meta_description');
                                        }}
                                        placeholder={PLACEHOLDERS.META_DESCRIPTION}
                                    />
                                    <div className="form-text">
                                        Brief description for search results (
                                        {data.meta_description.length}/160 characters)
                                    </div>
                                    {(errors.meta_description || serverErrors.meta_description) && (
                                        <div className="invalid-feedback d-block">
                                            {errors.meta_description ||
                                                serverErrors.meta_description}
                                        </div>
                                    )}
                                </div>

                                <Input
                                    label="Meta Keywords"
                                    value={data.meta_keywords}
                                    onChange={(e) => {
                                        setData('meta_keywords', e.target.value);
                                        clearError('meta_keywords');
                                    }}
                                    error={errors.meta_keywords || serverErrors.meta_keywords}
                                    placeholder={PLACEHOLDERS.META_KEYWORDS}
                                    helpText="Comma-separated keywords"
                                    icon="ti ti-tags"
                                />
                            </Card.Body>
                        </Card>

                        {/* Action Buttons */}
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
                                Update Page
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </AdminLayout>
    );
}
