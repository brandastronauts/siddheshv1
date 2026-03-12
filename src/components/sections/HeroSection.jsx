import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { boldifyText } from '../../lib/boldifyText';

// --- Sub-components ---

const createAnchorClickHandler = (targetHash) => (e) => {
  e.preventDefault();
  if (!targetHash) return;

  if (window.location.hash !== targetHash) {
    window.location.hash = targetHash;
  } else {
    window.dispatchEvent(new Event('hashchange'));
  }

  let attempts = 0;
  const tryScroll = () => {
    const el = document.querySelector(targetHash);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    if (attempts < 15) {
      attempts += 1;
      setTimeout(tryScroll, 200);
    }
  };

  setTimeout(tryScroll, 80);
};

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
      return <a href={href} onClick={createAnchorClickHandler(href)} className={className}>{content}</a>;
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
    return <a href={href} onClick={createAnchorClickHandler(href)} className={className}>{content}</a>;
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
          backgroundImage: 'url(/ui/site-banner.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }} />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 100%)'
        }} />
      </div>

      <div className={`container-grid relative z-10 ${isCompact ? 'pt-20 pb-6 md:py-8' : 'pt-24 pb-12 md:py-16'}`}>
        <div className={`${isCompact ? 'max-w-5xl' : 'max-w-4xl'} mx-auto text-center`}>
          <h1
            className={`hero-fade-in font-bold mb-4 text-balance leading-[1.1] text-white ${
              isCompact ? 'text-[22px] md:text-[32px]' : 'text-[34px] md:text-[52px]'
            }`}
            style={{ textShadow: '0 2px 14px rgba(0,0,0,0.55)', animationDelay: '0.05s' }}
          >
            {title}
          </h1>
          
          {subtitle && (
            <p
              className={`hero-fade-in mb-6 max-w-3xl mx-auto leading-relaxed whitespace-pre-line ${
                isCompact ? 'text-sm md:text-base text-white/75' : 'text-base md:text-lg text-white/85'
              }`}
              style={{ textShadow: '0 2px 14px rgba(0,0,0,0.55)', animationDelay: '0.15s' }}
            >
              {boldifyText(subtitle)}
            </p>
          )}
          
          {(mainCta || altCta) && (
            <div className="hero-fade-in flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: '0.25s' }}>
              <HeroCta ctaData={mainCta} isPrimary={true} />
              <HeroCta ctaData={altCta} isPrimary={false} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
