import { Link } from 'react-router-dom';
import { Mail, ArrowUpRight, FileText, Lightbulb, BookOpen, Users, Download, Lock, ScrollText, MapPin } from 'lucide-react';
import { nav, brand } from '../../content/siteCore';
import logo from '../../assets/logo-96.webp';
import FooterNewsletter from '../FooterNewsletter';

const Footer = () => {
  // nav and brand imported from siteCore

  return (
    <footer className="bg-deep-ink text-white relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-navy/20 to-transparent" />
      
      <div className="container-grid py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2.5 mb-5">
              <div className="h-12 w-12 rounded-lg bg-white flex items-center justify-center overflow-hidden border border-white/20">
                <img src={logo} alt={brand.siteName} className="h-11 w-11 object-contain" width={44} height={44} loading="lazy" decoding="async" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-sm font-bold text-white/95">Blue Blocks</span>
                <span className="text-[9px] font-semibold text-white/60 uppercase tracking-[0.08em]">Micro Research Institute</span>
              </div>
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
             <h4 className="text-xs font-semibold uppercase tracking-widest mb-5 text-white/60">
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
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-5 text-white/60">
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
              <Link to="/methodology/innovation" className="block text-sm text-white/60 hover:text-white transition-colors">
                Innovation Research
              </Link>
            </nav>
          </div>

          {/* Governance Column */}
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-5 text-white/60">
              Governance
            </h4>
            <nav className="space-y-3">
              <Link to="/governance/ethics" className="block text-sm text-white/60 hover:text-white transition-colors">
                Ethics & Privacy
              </Link>
              <Link to="/governance/standards" className="block text-sm text-white/60 hover:text-white transition-colors">
                Research Standards
              </Link>
              <Link to="/governance/compliance" className="block text-sm text-white/60 hover:text-white transition-colors">
                Regulatory Compliance
              </Link>
              <Link to="/governance/our-standards" className="block text-sm text-white/60 hover:text-white transition-colors">
                Our Standards
              </Link>
            </nav>
          </div>
        </div>

        {/* Registries Row */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <h4 className="text-xs font-semibold uppercase tracking-widest mb-5 text-white/60">
            Registries & Archives
          </h4>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Link to="/publications" className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors py-1 min-h-[44px] sm:min-h-0">
              <FileText className="w-3.5 h-3.5" aria-hidden="true" />
              Publications
            </Link>
            <Link to="/patents" className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors py-1 min-h-[44px] sm:min-h-0">
              <Lightbulb className="w-3.5 h-3.5" aria-hidden="true" />
              Patents
            </Link>
            <Link to="/books" className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors py-1 min-h-[44px] sm:min-h-0">
              <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
              Books
            </Link>
            <Link to="/team" className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors py-1 min-h-[44px] sm:min-h-0">
              <Users className="w-3.5 h-3.5" aria-hidden="true" />
              Team
            </Link>
            <Link to="/downloads" className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors py-1 min-h-[44px] sm:min-h-0">
              <Download className="w-3.5 h-3.5" aria-hidden="true" />
              Downloads
            </Link>
          </div>
        </div>

        {/* Utility Links Row */}
        <div className="mt-6">
          <div className="flex flex-wrap gap-4">
            <Link to="/publications" className="text-xs text-white/60 hover:text-white/80 transition-colors">
              Open Science Statement
            </Link>
            <Link to="/collaborate" className="text-xs text-white/60 hover:text-white/80 transition-colors">
              Data Access
            </Link>
            <Link to="/governance" className="text-xs text-white/60 hover:text-white/80 transition-colors">
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
          <div className="flex flex-col items-center gap-4 text-xs text-white/60 md:flex-row md:justify-between">
            <p>© {new Date().getFullYear()} {brand.siteName}. All rights reserved.</p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
              <Link to="/privacy" className="inline-flex items-center gap-1 py-1 hover:text-white/80 transition-colors min-h-[44px] sm:min-h-0">
                <Lock className="w-3 h-3" aria-hidden="true" />
                Privacy Policy
              </Link>
              <Link to="/terms" className="inline-flex items-center gap-1 py-1 hover:text-white/80 transition-colors min-h-[44px] sm:min-h-0">
                <ScrollText className="w-3 h-3" aria-hidden="true" />
                Terms of Use
              </Link>
              <Link to="/sitemap" className="inline-flex items-center gap-1 py-1 hover:text-white/80 transition-colors min-h-[44px] sm:min-h-0">
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
