import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ListSection = ({ heading, header, sectionName, intro, items }) => {
  const title = header || heading;

  return (
    <section className="section-spacing bg-background">
      <div className="container-grid">
        {sectionName && (
          <p className="text-sm font-medium text-accent-cyan uppercase tracking-wider text-center mb-2">
            {sectionName}
          </p>
        )}
        
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-center text-deep-ink mb-6">
            {title}
          </h2>
        )}

        {intro && (
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            {intro}
          </p>
        )}
        
        <div className="max-w-3xl mx-auto space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-deep-ink group-hover:text-primary-navy transition-colors">
                      {item.title}
                    </h3>
                    {item.meta && (
                      <span className="text-xs font-medium text-accent-cyan bg-accent-cyan/10 px-2 py-0.5 rounded">
                        {item.meta}
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                  {item.statusLine && (
                    <p className="text-xs font-medium text-primary-navy mt-3">
                      {item.statusLine}
                    </p>
                  )}
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
