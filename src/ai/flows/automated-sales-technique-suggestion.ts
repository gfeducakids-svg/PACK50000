'use server';
/**
 * @fileOverview An AI agent that analyzes sales data and suggests optimal times and techniques for automated selling.
 *
 * - automatedSalesTechniqueSuggestion - A function that suggests sales techniques.
 * - AutomatedSalesTechniqueSuggestionInput - The input type for the automatedSalesTechniqueSuggestion function.
 * - AutomatedSalesTechniqueSuggestionOutput - The return type for the automatedSalesTechniqueSuggestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AutomatedSalesTechniqueSuggestionInputSchema = z.object({
  salesData: z
    .string()
    .describe(
      'Historical sales data, including dates, times, products, and revenue.'
    ),
  productDescription: z.string().describe('Description of the product being sold.'),
  targetAudience: z.string().describe('Description of the target audience.'),
});
export type AutomatedSalesTechniqueSuggestionInput = z.infer<
  typeof AutomatedSalesTechniqueSuggestionInputSchema
>;

const AutomatedSalesTechniqueSuggestionOutputSchema = z.object({
  suggestedTechniques: z
    .string()
    .describe(
      'A list of suggested sales techniques and optimal times for automated selling.'
    ),
});
export type AutomatedSalesTechniqueSuggestionOutput = z.infer<
  typeof AutomatedSalesTechniqueSuggestionOutputSchema
>;

export async function automatedSalesTechniqueSuggestion(
  input: AutomatedSalesTechniqueSuggestionInput
): Promise<AutomatedSalesTechniqueSuggestionOutput> {
  return automatedSalesTechniqueSuggestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'automatedSalesTechniqueSuggestionPrompt',
  input: {schema: AutomatedSalesTechniqueSuggestionInputSchema},
  output: {schema: AutomatedSalesTechniqueSuggestionOutputSchema},
  prompt: `You are an expert sales strategist. Analyze the provided sales data, product description, and target audience to suggest optimal times and techniques for automated selling.

Sales Data: {{{salesData}}}
Product Description: {{{productDescription}}}
Target Audience: {{{targetAudience}}}

Based on this information, provide a list of suggested sales techniques and the best times to implement them to maximize revenue. Focus on automated selling strategies.
`,
});

const automatedSalesTechniqueSuggestionFlow = ai.defineFlow(
  {
    name: 'automatedSalesTechniqueSuggestionFlow',
    inputSchema: AutomatedSalesTechniqueSuggestionInputSchema,
    outputSchema: AutomatedSalesTechniqueSuggestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
