'use server';

/**
 * @fileOverview Manages admin configuration settings using Firestore.
 *
 * - updateAdminConfig - Saves or updates the admin configuration.
 * - getAdminConfig - Retrieves the admin configuration.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
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
  return getAdminConfigFlow();
}

export async function updateAdminConfig(config: AdminConfig): Promise<{ success: boolean; }> {
  return updateAdminConfigFlow(config);
}


const getAdminConfigFlow = ai.defineFlow(
  {
    name: 'getAdminConfigFlow',
    outputSchema: AdminConfigSchema,
  },
  async () => {
    const docRef = doc(db, CONFIG_COLLECTION_ID, CONFIG_DOC_ID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return AdminConfigSchema.parse(docSnap.data());
    } else {
      // Return default/empty config if it doesn't exist
      return {
        lygosApiKey: '',
        lygosSecretKey: '',
        coolpayMerchantId: '',
        coolpayApiKey: '',
        coolpaySecretKey: '',
        downloadPrice: '4.99',
      };
    }
  }
);


const updateAdminConfigFlow = ai.defineFlow(
  {
    name: 'updateAdminConfigFlow',
    inputSchema: AdminConfigSchema,
    outputSchema: z.object({ success: z.boolean() }),
  },
  async (config) => {
    try {
      const docRef = doc(db, CONFIG_COLLECTION_ID, CONFIG_DOC_ID);
      await setDoc(docRef, config, { merge: true });
      return { success: true };
    } catch (error) {
      console.error("Error updating admin config in Firestore:", error);
      throw new Error("Failed to update configuration.");
    }
  }
);
