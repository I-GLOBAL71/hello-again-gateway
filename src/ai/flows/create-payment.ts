/**
 * @fileOverview A server action to create a payment intent using a specified payment provider.
 *
 * - createPayment - A function that initializes a payment.
 * - CreatePaymentInput - The input type for the createPayment function.
 */
'use server';

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import type { AdminConfig, PaymentData, CreatePaymentInput } from '@/lib/types';


// --- Internal Payment Provider Logic ---
// This logic is kept within the 'use server' file to prevent it from leaking to the client.

const LYGOS_API_URLS = {
    baseUrl: 'https://api.lygosapp.com',
    endpoints: {
        createGateway: '/gateway/create-payment-gateway',
    }
};

const COOLPAY_API_URLS = {
    baseUrl: 'https://my-coolpay.com/api',
    endpoints: {
        createPayment: '/payments/create',
    }
};

interface PaymentProvider {
    createPayment(paymentData: PaymentData): Promise<any>;
}

class LygosProvider implements PaymentProvider {
    private config: AdminConfig;

    constructor(config: AdminConfig) {
        this.config = config;
    }

    async createPayment(paymentData: PaymentData): Promise<any> {
        if (!this.config.lygosApiKey || !this.config.lygosSecretKey) {
            console.warn("Lygos API keys not configured. Simulating successful payment response.");
            await new Promise(resolve => setTimeout(resolve, 1500));
            return Promise.resolve({
                success: true,
                message: "Payment gateway created successfully (Simulated)",
                gateway_id: `simulated_${crypto.randomUUID()}`,
                payment_url: paymentData.successUrl,
            });
        }

        const payload = {
            amount: paymentData.amount,
            currency: paymentData.currency,
            description: paymentData.description,
            customer: { email: paymentData.customerEmail, name: paymentData.customerName },
            redirect_urls: {
                success: paymentData.successUrl,
                cancel: paymentData.cancelUrl,
                failure: paymentData.failureUrl
            }
        };

        const response = await fetch(`${LYGOS_API_URLS.baseUrl}${LYGOS_API_URLS.endpoints.createGateway}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.config.lygosApiKey}`,
                'X-Secret-Key': this.config.lygosSecretKey
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorBody = await response.json();
            throw new Error(`Lygos API Error: ${errorBody.message || response.statusText}`);
        }
        return await response.json();
    }
}

class CoolPayProvider implements PaymentProvider {
    private config: AdminConfig;

    constructor(config: AdminConfig) {
        this.config = config;
    }
    
    async createPayment(paymentData: PaymentData): Promise<any> {
         if (!this.config.coolpayMerchantId || !this.config.coolpayApiKey) {
            console.warn("CoolPay API keys not configured. Simulating successful payment response.");
            await new Promise(resolve => setTimeout(resolve, 1500));
            return Promise.resolve({
                id: `simulated_${crypto.randomUUID()}`,
                payment_url: paymentData.successUrl,
            });
        }

        const payload = {
            merchant_id: this.config.coolpayMerchantId,
            amount: paymentData.amount,
            currency: paymentData.currency,
            description: paymentData.description,
            customer_email: paymentData.customerEmail,
            customer_name: paymentData.customerName,
            success_url: paymentData.successUrl,
            cancel_url: paymentData.cancelUrl,
            notify_url: paymentData.webhookUrl
        };

        const response = await fetch(`${COOLPAY_API_URLS.baseUrl}${COOLPAY_API_URLS.endpoints.createPayment}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.config.coolpayApiKey}`,
                'X-Merchant-ID': this.config.coolpayMerchantId
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorBody = await response.json();
            throw new Error(`CoolPay API Error: ${errorBody.message || response.statusText}`);
        }
        return await response.json();
    }
}

class PaymentManager {
    private providerInstance: PaymentProvider;

    constructor(provider: 'lygos' | 'coolpay', config: AdminConfig) {
        if (provider === 'lygos') {
            this.providerInstance = new LygosProvider(config);
        } else if (provider === 'coolpay') {
            this.providerInstance = new CoolPayProvider(config);
        } else {
            throw new Error('Unsupported payment provider');
        }
    }

    async createPayment(paymentData: PaymentData): Promise<any> {
        return await this.providerInstance.createPayment(paymentData);
    }
}


// --- Genkit Flow Definition ---

const CreatePaymentInputSchema = z.object({
  provider: z.enum(['lygos', 'coolpay']),
  paymentData: z.object({
      amount: z.number(),
      currency: z.string(),
      description: z.string(),
      customerEmail: z.string().email(),
      customerName: z.string(),
      successUrl: z.string().url(),
      cancelUrl: z.string().url(),
      failureUrl: z.string().url(),
      webhookUrl: z.string().url(),
  }),
  adminConfig: z.object({
    superAdminEmail: z.string().optional(),
    lygosApiKey: z.string().optional(),
    lygosSecretKey: z.string().optional(),
    coolpayMerchantId: z.string().optional(),
    coolpayApiKey: z.string().optional(),
    coolpaySecretKey: z.string().optional(),
    downloadPrice: z.string().optional(),
  }).nullable(),
});


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
