export const isAdmin = ({ req }) => Boolean(req.user)

export const hasRole = (roles = []) => ({ req }) => {
  if (!req.user) return false
  if (!roles.length) return true
  return roles.includes(req.user.role)
}

export const isEditor = ({ req }) => {
  if (!req.user) return false
  return ['admin', 'editor'].includes(req.user.role)
}
