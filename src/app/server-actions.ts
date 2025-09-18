'use server';

import type { AdminConfig } from '@/lib/types';

export async function verifyAdminPassword(password: string): Promise<{ success: boolean }> {
    const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin";
    if (password === adminPassword) {
        return { success: true };
    }
    return { success: false };
}

// Note: These functions are simple and don't involve Genkit flows.
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
