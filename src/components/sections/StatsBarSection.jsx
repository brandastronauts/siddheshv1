'use client'

import { motion } from 'framer-motion';
import AnimatedCounter from '../AnimatedCounter';

/**
 * Parse a stat value string to extract numeric value and suffix
 * Examples: "15 Years" -> { num: 15, suffix: "", text: " Years" }
 *           "35,000+" -> { num: 35000, suffix: "+", text: "" }
 *           "847" -> { num: 847, suffix: "", text: "" }
 */
const parseStatValue = (value) => {
  if (typeof value === 'number') {
    return { num: value, suffix: '', text: '' };
  }
  
  const str = String(value);
  
  // Match number (with optional commas) followed by optional suffix and text
  const match = str.match(/^([\d,]+)(\+)?(.*)$/);
  
  if (match) {
    const numStr = match[1].replace(/,/g, '');
    const num = parseFloat(numStr);
    const suffix = match[2] || '';
    const text = match[3] || '';
    
    if (!isNaN(num)) {
      return { num, suffix, text };
    }
  }
  
  // If no number found, return original value as text
  return { num: null, suffix: '', text: str };
};

const StatsBarSection = ({ stats, header }) => {
  return (
    <section className="section-spacing-sm bg-surface relative overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-20" />
      
      <div className="container-grid relative z-10">
        {header && (
          <h2 className="hero-fade-in text-3xl md:text-4xl font-bold text-center text-deep-ink mb-6">
            {header}
          </h2>
        )}
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            const { num, suffix, text } = parseStatValue(stat.value);
            
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-2">
                  {num !== null ? (
                    <>
                      <AnimatedCounter 
                        value={num} 
                        suffix={suffix}
                        duration={1200 + index * 100}
                      />
                      {text}
                    </>
                  ) : (
                    stat.value
                  )}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsBarSection;
