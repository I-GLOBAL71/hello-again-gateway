import type { CVData } from '@/lib/types';
import { ProfessionalTemplate } from './templates/ProfessionalTemplate';
import { MinimalistTemplate } from './templates/MinimalistTemplate';
import { CreativeTemplate } from './templates/CreativeTemplate';
import { ModernTemplate } from './templates/ModernTemplate';

type CvPreviewProps = {
  cvData: CVData;
  templateId: string;
};

export function CvPreview({ cvData, templateId }: CvPreviewProps) {
  switch (templateId) {
    case 'minimalist':
      return <MinimalistTemplate cvData={cvData} />;
    case 'modern':
      return <ModernTemplate cvData={cvData} />;
    case 'creative':
      return <CreativeTemplate cvData={cvData} />;
    case 'classic':
    default:
      return <ProfessionalTemplate cvData={cvData} />;
  }
}
