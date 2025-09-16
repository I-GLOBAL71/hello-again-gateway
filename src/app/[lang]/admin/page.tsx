import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import AdminPageContent from './AdminPageContent';

export default async function AdminPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return <AdminPageContent dictionary={dictionary} />;
}
