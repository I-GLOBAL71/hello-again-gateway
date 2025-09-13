import type { CVData } from '@/lib/types';
import  { ProfessionalTemplate } from './templates/ProfessionalTemplate';
import { MinimalistTemplate } from './templates/MinimalistTemplate';

type CvPreviewProps = {
  cvData: CVData;
  templateId: string;
};

export function CvPreview({ cvData, templateId }: CvPreviewProps) {
  switch (templateId) {
    case 'minimalist':
        return <MinimalistTemplate cvData={cvData} />;
    case 'modern':
    case 'classic':
    case 'creative':
    default:
      return <ProfessionalTemplate cvData={cvData} />;
  }
}
