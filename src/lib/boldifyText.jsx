import React from 'react';

/**
 * Global auto-bold + auto-link utility for institutional terms and emails.
 * Automatically wraps predefined key terms in <strong> tags
 * and converts email addresses to clickable mailto links.
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

// Email regex
const EMAIL_REGEX = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi;

// Combined regex: emails OR bold terms (emails checked first to avoid partial bold matches)
const COMBINED_REGEX = new RegExp(
  `(${EMAIL_REGEX.source})|(${termPattern})`,
  'gi'
);

/**
 * Process a plain string segment: apply email auto-linking + bold term wrapping.
 */
function processSegment(text, keyPrefix = '') {
  if (typeof text !== 'string') return text;

  // Reset regex
  COMBINED_REGEX.lastIndex = 0;

  // Check if there are any matches at all
  if (!COMBINED_REGEX.test(text)) return text;
  COMBINED_REGEX.lastIndex = 0;

  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = COMBINED_REGEX.exec(text)) !== null) {
    // Add text before match
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const matchedText = match[0];

    // Check if it's an email (group 1)
    if (match[1]) {
      parts.push(
        <a
          key={`${keyPrefix}email-${match.index}`}
          href={`mailto:${matchedText}`}
          className="email-link"
        >
          {matchedText}
        </a>
      );
    } else {
      // It's a bold term (group 2)
      parts.push(
        <strong key={`${keyPrefix}bold-${match.index}`} className="font-semibold text-inherit">
          {matchedText}
        </strong>
      );
    }

    lastIndex = match.index + matchedText.length;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length === 1 && typeof parts[0] === 'string' ? parts[0] : parts;
}

/**
 * Takes a plain string and returns a React fragment with:
 * - Bold terms wrapped in <strong>
 * - Email addresses wrapped in <a href="mailto:...">
 * If input is not a string or contains no matches, returns the input unchanged.
 */
export function boldifyText(text) {
  if (typeof text !== 'string') return text;

  // First pass: handle **markdown bold** syntax
  const MD_BOLD = /\*\*(.+?)\*\*/g;
  const hasMarkdown = MD_BOLD.test(text);
  MD_BOLD.lastIndex = 0;

  if (hasMarkdown) {
    const parts = text.split(/\*\*(.+?)\*\*/g);
    return parts.map((part, i) =>
      i % 2 === 1 ? (
        <strong key={`md-${i}`} className="font-semibold text-inherit">
          {processSegment(part, `md-${i}-`)}
        </strong>
      ) : (
        <React.Fragment key={`md-${i}`}>{processSegment(part, `seg-${i}-`)}</React.Fragment>
      )
    );
  }

  return processSegment(text, 'root-');
}

export default boldifyText;
