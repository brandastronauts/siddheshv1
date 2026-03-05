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
const GlossaryAccordionSection = lazy(() => import('./sections/GlossaryAccordionSection'));
const NumberedCardsSection = lazy(() => import('./sections/NumberedCardsSection'));
const TierCardsSection = lazy(() => import('./sections/TierCardsSection'));
const ToolCardsSection = lazy(() => import('./sections/ToolCardsSection'));
const ChecklistSection = lazy(() => import('./sections/ChecklistSection'));
const TableBlockSection = lazy(() => import('./sections/TableBlockSection'));
const AnchorBlockSection = lazy(() => import('./sections/AnchorBlockSection'));
const TimelineStepsSection = lazy(() => import('./sections/TimelineStepsSection'));
const PillarsSection = lazy(() => import('./sections/PillarsSection'));

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
  glossaryAccordion: GlossaryAccordionSection,
  numberedCards: NumberedCardsSection,
  tierCards: TierCardsSection,
  toolCards: ToolCardsSection,
  checklist: ChecklistSection,
  tableBlock: TableBlockSection,
  anchorBlock: AnchorBlockSection,
  timelineSteps: TimelineStepsSection,
  pillars: PillarsSection,
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

// ── Section prop defaults (prevent blank renders from missing optional props) ──
const sectionDefaults = {
  cards:        { items: [], cards: [] },
  grid3:        { items: [] },
  list:         { items: [] },
  libraryCards: { items: [], cards: [] },
  buttonCards:  { items: [], cards: [] },
  relatedCards: { header: 'Related', cards: [] },
  toolCards:    { tools: [] },
  tierCards:    { tiers: [] },
  numberedCards:{ items: [] },
  checklist:    { items: [] },
  tableBlock:   { headers: [], rows: [] },
  timelineSteps:{ steps: [] },
  pillars:      { items: [] },
  patentGrid:   { cards: [], patents: [] },
  accordion:    { items: [] },
  glossaryAccordion: { groups: [] },
  statsBar:     { stats: [] },
  timeline:     { items: [] },
  downloadList: { items: [] },
  galleryGrid:  { images: [] },
  pricing:      { columns: [] },
  logoStrip:    { logos: [] },
  metaStrip:    { items: [] },
};

// ── Dev-only section prop validation ──
const sectionRequiredProps = {
  hero:         ['headline'],
  textBlock:    ['body'],
  cards:        ['items|cards'],
  grid3:        ['items'],
  numberedCards:['items'],
  tierCards:    ['tiers'],
  toolCards:    ['tools'],
  tableBlock:   ['headers', 'rows'],
  timelineSteps:['steps'],
};

const validateSection = (type, props, index) => {
  if (import.meta.env.PROD) return;
  const required = sectionRequiredProps[type];
  if (!required) return;

  required.forEach(key => {
    const keys = key.split('|'); // Support "items|cards" alternatives
    const hasAny = keys.some(k => {
      const val = props[k];
      return val !== undefined && val !== null && val !== '' && (!Array.isArray(val) || val.length > 0);
    });
    if (!hasAny) {
      console.warn(
        `⚠️ [SectionRenderer] Section #${index} (type="${type}") is missing required prop: "${key}". This may render blank.`
      );
    }
  });
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

    // Apply defaults for missing optional props
    const defaults = sectionDefaults[type] || {};
    const mergedProps = { ...defaults, ...props };

    // Dev-only validation
    validateSection(type, mergedProps, index);

    // Hero renders eagerly (no Suspense wrapper, no motion delay)
    if (type === 'hero') {
      return <Component key={index} {...mergedProps} />;
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
          <Component {...mergedProps} />
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
