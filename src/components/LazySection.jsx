import { useState, useRef, useEffect } from 'react';

/**
 * Defers mounting of below-the-fold sections until they enter
 * the viewport (with a generous rootMargin for pre-loading).
 * Above-the-fold sections (index < threshold) render immediately.
 */
const LazySection = ({ children, index, threshold = 2 }) => {
  // Render first N sections immediately (above the fold)
  const isAboveFold = index < threshold;
  const [mounted, setMounted] = useState(isAboveFold);
  const ref = useRef(null);

  useEffect(() => {
    if (mounted || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMounted(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px 0px' }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [mounted]);

  useEffect(() => {
    const mountOnHashNavigation = () => {
      if (window.location.hash) {
        setMounted(true);
      }
    };

    mountOnHashNavigation();
    window.addEventListener('hashchange', mountOnHashNavigation);

    return () => window.removeEventListener('hashchange', mountOnHashNavigation);
  }, []);

  if (mounted) return children;

  // Placeholder preserves layout space
  return <div ref={ref} className="min-h-[100px]" />;
};

export default LazySection;
