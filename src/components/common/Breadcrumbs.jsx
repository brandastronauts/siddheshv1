'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { buildBreadcrumbTrail } from '../../lib/breadcrumbsResolver';

const Breadcrumbs = ({ pageTitle }) => {
  const rawPath = usePathname();
  const pathname = rawPath?.replace(/\/$/, '') || '/';

  if (!pathname || pathname === '/') return null;

  const trail = buildBreadcrumbTrail(pathname, pageTitle);
  if (!trail.length) return null;

  return (
    <nav aria-label="Breadcrumb" className="bg-surface/60 border-b border-border/40 backdrop-blur-sm">
      <div className="container-grid py-2">
        <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-deep-ink transition-colors">
              Home
            </Link>
          </li>
          {trail.map((crumb) => (
            <li key={crumb.path} className="flex items-center gap-1">
              <span className="text-border/60 select-none">/</span>
              {crumb.current ? (
                <span className="text-deep-ink font-medium" aria-current="page">
                  {crumb.name}
                </span>
              ) : (
                <Link href={crumb.path} className="hover:text-deep-ink transition-colors">
                  {crumb.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
