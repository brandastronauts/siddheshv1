import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroBackground from '../common/HeroBackground';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { boldifyText } from '../../lib/boldifyText';

// Import non-homepage banner images (WebP)
import instituteStark from '@/assets/banners/institute-stark.webp';
import methodologyFramework from '@/assets/banners/methodology-framework.webp';
import publicationsDoi from '@/assets/banners/publications-doi.webp';
import governanceOversight from '@/assets/banners/governance-oversight.webp';
import collaborateNetwork from '@/assets/banners/collaborate-network.webp';
import newsroomPress from '@/assets/banners/newsroom-press.webp';
import contactInstitutional from '@/assets/banners/contact-institutional.webp';

// Map for resolving banner paths to imports (homepage removed to eliminate LCP image)
const bannerImports = {
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

// Homepage hero paths — these resolve to gradient-only (no image loaded)
const homepageHeroPaths = new Set([
  '/src/assets/banners/home-precision.jpg',
  '/src/assets/banners/home-precision.webp',
]);

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
  
  const isHomepageHero = heroImage?.src && homepageHeroPaths.has(heroImage.src);
  const resolvedImageSrc = (!isHomepageHero && heroImage?.src) ? (bannerImports[heroImage.src] || heroImage.src) : null;
  const hasImage = !!resolvedImageSrc;
  const hasBannerStyle = hasImage || isHomepageHero; // treat homepage gradient like a banner
  const isCompact = variant === 'publication' || variant === 'archive';

  return (
    <section className={`relative overflow-hidden ${isCompact ? 'min-h-[200px] md:min-h-[260px]' : 'min-h-[420px] md:min-h-[520px]'} flex items-center`}>
      {!hasBannerStyle && <HeroBackground />}
      {!hasBannerStyle && (
        <div className="absolute inset-0 bg-gradient-to-b from-surface/50 via-background to-background" />
      )}

      {/* Homepage gradient-only banner (no image loaded) */}
      {isHomepageHero && (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(135deg, hsl(240 93% 10%) 0%, hsl(240 93% 18%) 30%, hsl(210 80% 22%) 60%, hsl(195 85% 25%) 100%)'
          }} />
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse at 20% 20%, hsl(195 100% 46% / 0.15) 0%, transparent 50%)'
          }} />
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse at 80% 80%, hsl(240 93% 25% / 0.2) 0%, transparent 50%)'
          }} />
          <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />
        </div>
      )}

      {hasImage && (
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1 }}
          animate={isCompact ? {} : { scale: 1.02 }}
          transition={isCompact ? {} : { duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        >
            <img
              src={resolvedImageSrc}
              alt={heroImage?.alt || ''}
              className="absolute inset-0 w-full h-full object-cover object-center"
              fetchPriority="high"
              decoding="async"
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
          {!hasBannerStyle && (
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6">
              <span className="badge-accent">Micro Research Institute</span>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className={`font-bold mb-4 text-balance leading-[1.1] ${
              isCompact ? 'text-[22px] md:text-[32px] text-white'
                : hasBannerStyle ? 'text-[34px] md:text-[52px] text-white' 
                : 'text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-deep-ink'
            }`}
            style={hasBannerStyle ? { textShadow: '0 2px 14px rgba(0,0,0,0.55)' } : {}}
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className={`mb-6 max-w-3xl mx-auto leading-relaxed whitespace-pre-line ${
                isCompact ? 'text-sm md:text-base text-white/75'
                  : hasBannerStyle ? 'text-base md:text-lg text-white/85' 
                  : 'text-lg md:text-xl text-muted-foreground'
              }`}
              style={hasBannerStyle ? { textShadow: '0 2px 14px rgba(0,0,0,0.55)' } : {}}
            >
              {boldifyText(subtitle)}
            </motion.p>
          )}
          
          {(mainCta || altCta) && (
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 justify-center">
              <HeroCta ctaData={mainCta} isPrimary={true} hasImage={hasBannerStyle} />
              <HeroCta ctaData={altCta} isPrimary={false} hasImage={hasBannerStyle} />
            </motion.div>
          )}
        </div>
      </div>

      {!hasBannerStyle && (
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      )}
    </section>
  );
};

export default HeroSection;
