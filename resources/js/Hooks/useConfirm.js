import { confirmDialog } from '@/Components/UI/ConfirmDialog';

const useConfirm = () => {
    const confirm = async (message, options = {}) => {
        const {
            title = 'Confirm Action',
            confirmText = 'Confirm',
            cancelText = 'Cancel',
            variant = 'danger',
        } = options;

        return await confirmDialog({
            title,
            message,
            confirmText,
            cancelText,
            variant,
        });
    };

    return confirm;
};

export default useConfirm;
