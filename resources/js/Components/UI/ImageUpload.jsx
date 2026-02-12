import React, { useState, useRef } from 'react';
import Button from './Button';

/**
 * Image Upload Component with Preview
 *
 * @param {Object} props
 * @param {string} props.label - Label for the upload field
 * @param {string} props.error - Error message
 * @param {function} props.onChange - Callback when image changes
 * @param {string} props.currentImage - URL of current image
 * @param {function} props.onRemove - Callback when image is removed
 * @param {boolean} props.required - Whether the field is required
 */
export default function ImageUpload({
    label = 'Image',
    error = '',
    onChange,
    currentImage = null,
    onRemove,
    required = false,
}) {
    const [preview, setPreview] = useState(currentImage);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            processFile(file);
        }
    };

    const processFile = (file) => {
        // Validate file type
        if (!file.type.startsWith('image/')) {
            alert('Please select an image file');
            return;
        }

        // Validate file size (2MB)
        if (file.size > 2 * 1024 * 1024) {
            alert('File size must be less than 2MB');
            return;
        }

        // Create preview
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result);
        };
        reader.readAsDataURL(file);

        // Call onChange callback
        if (onChange) {
            onChange(file);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);

        const file = e.dataTransfer.files[0];
        if (file) {
            processFile(file);
        }
    };

    const handleRemove = () => {
        setPreview(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
        if (onRemove) {
            onRemove();
        }
    };

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className="form-group mb-3">
            {label && (
                <label className="form-label">
                    {label}
                    {required && <span className="text-danger ms-1">*</span>}
                </label>
            )}

            {preview ? (
                <div className="image-preview-container">
                    <div className="position-relative" style={{ maxWidth: '300px' }}>
                        <img
                            src={preview}
                            alt="Preview"
                            className="img-fluid rounded"
                            style={{ width: '100%', height: 'auto' }}
                        />
                        <div className="mt-2">
                            <Button
                                variant="danger"
                                size="sm"
                                onClick={handleRemove}
                                icon="ti ti-trash"
                            >
                                Remove Image
                            </Button>
                        </div>
                    </div>
                </div>
            ) : (
                <div
                    className={`image-upload-dropzone ${isDragging ? 'dragging' : ''} ${error ? 'is-invalid' : ''}`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={handleClick}
                    style={{
                        border: '2px dashed #dee2e6',
                        borderRadius: '8px',
                        padding: '2rem',
                        textAlign: 'center',
                        cursor: 'pointer',
                        backgroundColor: isDragging ? '#f8f9fa' : 'transparent',
                        transition: 'all 0.2s ease',
                    }}
                >
                    <i
                        className="ti ti-cloud-upload"
                        style={{ fontSize: '48px', color: '#6c757d' }}
                    ></i>
                    <p className="mb-2 mt-2">
                        <strong>Click to upload</strong> or drag and drop
                    </p>
                    <p className="text-muted small mb-0">PNG, JPG, GIF, WEBP up to 2MB</p>
                </div>
            )}

            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: 'none' }}
            />

            {error && <div className="invalid-feedback d-block">{error}</div>}
        </div>
    );
}
