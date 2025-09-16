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
import type { AdminConfig } from '@/lib/types';

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

const AdminConfigSchema = z.object({
    superAdminEmail: z.string().optional(),
    lygosApiKey: z.string().optional(),
    lygosSecretKey: z.string().optional(),
    coolpayMerchantId: z.string().optional(),
    coolpayApiKey: z.string().optional(),
    coolpaySecretKey: z.string().optional(),
    downloadPrice: z.string().optional(),
});


const CreatePaymentInputSchema = z.object({
  provider: z.enum(['lygos', 'coolpay']),
  paymentData: PaymentDataSchema,
  adminConfig: AdminConfigSchema,
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
  async ({ provider, paymentData, adminConfig }) => {
    // The error handling is now more robust within the service itself.
    // The flow will just pass the result or error up to the client.
    const paymentManager = new PaymentManager(provider, adminConfig);
    const result = await paymentManager.createPayment(paymentData as PaymentData);
    return result;
  }
);
