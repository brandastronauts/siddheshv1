import SmartImage from '../common/SmartImage';
import { motion } from 'framer-motion';
import ExpandableText from '../common/ExpandableText';
import { boldifyText } from '../../lib/boldifyText';

const BentoSection = ({ heading, header, intro, items }) => {
  const title = header || heading;
  
  return (
    <section className="section-spacing bg-background">
      <div className="container-grid">
        {title && (
          <motion.h2 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-deep-ink mb-6"
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
            className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12"
          >
            {intro}
          </motion.p>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items?.map((item, index) => {
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 flex flex-col`}
              >
                {/* Image */}
                {item.image && (
                  <div className="relative h-48 overflow-hidden group/image">
                    <SmartImage
                      src={item.image.src}
                      alt={item.image.alt}
                      variant={item.image.variant || 'card'}
                      privacyBlur={item.image.privacyBlur}
                      aspect="16:9"
                      className="w-full h-full grayscale group-hover/image:grayscale-0 transition-all duration-500"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-ink/20 to-transparent pointer-events-none" />
                  </div>
                )}
                
                <div className="p-6 lg:p-8 flex flex-col flex-1">
                  {item.tag && (
                    <span className="inline-block px-3 py-1 text-xs font-medium text-accent-cyan bg-accent-cyan/10 rounded-full mb-4">
                      {item.tag}
                    </span>
                  )}
                  
                  <h3 className="text-xl font-semibold text-deep-ink mb-3">
                    {item.headline || item.title}
                  </h3>
                  
                  <ExpandableText
                    text={item.body || item.description}
                    collapsedLines={4}
                    minChars={200}
                    textClassName="leading-relaxed"
                  />
                  
                  {item.footer && (
                    <p className="mt-4 text-xs font-medium text-accent-cyan uppercase tracking-wider">
                      {item.footer}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BentoSection;
