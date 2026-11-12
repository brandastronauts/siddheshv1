/**
 * Role-based access helpers for Payload.
 *
 * Roles (lowest → highest privilege):
 *   reviewer     – read/comment on content assigned for review; no editing or publishing rights
 *   editor       – create and edit content
 *   admin        – everything an editor can do, plus publishing policy, user management and deletion
 *   super-admin  – platform administration (grants the admin role, settings, integrations)
 *
 * IMPORTANT: being logged in is NOT enough. Previously `isAdmin` returned true for any authenticated
 * user, which let reviewers/editors perform administrator actions.
 */

const RANK = { reviewer: 1, editor: 2, admin: 3, 'super-admin': 4 }

export const rankOf = (user) => RANK[user?.role] || 0

const atLeast = (min) => ({ req }) => rankOf(req?.user) >= RANK[min]

/** Any authenticated user (use sparingly — prefer a role helper). */
export const isAuthenticated = ({ req }) => Boolean(req?.user)

export const isReviewer = atLeast('reviewer')
export const isEditor = atLeast('editor')
export const isAdmin = atLeast('admin')
export const isSuperAdmin = atLeast('super-admin')

/** Exact-role check (kept for backwards compatibility). */
export const hasRole = (roles = []) => ({ req }) => {
  if (!req?.user) return false
  if (!roles.length) return true
  return roles.includes(req.user.role)
}

/** Public visitors see published documents only; reviewers, editors and admins may read drafts (reviewers need them to review). */
export const publishedOrEditor = ({ req }) => (isReviewer({ req }) ? true : { _status: { equals: 'published' } })

/** Admins can touch any user; everyone else only their own record. */
export const adminOrSelf = ({ req }) => {
  if (!req?.user) return false
  if (isAdmin({ req })) return true
  return { id: { equals: req.user.id } }
}
