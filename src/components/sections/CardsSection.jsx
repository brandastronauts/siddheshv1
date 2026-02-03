import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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
          className="inline-flex items-center gap-2 text-sm font-medium text-link-blue hover:text-secondary-blue transition-colors"
        >
          {action.label}
          <ArrowRight className="w-4 h-4" />
        </a>
      );
    }

    return (
      <Link
        to={action.href || '#'}
        className="inline-flex items-center gap-2 text-sm font-medium text-link-blue hover:text-secondary-blue transition-colors"
      >
        {action.label}
        <ArrowRight className="w-4 h-4" />
      </Link>
    );
  };

  return (
    <section className="section-spacing bg-surface">
      <div className="container-grid">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-center text-deep-ink mb-12">
            {title}
          </h2>
        )}
        
        <div className={`grid grid-cols-1 ${isPressRoom ? 'lg:grid-cols-1 max-w-4xl mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'} gap-6`}>
          {cardData.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50"
            >
              {/* Tag for pressRoom variant */}
              {item.tag && (
                <span className="inline-block px-3 py-1 text-xs font-medium text-accent-cyan bg-accent-cyan/10 rounded-full mb-3">
                  {item.tag}
                </span>
              )}

              <h3 className="text-lg font-semibold text-deep-ink mb-1">
                {item.headline || item.title}
              </h3>
              
              {item.subtitle && (
                <p className="text-sm text-accent-cyan font-medium mb-3">
                  {item.subtitle}
                </p>
              )}
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {item.body || item.description}
              </p>

              {/* Action button for pressRoom */}
              {item.action && renderAction(item.action)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
