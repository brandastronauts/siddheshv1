import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import HeroSection from './sections/HeroSection';

// Eagerly loaded: hero (LCP-critical)
// Everything else lazy-loaded to reduce initial JS bundle

const TickerSection = lazy(() => import('./sections/TickerSection'));
const Grid3Section = lazy(() => import('./sections/Grid3Section'));
const CardsSection = lazy(() => import('./sections/CardsSection'));
const ListSection = lazy(() => import('./sections/ListSection'));
const LibraryCardsSection = lazy(() => import('./sections/LibraryCardsSection'));
const AccordionSection = lazy(() => import('./sections/AccordionSection'));
const StatsBarSection = lazy(() => import('./sections/StatsBarSection'));
const HighlightBoxSection = lazy(() => import('./sections/HighlightBoxSection'));
const TimelineSection = lazy(() => import('./sections/TimelineSection'));
const ComparisonTableSection = lazy(() => import('./sections/ComparisonTableSection'));
const BentoSection = lazy(() => import('./sections/BentoSection'));
const LogoStripSection = lazy(() => import('./sections/LogoStripSection'));
const ButtonCardsSection = lazy(() => import('./sections/ButtonCardsSection'));
const DownloadListSection = lazy(() => import('./sections/DownloadListSection'));
const TextBlockSection = lazy(() => import('./sections/TextBlockSection'));
const FormSection = lazy(() => import('./sections/FormSection'));
const FeaturedStoriesSection = lazy(() => import('./sections/FeaturedStoriesSection'));
const PricingSection = lazy(() => import('./sections/PricingSection'));
const SplitSection = lazy(() => import('./sections/SplitSection'));
const GalleryGridSection = lazy(() => import('./sections/GalleryGridSection'));
const DownloadButtonSection = lazy(() => import('./sections/DownloadButtonSection'));
const SitemapSection = lazy(() => import('./sections/SitemapSection'));
const MetaStripSection = lazy(() => import('./sections/MetaStripSection'));
const TwoColumnSection = lazy(() => import('./sections/TwoColumnSection'));
const RelatedCardsSection = lazy(() => import('./sections/RelatedCardsSection'));
const PatentGridSection = lazy(() => import('./sections/PatentGridSection'));
const ProfileSection = lazy(() => import('./sections/ProfileSection'));

const LazyDossier = {
  DossierHeaderSection: lazy(() => import('./sections/DossierSections').then(m => ({ default: m.DossierHeaderSection }))),
  DossierSectionBlock: lazy(() => import('./sections/DossierSections').then(m => ({ default: m.DossierSectionBlock }))),
  DossierQuoteStripSection: lazy(() => import('./sections/DossierSections').then(m => ({ default: m.DossierQuoteStripSection }))),
  DossierSpecTableSection: lazy(() => import('./sections/DossierSections').then(m => ({ default: m.DossierSpecTableSection }))),
  DossierTimelineSection: lazy(() => import('./sections/DossierSections').then(m => ({ default: m.DossierTimelineSection }))),
  DossierNoticeSection: lazy(() => import('./sections/DossierSections').then(m => ({ default: m.DossierNoticeSection }))),
  DossierPrinciplesSection: lazy(() => import('./sections/DossierSections').then(m => ({ default: m.DossierPrinciplesSection }))),
  DossierGallerySection: lazy(() => import('./sections/DossierSections').then(m => ({ default: m.DossierGallerySection }))),
  DossierArchiveNoticeSection: lazy(() => import('./sections/DossierSections').then(m => ({ default: m.DossierArchiveNoticeSection }))),
  DossierRelatedSection: lazy(() => import('./sections/DossierSections').then(m => ({ default: m.DossierRelatedSection }))),
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const components = {
  hero: HeroSection,
  ticker: TickerSection,
  grid3: Grid3Section,
  cards: CardsSection,
  list: ListSection,
  libraryCards: LibraryCardsSection,
  accordion: AccordionSection,
  statsBar: StatsBarSection,
  highlightBox: HighlightBoxSection,
  timeline: TimelineSection,
  comparisonTable: ComparisonTableSection,
  bento: BentoSection,
  logoStrip: LogoStripSection,
  buttonCards: ButtonCardsSection,
  downloadList: DownloadListSection,
  textBlock: TextBlockSection,
  form: FormSection,
  featuredStories: FeaturedStoriesSection,
  pricing: PricingSection,
  split: SplitSection,
  galleryGrid: GalleryGridSection,
  downloadButton: DownloadButtonSection,
  sitemap: SitemapSection,
  metaStrip: MetaStripSection,
  twoColumn: TwoColumnSection,
  relatedCards: RelatedCardsSection,
  patentGrid: PatentGridSection,
  profile: ProfileSection,
  dossierHeader: LazyDossier.DossierHeaderSection,
  dossierSection: LazyDossier.DossierSectionBlock,
  dossierQuoteStrip: LazyDossier.DossierQuoteStripSection,
  dossierSpecTable: LazyDossier.DossierSpecTableSection,
  dossierTimeline: LazyDossier.DossierTimelineSection,
  dossierNotice: LazyDossier.DossierNoticeSection,
  dossierPrinciples: LazyDossier.DossierPrinciplesSection,
  dossierGallery: LazyDossier.DossierGallerySection,
  dossierArchiveNotice: LazyDossier.DossierArchiveNoticeSection,
  dossierRelated: LazyDossier.DossierRelatedSection,
};

const SectionRenderer = ({ sections }) => {
  if (!sections || !Array.isArray(sections)) {
    return null;
  }

  const getSectionComponent = (section, index) => {
    const { type, ...props } = section;
    const Component = components[type];

    if (!Component) {
      return (
        <div key={index} className="container-grid section-spacing">
          <div className="bg-surface border border-border rounded-lg p-6 text-center">
            <p className="text-muted-foreground">
              Unknown section type: <code className="text-primary-navy font-mono">{type}</code>
            </p>
          </div>
        </div>
      );
    }

    // Hero renders eagerly (no Suspense wrapper, no motion delay)
    if (type === 'hero') {
      return <Component key={index} {...props} />;
    }

    return (
      <Suspense key={index} fallback={<div className="min-h-[100px]" />}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3) }}
          variants={sectionVariants}
        >
          <Component {...props} />
        </motion.div>
      </Suspense>
    );
  };

  return (
    <div className="flex flex-col">
      {sections.map((section, index) => getSectionComponent(section, index))}
    </div>
  );
};

export default SectionRenderer;
