import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Microscope, Building2, GraduationCap, Briefcase, ArrowRight } from 'lucide-react';

const iconMap = {
  microscope: Microscope,
  building: Building2,
  graduation: GraduationCap,
  briefcase: Briefcase,
};

const ButtonCardsSection = ({ heading, header, items, cards, footerNote }) => {
  const title = header || heading;
  const cardData = cards || items || [];

  const renderButton = (item) => {
    const buttonData = item.button;
    if (!buttonData) return null;

    const isAnchor = buttonData.href?.startsWith('#');
    const isExternal = buttonData.href?.startsWith('http');

    if (isAnchor) {
      return (
        <a
          href={buttonData.href}
          className="inline-flex items-center gap-2 text-sm font-medium text-link-blue hover:text-secondary-blue transition-colors group/btn"
        >
          {buttonData.label}
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </a>
      );
    }

    if (isExternal) {
      return (
        <a
          href={buttonData.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-link-blue hover:text-secondary-blue transition-colors group/btn"
        >
          {buttonData.label}
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </a>
      );
    }

    return (
      <Link
        to={buttonData.href || '#'}
        className="inline-flex items-center gap-2 text-sm font-medium text-link-blue hover:text-secondary-blue transition-colors group/btn"
      >
        {buttonData.label}
        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
      </Link>
    );
  };

  return (
    <section className="section-spacing bg-surface">
      <div className="container-grid">
        {title && (
          <motion.h2 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-deep-ink mb-12"
          >
            {title}
          </motion.h2>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cardData.map((item, index) => {
            const IconComponent = item.icon ? iconMap[item.icon] : null;
            const cardTitle = item.headline || item.title;
            const cardBody = item.body || item.description;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50 group"
              >
                {IconComponent && (
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center group-hover:bg-accent-cyan/20 transition-colors mb-4">
                    <IconComponent className="w-6 h-6 text-accent-cyan" />
                  </div>
                )}
                
                <h3 className="text-lg font-semibold text-deep-ink mb-3 group-hover:text-primary-navy transition-colors">
                  {cardTitle}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {cardBody}
                </p>
                
                {renderButton(item)}
              </motion.div>
            );
          })}
        </div>

        {footerNote && (
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center text-sm text-muted-foreground mt-8"
          >
            {footerNote}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default ButtonCardsSection;
