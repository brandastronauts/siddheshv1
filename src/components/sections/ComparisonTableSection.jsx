'use client'

import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

const ComparisonTableSection = ({ heading, header, headers, columns, rows, intro }) => {
  const title = header || heading;
  const tableHeaders = headers || (columns ? ['', ...columns] : null);

  // Normalize rows: support both array-of-arrays and array-of-objects ({label, values})
  const normalizedRows = (rows || []).map(row => {
    if (Array.isArray(row)) return row;
    if (row && typeof row === 'object') {
      const vals = Array.isArray(row.values) ? row.values : [];
      if (!row.label && vals.length === 0) return null;
      return [row.label, ...vals].filter(v => v !== undefined && v !== null);
    }
    return [row];
  }).filter(Boolean);

  return (
    <section className="section-spacing bg-surface">
      <div className="container-grid">
        {title && (
          <h2 className="hero-fade-in text-3xl md:text-4xl font-bold text-center text-deep-ink mb-6">
            {title}
          </h2>
        )}

        {intro && (
          <motion.p 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12"
          >
            {intro}
          </motion.p>
        )}

        {/* Mobile scroll hint */}
        <p className="text-xs text-muted-foreground text-center mb-3 md:hidden" aria-hidden="true">
          ← Scroll to compare →
        </p>
        
        <div className="max-w-4xl mx-auto overflow-x-auto -mx-4 px-4 md:mx-auto md:px-0">
          <table className="w-full bg-card rounded-xl border border-border/50 shadow-card overflow-hidden min-w-[540px]">
            {tableHeaders && (
              <thead>
                <tr className="bg-primary-navy text-white">
                  {tableHeaders.map((h, index) => (
                    <th
                      key={index}
                      className="px-4 md:px-6 py-4 text-left text-sm font-semibold first:rounded-tl-xl last:rounded-tr-xl whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody className="divide-y divide-border">
              {normalizedRows.map((row, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-surface/50 transition-colors">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-4 md:px-6 py-4 text-sm">
                      {typeof cell === 'boolean' ? (
                        cell ? (
                          <Check className="w-5 h-5 text-green-500" />
                        ) : (
                          <X className="w-5 h-5 text-red-400" />
                        )
                      ) : (
                        <span className={cellIndex === 0 ? 'font-medium text-deep-ink' : 'text-muted-foreground'}>
                          {cell}
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTableSection;
