import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroBackground from '../common/HeroBackground';
import { ArrowRight, ExternalLink } from 'lucide-react';

// Import all hero banner images
import homePrecision from '@/assets/banners/home-precision.jpg';
import instituteStark from '@/assets/banners/institute-stark.jpg';
import methodologyFramework from '@/assets/banners/methodology-framework.jpg';
import publicationsDoi from '@/assets/banners/publications-doi.jpg';
import governanceOversight from '@/assets/banners/governance-oversight.jpg';
import collaborateNetwork from '@/assets/banners/collaborate-network.jpg';
import newsroomPress from '@/assets/banners/newsroom-press.jpg';
import contactInstitutional from '@/assets/banners/contact-institutional.jpg';

// Map for resolving banner paths to imports
const bannerImports = {
  '/src/assets/banners/home-precision.jpg': homePrecision,
  '/src/assets/banners/institute-stark.jpg': instituteStark,
  '/src/assets/banners/methodology-framework.jpg': methodologyFramework,
  '/src/assets/banners/publications-doi.jpg': publicationsDoi,
  '/src/assets/banners/governance-oversight.jpg': governanceOversight,
  '/src/assets/banners/collaborate-network.jpg': collaborateNetwork,
  '/src/assets/banners/newsroom-press.jpg': newsroomPress,
  '/src/assets/banners/contact-institutional.jpg': contactInstitutional,
};

const HeroSection = ({ 
  headline, 
  subheadline, 
  primaryCta, 
  secondaryCta, 
  variant,
  image: heroImage,
  badgeIcon,
  heading, 
  subheading, 
  cta 
}) => {
  const title = headline || heading;
  const subtitle = subheadline || subheading;
  const mainCta = primaryCta || cta;
  const altCta = secondaryCta;
  
  // Resolve banner image source
  const resolvedImageSrc = heroImage?.src ? (bannerImports[heroImage.src] || heroImage.src) : null;
  const hasImage = !!resolvedImageSrc;

  const renderCta = (ctaData, isPrimary = true) => {
    if (!ctaData) return null;
    
    const isExternal = ctaData.external;
    const isAnchor = ctaData.href?.startsWith('#');
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
      if (isAnchor) {
        return <a href={href} className={className}>{content}</a>;
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
    if (isAnchor) {
      return <a href={href} className={className}>{content}</a>;
    }
    return <Link to={href} className={className}>{content}</Link>;
  };

  return (
    <section className="relative overflow-hidden h-[360px] md:h-[520px] flex items-center">
      {/* Animated background - only show when no image */}
      {!hasImage && <HeroBackground />}

      {/* Base gradient for non-image heroes */}
      {!hasImage && (
        <div className="absolute inset-0 bg-gradient-to-b from-surface/50 via-background to-background" />
      )}

      {/* Background image with zoom animation */}
      {hasImage && (
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1 }}
          animate={{ scale: 1.02 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        >
          <img
            src={resolvedImageSrc}
            alt={heroImage?.alt || ''}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Dark gradient overlay for text readability */}
          <div 
            className="absolute inset-0" 
            style={{ 
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.25) 100%)' 
            }} 
          />
          {/* Subtle grain texture */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />
        </motion.div>
      )}

      <div className="container-grid relative z-10 py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Optional eyebrow - hidden when image is present */}
          {!hasImage && (
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
          )}

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`font-bold mb-6 text-balance leading-[1.1] ${
              hasImage 
                ? 'text-[34px] md:text-[52px] text-white drop-shadow-lg' 
                : 'text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-deep-ink'
            }`}
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`mb-8 max-w-3xl mx-auto leading-relaxed ${
                hasImage 
                  ? 'text-base md:text-lg text-white/90 drop-shadow-md' 
                  : 'text-lg md:text-xl text-muted-foreground'
              }`}
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
      </div>

      {/* Bottom fade - only for non-image heroes */}
      {!hasImage && (
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      )}
    </section>
  );
};

export default HeroSection;
