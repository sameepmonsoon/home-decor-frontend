import z from 'zod';

const dimensionsSchema = z.object({
  height: z.number().positive('Height must be greater than 0'),
  width: z.number().positive('Width must be greater than 0'),
  depth: z.number().positive('Depth must be greater than 0'),
  seatHeight: z.number().positive().optional(),
  weight: z.number().positive().optional(),
});

const variantSchema = z.object({
  color: z.string().min(1),
  size: z.string().optional(),
  quantity: z.number().min(0),
  imageId: z.number().optional(),
  dimensions: dimensionsSchema,
});

export const productSchema = z.object({
  name: z.string().min(1, 'Product name is required').trim(),
  description: z.string().min(1, 'Description is required').trim(),
  modelNumber: z.string().trim().optional(),
  price: z.number().positive('Price must be greater than 0'),
  images: z.array(z.number().int().positive()).optional(),
  category: z.string().min(1, 'Category is required'),
  finishType: z.string().trim().optional(),
  adjustableHeadrest: z.boolean().optional(),
  maxLoad: z.number().int().positive().optional(),
  warrantySummary: z.string().trim().optional(),
  salesPackage: z.string().trim().optional(),
  variants: z.array(variantSchema).min(1, 'At least one variant is required'),
});

export type ProductFormValues = z.infer<typeof productSchema>;
