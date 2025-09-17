'use server';

/**
 * @fileOverview Manages admin configuration settings.
 *
 * This file provides a workaround to avoid server-side Firebase/Firestore calls
 * that can cause connection and authentication issues in a Next.js environment.
 * It returns a hardcoded configuration object.
 */
import type { AdminConfig } from '@/lib/types';


export const getAdminConfig = async (): Promise<AdminConfig> => {
    console.log("Using hardcoded admin config to prevent server-side Firebase issues.");
    return {
        superAdminEmail: 'fabricewilliam71@gmail.com',
        lygosApiKey: '',
        lygosSecretKey: '',
        coolpayMerchantId: '',
        coolpayApiKey: '',
        coolpaySecretKey: '',
        downloadPrice: '4.99',
    };
};

export const updateAdminConfig = async (config: AdminConfig): Promise<{ success: boolean; }> => {
    console.warn("Admin config update is simulated and does not persist data.");
    console.log("Simulating admin config update with:", config);
    return { success: true };
};
