import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import ExpandableText from '../common/ExpandableText';

const AccordionSection = ({ heading, header, intro, items }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const title = header || heading;

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-8 md:py-10 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-20" />
      
      <div className="container-grid relative z-10">
        {title && (
          <motion.h2 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-deep-ink mb-6"
          >
            {title}
          </motion.h2>
        )}

        {intro && (
          <motion.p 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12"
          >
            {intro}
          </motion.p>
        )}
        
        <div className="max-w-3xl mx-auto space-y-3">
          {items.map((item, index) => {
            // Support both old (question/answer) and new (q/a) formats
            const question = item.q || item.question;
            const answer = item.a || item.answer;
            const isOpen = openIndex === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? 'bg-white border-accent-cyan/20 shadow-lg shadow-accent-cyan/5' 
                    : 'bg-white/80 border-border/40 hover:border-border'
                }`}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center gap-4 p-5 md:p-6 text-left transition-colors"
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                    isOpen ? 'bg-accent-cyan/10' : 'bg-surface'
                  }`}>
                    <HelpCircle className={`w-5 h-5 transition-colors ${isOpen ? 'text-accent-cyan' : 'text-muted-foreground'}`} />
                  </div>
                  
                  <span className={`flex-1 text-base md:text-lg font-medium transition-colors ${
                    isOpen ? 'text-deep-ink' : 'text-deep-ink/80'
                  }`}>
                    {question}
                  </span>
                  
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-accent-cyan' : ''
                    }`}
                  />
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-5 md:px-6 pb-6 pt-0 pl-5 md:pl-[4.5rem]">
                        <ExpandableText
                          text={answer}
                          collapsedLines={4}
                          minChars={260}
                          textClassName="text-muted-foreground"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AccordionSection;
