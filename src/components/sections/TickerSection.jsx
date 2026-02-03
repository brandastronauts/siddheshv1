import { motion } from 'framer-motion';

const TickerSection = ({ items }) => {
  return (
    <section className="bg-primary-navy py-4 overflow-hidden">
      <div className="container-grid">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {items.map((item, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-white/90 text-sm md:text-base font-medium whitespace-nowrap"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TickerSection;
