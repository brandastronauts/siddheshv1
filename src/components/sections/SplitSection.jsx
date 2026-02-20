import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SmartImage from '../common/SmartImage';
import ExpandableText from '../common/ExpandableText';

const SplitSection = ({ header, left, right }) => {
  const renderCta = (cta) => {
    if (!cta) return null;
    
    const isInternal = cta.href?.startsWith('/');
    const isMailto = cta.href?.startsWith('mailto:');
    const className = "inline-flex items-center gap-1.5 text-sm font-medium text-link-blue hover:text-accent-cyan transition-colors group";
    
    const content = (
      <>
        {cta.label}
        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
      </>
    );

    if (isInternal) {
      return <Link to={cta.href} className={className}>{content}</Link>;
    }
    return <a href={cta.href} className={className} target={isMailto ? undefined : "_blank"} rel={isMailto ? undefined : "noopener noreferrer"}>{content}</a>;
  };

  return (
    <section className="section-spacing bg-surface">
      <div className="container-grid">
        {header && (
          <motion.h2 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-deep-ink mb-10"
          >
            {header}
          </motion.h2>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left side */}
          {left && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              {left.type === 'text' && (
                <div>
                  {left.title && (
                    <h3 className="text-lg font-bold text-deep-ink mb-4">
                      {left.title}
                    </h3>
                  )}
                  {left.body && (
                    <ExpandableText
                      text={left.body}
                      collapsedLines={5}
                      minChars={300}
                      textClassName="whitespace-pre-line"
                      className="mb-6"
                    />
                  )}
                  {left.ctas && left.ctas.length > 0 && (
                    <div className="flex flex-wrap gap-4">
                      {left.ctas.map((cta, index) => (
                        <div key={index}>
                          {renderCta(cta)}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          )}

          {/* Right side */}
          {right && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {right.type === 'image' && right.image && (
                <div className="rounded-xl overflow-hidden border border-border/50">
                  <SmartImage
                    src={right.image.src}
                    alt={right.image.alt}
                    variant={right.image.variant || 'card'}
                    privacyBlur={right.image.privacyBlur}
                    aspect="16:9"
                    caption={right.image.caption}
                    className="w-full"
                  />
                </div>
              )}
              
              {right.type === 'map' && right.embedUrl && (
                <div className="rounded-xl overflow-hidden border border-border/50 aspect-video">
                  <iframe
                    src={right.embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={right.title || "Location map"}
                    className="w-full h-full"
                  />
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SplitSection;
