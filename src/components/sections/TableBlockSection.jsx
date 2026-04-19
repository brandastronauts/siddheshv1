'use client'

import { motion } from 'framer-motion';

const TableBlockSection = ({ heading, header, intro, headers: tableHeaders = [], rows = [] }) => {
  const title = header || heading;

  return (
    <section className="section-spacing bg-background">
      <div className="container-grid">
        {title && (
          <h2 className="hero-fade-in text-3xl md:text-4xl font-bold text-center text-deep-ink mb-6">
            {title}
          </h2>
        )}

        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-sm mb-6 max-w-3xl"
          >
            {intro}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl overflow-x-auto"
        >
          <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
            {tableHeaders.length > 0 && (
              <thead>
                <tr className="bg-primary-navy text-white">
                  {tableHeaders.map((h, i) => (
                    <th key={i} className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wider">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {rows.map((row, ri) => {
                const cells = Array.isArray(row) ? row : [row];
                return (
                  <tr key={ri} className={`border-b border-border last:border-b-0 ${ri % 2 === 0 ? 'bg-card' : 'bg-surface'}`}>
                    {cells.map((cell, ci) => (
                      <td key={ci} className="px-4 py-3 text-muted-foreground">
                        <code className={ci === 0 ? 'text-deep-ink font-mono text-xs' : ''}>{cell}</code>
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

export default TableBlockSection;
