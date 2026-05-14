'use client'

import { motion } from 'framer-motion';

const TickerSection = ({ items, text }) => {
  // Support both items array and single text string
  const tickerItems = (items && items.length > 0) ? items : (text ? text.split(' /// ') : []);

  return (
    <section className="bg-primary-navy py-4 overflow-hidden relative">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-navy via-secondary-blue/50 to-primary-navy opacity-50" />
      
      <div className="container-grid relative z-10">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {tickerItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4"
            >
              <span className="text-white/90 text-xs md:text-sm font-medium whitespace-nowrap tracking-wide">
                {item}
              </span>
              {index < tickerItems.length - 1 && (
                <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-accent-cyan/60" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TickerSection;
