import { Link, useLocation } from 'react-router-dom';
import { PROGRAMME_PATH, isApplicationOpen, strip } from '../../content/ammonoidProgramme';

const AmmonoidAnnouncementStrip = () => {
  const location = useLocation();

  if (!isApplicationOpen()) return null;
  if (location.pathname.startsWith(PROGRAMME_PATH)) return null;
  if (location.pathname.startsWith('/__preview') || location.pathname.startsWith('/debug')) return null;

  const sequence = strip.items.join('   •   ');

  return (
    <Link
      to={PROGRAMME_PATH}
      aria-label={strip.ariaLabel}
      className="block w-full overflow-hidden border-b border-white/10 text-white"
      style={{ background: 'var(--gradient-accent)' }}
    >
      <div className="relative flex whitespace-nowrap py-2 text-xs md:text-sm font-medium tracking-wide">
        <span className="marquee-track px-4" aria-hidden="true">{sequence}</span>
        <span className="marquee-track px-4" aria-hidden="true">{sequence}</span>
        <span className="sr-only">{strip.ariaLabel}</span>
      </div>
    </Link>
  );
};

export default AmmonoidAnnouncementStrip;
