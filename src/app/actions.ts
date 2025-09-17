/**
 * @fileOverview This file acts as a centralized facade for all server actions.
 * By using the 'use server' directive at the top of this file, all exported
 * functions are automatically treated as server actions by Next.js. This avoids
 * scattering 'use server' directives across multiple files and prevents
 * bundling issues.
 */
'use server';

import type { AdminConfig } from '@/lib/types';
import type { AiAssistedFormattingInput, AiAssistedFormattingOutput } from '@/lib/types';
import type { CreatePaymentInput } from '@/lib/types';
import type { SummarizeCvInput, SummarizeCvOutput } from '@/lib/types';

// We import the actual implementations and re-export them from this
// single server actions entry point.
import { aiAssistedFormatting as aiAssistedFormattingFlow } from '@/ai/flows/ai-assisted-formatting';
import { createPayment as createPaymentFlow } from '@/ai/flows/create-payment';
import { summarizeCv as summarizeCvFlow } from '@/ai/flows/cv-summary';

// --- Admin Config Actions (Simulated) ---

export const getAdminConfig = async (): Promise<AdminConfig> => {
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

export const updateAdminConfig = async (config: AdminConfig): Promise<{ success: boolean; }> => {
    console.warn("Admin config update is simulated and does not persist data.");
    console.log("Simulating admin config update with:", config);
    return Promise.resolve({ success: true });
};


// --- Genkit Flow Actions ---

export async function aiAssistedFormatting(input: AiAssistedFormattingInput): Promise<AiAssistedFormattingOutput> {
  return aiAssistedFormattingFlow(input);
}

export async function createPayment(input: CreatePaymentInput): Promise<any> {
  return createPaymentFlow(input);
}

export async function summarizeCv(input: SummarizeCvInput): Promise<SummarizeCvOutput> {
  return summarizeCvFlow(input);
}
