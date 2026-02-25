import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { getIcon } from '../../lib/iconMap';

// Import card images
import publicationsImg from '@/assets/cards/publications-card.jpg';
import patentsImg from '@/assets/cards/patents-card.jpg';
import booksImg from '@/assets/cards/books-card.jpg';
import teamImg from '@/assets/cards/team-card.jpg';
import downloadsImg from '@/assets/cards/downloads-card.jpg';

// Image map to override content-provided URLs with local assets
const cardImageMap = {
  'Publications': publicationsImg,
  'Patents': patentsImg,
  'Books': booksImg,
  'Team': teamImg,
  'Downloads': downloadsImg,
};

// Fallback image for failed loads
const FALLBACK_IMAGE = publicationsImg;

// Default fallback cards for Explore Registries
const defaultRegistryCards = [
  {
    title: "Publications",
    icon: "archive",
    description: "Administrative records, case studies, datasets, and open science archives.",
    image: publicationsImg,
    button: { label: "Browse Publications", href: "/publications" }
  },
  {
    title: "Patents",
    icon: "lightbulb",
    description: "Student innovation outcomes, patent filings, and technical documentation.",
    image: patentsImg,
    button: { label: "View Patents", href: "/patents" }
  },
  {
    title: "Books",
    icon: "book",
    description: "Long-form publications supporting families, educators, and research partners.",
    image: booksImg,
    button: { label: "Explore Books", href: "/books" }
  },
  {
    title: "Team",
    icon: "users",
    description: "Researchers, embedded fellows, leadership, and institutional collaborators.",
    image: teamImg,
    button: { label: "Meet the Team", href: "/team" }
  },
  {
    title: "Downloads",
    icon: "download",
    description: "Technical briefs, presentations, proceedings, and public documents.",
    image: downloadsImg,
    button: { label: "Access Downloads", href: "/downloads" }
  }
];

const ButtonCardsSection = ({ heading, header, items, cards, footerNote }) => {
  const title = header || heading;
  
  // Use provided cards/items, or fall back to default registry cards
  const rawCardData = cards || items || [];
  const cardData = rawCardData.length > 0 ? rawCardData : defaultRegistryCards;

  const renderButton = (item) => {
    const buttonData = item.button;
    if (!buttonData) return null;

    const isAnchor = buttonData.href?.startsWith('#');
    const isExternal = buttonData.href?.startsWith('http');

    if (isAnchor) {
      return (
        <a
          href={buttonData.href}
          className="inline-flex items-center gap-2 text-sm font-medium text-link-blue hover:text-secondary-blue transition-colors group/btn"
        >
          {buttonData.label}
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </a>
      );
    }

    if (isExternal) {
      return (
        <a
          href={buttonData.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-link-blue hover:text-secondary-blue transition-colors group/btn"
        >
          {buttonData.label}
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </a>
      );
    }

    return (
      <Link
        to={buttonData.href || '/'}
        className="inline-flex items-center gap-2 text-sm font-medium text-link-blue hover:text-secondary-blue transition-colors group/btn"
      >
        {buttonData.label}
        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
      </Link>
    );
  };

  return (
    <section className="section-spacing bg-surface">
      <div className="container-grid">
        {title && (
          <motion.h2 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-deep-ink mb-6"
          >
            {title}
          </motion.h2>
        )}
        
        {/* Responsive grid: 5-col for 5 cards, 3-col centered for 3 cards */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto ${
          cardData.length <= 3 
            ? 'lg:grid-cols-3 max-w-5xl' 
            : cardData.length === 4 
              ? 'lg:grid-cols-4 max-w-6xl' 
              : 'lg:grid-cols-3 xl:grid-cols-5 max-w-7xl'
        }`}>
          {cardData.map((item, index) => {
            const IconComponent = getIcon(item.icon);
            const cardTitle = item.headline || item.title;
            const cardBody = item.body || item.description;
            const cardImage = cardImageMap[cardTitle] || item.image;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50 group flex flex-col"
              >
                {/* Square image container */}
                {cardImage && (
                  <div className="aspect-square w-full overflow-hidden">
                    <img
                      src={cardImage}
                      alt={cardTitle || 'Registry image'}
                      className="w-full h-full object-cover grayscale transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      crossOrigin="anonymous"
                      onError={(e) => {
                        e.currentTarget.src = FALLBACK_IMAGE;
                      }}
                    />
                  </div>
                )}
                
                <div className="p-5 flex flex-col flex-1">
                  {IconComponent && !cardImage && (
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center group-hover:bg-accent-cyan/20 transition-colors mb-4">
                      <IconComponent className="w-6 h-6 text-accent-cyan" />
                    </div>
                  )}
                  
                  <h3 className="text-lg font-semibold text-deep-ink mb-2 group-hover:text-primary-navy transition-colors">
                    {cardTitle}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                    {cardBody}
                  </p>
                  
                  {renderButton(item)}
                </div>
              </motion.div>
            );
          })}
        </div>

        {footerNote && (
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center text-sm text-muted-foreground mt-8"
          >
            {footerNote}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default ButtonCardsSection;