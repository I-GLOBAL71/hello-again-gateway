
import Link from 'next/link';
import { templates } from '@/lib/templates';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CvPreview } from '@/components/cv/CvPreview';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import { Auth } from '@/components/auth/Auth';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';
import { previewDataSets } from '@/lib/preview-data';


export default async function Home({ params: { lang } }: { params: { lang: Locale }}) {
  const dictionary = await getDictionary(lang);

  return (
    <div className="min-h-screen bg-background">
      <header className="absolute top-0 right-0 p-4 no-print">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" asChild>
            <Link href={`/${lang}/admin`}>
              <User className="mr-2"/>
              Admin
            </Link>
          </Button>
          <Auth dictionary={dictionary.auth} />
        </div>
      </header>
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-16">
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary">
            {dictionary.home.title}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {dictionary.home.subtitle}
          </p>
        </div>

        <section>
          <h2 className="font-headline text-3xl md:text-4xl font-semibold text-center mb-10">
            {dictionary.home.chooseTemplate}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {templates.map((template) => {
                const previewData = previewDataSets[template.id as keyof typeof previewDataSets] || previewDataSets.default;
                return (
                  <Link
                    href={`/${lang}/editor/${template.id}`}
                    key={template.id}
                    className="group block no-print"
                  >
                    <Card className="overflow-hidden flex flex-col transition-all duration-300 ease-in-out group-hover:shadow-2xl group-hover:-translate-y-1 border-2 border-transparent group-hover:border-primary bg-card">
                      <CardHeader>
                        <div className="flex justify-between items-center">
                          <CardTitle className="font-headline text-xl">
                            {template.name}
                          </CardTitle>
                          {template.isNew && <Badge variant="destructive">{dictionary.home.newBadge}</Badge>}
                        </div>
                        <p className="text-sm text-muted-foreground pt-1">{dictionary.templates[template.id as keyof typeof dictionary.templates]}</p>
                      </CardHeader>
                      <CardContent className="p-0">
                         <div className="print-wrapper w-full pointer-events-none bg-white">
                            <div className="scale-[0.35] origin-top-left w-[285.7%] h-auto">
                                <CvPreview cvData={previewData} templateId={template.id} />
                            </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
            })}
          </div>
        </section>
      </main>
      <footer className="text-center py-6 border-t mt-16 no-print">
        <p className="text-sm text-muted-foreground">
          {dictionary.home.footer.replace('{year}', new Date().getFullYear().toString())}
        </p>
      </footer>
    </div>
  );
}


