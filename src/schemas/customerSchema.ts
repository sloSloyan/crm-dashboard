import { z } from 'zod';

export const customerSchema = z.object({
  customerName: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  
  company: z.string()
    .min(1, 'Company is required'),
  
  phoneNumber: z.string()
    .regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number'),
  
  email: z.string()
    .email('Invalid email address'),
  
  country: z.string()
    .min(1, 'Country is required'),
  
//   status: z.enum(['Active', 'Inactive'])
});

export type CustomerFormData = z.infer<typeof customerSchema>;