import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ListSection = ({ heading, items }) => {
  return (
    <section className="section-spacing bg-background">
      <div className="container-grid">
        {heading && (
          <h2 className="text-3xl md:text-4xl font-bold text-center text-deep-ink mb-12">
            {heading}
          </h2>
        )}
        
        <div className="max-w-3xl mx-auto space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-deep-ink mb-2 group-hover:text-primary-navy transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                {item.link && (
                  <Link
                    to={item.link}
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-surface flex items-center justify-center group-hover:bg-accent-cyan/10 transition-colors"
                  >
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent-cyan transition-colors" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListSection;
