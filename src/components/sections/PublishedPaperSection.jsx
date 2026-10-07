import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

// Renders a full published paper converted verbatim from its DOCX source.
// The paper's own front matter (title, DOI, authors, affiliations, ORCID) appears first,
// then the feature image and external DOI link, then the remaining paper body.
const splitAtAbstract = (html = '') => {
  const idx = html.indexOf('<h2 id="abstract"');
  return idx > 0 ? [html.slice(0, idx), html.slice(idx)] : ['', html];
};

const PublishedPaperSection = ({ eyebrow, image, html, doiCta, backCta }) => {
  const [front, body] = splitAtAbstract(html);

  return (
    <section className="py-10 md:py-14">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
        {eyebrow && (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
        )}
        {front && <div className="paper-body paper-front" dangerouslySetInnerHTML={{ __html: front }} />}

        {image?.src && (
          <figure className="my-8 overflow-hidden rounded-lg border border-border bg-muted">
            <img src={image.src} alt={image.alt} className="block h-auto w-full" loading="eager" decoding="async" />
          </figure>
        )}

        {doiCta?.href && (
          <a
            href={doiCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-10 inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            {doiCta.label}
            <ExternalLink className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
          </a>
        )}

        <div className="paper-body" dangerouslySetInnerHTML={{ __html: body }} />

        {backCta?.href && (
          <div className="mt-14 border-t border-border pt-8">
            <Link to={backCta.href} className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              <ArrowLeft className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              {backCta.label}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default PublishedPaperSection;
