'use server';

/**
 * @fileOverview Manages admin configuration settings.
 *
 * This file provides a workaround to avoid server-side Firebase/Firestore calls
 * that can cause connection and authentication issues in a Next.js environment.
 * It returns a hardcoded configuration object.
 */
import type { AdminConfig } from '@/lib/types';


// This function is async to maintain signature compatibility with a potential
// future implementation that would fetch data from a database.
export async function getAdminConfig(): Promise<AdminConfig> {
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
}

// This function simulates an update and is async for signature compatibility.
export async function updateAdminConfig(config: AdminConfig): Promise<{ success: boolean; }> {
    console.warn("Admin config update is simulated and does not persist data.");
    // In a real application, you would parse and save the config to a database.
    console.log("Simulating admin config update with:", config);
    return { success: true };
}
