import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroBackground from '../common/HeroBackground';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { boldifyText } from '../../lib/boldifyText';

// Import all hero banner images (WebP)
import homePrecision from '@/assets/banners/home-precision.webp';
import instituteStark from '@/assets/banners/institute-stark.webp';
import methodologyFramework from '@/assets/banners/methodology-framework.webp';
import publicationsDoi from '@/assets/banners/publications-doi.webp';
import governanceOversight from '@/assets/banners/governance-oversight.webp';
import collaborateNetwork from '@/assets/banners/collaborate-network.webp';
import newsroomPress from '@/assets/banners/newsroom-press.webp';
import contactInstitutional from '@/assets/banners/contact-institutional.webp';

// Responsive WebP hero variants for homepage LCP
import hero480 from '@/assets/hero/hero-480.webp';
import hero768 from '@/assets/hero/hero-768.webp';
import hero1280 from '@/assets/hero/hero-1280.webp';
import hero1920 from '@/assets/hero/hero-1920.webp';

// Map for resolving banner paths to imports (support both .jpg and .webp keys)
const bannerImports = {
  '/src/assets/banners/home-precision.jpg': homePrecision,
  '/src/assets/banners/home-precision.webp': homePrecision,
  '/src/assets/banners/institute-stark.jpg': instituteStark,
  '/src/assets/banners/institute-stark.webp': instituteStark,
  '/src/assets/banners/methodology-framework.jpg': methodologyFramework,
  '/src/assets/banners/methodology-framework.webp': methodologyFramework,
  '/src/assets/banners/publications-doi.jpg': publicationsDoi,
  '/src/assets/banners/publications-doi.webp': publicationsDoi,
  '/src/assets/banners/governance-oversight.jpg': governanceOversight,
  '/src/assets/banners/governance-oversight.webp': governanceOversight,
  '/src/assets/banners/collaborate-network.jpg': collaborateNetwork,
  '/src/assets/banners/collaborate-network.webp': collaborateNetwork,
  '/src/assets/banners/newsroom-press.jpg': newsroomPress,
  '/src/assets/banners/newsroom-press.webp': newsroomPress,
  '/src/assets/banners/contact-institutional.jpg': contactInstitutional,
  '/src/assets/banners/contact-institutional.webp': contactInstitutional,
};

// Responsive srcSet map — only homepage hero has multi-res WebP
const responsiveSrcSets = {
  '/src/assets/banners/home-precision.jpg': `${hero480} 480w, ${hero768} 768w, ${hero1280} 1280w, ${hero1920} 1920w`,
  '/src/assets/banners/home-precision.webp': `${hero480} 480w, ${hero768} 768w, ${hero1280} 1280w, ${hero1920} 1920w`,
};

// --- Sub-components ---

const HeroCta = ({ ctaData, isPrimary, hasImage }) => {
  if (!ctaData) return null;

  const isExternal = ctaData.external;
  const isAnchor = ctaData.href?.startsWith('#');
  const href = ctaData.href || ctaData.path;
  const isDisabled = ctaData.disabled;

  if (isPrimary) {
    if (isDisabled) {
      return (
        <span className="btn-primary opacity-60 cursor-not-allowed text-white">
          {ctaData.label}
        </span>
      );
    }
    const className = "btn-primary group text-white";
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
      return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{content}</a>;
    }
    if (isAnchor) {
      return <a href={href} className={className}>{content}</a>;
    }
    return <Link to={href} className={className}>{content}</Link>;
  }

  // Secondary button
  if (isDisabled) {
    return (
      <span className={`inline-flex items-center justify-center gap-2 px-6 py-3 font-medium rounded-xl opacity-60 cursor-not-allowed ${
        hasImage 
          ? 'border-2 border-white/30 text-white/60 bg-white/5' 
          : 'border border-border text-muted-foreground bg-muted'
      }`}>
        {ctaData.label}
      </span>
    );
  }

  const className = hasImage 
    ? "inline-flex items-center justify-center gap-2 px-6 py-3 font-medium rounded-xl border-2 border-white/40 text-white bg-white/10 backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:border-white/60 group"
    : "btn-secondary group";
  const content = (
    <>
      {ctaData.label}
      {isExternal && <ExternalLink className="w-4 h-4 opacity-60" />}
    </>
  );

  if (isExternal) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{content}</a>;
  }
  if (isAnchor) {
    return <a href={href} className={className}>{content}</a>;
  }
  return <Link to={href} className={className}>{content}</Link>;
};

