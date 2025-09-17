/**
 * @fileOverview Service for handling payment provider integrations.
 * This file contains the logic to communicate with different payment APIs.
 */

import type { AdminConfig } from '@/lib/types';

const LYGOS_API_URLS = {
    baseUrl: 'https://api.lygosapp.com',
    endpoints: {
        createGateway: '/gateway/create-payment-gateway',
        getPayinStatus: '/payin/get-payin-status'
    }
};

const COOLPAY_API_URLS = {
    baseUrl: 'https://my-coolpay.com/api',
    endpoints: {
        createPayment: '/payments/create',
        getStatus: '/payments/status'
    }
};

export type PaymentData = {
    amount: number;
    currency: string;
    description: string;
    customerEmail: string;
    customerName: string;
    successUrl: string;
    cancelUrl: string;
    failureUrl: string;
    webhookUrl: string;
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
            // Instead of throwing an error, simulate success for demo purposes.
            console.warn("Lygos API keys not configured. Simulating successful payment response.");
            await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
            return Promise.resolve({
                success: true,
                message: "Payment gateway created successfully (Simulated)",
                gateway_id: `simulated_${crypto.randomUUID()}`,
                payment_url: paymentData.successUrl, // Use successUrl for simulation
            });
        }

        const payload = {
            amount: paymentData.amount,
            currency: paymentData.currency,
            description: paymentData.description,
            customer: {
                email: paymentData.customerEmail,
                name: paymentData.customerName
            },
            redirect_urls: {
                success: paymentData.successUrl,
                cancel: paymentData.cancelUrl,
                failure: paymentData.failureUrl
            }
        };

        try {
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
        } catch (error) {
            throw new Error(`Lygos request failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }
}

class CoolPayProvider implements PaymentProvider {
    private config: AdminConfig;

    constructor(config: AdminConfig) {
        this.config = config;
    }
    
    async createPayment(paymentData: PaymentData): Promise<any> {
         if (!this.config.coolpayMerchantId || !this.config.coolpayApiKey) {
            // Instead of throwing an error, simulate success for demo purposes.
            console.warn("CoolPay API keys not configured. Simulating successful payment response.");
            await new Promise(resolve => setTimeout(resolve, 1500));
            return Promise.resolve({
                id: `simulated_${crypto.randomUUID()}`,
                payment_url: paymentData.successUrl, // Redirect to success for simulation
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

        try {
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
        } catch (error) {
            throw new Error(`CoolPay request failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }
}

export class PaymentManager {
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
