'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface NavLinkCompatProps {
  href?: string
  to?: string
  className?: string
  activeClassName?: string
  pendingClassName?: string
  children?: React.ReactNode
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, href, to, children }, ref) => {
    const pathname = usePathname()
    const destination = href || to || '/'
    const isActive = pathname === destination

    return (
      <Link
        ref={ref}
        href={destination}
        className={cn(className, isActive ? activeClassName : '')}
      >
        {children}
      </Link>
    )
  },
)

NavLink.displayName = 'NavLink'

export { NavLink }
export default NavLink
