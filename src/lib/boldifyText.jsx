import React from 'react';

/**
 * Global auto-bold utility for institutional terms.
 * Automatically wraps predefined key terms in <strong> tags
 * without breaking sentence flow or heading hierarchy.
 */

const BOLD_TERMS = [
  'Micro Research',
  'Ecological Validity',
  'Embedded Research Fellows',
  'Embedded Fellows',
  'TRL-9',
  'ISRO',
  'PSLV-C62',
  'Valorization',
  'Sovereign IP',
  'Sovereign IP Holders',
  'Patent-ready',
  'Patent-Ready',
  'Zenodo',
  'Longitudinal Dataset',
  'Longitudinal Continuity',
  'Biomimicry Hive',
  'Terra Utopia',
  'Innovation Labs',
  'Institutional Review Board (IRB)',
  'Institutional Review Board',
  'IRB',
  'Goldfish Bowl',
  '35,000+ Hours',
];

// Sort by length descending so longer matches take priority
const sortedTerms = [...BOLD_TERMS].sort((a, b) => b.length - a.length);

// Build a single regex that matches any term (case-sensitive)
const termPattern = sortedTerms
  .map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  .join('|');
const BOLD_REGEX = new RegExp(`(${termPattern})`, 'g');

/**
 * Takes a plain string and returns a React fragment with bold terms wrapped in <strong>.
 * If input is not a string or contains no matches, returns the input unchanged.
 */
export function boldifyText(text) {
  if (typeof text !== 'string' || !BOLD_REGEX.test(text)) return text;

  // Reset regex lastIndex
  BOLD_REGEX.lastIndex = 0;

  const parts = text.split(BOLD_REGEX);

  return parts.map((part, i) =>
    BOLD_REGEX.test(part) ? (
      <strong key={i} className="font-semibold text-foreground">
        {part}
      </strong>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );
}

export default boldifyText;
