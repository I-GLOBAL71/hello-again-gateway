'use server';

import type { AdminConfig } from '@/lib/types';

export async function getAdminConfig(): Promise<AdminConfig> {
    console.log("Fetching admin config (simulated).");
    // In a real app, this would fetch from a database or a secure config file.
    return Promise.resolve({
        lygosApiKey: process.env.LYGOS_API_KEY || '',
        lygosSecretKey: process.env.LYGOS_SECRET_KEY || '',
        coolpayMerchantId: process.env.COOLPAY_MERCHANT_ID || '',
        coolpayApiKey: process.env.COOLPAY_API_KEY || '',
        coolpaySecretKey: process.env.COOLPAY_SECRET_KEY || '',
        downloadPrice: process.env.NEXT_PUBLIC_DOWNLOAD_PRICE || '4.99',
    });
};

export async function updateAdminConfig(config: AdminConfig): Promise<{ success: boolean; }> {
    // This is a simulation. In a real app, you would securely save this configuration.
    // IMPORTANT: Never log secret keys in production.
    console.warn("Admin config update is simulated and does not persist data.");
    console.log("Simulating admin config update with new values.");
    return Promise.resolve({ success: true });
};

export async function verifyAdminPassword(password: string): Promise<{ success: boolean }> {
    const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin";
    if (password === adminPassword) {
        return { success: true };
    }
    return { success: false };
}
