import { motion } from 'framer-motion';
import { boldifyText } from '../../lib/boldifyText';

const TimelineStepsSection = ({ heading, header, steps = [] }) => {
  const title = header || heading;

  return (
    <section className="section-spacing bg-background">
      <div className="container-grid">
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-deep-ink mb-10"
          >
            {title}
          </motion.h2>
        )}

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="relative pl-14 pb-10 last:pb-0"
            >
              {/* Step number */}
              <div className="absolute left-0 w-10 h-10 rounded-xl bg-primary-navy text-white flex items-center justify-center font-bold text-sm z-10">
                {index + 1}
              </div>

              <h3 className="text-lg font-bold text-deep-ink mb-2">{step.title}</h3>

              {step.body && (
                <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line mb-3">
                  {boldifyText(step.body)}
                </div>
              )}

              {step.bullets && (
                <ul className="space-y-1.5">
                  {step.bullets.map((b, bi) => (
                    <li key={bi} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-1.5 flex-shrink-0" />
                      <span>{boldifyText(b)}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineStepsSection;
