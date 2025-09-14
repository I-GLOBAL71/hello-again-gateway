import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import { getAdminConfig } from '@/ai/flows/admin-config';
import AdminLayoutContent from './AdminLayoutContent';

export default async function AdminLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang);
  
  let adminConfig = null;
  try {
    adminConfig = await getAdminConfig();
  } catch (error) {
    console.error("Failed to load admin config in layout:", error);
    // We pass null to the client, which will handle showing a loading/error state.
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