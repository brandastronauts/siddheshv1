'use client'

import Link from 'next/link';
import { Check, AlertCircle, X } from 'lucide-react';
import { sitemapData } from '../../lib/sitemapData';

const StatusIcon = ({ status }) => {
  if (status === 'complete') return <Check className="w-4 h-4 text-green-600" />;
  if (status === 'partial') return <AlertCircle className="w-4 h-4 text-yellow-600" />;
  return <X className="w-4 h-4 text-red-600" />;
};

const SitemapSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container-grid">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Core Pages</h3>
            <ul className="space-y-2">
              {sitemapData.core.map((item) => (
                <li key={item.url}>
                  <Link href={item.url} className="text-foreground hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Governance</h3>
            <ul className="space-y-2">
              {sitemapData.governance.map((item) => (
                <li key={item.url}>
                  <Link href={item.url} className="text-foreground hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Methodology</h3>
            <ul className="space-y-2">
              {sitemapData.methodology.map((item) => (
                <li key={item.url}>
                  <Link href={item.url} className="text-foreground hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Publications</h3>
            <ul className="space-y-2">
              {sitemapData.publications.map((item) => (
                <li key={item.url}>
                  <Link href={item.url} className="text-foreground hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Patents</h3>
            <ul className="space-y-2">
              {sitemapData.patents.map((item) => (
                <li key={item.url}>
                  <Link href={item.url} className="text-foreground hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Books</h3>
            <ul className="space-y-2">
              {sitemapData.books.map((item) => (
                <li key={item.url}>
                  <Link href={item.url} className="text-foreground hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Team</h3>
            <ul className="space-y-2">
              {sitemapData.team.map((item) => (
                <li key={item.url}>
                  <Link href={item.url} className="text-foreground hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Downloads</h3>
            <ul className="space-y-2">
              {sitemapData.downloads.map((item) => (
                <li key={item.url}>
                  <Link href={item.url} className="text-foreground hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Technical & Archive</h3>
            <ul className="space-y-2">
              {sitemapData.technical.map((item) => (
                <li key={item.url}>
                  <Link href={item.url} className="text-foreground hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Newsroom Subpages</h3>
            <ul className="space-y-2">
              {sitemapData.newsroom.map((item) => (
                <li key={item.url}>
                  <Link href={item.url} className="text-foreground hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Legal & Access</h3>
            <ul className="space-y-2">
              {sitemapData.legal.map((item) => (
                <li key={item.url}>
                  <Link href={item.url} className="text-foreground hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t pt-12">
          <h2 className="text-2xl font-bold mb-6">Page Completion Checklist</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold">Page</th>
                  <th className="text-left py-3 px-4 font-semibold">URL</th>
                  <th className="text-center py-3 px-4 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {Object.values(sitemapData).flat().map((item) => (
                  <tr key={item.url} className="border-b hover:bg-muted/50">
                    <td className="py-3 px-4">{item.name}</td>
                    <td className="py-3 px-4">
                      <Link href={item.url} className="text-primary hover:underline font-mono text-xs">
                        {item.url}
                      </Link>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <StatusIcon status={item.status} />
                        <span className="text-xs capitalize">{item.status}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            This checklist ensures navigation integrity. No CTA should point to '#'.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SitemapSection;
