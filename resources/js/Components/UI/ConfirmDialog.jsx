import toast from 'react-hot-toast';

const ConfirmDialog = ({
    title = 'Confirm Action',
    message = 'Are you sure you want to proceed?',
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    variant = 'danger',
    onConfirm,
    onCancel,
}) => {
    const variantColors = {
        danger: { bg: '#dc3545', color: '#fff' },
        warning: { bg: '#ffc107', color: '#000' },
        info: { bg: '#0dcaf0', color: '#000' },
        success: { bg: '#198754', color: '#fff' },
        primary: { bg: '#0d6efd', color: '#fff' },
    };

    const colors = variantColors[variant] || variantColors.danger;

    return (
        <div
            style={{
                padding: '20px',
                maxWidth: '400px',
            }}
        >
            <h5 style={{ marginBottom: '12px', fontWeight: '600' }}>{title}</h5>
            <p style={{ marginBottom: '20px', color: '#6c757d' }}>{message}</p>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                <button
                    onClick={onCancel}
                    style={{
                        padding: '8px 16px',
                        border: '1px solid #dee2e6',
                        borderRadius: '6px',
                        background: '#fff',
                        color: '#6c757d',
                        cursor: 'pointer',
                        fontWeight: '500',
                    }}
                >
                    {cancelText}
                </button>
                <button
                    onClick={onConfirm}
                    style={{
                        padding: '8px 16px',
                        border: 'none',
                        borderRadius: '6px',
                        background: colors.bg,
                        color: colors.color,
                        cursor: 'pointer',
                        fontWeight: '500',
                    }}
                >
                    {confirmText}
                </button>
            </div>
        </div>
    );
};

export const confirmDialog = ({
    title = 'Confirm Action',
    message = 'Are you sure you want to proceed?',
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    variant = 'danger',
} = {}) =>
    new Promise((resolve) => {
        const handleConfirm = () => {
            toast.dismiss();
            resolve(true);
        };

        const handleCancel = () => {
            toast.dismiss();
            resolve(false);
        };

        toast.custom(
            (t) => (
                <ConfirmDialog
                    title={title}
                    message={message}
                    confirmText={confirmText}
                    cancelText={cancelText}
                    variant={variant}
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                />
            ),
            {
                duration: Infinity,
                position: 'top-center',
            }
        );
    });

export default ConfirmDialog;
