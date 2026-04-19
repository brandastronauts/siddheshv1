'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import HeroSection from './sections/HeroSection'
import LazySection from './LazySection'

// All sections use ssr: false to prevent SSR issues with browser-only APIs
// (embla-carousel, recharts, etc.). HeroSection is eagerly loaded for LCP.
const TickerSection           = dynamic(() => import('./sections/TickerSection'),           { ssr: false })
const Grid3Section            = dynamic(() => import('./sections/Grid3Section'),            { ssr: false })
const CardsSection            = dynamic(() => import('./sections/CardsSection'),            { ssr: false })
const ListSection             = dynamic(() => import('./sections/ListSection'),             { ssr: false })
const LibraryCardsSection     = dynamic(() => import('./sections/LibraryCardsSection'),     { ssr: false })
const AccordionSection        = dynamic(() => import('./sections/AccordionSection'),        { ssr: false })
const StatsBarSection         = dynamic(() => import('./sections/StatsBarSection'),         { ssr: false })
const HighlightBoxSection     = dynamic(() => import('./sections/HighlightBoxSection'),     { ssr: false })
const TimelineSection         = dynamic(() => import('./sections/TimelineSection'),         { ssr: false })
const ComparisonTableSection  = dynamic(() => import('./sections/ComparisonTableSection'),  { ssr: false })
const BentoSection            = dynamic(() => import('./sections/BentoSection'),            { ssr: false })
const LogoStripSection        = dynamic(() => import('./sections/LogoStripSection'),        { ssr: false })
const ButtonCardsSection      = dynamic(() => import('./sections/ButtonCardsSection'),      { ssr: false })
const DownloadListSection     = dynamic(() => import('./sections/DownloadListSection'),     { ssr: false })
const TextBlockSection        = dynamic(() => import('./sections/TextBlockSection'),        { ssr: false })
const FormSection             = dynamic(() => import('./sections/FormSection'),             { ssr: false })
const FeaturedStoriesSection  = dynamic(() => import('./sections/FeaturedStoriesSection'),  { ssr: false })
const PricingSection          = dynamic(() => import('./sections/PricingSection'),          { ssr: false })
const SplitSection            = dynamic(() => import('./sections/SplitSection'),            { ssr: false })
const GalleryGridSection      = dynamic(() => import('./sections/GalleryGridSection'),      { ssr: false })
const DownloadButtonSection   = dynamic(() => import('./sections/DownloadButtonSection'),   { ssr: false })
const SitemapSection          = dynamic(() => import('./sections/SitemapSection'),          { ssr: false })
const MetaStripSection        = dynamic(() => import('./sections/MetaStripSection'),        { ssr: false })
const TwoColumnSection        = dynamic(() => import('./sections/TwoColumnSection'),        { ssr: false })
const RelatedCardsSection     = dynamic(() => import('./sections/RelatedCardsSection'),     { ssr: false })
const PatentGridSection       = dynamic(() => import('./sections/PatentGridSection'),       { ssr: false })
const ProfileSection          = dynamic(() => import('./sections/ProfileSection'),          { ssr: false })
const GlossaryAccordionSection= dynamic(() => import('./sections/GlossaryAccordionSection'),{ ssr: false })
const NumberedCardsSection    = dynamic(() => import('./sections/NumberedCardsSection'),    { ssr: false })
const TierCardsSection        = dynamic(() => import('./sections/TierCardsSection'),        { ssr: false })
const ToolCardsSection        = dynamic(() => import('./sections/ToolCardsSection'),        { ssr: false })
const ChecklistSection        = dynamic(() => import('./sections/ChecklistSection'),        { ssr: false })
const TableBlockSection       = dynamic(() => import('./sections/TableBlockSection'),       { ssr: false })
const AnchorBlockSection      = dynamic(() => import('./sections/AnchorBlockSection'),      { ssr: false })
const TimelineStepsSection    = dynamic(() => import('./sections/TimelineStepsSection'),    { ssr: false })
const PillarsSection          = dynamic(() => import('./sections/PillarsSection'),          { ssr: false })
const FrameworkPapersSection  = dynamic(() => import('./sections/FrameworkPapersSection'),  { ssr: false })

