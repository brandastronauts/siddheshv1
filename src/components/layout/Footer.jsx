import { Link } from 'react-router-dom';
import { Mail, ArrowUpRight, FileText, Lightbulb, BookOpen, Users, Download, Lock, ScrollText, MapPin } from 'lucide-react';
import siteContent from '../../content/siteContent';
import logo from '../../assets/logo.png';
import FooterNewsletter from '../FooterNewsletter';

const Footer = () => {
  const { nav, brand } = siteContent;

  return (
    <footer className="bg-deep-ink text-white relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-navy/20 to-transparent" />
      
      <div className="container-grid py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-5">
              <img src={logo} alt={brand.siteName} className="h-10 w-auto brightness-0 invert opacity-90" />
              <span className="text-lg font-semibold text-white/90">{brand.siteName}</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-md mb-8">
              {brand.ethicsTagline}
            </p>
            <div className="space-y-3">
              <a
                href={`mailto:${brand.contact.research}`}
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4" />
                <span>Research: {brand.contact.research}</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href={`mailto:${brand.contact.press}`}
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4" />
                <span>Press: {brand.contact.press}</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-5 text-white/40">
              Navigation
            </h4>
            <nav className="space-y-3">
              {nav.slice(0, 4).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block text-sm text-white/60 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* More Links Column */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-5 text-white/40">
              More
            </h4>
            <nav className="space-y-3">
              {nav.slice(4).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block text-sm text-white/60 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Registries Row */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <h4 className="text-xs font-semibold uppercase tracking-widest mb-5 text-white/40">
            Registries & Archives
          </h4>
          <div className="flex flex-wrap gap-4">
            <Link to="/publications" className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors">
              <FileText className="w-3.5 h-3.5" aria-hidden="true" />
              Publications
            </Link>
            <Link to="/patents" className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors">
              <Lightbulb className="w-3.5 h-3.5" aria-hidden="true" />
              Patents
            </Link>
            <Link to="/books" className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors">
              <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
              Books
            </Link>
            <Link to="/team" className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors">
              <Users className="w-3.5 h-3.5" aria-hidden="true" />
              Team
            </Link>
            <Link to="/downloads" className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors">
              <Download className="w-3.5 h-3.5" aria-hidden="true" />
              Downloads
            </Link>
          </div>
        </div>

        {/* Utility Links Row */}
        <div className="mt-6">
          <div className="flex flex-wrap gap-4">
            <Link to="/publications" className="text-xs text-white/40 hover:text-white/80 transition-colors">
              Open Science Statement
            </Link>
            <Link to="/collaborate" className="text-xs text-white/40 hover:text-white/80 transition-colors">
              Data Access
            </Link>
            <Link to="/governance" className="text-xs text-white/40 hover:text-white/80 transition-colors">
              Research Ethics
            </Link>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 md:mt-16">
          <FooterNewsletter />
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
            <p>© {new Date().getFullYear()} {brand.siteName}. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="inline-flex items-center gap-1 hover:text-white/80 transition-colors">
                <Lock className="w-3 h-3" aria-hidden="true" />
                Privacy Policy
              </Link>
              <Link to="/terms" className="inline-flex items-center gap-1 hover:text-white/80 transition-colors">
                <ScrollText className="w-3 h-3" aria-hidden="true" />
                Terms of Use
              </Link>
              <Link to="/sitemap" className="inline-flex items-center gap-1 hover:text-white/80 transition-colors">
                <MapPin className="w-3 h-3" aria-hidden="true" />
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
