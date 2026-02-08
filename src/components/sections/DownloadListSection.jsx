import { Link } from 'react-router-dom';
import { Download, FileText, FileArchive } from 'lucide-react';
import { motion } from 'framer-motion';

const DownloadListSection = ({ heading, header, items = [] }) => {
  const title = header || heading;

  const getIcon = (type) => {
    const t = type?.toLowerCase();
    if (t === 'zip') return FileArchive;
    return FileText;
  };

  const renderItem = (item, index) => {
    const Icon = getIcon(item.type || item.format);
    const isExternal = item.href?.startsWith('http');
    const displayMeta = item.type || item.format || 'PDF';

    const content = (
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-navy/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary-navy" />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-deep-ink group-hover:text-primary-navy transition-colors">
            {item.title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {displayMeta}{item.size ? ` • ${item.size}` : ''}{item.description ? ` — ${item.description}` : ''}
          </p>
        </div>
        
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-cyan/10 flex items-center justify-center group-hover:bg-accent-cyan group-hover:text-white transition-all">
          <Download className="w-5 h-5 text-accent-cyan group-hover:text-white" />
        </div>
      </div>
    );

    const className = "bg-card rounded-xl p-5 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 group cursor-pointer block";

    if (isExternal) {
      return (
        <motion.a
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          className={className}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05 }}
      >
        <Link to={item.href || '#'} className={className}>
          {content}
        </Link>
      </motion.div>
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
            className="text-2xl md:text-3xl font-bold text-deep-ink mb-8"
          >
            {title}
          </motion.h2>
        )}
        
        <div className="max-w-3xl space-y-4">
          {items.map((item, index) => renderItem(item, index))}
        </div>
      </div>
    </section>
  );
};

export default DownloadListSection;
