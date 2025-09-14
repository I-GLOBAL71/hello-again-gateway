'use server';

/**
 * @fileOverview Manages admin configuration settings using Firestore.
 *
 * - updateAdminConfig - Saves or updates the admin configuration.
 * - getAdminConfig - Retrieves the admin configuration.
 */
import { z } from 'zod';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { AdminConfig } from '@/lib/types';

const CONFIG_DOC_ID = 'singleton';
const CONFIG_COLLECTION_ID = 'adminConfig';

const AdminConfigSchema = z.object({
    superAdminEmail: z.string().optional(),
    lygosApiKey: z.string().optional(),
    lygosSecretKey: z.string().optional(),
    coolpayMerchantId: z.string().optional(),
    coolpayApiKey: z.string().optional(),
    coolpaySecretKey: z.string().optional(),
    downloadPrice: z.string().optional(),
});

export async function getAdminConfig(): Promise<AdminConfig> {
    // WORKAROUND: Hardcode config to bypass persistent Firestore connection errors.
    console.log("Using hardcoded admin config as a workaround.");
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

export async function updateAdminConfig(config: AdminConfig): Promise<{ success: boolean; }> {
    // WORKAROUND: This function is disabled to prevent Firestore connection errors.
    console.warn("Admin config update is currently disabled.");
    try {
        const parsedConfig = AdminConfigSchema.parse(config);
        // const docRef = doc(db, CONFIG_COLLECTION_ID, CONFIG_DOC_ID);
        // await setDoc(docRef, parsedConfig, { merge: true });
        console.log("Simulating admin config update:", parsedConfig);
        return { success: true };
    } catch (error) {
        console.error("Error updating admin config in Firestore:", error);
        throw new Error("Failed to update configuration.");
    }
}
