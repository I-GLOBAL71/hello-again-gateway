import Link from 'next/link';
import Image from 'next/image';
import { templates } from '@/lib/templates';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12 md:py-20">
        <header className="text-center mb-16">
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary">
            CVGenius
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Craft a stunning, professional CV in minutes. Choose a template and
            let our AI assist you.
          </p>
        </header>

        <section>
          <h2 className="font-headline text-3xl md:text-4xl font-semibold text-center mb-10">
            Choose Your Template
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {templates.map((template) => (
              <Link
                href={`/editor/${template.id}`}
                key={template.id}
                className="group block"
              >
                <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 ease-in-out group-hover:shadow-2xl group-hover:-translate-y-1 border-2 border-transparent group-hover:border-primary bg-card">
                  <CardContent className="p-0 relative">
                    <Image
                      src={template.previewImage}
                      alt={`${template.name} template preview`}
                      width={600}
                      height={800}
                      className="w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint="resume cv"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </CardContent>
                  <CardHeader className="flex-grow">
                    <div className="flex justify-between items-center">
                      <CardTitle className="font-headline text-xl">
                        {template.name}
                      </CardTitle>
                      {template.isNew && <Badge variant="destructive">New</Badge>}
                    </div>
                    <p className="text-sm text-muted-foreground pt-1">{template.description}</p>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <footer className="text-center py-6 border-t mt-16">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} CVGenius. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
