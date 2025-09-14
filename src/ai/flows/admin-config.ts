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
    try {
        const docRef = doc(db, CONFIG_COLLECTION_ID, CONFIG_DOC_ID);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            // Combine fetched data with defaults to ensure all keys are present
            const data = docSnap.data();
            return {
                superAdminEmail: data.superAdminEmail || 'fabricewilliam71@gmail.com',
                lygosApiKey: data.lygosApiKey || '',
                lygosSecretKey: data.lygosSecretKey || '',
                coolpayMerchantId: data.coolpayMerchantId || '',
                coolpayApiKey: data.coolpayApiKey || '',
                coolpaySecretKey: data.coolpaySecretKey || '',
                downloadPrice: data.downloadPrice || '4.99',
            };
        }
        
        // Return a complete default object if the document doesn't exist
        return {
            superAdminEmail: 'fabricewilliam71@gmail.com',
            lygosApiKey: '',
            lygosSecretKey: '',
            coolpayMerchantId: '',
            coolpayApiKey: '',
            coolpaySecretKey: '',
            downloadPrice: '4.99',
        };
    } catch (error) {
        console.error("Error fetching admin config from Firestore:", error);
        throw new Error("Failed to retrieve configuration from database.");
    }
}

export async function updateAdminConfig(config: AdminConfig): Promise<{ success: boolean; }> {
    try {
        const parsedConfig = AdminConfigSchema.parse(config);
        const docRef = doc(db, CONFIG_COLLECTION_ID, CONFIG_DOC_ID);
        await setDoc(docRef, parsedConfig, { merge: true });
        return { success: true };
    } catch (error) {
        console.error("Error updating admin config in Firestore:", error);
        throw new Error("Failed to update configuration.");
    }
}