const DossierHeaderSection        = dynamic(() => import('./sections/DossierSections').then(m => ({ default: m.DossierHeaderSection })),        { ssr: false })
const DossierSectionBlock         = dynamic(() => import('./sections/DossierSections').then(m => ({ default: m.DossierSectionBlock })),         { ssr: false })
const DossierQuoteStripSection    = dynamic(() => import('./sections/DossierSections').then(m => ({ default: m.DossierQuoteStripSection })),    { ssr: false })
const DossierSpecTableSection     = dynamic(() => import('./sections/DossierSections').then(m => ({ default: m.DossierSpecTableSection })),     { ssr: false })
const DossierTimelineSection      = dynamic(() => import('./sections/DossierSections').then(m => ({ default: m.DossierTimelineSection })),      { ssr: false })
const DossierNoticeSection        = dynamic(() => import('./sections/DossierSections').then(m => ({ default: m.DossierNoticeSection })),        { ssr: false })
const DossierPrinciplesSection    = dynamic(() => import('./sections/DossierSections').then(m => ({ default: m.DossierPrinciplesSection })),    { ssr: false })
const DossierGallerySection       = dynamic(() => import('./sections/DossierSections').then(m => ({ default: m.DossierGallerySection })),       { ssr: false })
const DossierArchiveNoticeSection = dynamic(() => import('./sections/DossierSections').then(m => ({ default: m.DossierArchiveNoticeSection })), { ssr: false })
const DossierRelatedSection       = dynamic(() => import('./sections/DossierSections').then(m => ({ default: m.DossierRelatedSection })),       { ssr: false })

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

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
  frameworkPapers: FrameworkPapersSection,
  dossierHeader: DossierHeaderSection,
  dossierSection: DossierSectionBlock,
  dossierQuoteStrip: DossierQuoteStripSection,
  dossierSpecTable: DossierSpecTableSection,
  dossierTimeline: DossierTimelineSection,
  dossierNotice: DossierNoticeSection,
  dossierPrinciples: DossierPrinciplesSection,
  dossierGallery: DossierGallerySection,
  dossierArchiveNotice: DossierArchiveNoticeSection,
  dossierRelated: DossierRelatedSection,
}

const sectionDefaults = {
  cards:             { items: [], cards: [] },
  grid3:             { items: [] },
  list:              { items: [] },
  libraryCards:      { items: [], cards: [] },
  buttonCards:       { items: [], cards: [] },
  relatedCards:      { header: 'Related', cards: [] },
  toolCards:         { tools: [] },
  tierCards:         { tiers: [] },
  numberedCards:     { items: [] },
  checklist:         { items: [] },
  tableBlock:        { headers: [], rows: [] },
  timelineSteps:     { steps: [] },
  pillars:           { items: [] },
  frameworkPapers:   { papers: [] },
  patentGrid:        { cards: [], patents: [] },
  accordion:         { items: [] },
  glossaryAccordion: { groups: [] },
  statsBar:          { stats: [] },
  timeline:          { items: [] },
  downloadList:      { items: [] },
  galleryGrid:       { images: [] },
  pricing:           { columns: [] },
  logoStrip:         { logos: [] },
  metaStrip:         { items: [] },
}

const SectionRenderer = ({ sections }) => {
  if (!sections || !Array.isArray(sections)) return null

  return (
    <div className="flex flex-col">
      {sections.map((section, index) => {
        const { type, ...props } = section
        const Component = components[type]

        if (!Component) {
          return (
            <div key={index} className="container-grid section-spacing">
              <div className="bg-surface border border-border rounded-lg p-6 text-center">
                <p className="text-muted-foreground">
                  Unknown section type: <code className="text-primary-navy font-mono">{type}</code>
                </p>
              </div>
            </div>
          )
        }

        const defaults = sectionDefaults[type] || {}
        const mergedProps = { ...defaults, ...props }

        if (type === 'hero') {
          return <Component key={index} {...mergedProps} />
        }

        return (
          <LazySection key={index} index={index} threshold={3}>
            <Suspense fallback={<div className="min-h-[100px]" />}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3) }}
                variants={sectionVariants}
              >
                <Component {...mergedProps} />
              </motion.div>
            </Suspense>
          </LazySection>
        )
      })}
    </div>
  )
}

export default SectionRenderer
