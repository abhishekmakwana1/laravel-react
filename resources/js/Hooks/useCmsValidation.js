export const validateCms = (data) => {
    const errors = {};

    if (!data.title || data.title.trim() === '') {
        errors.title = 'Page title is required';
    } else if (data.title.length < 3) {
        errors.title = 'Title must be at least 3 characters';
    } else if (data.title.length > 255) {
        errors.title = 'Title must not exceed 255 characters';
    }

    if (data.slug && !/^[a-z0-9-]+$/.test(data.slug)) {
        errors.slug = 'Slug can only contain lowercase letters, numbers, and hyphens';
    }

    if (!data.description || data.description.trim() === '' || data.description === '<p><br></p>') {
        errors.description = 'Page content is required';
    } else if (data.description.replace(/<[^>]*>/g, '').trim().length < 10) {
        errors.description = 'Content must be at least 10 characters';
    }

    if (data.image && typeof data.image === 'object') {
        const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif', 'image/webp'];
        if (!validTypes.includes(data.image.type)) {
            errors.image = 'Image must be JPEG, PNG, JPG, GIF, or WEBP';
        }
        if (data.image.size > 2048 * 1024) {
            errors.image = 'Image size must not exceed 2MB';
        }
    }

    if (data.seo_title && data.seo_title.length > 60) {
        errors.seo_title = 'SEO title should not exceed 60 characters';
    }

    if (data.meta_description && data.meta_description.length > 160) {
        errors.meta_description = 'Meta description should not exceed 160 characters';
    }

    return errors;
};

const useCmsValidation = () => ({ validateCms });

export default useCmsValidation;
