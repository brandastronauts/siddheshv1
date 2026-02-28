import { Link } from 'react-router-dom';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import HeroBackground from '../common/HeroBackground';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { boldifyText } from '../../lib/boldifyText';

// --- Sub-components ---

const HeroCta = ({ ctaData, isPrimary }) => {
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
      <span className="inline-flex items-center justify-center gap-2 px-6 py-3 font-medium rounded-xl border-2 border-white/30 text-white/60 bg-white/5 opacity-60 cursor-not-allowed">
        {ctaData.label}
      </span>
    );
  }

  const className = "inline-flex items-center justify-center gap-2 px-6 py-3 font-medium rounded-xl border-2 border-white/40 text-white bg-white/10 backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:border-white/60 group";
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
  const isCompact = variant === 'publication' || variant === 'archive';

  return (
    <section className={`relative overflow-hidden ${isCompact ? 'min-h-[200px] md:min-h-[260px]' : 'min-h-[420px] md:min-h-[520px]'} flex items-center`}>
      {/* CSS-only gradient background for all pages */}
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

      <div className={`container-grid relative z-10 ${isCompact ? 'pt-20 pb-6 md:py-8' : 'pt-24 pb-12 md:py-16'}`}>
        <div className={`${isCompact ? 'max-w-5xl' : 'max-w-4xl'} mx-auto text-center`}>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className={`font-bold mb-4 text-balance leading-[1.1] text-white ${
              isCompact ? 'text-[22px] md:text-[32px]' : 'text-[34px] md:text-[52px]'
            }`}
            style={{ textShadow: '0 2px 14px rgba(0,0,0,0.55)' }}
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className={`mb-6 max-w-3xl mx-auto leading-relaxed whitespace-pre-line ${
                isCompact ? 'text-sm md:text-base text-white/75' : 'text-base md:text-lg text-white/85'
              }`}
              style={{ textShadow: '0 2px 14px rgba(0,0,0,0.55)' }}
            >
              {boldifyText(subtitle)}
            </motion.p>
          )}
          
          {(mainCta || altCta) && (
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 justify-center">
              <HeroCta ctaData={mainCta} isPrimary={true} />
              <HeroCta ctaData={altCta} isPrimary={false} />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
