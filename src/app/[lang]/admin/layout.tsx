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
  
  // getAdminConfig now returns a hardcoded value on the server to prevent errors.
  // The real check and client-side fetch is handled in AdminLayoutContent.
  const adminConfig = await getAdminConfig();

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
