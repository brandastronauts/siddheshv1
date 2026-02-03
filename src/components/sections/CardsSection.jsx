import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CardsSection = ({ heading, header, items, cards, variant }) => {
  const title = header || heading;
  const cardData = cards || items || [];
  const isPressRoom = variant === 'pressRoom';

  const renderAction = (action) => {
    if (!action) return null;
    
    const isExternal = action.external || action.href?.startsWith('http');
    
    if (isExternal) {
      return (
        <a
          href={action.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-link-blue hover:text-secondary-blue transition-colors group"
        >
          {action.label}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      );
    }

    return (
      <Link
        to={action.href || '#'}
        className="inline-flex items-center gap-2 text-sm font-medium text-link-blue hover:text-secondary-blue transition-colors group"
      >
        {action.label}
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Link>
    );
  };

  return (
    <section className="section-spacing bg-background relative">
      <div className="container-grid">
        {title && (
          <motion.h2 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-deep-ink mb-12"
          >
            {title}
          </motion.h2>
        )}
        
        <div className={`grid grid-cols-1 ${isPressRoom ? 'lg:grid-cols-1 max-w-4xl mx-auto gap-6' : 'md:grid-cols-2 lg:grid-cols-3 gap-6'}`}>
          {cardData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-elegant p-6 lg:p-8 group"
            >
              {/* Tag for pressRoom variant */}
              {item.tag && (
                <span className="badge-accent mb-4 inline-block">
                  {item.tag}
                </span>
              )}

              <h3 className="text-xl font-semibold text-deep-ink mb-3 group-hover:text-primary-navy transition-colors">
                {item.headline || item.title}
              </h3>
              
              {item.subtitle && (
                <p className="text-sm text-accent-cyan font-medium mb-3">
                  {item.subtitle}
                </p>
              )}
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {item.body || item.description}
              </p>

              {/* Action button for pressRoom */}
              {item.action && renderAction(item.action)}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
