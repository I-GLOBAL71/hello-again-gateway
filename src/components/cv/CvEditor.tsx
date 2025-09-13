'use client';

import { useState } from 'react';
import type { CVData, Template } from '@/lib/types';
import { CvForm } from '@/components/cv/CvForm';
import { CvPreview } from '@/components/cv/CvPreview';
import { Button } from '@/components/ui/button';
import { Download, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

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

export function CvEditor({ template }: { template: Template }) {
  const [cvData, setCvData] = useState<CVData>(initialCvData);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-muted/40">
      <div className="no-print lg:w-2/5 lg:max-w-md xl:max-w-lg flex flex-col h-full">
        <header className="p-4 bg-card border-b flex justify-between items-center">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/">
              <ArrowLeft />
              <span className="sr-only">Back to templates</span>
            </Link>
          </Button>
          <h2 className="font-headline text-xl font-semibold">{template.name} Template</h2>
          <Button onClick={handlePrint} size="sm">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </header>
        <div className="overflow-y-auto flex-1 p-4 sm:p-6 bg-card">
            <CvForm cvData={cvData} setCvData={setCvData} />
        </div>
      </div>
      
      <main className="flex-1 p-4 md:p-8 flex justify-center items-start lg:items-center overflow-y-auto">
        <div
          id="cv-preview-wrapper"
          className="w-full lg:h-[90%] aspect-[210/297] bg-white rounded-lg shadow-2xl transition-all"
        >
            <CvPreview cvData={cvData} templateId={template.id} />
        </div>
      </main>
    </div>
  );
}
