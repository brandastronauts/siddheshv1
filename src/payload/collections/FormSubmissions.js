import { isAdmin } from '../access/isAdmin.js'

export const FormSubmissions = {
  slug: 'form-submissions',
  admin: {
    useAsTitle: 'formName',
    defaultColumns: ['formName', 'email', 'createdAt'],
    group: 'Operations',
  },
  access: {
    read: isAdmin,
    create: () => true,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    { name: 'formName', type: 'text', required: true },
    { name: 'email', type: 'email' },
    { name: 'name', type: 'text' },
    { name: 'payload', type: 'json', required: true },
    { name: 'sourcePath', type: 'text' },
  ],
}
