import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { boldifyText } from '../../lib/boldifyText';

const ChecklistSection = ({ heading, header, intro, items = [], body }) => {
  const title = header || heading;

  return (
    <section className="section-spacing bg-surface">
      <div className="container-grid">
        {title && (
          <h2 className="hero-fade-in text-3xl md:text-4xl font-bold text-center text-deep-ink mb-6">
            {title}
          </h2>
        )}

        {body && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-sm mb-6 max-w-3xl mx-auto text-center leading-relaxed">
          >
            {boldifyText(body)}
          </motion.p>
        )}

        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-6 md:p-8">
            <ul className="space-y-3">
              {items.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent-cyan/10 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-accent-cyan" />
                  </div>
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    {boldifyText(typeof item === 'string' ? item : item.text || item.label)}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChecklistSection;
