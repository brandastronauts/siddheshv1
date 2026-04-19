'use client'

import Link from 'next/link'
import { Mail, ArrowUpRight, FileText, Lightbulb, BookOpen, Users, Download, Lock, ScrollText, MapPin, Linkedin } from 'lucide-react'
import { nav, brand } from '../../content/siteCore'
import FooterNewsletter from '../FooterNewsletter'

const FacebookIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
)
const InstagramIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
)
const YouTubeIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
)
const WhatsAppIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>
)

const SOCIAL_LINKS = [
  { icon: FacebookIcon, href: 'https://www.facebook.com/blueblocksmontessorischool', label: 'Blue Blocks on Facebook' },
  { icon: InstagramIcon, href: 'https://www.instagram.com/blueblocksmontessorischool/', label: 'Blue Blocks on Instagram' },
  { icon: YouTubeIcon, href: 'https://www.youtube.com/channel/UCnJ6uX3B-uwAg63PgTK0LhQ', label: 'Blue Blocks on YouTube' },
  { icon: Linkedin, href: 'https://www.linkedin.com/school/blue-blocks-school', label: 'Blue Blocks on LinkedIn' },
  { icon: WhatsAppIcon, href: 'https://wa.link/vohpxj', label: 'Blue Blocks on WhatsApp' },
]

const Footer = () => {
  return (
    <footer className="bg-deep-ink text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-navy/20 to-transparent" />

      <div className="container-grid py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="/" className="inline-flex items-center gap-2.5 mb-5">
              <div className="h-12 w-12 rounded-lg bg-white flex items-center justify-center overflow-hidden border border-white/20">
                <img src="/logo.png" alt={brand.siteName} className="h-11 w-11 object-contain" width={44} height={44} loading="lazy" decoding="async" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-sm font-bold text-white/95">Blue Blocks</span>
                <span className="text-[9px] font-semibold text-white/60 uppercase tracking-[0.08em]">Micro Research Institute</span>
              </div>
            </a>
            <p className="text-white/60 text-sm leading-relaxed max-w-md mb-8">{brand.ethicsTagline}</p>
            <div className="space-y-3">
              <a href={`mailto:${brand.contact.research}`} className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors group">
                <Mail className="w-4 h-4" />
                <span>Research: {brand.contact.research}</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href={`mailto:${brand.contact.press}`} className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors group">
                <Mail className="w-4 h-4" />
                <span>Press: {brand.contact.press}</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
            <a
              href="https://www.blueblocks.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-all group mt-4 border border-white/20 hover:border-white/40 rounded-md px-3 py-1.5 bg-white/5 hover:bg-white/10"
            >
              <span>Blue Blocks Montessori School</span>
              <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
            <div className="flex items-center gap-3 mt-5">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-white/40 hover:text-white transition-colors">
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-5 text-white/60">Navigation</h4>
            <nav className="space-y-3">
              {nav.slice(0, 4).map((item) => (
                item.path === '/' ? (
                  <a key={item.path} href="/" className="block text-sm text-white/60 hover:text-white transition-colors">
                    {item.label}
                  </a>
                ) : (
                  <Link key={item.path} href={item.path} className="block text-sm text-white/60 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                )
              ))}
            </nav>
          </div>

          {/* More Links Column */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-5 text-white/60">More</h4>
            <nav className="space-y-3">
              {nav.slice(4).map((item) => (
                item.path === '/' ? (
                  <a key={item.path} href="/" className="block text-sm text-white/60 hover:text-white transition-colors">
                    {item.label}
                  </a>
                ) : (
                  <Link key={item.path} href={item.path} className="block text-sm text-white/60 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                )
              ))}
              <Link href="/methodology/innovation" className="block text-sm text-white/60 hover:text-white transition-colors">
                Innovation Research
              </Link>
            </nav>
          </div>

          {/* Governance Column */}
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-5 text-white/60">Governance</h4>
            <nav className="space-y-3">
              <Link href="/governance/ethics" className="block text-sm text-white/60 hover:text-white transition-colors">Ethics &amp; Privacy</Link>
              <Link href="/governance/standards" className="block text-sm text-white/60 hover:text-white transition-colors">Research Standards</Link>
              <Link href="/governance/compliance" className="block text-sm text-white/60 hover:text-white transition-colors">Regulatory Compliance</Link>
              <Link href="/governance/our-standards" className="block text-sm text-white/60 hover:text-white transition-colors">Our Standards</Link>
            </nav>
          </div>
        </div>

        {/* Registries Row */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <h4 className="text-xs font-semibold uppercase tracking-widest mb-5 text-white/60">Registries &amp; Archives</h4>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Link href="/publications" className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors py-1 min-h-[44px] sm:min-h-0"><FileText className="w-3.5 h-3.5" aria-hidden="true" />Publications</Link>
            <Link href="/patents" className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors py-1 min-h-[44px] sm:min-h-0"><Lightbulb className="w-3.5 h-3.5" aria-hidden="true" />Patents</Link>
            <Link href="/books" className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors py-1 min-h-[44px] sm:min-h-0"><BookOpen className="w-3.5 h-3.5" aria-hidden="true" />Books</Link>
            <Link href="/team" className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors py-1 min-h-[44px] sm:min-h-0"><Users className="w-3.5 h-3.5" aria-hidden="true" />Team</Link>
            <Link href="/downloads" className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors py-1 min-h-[44px] sm:min-h-0"><Download className="w-3.5 h-3.5" aria-hidden="true" />Downloads</Link>
          </div>
        </div>

        {/* Utility Links Row */}
        <div className="mt-6">
          <div className="flex flex-wrap gap-4">
            <Link href="/publications" className="text-xs text-white/60 hover:text-white/80 transition-colors">Open Science Statement</Link>
            <Link href="/collaborate" className="text-xs text-white/60 hover:text-white/80 transition-colors">Data Access</Link>
            <Link href="/governance" className="text-xs text-white/60 hover:text-white/80 transition-colors">Research Ethics</Link>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 md:mt-16">
          <FooterNewsletter />
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <div className="flex flex-col items-center gap-4 text-xs text-white/60 md:flex-row md:justify-between">
            <p>(c) {new Date().getFullYear()} {brand.siteName}. All rights reserved.</p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
              <Link href="/privacy" className="inline-flex items-center gap-1 py-1 hover:text-white/80 transition-colors min-h-[44px] sm:min-h-0"><Lock className="w-3 h-3" aria-hidden="true" />Privacy Policy</Link>
              <Link href="/terms" className="inline-flex items-center gap-1 py-1 hover:text-white/80 transition-colors min-h-[44px] sm:min-h-0"><ScrollText className="w-3 h-3" aria-hidden="true" />Terms of Use</Link>
              <Link href="/sitemap-html" className="inline-flex items-center gap-1 py-1 hover:text-white/80 transition-colors min-h-[44px] sm:min-h-0"><MapPin className="w-3 h-3" aria-hidden="true" />Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
