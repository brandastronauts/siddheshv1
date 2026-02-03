import { Link } from 'react-router-dom';
import siteContent from '../../content/siteContent';
import logo from '../../assets/logo.svg';

const Footer = () => {
  const { nav, brand } = siteContent;

  return (
    <footer className="bg-deep-ink text-white">
      <div className="container-grid py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-4">
              <img src={logo} alt={brand.siteName} className="h-10 w-auto brightness-0 invert" />
              <span className="text-lg font-semibold">{brand.siteName}</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-md mb-6">
              {brand.ethicsTagline}
            </p>
            <div className="space-y-2">
              <a
                href={`mailto:${brand.contact.research}`}
                className="block text-sm text-white/70 hover:text-white transition-colors"
              >
                Research: {brand.contact.research}
              </a>
              <a
                href={`mailto:${brand.contact.press}`}
                className="block text-sm text-white/70 hover:text-white transition-colors"
              >
                Press: {brand.contact.press}
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/90">
              Navigation
            </h4>
            <nav className="space-y-2">
              {nav.slice(0, 4).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block text-sm text-white/70 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* More Links Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/90">
              More
            </h4>
            <nav className="space-y-2">
              {nav.slice(4).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block text-sm text-white/70 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
            <p>© {new Date().getFullYear()} {brand.siteName}. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="/governance" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/governance" className="hover:text-white transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
