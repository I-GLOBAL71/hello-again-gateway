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
  
  // We fetch the config on the client side now to avoid server-side issues.
  let adminConfig = null;
  try {
    adminConfig = await getAdminConfig();
  } catch (error) {
    console.error("Failed to load admin config in layout:", error);
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
