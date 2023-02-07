import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: ' Restaurant Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      type: 'string',
      title: ' Short Description',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image of the Restaurant',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lat',
      type: 'number',
      title: 'latitude of the Restaurant',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'long',
      type: 'number',
      title: 'long of the Restaurant',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      type: 'string',
      title: ' Restaurant address',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      type: 'number',
      title: 'enter a Rating from (1-5 stars)',
      validation: (Rule) =>
       Rule.required()
       .min(1)
       .max(5)
       .error('Rating must be between 1 and 5'),
    }),
    defineField({
      name: 'type',
      title: 'Category',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{type: 'category'}],
    }),
    defineField({
      name: 'dises',
      type: 'array',
      title: 'Dishes',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    }),

  ],

  
})
