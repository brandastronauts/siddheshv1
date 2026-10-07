import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import SmartImage from '../common/SmartImage';
import ExpandableText from '../common/ExpandableText';
import MobileExpandModal from '../common/MobileExpandModal';
import { getIcon } from '../../lib/iconMap';
import { boldifyText } from '../../lib/boldifyText';
import { Button } from '../ui/button';

const CardsSection = ({ id, heading, header, intro, items, cards, variant, loadMore }) => {
  const title = header || heading;
  const cardData = cards || items || [];
  const isPressRoom = variant === 'pressRoom';
  const isProfiles = variant === 'profiles';
  const isNewsGrid = variant === 'newsGrid';
  const hasImages = cardData.some(card => card.image);
  const batchSize = loadMore?.batchSize;
  const [visibleCount, setVisibleCount] = useState(batchSize || cardData.length);
  const visibleCards = batchSize ? cardData.slice(0, visibleCount) : cardData;

  const renderAction = (action) => {
    if (!action) return null;
    
    if (action.disabled) {
      return (
        <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground opacity-60 cursor-not-allowed">
          {action.label}
        </span>
      );
    }
    
    const isExternal = action.external || action.href?.startsWith('http');
    
    if (isExternal) {
      return (
        <a
          href={action.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-link-blue hover:text-secondary-blue transition-colors group"
        >
          {action.label}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      );
    }

    return (
      <Link
        to={action.href || '#'}
        className="inline-flex items-center gap-2 text-sm font-medium text-link-blue hover:text-secondary-blue transition-colors group"
      >
        {action.label}
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Link>
    );
  };

  return (
    <section id={id} className="section-spacing bg-background relative">
      <div className="container-grid">
        {title && (
          <h2 className="hero-fade-in text-3xl md:text-4xl font-bold text-center text-deep-ink mb-6">
            {title}
          </h2>
        )}

        {intro && (
          <motion.p 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12"
          >
            {intro}
          </motion.p>
        )}
        
        <div className={`grid grid-cols-1 ${
          isPressRoom 
            ? 'lg:grid-cols-1 max-w-4xl mx-auto gap-6' 
            : isProfiles
              ? cardData.length === 2
                ? 'md:grid-cols-2 max-w-2xl mx-auto gap-6'
                : cardData.length <= 3
                  ? 'md:grid-cols-2 lg:grid-cols-3 gap-6'
                  : 'md:grid-cols-2 lg:grid-cols-3 gap-6'
              : cardData.length === 1
                ? 'max-w-lg mx-auto gap-6'
                : cardData.length === 2
                  ? 'md:grid-cols-2 max-w-3xl mx-auto gap-6'
                  : cardData.length === 4 && !hasImages
                    ? 'sm:grid-cols-2 lg:grid-cols-4 gap-6'
                    : 'md:grid-cols-2 lg:grid-cols-3 gap-6'
        }`}>
          {visibleCards.map((item, index) => {
            const bodyText = item.body || item.description || '';
            const cardTitle = item.headline || item.title || '';
            const cardAction = item.action || item.cta;

            return (
              <motion.div
                key={item.id || index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`card-elegant min-w-0 overflow-hidden group flex flex-col ${isProfiles ? 'text-center' : ''}`}
              >
                {/* Avatar for profiles variant */}
                {isProfiles && item.image && (
                  <div className="pt-6 flex justify-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden bg-surface border-2 border-border/50">
                      <SmartImage
                        src={item.image.src}
                        alt={item.image.alt}
                        variant="avatar"
                        privacyBlur={item.image.privacyBlur}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}

                {/* Card image for non-profile variants */}
                {!isProfiles && item.image && (
                  <div className="relative h-48 overflow-hidden">
                    {item.image.preserveContent ? (
                      <img
                        src={item.image.src}
                        alt={item.image.alt}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-contain bg-surface"
                      />
                    ) : <SmartImage
                      src={item.image.src}
                      alt={item.image.alt}
                      variant={item.image.variant || 'card'}
                      privacyBlur={item.image.privacyBlur}
                      aspect="16:9"
                      className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                    />}
                    {/* Gradient overlay */}
                    {!item.image.preserveContent && <div className="absolute inset-0 bg-gradient-to-t from-deep-ink/20 to-transparent" />}
                  </div>
                )}

                <div className="p-6 lg:p-8 flex flex-col flex-1">
                  {/* Tag for pressRoom or newsGrid variant */}
                  {item.tag && (
                    <span className={`mb-3 ${isNewsGrid ? 'inline-block text-xs font-semibold text-accent-cyan uppercase tracking-wider' : isProfiles ? 'block text-center text-xs font-bold text-accent-cyan uppercase tracking-wider' : 'inline-block badge-accent'}`}>
                      {item.tag}
                    </span>
                  )}

                  {/* Icon for cards with icon field */}
                  {!isProfiles && !item.image && (() => {
                    const CardIcon = getIcon(item.icon);
                    return CardIcon ? (
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-cyan/10 to-primary-navy/10 flex items-center justify-center mb-4">
                        <CardIcon className="w-5 h-5 text-accent-cyan" aria-hidden="true" />
                      </div>
                    ) : null;
                  })()}

                  <h3 className="text-xl font-semibold text-deep-ink mb-2 break-words group-hover:text-primary-navy transition-colors">
                    {cardTitle}
                  </h3>
                  {item.authors && <p className="text-sm text-muted-foreground mb-3">{item.authors}</p>}
                  
                  {/* Meta for newsGrid */}
                  {item.meta && (
                    <p className="text-xs text-muted-foreground mb-3 break-words">
                      {item.doi ? <a href={item.doi} target="_blank" rel="noopener noreferrer" className="text-link-blue hover:underline">{item.meta}</a> : item.meta}
                    </p>
                  )}
                  
                  {item.subtitle && !item.meta && (
                    <p className="text-sm text-accent-cyan font-medium mb-3">
                      {item.subtitle}
                    </p>
                  )}
                  
                  {/* Body text — expandable if long */}
                  {item.verbatim ? (
                    <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line line-clamp-4 mb-5">{bodyText}</p>
                  ) : <ExpandableText text={bodyText} collapsedLines={4} minChars={200} className="mb-5" />}

                  {/* Action button */}
                  <div className={`mt-auto pt-2 flex flex-wrap items-center gap-3 ${isProfiles ? 'justify-center' : ''}`}>
                    {cardAction && renderAction(cardAction)}
                    {item.linkedin && (
                      <a
                        href={item.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${cardTitle} on LinkedIn`}
                        className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-border/50 bg-surface text-muted-foreground hover:text-primary-navy hover:border-primary-navy/40 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-cyan/40"
                      >
                        <Linkedin className="w-4 h-4" aria-hidden="true" />
                      </a>
                    )}
                    {item.secondaryAction && (
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground border border-border rounded-lg px-4 py-2 opacity-70 cursor-default">
                        {item.secondaryAction.label}
                      </span>
                    )}
                  </div>

                  {/* Mobile expand modal removed — ExpandableText handles inline expand */}
                </div>
              </motion.div>
            );
          })}
        </div>
        {batchSize && visibleCount < cardData.length && (
          <div className="mt-12 text-center">
            <Button size="lg" className="btn-primary" onClick={() => setVisibleCount(count => Math.min(count + batchSize, cardData.length))}>
              {loadMore.label}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CardsSection;
