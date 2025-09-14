'use server';

/**
 * @fileOverview A server action to create a payment intent using a specified payment provider.
 *
 * - createPayment - A function that initializes a payment.
 * - CreatePaymentInput - The input type for the createPayment function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { PaymentManager, PaymentData } from '@/services/payment';

const PaymentDataSchema = z.object({
  amount: z.number(),
  currency: z.string(),
  description: z.string(),
  customerEmail: z.string().email(),
  customerName: z.string(),
  successUrl: z.string().url(),
  cancelUrl: z.string().url(),
  failureUrl: z.string().url(),
  webhookUrl: z.string().url(),
});

const CreatePaymentInputSchema = z.object({
  provider: z.enum(['lygos', 'coolpay']),
  paymentData: PaymentDataSchema,
});
export type CreatePaymentInput = z.infer<typeof CreatePaymentInputSchema>;

export async function createPayment(input: CreatePaymentInput): Promise<any> {
  return createPaymentFlow(input);
}

const createPaymentFlow = ai.defineFlow(
  {
    name: 'createPaymentFlow',
    inputSchema: CreatePaymentInputSchema,
    outputSchema: z.any(),
  },
  async ({ provider, paymentData }) => {
    try {
      // Important: API keys are handled on the server-side in PaymentManager
      const paymentManager = new PaymentManager(provider);
      const result = await paymentManager.createPayment(paymentData as PaymentData);
      return result;
    } catch (error) {
      console.error(`Payment creation failed for provider ${provider}:`, error);
      // It's better to throw the error so the client can handle it.
      // We can also return a structured error object.
      const message = error instanceof Error ? error.message : 'An unknown error occurred during payment creation.';
      throw new Error(message);
    }
  }
);
