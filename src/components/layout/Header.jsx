'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import { nav as staticNav, brand as staticBrand } from '../../content/siteCore'
import { getIcon } from '../../lib/iconMap'

/* ─── Desktop child row (with optional fly-out for grandchildren) ── */
const DesktopChildRow = ({ child, pathname, closeAll }) => {
  const [flyoutOpen, setFlyoutOpen] = useState(false)
  const timeout = useRef(null)
  const ChildIcon = getIcon(child.icon)
  const active = pathname === child.path
  const grandActive = child.grandchildren?.some((g) => pathname === g.path)
  const hasFlyout = Array.isArray(child.grandchildren) && child.grandchildren.length > 0

  const enter = () => { clearTimeout(timeout.current); setFlyoutOpen(true) }
  const leave = () => { timeout.current = setTimeout(() => setFlyoutOpen(false), 120) }

  useEffect(() => () => clearTimeout(timeout.current), [])

  const rowClass = `flex items-center gap-2 px-3 py-2.5 text-sm rounded-md transition-colors w-full ${
    active || grandActive
      ? 'text-primary-navy bg-primary-navy/5 font-medium'
      : 'text-muted-foreground hover:text-deep-ink hover:bg-surface'
  }`

  if (!hasFlyout) {
    return (
      <Link
        href={child.path}
        role="menuitem"
        onClick={closeAll}
        {...(child.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className={rowClass}
      >
        {ChildIcon && <ChildIcon className="w-3.5 h-3.5" aria-hidden="true" />}
        {child.label}
      </Link>
    )
  }

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <Link
        href={child.path}
        role="menuitem"
        aria-haspopup="menu"
        aria-expanded={flyoutOpen}
        onFocus={enter}
        onBlur={leave}
        onClick={closeAll}
        {...(child.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className={`${rowClass} justify-between`}
      >
        <span className="inline-flex items-center gap-2">
          {ChildIcon && <ChildIcon className="w-3.5 h-3.5" aria-hidden="true" />}
          {child.label}
        </span>
        <ChevronRight className="w-3 h-3 text-muted-foreground" aria-hidden="true" />
      </Link>

      <AnimatePresence>
        {flyoutOpen && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute top-0 left-full ml-1 min-w-[200px] bg-popover border border-border rounded-lg shadow-lg p-1 z-50"
          >
            {child.grandchildren.map((g) => {
              const GIcon = getIcon(g.icon)
              const gActive = pathname === g.path
              return (
                <Link
                  key={g.path}
                  href={g.path}
                  role="menuitem"
                  onClick={closeAll}
                  {...(g.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className={`flex items-center gap-2 px-3 py-2.5 text-sm rounded-md transition-colors ${
                    gActive
                      ? 'text-primary-navy bg-primary-navy/5 font-medium'
                      : 'text-muted-foreground hover:text-deep-ink hover:bg-surface'
                  }`}
                >
                  {GIcon && <GIcon className="w-3.5 h-3.5" aria-hidden="true" />}
                  {g.label}
                </Link>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ─── Desktop Dropdown ─────────────────────────────────────────────── */
const DesktopDropdown = ({ item, isActive }) => {
  const [open, setOpen] = useState(false)
  const timeout = useRef(null)
  const pathname = usePathname()
  const id = `dropdown-${item.path.replace(/\//g, '-')}`

  const enter = () => { clearTimeout(timeout.current); setOpen(true) }
  const leave = () => { timeout.current = setTimeout(() => setOpen(false), 150) }
  const closeAll = () => setOpen(false)

  useEffect(() => () => clearTimeout(timeout.current), [])

  const childActive = item.children?.some(
    (c) => pathname === c.path || c.grandchildren?.some((g) => pathname === g.path)
  )

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <Link
        href={item.path}
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
        {(() => { const I = getIcon(item.icon); return I ? <I className="w-3.5 h-3.5" aria-hidden="true" /> : null })()}
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
            {item.children.map((child) => (
              <DesktopChildRow
                key={child.path}
                child={child}
                pathname={pathname}
                closeAll={closeAll}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ─── Mobile child row (with optional nested accordion for grandchildren) ─ */
const MobileChildRow = ({ child, closeMobileMenu }) => {
  const [expanded, setExpanded] = useState(false)
  const pathname = usePathname()
  const ChildIcon = getIcon(child.icon)
  const isActive = pathname === child.path
  const grandActive = child.grandchildren?.some((g) => pathname === g.path)
  const hasGrand = Array.isArray(child.grandchildren) && child.grandchildren.length > 0
  const id = `mobile-sub-${child.path.replace(/\//g, '-')}`

  const baseClass = `flex-1 flex items-center gap-2 px-4 py-3 text-base font-medium rounded-xl transition-colors min-h-[44px] ${
    isActive || grandActive
      ? 'text-primary-navy bg-primary-navy/5'
      : 'text-muted-foreground hover:text-deep-ink hover:bg-surface'
  }`

  if (!hasGrand) {
    return (
      <Link
        href={child.path}
        role="menuitem"
        onClick={closeMobileMenu}
        {...(child.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className={baseClass}
      >
        {ChildIcon && <ChildIcon className="w-4 h-4" aria-hidden="true" />}
        {child.label}
      </Link>
    )
  }

  return (
    <div>
      <div className="flex items-center">
        <Link
          href={child.path}
          role="menuitem"
          onClick={closeMobileMenu}
          {...(child.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className={baseClass}
        >
          {ChildIcon && <ChildIcon className="w-4 h-4" aria-hidden="true" />}
          {child.label}
        </Link>
        <button
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-controls={id}
          aria-label={`${expanded ? 'Collapse' : 'Expand'} ${child.label} submenu`}
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
              {child.grandchildren.map((g) => {
                const GIcon = getIcon(g.icon)
                const gActive = pathname === g.path
                return (
                  <Link
                    key={g.path}
                    href={g.path}
                    role="menuitem"
                    onClick={closeMobileMenu}
                    {...(g.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className={`flex items-center gap-2 px-4 py-3 text-sm font-medium rounded-xl transition-colors min-h-[44px] ${
                      gActive
                        ? 'text-primary-navy bg-primary-navy/5'
                        : 'text-muted-foreground hover:text-deep-ink hover:bg-surface'
                    }`}
                  >
                    {GIcon && <GIcon className="w-3.5 h-3.5" aria-hidden="true" />}
                    {g.label}
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ─── Mobile Accordion Item ────────────────────────────────────────── */
const MobileAccordionItem = ({ item, closeMobileMenu }) => {
  const [expanded, setExpanded] = useState(false)
  const pathname = usePathname()
  const id = `mobile-dd-${item.path.replace(/\//g, '-')}`
  const isActive = pathname === item.path
  const childActive = item.children?.some((c) => pathname === c.path)

  return (
    <div>
      <div className="flex items-center">
        <Link
          href={item.path}
          onClick={closeMobileMenu}
          {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className={`flex-1 px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 flex items-center gap-2 ${
            isActive || childActive
              ? 'text-primary-navy bg-primary-navy/5'
              : 'text-muted-foreground hover:text-deep-ink hover:bg-surface'
          }`}
        >
          {(() => { const I = getIcon(item.icon); return I ? <I className="w-4 h-4" aria-hidden="true" /> : null })()}
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
              {item.children.map((child) => (
                <MobileChildRow
                  key={child.path}
                  child={child}
                  closeMobileMenu={closeMobileMenu}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* Remove nav items (and their children/grandchildren) whose path is hidden. */
const filterNavByHiddenPaths = (items, hiddenPaths) => {
  if (!hiddenPaths || hiddenPaths.length === 0) return items
  const hidden = new Set(hiddenPaths)
  const walk = (list) =>
    (list || [])
      .filter((item) => !hidden.has(item.path))
      .map((item) => ({
        ...item,
        children: item.children ? walk(item.children) : item.children,
        grandchildren: item.grandchildren ? walk(item.grandchildren) : item.grandchildren,
      }))
  return walk(items)
}

/* ─── Header ───────────────────────────────────────────────────────── */
const Header = ({ nav: navProp, brand: brandProp, pageVisibility }) => {
  const rawNav = navProp || staticNav
  const brand = brandProp || staticBrand
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const hiddenHeaderPaths = pageVisibility?.[pathname]?.hideHeader || []
  const nav = filterNavByHiddenPaths(rawNav, hiddenHeaderPaths)

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container-grid">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="h-12 md:h-14 w-12 md:w-14 rounded-lg bg-white flex items-center justify-center overflow-hidden border border-border/20">
              <img
                src={brand.logoUrl || '/logo.png'}
                alt={brand.siteName}
                className="h-11 md:h-12 w-11 md:w-12 object-contain"
                width={48}
                height={48}
                fetchPriority="high"
                decoding="async"
                loading="eager"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[13px] md:text-sm font-bold text-deep-ink group-hover:text-primary-navy transition-colors tracking-tight">
                Blue Blocks
              </span>
              <span className="text-[9px] md:text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.08em]">
                {brand.headerTagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1" aria-label="Main navigation">
            {nav.map((item) => {
              const isActive = pathname === item.path

              if (item.children?.length) {
                return <DesktopDropdown key={item.path} item={item} isActive={isActive} />
              }

              const linkProps = item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
              const className = `px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 inline-flex items-center gap-1.5 ${
                isActive
                  ? 'text-primary-navy bg-primary-navy/5'
                  : 'text-muted-foreground hover:text-deep-ink hover:bg-surface'
              }`
              const icon = (() => { const I = getIcon(item.icon); return I ? <I className="w-3.5 h-3.5" aria-hidden="true" /> : null })()

              return item.path === '/' ? (
                <a key={item.path} href="/" className={className}>
                  {icon}{item.label}
                </a>
              ) : (
                <Link key={item.path} href={item.path} className={className} {...linkProps}>
                  {icon}{item.label}
                </Link>
              )
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl hover:bg-surface transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
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
            className="xl:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl"
          >
            <nav className="container-grid py-4" aria-label="Mobile navigation">
              <div className="flex flex-col gap-1">
                {nav.map((item) => {
                  if (item.children?.length) {
                    return (
                      <MobileAccordionItem
                        key={item.path}
                        item={item}
                        closeMobileMenu={closeMobileMenu}
                      />
                    )
                  }

                  const isActive = pathname === item.path
                  const linkProps = item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
                  const className = `px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 flex items-center gap-2 min-h-[44px] ${
                    isActive
                      ? 'text-primary-navy bg-primary-navy/5'
                      : 'text-muted-foreground hover:text-deep-ink hover:bg-surface'
                  }`
                  const icon = (() => { const I = getIcon(item.icon); return I ? <I className="w-4 h-4" aria-hidden="true" /> : null })()

                  return item.path === '/' ? (
                    <a key={item.path} href="/" onClick={closeMobileMenu} className={className}>
                      {icon}{item.label}
                    </a>
                  ) : (
                    <Link key={item.path} href={item.path} onClick={closeMobileMenu} className={className} {...linkProps}>
                      {icon}{item.label}
                    </Link>
                  )
                })}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
