import { useLocation } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';
import SectionRenderer from '../components/SectionRenderer';
import StickyDetailBar from '../components/common/StickyDetailBar';
import siteContent from '../content/siteContent';

// Routes that warrant a sticky detail bar (publication/patent/book detail pages)
const DETAIL_PATTERNS = [
  /^\/publications\/.+/,
  /^\/patents\/.+/,
  /^\/books\/.+/,
  /^\/technical-briefs\/.+/,
  /^\/presentations\/.+/,
  /^\/proceedings\/.+/,
];

const GenericPage = () => {
  const location = useLocation();
  const page = siteContent.pages[location.pathname];

  const isDetailPage = DETAIL_PATTERNS.some(p => p.test(location.pathname));

  // Extract primary CTA from page config if available
  const stickyCta = page?.stickyCta; // { label, href, type }

  if (!page) {
    return (
      <PageShell>
        <div className="container-grid py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
          <p className="text-muted-foreground">The requested page does not exist.</p>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <SectionRenderer sections={page?.sections} />

      {/* Sticky bottom CTA on mobile for detail pages */}
      {isDetailPage && stickyCta && (
        <StickyDetailBar
          label={stickyCta.label}
          href={stickyCta.href}
          type={stickyCta.type || 'download'}
        />
      )}
    </PageShell>
  );
};

export default GenericPage;
