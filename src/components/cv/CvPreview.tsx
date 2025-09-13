import type { CVData } from '@/lib/types';
import { ProfessionalTemplate } from './templates/ProfessionalTemplate';
import { MinimalistTemplate } from './templates/MinimalistTemplate';
import { CreativeTemplate } from './templates/CreativeTemplate';
import { ModernTemplate } from './templates/ModernTemplate';
import { CorporateTemplate } from './templates/CorporateTemplate';
import { AcademicTemplate } from './templates/AcademicTemplate';
import { ExecutiveTemplate } from './templates/ExecutiveTemplate';
import { ElegantTemplate } from './templates/ElegantTemplate';
import { BoldTemplate } from './templates/BoldTemplate';
import { GeometricTemplate } from './templates/GeometricTemplate';
import { InfoTemplate } from './templates/InfoTemplate';
import { SharpTemplate } from './templates/SharpTemplate';
import { GalleryTemplate } from './templates/GalleryTemplate';
import { ImpactTemplate } from './templates/ImpactTemplate';

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
    case 'corporate':
        return <CorporateTemplate cvData={cvData} />;
    case 'academic':
        return <AcademicTemplate cvData={cvData} />;
    case 'executive':
        return <ExecutiveTemplate cvData={cvData} />;
    case 'elegant':
        return <ElegantTemplate cvData={cvData} />;
    case 'bold':
        return <BoldTemplate cvData={cvData} />;
    case 'geometric':
        return <GeometricTemplate cvData={cvData} />;
    case 'info':
        return <InfoTemplate cvData={cvData} />;
    case 'sharp':
        return <SharpTemplate cvData={cvData} />;
    case 'gallery':
        return <GalleryTemplate cvData={cvData} />;
    case 'impact':
        return <ImpactTemplate cvData={cvData} />;
    case 'classic':
    default:
      return <ProfessionalTemplate cvData={cvData} />;
  }
}
