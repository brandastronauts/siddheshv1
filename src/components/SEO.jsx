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
  keywords,
  twitter,
  article,
  citation,
  robots,
}) => {
  const location = useLocation();
  const canonical = canonicalUrl || `${BASE_URL}${location.pathname}`;
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

  const robotsContent = robots || 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  const twitterCard = twitter?.card || 'summary_large_image';
  const twitterTitle = twitter?.title || title || SITE_NAME;
  const twitterDescription = twitter?.description || description;
  const twitterImage = twitter?.image || ogImage;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta name="robots" content={robotsContent} />
      {keywords && <meta name="keywords" content={keywords} />}

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

      {article?.published_time && <meta property="article:published_time" content={article.published_time} />}
      {article?.author && <meta property="article:author" content={article.author} />}
      {article?.section && <meta property="article:section" content={article.section} />}

      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <meta name="twitter:image" content={twitterImage} />

      {citation?.citation_title && <meta name="citation_title" content={citation.citation_title} />}
      {citation?.citation_authors?.map((author, i) => (
        <meta key={`citation-author-${i}`} name="citation_author" content={author} />
      ))}
      {citation?.citation_author_institutions?.map((inst, i) => (
        <meta key={`citation-author-inst-${i}`} name="citation_author_institution" content={inst} />
      ))}
      {citation?.citation_publication_date && <meta name="citation_publication_date" content={citation.citation_publication_date} />}
      {citation?.citation_publisher && <meta name="citation_publisher" content={citation.citation_publisher} />}
      {citation?.citation_doi && <meta name="citation_doi" content={citation.citation_doi} />}
      {citation?.citation_pdf_url && <meta name="citation_pdf_url" content={citation.citation_pdf_url} />}
      {citation?.citation_language && <meta name="citation_language" content={citation.citation_language} />}
      {citation?.citation_keywords && <meta name="citation_keywords" content={citation.citation_keywords} />}
    </Helmet>
  );
};

export default SEO;
