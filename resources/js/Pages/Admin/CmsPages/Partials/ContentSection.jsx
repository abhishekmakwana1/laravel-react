import React from 'react';
import Card from '@/Components/UI/Card';
import RichTextEditor from '@/Components/UI/RichTextEditor';
import { CARD_TITLES, CARD_SUBTITLES } from '../constants';

export default function ContentSection({ data, setData, errors, clearError }) {
    return (
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
                    error={errors.description}
                    required
                    height={500}
                />
            </Card.Body>
        </Card>
    );
}
