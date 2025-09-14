
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import AdminPageContent from './AdminPageContent';

export default async function AdminPage({ params }: { params: { lang: Locale }}) {
    const dictionary = await getDictionary(params.lang);
    return <AdminPageContent dictionary={dictionary.admin} />
}
