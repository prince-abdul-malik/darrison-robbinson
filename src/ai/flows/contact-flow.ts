'use server';
/**
 * @fileOverview This file defines the flow for handling a contact inquiry.
 * It uses Genkit to structure the input and output, and in a real-world scenario,
 * it would orchestrate sending an email to the agent.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

export const ContactInquirySchema = z.object({
  name: z.string().describe('The full name of the person making the inquiry.'),
  email: z
    .string()
    .email()
    .describe('The email address of the person making the inquiry.'),
  message: z.string().describe('The message content of the inquiry.'),
});

export type ContactInquiry = z.infer<typeof ContactInquirySchema>;

export const contactFlow = ai.defineFlow(
  {
    name: 'contactFlow',
    inputSchema: ContactInquirySchema,
    outputSchema: z.object({
      success: z.boolean(),
      message: z.string(),
    }),
  },
  async (inquiry) => {
    console.log('Received contact inquiry:', inquiry);

    // In a real application, you would add your email-sending logic here.
    // For example, using a service like Nodemailer, SendGrid, or Resend.
    //
    // Example with a hypothetical email service:
    //
    // try {
    //   await emailService.send({
    //     to: 'darrioncalabasas@gmail.com',
    //     from: 'noreply@yourwebsite.com',
    //     subject: `New Inquiry from ${inquiry.name}`,
    //     html: `<p>Name: ${inquiry.name}</p>
    //            <p>Email: ${inquiry.email}</p>
    //            <p>Message: ${inquiry.message}</p>`,
    //   });
    //   return { success: true, message: "Inquiry sent successfully." };
    // } catch (error) {
    //   console.error("Failed to send email:", error);
    //   return { success: false, message: "Failed to send inquiry." };
    // }

    // For this example, we'll just simulate a successful submission.
    return {
      success: true,
      message:
        'Your inquiry has been received! I will get back to you shortly.',
    };
  }
);

export async function handleContactInquiry(
  inquiry: ContactInquiry
): Promise<{success: boolean; message: string}> {
  return await contactFlow(inquiry);
}
