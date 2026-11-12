import { isAdmin, isSuperAdmin, adminOrSelf, rankOf } from '../access/isAdmin.js'

export const Users = {
  slug: 'users',
  auth: true,
  // Without explicit access rules Payload lets ANY logged-in user list, create, promote and delete users.
  access: {
    read: adminOrSelf,
    create: isAdmin,
    update: ({ req, id }) => (isAdmin({ req }) ? true : Boolean(req.user && String(req.user.id) === String(id))),
    delete: ({ req, id }) => isAdmin({ req }) && String(req.user?.id) !== String(id),
  },
  hooks: {
    beforeValidate: [
      ({ data, req, operation }) => {
        // Only a super-admin may grant admin/super-admin; an admin may grant editor/reviewer.
        const requested = data?.role
        if (requested && (operation === 'create' || operation === 'update') && req?.user) {
          const needsSuper = requested === 'admin' || requested === 'super-admin'
          if (needsSuper && !isSuperAdmin({ req })) {
            throw new Error('Only a super-admin can assign the admin or super-admin role.')
          }
          if (rankOf(req.user) < rankOf({ role: requested })) {
            throw new Error('You cannot assign a role higher than your own.')
          }
        }
        return data
      },
    ],
  },
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'name', 'updatedAt'],
    description: 'CMS administrators for content editing access.',
    group: 'Administration',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Full Name',
      admin: {
        placeholder: 'e.g. Priya Nair',
      },
    },
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'editor',
      access: {
        // Nobody edits their own privileges; only administrators change roles.
        create: ({ req }) => isAdmin({ req }),
        update: ({ req }) => isAdmin({ req }),
      },
      options: [
        { label: 'Super Admin', value: 'super-admin' },
        { label: 'Admin', value: 'admin' },
        { label: 'Editor', value: 'editor' },
        { label: 'Research Reviewer', value: 'reviewer' },
      ],
      admin: {
        position: 'sidebar',
        description: 'Controls access to privileged CMS operations.',
      },
    },
  ],
}
