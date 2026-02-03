import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const AccordionSection = ({ heading, header, items }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const title = header || heading;

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-spacing bg-surface">
      <div className="container-grid">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-center text-deep-ink mb-12">
            {title}
          </h2>
        )}
        
        <div className="max-w-3xl mx-auto space-y-4">
          {items.map((item, index) => {
            // Support both old (question/answer) and new (q/a) formats
            const question = item.q || item.question;
            const answer = item.a || item.answer;
            
            return (
              <div
                key={index}
                className="bg-card rounded-xl border border-border/50 overflow-hidden shadow-card"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-surface/50 transition-colors"
                >
                  <span className="text-lg font-semibold text-deep-ink pr-4">
                    {question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-muted-foreground leading-relaxed">
                          {answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AccordionSection;
