import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import useInViewOnce from '../hooks/useInViewOnce';

/**
 * Animated counter component that counts up when visible
 * @param {Object} props
 * @param {number} props.value - Target value to count to
 * @param {string} [props.suffix] - Optional suffix (e.g., "+")
 * @param {string} [props.prefix] - Optional prefix (e.g., "$")
 * @param {number} [props.duration] - Animation duration in ms (default 1200)
 * @param {boolean} [props.format] - Whether to add commas (default true)
 * @param {number} [props.decimals] - Number of decimal places (default 0)
 * @param {number} [props.start] - Starting value (default 0)
 * @param {string} [props.className] - Additional CSS classes
 */
const AnimatedCounter = ({
  value,
  suffix = '',
  prefix = '',
  duration = 1200,
  format = true,
  decimals = 0,
  start = 0,
  className = '',
}) => {
  const [ref, inViewOnce] = useInViewOnce();
  const [displayValue, setDisplayValue] = useState(start);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Check for reduced motion preference
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  useEffect(() => {
    if (!inViewOnce || hasAnimated) return;

    // If user prefers reduced motion, show final value immediately
    if (prefersReducedMotion) {
      setDisplayValue(value);
      setHasAnimated(true);
      return;
    }

    const startTime = performance.now();
    const startValue = start;
    const endValue = value;

    const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);
      
      const currentValue = startValue + (endValue - startValue) * easedProgress;
      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(endValue);
        setHasAnimated(true);
      }
    };

    requestAnimationFrame(animate);
  }, [inViewOnce, value, start, duration, hasAnimated, prefersReducedMotion]);

  // Format the display value
  const formattedValue = useMemo(() => {
    let num = decimals > 0 
      ? displayValue.toFixed(decimals) 
      : Math.round(displayValue);
    
    if (format) {
      num = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    
    return `${prefix}${num}${suffix}`;
  }, [displayValue, decimals, format, prefix, suffix]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 8 }}
      animate={inViewOnce ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`tabular-nums ${className}`}
    >
      {formattedValue}
    </motion.span>
  );
};

export default AnimatedCounter;
