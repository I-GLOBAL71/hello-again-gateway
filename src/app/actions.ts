'use server';

/**
 * This file acts as a safe, centralized re-exporter for all Server Actions (Genkit flows).
 * Client components should import server actions from this file ONLY.
 * This avoids bundling server-side code into the client and prevents hydration/initialization errors.
 */

import type { AdminConfig } from '@/lib/types';

// Moved from ai/flows/admin-config.ts to resolve build issues.
export async function getAdminConfig(): Promise<AdminConfig> {
    return Promise.resolve({
        superAdminEmail: 'fabricewilliam71@gmail.com',
        lygosApiKey: '',
        lygosSecretKey: '',
        coolpayMerchantId: '',
        coolpayApiKey: '',
        coolpaySecretKey: '',
        downloadPrice: '4.99',
    });
};

export async function updateAdminConfig(config: AdminConfig): Promise<{ success: boolean; }> {
    console.warn("Admin config update is simulated and does not persist data.");
    console.log("Simulating admin config update with:", config);
    return Promise.resolve({ success: true });
};


export { aiAssistedFormatting } from '@/ai/flows/ai-assisted-formatting';
export { createPayment } from '@/ai/flows/create-payment';
export { summarizeCv } from '@/ai/flows/cv-summary';
