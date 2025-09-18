import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getDictionary } from '@/get-dictionary';
import { i18n, type Locale } from '@/i18n-config';
import { CheckCircle, Home } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function PaymentSuccessPage({ params: { lang } }: { params: { lang: Locale }}) {
  const dictionary = await getDictionary(lang);
  const paymentDict = dictionary.editor;

  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center shadow-2xl animate-in fade-in zoom-in-95">
        <CardHeader className="bg-green-500 text-white rounded-t-lg py-8">
          <div className="mx-auto bg-white/20 rounded-full p-3 w-fit">
            <CheckCircle className="h-16 w-16" />
          </div>
          <CardTitle className="mt-4 text-2xl font-bold">{paymentDict.paymentSuccessTitle}</CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <p className="text-muted-foreground mb-6">{paymentDict.paymentSuccessMessage}</p>
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
