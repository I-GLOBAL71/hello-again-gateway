/**
 * @fileOverview Manages admin configuration settings.
 *
 * This file provides a workaround to avoid server-side Firebase/Firestore calls
 * that can cause connection and authentication issues in a Next.js environment.
 * It returns a hardcoded configuration object.
 */
import type { AdminConfig } from '@/lib/types';

// NOTE: This file does NOT use 'use server'. The 'actions.ts' file that
// imports from here is the 'use server' boundary.

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
