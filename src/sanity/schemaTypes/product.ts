import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "originalPrice",
      title: "Original Price",
      type: "number",
      description: "Original price before discount (optional)",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "inStock",
      title: "In Stock",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "quantity",
      title: "Quantity",
      type: "number",
      initialValue: 10,
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      initialValue: 4.5,
      validation: (Rule) => Rule.min(0).max(5),
    }),
    defineField({
      name: "reviews",
      title: "Reviews Count",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "specifications",
      title: "Specifications",
      type: "object",
      fields: [
        defineField({
          name: "entries",
          title: "Entries",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "key",
                  title: "Key",
                  type: "string",
                }),
                defineField({
                  name: "value",
                  title: "Value",
                  type: "string",
                }),
              ],
            },
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "image",
    },
  },
});
