import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { getIcon } from '../../lib/iconMap';
import { FileText } from 'lucide-react';

const RelatedCardsSection = ({ header, cards = [] }) => {
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

        <div className={`grid grid-cols-1 gap-6 mx-auto ${
          cards.length === 1 ? 'max-w-sm' 
          : cards.length === 2 ? 'sm:grid-cols-2 max-w-2xl' 
          : cards.length === 3 ? 'md:grid-cols-3 max-w-4xl' 
          : cards.length === 4 ? 'sm:grid-cols-2 lg:grid-cols-4 max-w-5xl' 
          : 'md:grid-cols-3 max-w-5xl'
        }`}>
          {cards.map((card, index) => {
            const IconComponent = getIcon(card.icon) || FileText;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={card.href || '#'}
                  className="group block bg-card rounded-xl p-6 border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center group-hover:bg-accent-cyan/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-accent-cyan" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-deep-ink group-hover:text-primary-navy transition-colors">
                        {card.title}
                      </h3>
                    </div>
                  </div>
                  
                  {card.description && (
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {card.description}
                    </p>
                  )}
                  
                  <div className="flex items-center gap-2 text-sm font-medium text-link-blue group-hover:text-secondary-blue transition-colors">
                    View
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RelatedCardsSection;
