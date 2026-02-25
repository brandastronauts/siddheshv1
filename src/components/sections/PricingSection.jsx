import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const PricingSection = ({ header, columns }) => {
  const renderCta = (cta) => {
    if (!cta) return null;
    
    if (cta.disabled) {
      return (
        <span className="btn-secondary w-full justify-center opacity-50 cursor-not-allowed">
          {cta.label}
        </span>
      );
    }
    
    const isInternal = cta.href?.startsWith('/');
    const className = "btn-secondary w-full justify-center";
    
    const content = (
      <>
        {cta.label}
        <ArrowRight className="w-4 h-4" />
      </>
    );

    if (isInternal) {
      return <Link to={cta.href} className={className}>{content}</Link>;
    }
    return <a href={cta.href} className={className}>{content}</a>;
  };

  return (
    <section className="section-spacing bg-surface">
      <div className="container-grid">
        {header && (
          <motion.h2 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-deep-ink mb-6"
          >
            {header}
          </motion.h2>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {columns?.map((col, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-background rounded-xl border border-border/50 p-6 flex flex-col hover:border-accent-cyan/30 transition-colors"
            >
              {col.badge && (
                <span className="absolute -top-3 left-6 px-3 py-1 text-xs font-semibold bg-accent-cyan text-white rounded-full">
                  {col.badge}
                </span>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-deep-ink mb-1">
                  {col.title}
                </h3>
                {col.sub && (
                  <p className="text-sm text-muted-foreground">
                    {col.sub}
                  </p>
                )}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                {col.body}
              </p>

              {col.features && (
                <ul className="space-y-2 mb-6">
                  {col.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-accent-cyan flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}

              {renderCta(col.cta)}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
