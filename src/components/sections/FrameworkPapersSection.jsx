import { motion } from 'framer-motion';
import { FileText, ExternalLink } from 'lucide-react';
import { boldifyText } from '../../lib/boldifyText';

const FrameworkPapersSection = ({ id, heading, header, papers = [] }) => {
  const title = header || heading;

  return (
    <section id={id} className="section-spacing bg-surface scroll-mt-24">
      <div className="container-grid">
        {title && (
          <h2 className="hero-fade-in text-3xl md:text-4xl font-bold text-center text-deep-ink mb-12">
            {title}
          </h2>
        )}

        <div className={`grid grid-cols-1 gap-8 max-w-5xl mx-auto ${papers.length > 1 ? 'lg:grid-cols-2' : ''}`}>
          {papers.map((paper, index) => (
            <motion.a
              key={index}
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="card-elegant p-8 md:p-10 group cursor-pointer flex flex-col h-full hover:border-accent-cyan/40 transition-all duration-300"
            >
              {/* Icon + DOI badge */}
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-cyan/10 to-primary-navy/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-6 h-6 text-accent-cyan" />
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-deep-ink mb-2 group-hover:text-primary-navy transition-colors">
                {paper.title}
              </h3>

              {/* DOI */}
              {paper.doi && (
                <p className="text-xs font-mono text-accent-cyan mb-4">
                  DOI: {paper.doi}
                </p>
              )}

              {/* Body paragraphs */}
              <div className="flex-1 space-y-3 text-sm text-muted-foreground leading-relaxed">
                {paper.body.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{boldifyText(paragraph)}</p>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-6 pt-4 border-t border-border">
                <span className="text-sm font-semibold text-primary-navy group-hover:text-accent-cyan transition-colors inline-flex items-center gap-1.5">
                  Read the full paper on Zenodo
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrameworkPapersSection;
