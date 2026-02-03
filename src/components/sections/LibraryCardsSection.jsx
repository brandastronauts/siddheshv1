import { Link } from 'react-router-dom';
import { FileText, BookOpen, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const LibraryCardsSection = ({ heading, header, sectionName, intro, items, cards, cta }) => {
  const title = header || heading;
  const cardData = cards || items || [];

  return (
    <section className="section-spacing bg-background relative">
      <div className="container-grid">
        {sectionName && (
          <motion.p 
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-accent-cyan uppercase tracking-wider text-center mb-3"
          >
            {sectionName}
          </motion.p>
        )}
        
        {title && (
          <motion.h2 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-deep-ink mb-6 whitespace-pre-line"
          >
            {title}
          </motion.h2>
        )}

        {intro && (
          <motion.p 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            {intro}
          </motion.p>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((item, index) => {
            // Detect if this is the new format (status/body) or old format (authors/journal/year)
            const isNewFormat = item.status !== undefined || item.body !== undefined;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-elegant p-6 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-primary-navy/10 to-accent-cyan/5 flex items-center justify-center">
                    {item.type === 'paper' ? (
                      <FileText className="w-5 h-5 text-primary-navy" />
                    ) : (
                      <BookOpen className="w-5 h-5 text-primary-navy" />
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    {/* Status badge for new format, or type badge for old format */}
                    {(item.status || item.type) && (
                      <span className="badge-navy mb-3 inline-block text-xs">
                        {item.status || (item.type === 'paper' ? 'Paper' : 'Report')}
                      </span>
                    )}
                    
                    <h3 className="text-base font-semibold text-deep-ink mb-2 group-hover:text-primary-navy transition-colors">
                      {item.title}
                    </h3>
                    
                    {isNewFormat ? (
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.body}
                      </p>
                    ) : (
                      <>
                        <p className="text-sm text-muted-foreground mb-1">
                          {item.authors}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {item.journal} • {item.year}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        {cta && (
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            {cta.disabled ? (
              <button
                disabled
                className="inline-flex items-center gap-2 px-6 py-3 bg-muted text-muted-foreground font-medium rounded-xl cursor-not-allowed opacity-50"
              >
                <Lock className="w-4 h-4" />
                {cta.label}
              </button>
            ) : cta.href ? (
              <Link
                to={cta.href}
                className="btn-primary"
              >
                {cta.label}
              </Link>
            ) : null}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default LibraryCardsSection;
