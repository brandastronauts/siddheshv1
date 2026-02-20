import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * ExpandableText — collapses text > charThreshold with smooth animated expand/collapse.
 * Props:
 *   text          {string}  The full text to display.
 *   charThreshold {number}  Character count before collapse kicks in (default 280).
 *   lines         {number}  Tailwind line-clamp lines when collapsed (default 4).
 *   className     {string}  Extra classes forwarded to the wrapper.
 */
const ExpandableText = ({
  text = '',
  charThreshold = 280,
  className = '',
}) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = text.length > charThreshold;

  if (!isLong) {
    return (
      <p className={`text-sm text-muted-foreground leading-relaxed ${className}`}>
        {text}
      </p>
    );
  }

  const collapsed = text.slice(0, charThreshold).trimEnd();

  return (
    <div className={className}>
      <AnimatePresence initial={false} mode="wait">
        {expanded ? (
          <motion.p
            key="expanded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-sm text-muted-foreground leading-relaxed"
          >
            {text}
          </motion.p>
        ) : (
          <motion.p
            key="collapsed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-sm text-muted-foreground leading-relaxed"
          >
            {collapsed}
            <span className="text-muted-foreground/60">…</span>
          </motion.p>
        )}
      </AnimatePresence>

      <button
        onClick={() => setExpanded(prev => !prev)}
        aria-expanded={expanded}
        className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-link-blue hover:text-secondary-blue transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-link-blue rounded"
      >
        {expanded ? (
          <>Show less <ChevronUp className="w-3.5 h-3.5" aria-hidden="true" /></>
        ) : (
          <>Read more <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" /></>
        )}
      </button>
    </div>
  );
};

export default ExpandableText;
