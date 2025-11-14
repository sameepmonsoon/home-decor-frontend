import { z } from 'zod';

export const productCategorySchema = z.discriminatedUnion('form_type', [
  // CREATE schema
  z.object({
    form_type: z.literal('create'),
    title: z.string().min(1, 'Product name is required').trim(),
    description: z.string().min(1, 'Description is required').trim(),
    parentId: z.number().min(1, 'Please select a category'),
    active: z.coerce.boolean().default(true),
  }),

  // UPDATE schema
  z.object({
    form_type: z.literal('update'),
    id: z.number().min(1, 'Category ID is required'),
    title: z.string().min(1, 'Product name is required').trim(),
    description: z.string().min(1, 'Description is required').trim(),
    parentId: z.number().min(1, 'Please select a category'),
    active: z.coerce.boolean().default(true),
  }),
]);

export type ProductCategoryFormValues = z.infer<typeof productCategorySchema>;
