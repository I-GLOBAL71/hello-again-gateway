/**
 * @fileOverview Formats user-provided CV information using AI according to a template's guidelines.
 *
 * - aiAssistedFormatting - A function that formats user-provided CV information using AI.
 * - AiAssistedFormattingInput - The input type for the aiAssistedFormatting function.
 * - AiAssistedFormattingOutput - The return type for the aiAssistedFormatting function.
 */
'use server';
import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import type { AiAssistedFormattingInput, AiAssistedFormattingOutput } from '@/lib/types';


const AiAssistedFormattingInputSchema = z.object({
  templateName: z.string().describe('The name of the CV template to use for formatting.'),
  rawText: z.string().describe('The raw, unformatted text of the CV information.'),
});

const AiAssistedFormattingOutputSchema = z.object({
  formattedText: z.string().describe('The AI-formatted text of the CV information.'),
});

export async function aiAssistedFormatting(input: AiAssistedFormattingInput): Promise<AiAssistedFormattingOutput> {
  return aiAssistedFormattingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiAssistedFormattingPrompt',
  input: {schema: AiAssistedFormattingInputSchema},
  output: {schema: AiAssistedFormattingOutputSchema},
  prompt: `You are an AI assistant that formats raw text for a CV based on a specified template.

  The user will provide the template name and the raw text, you should format the raw text according to the template specified.
  Template Name: {{{templateName}}}
  Raw Text: {{{rawText}}}
  `,
});

const aiAssistedFormattingFlow = ai.defineFlow(
  {
    name: 'aiAssistedFormattingFlow',
    inputSchema: AiAssistedFormattingInputSchema,
    outputSchema: AiAssistedFormattingOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