const HeroSection = ({ 
  headline, subheadline, primaryCta, secondaryCta, variant,
  image: heroImage, badgeIcon, heading, subheading, cta 
}) => {
  const title = headline || heading;
  const subtitle = subheadline || subheading;
  const mainCta = primaryCta || cta;
  const altCta = secondaryCta;
  
  const resolvedImageSrc = heroImage?.src ? (bannerImports[heroImage.src] || heroImage.src) : null;
  const resolvedSrcSet = heroImage?.src ? (responsiveSrcSets[heroImage.src] || null) : null;
  const hasImage = !!resolvedImageSrc;
  const isCompact = variant === 'publication' || variant === 'archive';

  return (
    <section className={`relative overflow-hidden ${isCompact ? 'min-h-[200px] md:min-h-[260px]' : 'min-h-[420px] md:min-h-[520px]'} flex items-center`}>
      {!hasImage && <HeroBackground />}
      {!hasImage && (
        <div className="absolute inset-0 bg-gradient-to-b from-surface/50 via-background to-background" />
      )}

      {hasImage && (
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1 }}
          animate={isCompact ? {} : { scale: 1.02 }}
          transition={isCompact ? {} : { duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        >
            <img
              src={resolvedSrcSet ? hero1280 : resolvedImageSrc}
              srcSet={resolvedSrcSet || undefined}
              sizes={resolvedSrcSet ? "(max-width: 480px) 480px, (max-width: 768px) 768px, (max-width: 1280px) 1280px, 1920px" : undefined}
              alt={heroImage?.alt || ''}
              className="absolute inset-0 w-full h-full object-cover object-center"
              fetchPriority="high"
              decoding="sync"
              loading="eager"
              width={1920}
              height={1080}
          />
          <div 
            className="absolute inset-0" 
            style={{ 
              background: isCompact
                ? 'linear-gradient(to bottom, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.65) 100%)'
                : 'linear-gradient(to bottom, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.35) 100%)' 
            }} 
          />
          {!isCompact && (
            <>
              <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 20% 20%, rgba(0,0,0,0.55), rgba(0,0,0,0.85))' }} />
              <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />
            </>
          )}
        </motion.div>
      )}

      <div className={`container-grid relative z-10 ${isCompact ? 'pt-20 pb-6 md:py-8' : 'pt-24 pb-12 md:py-16'}`}>
        <div className={`${isCompact ? 'max-w-5xl' : 'max-w-4xl'} mx-auto text-center`}>
          {!hasImage && (
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6">
              <span className="badge-accent">Micro Research Institute</span>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className={`font-bold mb-4 text-balance leading-[1.1] ${
              isCompact ? 'text-[22px] md:text-[32px] text-white'
                : hasImage ? 'text-[34px] md:text-[52px] text-white' 
                : 'text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-deep-ink'
            }`}
            style={hasImage ? { textShadow: '0 2px 14px rgba(0,0,0,0.55)' } : {}}
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className={`mb-6 max-w-3xl mx-auto leading-relaxed whitespace-pre-line ${
                isCompact ? 'text-sm md:text-base text-white/75'
                  : hasImage ? 'text-base md:text-lg text-white/85' 
                  : 'text-lg md:text-xl text-muted-foreground'
              }`}
              style={hasImage ? { textShadow: '0 2px 14px rgba(0,0,0,0.55)' } : {}}
            >
              {boldifyText(subtitle)}
            </motion.p>
          )}
          
          {(mainCta || altCta) && (
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 justify-center">
              <HeroCta ctaData={mainCta} isPrimary={true} hasImage={hasImage} />
              <HeroCta ctaData={altCta} isPrimary={false} hasImage={hasImage} />
            </motion.div>
          )}
        </div>
      </div>

      {!hasImage && (
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      )}
    </section>
  );
};

export default HeroSection;
