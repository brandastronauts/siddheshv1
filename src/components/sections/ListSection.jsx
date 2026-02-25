import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { boldifyText } from '../../lib/boldifyText';

const ListSection = ({ heading, header, sectionName, intro, items }) => {
  const title = header || heading;

  return (
    <section className="section-spacing bg-surface relative overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-20" />
      
      <div className="container-grid relative z-10">
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
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-deep-ink mb-6"
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
        
        <div className="max-w-3xl mx-auto space-y-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-elegant p-6 group"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-navy/5 to-accent-cyan/10 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary-navy" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-deep-ink group-hover:text-primary-navy transition-colors">
                      {item.title}
                    </h3>
                    {item.meta && (
                      <span className="badge-navy text-xs">
                        {item.meta}
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {boldifyText(item.description)}
                  </p>
                  {item.statusLine && (
                    <p className="text-xs font-semibold text-accent-cyan mt-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse-soft" />
                      {item.statusLine}
                    </p>
                  )}
                </div>
                
                {item.link && (
                  <Link
                    to={item.link}
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-surface flex items-center justify-center group-hover:bg-accent-cyan/10 transition-colors"
                  >
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent-cyan transition-colors" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListSection;
