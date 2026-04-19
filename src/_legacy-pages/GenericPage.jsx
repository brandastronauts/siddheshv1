import { lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';
import SectionRenderer from '../components/SectionRenderer';
import StickyDetailBar from '../components/common/StickyDetailBar';
import siteContent from '../content/siteContent';

const ProfilePageWrapper = lazy(() => import('../components/profile/ProfilePageWrapper'));

// Routes that warrant a sticky detail bar (publication/patent/book detail pages)
const DETAIL_PATTERNS = [
  /^\/publications\/.+/,
  /^\/patents\/.+/,
  /^\/books\/.+/,
  /^\/technical-briefs\/.+/,
  /^\/presentations\/.+/,
  /^\/proceedings\/.+/,
];

// Routes that use the premium profile layout
const PROFILE_PATTERNS = [
  /^\/governance\/team\/.+/,
  /^\/team\/(pavan-kumar-yekabote|munira-hussain)$/,
];

const GenericPage = () => {
  const location = useLocation();
  const normalizedPath = location.pathname !== '/' && location.pathname.endsWith('/') ? location.pathname.slice(0, -1) : location.pathname;
  const page = siteContent.pages[normalizedPath];

  const isDetailPage = DETAIL_PATTERNS.some(p => p.test(normalizedPath));
  const isProfilePage = PROFILE_PATTERNS.some(p => p.test(normalizedPath));

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
      {isProfilePage ? (
        <Suspense fallback={<div className="min-h-screen" />}>
          <ProfilePageWrapper sections={page?.sections} />
        </Suspense>
      ) : (
        <SectionRenderer sections={page?.sections} />
      )}

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
