import { z } from 'zod';

export const updateAccountDetailSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.email('Please enter a valid email'),
  phoneNumber: z
    .string()
    .min(7, 'Phone number must be at least 7 digits')
    .regex(/^[0-9+\-() ]+$/, 'Please enter a valid phone number'),
  // country: z.string().min(1, 'Country is required'),
  // city: z.string().min(1, 'City is required'),
  // state: z.string().min(1, 'State/Province is required'),
  // addressLine: z.string().min(1, 'Address line is required'),
  // landmark: z.string().min(1, 'Landmark is required'),
  // postalCode: z.string().min(4, 'Postal code is required'),
});

export const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, 'Current password is required!'),
    newPassword: z.string().min(1, 'New password is required!'),
    confirmNewPassword: z.string().min(1, 'Confirm new password is required!'),
  })
  .refine(data => data.newPassword === data.confirmNewPassword, {
    message: "Passwords don't match",
    path: ['confirmNewPassword'],
  });

export type UpdateAccountDetailSchemaType = z.infer<typeof updateAccountDetailSchema>;
export type ChangePasswordSchemaType = z.infer<typeof changePasswordSchema>;

export const updateBillingDetailSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Please enter a valid email'),
  phoneNumber: z
    .string()
    .min(7, 'Phone number must be at least 7 digits')
    .regex(/^[0-9+\-() ]+$/, 'Please enter a valid phone number'),

  // Address details
  country: z.string().min(1, 'Country is required'),
  state: z.string().min(1, 'State/Province is required'),
  city: z.string().min(1, 'City is required'),
  streetAddress1: z.string().min(1, 'Street address 1 is required'),
  streetAddress2: z.string().optional(),
  address: z.string().optional(),
  zipCode: z.string().min(4, 'ZIP / Postal code is required'),

  // Default address flag
  default: z.boolean(),
});

export type UpdateBillingDetailSchemaType = z.infer<typeof updateBillingDetailSchema>;

export const updateShippingSchema = z.object({
  country: z.string().min(1, 'Country is required'),
  state: z.string().min(1, 'State/Province is required'),
  city: z.string().min(1, 'City is required'),
  addressLine1: z.string().min(1, 'Street address 1 is required'),
  addressLine2: z.string().optional(),
  postalCode: z.string().min(4, 'Postal code is required'),
  default: z.boolean(),
});

export type UpdateShippingSchemaType = z.infer<typeof updateShippingSchema>;
