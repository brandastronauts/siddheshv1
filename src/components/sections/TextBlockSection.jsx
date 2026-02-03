import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const TextBlockSection = ({ heading, header, sectionName, intro, content, body, cta, alignment = 'center' }) => {
  const title = header || heading;
  const text = body || content;
  
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <section className="section-spacing bg-background">
      <div className="container-grid">
        <div className={`max-w-3xl ${alignmentClasses[alignment]}`}>
          {sectionName && (
            <p className="text-sm font-medium text-accent-cyan uppercase tracking-wider mb-2">
              {sectionName}
            </p>
          )}

          {intro && (
            <p className="text-muted-foreground italic mb-4">
              {intro}
            </p>
          )}
          
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold text-deep-ink mb-6">
              {title}
            </h2>
          )}
          
          {text && (
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {text}
              </p>
            </div>
          )}

          {cta && (
            <div className="mt-8">
              <Link
                to={cta.href || '#'}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-navy text-white font-medium rounded-lg hover:bg-secondary-blue transition-all duration-200 hover:shadow-lg"
              >
                {cta.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TextBlockSection;
