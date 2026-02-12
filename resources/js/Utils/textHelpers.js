export const generateSlug = (text) =>
    text
        .toString()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric chars with -
        .replace(/^-+|-+$/g, ''); // Remove leading/trailing -
