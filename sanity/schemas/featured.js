import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured menu category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Featured catgory name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      type: 'string',
      title: 'Short Description',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'restaurant',
      type: 'array',
      title: 'Restaurant',
      of: [{type: 'reference', to: {type: 'restaurant'}}],
    }),
    
  ],
});