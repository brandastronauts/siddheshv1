import { useState, useEffect, useRef } from 'react';

/**
 * Hook to detect when an element enters the viewport (once only)
 * @param {Object} options - IntersectionObserver options
 * @returns {[React.RefObject, boolean]} - ref to attach, and whether element has been in view
 */
const useInViewOnce = (options = {}) => {
  const ref = useRef(null);
  const [inViewOnce, setInViewOnce] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || inViewOnce) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInViewOnce(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px',
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [inViewOnce, options]);

  return [ref, inViewOnce];
};

export default useInViewOnce;
