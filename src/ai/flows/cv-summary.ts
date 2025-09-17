/**
 * @fileOverview Summarizes the content of a CV into a short professional summary paragraph.
 *
 * - summarizeCv - A function that summarizes the CV content.
 * - SummarizeCvInput - The input type for the summarizeCv function.
 * - SummarizeCvOutput - The return type for the summarizeCv function.
 */
'use server';
import {ai} from '@/ai/genkit';
import {z} from 'genkit';


const SummarizeCvInputSchema = z.object({
  cvContent: z
    .string()
    .describe('The complete text content of the CV to be summarized.'),
});
export type SummarizeCvInput = z.infer<typeof SummarizeCvInputSchema>;


const SummarizeCvOutputSchema = z.object({
  summary: z
    .string()
    .describe(
      'A short, professional summary paragraph of the CV content.'
    ),
});
export type SummarizeCvOutput = z.infer<typeof SummarizeCvOutputSchema>;


export async function summarizeCv(input: SummarizeCvInput): Promise<SummarizeCvOutput> {
  return summarizeCvFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeCvPrompt',
  input: {schema: SummarizeCvInputSchema},
  output: {schema: SummarizeCvOutputSchema},
  prompt: `You are an expert resume writer. Please summarize the following CV content into a short, professional summary paragraph.  The summary should be no more than 3-4 sentences.

CV Content:
{{{cvContent}}}`,
});

const summarizeCvFlow = ai.defineFlow(
  {
    name: 'summarizeCvFlow',
    inputSchema: SummarizeCvInputSchema,
    outputSchema: SummarizeCvOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
