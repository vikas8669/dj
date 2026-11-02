import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  phone: z.string().regex(/^[6-9]\d{9}$/, {
    message: 'Please enter a valid 10-digit Indian mobile number.',
  }),
  subject: z.string().min(2, { message: 'Subject is required.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
