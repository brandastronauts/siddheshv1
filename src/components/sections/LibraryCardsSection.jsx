import { Link } from 'react-router-dom';
import { FileText, BookOpen, Lock } from 'lucide-react';

const LibraryCardsSection = ({ heading, header, sectionName, intro, items, cards, cta }) => {
  const title = header || heading;
  const cardData = cards || items || [];

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((item, index) => {
            // Detect if this is the new format (status/body) or old format (authors/journal/year)
            const isNewFormat = item.status !== undefined || item.body !== undefined;
            
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-navy/10 flex items-center justify-center">
                    {item.type === 'paper' ? (
                      <FileText className="w-5 h-5 text-primary-navy" />
                    ) : (
                      <BookOpen className="w-5 h-5 text-primary-navy" />
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    {/* Status badge for new format, or type badge for old format */}
                    {(item.status || item.type) && (
                      <span className="inline-block px-2 py-0.5 text-xs font-medium text-accent-cyan bg-accent-cyan/10 rounded mb-2">
                        {item.status || (item.type === 'paper' ? 'Paper' : 'Report')}
                      </span>
                    )}
                    
                    <h3 className="text-base font-semibold text-deep-ink mb-2 group-hover:text-primary-navy transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    
                    {isNewFormat ? (
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.body}
                      </p>
                    ) : (
                      <>
                        <p className="text-sm text-muted-foreground mb-1">
                          {item.authors}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {item.journal} • {item.year}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        {cta && (
          <div className="mt-10 text-center">
            {cta.disabled ? (
              <button
                disabled
                className="inline-flex items-center gap-2 px-6 py-3 bg-muted text-muted-foreground font-medium rounded-lg cursor-not-allowed opacity-60"
              >
                <Lock className="w-4 h-4" />
                {cta.label}
              </button>
            ) : cta.href ? (
              <Link
                to={cta.href}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-navy text-white font-medium rounded-lg hover:bg-secondary-blue transition-all duration-200 hover:shadow-lg"
              >
                {cta.label}
              </Link>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
};

export default LibraryCardsSection;
