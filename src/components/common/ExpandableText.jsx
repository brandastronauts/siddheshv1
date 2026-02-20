import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

/**
 * ExpandableText
 *
 * Props:
 *   text           {string}          The full text content to display.
 *   collapsedLines {number}          Lines visible when collapsed (default 4). Maps to Tailwind line-clamp-N.
 *   minChars       {number}          Min char count before collapsing kicks in (default 260).
 *   className      {string}          Extra classes forwarded to the wrapper <div>.
 *   textClassName  {string}          Extra classes forwarded to the <p> element.
 *   forceDesktop   {boolean}         If true, also clamp on desktop (default false = desktop always shows full).
 *
 * Behaviour:
 *   - Desktop: always shows full text (no toggle), unless forceDesktop=true.
 *   - Mobile: collapses to `collapsedLines` via CSS line-clamp. Toggle "Read more / Show less".
 *   - If text length <= minChars → renders normally (no toggle ever).
 *   - CTAs / children rendered outside the collapsible area are unaffected.
 */

// Map collapsedLines → Tailwind line-clamp utility
const clampClass = (n) => {
  const map = { 1: 'line-clamp-1', 2: 'line-clamp-2', 3: 'line-clamp-3', 4: 'line-clamp-4', 5: 'line-clamp-5', 6: 'line-clamp-6' };
  return map[n] || 'line-clamp-4';
};

const ExpandableText = ({
  text = '',
  collapsedLines = 4,
  minChars = 260,
  className = '',
  textClassName = '',
  forceDesktop = false,
}) => {
  const [expanded, setExpanded] = useState(false);

  // Short text — render plainly with no toggle
  if (!text || text.length <= minChars) {
    return (
      <p className={`text-sm text-muted-foreground leading-relaxed ${textClassName} ${className}`}>
        {text}
      </p>
    );
  }

  // The desktop visibility: if forceDesktop, use line-clamp everywhere; otherwise hide toggle on md+
  const clamp = clampClass(collapsedLines);
  // collapsed class on mobile (sm), always visible on md+
  const collapsedMobileClass = forceDesktop
    ? (expanded ? '' : clamp)
    : `md:line-clamp-none ${expanded ? '' : clamp}`;

  return (
    <div className={className}>
      {/* Text layer — line-clamp controlled via className */}
      <p
        className={`text-sm text-muted-foreground leading-relaxed transition-all duration-300 ${collapsedMobileClass} ${textClassName}`}
      >
        {text}
      </p>

      {/* Toggle — hidden on desktop unless forceDesktop */}
      <button
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
        className={`mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-link-blue hover:text-secondary-blue transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-link-blue rounded ${forceDesktop ? '' : 'md:hidden'}`}
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
