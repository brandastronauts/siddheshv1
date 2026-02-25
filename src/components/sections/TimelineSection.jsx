import ExpandableText from '../common/ExpandableText';

const TimelineSection = ({ heading, header, items = [] }) => {
  const title = header || heading;
  return (
    <section className="section-spacing bg-background">
      <div className="container-grid">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-center text-deep-ink mb-6">
            {title}
          </h2>
        )}
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2" />
            
            {items.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-6 mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-accent-cyan bg-accent-cyan/10 rounded-full mb-2">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-semibold text-deep-ink mb-2">
                    {item.title}
                  </h3>
                  <ExpandableText
                    text={item.description || item.body}
                    collapsedLines={4}
                    minChars={200}
                  />
                </div>
                
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-accent-cyan rounded-full transform -translate-x-1/2 mt-1 border-4 border-background" />
                
                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
