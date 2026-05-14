'use client'

import { Linkedin, Twitter, Mail } from 'lucide-react'
import { brand } from '@/content/siteCore'

const socialItems = [
  {
    icon: Linkedin,
    href: brand.socials?.linkedin ?? '#',
    label: 'LinkedIn',
    description: 'Follow the Institute on LinkedIn',
    color: 'hover:text-[#0077B5] hover:border-[#0077B5]/30',
  },
  {
    icon: Twitter,
    href: brand.socials?.twitter ?? '#',
    label: 'X (Twitter)',
    description: 'Follow the Institute on X',
    color: 'hover:text-foreground hover:border-border',
  },
  {
    icon: Mail,
    href: `mailto:${brand.socials?.email ?? brand.contact.research}`,
    label: 'Email',
    description: brand.socials?.email ?? brand.contact.research,
    color: 'hover:text-accent-cyan hover:border-accent-cyan/30',
  },
]

export default function ContactSocials() {
  return (
    <section className="section-spacing bg-surface">
      <div className="container-grid">
        <h2 className="text-2xl font-bold text-deep-ink mb-2 text-center">Follow the Institute</h2>
        <p className="text-muted-foreground text-sm text-center mb-8">Stay connected with our research updates and announcements.</p>
        <div className="flex flex-wrap justify-center gap-4 max-w-lg mx-auto">
          {socialItems.map(({ icon: Icon, href, label, description, color }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              aria-label={label}
              className={`flex flex-col items-center gap-2 p-5 rounded-xl border border-border/50 bg-background text-muted-foreground transition-colors ${color} group min-w-[120px]`}
            >
              <Icon className="w-6 h-6" aria-hidden="true" />
              <span className="text-sm font-medium">{label}</span>
              <span className="text-xs text-center opacity-70 group-hover:opacity-100 break-all">{description}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
