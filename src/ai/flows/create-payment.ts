/**
 * @fileOverview A server action to create a payment intent using a specified payment provider.
 *
 * - createPayment - A function that initializes a payment.
 * - CreatePaymentInput - The input type for the createPayment function.
 */
'use server';
import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { PaymentManager } from '@/services/payment';
import type { AdminConfig, PaymentData } from '@/lib/types';


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
  adminConfig: AdminConfigSchema.nullable(),
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
    if (!adminConfig) {
      // If adminConfig is null, we can't proceed with a real payment.
      // We'll simulate a success response for development/testing purposes.
      console.warn("Admin config not provided to createPaymentFlow. Simulating successful payment response.");
      await new Promise(resolve => setTimeout(resolve, 1000));
      return {
        success: true,
        message: "Payment gateway created successfully (Simulated)",
        payment_url: paymentData.successUrl,
      };
    }
    
    const paymentManager = new PaymentManager(provider, adminConfig);
    const result = await paymentManager.createPayment(paymentData as PaymentData);
    return result;
  }
);