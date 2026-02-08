import { motion } from 'framer-motion';

const MetaStripSection = ({ items = [] }) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="bg-deep-ink/5 border-y border-border/30">
      <div className="container-grid">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 py-5 text-sm"
        >
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="font-medium text-muted-foreground">{item.label}:</span>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="text-link-blue hover:text-secondary-blue transition-colors font-medium"
                >
                  {item.value}
                </a>
              ) : (
                <span className="text-deep-ink font-medium">{item.value}</span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MetaStripSection;
