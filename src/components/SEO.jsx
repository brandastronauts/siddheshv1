import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://research.blueblocks.in';
const SITE_NAME = 'Blue Blocks Micro Research Institute';
const OG_SITE_NAME = 'Blue Blocks Montessori School';
const DEFAULT_OG_IMAGE = `${BASE_URL}/images/og-home.jpg`;
const DEFAULT_DESCRIPTION =
  'A longitudinal research institute studying innovation, Montessori development, and human potential through continuous observation from birth to adulthood.';

const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  canonicalUrl,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  noIndex = true,
}) => {
  const location = useLocation();
  const canonical = canonicalUrl || `${BASE_URL}${location.pathname}`;
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {noIndex && (
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
      )}
      {noIndex && (
        <meta
          name="googlebot"
          content="noindex, nofollow, noarchive, nosnippet, noimageindex"
        />
      )}

      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={OG_SITE_NAME} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title || SITE_NAME} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title || SITE_NAME} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || SITE_NAME} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;
