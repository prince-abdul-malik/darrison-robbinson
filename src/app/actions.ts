'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

type ContactInquiry = z.infer<typeof contactSchema>;

export async function handleContactInquiry(
  inquiry: ContactInquiry
): Promise<{ success: boolean; message: string }> {

  const parsedData = contactSchema.safeParse(inquiry);

  if (!parsedData.success) {
    return { success: false, message: 'Invalid data provided.' };
  }

  console.log('Received contact inquiry:', parsedData.data);

  // In a real application, you would add your email-sending logic here
  // using a library like Nodemailer.
  //
  // Example with Nodemailer:
  //
  // 1. Install Nodemailer: `npm install nodemailer`
  // 2. Configure a transporter:
  //
  // const nodemailer = require('nodemailer');
  // const transporter = nodemailer.createTransport({
  //   host: 'smtp.example.com',
  //   port: 587,
  //   secure: false, // true for 465, false for other ports
  //   auth: {
  //     user: process.env.EMAIL_USER, // your email user from .env.local
  //     pass: process.env.EMAIL_PASS, // your email password from .env.local
  //   },
  // });
  //
  // 3. Send the email:
  //
  // try {
  //   await transporter.sendMail({
  //     from: '"Your Website" <noreply@yourwebsite.com>',
  //     to: 'darrioncalabasas@gmail.com',
  //     subject: `New Inquiry from ${parsedData.data.name}`,
  //     html: `<p>Name: ${parsedData.data.name}</p>
  //            <p>Email: ${parsedData.data.email}</p>
  //            <p>Message: ${parsedData.data.message}</p>`,
  //   });
  //
  //   return { success: true, message: 'Inquiry sent successfully.' };
  //
  // } catch (error) {
  //   console.error("Failed to send email:", error);
  //   return { success: false, message: 'Failed to send inquiry.' };
  // }

  // For now, we'll just simulate a successful submission.
  return {
    success: true,
    message: 'Your inquiry has been received! I will get back to you shortly.',
  };
}
