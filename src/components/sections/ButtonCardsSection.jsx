import { Link } from 'react-router-dom';
import { Microscope, Building2, GraduationCap, Briefcase, ArrowRight } from 'lucide-react';

const iconMap = {
  microscope: Microscope,
  building: Building2,
  graduation: GraduationCap,
  briefcase: Briefcase,
};

const ButtonCardsSection = ({ heading, items }) => {
  return (
    <section className="section-spacing bg-surface">
      <div className="container-grid">
        {heading && (
          <h2 className="text-3xl md:text-4xl font-bold text-center text-deep-ink mb-12">
            {heading}
          </h2>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {items.map((item, index) => {
            const IconComponent = item.icon ? iconMap[item.icon] : null;
            
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50 group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  {IconComponent && (
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center group-hover:bg-accent-cyan/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-accent-cyan" />
                    </div>
                  )}
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-deep-ink mb-2 group-hover:text-primary-navy transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent-cyan transition-colors flex-shrink-0 mt-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ButtonCardsSection;
