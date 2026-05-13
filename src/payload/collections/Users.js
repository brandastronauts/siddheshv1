export const Users = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'name', 'updatedAt'],
    description: 'CMS administrators for content editing access.',
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
        update: ({ req }) => req.user?.role === 'admin' || !req.user?.role,
      },
      options: [
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
