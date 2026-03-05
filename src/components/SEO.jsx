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
 * @param {object[]} [props.jsonLd]     – Array of JSON-LD objects to inject
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

  return (
    <Helmet>
      {/* Core */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Robots — pre-launch lockdown */}
      {noIndex && (
        <>
          <meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
          <meta
            name="googlebot"
            content="noindex, nofollow, noarchive, nosnippet, noimageindex"
          />
        </>
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

      {/* JSON-LD */}
      {jsonLd &&
        jsonLd.map((schema, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
    </Helmet>
  );
};

export default SEO;
