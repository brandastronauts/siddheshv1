import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

const GlossaryAccordionSection = ({ heading, header, items = [] }) => {
  const title = header || heading;

  // Group items by first letter
  const grouped = useMemo(() => {
    const groups = {};
    items.forEach((item) => {
      const letter = (item.term || item.title || '')[0]?.toUpperCase() || '#';
      if (!groups[letter]) groups[letter] = [];
      groups[letter].push(item);
    });
    // Sort letters
    return Object.keys(groups)
      .sort()
      .map((letter) => ({ letter, terms: groups[letter] }));
  }, [items]);

  const letters = grouped.map((g) => g.letter);
  const [activeLetter, setActiveLetter] = useState(null);

  const scrollToLetter = (letter) => {
    setActiveLetter(letter);
    const el = document.getElementById(`glossary-${letter}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="section-spacing bg-background">
      <div className="container-grid">
        {title && (
          <h2 className="hero-fade-in text-3xl md:text-4xl font-bold text-center text-deep-ink mb-8">
            {title}
          </h2>
        )}

        {/* Alphabet jump nav */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-10">
          {letters.map((letter) => (
            <button
              key={letter}
              onClick={() => scrollToLetter(letter)}
              className={`w-9 h-9 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeLetter === letter
                  ? 'bg-primary-navy text-white'
                  : 'bg-surface text-muted-foreground hover:bg-primary-navy/10 hover:text-primary-navy'
              }`}
            >
              {letter}
            </button>
          ))}
        </div>

        {/* Letter groups */}
        <div className="max-w-3xl mx-auto space-y-8">
          {grouped.map(({ letter, terms }) => (
            <motion.div
              key={letter}
              id={`glossary-${letter}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-lg bg-primary-navy text-white flex items-center justify-center font-bold text-lg">
                  {letter}
                </span>
                <div className="flex-1 h-px bg-border" />
              </div>

              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <Accordion type="multiple">
                  {terms.map((item, idx) => {
                    const termName = item.term || item.title || '';
                    const definition = item.definition || item.body || '';
                    const slug = termName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
                    return (
                      <AccordionItem key={idx} value={`${letter}-${idx}`} id={`term-${slug}`} className="border-b last:border-b-0 scroll-mt-24">
                        <AccordionTrigger className="px-5 py-4 text-left text-deep-ink font-semibold text-sm hover:no-underline hover:bg-surface/50">
                          {termName}
                        </AccordionTrigger>
                        <AccordionContent className="px-5 pb-4 text-muted-foreground text-sm leading-relaxed">
                          {definition}
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlossaryAccordionSection;
