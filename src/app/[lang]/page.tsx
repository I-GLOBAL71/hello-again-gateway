import Link from 'next/link';
import { templates } from '@/lib/templates';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CvPreview } from '@/components/cv/CvPreview';
import { CVData } from '@/lib/types';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';

const previewData: CVData = {
  personalInfo: {
    name: 'Your Name',
    title: 'Professional Title',
    email: 'your.email@example.com',
    phone: '123-456-7890',
    address: 'City, Country',
  },
  summary: 'A brief professional summary about yourself, your skills, and your career goals.',
  experience: [
    {
      id: 'exp1',
      company: 'Company Name',
      role: 'Job Title',
      startDate: 'YYYY',
      endDate: 'YYYY',
      description: '• Key responsibilities and achievements.',
    },
  ],
  education: [
    {
      id: 'edu1',
      institution: 'University Name',
      degree: 'Degree',
      startDate: 'YYYY',
      endDate: 'YYYY',
      description: '• Relevant coursework or honors.',
    },
  ],
  skills: 'Skill 1, Skill 2, Skill 3',
};


export default async function Home({ params: { lang } }: { params: { lang: Locale }}) {
  const dictionary = await getDictionary(lang);

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12 md:py-20">
        <header className="text-center mb-16">
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary">
            {dictionary.home.title}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {dictionary.home.subtitle}
          </p>
        </header>

        <section>
          <h2 className="font-headline text-3xl md:text-4xl font-semibold text-center mb-10">
            {dictionary.home.chooseTemplate}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {templates.map((template) => (
              <Link
                href={`/${lang}/editor/${template.id}`}
                key={template.id}
                className="group block"
              >
                <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 ease-in-out group-hover:shadow-2xl group-hover:-translate-y-1 border-2 border-transparent group-hover:border-primary bg-card">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="font-headline text-xl">
                        {template.name}
                      </CardTitle>
                      {template.isNew && <Badge variant="destructive">{dictionary.home.newBadge}</Badge>}
                    </div>
                    <p className="text-sm text-muted-foreground pt-1">{dictionary.templates[template.id as keyof typeof dictionary.templates]}</p>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                     <div className="aspect-[210/297] w-full overflow-hidden rounded-lg bg-white shadow-lg pointer-events-none">
                        <div className="scale-[0.2] origin-top-left w-[500%] h-[500%]">
                            <CvPreview cvData={previewData} templateId={template.id} />
                        </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <footer className="text-center py-6 border-t mt-16">
        <p className="text-sm text-muted-foreground">
          {dictionary.home.footer.replace('{year}', new Date().getFullYear().toString())}
        </p>
      </footer>
    </div>
  );
}
