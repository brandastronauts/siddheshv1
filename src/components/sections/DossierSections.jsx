'use client'

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SmartImage from '../common/SmartImage';
import { getIcon } from '../../lib/iconMap';

/* ═══════════════════════════════════════════
   DOSSIER HEADER — Declassified mission document style
   ═══════════════════════════════════════════ */
export const DossierHeaderSection = ({ title, subtitle, classification, dataPanel = [] }) => (
  <section className="bg-[hsl(228_50%_8%)] text-white">
    <div className="dossier-container py-16 md:py-24 lg:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
        {/* Left — Title block */}
        <div className="lg:col-span-3">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-mono mb-6">
            Technical Brief
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-[-0.02em] leading-[1.1] mb-6 text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/50 text-sm leading-[1.7] max-w-xl">
              {subtitle}
            </p>
          )}
          {classification && (
            <div className="mt-8 inline-flex items-center gap-2 px-3 py-1.5 border border-white/15 text-[10px] uppercase tracking-[0.15em] text-white/40 font-mono">
              {classification}
            </div>
          )}
        </div>

        {/* Right — Mission Data Panel */}
        <div className="lg:col-span-2">
          <div className="border border-white/12">
            <div className="px-5 py-3 border-b border-white/8">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-mono">
                Mission Data
              </p>
            </div>
            <div className="divide-y divide-white/6">
              {dataPanel.map((item, i) => (
                <div key={i} className="px-5 py-3.5 grid grid-cols-[38%_62%] gap-2">
                  <span className="text-[10px] uppercase tracking-[0.1em] text-white/30 font-mono leading-relaxed">
                    {item.label}
                  </span>
                  <span className="text-[13px] text-white/75 font-mono leading-relaxed">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   DOSSIER SECTION — Numbered section with optional abstract variant
   ═══════════════════════════════════════════ */
export const DossierSectionBlock = ({ number, label, header, body, variant }) => {
  const isAbstract = variant === 'abstract';

  return (
    <section className="dossier-section-spacing">
      <div className="dossier-container">
        <div className="dossier-content-width">
          {/* Section number + label */}
          <div className="flex items-baseline gap-4 mb-8">
            {number && (
              <span className="font-mono text-[13px] text-muted-foreground/40">{number}</span>
            )}
            {label && (
              <span className="dossier-label">{label}</span>
            )}
          </div>

          {header && (
            <h2 className="font-serif text-2xl md:text-[1.75rem] font-bold text-deep-ink tracking-[-0.02em] mb-6">
              {header}
            </h2>
          )}

          <div className={isAbstract ? 'border-l-2 border-deep-ink/12 pl-6 md:pl-8' : ''}>
            <p className="dossier-body whitespace-pre-line">
              {body}
            </p>
          </div>
        </div>

        <div className="dossier-content-width mt-20">
          <div className="dossier-divider" />
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════
   DOSSIER QUOTE STRIP — Full-width dark emphasis block
   ═══════════════════════════════════════════ */
export const DossierQuoteStripSection = ({ quote }) => (
  <section className="bg-[hsl(228_50%_8%)] py-16 md:py-20">
    <div className="dossier-container">
      <div className="dossier-content-width">
        <div className="text-[72px] md:text-[96px] leading-none text-white/[0.06] font-serif select-none mb-[-24px] md:mb-[-36px]">
          &ldquo;
        </div>
        <blockquote className="text-lg md:text-xl text-white/80 leading-[1.65] font-serif italic max-w-3xl">
          {quote}
        </blockquote>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   DOSSIER SPEC TABLE — Government-format engineering table
   ═══════════════════════════════════════════ */
export const DossierSpecTableSection = ({ number, label, header, rows = [] }) => (
  <section className="dossier-section-spacing">
    <div className="dossier-container">
      <div className="dossier-content-width">
        <div className="flex items-baseline gap-4 mb-8">
          {number && <span className="font-mono text-[13px] text-muted-foreground/40">{number}</span>}
          {label && <span className="dossier-label">{label}</span>}
        </div>

        {header && (
          <h2 className="font-serif text-2xl md:text-[1.75rem] font-bold text-deep-ink tracking-[-0.02em] mb-8">
            {header}
          </h2>
        )}

        <div className="border border-border/50 overflow-x-auto">
          <table className="w-full min-w-[500px]">
            <tbody className="divide-y divide-border/30">
              {rows.map((row, i) => (
                <tr key={i} className="hover:bg-surface/40 transition-colors">
                  <td className="px-5 py-3.5 text-[10px] uppercase tracking-[0.12em] text-muted-foreground/60 font-mono w-[35%] align-top border-r border-border/20">
                    {row.label}
                  </td>
                  <td className="px-5 py-3.5 text-[13px] text-deep-ink/80 font-mono leading-relaxed">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-20">
          <div className="dossier-divider" />
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   DOSSIER TIMELINE — Vertical data log
   ═══════════════════════════════════════════ */
export const DossierTimelineSection = ({ number, label, events = [] }) => (
  <section className="dossier-section-spacing">
    <div className="dossier-container">
      <div className="dossier-content-width">
        <div className="flex items-baseline gap-4 mb-10">
          {number && <span className="font-mono text-[13px] text-muted-foreground/40">{number}</span>}
          {label && <span className="dossier-label">{label}</span>}
        </div>

        <div className="relative pl-4 md:pl-0">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-[119px] top-2 bottom-2 w-px bg-border/50" />

          <div className="space-y-0">
            {events.map((event, i) => (
              <div
                key={i}
                className="relative grid grid-cols-1 md:grid-cols-[120px_1fr] gap-2 md:gap-8 py-4 pl-6 md:pl-0"
              >
                <div className="md:text-right">
                  <span className="font-mono text-[11px] text-muted-foreground/50">{event.date}</span>
                </div>
                <div className="relative">
                  {/* Node */}
                  <div className="absolute -left-[30px] md:-left-[36px] top-[5px] w-[7px] h-[7px] border border-deep-ink/25 bg-background" style={{ transform: 'rotate(45deg)' }} />
                  <p className="text-[13px] text-deep-ink/75 leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="dossier-divider" />
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   DOSSIER NOTICE — Government document panel
   ═══════════════════════════════════════════ */
export const DossierNoticeSection = ({ label, body }) => (
  <section className="py-8 md:py-12">
    <div className="dossier-container">
      <div className="dossier-content-width">
        <div className="border border-border/50 bg-surface/40 p-6 md:p-8">
          {label && (
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50 font-mono mb-4">
              {label}
            </p>
          )}
          <p className="text-[13px] text-deep-ink/70 leading-[1.7] font-mono">
            {body}
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   DOSSIER PRINCIPLES — Sharp engineering grid
   ═══════════════════════════════════════════ */
export const DossierPrinciplesSection = ({ number, label, header, intro, principles = [], conclusion }) => (
  <section className="dossier-section-spacing">
    <div className="dossier-container">
      <div className="dossier-content-width">
        <div className="flex items-baseline gap-4 mb-8">
          {number && <span className="font-mono text-[13px] text-muted-foreground/40">{number}</span>}
          {label && <span className="dossier-label">{label}</span>}
        </div>

        {header && (
          <h2 className="font-serif text-2xl md:text-[1.75rem] font-bold text-deep-ink tracking-[-0.02em] mb-6">
            {header}
          </h2>
        )}

        {intro && (
          <p className="dossier-body mb-10">{intro}</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border/50 divide-y md:divide-y-0 md:divide-x divide-border/30">
          {principles.map((p, i) => (
            <div key={i} className="p-6 md:p-8">
              <span className="font-mono text-[11px] text-muted-foreground/35 block mb-3">{p.number}</span>
              <h3 className="text-[15px] font-bold text-deep-ink tracking-[-0.01em] mb-3">{p.title}</h3>
              <p className="text-[13px] text-muted-foreground/70 leading-[1.7]">{p.body}</p>
            </div>
          ))}
        </div>

        {conclusion && (
          <p className="dossier-body mt-10">{conclusion}</p>
        )}

        <div className="mt-20">
          <div className="dossier-divider" />
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   DOSSIER GALLERY — Grayscale grid with hover reveal
   ═══════════════════════════════════════════ */
export const DossierGallerySection = ({ number, label, images = [] }) => (
  <section className="dossier-section-spacing">
    <div className="dossier-container">
      <div className="dossier-content-width">
        <div className="flex items-baseline gap-4 mb-8">
          {number && <span className="font-mono text-[13px] text-muted-foreground/40">{number}</span>}
          {label && <span className="dossier-label">{label}</span>}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border/30">
          {images.map((img, i) => (
            <div key={i} className="relative bg-background aspect-[4/3] overflow-hidden group">
              <SmartImage
                src={img.src}
                alt={img.alt}
                variant="card"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              {img.caption && (
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-[10px] uppercase tracking-[0.12em] text-white/80 font-mono">{img.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="dossier-divider" />
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   DOSSIER ARCHIVE NOTICE — Federal footnote
   ═══════════════════════════════════════════ */
export const DossierArchiveNoticeSection = ({ body }) => (
  <section className="py-10 md:py-14">
    <div className="dossier-container">
      <div className="dossier-content-width">
        <div className="dossier-divider mb-6" />
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/40 font-mono mb-3">
          Archive Notice
        </p>
        <p className="text-[12px] text-muted-foreground/50 leading-[1.75] max-w-2xl">
          {body}
        </p>
        <div className="dossier-divider mt-6" />
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   DOSSIER RELATED — Minimal registry links
   ═══════════════════════════════════════════ */
export const DossierRelatedSection = ({ header, cards = [] }) => (
  <section className="dossier-section-spacing">
    <div className="dossier-container">
      <div className="dossier-content-width">
        {header && (
          <p className="dossier-label mb-8">{header}</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border/50 divide-y md:divide-y-0 md:divide-x divide-border/30">
          {cards.map((card, i) => (
            <Link
              key={i}
              href={card.href || '#'}
              className="p-6 group hover:bg-surface/40 transition-colors block"
            >
              <h3 className="text-sm font-bold text-deep-ink group-hover:text-primary-navy transition-colors mb-2 tracking-[-0.01em]">
                {card.title}
              </h3>
              <p className="text-[12px] text-muted-foreground/60 leading-relaxed">
                {card.description}
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-[10px] font-mono text-muted-foreground/35 group-hover:text-link-blue transition-colors uppercase tracking-[0.15em]">
                View
                <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </section>
);
