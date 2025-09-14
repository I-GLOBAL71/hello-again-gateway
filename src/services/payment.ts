/**
 * @fileOverview Service for handling payment provider integrations.
 * This file contains the logic to communicate with different payment APIs.
 */

// Configuration for Lygos App
const LYGOS_CONFIG = {
    baseUrl: 'https://api.lygosapp.com',
    endpoints: {
        createGateway: '/gateway/create-payment-gateway',
        getPayinStatus: '/payin/get-payin-status'
    },
    apiKey: process.env.LYGOS_API_KEY,
    secretKey: process.env.LYGOS_SECRET_KEY
};

// Configuration for My-CoolPay
const COOLPAY_CONFIG = {
    baseUrl: 'https://my-coolpay.com/api', // Note: Corrected base URL
    endpoints: {
        createPayment: '/payments/create',
        getStatus: '/payments/status'
    },
    merchantId: process.env.COOLPAY_MERCHANT_ID,
    apiKey: process.env.COOLPAY_API_KEY,
    secretKey: process.env.COOLPAY_SECRET_KEY
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
    async createPayment(paymentData: PaymentData): Promise<any> {
        if (!LYGOS_CONFIG.apiKey || !LYGOS_CONFIG.secretKey) {
            throw new Error('Lygos API keys are not configured.');
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
            const response = await fetch(`${LYGOS_CONFIG.baseUrl}${LYGOS_CONFIG.endpoints.createGateway}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${LYGOS_CONFIG.apiKey}`,
                    'X-Secret-Key': LYGOS_CONFIG.secretKey
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
    async createPayment(paymentData: PaymentData): Promise<any> {
         if (!COOLPAY_CONFIG.merchantId || !COOLPAY_CONFIG.apiKey) {
            throw new Error('CoolPay API keys are not configured.');
        }

        const payload = {
            merchant_id: COOLPAY_CONFIG.merchantId,
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
            const response = await fetch(`${COOLPAY_CONFIG.baseUrl}${COOLPAY_CONFIG.endpoints.createPayment}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${COOLPAY_CONFIG.apiKey}`,
                    'X-Merchant-ID': COOLPAY_CONFIG.merchantId
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

    constructor(provider: 'lygos' | 'coolpay') {
        if (provider === 'lygos') {
            this.providerInstance = new LygosProvider();
        } else if (provider === 'coolpay') {
            this.providerInstance = new CoolPayProvider();
        } else {
            throw new Error('Unsupported payment provider');
        }
    }

    async createPayment(paymentData: PaymentData): Promise<any> {
        return await this.providerInstance.createPayment(paymentData);
    }
}
