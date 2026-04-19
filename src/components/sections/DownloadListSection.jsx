'use client'

import Link from 'next/link';
import { Download, FileText, FileArchive, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const DownloadListSection = ({ heading, header, intro, items = [] }) => {
  const title = header || heading;

  const getIcon = (type) => {
    const t = type?.toLowerCase();
    if (t === 'zip') return FileArchive;
    if (t === 'doi') return ExternalLink;
    return FileText;
  };

  const getActionIcon = (type) => {
    const t = type?.toLowerCase();
    if (t === 'doi') return ExternalLink;
    return Download;
  };

  const renderItem = (item, index) => {
    const Icon = getIcon(item.type || item.format);
    const ActionIcon = getActionIcon(item.type || item.format);
    const isExternal = item.href?.startsWith('http');
    const isFile = /\.(pdf|zip|docx?|xlsx?|pptx?|txt|csv)$/i.test(item.href);
    const isDOI = (item.type || item.format || '').toLowerCase() === 'doi';
    const displayMeta = item.type || item.format || 'PDF';

    const content = (
      <div className="flex items-center gap-4">
        <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${isDOI ? 'bg-accent-cyan/10' : 'bg-primary-navy/10'} flex items-center justify-center`}>
          <Icon className={`w-5 h-5 ${isDOI ? 'text-accent-cyan' : 'text-primary-navy'}`} />
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
          <ActionIcon className="w-5 h-5 text-accent-cyan group-hover:text-white" />
        </div>
      </div>
    );

    const className = "bg-card rounded-xl p-5 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 group cursor-pointer block";

    if (isExternal || isFile) {
      const isPdf = /\.pdf$/i.test(item.href);
      const isSameOrigin = !isExternal;
      return (
        <motion.a
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          {...(isPdf && isSameOrigin ? { download: item.href.split('/').pop() } : {})}
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
        <Link href={item.href || '#'} className={className}>
          {content}
        </Link>
      </motion.div>
    );
  };

  return (
    <section className="section-spacing bg-surface">
      <div className="container-grid">
        {title && (
          <h2 className="hero-fade-in text-3xl md:text-4xl font-bold text-center text-deep-ink mb-6">
            {title}
          </h2>
        )}

        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-sm text-muted-foreground mb-8 max-w-3xl"
          >
            {intro}
          </motion.p>
        )}
        
        <div className="max-w-3xl space-y-4">
          {items.map((item, index) => renderItem(item, index))}
        </div>
      </div>
    </section>
  );
};

export default DownloadListSection;
