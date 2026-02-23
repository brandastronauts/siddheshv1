import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download, ExternalLink, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import SmartImage from '../common/SmartImage';
import ExpandableText from '../common/ExpandableText';
import { getIcon } from '../../lib/iconMap';

const TwoColumnSection = ({ header, intro, left = {}, right = {}, footer, compact = false, variant }) => {
  const [copied, setCopied] = useState(false);
  const isCards = variant === 'cards';

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderCta = (cta) => {
    if (!cta) return null;
    
    const isInternal = cta.href?.startsWith('/');
    const isExternal = cta.href?.startsWith('http');
    const isDownload = cta.download;
    const className = "inline-flex items-center gap-2 text-sm font-medium text-link-blue hover:text-secondary-blue transition-colors group";
    
    const Icon = isDownload ? Download : isExternal ? ExternalLink : ArrowRight;
    const content = (
      <>
        {cta.label}
        <Icon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
      </>
    );

    if (isInternal) {
      return <Link to={cta.href} className={className}>{content}</Link>;
    }
    return (
      <a 
        href={cta.href} 
        className={className} 
        target={isExternal ? "_blank" : undefined} 
        rel={isExternal ? "noopener noreferrer" : undefined}
        download={isDownload}
      >
        {content}
      </a>
    );
  };

  /* ── Styled card column for variant="cards" ── */
  const renderCardColumn = (col) => {
    const ColIcon = getIcon(col.icon);
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl border border-border/50 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden h-full"
      >
        {/* Card header */}
        <div className="bg-gradient-to-br from-surface to-white p-6 pb-4 border-b border-border/30">
          <div className="flex items-center gap-3 mb-2">
            {ColIcon && (
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-cyan/10 to-primary-navy/10 flex items-center justify-center flex-shrink-0">
                <ColIcon className="w-5 h-5 text-accent-cyan" />
              </div>
            )}
            <h3 className="text-xl font-bold text-deep-ink">{col.heading}</h3>
          </div>
          {col.lead && (
            <p className="text-sm text-muted-foreground leading-relaxed mt-2">{col.lead}</p>
          )}
        </div>

        {/* Items list */}
        <div className="p-6 space-y-5">
          {(col.items || []).map((item, i) => (
            <div key={i} className="flex gap-3">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-accent-cyan flex-shrink-0" />
              <div>
                <span className="text-sm font-semibold text-deep-ink">{item.label}:</span>
                <span className="text-sm text-muted-foreground ml-1 leading-relaxed">{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    );
  };

  /* ── Plain column (original format) ── */
  const renderColumnContent = (col) => {
    const sections = col.sections || (col.heading || col.body ? [{ title: col.heading, body: col.body, bullets: col.bullets }] : []);
    
    return sections.map((section, index) => (
      <motion.div 
        key={index}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="mb-8 last:mb-0"
      >
        {section.title && (
          <h3 className="text-lg font-bold text-deep-ink mb-3">{section.title}</h3>
        )}
        {section.body && (
          <ExpandableText
            text={section.body}
            collapsedLines={6}
            minChars={300}
            textClassName="leading-relaxed whitespace-pre-line"
          />
        )}
        {section.bullets && (
          <ul className="mt-3 space-y-2">
            {section.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 flex-shrink-0" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    ));
  };

  const renderLeftContent = () => renderColumnContent(left);

  const renderRightPanel = () => {
    const panels = right.panels || [];

    return panels.map((panel, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 + index * 0.1 }}
        className="bg-surface border border-border/50 rounded-xl p-6 mb-6 last:mb-0"
      >
        {panel.title && (
          <h4 className="text-sm font-semibold text-deep-ink uppercase tracking-wider mb-4">
            {panel.title}
          </h4>
        )}

        {panel.links && (
          <div className="space-y-3">
            {panel.links.map((link, i) => (
              <div key={i}>{renderCta(link)}</div>
            ))}
          </div>
        )}

        {panel.citation && (
          <div className="bg-white border border-border/30 rounded-lg p-4">
            <p className="text-sm text-muted-foreground leading-relaxed mb-3 italic">
              {panel.citation}
            </p>
            <button
              onClick={() => handleCopy(panel.citation)}
              className="inline-flex items-center gap-2 text-xs font-medium text-link-blue hover:text-secondary-blue transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied!' : 'Copy citation'}
            </button>
          </div>
        )}

        {panel.profiles && (
          <div className="space-y-3">
            {panel.profiles.map((profile, i) => (
              <Link
                key={i}
                to={profile.href || '#'}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-full overflow-hidden bg-border/50 flex-shrink-0">
                  {profile.image ? (
                    <SmartImage
                      src={profile.image}
                      alt={profile.name}
                      variant="avatar"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs">
                      {profile.name?.charAt(0)}
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-deep-ink group-hover:text-primary-navy transition-colors truncate">
                    {profile.name}
                  </p>
                  {profile.role && (
                    <p className="text-xs text-muted-foreground truncate">{profile.role}</p>
                  )}
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        )}

        {panel.images && (
          <div className="grid grid-cols-3 gap-2">
            {panel.images.map((img, i) => (
              <div key={i} className="aspect-square rounded-lg overflow-hidden bg-border/30">
                <SmartImage
                  src={img.src}
                  alt={img.alt || 'Gallery image'}
                  variant="card"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </motion.div>
    ));
  };

  const hasRightPanels = right.panels && right.panels.length > 0;

  return (
    <section className={`${compact ? 'py-8 md:py-12' : 'section-spacing'} bg-background`}>
      <div className="container-grid">
        {header && (
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-deep-ink mb-6"
          >
            {header}
          </motion.h2>
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

        {isCards ? (
          /* Cards variant — equal two-column styled cards */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {renderCardColumn(left)}
            {renderCardColumn(right)}
          </div>
        ) : (
          <div className={`grid grid-cols-1 ${hasRightPanels ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-8 lg:gap-12`}>
            <div className={hasRightPanels ? 'lg:col-span-2' : ''}>
              {renderLeftContent()}
            </div>
            <div className={hasRightPanels ? 'lg:col-span-1' : ''}>
              {hasRightPanels ? renderRightPanel() : renderColumnContent(right)}
            </div>
          </div>
        )}

        {footer && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground text-center mt-8"
          >
            {footer}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default TwoColumnSection;
