import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import ExpandableText from '../common/ExpandableText';

const HighlightBoxSection = ({ heading, title, text, body, bullets, cta }) => {
  const displayTitle = title || heading;
  const displayText = body || text;

  return (
    <section className="section-spacing-sm bg-background">
      <div className="container-grid">
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-navy via-secondary-blue to-primary-navy" />
            
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 pattern-grid" />
            </div>

            {/* Glow effect */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-cyan/20 to-transparent" />
            
            <div className="relative z-10 p-8 md:p-12">
              {displayTitle && (
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
                  {displayTitle}
                </h2>
              )}
              
              {displayText && (
                <ExpandableText
                  text={displayText}
                  collapsedLines={4}
                  minChars={300}
                  textClassName="text-lg text-white/85 text-center whitespace-pre-line"
                  className="mb-6 max-w-2xl mx-auto"
                />
              )}

              {bullets && bullets.length > 0 && (
                <ul className="space-y-3 max-w-2xl mx-auto mb-6">
                  {bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/85">
                      <Check className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              {cta && (
                <div className="text-center">
                  {cta.external || cta.href?.startsWith('http') ? (
                    <a
                      href={cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-navy font-medium rounded-xl hover:bg-white/90 transition-all duration-200 hover:shadow-lg group"
                    >
                      {cta.label}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  ) : (
                    <Link
                      to={cta.path || cta.href || '#'}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-navy font-medium rounded-xl hover:bg-white/90 transition-all duration-200 hover:shadow-lg group"
                    >
                      {cta.label}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HighlightBoxSection;
