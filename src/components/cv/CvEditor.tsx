'use client';

import { useState } from 'react';
import type { CVData, Template } from '@/lib/types';
import { CvForm } from '@/components/cv/CvForm';
import { CvPreview } from '@/components/cv/CvPreview';
import { Button } from '@/components/ui/button';
import { Download, ArrowLeft, Eye, Pencil, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from '@/hooks/use-mobile';
import { templates } from '@/lib/templates';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';


const initialCvData: CVData = {
  personalInfo: {
    name: 'Alexandre Dubois',
    title: 'Développeur Web Full-Stack',
    email: 'alex.dubois@email.com',
    phone: '+33 6 12 34 56 78',
    address: 'Paris, France',
  },
  summary:
    "Développeur web passionné avec 5 ans d'expérience dans la création d'applications web robustes et évolutives. Maîtrise de l'écosystème JavaScript, avec une expertise particulière en React et Node.js. Vous pouvez aussi générer un résumé avec l'IA !",
  experience: [
    {
      id: 'exp1',
      company: 'Innovatech Solutions',
      role: 'Développeur Web Senior',
      startDate: '2021-01',
      endDate: 'Présent',
      description:
        "• Conception et développement d'une plateforme SaaS.\n• Mentorat de développeurs juniors.\n• Optimisation des performances de l'application.",
    },
     {
      id: 'exp2',
      company: 'Web Agency Pro',
      role: 'Développeur Full-Stack',
      startDate: '2019-06',
      endDate: '2020-12',
      description:
        "• Création de sites web pour divers clients.\n• Intégration d'API tierces.",
    },
  ],
  education: [
    {
      id: 'edu1',
      institution: 'Grande École du Numérique',
      degree: "Master en Ingénierie Logicielle",
      startDate: '2017-09',
      endDate: '2019-05',
      description: '• Spécialisation en architectures web.',
    },
  ],
  skills: 'React, Next.js, TypeScript, Node.js, Express, MongoDB, PostgreSQL, Docker, Tailwind CSS',
};

type CvEditorProps = {
    template: Template;
    dictionary: Awaited<ReturnType<typeof getDictionary>>;
    lang: Locale;
}

export function CvEditor({ template, dictionary, lang }: CvEditorProps) {
  const [cvData, setCvData] = useState<CVData>(initialCvData);
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>(template.id);
  const isMobile = useIsMobile();

  const handlePrint = () => {
    //
    const printContainer = document.querySelector('.print-container');
    if (printContainer) {
      document.body.appendChild(printContainer.cloneNode(true));
    }


    if (isMobile) {
      // On mobile, we need to ensure the preview is visible before printing.
      const previewTab = document.querySelector('[data-radix-collection-item][value="preview"]') as HTMLElement | null;
      if (previewTab) {
        previewTab.click();
        // Allow time for the tab to switch before printing
        setTimeout(() => {
          window.print();
        }, 200);
      } else {
        // if the tab is not found, just print
        window.print();
      }
    } else {
      window.print();
    }
  };

  const selectedTemplate = templates.find(t => t.id === selectedTemplateId) || template;

  const EditorView = (
    <div className="no-print lg:w-[45%] lg:max-w-2xl flex flex-col h-full">
      <header className="p-4 bg-card border-b flex justify-between items-center shrink-0">
        <Button variant="ghost" size="icon" asChild>
          <Link href={`/${lang}/`}>
            <ArrowLeft />
            <span className="sr-only">{dictionary.editor.backToTemplates}</span>
          </Link>
        </Button>
        <h2 className="font-headline text-xl font-semibold">{template.name} {dictionary.editor.template}</h2>
        <Button onClick={handlePrint} size="sm">
          <Download className="mr-2 h-4 w-4" />
          {dictionary.editor.download}
        </Button>
      </header>
      <div className="overflow-y-auto flex-1 p-4 sm:p-6 bg-card">
          <CvForm cvData={cvData} setCvData={setCvData} dictionary={dictionary.form} />
      </div>
    </div>
  );

    const TemplateSwitcher = (
        <div className="no-print absolute top-4 left-1/2 -translate-x-1/2 z-10">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="bg-white/80 backdrop-blur-sm">
                        {selectedTemplate.name} {dictionary.editor.template}
                        <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {templates.map(t => (
                        <DropdownMenuItem key={t.id} onSelect={() => setSelectedTemplateId(t.id)}>
                            {t.name}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );

  const PreviewView = (
     <div className="flex-1 p-4 md:p-8 flex justify-center items-start lg:items-center overflow-y-auto bg-gray-900/5 relative print-container">
        {TemplateSwitcher}
        <div
          id="cv-preview-wrapper"
          className="w-full max-w-4xl lg:h-full lg:max-h-[95vh] aspect-[210/297] bg-white rounded-lg shadow-2xl transition-transform duration-300 ease-in-out lg:group-focus-within/editor:scale-[1.02] origin-top"
        >
            <div id="cv-preview" className="w-full h-full transform-gpu overflow-hidden rounded-lg">
                 <CvPreview cvData={cvData} templateId={selectedTemplateId} />
            </div>
        </div>
      </div>
  );

  if (isMobile) {
    return (
        <Tabs defaultValue="editor" className="flex flex-col h-screen w-full bg-muted/40">
            <header className="no-print p-2 bg-card border-b flex justify-between items-center shrink-0">
                <Button variant="ghost" size="icon" asChild>
                    <Link href={`/${lang}/`}>
                    <ArrowLeft />
                    <span className="sr-only">{dictionary.editor.backToTemplates}</span>
                    </Link>
                </Button>
                <TabsList className="grid w-full max-w-xs grid-cols-2">
                    <TabsTrigger value="editor"><Pencil className="mr-2"/> {dictionary.editor.formEditor}</TabsTrigger>
                    <TabsTrigger value="preview"><Eye className="mr-2"/> {dictionary.editor.preview}</TabsTrigger>
                </TabsList>
                <Button onClick={handlePrint} size="icon" variant="outline">
                    <Download />
                    <span className="sr-only">{dictionary.editor.download}</span>
                </Button>
            </header>
            <TabsContent value="editor" className="flex-1 overflow-y-auto bg-card data-[state=inactive]:hidden">
                 <div className="p-4 sm:p-6">
                    <h2 className="font-headline text-xl font-semibold mb-4 text-center">{template.name} {dictionary.editor.template}</h2>
                    <CvForm cvData={cvData} setCvData={setCvData} dictionary={dictionary.form} />
                 </div>
            </TabsContent>
            <TabsContent value="preview" className="flex-1 overflow-y-auto data-[state=inactive]:hidden">
                {PreviewView}
            </TabsContent>
        </Tabs>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-muted/40 group/editor">
      {EditorView}
      {PreviewView}
    </div>
  );
}
