import { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { X, ArrowRight } from 'lucide-react';
import { PROGRAMME_PATH, flyer, isApplicationOpen, popup } from '../../content/ammonoidProgramme';

const DISMISS_KEY = 'bb_ammonoid_popup_dismissed_at';
const SESSION_KEY = 'bb_ammonoid_popup_session_done';
const DISMISS_WINDOW_MS = 72 * 60 * 60 * 1000;
const DELAY_MS = 7000;
const SCROLL_TRIGGER = 0.35;

const readSuppressed = () => {
  try {
    if (sessionStorage.getItem(SESSION_KEY) === '1') return true;
    const stamp = Number(localStorage.getItem(DISMISS_KEY) || 0);
    return Boolean(stamp) && Date.now() - stamp < DISMISS_WINDOW_MS;
  } catch {
    return false;
  }
};

const AmmonoidPopup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const closeRef = useRef(null);
  const previousFocus = useRef(null);

  const eligible =
    isApplicationOpen() &&
    !location.pathname.startsWith(PROGRAMME_PATH) &&
    !location.pathname.startsWith('/__preview') &&
    !location.pathname.startsWith('/debug');

  useEffect(() => {
    if (!eligible || readSuppressed()) return undefined;

    let done = false;
    const show = () => {
      if (done || readSuppressed()) return;
      done = true;
      setOpen(true);
    };

    const timer = window.setTimeout(show, DELAY_MS);
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable > 0 && window.scrollY / scrollable >= SCROLL_TRIGGER) show();
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };
  }, [eligible]);

  const close = useCallback((markDismissed = true) => {
    setOpen(false);
    try {
      if (markDismissed) localStorage.setItem(DISMISS_KEY, String(Date.now()));
      sessionStorage.setItem(SESSION_KEY, '1');
    } catch {
      /* storage unavailable — popup simply shows again later */
    }
    if (previousFocus.current?.focus) previousFocus.current.focus();
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    previousFocus.current = document.activeElement;
    closeRef.current?.focus();
    const onKeyDown = (e) => {
      if (e.key === 'Escape') close(true);
    };
    document.addEventListener('keydown', onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close]);

  if (!open) return null;

  const goToProgramme = () => {
    close(false);
    navigate(PROGRAMME_PATH);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-deep-ink/70 backdrop-blur-sm animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) close(true);
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="ammonoid-popup-title"
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-card shadow-[var(--shadow-xl)] animate-fade-in"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={() => close(true)}
          aria-label={popup.closeLabel}
          className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-foreground shadow-[var(--shadow-sm)] transition-colors hover:bg-surface"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>

        <button type="button" onClick={goToProgramme} className="block w-full text-left">
          <img
            src={flyer.src}
            alt={flyer.alt}
            width={flyer.width}
            height={flyer.height}
            loading="eager"
            className="w-full h-auto rounded-t-2xl"
          />
        </button>

        <div className="p-5 md:p-6">
          <h2 id="ammonoid-popup-title" className="text-lg md:text-xl font-bold text-primary-navy">
            {popup.heading}
          </h2>
          {popup.copy.map((line) => (
            <p key={line} className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{line}</p>
          ))}
          <button type="button" onClick={goToProgramme} className="btn-primary mt-4 w-full">
            {popup.cta}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AmmonoidPopup;
