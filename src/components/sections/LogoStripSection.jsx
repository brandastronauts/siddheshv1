'use client'

import { motion } from 'framer-motion';

// Import brand logos
import iitLogo from '@/assets/brand/iit-hyderabad-logo.png';
import inspaceLogo from '@/assets/brand/inspace-logo.png';
import isroLogo from '@/assets/brand/isro-logo.jpg';
import amiLogo from '@/assets/brand/ami-logo.png';
import cambridgeLogo from '@/assets/brand/cambridge-logo.png';
import zenodoLogo from '@/assets/brand/zenodo-logo.svg';
import takeme2spaceLogo from '@/assets/brand/takeme2space-logo.png';

// Map for resolving logo paths to imports
const logoImports = {
  '/src/assets/brand/iit-hyderabad-logo.png': iitLogo,
  '/src/assets/brand/inspace-logo.png': inspaceLogo,
  '/src/assets/brand/isro-logo.png': isroLogo,
  '/src/assets/brand/isro-logo.jpg': isroLogo,
  '/src/assets/brand/ami-logo.png': amiLogo,
  '/src/assets/brand/cambridge-logo.png': cambridgeLogo,
  '/src/assets/brand/zenodo-logo.png': zenodoLogo,
  '/src/assets/brand/zenodo-logo.svg': zenodoLogo,
  '/src/assets/brand/takeme2space-logo.png': takeme2spaceLogo,
};

const LogoStripSection = ({ heading, header, intro, logos, scrollable, style }) => {
  const title = header || heading;
  const isGreyscale = style === 'greyscale';

  const normalizeImageUrl = (value) => {
    if (typeof value === 'string') return value;
    if (value && typeof value === 'object' && typeof value.src === 'string') return value.src;
    return null;
  };
  
  const resolveLogoSrc = (src) => {
    return normalizeImageUrl(logoImports[src] || src);
  };

  return (
    <section className="section-spacing bg-surface">
      <div className="container-grid">
        {title && (
          <h2 className="hero-fade-in text-3xl md:text-4xl font-bold text-center text-deep-ink mb-6">
            {title}
          </h2>
        )}

        {intro && (
          <motion.p 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-center max-w-2xl mx-auto mb-10"
          >
            {intro}
          </motion.p>
        )}
        
        <div className={`flex flex-wrap items-center justify-center gap-8 md:gap-12 ${scrollable ? 'overflow-x-auto pb-4' : ''}`}>
          {logos?.map((logo, index) => {
            const rawSrc = logo.image?.src || logo.src;
            const imageSrc = resolveLogoSrc(rawSrc);
            const imageAlt = logo.image?.alt || logo.alt || logo.name || `Partner ${index + 1}`;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className={`flex items-center justify-center h-16 mb-3 transition-all duration-300 ${isGreyscale ? 'opacity-60 grayscale hover:opacity-100 hover:grayscale-0' : 'opacity-80 hover:opacity-100'}`}>
                  {imageSrc ? (
                    <div className={`flex items-center justify-center ${rawSrc?.includes('takeme2space') ? 'bg-deep-ink rounded-lg px-4 py-2' : ''}`}>
                      <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="h-14 w-auto max-w-[140px] object-contain"
                      />
                    </div>
                  ) : (
                    <div className="h-14 px-6 bg-muted rounded-lg flex items-center justify-center border border-border/50">
                      <span className="text-sm font-medium text-muted-foreground">
                        {logo.name || `Partner ${index + 1}`}
                      </span>
                    </div>
                  )}
                </div>
                
                {logo.name && (
                  <p className="text-sm font-medium text-deep-ink">
                    {logo.name}
                  </p>
                )}
                
                {logo.role && (
                  <p className="text-xs text-accent-cyan font-medium mt-0.5">
                    {logo.role}
                  </p>
                )}
                
                {logo.note && (
                  <p className="text-xs text-muted-foreground mt-1 max-w-[180px]">
                    {logo.note}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LogoStripSection;
