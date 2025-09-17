import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import AdminPageContent from './AdminPageContent';
import { getAdminConfig } from '@/app/actions';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default async function AdminPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  
  try {
    const initialConfig = await getAdminConfig();
    return <AdminPageContent dictionary={dictionary} initialConfig={initialConfig} />;
  } catch (error) {
    console.error("Failed to load admin configuration:", error);
    return (
        <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4">
            <Card className="w-full max-w-md text-center">
              <CardHeader>
                <CardTitle className="text-destructive">
                  Configuration Error
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Failed to load the admin configuration. Please check the server logs and try again later.</p>
              </CardContent>
            </Card>
        </div>
    );
  }
}
