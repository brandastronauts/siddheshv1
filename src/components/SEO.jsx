import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://research.blueblocks.in';
const SITE_NAME = 'Blue Blocks Micro Research Institute';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;
const DEFAULT_DESCRIPTION =
  'A longitudinal research institute studying innovation, Montessori development, and human potential through continuous observation from birth to adulthood.';

/**
 * Reusable per-page SEO component powered by react-helmet-async.
 *
 * @param {object}  props
 * @param {string}  props.title        – Page title (auto-appended with site name)
 * @param {string}  [props.description]
 * @param {string}  [props.canonicalUrl] – Override; defaults to BASE_URL + pathname
 * @param {string}  [props.ogImage]     – Full URL for OG/Twitter image
 * @param {string}  [props.ogType]      – OpenGraph type (default "website")
 * @param {boolean} [props.noIndex]     – Force noindex (default true during pre-launch)
 * @param {object[]} [props.jsonLd]     – Array of JSON-LD nodes injected as a single @graph
 */
const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  canonicalUrl,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  noIndex = true,
  jsonLd,
}) => {
  const location = useLocation();
  const canonical = canonicalUrl || `${BASE_URL}${location.pathname}`;
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

  // Build a single @graph object from all schema nodes (avoids duplicate <script> tags)
  const graphPayload = (() => {
    if (!jsonLd || jsonLd.length === 0) return null;
    // Strip per-node @context (only the wrapper gets @context)
    const cleaned = jsonLd.map(node => {
      if (!node || typeof node !== 'object') return node;
      const { '@context': _ctx, ...rest } = node;
      return rest;
    });
    // Stringify then fix any legacy dev URLs to production canonical
    return JSON.stringify({ '@context': 'https://schema.org', '@graph': cleaned })
      .replace(/https:\/\/siddheshv1\.lovable\.app/g, BASE_URL);
  })();

  return (
    <Helmet>
      {/* Core */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Robots — pre-launch lockdown */}
      {noIndex && (
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
      )}
      {noIndex && (
        <meta
          name="googlebot"
          content="noindex, nofollow, noarchive, nosnippet, noimageindex"
        />
      )}

      {/* OpenGraph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title || SITE_NAME} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title || SITE_NAME} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || SITE_NAME} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD — single @graph script, no duplicates on re-render */}
      {graphPayload && (
        <script type="application/ld+json">{graphPayload}</script>
      )}
    </Helmet>
  );
};

export default SEO;
