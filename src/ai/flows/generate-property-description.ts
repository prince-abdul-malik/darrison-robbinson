
'use server';

/**
 * @fileOverview AI-powered property description generator.
 *
 * - generatePropertyDescription - A function that generates property descriptions based on input details and tone.
 * - GeneratePropertyDescriptionInput - The input type for the generatePropertyDescription function.
 * - GeneratePropertyDescriptionOutput - The return type for the generatePropertyDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePropertyDescriptionInputSchema = z.object({
  propertyDetails: z
    .string()
    .describe('Detailed information about the property including size, number of rooms, key features, and location.'),
  tone: z
    .string()
    .describe(
      'The desired tone of the property description, e.g., professional, friendly, luxurious.'
    ),
});
export type GeneratePropertyDescriptionInput = z.infer<
  typeof GeneratePropertyDescriptionInputSchema
>;

const GeneratePropertyDescriptionOutputSchema = z.object({
  description: z.string().describe('The generated property description.'),
});
export type GeneratePropertyDescriptionOutput = z.infer<
  typeof GeneratePropertyDescriptionOutputSchema
>;

export async function generatePropertyDescription(
  input: GeneratePropertyDescriptionInput
): Promise<GeneratePropertyDescriptionOutput> {
  return generatePropertyDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePropertyDescriptionPrompt',
  input: {schema: GeneratePropertyDescriptionInputSchema},
  output: {schema: GeneratePropertyDescriptionOutputSchema},
  prompt: `You are a professional real estate copywriter.

  Generate a compelling property description based on the following details, and tailor the tone to match the user's request. The generated description should be engaging and persuasive.

  Property Details: {{{propertyDetails}}}
  Tone: {{{tone}}}
  `,
});

const generatePropertyDescriptionFlow = ai.defineFlow(
  {
    name: 'generatePropertyDescriptionFlow',
    inputSchema: GeneratePropertyDescriptionInputSchema,
    outputSchema: GeneratePropertyDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
