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

type CvFormProps = {
  cvData: CVData;
  setCvData: React.Dispatch<React.SetStateAction<CVData>>;
};

export function CvForm({ cvData, setCvData }: CvFormProps) {
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
        title: "Generating Summary...",
        description: "The AI is crafting a professional summary for you.",
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
            title: "Summary Generated!",
            description: "Your professional summary has been updated.",
        });
      }
    } catch (error) {
      console.error("Failed to generate summary:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to generate summary. Please try again.",
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
        <AccordionTrigger className='font-headline'>Personal Details</AccordionTrigger>
        <AccordionContent className="space-y-4">
            <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                    <AvatarImage src={cvData.personalInfo.photo} alt={cvData.personalInfo.name} />
                    <AvatarFallback className="text-3xl"><User /></AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                    <Label>Profile Photo</Label>
                    <Input id="photo" name="photo" type="file" accept="image/*" onChange={handlePhotoUpload} ref={fileInputRef} className="text-xs"/>
                    <Button variant="link" size="sm" className="p-0 h-auto" onClick={() => setCvData(prev => ({ ...prev, personalInfo: { ...prev.personalInfo, photo: undefined } }))}>
                        Remove Photo
                    </Button>
                </div>
            </div>
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" name="name" value={cvData.personalInfo.name} onChange={handlePersonalInfoChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="title">Professional Title</Label>
            <Input id="title" name="title" value={cvData.personalInfo.title} onChange={handlePersonalInfoChange} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" value={cvData.personalInfo.email} onChange={handlePersonalInfoChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" value={cvData.personalInfo.phone} onChange={handlePersonalInfoChange} />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input id="address" name="address" value={cvData.personalInfo.address} onChange={handlePersonalInfoChange} />
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="summary">
        <AccordionTrigger className='font-headline'>Professional Summary</AccordionTrigger>
        <AccordionContent className="space-y-4">
            <Textarea placeholder="Your professional summary..." value={cvData.summary} onChange={handleSummaryChange} rows={5} />
            <Button onClick={handleGenerateSummary} disabled={isGeneratingSummary} className="w-full">
                <Sparkles className="mr-2 h-4 w-4" />
                {isGeneratingSummary ? 'Generating...' : 'Generate with AI'}
            </Button>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="experience">
        <AccordionTrigger className='font-headline'>Work Experience</AccordionTrigger>
        <AccordionContent className="space-y-6">
            {cvData.experience.map((exp, index) => (
                <div key={exp.id} className="space-y-4 p-4 border rounded-lg relative">
                    <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-7 w-7" onClick={() => removeArrayItem('experience', exp.id)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                    <div className="space-y-2">
                        <Label>Role</Label>
                        <Input name="role" value={exp.role} onChange={(e) => handleArrayChange('experience', exp.id, e)} />
                    </div>
                     <div className="space-y-2">
                        <Label>Company</Label>
                        <Input name="company" value={exp.company} onChange={(e) => handleArrayChange('experience', exp.id, e)} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label>Start Date</Label>
                            <Input name="startDate" placeholder='YYYY-MM' value={exp.startDate} onChange={(e) => handleArrayChange('experience', exp.id, e)} />
                        </div>
                        <div className="space-y-2">
                            <Label>End Date</Label>
                            <Input name="endDate" placeholder='YYYY-MM or Present' value={exp.endDate} onChange={(e) => handleArrayChange('experience', exp.id, e)} />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label>Description</Label>
                        <Textarea name="description" value={exp.description} onChange={(e) => handleArrayChange('experience', exp.id, e)} />
                    </div>
                </div>
            ))}
            <Button variant="outline" className="w-full" onClick={() => addArrayItem('experience')}>
                <Plus className="mr-2 h-4 w-4" /> Add Experience
            </Button>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="education">
        <AccordionTrigger className='font-headline'>Education</AccordionTrigger>
        <AccordionContent className="space-y-6">
            {cvData.education.map((edu, index) => (
                <div key={edu.id} className="space-y-4 p-4 border rounded-lg relative">
                    <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-7 w-7" onClick={() => removeArrayItem('education', edu.id)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                    <div className="space-y-2">
                        <Label>Degree</Label>
                        <Input name="degree" value={edu.degree} onChange={(e) => handleArrayChange('education', edu.id, e)} />
                    </div>
                    <div className="space-y-2">
                        <Label>Institution</Label>
                        <Input name="institution" value={edu.institution} onChange={(e) => handleArrayChange('education', edu.id, e)} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label>Start Date</Label>
                            <Input name="startDate" placeholder='YYYY-MM' value={edu.startDate} onChange={(e) => handleArrayChange('education', edu.id, e)} />
                        </div>
                        <div className="space-y-2">
                            <Label>End Date</Label>
                            <Input name="endDate" placeholder='YYYY-MM' value={edu.endDate} onChange={(e) => handleArrayChange('education', edu.id, e)} />
                        </div>
                    </div>
                     <div className="space-y-2">
                        <Label>Description</Label>
                        <Textarea name="description" value={edu.description} onChange={(e) => handleArrayChange('education', edu.id, e)} />
                    </div>
                </div>
            ))}
            <Button variant="outline" className="w-full" onClick={() => addArrayItem('education')}>
                <Plus className="mr-2 h-4 w-4" /> Add Education
            </Button>
        </AccordionContent>
      </AccordionItem>

       <AccordionItem value="skills">
        <AccordionTrigger className='font-headline'>Skills</AccordionTrigger>
        <AccordionContent>
            <Textarea placeholder="List your skills, separated by commas..." value={cvData.skills} onChange={handleSkillsChange} rows={4}/>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
