import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SmartImage from '../common/SmartImage';
import { ArrowRight } from 'lucide-react';

// Import visual evidence images
import labBench from '@/assets/placeholders/visual-evidence/lab-bench-1.jpg';
import avionicsRig from '@/assets/placeholders/visual-evidence/avionics-rig-1.jpg';
import lunarSim from '@/assets/placeholders/visual-evidence/lunar-sim-1.jpg';
import dataWing from '@/assets/placeholders/visual-evidence/data-wing-1.jpg';
import droneFrame from '@/assets/placeholders/visual-evidence/drone-frame-1.jpg';
import fieldSoil from '@/assets/placeholders/visual-evidence/field-soil-1.jpg';

// Map for resolving image paths to imports
const imageImports = {
  '/src/assets/placeholders/visual-evidence/lab-bench-1.jpg': labBench,
  '/src/assets/placeholders/visual-evidence/avionics-rig-1.jpg': avionicsRig,
  '/src/assets/placeholders/visual-evidence/lunar-sim-1.jpg': lunarSim,
  '/src/assets/placeholders/visual-evidence/data-wing-1.jpg': dataWing,
  '/src/assets/placeholders/visual-evidence/drone-frame-1.jpg': droneFrame,
  '/src/assets/placeholders/visual-evidence/field-soil-1.jpg': fieldSoil,
};

const GalleryGridSection = ({ 
  sectionName,
  header, 
  intro, 
  headline,
  body,
  cta,
  items = [] 
}) => {
  return (
    <section className="section-spacing bg-background relative">
      <div className="container-grid">
        {/* Section header area */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          {sectionName && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-medium text-accent-cyan uppercase tracking-wider mb-3"
            >
              {sectionName}
            </motion.p>
          )}
          
          {intro && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground mb-4"
            >
              {intro}
            </motion.p>
          )}

          {(header || headline) && (
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-deep-ink mb-4"
            >
              {header || headline}
            </motion.h2>
          )}

          {body && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground leading-relaxed mb-6"
            >
              {body}
            </motion.p>
          )}

          {cta && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <Link 
                to={cta.href} 
                className="inline-flex items-center gap-2 text-sm font-medium text-link-blue hover:text-secondary-blue transition-colors"
              >
                {cta.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          )}
        </div>

        {/* Gallery grid */}
        {items.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {items.map((item, index) => {
              const resolvedSrc = item.image?.src 
                ? (imageImports[item.image.src] || item.image.src) 
                : null;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl border border-border/40 overflow-hidden shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
                    {/* Image container with zoom effect */}
                    <div className="aspect-[4/3] overflow-hidden">
                      {resolvedSrc ? (
                        <img
                          src={resolvedSrc}
                          alt={item.image?.alt || item.title}
                          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02] ${
                            item.image?.privacyBlur ? 'privacy-blur' : ''
                          }`}
                        />
                      ) : (
                        <div className="w-full h-full bg-surface flex items-center justify-center">
                          <span className="text-muted-foreground text-sm">No image</span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      {item.tag && (
                        <span className="inline-block text-[10px] font-medium uppercase tracking-wider text-accent-cyan mb-1.5">
                          {item.tag}
                        </span>
                      )}
                      {item.title && (
                        <h3 className="text-sm font-semibold text-deep-ink mb-1.5 leading-snug">
                          {item.title}
                        </h3>
                      )}
                      {item.caption && (
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {item.caption}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryGridSection;
