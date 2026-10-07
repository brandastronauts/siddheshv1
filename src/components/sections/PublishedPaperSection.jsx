import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

// Full published paper (verbatim DOCX conversion) in the shared publication-detail layout:
// main reading column + sidebar cards matching the twoColumn "panels" style.
const Panel = ({ title, children }) => (
  <div className="bg-surface border border-border/50 rounded-xl p-6">
    <h4 className="text-sm font-semibold text-deep-ink uppercase tracking-wider mb-4">{title}</h4>
    {children}
  </div>
);

const PublishedPaperSection = ({ image, html, authorsHtml, doi, doiCta, backCta, panelTitle = 'Publication & Access' }) => (
  <section className="py-8 md:py-12 bg-background">
    <div className="container-grid">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        <article className="lg:col-span-2 min-w-0">
          {image?.src && (
            <figure className="mb-10 overflow-hidden rounded-xl border border-border/50 bg-muted">
              <img src={image.src} alt={image.alt} className="block h-auto w-full" loading="eager" decoding="async" />
            </figure>
          )}
          <div className="paper-body" dangerouslySetInnerHTML={{ __html: html }} />
        </article>

        <aside className="lg:col-span-1 min-w-0">
          <div className="space-y-6 lg:sticky lg:top-24">
            {doiCta?.href && (
              <Panel title={panelTitle}>
                {doi && <p className="text-sm text-muted-foreground mb-3 break-all">DOI: {doi.replace(/^https?:\/\/(dx\.)?doi\.org\//, '')}</p>}
                <a
                  href={doiCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-link-blue hover:text-secondary-blue transition-colors"
                >
                  {doiCta.label}
                  <ExternalLink className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
                </a>
              </Panel>
            )}
            {authorsHtml && (
              <Panel title="Authors">
                <div className="paper-authors" dangerouslySetInnerHTML={{ __html: authorsHtml }} />
              </Panel>
            )}
            {backCta?.href && (
              <Link to={backCta.href} className="inline-flex items-center gap-2 text-sm font-semibold text-link-blue hover:text-secondary-blue transition-colors">
                <ArrowLeft className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                {backCta.label}
              </Link>
            )}
          </div>
        </aside>
      </div>
    </div>
  </section>
);

export default PublishedPaperSection;
