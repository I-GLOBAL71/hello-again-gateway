import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getDictionary } from '@/get-dictionary';
import { i18n, type Locale } from '@/i18n-config';
import { XCircle, Home } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function PaymentCancelPage({ params: { lang } }: { params: { lang: Locale }}) {
  const dictionary = await getDictionary(lang);
  
  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center shadow-lg animate-in fade-in zoom-in-95">
        <CardHeader className="py-8">
           <XCircle className="h-20 w-20 text-muted-foreground/50 mx-auto" />
          <CardTitle className="mt-4 text-2xl font-bold">Paiement Annulé</CardTitle>
        </CardHeader>
        <CardContent className="p-8 pt-0">
          <p className="text-muted-foreground mb-6">Le processus de paiement a été annulé. Vous n'avez pas été débité.</p>
          <Button asChild className="w-full">
            <Link href={`/${lang}`}>
              <Home className="mr-2" />
              Retour à l'accueil
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
