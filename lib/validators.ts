import { z } from 'zod';
import { formatNumberWithDecimal } from './utils';

const currency = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
    'Price must have two decimal places'
  );

// Schema for inserting products
export const insertProductsSchema = z.object({
  name: z.string().min(3, 'Name must have at least 3 characters'),
  slug: z.string().min(3, 'Slug must have at least 3 characters'),
  category: z.string().min(3, 'Category must have at least 3 characters'),
  brand: z.string().min(3, 'Brand must have at least 3 characters'),
  description: z.string().min(3, 'Description must have at least 3 characters'),
  stock: z.coerce.number(),
  images: z.array(z.string()).min(1, 'Product must have at least one image'),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: currency,
});