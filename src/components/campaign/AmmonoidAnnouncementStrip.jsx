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
      <div className="relative overflow-hidden py-2 text-xs md:text-sm font-medium tracking-wide">
        <div className="marquee-track flex w-max whitespace-nowrap" aria-hidden="true">
          <span className="shrink-0 px-6">{sequence}</span>
          <span className="shrink-0 px-6">{sequence}</span>
        </div>
        <span className="sr-only">{strip.ariaLabel}</span>
      </div>
    </Link>
  );
};

export default AmmonoidAnnouncementStrip;
