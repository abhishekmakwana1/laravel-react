import React from 'react';
import Card from '@/Components/UI/Card';
import Input from '@/Components/UI/Input';
import Select from '@/Components/UI/Select';
import { CARD_TITLES, PLACEHOLDERS } from '../constants';
import { COMMON_ICONS } from '@/Constants';

export default function UserAccountSection({ data, setData, errors, clearError, roleOptions }) {
    return (
        <Card shadow="sm" className="mb-4">
            <Card.Header className="bg-white border-bottom px-4 py-3">
                <h5 className="mb-0 fw-semibold">{CARD_TITLES.USER_INFORMATION}</h5>
                <p className="text-muted small mb-0">
                    Enter the user&apos;s basic information and credentials
                </p>
            </Card.Header>
            <Card.Body className="p-4">
                <Input
                    label="Full Name"
                    type="text"
                    placeholder={PLACEHOLDERS.NAME}
                    value={data.name}
                    onChange={(e) => {
                        setData('name', e.target.value);
                        clearError('name');
                    }}
                    error={errors.name}
                    required
                    icon={COMMON_ICONS.USER}
                />

                <Input
                    label="Email Address"
                    type="email"
                    placeholder={PLACEHOLDERS.EMAIL}
                    value={data.email}
                    onChange={(e) => {
                        setData('email', e.target.value);
                        clearError('email');
                    }}
                    error={errors.email}
                    required
                    icon="ti ti-mail"
                />

                <Select
                    label="Role"
                    value={data.role}
                    onChange={(e) => {
                        setData('role', e.target.value);
                        clearError('role');
                    }}
                    options={roleOptions}
                    error={errors.role}
                    required
                    placeholder="Select a role"
                />
            </Card.Body>
        </Card>
    );
}
