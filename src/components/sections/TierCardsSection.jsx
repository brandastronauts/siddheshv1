import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { getIcon } from '../../lib/iconMap';

const tierColors = [
  { bg: 'bg-emerald-50', border: 'border-emerald-200', badge: 'bg-emerald-100 text-emerald-800', accent: 'text-emerald-600' },
  { bg: 'bg-blue-50', border: 'border-blue-200', badge: 'bg-blue-100 text-blue-800', accent: 'text-blue-600' },
  { bg: 'bg-amber-50', border: 'border-amber-200', badge: 'bg-amber-100 text-amber-800', accent: 'text-amber-600' },
  { bg: 'bg-red-50', border: 'border-red-200', badge: 'bg-red-100 text-red-800', accent: 'text-red-600' },
];

const TierCardsSection = ({ heading, header, intro, tiers = [] }) => {
  const title = header || heading;

  return (
    <section className="section-spacing bg-surface">
      <div className="container-grid">
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-deep-ink mb-6"
          >
            {title}
          </motion.h2>
        )}

        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-10"
          >
            {intro}
          </motion.p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {tiers.map((tier, index) => {
            const color = tierColors[index % tierColors.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-xl border ${color.border} ${color.bg} p-6 md:p-8 flex flex-col`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${color.badge}`}>
                    {tier.label}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-deep-ink mb-1">{tier.title}</h3>

                {tier.subtitle && (
                  <p className={`text-sm font-medium ${color.accent} mb-3`}>{tier.subtitle}</p>
                )}

                {tier.body && (
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{tier.body}</p>
                )}

                {tier.bullets && (
                  <ul className="space-y-1.5 mb-4">
                    {tier.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-current mt-1.5 flex-shrink-0 opacity-40" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {tier.note && (
                  <p className="text-xs text-muted-foreground italic mt-auto">{tier.note}</p>
                )}

                {tier.cta && (
                  <div className="mt-auto pt-4">
                    {tier.cta.href?.startsWith('#') ? (
                      <a
                        href={tier.cta.href}
                        className="inline-flex items-center gap-2 text-sm font-medium text-link-blue hover:text-secondary-blue transition-colors group"
                      >
                        {tier.cta.label}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    ) : (
                      <Link
                        to={tier.cta.href || '#'}
                        className="inline-flex items-center gap-2 text-sm font-medium text-link-blue hover:text-secondary-blue transition-colors group"
                      >
                        {tier.cta.label}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    )}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TierCardsSection;
