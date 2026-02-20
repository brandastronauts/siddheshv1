import { useState } from 'react';
import { X, ArrowRight, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

/**
 * MobileExpandModal — renders a compact trigger on mobile that opens a full-screen
 * bottom-sheet with all card details. On desktop, renders nothing (children shown inline).
 *
 * Props:
 *   label       {string}  Button label (default "Expand")
 *   title       {string}  Sheet heading
 *   tag         {string}  Optional badge
 *   meta        {string}  Small meta line (date, category, etc.)
 *   body        {string}  Full abstract / description
 *   facts       {Array}   [{label, value}] key-facts list
 *   action      {object}  {label, href, external} primary CTA
 *   relatedItems{Array}   [{label, href}] quick links
 */
const MobileExpandModal = ({
  label = 'Expand',
  title,
  tag,
  meta,
  body,
  facts = [],
  action,
  relatedItems = [],
}) => {
  const [open, setOpen] = useState(false);

  const renderAction = (act) => {
    if (!act?.href) return null;
    const cls =
      'inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-navy text-white text-sm font-semibold hover:bg-secondary-blue transition-colors';

    if (act.external || act.href.startsWith('http')) {
      return (
        <a href={act.href} target="_blank" rel="noopener noreferrer" className={cls}>
          {act.label}
          <ExternalLink className="w-4 h-4" aria-hidden="true" />
        </a>
      );
    }
    return (
      <Link to={act.href} className={cls} onClick={() => setOpen(false)}>
        {act.label}
        <ArrowRight className="w-4 h-4" aria-hidden="true" />
      </Link>
    );
  };

  return (
    <>
      {/* Trigger — mobile only */}
      <button
        className="md:hidden mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-accent-cyan border border-accent-cyan/30 rounded-lg px-3 py-1.5 hover:bg-accent-cyan/5 transition-colors"
        onClick={() => setOpen(true)}
        aria-label={`Expand: ${title}`}
      >
        {label}
        <ArrowRight className="w-3 h-3" aria-hidden="true" />
      </button>

      {/* Bottom-sheet overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/60 md:hidden"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            {/* Sheet */}
            <motion.div
              key="sheet"
              role="dialog"
              aria-modal="true"
              aria-label={title}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-x-0 bottom-0 z-50 max-h-[85vh] bg-card rounded-t-2xl shadow-2xl flex flex-col md:hidden"
            >
              {/* Drag handle */}
              <div className="flex justify-center pt-3 pb-1 shrink-0">
                <div className="w-10 h-1 rounded-full bg-border" />
              </div>

              {/* Header */}
              <div className="flex items-start justify-between gap-3 px-5 py-3 border-b border-border shrink-0">
                <div className="flex-1 min-w-0">
                  {tag && (
                    <span className="badge-accent mb-1 inline-block text-xs">{tag}</span>
                  )}
                  {title && (
                    <h2 className="text-base font-bold text-deep-ink leading-snug">{title}</h2>
                  )}
                  {meta && (
                    <p className="text-xs text-muted-foreground mt-0.5">{meta}</p>
                  )}
                </div>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="shrink-0 p-1.5 rounded-lg hover:bg-surface transition-colors text-muted-foreground"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>

              {/* Scrollable body */}
              <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
                {/* Key facts */}
                {facts.length > 0 && (
                  <dl className="grid grid-cols-2 gap-2">
                    {facts.map((f, i) => (
                      <div key={i} className="bg-surface rounded-lg px-3 py-2">
                        <dt className="text-xs text-muted-foreground font-medium">{f.label}</dt>
                        <dd className="text-sm font-semibold text-deep-ink mt-0.5">{f.value}</dd>
                      </div>
                    ))}
                  </dl>
                )}

                {/* Abstract / body */}
                {body && (
                  <div>
                    <p className="text-xs font-semibold text-accent-cyan uppercase tracking-wider mb-2">
                      Abstract
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                  </div>
                )}

                {/* Related items */}
                {relatedItems.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      Related
                    </p>
                    <ul className="space-y-1.5">
                      {relatedItems.map((item, i) => (
                        <li key={i}>
                          <Link
                            to={item.href}
                            className="text-sm text-link-blue hover:text-secondary-blue flex items-center gap-1 transition-colors"
                            onClick={() => setOpen(false)}
                          >
                            <ArrowRight className="w-3 h-3 shrink-0" />
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Sticky CTA */}
              {action && (
                <div className="shrink-0 px-5 py-4 border-t border-border">
                  {renderAction(action)}
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileExpandModal;
