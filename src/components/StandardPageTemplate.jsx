import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { getIcon } from '../lib/iconMap';
import { boldifyText } from '../lib/boldifyText';

/* ═══════════════════════════════════════════════════════════════════
   TEXT PARSING HELPERS
   ═══════════════════════════════════════════════════════════════════ */

/** Split body text on double newlines into paragraphs */
const splitParagraphs = (text) => {
  if (!text) return [];
  return text.split(/\n\n+/).map(p => p.trim()).filter(Boolean);
};

/** Check if a line is a bullet */
const isBulletLine = (line) => /^•\s/.test(line.trim());

/** Check if a line is a numbered item */
const isNumberedLine = (line) => /^\d+\.\s/.test(line.trim());

/**
 * Parse a paragraph block into structured elements:
 * - { type: 'paragraph', text }
 * - { type: 'bullets', items: [] }
 * - { type: 'numbered', items: [] }
 */
const parseBlock = (block) => {
  const lines = block.split('\n').map(l => l.trim()).filter(Boolean);
  const elements = [];
  let i = 0;

  while (i < lines.length) {
    if (isBulletLine(lines[i])) {
      const items = [];
      while (i < lines.length && isBulletLine(lines[i])) {
        items.push(lines[i].replace(/^•\s*/, ''));
        i++;
      }
      elements.push({ type: 'bullets', items });
    } else if (isNumberedLine(lines[i])) {
      const items = [];
      while (i < lines.length && isNumberedLine(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s*/, ''));
        i++;
      }
      elements.push({ type: 'numbered', items });
    } else {
      // Collect consecutive non-list lines as paragraph text
      const pLines = [];
      while (i < lines.length && !isBulletLine(lines[i]) && !isNumberedLine(lines[i])) {
        pLines.push(lines[i]);
        i++;
      }
      elements.push({ type: 'paragraph', text: pLines.join('\n') });
    }
  }
  return elements;
};

/** Parse entire body into renderable elements */
const parseBody = (body) => {
  if (!body) return [];
  const paragraphs = splitParagraphs(body);
  const all = [];
  paragraphs.forEach(p => {
    const elements = parseBlock(p);
    all.push(...elements);
  });
  return all;
};

/* ═══════════════════════════════════════════════════════════════════
   RENDERED ELEMENTS
   ═══════════════════════════════════════════════════════════════════ */

