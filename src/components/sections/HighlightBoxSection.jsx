import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HighlightBoxSection = ({ heading, text, cta }) => {
  return (
    <section className="section-spacing bg-background">
      <div className="container-grid">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary-navy to-secondary-blue rounded-2xl p-8 md:p-12 text-center">
          {heading && (
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {heading}
            </h2>
          )}
          
          {text && (
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              {text}
            </p>
          )}
          
          {cta && (
            <Link
              to={cta.path}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-navy font-medium rounded-lg hover:bg-white/90 transition-all duration-200 hover:shadow-lg"
            >
              {cta.label}
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default HighlightBoxSection;
