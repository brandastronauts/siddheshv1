import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = ({ heading, subheading, cta, secondaryCta, image, imageNote }) => {
  return (
    <section className="bg-gradient-to-b from-surface to-background section-spacing">
      <div className="container-grid">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-deep-ink mb-6 text-balance"
          >
            {heading}
          </motion.h1>
          
          {subheading && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance"
            >
              {subheading}
            </motion.p>
          )}
          
          {(cta || secondaryCta) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              {cta && (
                <Link
                  to={cta.path}
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary-navy text-white font-medium rounded-lg hover:bg-secondary-blue transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                >
                  {cta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  to={secondaryCta.path}
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary-navy text-primary-navy font-medium rounded-lg hover:bg-primary-navy hover:text-white transition-all duration-200"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
