const TextBlockSection = ({ heading, content, alignment = 'center' }) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <section className="section-spacing bg-background">
      <div className="container-grid">
        <div className={`max-w-3xl ${alignmentClasses[alignment]}`}>
          {heading && (
            <h2 className="text-3xl md:text-4xl font-bold text-deep-ink mb-6">
              {heading}
            </h2>
          )}
          
          {content && (
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {content}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TextBlockSection;
