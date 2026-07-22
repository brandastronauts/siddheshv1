// Dynamically import all asset files in src/assets at build time using Vite's import.meta.glob
const assetModules = import.meta.glob('/src/assets/**/*.{webp,jpg,jpeg,png,svg,gif}', { eager: true, import: 'default' });

/**
 * Resolves a source path (e.g. "/src/assets/banners/institute-stark.jpg")
 * to its Vite-bundled production asset URL (e.g. "/assets/institute-stark-B3k8s9.webp").
 * 
 * Supports extension fallbacks (.jpg <-> .webp <-> .png).
 */
export function resolveAssetUrl(src) {
  if (!src || typeof src !== 'string') return '';
  const trimmed = src.trim();
  if (!trimmed) return '';

  // Direct match in Vite asset modules
  if (assetModules[trimmed]) {
    return assetModules[trimmed];
  }

  // If path ends with .jpg or .png, check .webp fallback
  if (trimmed.endsWith('.jpg') || trimmed.endsWith('.png')) {
    const webpPath = trimmed.replace(/\.(jpg|png)$/, '.webp');
    if (assetModules[webpPath]) {
      return assetModules[webpPath];
    }
  }

  // If path ends with .webp, check .jpg fallback
  if (trimmed.endsWith('.webp')) {
    const jpgPath = trimmed.replace(/\.webp$/, '.jpg');
    if (assetModules[jpgPath]) {
      return assetModules[jpgPath];
    }
  }

  // Return src as-is (for public/ static assets like /ui/site-banner.webp or remote URLs)
  return trimmed;
}

export default resolveAssetUrl;
