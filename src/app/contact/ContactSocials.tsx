'use client'

import { Linkedin, Twitter, Mail } from 'lucide-react'
import { brand } from '@/content/siteCore'

export default function ContactSocials() {
  const socialItems = [
    { icon: Linkedin, href: brand.socials.linkedin, label: 'LinkedIn', aria: 'Blue Blocks Micro Research Institute on LinkedIn', external: true },
    { icon: Twitter, href: brand.socials.twitter, label: 'X (Twitter)', aria: 'Blue Blocks Micro Research Institute on X (Twitter)', external: true },
    { icon: Mail, href: `mailto:${brand.socials.email}`, label: 'Email', aria: 'Email Blue Blocks Micro Research Institute', external: false },
  ]

  return (
    <section className="section-spacing bg-surface" aria-labelledby="contact-socials-heading">
      <div className="container-grid">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="contact-socials-heading" className="text-2xl md:text-3xl font-bold text-deep-ink mb-3">
            Connect With the Institute
          </h2>
          <p className="text-muted-foreground mb-8">
            Follow Blue Blocks Micro Research Institute across our official channels.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {socialItems.map(({ icon: Icon, href, label, aria, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                aria-label={aria}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border bg-background text-deep-ink hover:border-primary-navy hover:text-primary-navy transition-colors focus:outline-none focus:ring-2 focus:ring-accent-cyan/40 min-h-[44px]"
              >
                <Icon className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-medium">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
