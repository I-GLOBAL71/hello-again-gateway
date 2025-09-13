import { CvEditor } from '@/components/cv/CvEditor';
import { templates } from '@/lib/templates';
import { notFound } from 'next/navigation';

type EditorPageProps = {
  params: {
    templateId: string;
  };
};

export function generateStaticParams() {
  return templates.map((template) => ({
    templateId: template.id,
  }))
}

export default function EditorPage({ params }: EditorPageProps) {
  const template = templates.find(t => t.id === params.templateId);

  if (!template) {
    notFound();
  }

  return <CvEditor template={template} />;
}
