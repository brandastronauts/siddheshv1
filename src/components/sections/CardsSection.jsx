const CardsSection = ({ heading, items }) => {
  return (
    <section className="section-spacing bg-surface">
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
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50"
            >
              <h3 className="text-lg font-semibold text-deep-ink mb-1">
                {item.title}
              </h3>
              
              {item.subtitle && (
                <p className="text-sm text-accent-cyan font-medium mb-3">
                  {item.subtitle}
                </p>
              )}
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
