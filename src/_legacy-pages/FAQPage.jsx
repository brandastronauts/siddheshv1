import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Building2, FlaskConical, BookOpen, Shield, Handshake, GraduationCap } from 'lucide-react';
import PageShell from '../components/layout/PageShell';
import getPage from '../lib/getPage';
import { boldifyText } from '../lib/boldifyText';

const sectionIcons = {
  'About the Institute': Building2,
  'About Our Research': FlaskConical,
  'About Publications': BookOpen,
  'About Privacy': Shield,
  'About Collaboration': Handshake,
  'About the School': GraduationCap,
};

const FAQPage = () => {
  const page = getPage('/faq');
  const [openItems, setOpenItems] = useState({});
  const [activeSection, setActiveSection] = useState(null);

  if (!page) return null;

  const { faqSections = [] } = page;

  const toggleItem = (sectionIdx, itemIdx) => {
    const key = `${sectionIdx}-${itemIdx}`;
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const scrollToSection = (idx) => {
    setActiveSection(idx);
    const el = document.getElementById(`faq-section-${idx}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <PageShell page={page}>
      {/* Light Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-surface relative">
        <div className="absolute inset-0 pattern-grid opacity-10" />
        <div className="container-grid relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-navy mb-6"
          >
            {page.heroTitle || 'FAQ'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            {page.heroSubtitle}
          </motion.p>
        </div>
      </section>

      <div className="bg-background py-12 md:py-20">
        <div className="container-grid">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Sticky TOC sidebar */}
            <aside className="hidden lg:block w-56 shrink-0">
              <div className="sticky top-28">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">On this page</p>
                <nav className="space-y-1.5">
                  {faqSections.map((section, idx) => {
                    const Icon = sectionIcons[section.title] || HelpCircle;
                    return (
                      <button
                        key={idx}
                        onClick={() => scrollToSection(idx)}
                        className={`w-full text-left text-sm px-3 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                          activeSection === idx
                            ? 'bg-primary-navy/5 text-primary-navy font-medium'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{section.title.replace('About ', '')}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* FAQ content */}
            <div className="flex-1 max-w-3xl">
              {faqSections.map((section, sectionIdx) => {
                const Icon = sectionIcons[section.title] || HelpCircle;
                return (
                  <div key={sectionIdx} id={`faq-section-${sectionIdx}`} className="mb-14 last:mb-0 scroll-mt-28">
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 mb-6"
                    >
                      <div className="w-9 h-9 rounded-xl bg-primary-navy/5 flex items-center justify-center">
                        <Icon className="w-4.5 h-4.5 text-primary-navy" />
                      </div>
                      <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-navy">
                        {section.title}
                      </h2>
                    </motion.div>

                    <div className="border-t border-border/40 mb-5" />

                    <div className="space-y-2.5">
                      {section.items.map((item, itemIdx) => {
                        const key = `${sectionIdx}-${itemIdx}`;
                        const isOpen = !!openItems[key];

                        return (
                          <motion.div
                            key={itemIdx}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: itemIdx * 0.03 }}
                            className={`rounded-xl border transition-all duration-200 ${
                              isOpen
                                ? 'bg-white border-primary-navy/10 shadow-sm'
                                : 'bg-white/60 border-border/30 hover:border-border/60'
                            }`}
                          >
                            <button
                              onClick={() => toggleItem(sectionIdx, itemIdx)}
                              className="w-full flex items-center gap-4 p-5 text-left group"
                              aria-expanded={isOpen}
                            >
                              <span className={`flex-1 text-base font-medium transition-colors ${
                                isOpen ? 'text-foreground' : 'text-foreground/80 group-hover:text-foreground'
                              }`}>
                                {item.q}
                              </span>
                              <ChevronDown
                                className={`w-4.5 h-4.5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                                  isOpen ? 'rotate-180 text-primary-navy' : ''
                                }`}
                              />
                            </button>

                            <AnimatePresence>
                              {isOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                                  className="overflow-hidden"
                                >
                                  <div className="px-5 pb-5 pt-0">
                                    <p className="text-muted-foreground text-[15px] leading-relaxed">
                                      {boldifyText(item.a)}
                                    </p>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
};

export default FAQPage;
