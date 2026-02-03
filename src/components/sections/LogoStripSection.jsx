const LogoStripSection = ({ heading, logos }) => {
  return (
    <section className="section-spacing-sm bg-surface">
      <div className="container-grid">
        {heading && (
          <h3 className="text-lg font-medium text-center text-muted-foreground mb-8">
            {heading}
          </h3>
        )}
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos?.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-12 opacity-60 hover:opacity-100 transition-opacity"
            >
              {logo.src ? (
                <img
                  src={logo.src}
                  alt={logo.alt || `Partner ${index + 1}`}
                  className="h-full w-auto object-contain"
                />
              ) : (
                <div className="h-10 px-6 bg-muted rounded flex items-center justify-center">
                  <span className="text-sm font-medium text-muted-foreground">
                    {logo.name || `Partner ${index + 1}`}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoStripSection;
