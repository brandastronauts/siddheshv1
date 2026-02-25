import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ExpandableText from '../common/ExpandableText';
import { boldifyText } from '../../lib/boldifyText';

const TextBlockSection = ({ heading, header, sectionName, intro, content, body, cta, alignment = 'left', variant }) => {
  const title = header || heading;
  const text = body || content;
  const isMuted = variant === 'muted';
  const isLegal = variant === 'legal';
  
  // Muted variant - simple text without the card
  if (isMuted) {
    return (
      <section className="py-8 bg-surface border-y border-border/30">
        <div className="container-grid">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed italic whitespace-pre-line"
          >
            {boldifyText(text)}
          </motion.p>
        </div>
      </section>
    );
  }

  // Default text block
  const isCompact = isLegal || variant === 'compact';

  return (
    <section className={isCompact ? 'py-4 md:py-6 bg-background' : 'py-10 md:py-14 bg-background'}>
      <div className="container-grid">
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {sectionName && (
            <p className="text-sm font-semibold text-accent-cyan uppercase tracking-wider mb-3">
              {sectionName}
            </p>
          )}

          {intro && (
            <p className="text-muted-foreground italic mb-4 text-sm whitespace-pre-line">
              {intro}
            </p>
          )}
          
          {title && (
            <h2 className="text-xl md:text-2xl font-bold text-deep-ink mb-4">
              {title}
            </h2>
          )}
          
          {text && (
            <ExpandableText
              text={text}
              collapsedLines={5}
              minChars={320}
              textClassName="whitespace-pre-line"
              className="mb-2"
            />
          )}

          {cta && (
            <div className="mt-6">
              <Link
                to={cta.href || '#'}
                className="inline-flex items-center gap-2 text-sm font-medium text-link-blue hover:text-secondary-blue transition-colors group"
              >
                {cta.label}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default TextBlockSection;
