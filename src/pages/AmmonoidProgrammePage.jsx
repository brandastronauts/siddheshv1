import { useState } from 'react';
import { ArrowRight, CalendarClock, CheckCircle2, Mail, X } from 'lucide-react';
import PageShell from '../components/layout/PageShell';
import AmmonoidApplicationForm from '../components/campaign/AmmonoidApplicationForm';
import { application, flyer, isApplicationOpen, programme } from '../content/ammonoidProgramme';

const Section = ({ id, title, children, tone = 'default' }) => (
  <section id={id} className={`section-spacing ${tone === 'muted' ? 'bg-surface' : ''}`}>
    <div className="container-grid">
      <div className="max-w-4xl mx-auto">
        {title && <h2 className="text-2xl md:text-3xl font-bold text-primary-navy mb-5">{title}</h2>}
        {children}
      </div>
    </div>
  </section>
);

const Bullets = ({ items }) => (
  <ul className="space-y-3">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
        <CheckCircle2 className="w-5 h-5 text-accent-cyan shrink-0 mt-0.5" aria-hidden="true" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const Paragraphs = ({ items }) => (
  <div className="space-y-4">
    {items.map((p) => (
      <p key={p} className="text-muted-foreground leading-relaxed">{p}</p>
    ))}
  </div>
);

const AmmonoidProgrammePage = () => {
  const open = isApplicationOpen();
  const [lightbox, setLightbox] = useState(false);

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: 'var(--gradient-accent)' }}>
        <div className="container-grid py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
              {programme.eyebrow}
            </p>
            <h1 className="mt-3 text-[30px] md:text-[48px] font-bold leading-[1.1] text-balance">
              {programme.title}
            </h1>
            <p className="mt-3 text-lg md:text-xl font-medium text-white/90">{programme.supportingHeading}</p>
            <p className="mt-2 text-base md:text-lg text-white/80">{programme.marketingLine}</p>
            <p className="mt-4 text-base text-white/85 max-w-2xl mx-auto leading-relaxed">{programme.description}</p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
              {open ? (
                <a href="#apply" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-primary-navy transition-transform hover:-translate-y-0.5">
                  {programme.cta.primary}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              ) : (
                <a href={`mailto:${programme.contact.email}`} className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-primary-navy">
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  {programme.contact.email}
                </a>
              )}
              <a href="#about" className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/50 bg-white/10 px-6 py-3 font-medium text-white transition-colors hover:bg-white/20">
                {programme.cta.secondary}
              </a>
            </div>

            <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-xl bg-white/10 px-5 py-3 text-sm text-white/90">
              <span className="inline-flex items-center gap-2">
                <CalendarClock className="w-4 h-4" aria-hidden="true" />
                {programme.dates.deadlineLabel}: <strong className="font-semibold">{programme.dates.deadline}</strong>
              </span>
              <span>
                {programme.dates.interviewLabel}: <strong className="font-semibold">{programme.dates.interview}</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Key facts */}
      <section className="border-b border-border bg-card">
        <div className="container-grid py-6 md:py-8">
          <dl className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {programme.keyFacts.map((fact) => (
              <div key={fact.label} className="rounded-xl border border-border bg-background p-4 text-center">
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">{fact.label}</dt>
                <dd className="mt-1 text-sm md:text-base font-semibold text-primary-navy">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Section id="about" title={programme.about.heading}>
        <Paragraphs items={programme.about.paragraphs} />
      </Section>

      <Section title={programme.focus.heading} tone="muted">
        <p className="text-lg font-medium text-primary-navy mb-4">{programme.focus.lead}</p>
        <Paragraphs items={programme.focus.paragraphs} />
      </Section>

      <Section title={programme.activities.heading}>
        <Bullets items={programme.activities.items} />
      </Section>

      {/* Flyer */}
      <Section title={programme.flyerSection.heading} tone="muted">
        <button
          type="button"
          onClick={() => setLightbox(true)}
          className="block w-full rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5"
        >
          <img
            src={flyer.srcSmall}
            srcSet={`${flyer.srcSmall} 1000w, ${flyer.src} 2000w`}
            sizes="(max-width: 768px) 100vw, 800px"
            alt={flyer.alt}
            width={flyer.width}
            height={flyer.height}
            loading="lazy"
            className="w-full h-auto"
          />
        </button>
        <p className="mt-3 text-sm text-muted-foreground">{programme.flyerSection.caption}</p>
      </Section>

      <Section title={programme.audienceSection.heading}>
        <Paragraphs items={programme.audienceSection.paragraphs} />
        <p className="mt-4 font-semibold text-primary-navy">{programme.audienceSection.ageRange}</p>
      </Section>

      <Section title={programme.format.heading} tone="muted">
        <Bullets items={programme.format.items} />
      </Section>

      <Section title={programme.commitment.heading}>
        <Paragraphs items={programme.commitment.paragraphs} />
      </Section>

      <Section title={programme.selection.heading} tone="muted">
        <ol className="space-y-4">
          {programme.selection.steps.map((step, i) => (
            <li key={step} className="flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-navy text-sm font-semibold text-white">
                {i + 1}
              </span>
              <span className="text-muted-foreground leading-relaxed pt-1">{step}</span>
            </li>
          ))}
        </ol>
        <p className="mt-5 rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground">
          {programme.selection.note}
        </p>
      </Section>

      <Section title={programme.fee.heading}>
        <div className="grid gap-4 sm:grid-cols-2">
          {programme.fee.items.map((item) => (
            <div key={item.label} className="rounded-2xl border border-border bg-card p-5">
              <p className="text-sm text-muted-foreground">{item.label}</p>
              <p className="mt-1 text-2xl font-bold text-primary-navy">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <Paragraphs items={programme.fee.paragraphs} />
        </div>
      </Section>

      <Section title={programme.conference.heading} tone="muted">
        <Paragraphs items={programme.conference.paragraphs} />
      </Section>

      {/* Application */}
      <section id="apply" className="section-spacing scroll-mt-24">
        <div className="container-grid">
          <div className="max-w-3xl mx-auto">
            {open ? (
              <>
                <h2 className="text-2xl md:text-3xl font-bold text-primary-navy mb-3">{application.heading}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{application.intro}</p>
                <AmmonoidApplicationForm />
              </>
            ) : (
              <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <h2 className="text-2xl font-bold text-primary-navy">{programme.closed.heading}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{programme.closed.copy}</p>
                <p className="mt-2 text-muted-foreground leading-relaxed">{programme.closed.contactCopy}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Section title={programme.contact.heading} tone="muted">
        <p className="text-muted-foreground leading-relaxed">{programme.contact.copy}</p>
        <a href={`mailto:${programme.contact.email}`} className="btn-primary mt-5">
          <Mail className="w-4 h-4" aria-hidden="true" />
          {programme.contact.email}
        </a>
      </Section>

      {lightbox && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-deep-ink/85 p-4 animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label={flyer.alt}
          onClick={() => setLightbox(false)}
        >
          <button
            type="button"
            aria-label="Close flyer"
            onClick={() => setLightbox(false)}
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-foreground"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
          <img src={flyer.src} alt={flyer.alt} className="max-h-[90vh] w-auto max-w-full rounded-xl" />
        </div>
      )}
    </PageShell>
  );
};

export default AmmonoidProgrammePage;
