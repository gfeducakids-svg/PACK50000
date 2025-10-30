'use server';

/**
 * @fileOverview Generates dynamic mockups of sublimation designs on various products.
 *
 * - generateDynamicMockup - A function that handles the dynamic mockup generation process.
 * - GenerateDynamicMockupInput - The input type for the generateDynamicMockup function.
 * - GenerateDynamicMockupOutput - The return type for the generateDynamicMockup function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateDynamicMockupInputSchema = z.object({
  designTheme: z.string().describe('The theme of the sublimation design (e.g., heroes, pets, christian, special dates).'),
  productType: z.string().describe('The type of product the design will be applied to (e.g., caneca, camiseta, chinelo, squeeze).'),
});
export type GenerateDynamicMockupInput = z.infer<typeof GenerateDynamicMockupInputSchema>;

const GenerateDynamicMockupOutputSchema = z.object({
  mockupDataUri: z.string().describe('A data URI containing the generated mockup image, with a MIME type and Base64 encoding.'),
});
export type GenerateDynamicMockupOutput = z.infer<typeof GenerateDynamicMockupOutputSchema>;

export async function generateDynamicMockup(input: GenerateDynamicMockupInput): Promise<GenerateDynamicMockupOutput> {
  return generateDynamicMockupFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateDynamicMockupPrompt',
  input: {schema: GenerateDynamicMockupInputSchema},
  output: {schema: GenerateDynamicMockupOutputSchema},
  prompt: `You are an expert in generating realistic product mockups for sublimation designs.

  Based on the provided theme and product type, create a visually appealing mockup image.

  Theme: {{{designTheme}}}
  Product Type: {{{productType}}}

  The mockup should showcase the design applied to the specified product in a realistic and attractive manner.
  Return the generated image as a data URI with a MIME type and Base64 encoding.

  Ensure the data URI is properly formatted as 'data:<mimetype>;base64,<encoded_data>'.
  `,
});

const generateDynamicMockupFlow = ai.defineFlow(
  {
    name: 'generateDynamicMockupFlow',
    inputSchema: GenerateDynamicMockupInputSchema,
    outputSchema: GenerateDynamicMockupOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      model: 'googleai/imagen-4.0-fast-generate-001',
      prompt: `Create a realistic mockup of a ${input.productType} featuring a sublimation design with the theme: ${input.designTheme}.`,
    });

    if (!media || !media.url) {
      throw new Error('Failed to generate mockup image.');
    }
    return {mockupDataUri: media.url};
  }
);
