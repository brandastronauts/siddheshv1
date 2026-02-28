import { Download, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';

const ToolCardsSection = ({ heading, header, intro, tools = [] }) => {
  const title = header || heading;

  return (
    <section className="section-spacing bg-background">
      <div className="container-grid">
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
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-sm mb-8 max-w-3xl mx-auto text-center"
          >
            {intro}
          </motion.p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-card border border-border rounded-xl p-6 flex flex-col"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary-navy/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-primary-navy" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-deep-ink">{tool.title}</h3>
                  {tool.subtitle && (
                    <p className="text-xs text-accent-cyan font-medium mt-0.5">{tool.subtitle}</p>
                  )}
                </div>
              </div>

              {tool.body && (
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{tool.body}</p>
              )}

              {tool.details && (
                <ul className="space-y-1 mb-3">
                  {tool.details.map((d, di) => (
                    <li key={di} className="text-xs text-muted-foreground">
                      {d}
                    </li>
                  ))}
                </ul>
              )}

              {tool.note && (
                <p className="text-xs text-muted-foreground italic mb-3 p-2 bg-surface rounded-lg border border-border/50">
                  {tool.note}
                </p>
              )}

              {/* Download buttons */}
              <div className="mt-auto pt-3 flex flex-wrap gap-2">
                {tool.downloads?.map((dl, di) => (
                  <a
                    key={di}
                    href={dl.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="inline-flex items-center gap-1.5 text-xs font-medium bg-primary-navy text-white px-3 py-2 rounded-lg hover:bg-secondary-blue transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    {dl.label}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolCardsSection;
