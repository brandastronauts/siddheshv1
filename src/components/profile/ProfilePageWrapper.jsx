'use client'

import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Globe } from 'lucide-react';
import HeroSection from '../sections/HeroSection';
import SmartImage from '../common/SmartImage';
import ProfileTableOfContents from './ProfileTableOfContents';
import PullQuoteCard from './PullQuoteCard';

// ORCID icon (not in Lucide)
const OrcidIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM7.5 5.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM6.9 8.6h1.2v7.8H6.9V8.6zm3.6 0h3.3c3.2 0 4.7 2 4.7 3.9 0 2-1.5 3.9-4.7 3.9h-3.3V8.6zm1.2 1.1v5.6h2.1c2.5 0 3.4-1.5 3.4-2.8 0-1.3-.9-2.8-3.4-2.8h-2.1z"/>
  </svg>
);

/**
 * ProfilePageWrapper
 * 
 * Renders governance/team profile pages with:
 * - Full-width hero + meta strip at top
 * - Two-column layout: content (left) + sticky TOC (right) on desktop
 * - Enhanced quote rendering for pullquote sections
 * - Section dividers for rhythm
 * - Narrower content column for readability
 */
const ProfilePageWrapper = ({ sections = [] }) => {
  if (!sections.length) return null;

  // Separate sections into zones
  const heroSection = sections.find(s => s.type === 'hero');
  const metaSection = sections.find(s => s.type === 'metaStrip');
  const profileSection = sections.find(s => s.type === 'profile');
  const relatedSection = sections.find(s => s.type === 'relatedCards');
  
  // Content sections (textBlocks, pullquotes — everything between profile and related)
  const contentSections = sections.filter(s => 
    s.type !== 'hero' && s.type !== 'metaStrip' && s.type !== 'profile' && s.type !== 'relatedCards'
  );

  // Detect pullquote (textBlock with no header and body starting with >)
  const isPullquote = (s) => s.type === 'textBlock' && !s.header && s.body?.trim().startsWith('>');

  // Detect standalone quote lines in body text
  const renderBodyWithQuotes = (body) => {
    if (!body) return null;
    
    const paragraphs = body.split('\n\n');
    const elements = [];
    let regularParagraphs = [];

    const flushRegular = () => {
      if (regularParagraphs.length > 0) {
        elements.push({ type: 'text', content: regularParagraphs.join('\n\n') });
        regularParagraphs = [];
      }
    };

    paragraphs.forEach((p) => {
      const trimmed = p.trim();
      // Detect standalone quote: starts with > " or is a line wrapped in double quotes
      const isQuoteLine = trimmed.startsWith('> "') || 
        (trimmed.startsWith('"') && trimmed.endsWith('"') && trimmed.length > 20 && !trimmed.includes('\n'));
      
      if (isQuoteLine) {
        flushRegular();
        elements.push({ type: 'quote', content: trimmed });
      } else {
        regularParagraphs.push(p);
      }
    });
    flushRegular();

    return elements;
  };

  return (
    <div>
      {/* Full-width hero */}
      {heroSection && <HeroSection {...heroSection} />}
      
      {/* Full-width meta strip — enhanced for profile */}
      {metaSection && <ProfileMetaStrip items={metaSection.items} />}

      {/* Profile card — enhanced */}
      {profileSection && (
        <EnhancedProfileCard {...profileSection} metaItems={metaSection?.items} />
      )}

      {/* Two-column layout: content + TOC */}
      <div className="container-grid">
        <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-[1fr_200px] lg:gap-12 xl:gap-16">
          {/* Main content column */}
          <div className="max-w-[780px]">
            {/* Mobile TOC */}
            <div className="lg:hidden mt-6">
              <ProfileTableOfContents sections={[...(profileSection ? [profileSection] : []), ...contentSections]} isMobile />
            </div>

            {contentSections.map((section, index) => {
              const isLast = index === contentSections.length - 1;

              // Pullquote gets special rendering
              if (isPullquote(section)) {
                return (
                  <div key={section.id || index} id={section.id} className="py-6 md:py-8 scroll-mt-20">
                    <PullQuoteCard quote={section.body} variant="large" />
                  </div>
                );
              }

              // TextBlock with enhanced quote detection
              if (section.type === 'textBlock') {
                const bodyElements = renderBodyWithQuotes(section.body);
                
                return (
                  <div key={section.id || index} id={section.id} className="scroll-mt-20">
                    <div className={`py-8 md:py-10 ${!isLast ? 'border-b border-border/30' : ''}`}>
                      {section.sectionName && (
                        <p className="text-sm font-semibold text-accent-cyan uppercase tracking-wider mb-3">
                          {section.sectionName}
                        </p>
                      )}
                      {section.header && (
                        <h2 className="text-xl md:text-2xl font-bold text-deep-ink mb-5 font-serif">
                          {section.header}
                        </h2>
                      )}
                      {bodyElements && (
                        <div className="space-y-5">
                          {bodyElements.map((el, i) => (
                            el.type === 'quote' ? (
                              <PullQuoteCard key={i} quote={el.content} variant="inline" />
                            ) : (
                              <div
                                key={i}
                                className="text-sm text-muted-foreground whitespace-pre-line"
                                style={{ lineHeight: '1.72' }}
                              >
                                {renderBullets(el.content)}
                              </div>
                            )
                          ))}
                        </div>
                      )}
                      {section.cta && (
                        <div className="mt-5">
                          <a
                            href={section.cta.href || '#'}
                            className="inline-flex items-center gap-2 text-sm font-medium text-link-blue hover:text-secondary-blue transition-colors"
                          >
                            {section.cta.label}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                );
              }

              return null;
            })}
          </div>

          {/* Sticky TOC (desktop only) */}
          <div className="hidden lg:block">
            <ProfileTableOfContents sections={[...(profileSection ? [profileSection] : []), ...contentSections]} />
          </div>
        </div>
      </div>

      {/* Related cards — tightened */}
      {relatedSection && (
        <section className="py-10 md:py-14 bg-surface">
          <div className="container-grid">
            {relatedSection.header && (
              <h3 className="text-lg font-semibold text-deep-ink mb-4 text-center">
                {relatedSection.header}
              </h3>
            )}
            <div className={`grid grid-cols-1 gap-4 mx-auto ${
              relatedSection.cards?.length === 3 ? 'md:grid-cols-3 max-w-3xl' : 'md:grid-cols-3 max-w-4xl'
            }`}>
              {relatedSection.cards?.map((card, idx) => (
                <a
                  key={idx}
                  href={card.href || '#'}
                  className="group block bg-card rounded-xl p-5 border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5"
                >
                  <h4 className="text-sm font-semibold text-deep-ink group-hover:text-primary-navy transition-colors mb-1">
                    {card.title}
                  </h4>
                  {card.description && (
                    <p className="text-xs text-muted-foreground">{card.description}</p>
                  )}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

/* ── Enhanced Profile Card ── */
const EnhancedProfileCard = ({ name, role, image, email, socials = [], bio, metaItems = [] }) => {
  return (
    <section className="py-10 md:py-14 bg-background" id="profile-card">
      <div className="container-grid">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Profile Photo — larger */}
            {image && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="shrink-0 mx-auto md:mx-0"
              >
                <div className="w-44 h-44 md:w-52 md:h-52 rounded-2xl overflow-hidden border-2 border-border/40 shadow-lg">
                  <SmartImage
                    src={image.src}
                    alt={image.alt || name}
                    variant="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            )}

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex-1 text-center md:text-left"
            >
              {name && (
                <h2 className="text-2xl md:text-3xl font-bold text-deep-ink mb-1 font-serif">{name}</h2>
              )}
              {role && (
                <p className="text-sm font-medium text-muted-foreground mb-4">{role}</p>
              )}

              {/* Key Facts mini-grid from metaItems */}
              {metaItems.length > 0 && (
                <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-5 max-w-md mx-auto md:mx-0">
                  {metaItems.slice(0, 4).map((item, idx) => (
                    <div key={idx} className="text-left">
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground/70 font-semibold">
                        {item.label}
                      </span>
                      <p className="text-xs font-medium text-deep-ink leading-tight mt-0.5">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {bio && (
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-xl" style={{ lineHeight: '1.65' }}>
                  {bio}
                </p>
              )}

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start">
                {email && (
                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl bg-primary-navy text-white hover:bg-primary-navy/90 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Contact
                  </a>
                )}
                {socials.map((social, idx) => {
                  const iconMap = { linkedin: Linkedin, website: Globe, orcid: OrcidIcon };
                  const Icon = iconMap[social.type] || Globe;
                  return (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label || social.type}
                      className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-border/50 bg-surface text-muted-foreground hover:text-deep-ink hover:border-border transition-all"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── Enhanced MetaStrip for profiles ── */
const ProfileMetaStrip = ({ items = [] }) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="bg-surface border-y border-border/30">
      <div className="container-grid">
        <div className="flex flex-wrap items-stretch justify-center gap-3 py-5 max-w-4xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col items-center px-5 py-3 rounded-xl bg-background border border-border/40 min-w-[140px]"
            >
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground/70 font-semibold mb-1">
                {item.label}
              </span>
              <span className="text-xs font-medium text-deep-ink text-center leading-tight">
                {item.value}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Bullet rendering helper ── */
function renderBullets(text) {
  if (!text) return null;
  
  const lines = text.split('\n');
  const result = [];
  let currentParagraph = [];

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      result.push(
        <span key={`p-${result.length}`}>
          {currentParagraph.join('\n')}
        </span>
      );
      currentParagraph = [];
    }
  };

  lines.forEach((line) => {
    if (line.trim().startsWith('•')) {
      flushParagraph();
      result.push(
        <span key={`b-${result.length}`} className="flex gap-2 items-start">
          <span className="text-accent-cyan mt-0.5 shrink-0">•</span>
          <span>{line.trim().slice(1).trim()}</span>
        </span>
      );
    } else {
      currentParagraph.push(line);
    }
  });
  flushParagraph();

  return result;
}

export default ProfilePageWrapper;
