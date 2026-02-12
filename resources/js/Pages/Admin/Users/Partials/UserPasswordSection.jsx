import React from 'react';
import Card from '@/Components/UI/Card';
import Input from '@/Components/UI/Input';
import { PLACEHOLDERS } from '../constants';

export default function UserPasswordSection({ data, setData, errors, clearError, isEdit = false }) {
    return (
        <Card shadow="sm" className="mb-4">
            <Card.Header className="bg-white border-bottom px-4 py-3">
                <h5 className="mb-0 fw-semibold">Security</h5>
                <p className="text-muted small mb-0">
                    {isEdit ? 'Update user password (optional)' : 'Set user password'}
                </p>
            </Card.Header>
            <Card.Body className="p-4">
                {isEdit && (
                    <div className="alert alert-info mb-3">
                        <i className="ti ti-info-circle me-2"></i>
                        Leave password fields empty to keep the current password
                    </div>
                )}

                <Input
                    label={isEdit ? 'New Password' : 'Password'}
                    type="password"
                    placeholder={isEdit ? 'Enter new password (optional)' : PLACEHOLDERS.PASSWORD}
                    value={data.password}
                    onChange={(e) => {
                        setData('password', e.target.value);
                        clearError('password');
                    }}
                    error={errors.password}
                    required={!isEdit}
                    icon="ti ti-lock"
                />

                <Input
                    label={isEdit ? 'Confirm New Password' : 'Confirm Password'}
                    type="password"
                    placeholder={
                        isEdit ? 'Confirm new password' : PLACEHOLDERS.PASSWORD_CONFIRMATION
                    }
                    value={data.password_confirmation}
                    onChange={(e) => {
                        setData('password_confirmation', e.target.value);
                        clearError('password_confirmation');
                    }}
                    error={errors.password_confirmation}
                    required={!isEdit}
                    icon="ti ti-lock"
                />
            </Card.Body>
        </Card>
    );
}
