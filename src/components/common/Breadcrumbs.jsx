'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { buildBreadcrumbTrail } from '../../lib/breadcrumbsResolver';

const Breadcrumbs = ({ pageTitle }) => {
  const rawPath = usePathname();
  const path =
    rawPath !== '/' && rawPath.endsWith('/')
      ? rawPath.slice(0, -1)
      : rawPath;

  if (path === '/' || !path) return null;

  const trail = buildBreadcrumbTrail(path, pageTitle);
  if (!trail.length) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-border/40 bg-background/60"
    >
      <ol className="container mx-auto px-4 py-2.5 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
        <li>
          <Link
            href="/"
            className="hover:text-foreground transition-colors"
          >
            Home
          </Link>
        </li>
        {trail.map((crumb) => (
          <li key={crumb.path} className="flex items-center gap-1.5">
            <span aria-hidden="true" className="text-muted-foreground/50">
              ›
            </span>
            {crumb.current ? (
              <span aria-current="page" className="text-foreground font-medium">
                {crumb.name}
              </span>
            ) : (
              <Link
                href={crumb.path}
                className="hover:text-foreground transition-colors"
              >
                {crumb.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
