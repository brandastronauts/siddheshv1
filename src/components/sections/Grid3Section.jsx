import { Shield, Eye, Scale, Check, Users, Mail, Newspaper, MessageSquare, Microscope, Building2, GraduationCap, Briefcase, Database, Target, Feather, FileText, Lock, AlertTriangle, Wrench, ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
  shield: Shield,
  eye: Eye,
  scale: Scale,
  check: Check,
  users: Users,
  user: Users,
  mail: Mail,
  newspaper: Newspaper,
  message: MessageSquare,
  microscope: Microscope,
  building: Building2,
  graduation: GraduationCap,
  briefcase: Briefcase,
  database: Database,
  target: Target,
  feather: Feather,
  file: FileText,
  lock: Lock,
  alert: AlertTriangle,
  tool: Wrench,
  arrow: ArrowRight,
  download: Download,
};

const Grid3Section = ({ heading, header, intro, items }) => {
  const title = header || heading;

  return (
    <section className="section-spacing bg-surface relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pattern-grid opacity-20" />
      
      <div className="container-grid relative z-10">
        {title && (
          <motion.h2 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-deep-ink mb-6 whitespace-pre-line"
          >
            {title}
          </motion.h2>
        )}

        {intro && (
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-4xl mx-auto mb-16"
          >
            {intro.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-lg text-muted-foreground leading-relaxed mb-4 last:mb-0 text-center">
                {paragraph}
              </p>
            ))}
          </motion.div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, index) => {
            const IconComponent = item.icon ? iconMap[item.icon] : null;
            const description = item.body || item.description;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-elegant p-8 group"
              >
                {IconComponent && (
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-cyan/10 to-primary-navy/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-accent-cyan" />
                  </div>
                )}
                
                <h3 className="text-lg font-semibold text-deep-ink mb-3 group-hover:text-primary-navy transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {description}
                </p>
                
                {item.email && (
                  <a
                    href={`mailto:${item.email}`}
                    className="inline-block mt-4 text-sm text-link-blue hover:text-secondary-blue font-medium"
                  >
                    {item.email}
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Grid3Section;
