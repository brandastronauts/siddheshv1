import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SmartImage from '../common/SmartImage';
import ExpandableText from '../common/ExpandableText';
import MobileExpandModal from '../common/MobileExpandModal';

const FeaturedStoriesSection = ({ header, layout, main, side }) => {
  const renderCta = (cta) => {
    if (!cta) return null;
    
    if (cta.disabled) {
      return (
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground opacity-60 cursor-not-allowed">
          {cta.label}
        </span>
      );
    }
    
    const isInternal = cta.href?.startsWith('/');
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
    return <a href={cta.href} className={className}>{content}</a>;
  };

  return (
    <section className="section-spacing">
      <div className="container-grid">
        {header && (
          <h2 className="hero-fade-in text-3xl md:text-4xl font-bold text-center text-deep-ink mb-6">
            {header}
          </h2>
        )}

        <div className={`grid gap-8 ${layout === 'asymmetric' ? 'lg:grid-cols-5' : 'lg:grid-cols-2'}`}>
          {/* Main featured story */}
          {main && (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`${layout === 'asymmetric' ? 'lg:col-span-3' : ''} group`}
            >
              <div className="relative overflow-hidden rounded-xl bg-surface border border-border/50 h-full">
                <div className="aspect-video overflow-hidden">
                  <SmartImage
                    src={main.image?.src}
                    alt={main.image?.alt}
                    variant={main.image?.variant || 'card'}
                    privacyBlur={main.image?.privacyBlur}
                    aspect="16:9"
                    className="w-full transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="p-6 md:p-8">
                  {main.tag && (
                    <span className="badge-accent mb-3 inline-block">
                      {main.tag}
                    </span>
                  )}
                  <h3 className="text-xl md:text-2xl font-bold text-deep-ink mb-3 group-hover:text-primary-navy transition-colors">
                    {main.headline}
                  </h3>
                  {main.excerpt && (
                    <ExpandableText text={main.excerpt} collapsedLines={4} minChars={240} className="mb-4" />
                  )}
                  {renderCta(main.cta)}
                </div>
              </div>
            </motion.article>
          )}

          {/* Side stories */}
          {side && side.length > 0 && (
            <div className={`${layout === 'asymmetric' ? 'lg:col-span-2' : ''} flex flex-col gap-6`}>
              {side.map((story, index) => {
                const storyBody = story.body || story.excerpt || '';
                return (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex-1 rounded-xl bg-surface border border-border/50 p-6 hover:border-accent-cyan/30 transition-colors"
                  >
                    {story.tag && (
                      <span className="text-xs font-semibold text-accent-cyan uppercase tracking-wider mb-2 block">
                        {story.tag}
                      </span>
                    )}
                    <h4 className="text-lg font-bold text-deep-ink mb-2 group-hover:text-primary-navy transition-colors">
                      {story.headline}
                    </h4>
                    {storyBody && (
                      <ExpandableText text={storyBody} collapsedLines={4} minChars={220} className="mb-3" />
                    )}
                    {renderCta(story.cta)}

                    {/* Full story expand handled by ExpandableText inline */}
                  </motion.article>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedStoriesSection;
