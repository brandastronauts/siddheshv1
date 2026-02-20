import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Download, ExternalLink, BookOpen, ArrowRight } from 'lucide-react';

/**
 * StickyDetailBar — renders a sticky bottom bar on mobile for detail pages
 * (/publications/*, /patents/*, /books/*) with a primary CTA.
 *
 * Props:
 *   label   {string}  Button label (e.g. "Download PDF")
 *   href    {string}  URL for the action
 *   type    {string}  'download' | 'external' | 'internal'
 *   icon    {string}  'download' | 'external' | 'book' (optional, auto-detected from type)
 */
const StickyDetailBar = ({ label = 'Download', href = '#', type = 'download' }) => {
  const [visible, setVisible] = useState(false);

  // Show after slight scroll so it doesn't flash on load
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 120);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const IconComponent =
    type === 'download' ? Download :
    type === 'external' ? ExternalLink :
    BookOpen;

  const btnClass =
    'flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary-navy text-white text-sm font-semibold hover:bg-secondary-blue transition-colors active:scale-95';

  return (
    <div
      className={`md:hidden fixed bottom-0 inset-x-0 z-40 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-label="Quick actions"
    >
      {/* Subtle top separator + blur backdrop */}
      <div className="bg-card/95 backdrop-blur-sm border-t border-border px-4 py-3 safe-pb flex gap-3">
        {type === 'external' ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={btnClass}
            aria-label={label}
          >
            <IconComponent className="w-4 h-4" aria-hidden="true" />
            {label}
          </a>
        ) : type === 'download' ? (
          <a href={href} download className={btnClass} aria-label={label}>
            <IconComponent className="w-4 h-4" aria-hidden="true" />
            {label}
          </a>
        ) : (
          <Link to={href} className={btnClass} aria-label={label}>
            <IconComponent className="w-4 h-4" aria-hidden="true" />
            {label}
          </Link>
        )}
      </div>
    </div>
  );
};

export default StickyDetailBar;
