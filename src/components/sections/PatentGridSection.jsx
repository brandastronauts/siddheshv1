import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, CheckCircle } from 'lucide-react';
import ExpandableText from '../common/ExpandableText';
import MobileExpandModal from '../common/MobileExpandModal';

const PatentGridSection = ({ header, intro, filterNote, cards = [], patents = [] }) => {
  // Support both 'cards' and 'patents' props for flexibility
  const items = cards.length > 0 ? cards : patents;

  return (
    <section className="section-spacing bg-background">
      <div className="container-grid">
        {header && (
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-deep-ink mb-6"
          >
            {header}
          </motion.h2>
        )}

        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-6"
          >
            {intro}
          </motion.p>
        )}

        {filterNote && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground text-center mb-10"
          >
            {filterNote}
          </motion.p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((card, index) => {
            const isPending = card.status?.toLowerCase().includes('pending');
            const StatusIcon = isPending ? Clock : CheckCircle;
            const descText = card.description || '';

            // Build facts for mobile expand
            const facts = [
              card.filingDate && { label: 'Filed', value: card.filingDate },
              card.ageGroup && { label: 'Inventors', value: `Ages ${card.ageGroup}` },
              card.applicationNo && { label: 'App No.', value: card.applicationNo },
              card.status && { label: 'Status', value: card.status },
            ].filter(Boolean);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="group bg-card rounded-xl p-6 border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
                  {/* Header with status */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex-1">
                      {card.category && (
                        <span className="inline-block text-xs font-semibold text-accent-cyan uppercase tracking-wider mb-2">
                          {card.category}
                        </span>
                      )}
                      <h3 className="text-lg font-semibold text-deep-ink group-hover:text-primary-navy transition-colors leading-tight">
                        {card.title}
                      </h3>
                    </div>
                    <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium shrink-0 ${
                      isPending 
                        ? 'bg-amber-100 text-amber-700' 
                        : 'bg-green-100 text-green-700'
                    }`}>
                      <StatusIcon className="w-3 h-3" />
                      {card.status}
                    </div>
                  </div>

                  {/* Meta info — desktop only (shown in modal on mobile) */}
                  <div className="hidden md:block space-y-1.5 mb-4 text-xs text-muted-foreground">
                    {card.filingDate && (
                      <p><span className="font-medium">Filed:</span> {card.filingDate}</p>
                    )}
                    {card.ageGroup && (
                      <p><span className="font-medium">Inventors:</span> Ages {card.ageGroup}</p>
                    )}
                    {card.applicationNo && (
                      <p><span className="font-medium">App No:</span> {card.applicationNo}</p>
                    )}
                  </div>

                  {/* Description — expandable */}
                  {descText && (
                    <ExpandableText text={descText} collapsedLines={4} minChars={180} className="mb-4" />
                  )}

                  {/* Mobile expand modal */}
                  <MobileExpandModal
                    label="View Details"
                    title={card.title}
                    tag={card.category}
                    body={descText}
                    facts={facts}
                    action={card.href ? { label: 'View Full Patent', href: card.href } : undefined}
                  />

                  {/* Desktop CTA link */}
                  {card.href && (
                    <div className="mt-auto pt-2 hidden md:flex">
                      <Link
                        to={card.href}
                        className="inline-flex items-center gap-2 text-sm font-medium text-link-blue hover:text-secondary-blue transition-colors group/link"
                      >
                        View Patent
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PatentGridSection;
