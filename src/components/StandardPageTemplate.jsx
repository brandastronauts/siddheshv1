'use client'

import { useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Shield, BookOpen, Scale, FlaskConical, ClipboardCheck, Sparkles } from 'lucide-react';
import { getIcon } from '../lib/iconMap';
import { boldifyText } from '../lib/boldifyText';

/* ═══════════════════════════════════════════════════════════════════
   TEXT PARSING HELPERS
   ═══════════════════════════════════════════════════════════════════ */

const splitParagraphs = (text) => {
  if (!text) return [];
  return text.split(/\n\n+/).map(p => p.trim()).filter(Boolean);
};

const isBulletLine = (line) => /^•\s/.test(line.trim());
const isNumberedLine = (line) => /^\d+\.\s/.test(line.trim());

// Detect if a line is a short "sub-title" (no trailing period, under 60 chars, followed by longer text)
const isSubTitle = (line, nextLine) => {
  if (!line || !nextLine) return false;
  const trimmed = line.trim();
  if (trimmed.length > 65 || trimmed.length < 3) return false;
  if (/[.!?,;]$/.test(trimmed)) return false;
  if (isBulletLine(trimmed) || isNumberedLine(trimmed)) return false;
  // Next line should be longer descriptive text
  if (isBulletLine(nextLine) || isNumberedLine(nextLine)) return false;
  if (nextLine.trim().length > trimmed.length) return true;
  return false;
};

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
    } else if (isSubTitle(lines[i], lines[i + 1])) {
      elements.push({ type: 'subtitle', text: lines[i] });
      i++;
    } else {
      const pLines = [];
      while (i < lines.length && !isBulletLine(lines[i]) && !isNumberedLine(lines[i]) && !isSubTitle(lines[i], lines[i + 1])) {
        pLines.push(lines[i]);
        i++;
      }
      elements.push({ type: 'paragraph', text: pLines.join('\n') });
    }
  }
  return elements;
};

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

// Renders bullet items with the part before ":" as bold
const boldifyBulletItem = (text, isLight = false) => {
  const colonIdx = text.indexOf(':');
  if (colonIdx > 0 && colonIdx < 50) {
    const label = text.slice(0, colonIdx);
    const rest = text.slice(colonIdx);
    return (
      <>
        <strong className={`font-semibold ${isLight ? 'text-white' : 'text-deep-ink'}`}>{label}</strong>
        {boldifyText(rest)}
      </>
    );
  }
  return boldifyText(text);
};

