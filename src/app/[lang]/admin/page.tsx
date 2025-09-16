
import { Locale } from '@/i18n-config';
import AdminPageContent from './AdminPageContent';
import { getDictionary } from '@/get-dictionary';

// This is a server component by default.
// It fetches the dictionary and passes it to the client component.
export default async function AdminPage({ params }: { params: { lang: Locale } }) {
    const dictionary = await getDictionary(params.lang);
    return <AdminPageContent dictionary={dictionary.admin} />
}
