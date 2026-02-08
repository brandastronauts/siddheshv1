import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Microscope, Building2, GraduationCap, Briefcase, ArrowRight } from 'lucide-react';

const iconMap = {
  microscope: Microscope,
  building: Building2,
  graduation: GraduationCap,
  briefcase: Briefcase,
};

// Default fallback cards for Explore Registries
const defaultRegistryCards = [
  {
    title: "Publications",
    description: "Administrative records, case studies, datasets, and open science archives.",
    image: "https://images.unsplash.com/photo-1450101215322-bf5cd27642fc?auto=format&fit=crop&w=1200&q=80",
    button: { label: "Browse Publications", href: "/publications" }
  },
  {
    title: "Patents",
    description: "Student innovation outcomes, patent filings, and technical documentation.",
    image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1200&q=80",
    button: { label: "View Patents", href: "/patents" }
  },
  {
    title: "Books",
    description: "Long-form publications supporting families, educators, and research partners.",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
    button: { label: "Explore Books", href: "/books" }
  },
  {
    title: "Team",
    description: "Researchers, embedded fellows, leadership, and institutional collaborators.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    button: { label: "Meet the Team", href: "/team" }
  },
  {
    title: "Downloads",
    description: "Technical briefs, presentations, proceedings, and public documents.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
    button: { label: "Access Downloads", href: "/downloads" }
  }
];

const ButtonCardsSection = ({ heading, header, items, cards, footerNote }) => {
  const title = header || heading;
  
  // Use provided cards/items, or fall back to default registry cards
  const rawCardData = cards || items || [];
  const cardData = rawCardData.length > 0 ? rawCardData : defaultRegistryCards;

  const renderButton = (item) => {
    const buttonData = item.button;
    if (!buttonData) return null;

    const isAnchor = buttonData.href?.startsWith('#');
    const isExternal = buttonData.href?.startsWith('http');

    if (isAnchor) {
      return (
        <a
          href={buttonData.href}
          className="inline-flex items-center gap-2 text-sm font-medium text-link-blue hover:text-secondary-blue transition-colors group/btn"
        >
          {buttonData.label}
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </a>
      );
    }

    if (isExternal) {
      return (
        <a
          href={buttonData.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-link-blue hover:text-secondary-blue transition-colors group/btn"
        >
          {buttonData.label}
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </a>
      );
    }

    return (
      <Link
        to={buttonData.href || '/'}
        className="inline-flex items-center gap-2 text-sm font-medium text-link-blue hover:text-secondary-blue transition-colors group/btn"
      >
        {buttonData.label}
        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
      </Link>
    );
  };

  return (
    <section className="section-spacing bg-surface">
      <div className="container-grid">
        {title && (
          <motion.h2 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-deep-ink mb-12"
          >
            {title}
          </motion.h2>
        )}
        
        {/* 5-column grid for desktop (3+2 layout), 2 for tablet, 1 for mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {cardData.map((item, index) => {
            const IconComponent = item.icon ? iconMap[item.icon] : null;
            const cardTitle = item.headline || item.title;
            const cardBody = item.body || item.description;
            const cardImage = item.image;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50 group flex flex-col"
              >
                {/* Square image container */}
                {cardImage && (
                  <div className="aspect-square w-full overflow-hidden">
                    <img
                      src={cardImage}
                      alt={cardTitle || 'Registry image'}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                )}
                
                <div className="p-5 flex flex-col flex-1">
                  {IconComponent && !cardImage && (
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center group-hover:bg-accent-cyan/20 transition-colors mb-4">
                      <IconComponent className="w-6 h-6 text-accent-cyan" />
                    </div>
                  )}
                  
                  <h3 className="text-lg font-semibold text-deep-ink mb-2 group-hover:text-primary-navy transition-colors">
                    {cardTitle}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                    {cardBody}
                  </p>
                  
                  {renderButton(item)}
                </div>
              </motion.div>
            );
          })}
        </div>

        {footerNote && (
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center text-sm text-muted-foreground mt-8"
          >
            {footerNote}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default ButtonCardsSection;