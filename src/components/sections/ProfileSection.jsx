import { motion } from 'framer-motion';
import { Mail, Linkedin, Globe } from 'lucide-react';
import SmartImage from '../common/SmartImage';

// ORCID icon (not in Lucide)
const OrcidIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM7.5 5.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM6.9 8.6h1.2v7.8H6.9V8.6zm3.6 0h3.3c3.2 0 4.7 2 4.7 3.9 0 2-1.5 3.9-4.7 3.9h-3.3V8.6zm1.2 1.1v5.6h2.1c2.5 0 3.4-1.5 3.4-2.8 0-1.3-.9-2.8-3.4-2.8h-2.1z"/>
  </svg>
);

const ProfileSection = ({ name, role, image, email, socials = [], bio }) => {
  return (
    <section className="py-10 md:py-14 bg-background">
      <div className="container-grid">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Profile Photo */}
            {image && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="shrink-0 mx-auto md:mx-0"
              >
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border-2 border-border/50 shadow-lg">
                  <SmartImage
                    src={image.src}
                    alt={image.alt || name}
                    variant="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            )}

            {/* Info + Actions */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex-1 text-center md:text-left"
            >
              {name && (
                <h2 className="text-2xl md:text-3xl font-bold text-deep-ink mb-1">{name}</h2>
              )}
              {role && (
                <p className="text-sm font-medium text-muted-foreground mb-4">{role}</p>
              )}

              {bio && (
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-xl">{bio}</p>
              )}

              {/* Social Icons + Email */}
              <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start">
                {email && (
                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl bg-primary-navy text-white hover:bg-primary-navy/90 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Email Me
                  </a>
                )}

                {socials.map((social, idx) => {
                  const iconMap = {
                    linkedin: Linkedin,
                    website: Globe,
                    orcid: OrcidIcon,
                  };
                  const Icon = iconMap[social.type] || Globe;

                  return (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label || social.type}
                      className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-border/50 bg-surface text-muted-foreground hover:text-deep-ink hover:border-border transition-all"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
