'use client'

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { boldifyText } from '../../lib/boldifyText';

const AnchorBlockSection = ({ id, heading, header, body }) => {
  const title = header || heading;

  return (
    <section id={id} className="section-spacing bg-surface scroll-mt-24">
      <div className="container-grid">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-card border border-border rounded-xl p-8 md:p-10 text-center"
        >
          <div className="w-12 h-12 mx-auto rounded-xl bg-primary-navy/10 flex items-center justify-center mb-4">
            <Mail className="w-6 h-6 text-primary-navy" />
          </div>

          {title && (
            <h2 className="text-2xl md:text-3xl font-bold text-center text-deep-ink mb-4">{title}</h2>
          )}

          {body && (
            <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
              {boldifyText(body)}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default AnchorBlockSection;
