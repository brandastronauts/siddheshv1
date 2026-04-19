'use client'

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { boldifyText } from '../../lib/boldifyText';

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
      <div className={`text-sm text-muted-foreground leading-relaxed whitespace-pre-line ${textClassName} ${className}`}>
        {boldifyText(text)}
      </div>
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
      <div
        className={`text-sm text-muted-foreground leading-relaxed transition-all duration-300 whitespace-pre-line ${collapsedMobileClass} ${textClassName}`}
      >
        {boldifyText(text)}
      </div>

      {/* Toggle — hidden on desktop unless forceDesktop */}
      <button
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
      className={`mt-1.5 inline-flex items-center justify-center w-6 h-6 text-muted-foreground/60 hover:text-link-blue transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-link-blue rounded-full ${forceDesktop ? '' : 'md:hidden'}`}
        aria-label={expanded ? 'Show less' : 'Read more'}
      >
        {expanded
          ? <ChevronUp className="w-4 h-4" aria-hidden="true" />
          : <ChevronDown className="w-4 h-4" aria-hidden="true" />
        }
      </button>
    </div>
  );
};

export default ExpandableText;