const RichBody = ({ body, variant = 'default' }) => {
  const elements = useMemo(() => parseBody(body), [body]);
  const isLight = variant === 'light';

  return (
    <div className="space-y-4">
      {elements.map((el, i) => {
        if (el.type === 'bullets') {
          return (
            <div key={i} className={`rounded-xl p-5 ${isLight ? 'bg-white/5' : 'bg-surface/80 border border-border/30'}`}>
              <ul className="space-y-3">
                {el.items.map((item, j) => (
                  <li key={j} className={`flex items-start gap-3 text-body leading-relaxed ${isLight ? 'text-white/85' : 'text-foreground/85'}`}>
                    <span className="mt-[7px] w-2 h-2 rounded-full bg-accent-cyan flex-shrink-0" aria-hidden="true" />
                    <span>{boldifyBulletItem(item, isLight)}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        }
        if (el.type === 'numbered') {
          return (
            <div key={i} className="space-y-3">
              {el.items.map((item, j) => (
                <motion.div
                  key={j}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: j * 0.06 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-surface/80 border border-border/30 hover:border-accent-cyan/20 transition-colors"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-gradient-to-br from-primary-navy to-secondary-blue text-white text-sm font-bold flex items-center justify-center shadow-sm">
                    {j + 1}
                  </span>
                  <span className="pt-1 text-body text-foreground/85 leading-relaxed">{boldifyText(item)}</span>
                </motion.div>
              ))}
            </div>
          );
        }
        if (el.type === 'subtitle') {
          return (
            <p key={i} className={`text-base font-semibold mt-2 ${isLight ? 'text-white' : 'text-deep-ink'}`}>
              {el.text}
            </p>
          );
        }
        return (
          <p key={i} className={`text-body leading-relaxed whitespace-pre-line ${isLight ? 'text-white/80' : 'text-foreground/75'}`}>
            {boldifyText(el.text)}
          </p>
        );
      })}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   HERO WITH GRADIENT ORB + GLASSMORPHISM
   ═══════════════════════════════════════════════════════════════════ */

const LightHero = ({ headline, subheadline, badge }) => (
  <section className="relative overflow-hidden min-h-[320px] md:min-h-[420px] flex items-center">
    <div className="absolute inset-0 z-0">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/ui/site-banner.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(2,18,46,0.76) 0%, rgba(3,34,84,0.58) 52%, rgba(2,20,52,0.72) 100%)',
        }}
      />
    </div>

    <div className="container-grid relative z-10 py-16 md:py-20">
      <div className="max-w-4xl mx-auto text-center">
        {badge && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] rounded-full bg-white/10 text-white border border-white/20 mb-5 backdrop-blur-sm">
              {badge === 'Governance' && <Shield className="w-3 h-3" />}
              {badge === 'Methodology' && <FlaskConical className="w-3 h-3" />}
              {badge === 'Legal' && <Scale className="w-3 h-3" />}
              {badge}
            </span>
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-bold mb-4 text-balance leading-[1.12] text-white text-[34px] md:text-[56px]"
          style={{ textShadow: '0 2px 18px rgba(0,0,0,0.55)' }}
        >
          {headline}
        </motion.h1>
        {subheadline && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-base md:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed"
            style={{ textShadow: '0 2px 14px rgba(0,0,0,0.45)' }}
          >
            {subheadline}
          </motion.p>
        )}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════════════════
   TABLE OF CONTENTS — GLASSMORPHISM CARD
   ═══════════════════════════════════════════════════════════════════ */

const TableOfContents = ({ sections }) => {
  const headings = sections.filter(s =>
    (s.type === 'textBlock' || s.type === 'comparisonTable' || s.type === 'highlightBox' || s.type === 'grid3') && (s.heading || s.header)
  );
  if (headings.length < 3) return null;

  return (
    <div className="bg-background border-b border-border/20">
      <div className="container-grid py-5">
        <motion.nav
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="max-w-[860px] mx-auto rounded-xl bg-surface/60 backdrop-blur-sm border border-border/30 p-4"
          aria-label="Table of contents"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground mb-2.5 flex items-center gap-1.5">
            <BookOpen className="w-3 h-3" />
            On this page
          </p>
          <div className="flex flex-wrap gap-2">
            {headings.map((s, i) => (
              <a
                key={i}
                href={`#${s.id}`}
                className="text-sm px-3 py-1.5 rounded-lg text-link-blue hover:bg-primary-navy/5 hover:text-primary-navy transition-all duration-200"
              >
                {s.heading || s.header}
              </a>
            ))}
          </div>
        </motion.nav>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   TEXT SECTION — CARD WRAPPED WITH ICON HEADERS
   ═══════════════════════════════════════════════════════════════════ */

const sectionIconMap = {
  'commitment': Shield,
  'consent': ClipboardCheck,
  'ethics': Shield,
  'committee': Scale,
  'rights': Sparkles,
  'observer': ClipboardCheck,
  'data': BookOpen,
  'publication': BookOpen,
  'citation': BookOpen,
  'adoption': Sparkles,
  'framework': FlaskConical,
  'principles': FlaskConical,
  'labs': FlaskConical,
  'curriculum': BookOpen,
  'loop': Sparkles,
  'context': Shield,
  'integration': FlaskConical,
  'helsinki': Scale,
  'dpdp': Shield,
  'irb': ClipboardCheck,
  'docs': BookOpen,
};

const getSectionIcon = (id) => {
  if (!id) return null;
  for (const [key, Icon] of Object.entries(sectionIconMap)) {
    if (id.includes(key)) return Icon;
  }
  return null;
};

const TextSection = ({ id, heading, sectionName, body, cta, isFirst, isAlt }) => {
  const SectionIcon = getSectionIcon(id);

  return (
    <section id={id} className={`${isFirst ? 'pt-12 md:pt-16' : 'pt-8 md:pt-10'} pb-4 ${isAlt ? 'bg-surface/40' : 'bg-background'}`}>
      <div className="container-grid">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-[860px] mx-auto"
        >
          {/* H3 sub-section (no heading, only sectionName) */}
          {sectionName && !heading && (
            <div className="mb-5 flex items-center gap-2.5">
              <span className="w-1 h-6 rounded-full bg-gradient-to-b from-accent-cyan to-accent-cyan/40" aria-hidden="true" />
              <h3 className="text-h3 text-deep-ink">{sectionName}</h3>
            </div>
          )}

          {/* H2 section with card wrapper */}
          {heading && (
            <div className="mb-6 pt-6">
              <div className="flex items-center gap-3 mb-1">
                {SectionIcon && (
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent-cyan/10 to-primary-navy/10 flex items-center justify-center flex-shrink-0">
                    <SectionIcon className="w-4.5 h-4.5 text-accent-cyan" />
                  </div>
                )}
                <div>
                  {sectionName && (
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent-cyan mb-0.5">{sectionName}</p>
                  )}
                  <h2 className="text-h2 md:text-h1 text-deep-ink">{heading}</h2>
                </div>
              </div>
              <div className="mt-4 h-px bg-gradient-to-r from-accent-cyan/30 via-border/40 to-transparent" />
            </div>
          )}

          {/* Body content in card */}
          {body && (
            <div className="rounded-2xl border border-border/30 bg-card p-6 md:p-8 shadow-card">
              <RichBody body={body} />
            </div>
          )}

          {/* CTA */}
          {cta && (
            <div className="mt-5">
              {cta.href?.startsWith('http') ? (
                <a
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl bg-primary-navy/5 text-primary-navy hover:bg-primary-navy/10 border border-primary-navy/10 transition-all duration-200 group"
                >
                  {cta.label}
                  <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              ) : (
                <Link
                  href={cta.href || '#'}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl bg-primary-navy/5 text-primary-navy hover:bg-primary-navy/10 border border-primary-navy/10 transition-all duration-200 group"
                >
                  {cta.label}
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   TABLE SECTION — ELEVATED CARD
   ═══════════════════════════════════════════════════════════════════ */

const TableSection = ({ id, heading, headers, rows, intro }) => {
  const SectionIcon = getSectionIcon(id);

  return (
    <section id={id} className="pt-8 md:pt-10 pb-4 bg-background">
      <div className="container-grid">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-[860px] mx-auto"
        >
          {heading && (
            <div className="mb-6 pt-6">
              <div className="flex items-center gap-3 mb-1">
                {SectionIcon && (
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent-cyan/10 to-primary-navy/10 flex items-center justify-center flex-shrink-0">
                    <SectionIcon className="w-4.5 h-4.5 text-accent-cyan" />
                  </div>
                )}
                <h2 className="text-h2 md:text-h1 text-deep-ink">{heading}</h2>
              </div>
              <div className="mt-4 h-px bg-gradient-to-r from-accent-cyan/30 via-border/40 to-transparent" />
            </div>
          )}
          {intro && <p className="text-body text-muted-foreground mb-5">{intro}</p>}

          <p className="text-xs text-muted-foreground text-right mb-2 md:hidden" aria-hidden="true">← Scroll →</p>
          <div className="overflow-x-auto -mx-5 px-5 md:mx-0 md:px-0">
            <div className="rounded-2xl border border-border/30 shadow-card overflow-hidden">
              <table className="w-full bg-card min-w-[400px]">
                {headers && (
                  <thead>
                    <tr className="bg-gradient-to-r from-primary-navy to-secondary-blue text-white">
                      {headers.map((h, i) => (
                        <th key={i} scope="col" className="px-5 py-4 text-left text-sm font-semibold">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                )}
                <tbody className="divide-y divide-border/50">
                  {(rows || []).map((row, ri) => {
                    const cells = Array.isArray(row) ? row : [row];
                    return (
                      <tr key={ri} className="hover:bg-surface/60 transition-colors">
                        {cells.map((cell, ci) => (
                          <td key={ci} className={`px-5 py-4 text-sm ${ci === 0 ? 'font-medium text-deep-ink' : 'text-muted-foreground'}`}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   HIGHLIGHT BOX — GRADIENT CARD WITH GLOW
   ═══════════════════════════════════════════════════════════════════ */

const HighlightSection = ({ id, heading, body }) => {
  const elements = useMemo(() => parseBody(body), [body]);

  return (
    <section id={id} className="py-10 md:py-14 bg-background">
      <div className="container-grid">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[860px] mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-elevated">
            {/* Multi-layer gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-navy via-secondary-blue to-primary-navy" />
            <div className="absolute inset-0 opacity-[0.06] pattern-grid" />
            <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-accent-cyan/15 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-primary-navy/50 to-transparent" />
            
            {/* Glow orb */}
            <div className="absolute top-[-40px] right-[-40px] w-[200px] h-[200px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, hsl(195 100% 46%), transparent 70%)' }} />

            <div className="relative z-10 p-8 md:p-12">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] rounded-full bg-white/15 text-white/90 border border-white/10 mb-5 backdrop-blur-sm">
                <Sparkles className="w-3 h-3" />
                Coming Soon
              </span>
              {heading && (
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{heading}</h2>
              )}
              <div className="space-y-4">
                {elements.map((el, i) => {
                  if (el.type === 'bullets') {
                    return (
                      <div key={i} className="rounded-xl bg-white/5 border border-white/10 p-5 backdrop-blur-sm">
                        <ul className="space-y-3">
                          {el.items.map((item, j) => (
                            <li key={j} className="flex items-start gap-3 text-white/85 text-sm md:text-base leading-relaxed">
                              <span className="mt-[7px] w-2 h-2 rounded-full bg-accent-cyan flex-shrink-0" aria-hidden="true" />
                              <span>{boldifyBulletItem(item, true)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  }
                  return (
                    <p key={i} className="text-white/75 text-sm md:text-base leading-relaxed whitespace-pre-line">
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

/* ═══════════════════════════════════════════════════════════════════
   CTA GRID — ELEVATED CARDS WITH HOVER
   ═══════════════════════════════════════════════════════════════════ */

const CtaGridSection = ({ id, header, items }) => (
  <section id={id} className="py-14 md:py-20 bg-surface relative overflow-hidden">
    {/* Background pattern */}
    <div className="absolute inset-0 pattern-grid opacity-[0.15]" />
    <div className="absolute top-[-60px] left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full opacity-[0.06]" style={{ background: 'radial-gradient(ellipse, hsl(195 100% 46%), transparent 70%)' }} />
    
    <div className="container-grid relative z-10">
      <div className="max-w-[960px] mx-auto">
        {header && (
          <h2 className="hero-fade-in text-h2 md:text-display-2 text-deep-ink mb-10 text-center">
            {header}
          </h2>
        )}
        <div className={`grid grid-cols-1 gap-6 lg:gap-8 ${items?.length === 2 ? 'md:grid-cols-2 max-w-3xl mx-auto' : 'md:grid-cols-3'}`}>
          {(items || []).map((item, i) => {
            const Icon = getIcon(item.icon);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card-elegant p-8 flex flex-col group"
              >
                {Icon && (
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-cyan/10 to-primary-navy/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-accent-cyan" />
                  </div>
                )}
                <h3 className="text-lg font-semibold text-deep-ink mb-2 group-hover:text-primary-navy transition-colors">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                  {item.body || item.description}
                </p>
                {item.email && (
                  <a href={`mailto:${item.email}`} className="inline-flex items-center gap-2 text-sm text-link-blue hover:text-secondary-blue font-medium group/link">
                    {item.email}
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
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
  let sectionIndex = 0;

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
          const isAlt = sectionIndex % 2 === 1;
          sectionIndex++;
          return <TextSection key={section.id || index} isFirst={isFirst} isAlt={isAlt} {...props} />;
        }

        if (type === 'comparisonTable') {
          sectionIndex++;
          return <TableSection key={section.id || index} {...props} />;
        }

        if (type === 'highlightBox') {
          sectionIndex++;
          return <HighlightSection key={section.id || index} {...props} />;
        }

        if (type === 'grid3') {
          sectionIndex++;
          return <CtaGridSection key={section.id || index} {...props} />;
        }

        return null;
      })}

      {/* Bottom gradient spacer */}
      <div className="h-16 md:h-20 bg-gradient-to-b from-background to-surface/30" />
    </>
  );
};

export default StandardPageTemplate;
