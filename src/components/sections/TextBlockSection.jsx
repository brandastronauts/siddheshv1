import { Link } from 'react-router-dom';
import { ArrowRight, FileWarning } from 'lucide-react';
import { motion } from 'framer-motion';

const TextBlockSection = ({ heading, header, sectionName, intro, content, body, cta, alignment = 'center' }) => {
  const title = header || heading;
  const text = body || content;
  
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <section className="section-spacing bg-background relative">
      <div className="container-grid">
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`max-w-3xl ${alignmentClasses[alignment]}`}
        >
          <div className="card-elegant p-8 md:p-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-navy/10 to-accent-cyan/10 flex items-center justify-center">
                <FileWarning className="w-7 h-7 text-primary-navy" />
              </div>
            </div>

            {sectionName && (
              <p className="text-sm font-semibold text-accent-cyan uppercase tracking-wider mb-3 text-center">
                {sectionName}
              </p>
            )}

            {intro && (
              <p className="text-muted-foreground italic mb-4 text-center text-sm">
                {intro}
              </p>
            )}
            
            {title && (
              <h2 className="text-2xl md:text-3xl font-bold text-deep-ink mb-4 text-center">
                {title}
              </h2>
            )}
            
            {text && (
              <p className="text-muted-foreground leading-relaxed text-center">
                {text}
              </p>
            )}

            {cta && (
              <div className="mt-8 text-center">
                <Link
                  to={cta.href || '#'}
                  className="btn-secondary group inline-flex"
                >
                  {cta.label}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TextBlockSection;
