import { CvEditor } from '@/components/cv/CvEditor';
import { templates } from '@/lib/templates';
import { notFound } from 'next/navigation';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';

type EditorPageProps = {
  params: {
    templateId: string;
    lang: Locale;
  };
};

export function generateStaticParams({ params: { lang } }: { params: { lang: Locale } }) {
  return templates.map((template) => ({
    templateId: template.id,
  }))
}

export default async function EditorPage({ params }: EditorPageProps) {
  const template = templates.find(t => t.id === params.templateId);
  const dictionary = await getDictionary(params.lang);

  if (!template) {
    notFound();
  }

  return <CvEditor template={template} dictionary={dictionary} lang={params.lang} />;
}
