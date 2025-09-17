/**
 * @fileOverview This file serves as a central hub for all server-side actions (Server Actions)
 * in the application. By exporting all server functions from this single file,
 * we establish a clear boundary between server and client code.
 *
 * This approach prevents server-only dependencies from being inadvertently
 * bundled with client-side code, which can cause errors like "Module not found: 'async_hooks'".
 *
 * The 'use server' directive at the top of this file marks all exported
 * functions as Server Actions.
 *
 * @see https://nextjs.org/docs/app/building-your-application/rendering/server-components#server-actions
 */
'use server';

import { aiAssistedFormatting } from '@/ai/flows/ai-assisted-formatting';
import { createPayment } from '@/ai/flows/create-payment';
import { summarizeCv } from '@/ai/flows/cv-summary';
import type { AdminConfig } from '@/lib/types';


// Note: These functions are kept here as they are simple and don't involve Genkit flows.
// If they were to become more complex, they could be moved to their own files under e.g., `src/app/lib/config-actions.ts`
// and re-exported from here.
export async function getAdminConfig(): Promise<AdminConfig> {
    console.log("Fetching admin config (simulated).");
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


// Re-exporting all Genkit flows to be used as Server Actions
export { aiAssistedFormatting, createPayment, summarizeCv };
