import React from 'react';
import Card from '@/Components/UI/Card';
import Input from '@/Components/UI/Input';
import ImageUpload from '@/Components/UI/ImageUpload';
import { CARD_TITLES, CARD_SUBTITLES, PLACEHOLDERS } from '../constants';

export default function PageDetailsSection({
    data,
    setData,
    errors,
    handleTitleChange,
    clearError,
}) {
    return (
        <Card shadow="sm" className="mb-4">
            <Card.Header className="bg-white border-bottom px-4 py-3">
                <h5 className="mb-0 fw-semibold">{CARD_TITLES.PAGE_DETAILS}</h5>
                <p className="text-muted small mb-0">{CARD_SUBTITLES.PAGE_DETAILS}</p>
            </Card.Header>
            <Card.Body className="p-4">
                <Input
                    label="Page Title"
                    value={data.title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    error={errors.title}
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
                    error={errors.slug}
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
                    error={errors.image}
                    currentImage={data.currentImage}
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
    );
}
