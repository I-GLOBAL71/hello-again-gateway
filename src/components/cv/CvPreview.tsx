import type { CVData } from '@/lib/types';
import  { ProfessionalTemplate } from './templates/ProfessionalTemplate';

type CvPreviewProps = {
  cvData: CVData;
  templateId: string;
};

export function CvPreview({ cvData, templateId }: CvPreviewProps) {
  // In a real app, you would switch between different template components
  // based on templateId. For this demo, we'll use one versatile template.
  
  switch (templateId) {
    // Add cases for other templates if they have unique components
    case 'modern':
    case 'classic':
    case 'creative':
    default:
      return <ProfessionalTemplate cvData={cvData} />;
  }
}
