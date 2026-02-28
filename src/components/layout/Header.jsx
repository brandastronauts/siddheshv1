import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { nav, brand } from '../../content/siteCore';
import logo from '../../assets/logo-88.webp';
import { getIcon } from '../../lib/iconMap';

/* ─── Desktop Dropdown ─────────────────────────────────────────────── */
const DesktopDropdown = ({ item, isActive, location }) => {
  const [open, setOpen] = useState(false);
  const timeout = useRef(null);
  const id = `dropdown-${item.path.replace(/\//g, '-')}`;

  const enter = () => { clearTimeout(timeout.current); setOpen(true); };
  const leave = () => { timeout.current = setTimeout(() => setOpen(false), 150); };

  useEffect(() => () => clearTimeout(timeout.current), []);

  const childActive = item.children?.some(c => location.pathname === c.path);

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <Link
        to={item.path}
        aria-expanded={open}
        aria-controls={id}
        onFocus={enter}
        onBlur={leave}
        className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 inline-flex items-center gap-1.5 ${
          isActive || childActive
            ? 'text-primary-navy bg-primary-navy/5'
            : 'text-muted-foreground hover:text-deep-ink hover:bg-surface'
        }`}
      >
        {(() => { const I = getIcon(item.icon); return I ? <I className="w-3.5 h-3.5" aria-hidden="true" /> : null; })()}
        {item.label}
        <ChevronDown className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            id={id}
            role="menu"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-1 min-w-[200px] bg-popover border border-border rounded-lg shadow-lg p-1 z-50"
          >
            {item.children.map(child => {
              const ChildIcon = getIcon(child.icon);
              const active = location.pathname === child.path;
              return (
                <Link
                  key={child.path}
                  to={child.path}
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-2 px-3 py-2.5 text-sm rounded-md transition-colors ${
                    active
                      ? 'text-primary-navy bg-primary-navy/5 font-medium'
                      : 'text-muted-foreground hover:text-deep-ink hover:bg-surface'
                  }`}
                >
                  {ChildIcon && <ChildIcon className="w-3.5 h-3.5" aria-hidden="true" />}
                  {child.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ─── Mobile Accordion Item ────────────────────────────────────────── */
const MobileAccordionItem = ({ item, location, closeMobileMenu }) => {
  const [expanded, setExpanded] = useState(false);
  const id = `mobile-dd-${item.path.replace(/\//g, '-')}`;
  const isActive = location.pathname === item.path;
  const childActive = item.children?.some(c => location.pathname === c.path);

  return (
    <div>
      <div className="flex items-center">
        <Link
          to={item.path}
          onClick={closeMobileMenu}
          className={`flex-1 px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 flex items-center gap-2 ${
            isActive || childActive
              ? 'text-primary-navy bg-primary-navy/5'
              : 'text-muted-foreground hover:text-deep-ink hover:bg-surface'
          }`}
        >
          {(() => { const I = getIcon(item.icon); return I ? <I className="w-4 h-4" aria-hidden="true" /> : null; })()}
          {item.label}
        </Link>
        <button
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-controls={id}
          aria-label={`${expanded ? 'Collapse' : 'Expand'} ${item.label} submenu`}
          className="p-3 rounded-xl hover:bg-surface transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
        >
          <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${expanded ? 'rotate-180' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            id={id}
            role="menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pl-6 pb-1 space-y-1">
              {item.children.map(child => {
                const ChildIcon = getIcon(child.icon);
                const active = location.pathname === child.path;
                return (
                  <Link
                    key={child.path}
                    to={child.path}
                    role="menuitem"
                    onClick={closeMobileMenu}
                    className={`flex items-center gap-2 px-4 py-3 text-base font-medium rounded-xl transition-colors min-h-[44px] ${
                      active
                        ? 'text-primary-navy bg-primary-navy/5'
                        : 'text-muted-foreground hover:text-deep-ink hover:bg-surface'
                    }`}
                  >
                    {ChildIcon && <ChildIcon className="w-4 h-4" aria-hidden="true" />}
                    {child.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ─── Header ───────────────────────────────────────────────────────── */
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  // nav and brand imported from siteCore

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container-grid">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="h-12 md:h-14 w-12 md:w-14 rounded-lg bg-white flex items-center justify-center overflow-hidden border border-border/20">
              <img
                src={logo}
                alt={brand.siteName}
                className="h-11 md:h-12 w-11 md:w-12 object-contain"
                width={44}
                height={44}
                fetchPriority="high"
                decoding="async"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[13px] md:text-sm font-bold text-deep-ink group-hover:text-primary-navy transition-colors tracking-tight">
                Blue Blocks
              </span>
              <span className="text-[9px] md:text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.08em]">
                Micro Research Institute
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {nav.map((item) => {
              const isActive = location.pathname === item.path;

              if (item.children?.length) {
                return <DesktopDropdown key={item.path} item={item} isActive={isActive} location={location} />;
              }

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 inline-flex items-center gap-1.5 ${
                    isActive
                      ? 'text-primary-navy bg-primary-navy/5'
                      : 'text-muted-foreground hover:text-deep-ink hover:bg-surface'
                  }`}
                >
                  {(() => { const I = getIcon(item.icon); return I ? <I className="w-3.5 h-3.5" aria-hidden="true" /> : null; })()}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-surface transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-deep-ink" />
            ) : (
              <Menu className="w-6 h-6 text-deep-ink" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl"
          >
            <nav className="container-grid py-4" aria-label="Mobile navigation">
              <div className="flex flex-col gap-1">
                {nav.map((item) => {
                  if (item.children?.length) {
                    return (
                      <MobileAccordionItem
                        key={item.path}
                        item={item}
                        location={location}
                        closeMobileMenu={closeMobileMenu}
                      />
                    );
                  }

                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={closeMobileMenu}
                      className={`px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 flex items-center gap-2 min-h-[44px] ${
                        isActive
                          ? 'text-primary-navy bg-primary-navy/5'
                          : 'text-muted-foreground hover:text-deep-ink hover:bg-surface'
                      }`}
                    >
                      {(() => { const I = getIcon(item.icon); return I ? <I className="w-4 h-4" aria-hidden="true" /> : null; })()}
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
