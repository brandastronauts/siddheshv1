/**
 * Download URL helper — single source of truth for PDF download paths.
 * @param {string} slug - e.g. "blue-blocks-mri-media-kit", "acds-patent"
 * @returns {string} - e.g. "/downloads/blue-blocks-mri-media-kit.pdf"
 */
export const getDownloadUrl = (slug) => `/downloads/${slug}.pdf`;

/** Canonical media kit slug */
export const MEDIA_KIT_SLUG = 'blue-blocks-mri-media-kit';
export const MEDIA_KIT_URL = getDownloadUrl(MEDIA_KIT_SLUG);
