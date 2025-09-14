import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import { getAdminConfig } from '@/ai/flows/admin-config';
import AdminLayoutContent from './AdminLayoutContent';
import type { AdminConfig } from '@/lib/types';

export default async function AdminLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang);
  
  let adminConfig: AdminConfig | null = null;
  try {
    // Try fetching on the server. If it fails, we'll let the client handle it.
    adminConfig = await getAdminConfig();
  } catch (error) {
    console.error("Failed to load admin config in layout (server-side):", error);
    // It's okay to proceed with null, the client will try to fetch it.
  }


  return (
    <AdminLayoutContent
      dictionary={dictionary}
      adminConfig={adminConfig}
      lang={lang}
    >
      {children}
    </AdminLayoutContent>
  );
}
