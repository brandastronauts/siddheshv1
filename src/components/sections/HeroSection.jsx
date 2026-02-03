import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SmartImage from '../common/SmartImage';
import HeroBackground from '../common/HeroBackground';
import { ArrowRight, ExternalLink } from 'lucide-react';

const HeroSection = ({ 
  // New props (Blue Blocks style)
  headline, 
  subheadline, 
  primaryCta, 
  secondaryCta, 
  variant,
  image: heroImage,
  // Legacy props
  heading, 
  subheading, 
  cta 
}) => {
  // Normalize props - support both old and new format
  const title = headline || heading;
  const subtitle = subheadline || subheading;
  const mainCta = primaryCta || cta;
  const altCta = secondaryCta;
  const isPrecision = variant === 'precision';

  const renderCta = (ctaData, isPrimary = true) => {
    if (!ctaData) return null;
    
    const isExternal = ctaData.external;
    const href = ctaData.href || ctaData.path;
    
    if (isPrimary) {
      const className = "btn-primary group";
      const content = (
        <>
          {ctaData.label}
          {isExternal ? (
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          ) : (
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          )}
        </>
      );

      if (isExternal) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
            {content}
          </a>
        );
      }
      return <Link to={href} className={className}>{content}</Link>;
    }

    // Secondary button
    const className = "btn-secondary group";
    const content = (
      <>
        {ctaData.label}
        {isExternal && <ExternalLink className="w-4 h-4 opacity-60" />}
      </>
    );

    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
          {content}
        </a>
      );
    }
    return <Link to={href} className={className}>{content}</Link>;
  };

  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center">
      {/* Animated background */}
      <HeroBackground />

      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface/50 via-background to-background" />

      {/* Background image for precision variant */}
      {isPrecision && heroImage && (
        <div className="absolute inset-0 z-0">
          <SmartImage
            src={heroImage.src}
            alt={heroImage.alt}
            variant={heroImage.variant || 'hero'}
            privacyBlur={heroImage.privacyBlur}
            aspect="16:9"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-background/95" />
        </div>
      )}

      <div className="container-grid relative z-10 py-20 md:py-28 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Optional eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="badge-accent">
              Micro Research Institute
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-deep-ink mb-8 text-balance leading-[1.1]"
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}
          
          {(mainCta || altCta) && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              {renderCta(mainCta, true)}
              {renderCta(altCta, false)}
            </motion.div>
          )}
        </div>

        {/* Image caption if present */}
        {heroImage?.caption && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-xs text-muted-foreground mt-12 italic"
          >
            {heroImage.caption}
          </motion.p>
        )}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
