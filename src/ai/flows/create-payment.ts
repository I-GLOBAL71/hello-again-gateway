'use server';

/**
 * @fileOverview A server action to create a payment intent using a specified payment provider.
 *
 * - createPayment - A function that initializes a payment.
 * - CreatePaymentInput - The input type for the createPayment function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { PaymentManager, PaymentData } from '@/services/payment';
import { getAdminConfig } from './admin-config';

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
      const adminConfig = await getAdminConfig();
      const paymentManager = new PaymentManager(provider, adminConfig);
      const result = await paymentManager.createPayment(paymentData as PaymentData);
      return result;
    } catch (error) {
      console.error(`Payment creation failed for provider ${provider}:`, error);
      const message = error instanceof Error ? error.message : 'An unknown error occurred during payment creation.';
      throw new Error(message);
    }
  }
);