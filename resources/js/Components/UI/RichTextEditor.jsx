import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

/**
 * Rich Text Editor Component using React Quill (100% Free)
 *
 * @param {Object} props
 * @param {string} props.value - Current editor content
 * @param {function} props.onChange - Callback when content changes
 * @param {string} props.label - Label for the editor
 * @param {string} props.error - Error message
 * @param {number} props.height - Editor height in pixels (default: 400)
 * @param {boolean} props.required - Whether the field is required
 */
export default function RichTextEditor({
    value = '',
    onChange,
    label = '',
    error = '',
    height = 400,
    required = false,
    placeholder = 'Start typing...',
}) {
    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ color: [] }, { background: [] }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ indent: '-1' }, { indent: '+1' }],
            [{ align: [] }],
            ['link', 'image'],
            ['blockquote', 'code-block'],
            ['clean'],
        ],
    };

    const formats = [
        'header',
        'bold',
        'italic',
        'underline',
        'strike',
        'color',
        'background',
        'list',
        'bullet',
        'indent',
        'align',
        'link',
        'image',
        'blockquote',
        'code-block',
    ];

    return (
        <div className="form-group mb-3">
            {label && (
                <label className="form-label">
                    {label}
                    {required && <span className="text-danger ms-1">*</span>}
                </label>
            )}
            <div className={`quill-wrapper ${error ? 'is-invalid' : ''}`}>
                <ReactQuill
                    theme="snow"
                    value={value}
                    onChange={onChange}
                    modules={modules}
                    formats={formats}
                    placeholder={placeholder}
                    style={{ height: `${height}px`, marginBottom: '50px' }}
                />
            </div>
            {error && <div className="invalid-feedback d-block">{error}</div>}
        </div>
    );
}
