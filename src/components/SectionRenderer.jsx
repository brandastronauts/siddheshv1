import { motion } from 'framer-motion';
import HeroSection from './sections/HeroSection';
import TickerSection from './sections/TickerSection';
import Grid3Section from './sections/Grid3Section';
import CardsSection from './sections/CardsSection';
import ListSection from './sections/ListSection';
import LibraryCardsSection from './sections/LibraryCardsSection';
import AccordionSection from './sections/AccordionSection';
import StatsBarSection from './sections/StatsBarSection';
import HighlightBoxSection from './sections/HighlightBoxSection';
import TimelineSection from './sections/TimelineSection';
import ComparisonTableSection from './sections/ComparisonTableSection';
import BentoSection from './sections/BentoSection';
import LogoStripSection from './sections/LogoStripSection';
import ButtonCardsSection from './sections/ButtonCardsSection';
import DownloadListSection from './sections/DownloadListSection';
import TextBlockSection from './sections/TextBlockSection';
import FormSection from './sections/FormSection';
import FeaturedStoriesSection from './sections/FeaturedStoriesSection';
import PricingSection from './sections/PricingSection';
import SplitSection from './sections/SplitSection';
import GalleryGridSection from './sections/GalleryGridSection';
import DownloadButtonSection from './sections/DownloadButtonSection';
import SitemapSection from './sections/SitemapSection';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SectionRenderer = ({ sections }) => {
  if (!sections || !Array.isArray(sections)) {
    return null;
  }

  const getSectionComponent = (section, index) => {
    const { type, ...props } = section;

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
    };

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

    return (
      <motion.div
        key={index}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        variants={sectionVariants}
      >
        <Component {...props} />
      </motion.div>
    );
  };

  return (
    <div className="flex flex-col">
      {sections.map((section, index) => getSectionComponent(section, index))}
    </div>
  );
};

export default SectionRenderer;