const RichBody = ({ body }) => {
  const elements = useMemo(() => parseBody(body), [body]);

  return (
    <div className="space-y-4">
      {elements.map((el, i) => {
        if (el.type === 'bullets') {
          return (
            <ul key={i} className="space-y-2 pl-1">
              {el.items.map((item, j) => (
                <li key={j} className="flex items-start gap-3 text-body text-foreground/85 leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-cyan flex-shrink-0" aria-hidden="true" />
                  <span>{boldifyText(item)}</span>
                </li>
              ))}
            </ul>
          );
        }
        if (el.type === 'numbered') {
          return (
            <ol key={i} className="space-y-3 pl-1 counter-reset-custom">
              {el.items.map((item, j) => (
                <li key={j} className="flex items-start gap-3 text-body text-foreground/85 leading-relaxed">
                  <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-primary-navy/8 text-primary-navy text-xs font-bold flex items-center justify-center mt-0.5">
                    {j + 1}
                  </span>
                  <span className="pt-0.5">{boldifyText(item)}</span>
                </li>
              ))}
            </ol>
          );
        }
        // paragraph
        return (
          <p key={i} className="text-body text-foreground/80 leading-relaxed whitespace-pre-line">
            {boldifyText(el.text)}
          </p>
        );
      })}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   SECTION COMPONENTS
   ═══════════════════════════════════════════════════════════════════ */

const LightHero = ({ headline, subheadline, badge }) => (
  <section className="relative overflow-hidden bg-surface border-b border-border/30">
    <div className="absolute inset-0 pattern-grid opacity-[0.12]" />
    <div className="container-grid relative z-10 pt-16 pb-12 md:pt-24 md:pb-16">
      <div className="max-w-3xl mx-auto text-center">
        {badge && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <span className="badge-navy mb-4 inline-block">{badge}</span>
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-h1 md:text-display-2 text-deep-ink mb-4 text-balance"
        >
          {headline}
        </motion.h1>
        {subheadline && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            {subheadline}
          </motion.p>
        )}
      </div>
    </div>
  </section>
);

const TableOfContents = ({ sections }) => {
  const headings = sections.filter(s =>
    (s.type === 'textBlock' || s.type === 'comparisonTable' || s.type === 'highlightBox' || s.type === 'grid3') && (s.heading || s.header)
  );
  if (headings.length < 3) return null;

  return (
    <nav className="bg-background border-b border-border/30" aria-label="Table of contents">
      <div className="container-grid py-4">
        <div className="max-w-[860px] mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">On this page</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {headings.map((s, i) => (
              <a
                key={i}
                href={`#${s.id}`}
                className="text-sm text-link-blue hover:text-secondary-blue transition-colors py-1"
              >
                {s.heading || s.header}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

const TextSection = ({ id, heading, sectionName, body, cta, isFirst }) => (
  <section id={id} className={`${isFirst ? 'pt-12 md:pt-16' : 'pt-10 md:pt-14'} pb-2 bg-background`}>
    <div className="container-grid">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-[860px] mx-auto"
      >
        {sectionName && !heading && (
          <h3 className="text-h3 text-deep-ink mb-4 flex items-center gap-2">
            <span className="w-1 h-5 rounded-full bg-accent-cyan" aria-hidden="true" />
            {sectionName}
          </h3>
        )}
        {heading && (
          <div className="mb-6">
            <div className="divider-elegant mb-6" />
            <h2 className="text-h2 md:text-h1 text-deep-ink">{heading}</h2>
          </div>
        )}
        {sectionName && heading && (
          <p className="text-sm font-semibold text-accent-cyan uppercase tracking-wider mb-3">{sectionName}</p>
        )}

        <RichBody body={body} />

        {cta && (
          <div className="mt-6">
            {cta.href?.startsWith('http') ? (
              <a
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-link-blue hover:text-secondary-blue transition-colors group"
              >
                {cta.label}
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <Link
                to={cta.href || '#'}
                className="inline-flex items-center gap-2 text-sm font-medium text-link-blue hover:text-secondary-blue transition-colors group"
              >
                {cta.label}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            )}
          </div>
        )}
      </motion.div>
    </div>
  </section>
);

const TableSection = ({ id, heading, headers, rows, intro }) => (
  <section id={id} className="pt-10 md:pt-14 pb-2 bg-background">
    <div className="container-grid">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-[860px] mx-auto"
      >
        {heading && (
          <div className="mb-6">
            <div className="divider-elegant mb-6" />
            <h2 className="text-h2 md:text-h1 text-deep-ink">{heading}</h2>
          </div>
        )}
        {intro && <p className="text-body text-muted-foreground mb-6">{intro}</p>}

        <p className="text-xs text-muted-foreground text-right mb-2 md:hidden" aria-hidden="true">← Scroll →</p>
        <div className="overflow-x-auto -mx-5 px-5 md:mx-0 md:px-0">
          <table className="w-full bg-card rounded-xl border border-border/50 shadow-card overflow-hidden min-w-[400px]">
            {headers && (
              <thead>
                <tr className="bg-primary-navy text-white">
                  {headers.map((h, i) => (
                    <th key={i} scope="col" className="px-5 py-3.5 text-left text-sm font-semibold first:rounded-tl-xl last:rounded-tr-xl">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody className="divide-y divide-border">
              {(rows || []).map((row, ri) => {
                const cells = Array.isArray(row) ? row : [row];
                return (
                  <tr key={ri} className="hover:bg-surface/50 transition-colors">
                    {cells.map((cell, ci) => (
                      <td key={ci} className={`px-5 py-3.5 text-sm ${ci === 0 ? 'font-medium text-deep-ink' : 'text-muted-foreground'}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  </section>
);

const HighlightSection = ({ id, heading, body }) => {
  const elements = useMemo(() => parseBody(body), [body]);

  return (
    <section id={id} className="py-10 md:py-14 bg-background">
      <div className="container-grid">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[860px] mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-navy via-secondary-blue to-primary-navy" />
            <div className="absolute inset-0 opacity-10 pattern-grid" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-cyan/20 to-transparent" />
            <div className="relative z-10 p-8 md:p-12">
              <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full bg-white/15 text-white/90 mb-4">
                Coming Soon
              </span>
              {heading && (
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">{heading}</h2>
              )}
              <div className="space-y-4">
                {elements.map((el, i) => {
                  if (el.type === 'bullets') {
                    return (
                      <ul key={i} className="space-y-2">
                        {el.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-3 text-white/85 text-sm md:text-base leading-relaxed">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-cyan flex-shrink-0" aria-hidden="true" />
                            <span>{boldifyText(item)}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={i} className="text-white/80 text-sm md:text-base leading-relaxed whitespace-pre-line">
                      {boldifyText(el.text)}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const CtaGridSection = ({ id, header, items }) => (
  <section id={id} className="py-12 md:py-16 bg-surface border-t border-border/30">
    <div className="container-grid">
      <div className="max-w-[860px] mx-auto">
        {header && (
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-h2 md:text-h1 text-deep-ink mb-8 text-center"
          >
            {header}
          </motion.h2>
        )}
        <div className={`grid grid-cols-1 gap-6 ${items?.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
          {(items || []).map((item, i) => {
            const Icon = getIcon(item.icon);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-elegant p-7 flex flex-col"
              >
                {Icon && (
                  <div className="w-10 h-10 rounded-lg bg-accent-cyan/8 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-accent-cyan" />
                  </div>
                )}
                <h3 className="text-lg font-semibold text-deep-ink mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                  {item.body || item.description}
                </p>
                {item.email && (
                  <a href={`mailto:${item.email}`} className="text-sm text-link-blue hover:text-secondary-blue font-medium">
                    {item.email}
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════════════════
   STANDARD PAGE TEMPLATE
   ═══════════════════════════════════════════════════════════════════ */

const StandardPageTemplate = ({ page, badge }) => {
  if (!page?.sections) return null;

  const sections = page.sections;
  const heroSection = sections.find(s => s.type === 'hero');
  const contentSections = sections.filter(s => s.type !== 'hero');

  let firstTextFound = false;

  return (
    <>
      {heroSection && (
        <LightHero
          headline={heroSection.headline || heroSection.heading}
          subheadline={heroSection.subheadline || heroSection.subheading}
          badge={badge}
        />
      )}

      <TableOfContents sections={contentSections} />

      {contentSections.map((section, index) => {
        const { type, ...props } = section;

        if (type === 'textBlock') {
          const isFirst = !firstTextFound;
          firstTextFound = true;
          return <TextSection key={section.id || index} isFirst={isFirst} {...props} />;
        }

        if (type === 'comparisonTable') {
          return <TableSection key={section.id || index} {...props} />;
        }

        if (type === 'highlightBox') {
          return <HighlightSection key={section.id || index} {...props} />;
        }

        if (type === 'grid3') {
          return <CtaGridSection key={section.id || index} {...props} />;
        }

        return null;
      })}

      {/* Bottom spacer */}
      <div className="h-12 md:h-16 bg-background" />
    </>
  );
};

export default StandardPageTemplate;
