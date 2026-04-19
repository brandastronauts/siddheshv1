'use client'

import { motion } from 'framer-motion';

/**
 * PullQuoteCard — Styled quote block for profile pages.
 * Renders a quote with left accent border, decorative quote mark, and soft tint.
 * 
 * @param {string} quote - The quote text (without surrounding quotes/markdown)
 * @param {string} variant - "large" for primary pullquote, "inline" for in-text callouts
 */
const PullQuoteCard = ({ quote, variant = 'large' }) => {
  if (!quote) return null;

  // Strip leading > and surrounding quotes for display
  let cleaned = quote.replace(/^>\s*/, '').trim();
  // Remove wrapping double quotes if present
  if (cleaned.startsWith('"') && cleaned.endsWith('"')) {
    cleaned = cleaned.slice(1, -1);
  }

  const isLarge = variant === 'large';

  return (
    <motion.blockquote
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`relative rounded-xl border-l-4 border-accent-cyan ${
        isLarge 
          ? 'bg-surface px-8 py-8 md:px-10 md:py-10' 
          : 'bg-surface/60 px-6 py-5 md:px-8 md:py-6'
      }`}
    >
      {/* Decorative quote mark */}
      <span
        className={`absolute font-serif select-none pointer-events-none text-primary-navy ${
          isLarge 
            ? 'text-[80px] md:text-[100px] -top-2 left-3 md:left-4 opacity-[0.08]' 
            : 'text-[60px] md:text-[72px] -top-1 left-2 md:left-3 opacity-[0.06]'
        }`}
        aria-hidden="true"
      >
        &ldquo;
      </span>
      <p className={`relative z-10 font-serif italic leading-relaxed text-deep-ink ${
        isLarge 
          ? 'text-base md:text-lg' 
          : 'text-sm md:text-base'
      }`}>
        &ldquo;{cleaned}&rdquo;
      </p>
    </motion.blockquote>
  );
};

export default PullQuoteCard;
