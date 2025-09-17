'use server';

/**
 * This file acts as a safe, centralized re-exporter for all Server Actions (Genkit flows).
 * Client components should import server actions from this file ONLY.
 * This avoids bundling server-side code into the client and prevents hydration/initialization errors.
 */

export { getAdminConfig, updateAdminConfig } from '@/ai/flows/admin-config';
export { aiAssistedFormatting } from '@/ai/flows/ai-assisted-formatting';
export { createPayment } from '@/ai/flows/create-payment';
export { summarizeCv } from '@/ai/flows/cv-summary';
