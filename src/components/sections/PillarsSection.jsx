import { getIcon } from '../../lib/iconMap';

const PillarsSection = ({ heading, header, items = [] }) => {
  const title = header || heading;

  return (
    <section className="section-spacing bg-surface relative overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-20" />

      <div className="container-grid relative z-10">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-center text-deep-ink mb-12">
            {title}
          </h2>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => {
            const IconComponent = getIcon(item.icon);

            return (
              <div
                key={index}
                className="card-elegant p-6 md:p-8 group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
              >
                {IconComponent && (
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-cyan/10 to-primary-navy/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-accent-cyan" />
                  </div>
                )}

                {!IconComponent && (
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-cyan/10 to-primary-navy/10 flex items-center justify-center mb-5 text-accent-cyan font-bold text-xl">
                    {index + 1}
                  </div>
                )}

                <h3 className="text-lg font-semibold text-deep-ink mb-3 group-hover:text-primary-navy transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.body || item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
