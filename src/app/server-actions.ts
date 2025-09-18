'use server';

import type { AdminConfig } from '@/lib/types';

// In-memory store for the admin configuration
let inMemoryConfig: AdminConfig = {
    superAdminEmail: 'fabricewilliam71@gmail.com',
    lygosApiKey: '',
    lygosSecretKey: '',
    coolpayMerchantId: '',
    coolpayApiKey: '',
    coolpaySecretKey: '',
    downloadPrice: '4.99',
};


export async function verifyAdminPassword(password: string): Promise<{ success: boolean }> {
    const adminPassword = process.env.ADMIN_PASSWORD || "admin";
    if (password === adminPassword) {
        return { success: true };
    }
    return { success: false };
}

export async function getAdminConfig(): Promise<AdminConfig> {
    console.log("Fetching admin config from in-memory store.");
    return Promise.resolve(inMemoryConfig);
};

export async function updateAdminConfig(config: AdminConfig): Promise<{ success: boolean; }> {
    console.log("Updating in-memory admin config with:", config);
    inMemoryConfig = config;
    return Promise.resolve({ success: true });
};
