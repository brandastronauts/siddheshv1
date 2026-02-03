import { FileText, BookOpen } from 'lucide-react';

const LibraryCardsSection = ({ heading, items }) => {
  return (
    <section className="section-spacing bg-background">
      <div className="container-grid">
        {heading && (
          <h2 className="text-3xl md:text-4xl font-bold text-center text-deep-ink mb-12">
            {heading}
          </h2>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
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
                  <span className="inline-block px-2 py-0.5 text-xs font-medium text-accent-cyan bg-accent-cyan/10 rounded mb-2">
                    {item.type === 'paper' ? 'Paper' : 'Report'}
                  </span>
                  
                  <h3 className="text-base font-semibold text-deep-ink mb-2 group-hover:text-primary-navy transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-1">
                    {item.authors}
                  </p>
                  
                  <p className="text-xs text-muted-foreground">
                    {item.journal} • {item.year}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LibraryCardsSection;
