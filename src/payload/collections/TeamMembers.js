import { isEditor } from '../access/isAdmin.js'
import { slugField, seoFields } from '../fields/common.js'

export const TeamMembers = {
  slug: 'team-members',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'role', 'group', 'updatedAt'],
    group: 'People',
    hidden: true,
  },
  access: {
    read: () => true,
    create: isEditor,
    update: isEditor,
    delete: isEditor,
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    slugField('name'),
    { name: 'role', type: 'text' },
    {
      name: 'group',
      type: 'select',
      defaultValue: 'research',
      options: [
        { label: 'Research Team', value: 'research' },
        { label: 'Governance Team', value: 'governance' },
        { label: 'Advisor', value: 'advisor' },
        { label: 'Student Cohort', value: 'student-cohort' },
      ],
    },
    { name: 'email', type: 'email' },
    { name: 'image', type: 'upload', relationTo: 'media' },
    { name: 'bio', type: 'textarea' },
    {
      name: 'socials',
      type: 'array',
      fields: [
        { name: 'type', type: 'text' },
        { name: 'label', type: 'text' },
        { name: 'href', type: 'text' },
      ],
    },
    ...seoFields,
  ],
}
