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
  ],
}

