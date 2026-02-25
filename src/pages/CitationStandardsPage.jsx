import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Copy, Check, FileText, BookOpen, Download } from 'lucide-react';
import PageShell from '../components/layout/PageShell';

const METHODOLOGY_CITATION = `Blue Blocks Micro Research Institute. (2025).
Micro Research Methodology: A Framework for Embedded Educational Research (Version 2.0).
Zenodo.
https://doi.org/10.5281/zenodo.XXXXXXX`;

const DATASET_CITATION = `Blue Blocks Micro Research Institute. (2025).
Micro Dataset Specification (Version 1.0).
Zenodo.
https://doi.org/10.5281/zenodo.XXXXXXX`;

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="absolute top-3 right-3 p-1.5 rounded text-muted-foreground/50 hover:text-muted-foreground transition-colors"
      aria-label="Copy citation"
    >
      {copied ? <Check className="w-4 h-4 text-accent-cyan" /> : <Copy className="w-4 h-4" />}
    </button>
  );
};

const CitationBlock = ({ label, text }) => (
  <div className="mb-6">
    <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-3">
      {label}
    </h4>
    <div className="relative bg-surface border-l-2 border-primary-navy/30 pl-5 pr-10 py-4">
      <pre className="font-['Fraunces',serif] text-sm text-foreground leading-[1.75] whitespace-pre-wrap">
        {text}
      </pre>
      <CopyButton text={text} />
    </div>
  </div>
);

const CitationStandardsPage = () => {
  return (
    <PageShell>
      {/* Hero — dark institutional */}
      <section className="relative bg-deep-ink overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />
        <div className="container-grid relative z-10 pt-24 pb-14 md:pt-28 md:pb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-cyan/80 mb-4"
          >
            Blue Blocks Micro Research Institute
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="font-['Fraunces',serif] text-[28px] md:text-[38px] font-bold text-white leading-[1.15] tracking-tight mb-4"
          >
            Citation Standards & Guide
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm md:text-base text-white/60 max-w-2xl leading-relaxed"
          >
            Policy requirements and implementation standards for affiliated publications and datasets.
          </motion.p>
        </div>
        {/* Bottom border accent */}
        <div className="h-[2px] bg-gradient-to-r from-primary-navy via-accent-cyan/40 to-transparent" />
      </section>

      {/* Section 1 — Citation Standards */}
      <section className="py-10 md:py-14 bg-background">
        <div className="container-grid">
          <div className="max-w-3xl">
            {/* Section label */}
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Citation Standards
            </p>

            <div className="border-l-2 border-accent-cyan/30 pl-6">
              <h2 className="font-['Fraunces',serif] text-xl md:text-2xl font-bold text-foreground tracking-tight mb-4 leading-[1.25]">
                Policy requirements for all affiliated publications and datasets.
              </h2>
              <p className="text-[15px] text-muted-foreground leading-[1.7] mb-8">
                To maintain methodological consistency across our 15-year longitudinal research program, all affiliated publications and datasets must cite the Institute's foundational methodology and dataset specifications.
              </p>

              {/* Subsections */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-foreground mb-1.5 tracking-wide">
                    Foundational Citations
                  </h3>
                  <p className="text-[15px] text-muted-foreground leading-[1.7]">
                    Retrieve current foundational DOIs from our primary <strong className="font-semibold text-foreground">Zenodo</strong> community page and include them in your references.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-foreground mb-1.5 tracking-wide">
                    Digital Archiving
                  </h3>
                  <p className="text-[15px] text-muted-foreground leading-[1.7]">
                    In submission metadata, add DOIs under "Related Identifiers" using "References" or "IsSupplementedBy."
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-foreground mb-1.5 tracking-wide">
                    Researcher Identity
                  </h3>
                  <p className="text-[15px] text-muted-foreground leading-[1.7]">
                    Link your approved ORCID iD to all outputs.
                  </p>
                </div>
              </div>

              <p className="mt-8 text-[15px] font-semibold text-foreground leading-[1.7]">
                Adherence ensures accurate attribution across the Blue Blocks longitudinal research archive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Section 2 — Citation Implementation Guide */}
      <section className="py-10 md:py-14 bg-background">
        <div className="container-grid">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-2">
              Citation Guide
            </p>
            <h2 className="font-['Fraunces',serif] text-xl md:text-2xl font-bold text-foreground tracking-tight mb-2 leading-[1.25]">
              How to implement citation requirements
            </h2>
            <p className="text-sm text-muted-foreground mb-8">
              Use the following reference formats for all affiliated outputs.
            </p>

            <CitationBlock label="Citing the Methodology" text={METHODOLOGY_CITATION} />
            <CitationBlock label="Citing Datasets" text={DATASET_CITATION} />

            {/* Formatting Requirements */}
            <div className="mb-6">
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-3">
                Formatting Requirements
              </h4>
              <ul className="space-y-1.5 text-[15px] text-muted-foreground leading-[1.7]">
                <li className="flex items-start gap-2">
                  <span className="text-accent-cyan mt-[3px]">•</span>
                  Include both DOIs in references
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-cyan mt-[3px]">•</span>
                  Add under "Related Identifiers"
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-cyan mt-[3px]">•</span>
                  Relationship type: <span className="font-medium text-foreground">References</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-cyan mt-[3px]">•</span>
                  Connect ORCID iD
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters — shaded */}
      <section className="py-8 md:py-10 bg-surface border-y border-border">
        <div className="container-grid">
          <div className="max-w-3xl">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-3">
              Why This Matters
            </h4>
            <p className="text-[15px] text-muted-foreground leading-[1.75]">
              Consistent citation creates an interconnected evidence base. Each study strengthens prior work by linking to shared methodological foundations.
            </p>
          </div>
        </div>
      </section>

      {/* Related — compact row */}
      <section className="py-8 md:py-10 bg-background">
        <div className="container-grid">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">
              Related
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { title: 'Publications', icon: FileText, href: '/publications', desc: 'Research docket.' },
                { title: 'Methodology', icon: BookOpen, href: '/methodology', desc: 'Research protocols.' },
                { title: 'Downloads', icon: Download, href: '/downloads', desc: 'Framework documents.' },
              ].map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="group flex items-center gap-3 py-3 px-4 rounded-lg border border-border/60 hover:border-accent-cyan/30 transition-colors"
                >
                  <item.icon className="w-4 h-4 text-muted-foreground group-hover:text-accent-cyan transition-colors flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-foreground group-hover:text-primary-navy transition-colors">
                      {item.title}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default CitationStandardsPage;
