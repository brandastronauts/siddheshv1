const BentoSection = ({ heading, items }) => {
  return (
    <section className="section-spacing bg-background">
      <div className="container-grid">
        {heading && (
          <h2 className="text-3xl md:text-4xl font-bold text-center text-deep-ink mb-12">
            {heading}
          </h2>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items?.map((item, index) => {
            const isLarge = index === 0 || index === 3;
            
            return (
              <div
                key={index}
                className={`bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 ${
                  isLarge ? 'md:col-span-2' : ''
                }`}
              >
                {item.tag && (
                  <span className="inline-block px-3 py-1 text-xs font-medium text-accent-cyan bg-accent-cyan/10 rounded-full mb-4">
                    {item.tag}
                  </span>
                )}
                
                <h3 className="text-xl font-semibold text-deep-ink mb-3">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BentoSection;
