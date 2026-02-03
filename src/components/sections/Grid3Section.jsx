import { Shield, Eye, Scale, Check, Users, Mail, Newspaper, MessageSquare, Microscope, Building2, GraduationCap, Briefcase } from 'lucide-react';

const iconMap = {
  shield: Shield,
  eye: Eye,
  scale: Scale,
  check: Check,
  users: Users,
  mail: Mail,
  newspaper: Newspaper,
  message: MessageSquare,
  microscope: Microscope,
  building: Building2,
  graduation: GraduationCap,
  briefcase: Briefcase,
};

const Grid3Section = ({ heading, items }) => {
  return (
    <section className="section-spacing bg-background">
      <div className="container-grid">
        {heading && (
          <h2 className="text-3xl md:text-4xl font-bold text-center text-deep-ink mb-12">
            {heading}
          </h2>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const IconComponent = item.icon ? iconMap[item.icon] : null;
            
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50"
              >
                {IconComponent && (
                  <div className="w-12 h-12 rounded-lg bg-accent-cyan/10 flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6 text-accent-cyan" />
                  </div>
                )}
                
                <h3 className="text-xl font-semibold text-deep-ink mb-3">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                
                {item.email && (
                  <a
                    href={`mailto:${item.email}`}
                    className="inline-block mt-4 text-link-blue hover:text-secondary-blue font-medium"
                  >
                    {item.email}
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Grid3Section;
