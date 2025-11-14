import z from 'zod';

// Base schema for checkout (common fields)
export const CheckoutBaseSchema = z.object({
  firstName: z
    .string()
    .transform(str => str.trim()) // trim white spaces
    .pipe(
      // use  pipe, you can first remove the white spaces and then perform additional validations
      z
        .string()
        .min(2, 'First name cannot be empty')
        .max(72, 'First name must be less than 72 characters')
        .regex(/^[A-Za-z\s]+$/, 'First name can only contain letters and spaces')
    ),
  lastName: z
    .string()
    .transform(str => str.trim()) // trim white spaces
    .pipe(
      // use  pipe, you can first remove the white spaces and then perform additional validations
      z
        .string()
        .min(2, 'Last name must be at least 2 characters')
        .max(72, 'Last name must be less than 72 characters')
        .regex(/^[A-Za-z\s]+$/, 'Last name can only contain letters and spaces')
    ),
  email: z.email('Please enter a valid email'),
  phoneNumber: z
    .string()
    .min(7, 'Phone number must be at least 7 digits')
    .regex(/^[0-9+\-() ]+$/, 'Please enter a valid phone number'),
  country: z.string().min(1, 'Country is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State/Province is required'),
  addressLine: z.string().min(1, 'Address line is required'),
  landmark: z.string().min(1, 'Landmark is required'),
  postalCode: z.string().min(4, 'Postal code is required'),
});

// Schema extension for card-based payments
const CardFields = z.object({
  cardNumber: z.string().min(16, 'Card number must be at least 16 digits'),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, {
    message: 'Expiry date must be in MM/YY format',
  }),
  cvv: z.string().min(3, 'CVV must be at least 3 digits'),
  nameOnCard: z.string().min(1, 'Name on card is required'),
});

// Checkout discriminated schema
export const CheckoutWithPaymentSchema = z.discriminatedUnion('paymentMethod', [
  CheckoutBaseSchema.merge(CardFields).extend({
    paymentMethod: z.literal('Visa'),
  }),
  CheckoutBaseSchema.merge(CardFields).extend({
    paymentMethod: z.literal('Mastercard'),
  }),
  CheckoutBaseSchema.merge(CardFields).extend({
    paymentMethod: z.literal('Stripe'),
  }),
  CheckoutBaseSchema.extend({
    paymentMethod: z.literal('PayPal'),
  }),
]);

export type CheckoutSchemaType = z.infer<typeof CheckoutWithPaymentSchema>;
