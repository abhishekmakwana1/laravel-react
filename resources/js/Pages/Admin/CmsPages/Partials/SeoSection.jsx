import React from 'react';
import Card from '@/Components/UI/Card';
import Input from '@/Components/UI/Input';
import { CARD_TITLES, CARD_SUBTITLES, PLACEHOLDERS } from '../constants';

export default function SeoSection({ data, setData, errors, clearError }) {
    return (
        <Card shadow="sm" className="mb-4">
            <Card.Header className="bg-white border-bottom px-4 py-3">
                <h5 className="mb-0 fw-semibold">{CARD_TITLES.SEO_SETTINGS}</h5>
                <p className="text-muted small mb-0">{CARD_SUBTITLES.SEO_SETTINGS}</p>
            </Card.Header>
            <Card.Body className="p-4">
                <Input
                    label="SEO Title"
                    value={data.seo_title}
                    onChange={(e) => {
                        setData('seo_title', e.target.value);
                        clearError('seo_title');
                    }}
                    error={errors.seo_title}
                    placeholder={PLACEHOLDERS.SEO_TITLE}
                    helpText={`Optimized title for search engines (${(data.seo_title || '').length}/60 characters)`}
                    icon="ti ti-seo"
                />

                <div className="form-group mb-3">
                    <label className="form-label">Meta Description</label>
                    <textarea
                        className={`form-control ${errors.meta_description ? 'is-invalid' : ''}`}
                        rows={3}
                        value={data.meta_description}
                        onChange={(e) => {
                            setData('meta_description', e.target.value);
                            clearError('meta_description');
                        }}
                        placeholder={PLACEHOLDERS.META_DESCRIPTION}
                    />
                    <div className="form-text">
                        Brief description for search results ({(data.meta_description || '').length}
                        /160 characters)
                    </div>
                    {errors.meta_description && (
                        <div className="invalid-feedback d-block">{errors.meta_description}</div>
                    )}
                </div>

                <Input
                    label="Meta Keywords"
                    value={data.meta_keywords}
                    onChange={(e) => {
                        setData('meta_keywords', e.target.value);
                        clearError('meta_keywords');
                    }}
                    error={errors.meta_keywords}
                    placeholder={PLACEHOLDERS.META_KEYWORDS}
                    helpText="Comma-separated keywords"
                    icon="ti ti-tags"
                />
            </Card.Body>
        </Card>
    );
}
