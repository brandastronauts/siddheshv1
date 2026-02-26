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
  'Didactic Innovation Principles',
  'DIP',
  'DIP Labs',
  'DIP Lab 1',
  'DIP Lab 2',
  'Innovation Studio',
  'Innovation Canon',
  'Integrated Design-Research',
  'Longitudinal Consent Architecture',
  'Ethics Advisory Committee',
  'BEOP v1.0',
  'MREF v1.0',
  'CDCS v1.0',
  'Blue Blocks Embedded Observation Protocol',
  'Micro Research Ethics Framework',
  'Child Data Classification Standard',
  'CC-BY-4.0',
  'Declaration of Helsinki',
  'Belmont Report',
  'DPDP Act 2023',
  'GDPR',
  'POCSO Act 2012',
  'ICMR Guidelines 2017',
  'Blue Blocks Micro Dataset Specification v1.0',
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
  if (typeof text !== 'string') return text;

  // First pass: handle **markdown bold** syntax
  const MD_BOLD = /\*\*(.+?)\*\*/g;
  const hasMarkdown = MD_BOLD.test(text);
  MD_BOLD.lastIndex = 0;

  if (hasMarkdown) {
    // Split by **bold** markers
    const parts = text.split(/\*\*(.+?)\*\*/g);
    return parts.map((part, i) =>
      i % 2 === 1 ? (
        <strong key={`md-${i}`} className="font-semibold text-inherit">
          {part}
        </strong>
      ) : (
        <React.Fragment key={`md-${i}`}>{boldifyTerms(part)}</React.Fragment>
      )
    );
  }

  return boldifyTerms(text);
}

function boldifyTerms(text) {
  if (typeof text !== 'string' || !BOLD_REGEX.test(text)) return text;
  BOLD_REGEX.lastIndex = 0;

  const parts = text.split(BOLD_REGEX);

  return parts.map((part, i) =>
    BOLD_REGEX.test(part) ? (
      <strong key={i} className="font-semibold text-inherit">
        {part}
      </strong>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );
}

export default boldifyText;
