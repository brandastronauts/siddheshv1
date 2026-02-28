/**
 * SectionHeading — CSS-only animated h2 for section titles.
 * Replaces motion.h2 to avoid JS-gated render delay that hurts LCP.
 */
import { useRef } from 'react';
import { useInViewOnce } from '../../hooks/useInViewOnce';

const SectionHeading = ({ children, className = '' }) => {
  const ref = useRef(null);
  const inView = useInViewOnce(ref);

  return (
    <h2
      ref={ref}
      className={`hero-fade-in ${className}`}
      style={{ animationDelay: '0.05s', animationPlayState: inView ? 'running' : 'paused' }}
    >
      {children}
    </h2>
  );
};

export default SectionHeading;
