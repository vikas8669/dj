import { z } from 'zod';

export const bookingFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Full name must be at least 2 characters.' })
    .max(60, { message: 'Name cannot exceed 60 characters.' }),
  mobileNumber: z
    .string()
    .regex(/^[6-9]\d{9}$/, {
      message: 'Please enter a valid 10-digit Indian mobile number (e.g. 9646669649).',
    }),
  eventType: z
    .string()
    .min(1, { message: 'Please select an event type.' }),
  eventDate: z
    .string()
    .min(1, { message: 'Please select an event date.' })
    .refine((dateStr) => {
      const selected = new Date(dateStr);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selected >= today;
    }, { message: 'Event date cannot be in the past.' }),
  eventLocation: z
    .string()
    .min(2, { message: 'Event venue or city is required (e.g. Phagwara).' }),
  eventRequirements: z.string().optional(),
  additionalMessage: z.string().optional(),
});

export type BookingFormData = z.infer<typeof bookingFormSchema>;
