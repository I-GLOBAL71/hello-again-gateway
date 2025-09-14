import Link from 'next/link';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default async function AdminLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang);

  return (
    <div className="min-h-screen bg-muted/30">
        <header className="bg-background border-b">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                 <h1 className="text-xl font-semibold font-headline">
                    {dictionary.admin.title}
                 </h1>
                 <Button variant="outline" asChild>
                    <Link href={`/${lang}`}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        {dictionary.admin.backToHome}
                    </Link>
                 </Button>
            </div>
        </header>
        <main className="container mx-auto px-4 py-8">
            {children}
        </main>
    </div>
  );
}
