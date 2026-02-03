import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SmartImage from '../common/SmartImage';

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
    
    const className = isPrimary
      ? "inline-flex items-center justify-center px-8 py-3 bg-primary-navy text-white font-medium rounded-lg hover:bg-secondary-blue transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
      : "inline-flex items-center justify-center px-8 py-3 border-2 border-primary-navy text-primary-navy font-medium rounded-lg hover:bg-primary-navy hover:text-white transition-all duration-200";

    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {ctaData.label}
        </a>
      );
    }

    return (
      <Link to={href} className={className}>
        {ctaData.label}
      </Link>
    );
  };

  return (
    <section className={`relative section-spacing ${isPrecision ? 'bg-background' : 'bg-gradient-to-b from-surface to-background'}`}>
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
          <div className="absolute inset-0 bg-background/90" />
        </div>
      )}

      <div className="container-grid relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-deep-ink mb-6 text-balance"
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}
          
          {(mainCta || altCta) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              {renderCta(mainCta, true)}
              {renderCta(altCta, false)}
            </motion.div>
          )}
        </div>

        {/* Image caption if present */}
        {heroImage?.caption && (
          <p className="text-center text-xs text-muted-foreground mt-8 italic">
            {heroImage.caption}
          </p>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
