'use client';

import type { CVData, Education, Experience } from '@/lib/types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Plus, Sparkles, Trash2, User } from 'lucide-react';
import { useState, useRef } from 'react';
import { summarizeCv } from '@/ai/flows/cv-summary';
import { useToast } from '@/hooks/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getDictionary } from '@/get-dictionary';

type CvFormProps = {
  cvData: CVData;
  setCvData: React.Dispatch<React.SetStateAction<CVData>>;
  dictionary: Awaited<ReturnType<typeof getDictionary>>['form'];
};

export function CvForm({ cvData, setCvData, dictionary }: CvFormProps) {
  const [isGeneratingSummary, setIsGeneratingSummary] = useState(false);
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);


  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCvData((prev) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [name]: value },
    }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCvData(prev => ({
          ...prev,
          personalInfo: { ...prev.personalInfo, photo: reader.result as string }
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSummaryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCvData((prev) => ({ ...prev, summary: e.target.value }));
  };

  const handleSkillsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCvData((prev) => ({ ...prev, skills: e.target.value }));
  };
  
  const handleGenerateSummary = async () => {
    setIsGeneratingSummary(true);
    toast({
        title: dictionary.aiGeneratingTitle,
        description: dictionary.aiGeneratingDesc,
    });
    try {
      const cvContent = `
        Experience:
        ${cvData.experience.map(e => `${e.role} at ${e.company}: ${e.description}`).join('\n\n')}
  
        Education:
        ${cvData.education.map(e => `${e.degree} at ${e.institution}: ${e.description}`).join('\n\n')}
  
        Skills:
        ${cvData.skills}
      `;
      const result = await summarizeCv({ cvContent });
      if (result.summary) {
        setCvData(prev => ({ ...prev, summary: result.summary }));
        toast({
            title: dictionary.aiSuccessTitle,
            description: dictionary.aiSuccessDesc,
        });
      }
    } catch (error) {
      console.error("Failed to generate summary:", error);
      toast({
        variant: "destructive",
        title: dictionary.aiErrorTitle,
        description: dictionary.aiErrorDesc,
      });
    } finally {
      setIsGeneratingSummary(false);
    }
  };


  const handleArrayChange = <T extends Experience | Education>(
    arrayName: 'experience' | 'education',
    id: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCvData(prev => ({
      ...prev,
      [arrayName]: prev[arrayName].map(item =>
        item.id === id ? { ...item, [name]: value } : item
      ),
    }));
  };

  const addArrayItem = (arrayName: 'experience' | 'education') => {
    const newItem = {
        id: crypto.randomUUID(),
        ...(arrayName === 'experience' ? 
            { company: '', role: '', startDate: '', endDate: '', description: '' } : 
            { institution: '', degree: '', startDate: '', endDate: '', description: '' })
    };
    setCvData(prev => ({
      ...prev,
      [arrayName]: [...prev[arrayName], newItem],
    }));
  };

  const removeArrayItem = (arrayName: 'experience' | 'education', id: string) => {
    setCvData(prev => ({
      ...prev,
      [arrayName]: prev[arrayName].filter(item => item.id !== id),
    }));
  };
  

  return (
    <Accordion type="multiple" defaultValue={['personal', 'summary', 'experience', 'education', 'skills']} className="w-full">
      <AccordionItem value="personal">
        <AccordionTrigger className='font-headline'>{dictionary.personalDetails}</AccordionTrigger>
        <AccordionContent className="space-y-4">
            <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                    <AvatarImage src={cvData.personalInfo.photo} alt={cvData.personalInfo.name} />
                    <AvatarFallback className="text-3xl"><User /></AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                    <Label>{dictionary.profilePhoto}</Label>
                    <Input id="photo" name="photo" type="file" accept="image/*" onChange={handlePhotoUpload} ref={fileInputRef} className="text-xs"/>
                    <Button variant="link" size="sm" className="p-0 h-auto" onClick={() => setCvData(prev => ({ ...prev, personalInfo: { ...prev.personalInfo, photo: undefined } }))}>
                        {dictionary.removePhoto}
                    </Button>
                </div>
            </div>
          <div className="space-y-2">
            <Label htmlFor="name">{dictionary.fullName}</Label>
            <Input id="name" name="name" value={cvData.personalInfo.name} onChange={handlePersonalInfoChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="title">{dictionary.professionalTitle}</Label>
            <Input id="title" name="title" value={cvData.personalInfo.title} onChange={handlePersonalInfoChange} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">{dictionary.email}</Label>
              <Input id="email" name="email" type="email" value={cvData.personalInfo.email} onChange={handlePersonalInfoChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">{dictionary.phone}</Label>
              <Input id="phone" name="phone" value={cvData.personalInfo.phone} onChange={handlePersonalInfoChange} />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">{dictionary.address}</Label>
            <Input id="address" name="address" value={cvData.personalInfo.address} onChange={handlePersonalInfoChange} />
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="summary">
        <AccordionTrigger className='font-headline'>{dictionary.professionalSummary}</AccordionTrigger>
        <AccordionContent className="space-y-4">
            <Textarea placeholder={dictionary.summaryPlaceholder} value={cvData.summary} onChange={handleSummaryChange} rows={5} />
            <Button onClick={handleGenerateSummary} disabled={isGeneratingSummary} className="w-full">
                <Sparkles className="mr-2 h-4 w-4" />
                {isGeneratingSummary ? dictionary.generating : dictionary.generateWithAI}
            </Button>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="experience">
        <AccordionTrigger className='font-headline'>{dictionary.workExperience}</AccordionTrigger>
        <AccordionContent className="space-y-6">
            {cvData.experience.map((exp, index) => (
                <div key={exp.id} className="space-y-4 p-4 border rounded-lg relative">
                    <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-7 w-7" onClick={() => removeArrayItem('experience', exp.id)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                    <div className="space-y-2">
                        <Label>{dictionary.role}</Label>
                        <Input name="role" value={exp.role} onChange={(e) => handleArrayChange('experience', exp.id, e)} />
                    </div>
                     <div className="space-y-2">
                        <Label>{dictionary.company}</Label>
                        <Input name="company" value={exp.company} onChange={(e) => handleArrayChange('experience', exp.id, e)} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label>{dictionary.startDate}</Label>
                            <Input name="startDate" placeholder={dictionary.startDatePlaceholder} value={exp.startDate} onChange={(e) => handleArrayChange('experience', exp.id, e)} />
                        </div>
                        <div className="space-y-2">
                            <Label>{dictionary.endDate}</Label>
                            <Input name="endDate" placeholder={dictionary.endDatePlaceholder} value={exp.endDate} onChange={(e) => handleArrayChange('experience', exp.id, e)} />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label>{dictionary.description}</Label>
                        <Textarea name="description" value={exp.description} onChange={(e) => handleArrayChange('experience', exp.id, e)} />
                    </div>
                </div>
            ))}
            <Button variant="outline" className="w-full" onClick={() => addArrayItem('experience')}>
                <Plus className="mr-2 h-4 w-4" /> {dictionary.addExperience}
            </Button>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="education">
        <AccordionTrigger className='font-headline'>{dictionary.education}</AccordionTrigger>
        <AccordionContent className="space-y-6">
            {cvData.education.map((edu, index) => (
                <div key={edu.id} className="space-y-4 p-4 border rounded-lg relative">
                    <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-7 w-7" onClick={() => removeArrayItem('education', edu.id)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                    <div className="space-y-2">
                        <Label>{dictionary.degree}</Label>
                        <Input name="degree" value={edu.degree} onChange={(e) => handleArrayChange('education', edu.id, e)} />
                    </div>
                    <div className="space-y-2">
                        <Label>{dictionary.institution}</Label>
                        <Input name="institution" value={edu.institution} onChange={(e) => handleArrayChange('education', edu.id, e)} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label>{dictionary.startDate}</Label>
                            <Input name="startDate" placeholder={dictionary.startDatePlaceholder} value={edu.startDate} onChange={(e) => handleArrayChange('education', edu.id, e)} />
                        </div>
                        <div className="space-y-2">
                            <Label>{dictionary.endDate}</Label>
                            <Input name="endDate" placeholder={dictionary.endDatePlaceholder} value={edu.endDate} onChange={(e) => handleArrayChange('education', edu.id, e)} />
                        </div>
                    </div>
                     <div className="space-y-2">
                        <Label>{dictionary.description}</Label>
                        <Textarea name="description" value={edu.description} onChange={(e) => handleArrayChange('education', edu.id, e)} />
                    </div>
                </div>
            ))}
            <Button variant="outline" className="w-full" onClick={() => addArrayItem('education')}>
                <Plus className="mr-2 h-4 w-4" /> {dictionary.addEducation}
            </Button>
        </AccordionContent>
      </AccordionItem>

       <AccordionItem value="skills">
        <AccordionTrigger className='font-headline'>{dictionary.skills}</AccordionTrigger>
        <AccordionContent>
            <Textarea placeholder={dictionary.skillsPlaceholder} value={cvData.skills} onChange={handleSkillsChange} rows={4}/>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
