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
            // Using safeParse to handle potential mismatches without crashing
            const parsed = AdminConfigSchema.safeParse(docSnap.data());
            if (parsed.success) {
                return parsed.data;
            }
        }
        // Return default/empty config if it doesn't exist or parsing fails
        return {
            lygosApiKey: '',
            lygosSecretKey: '',
            coolpayMerchantId: '',
            coolpayApiKey: '',
            coolpaySecretKey: '',
            downloadPrice: '4.99',
        };
    } catch (error) {
        console.error("Error fetching admin config from Firestore:", error);
        // Throw a more specific error or handle it as needed
        throw new Error("Failed to retrieve configuration from database.");
    }
}

export async function updateAdminConfig(config: AdminConfig): Promise<{ success: boolean; }> {
    try {
        // Validate the incoming config object
        const parsedConfig = AdminConfigSchema.parse(config);
        const docRef = doc(db, CONFIG_COLLECTION_ID, CONFIG_DOC_ID);
        await setDoc(docRef, parsedConfig, { merge: true });
        return { success: true };
    } catch (error) {
        console.error("Error updating admin config in Firestore:", error);
        // This will be caught by the client-side and can be shown in a toast
        throw new Error("Failed to update configuration.");
    }
}
