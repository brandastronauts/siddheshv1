import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import siteContent from '../../content/siteContent';
import logo from '../../assets/logo.png';
import { getIcon } from '../../lib/iconMap';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { nav, brand } = siteContent;

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container-grid">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="h-10 md:h-12 w-10 md:w-12 rounded-lg bg-white flex items-center justify-center shadow-sm border border-border/30 overflow-hidden">
              <img 
                src={logo} 
                alt={brand.siteName} 
                className="h-8 md:h-10 w-auto object-contain" 
              />
            </div>
            <div className="hidden md:flex flex-col leading-tight">
              <span className="text-sm font-bold text-deep-ink group-hover:text-primary-navy transition-colors">
                Blue Blocks
              </span>
              <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                Micro Research Institute
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) => {
              const isActive = location.pathname === item.path;
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
                  {(() => {
                    const NavIcon = getIcon(item.icon);
                    return NavIcon ? <NavIcon className="w-3.5 h-3.5" aria-hidden="true" /> : null;
                  })()}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-surface transition-colors"
            aria-label="Toggle menu"
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
            <nav className="container-grid py-4">
              <div className="flex flex-col gap-1">
                {nav.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 flex items-center gap-2 ${
                        isActive
                          ? 'text-primary-navy bg-primary-navy/5'
                          : 'text-muted-foreground hover:text-deep-ink hover:bg-surface'
                      }`}
                    >
                      {(() => {
                        const NavIcon = getIcon(item.icon);
                        return NavIcon ? <NavIcon className="w-4 h-4" aria-hidden="true" /> : null;
                      })()}
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
