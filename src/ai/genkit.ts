/**
 * @fileoverview This file initializes the Genkit AI platform with the Google AI plugin.
 *
 * It configures Genkit to use the Google AI provider for generative AI capabilities.
 * The API key is sourced from environment variables for security.
 */

import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: process.env.GEMINI_API_KEY,
    }),
  ],
});
