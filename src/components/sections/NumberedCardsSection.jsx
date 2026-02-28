import { motion } from 'framer-motion';
import { boldifyText } from '../../lib/boldifyText';

const NumberedCardsSection = ({ heading, header, items = [] }) => {
  const title = header || heading;

  return (
    <section className="section-spacing bg-background">
      <div className="container-grid">
        {title && (
          <h2 className="hero-fade-in text-3xl md:text-4xl font-bold text-center text-deep-ink mb-10">
            {title}
          </h2>
        )}

        <div className="max-w-4xl mx-auto space-y-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(index * 0.05, 0.4) }}
              className="bg-card border border-border rounded-xl p-6 md:p-8 relative overflow-hidden"
            >
              {/* Number badge */}
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary-navy text-white flex items-center justify-center font-bold text-lg">
                  {item.number || index + 1}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-deep-ink mb-3">
                    {item.title}
                  </h3>

                  {/* Body paragraphs */}
                  {item.body && (
                    <div className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line mb-4">
                      {boldifyText(item.body)}
                    </div>
                  )}

                  {/* Optional bullet list */}
                  {item.bullets && item.bullets.length > 0 && (
                    <ul className="space-y-1.5 mt-3">
                      {item.bullets.map((bullet, bi) => (
                        <li key={bi} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-1.5 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Optional sub-sections (e.g., Use X when / Use Y when) */}
                  {item.subsections && item.subsections.map((sub, si) => (
                    <div key={si} className="mt-4">
                      <p className="text-sm font-semibold text-deep-ink mb-2">{sub.label}</p>
                      <ul className="space-y-1.5">
                        {sub.items.map((s, ssi) => (
                          <li key={ssi} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-1.5 flex-shrink-0" />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NumberedCardsSection;
