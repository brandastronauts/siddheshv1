import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { List, ChevronDown } from 'lucide-react';

/**
 * Sticky "On this page" nav built from textBlock section headings.
 * Desktop: sticky sidebar. Mobile: collapsible accordion.
 * Parent controls visibility via className / wrapping divs.
 */
const ProfileTableOfContents = ({ sections = [], isMobile = false }) => {
  const [activeId, setActiveId] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  // Filter to only textBlock sections that have headers
  const tocItems = sections
    .filter(s => (s.type === 'textBlock' || s.type === 'profile') && s.id && (s.header || s.name))
    .map(s => ({
      id: s.id,
      label: s.header || s.name || '',
    }));

  useEffect(() => {
    if (tocItems.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0.1 }
    );

    tocItems.forEach(item => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [tocItems]);

  if (tocItems.length < 3) return null;

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileOpen(false);
    }
  };

  if (isMobile) {
    return (
      <div className="mb-6">
        <button
          onClick={() => setMobileOpen(v => !v)}
          className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-deep-ink transition-colors w-full py-3 px-4 rounded-xl bg-surface border border-border/40"
        >
          <List className="w-4 h-4" />
          <span className="flex-1 text-left">On this page</span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileOpen ? 'rotate-180' : ''}`} />
        </button>
        {mobileOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-2 space-y-0.5 bg-surface rounded-xl border border-border/40 p-3"
          >
            {tocItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleClick(item.id)}
                  className="block w-full text-left px-3 py-2 text-xs text-muted-foreground hover:text-deep-ink hover:bg-background rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    );
  }

  // Desktop: sticky sidebar
  return (
    <nav aria-label="On this page">
      <div className="sticky top-24">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
          On this page
        </p>
        <ul className="space-y-1 border-l border-border/50">
          {tocItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleClick(item.id)}
                className={`block w-full text-left pl-4 py-1.5 text-xs leading-snug transition-colors duration-200 border-l-2 -ml-px ${
                  activeId === item.id
                    ? 'border-accent-cyan text-accent-cyan font-medium'
                    : 'border-transparent text-muted-foreground hover:text-deep-ink hover:border-border'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default ProfileTableOfContents;
